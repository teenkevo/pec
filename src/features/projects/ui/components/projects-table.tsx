"use client";

import { useState, useMemo } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

import type { PROJECT_TYPE } from "../../lib/queries";
import { convertToUSD, formatCurrencyAsUSD } from "@/lib/currency";

/* ---------- Helper Functions ---------- */
const formatCurrency = (value: number, currency: string) => {
  return formatCurrencyAsUSD(value, currency);
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const phaseLabels: Record<string, string> = {
  planning: "Planning",
  design: "Design",
  construction: "Construction",
  operations: "Operations",
  decommissioning: "Decommissioning",
};

const getUniqueIndustries = (projects: PROJECT_TYPE[]) => {
  const industries = projects.map((p) => p.industry.title);
  return [...new Set(industries)].sort();
};

/* ---------- Project Details Content Component ---------- */
function ProjectDetailsContent({ project }: { project: PROJECT_TYPE }) {
  return (
    <div className="space-y-4">
      {project?.description && (
        <section>
          <h4 className="font-semibold mb-2">Description</h4>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </section>
      )}
      {project?.challenge && (
        <section>
          <h4 className="font-semibold mb-2">Challenge</h4>
          <p className="text-sm text-muted-foreground">{project.challenge}</p>
        </section>
      )}
      {project?.solution && (
        <section>
          <h4 className="font-semibold mb-2">Solution</h4>
          <p className="text-sm text-muted-foreground">{project.solution}</p>
        </section>
      )}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
        <div>
          <h4 className="font-semibold">Location</h4>
          <p className="text-sm">
            {project?.location.city}, {project?.location.country}
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Value of Services (PEC)</h4>
          <p className="text-sm">
            {project?.valueOfService
              ? formatCurrency(
                  project.valueOfService.value,
                  project.valueOfService.currency
                )
              : "-"}
          </p>
          {project?.valueOfService &&
            project.valueOfService.currency !== "USD" && (
              <p className="text-xs text-muted-foreground mt-1">
                Original: {project.valueOfService.value.toLocaleString()}{" "}
                {project.valueOfService.currency}
              </p>
            )}
        </div>
        <div>
          <h4 className="font-semibold">Start Date</h4>
          <p className="text-sm">
            {project?.startDate ? formatDate(project.startDate) : "-"}
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Status</h4>
          {project?.isCompleted !== undefined ? (
            <Badge variant={project.isCompleted ? "default" : "outline"}>
              {project.isCompleted ? "Completed" : "Ongoing"}
            </Badge>
          ) : (
            <span className="text-sm text-muted-foreground">-</span>
          )}
        </div>
      </div>
      {project?.involvedPhases && project.involvedPhases.length > 0 && (
        <section className="pt-4 border-t">
          <h4 className="font-semibold mb-2">Involved Phases & Expertise</h4>
          <div className="space-y-3">
            {project.involvedPhases.map((phase, index) => (
              <div key={index} className="border rounded-lg p-3">
                <h5 className="font-medium text-sm mb-2">
                  {phaseLabels[phase.phase] ?? phase.phase}
                </h5>
                <div className="flex flex-wrap gap-1">
                  {phase.expertiseApplied &&
                  phase.expertiseApplied.length > 0 ? (
                    phase.expertiseApplied.map((expertise) => (
                      <Badge
                        key={expertise._id}
                        variant="outline"
                        className="text-xs"
                      >
                        {expertise.title}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      No expertise applied
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

/* ---------- Component ---------- */
export default function ProjectsTable({
  projects,
  industry,
}: {
  projects: PROJECT_TYPE[];
  industry?: string;
}) {
  const isMobile = useIsMobile();

  /* Table state */
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  /* Dialog state */
  const [selectedProject, setSelectedProject] = useState<PROJECT_TYPE | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const industryOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.industry.title));
    return Array.from(set).sort();
  }, [projects]);

  /* Column definition – wrapped in useMemo so it can access setters safely */
  const columns: ColumnDef<PROJECT_TYPE>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Project Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => {
          const p = row.original;
          return (
            <div className="min-w-[400px] max-w-[500px] px-4">
              <div className="font-medium text-sm">{p.title}</div>
              <div className="text-xs mt-2 text-muted-foreground">
                {p.client.name}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "industry.title",
        header: "Industry",
        cell: ({ row }) => (
          <Badge variant="secondary">{row.original.industry.title}</Badge>
        ),
      },
      {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => (
          <span>
            {row.original.location.city}, {row.original.location.country}
          </span>
        ),
      },
      {
        accessorKey: "valueOfService",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Value of Services (PEC)
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => {
          const valueOfService = row.original.valueOfService;
          if (!valueOfService)
            return <span className="text-muted-foreground">-</span>;
          return (
            <div className="font-medium min-w-[100px] max-w-[200px] flex flex-col">
              {formatCurrency(valueOfService.value, valueOfService.currency)}
              {valueOfService.currency !== "USD" && (
                <span className="flex text-xs text-muted-foreground">
                  {valueOfService.currency}{" "}
                  {valueOfService.value.toLocaleString()}
                </span>
              )}
            </div>
          );
        },
        sortingFn: (a, b) => {
          const aValue = a.original.valueOfService
            ? convertToUSD(
                a.original.valueOfService.value,
                a.original.valueOfService.currency
              )
            : 0;
          const bValue = b.original.valueOfService
            ? convertToUSD(
                b.original.valueOfService.value,
                b.original.valueOfService.currency
              )
            : 0;
          return aValue - bValue;
        },
      },
      {
        accessorKey: "startDate",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Start Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => {
          const startDate = row.original.startDate;
          if (!startDate)
            return <span className="text-muted-foreground">-</span>;
          return formatDate(startDate);
        },
      },
      {
        accessorKey: "isCompleted",
        header: "Status",
        cell: ({ row }) => {
          const isCompleted = row.original.isCompleted;
          if (isCompleted === undefined)
            return <span className="text-muted-foreground">-</span>;
          return (
            <Badge variant={isCompleted ? "default" : "outline"}>
              {isCompleted ? "Completed" : "Ongoing"}
            </Badge>
          );
        },
      },
      {
        id: "description",
        header: "Description",
        enableSorting: false,
        cell: ({ row }) => (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedProject(row.original);
              setIsDialogOpen(true);
            }}
          >
            View
          </Button>
        ),
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const p = row.original;
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(p._id)}
                >
                  Copy project ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  View project
                </DropdownMenuItem>
                <DropdownMenuItem>Edit project</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [setIsDialogOpen]
  );

  const filteredData = useMemo(() => {
    let filtered = projects;
    // Filter by industry
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter((project) =>
        selectedIndustries.includes(project.industry.title)
      );
    }
    // Filter by status
    if (selectedStatus !== "all") {
      filtered = filtered.filter((project) => {
        if (selectedStatus === "completed") {
          return project.isCompleted === true;
        } else if (selectedStatus === "ongoing") {
          return project.isCompleted === false;
        }
        return true;
      });
    }
    return filtered;
  }, [selectedIndustries, selectedStatus, projects]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    initialState: {
      pagination: {
        pageSize: 30, // Change this number to set items per page
      },
    },
  });

  return (
    <div className="w-full space-y-4 p-4 md:px-14">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">All {industry} Projects</h1>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter projects..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("title")?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />

        {/* Status Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-transparent">
              Status
              {selectedStatus !== "all" && (
                <Badge variant="secondary" className="ml-2">
                  1
                </Badge>
              )}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={selectedStatus === "all"}
              onCheckedChange={() => setSelectedStatus("all")}
            >
              All Projects
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedStatus === "ongoing"}
              onCheckedChange={() => setSelectedStatus("ongoing")}
            >
              Ongoing
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedStatus === "completed"}
              onCheckedChange={() => setSelectedStatus("completed")}
            >
              Completed
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Industry Filter */}
        {industryOptions.length > 1 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-transparent">
                Industry
                {selectedIndustries.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedIndustries.length}
                  </Badge>
                )}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Filter by Industry</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {industryOptions.map((industry) => (
                <DropdownMenuCheckboxItem
                  key={industry}
                  checked={selectedIndustries.includes(industry)}
                  onCheckedChange={(checked) =>
                    setSelectedIndustries((old) =>
                      checked
                        ? [...old, industry]
                        : old.filter((i) => i !== industry)
                    )
                  }
                >
                  {industry}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedIndustries.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSelectedIndustries([])}>
                    Clear filters
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-transparent">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((c) => c.getCanHide())
              .map((c) => (
                <DropdownMenuCheckboxItem
                  key={c.id}
                  className="capitalize"
                  checked={c.getIsVisible()}
                  onCheckedChange={(val) => c.toggleVisibility(!!val)}
                >
                  {c.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-2 py-4">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="h-8 w-[70px] rounded border border-input bg-background px-3 py-1 text-sm"
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Description dialog/sheet - responsive */}
      {isMobile ? (
        <Sheet open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <SheetContent side="bottom" className="h-[85vh] flex flex-col">
            <SheetHeader className="flex-shrink-0">
              <SheetTitle className="text-left leading-snug">
                {selectedProject?.title}
              </SheetTitle>
              <SheetDescription className="text-left">
                {selectedProject?.client.name} •{" "}
                {selectedProject?.industry.title}
              </SheetDescription>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto pr-2">
              {selectedProject && (
                <ProjectDetailsContent project={selectedProject} />
              )}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
            <DialogHeader className="flex-shrink-0">
              <DialogTitle className="leading-snug">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription>
                {selectedProject?.client.name} •{" "}
                {selectedProject?.industry.title}
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto pr-2">
              {selectedProject && (
                <ProjectDetailsContent project={selectedProject} />
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

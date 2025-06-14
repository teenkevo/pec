import { PROJECT_PHASES } from "@/sanity/schemaTypes/project";
import { SINGLE_PROJECT_RESULT } from "./queries";
import { urlFor } from "@/sanity/lib/image";

export type ProjectPhaseValue = (typeof PROJECT_PHASES)[number]["value"];
export type ProjectStageTitle = (typeof PROJECT_PHASES)[number]["title"];

const PHASE_MAPPING: Record<ProjectPhaseValue, ProjectStageTitle> =
  PROJECT_PHASES.reduce(
    (acc, phase) => {
      acc[phase.value] = phase.title;
      return acc;
    },
    {} as Record<ProjectPhaseValue, ProjectStageTitle>
  );

interface Expertise {
  title: string;
  description: string;
  image: string;
}

interface StageDetails {
  expertise: Expertise[];
  isInProject: boolean;
}

export interface TransformedProject {
  title: string;
  location: string;
  clientName: string;
  funder?: string;
  clientNarrative: string;
  activeStage: ProjectStageTitle | null;
  imageSrc: string;
  imageAlt: string;
  projectImages: {
    src: string;
    alt: string;
    description: string;
  }[];
  stageDetails: Record<ProjectStageTitle, StageDetails>;
  industry: string;
  valueOfServices?: number;
  currency?: string;
  challenge?: string;
  solution?: string;
}

export function transformProjectData(
  project: SINGLE_PROJECT_RESULT
): TransformedProject {
  // Get all stage titles from PROJECT_PHASES
  const allStages: ProjectStageTitle[] = PROJECT_PHASES.map(
    (phase) => phase.title
  );

  // Initialize stage details with all stages marked as not in project
  const stageDetails: Record<ProjectStageTitle, StageDetails> = {} as Record<
    ProjectStageTitle,
    StageDetails
  >;

  allStages.forEach((stage) => {
    stageDetails[stage] = {
      expertise: [],
      isInProject: false,
    };
  });

  // Process involved phases and populate stage details
  let activeStage: ProjectStageTitle | null = null;

  if (project.involvedPhases && project.involvedPhases.length > 0) {
    project.involvedPhases.forEach((phase) => {
      const mappedStage = PHASE_MAPPING[phase.phase as ProjectPhaseValue];
      if (mappedStage) {
        stageDetails[mappedStage] = {
          expertise: phase.expertiseApplied.map((expertise) => ({
            title: expertise.title,
            description: expertise.description || "",
            image: expertise.mainImage
              ? urlFor(expertise.mainImage).url()
              : "/placeholder.svg",
          })),
          isInProject: true,
        };

        if (!activeStage) {
          activeStage = mappedStage;
        }
      }
    });
  }

  // Transform project images
  const projectImages =
    project.images?.map((img) => ({
      src: urlFor(img.image).width(300).height(300).url(),
      alt: img.caption || project.title,
      description: img.caption || "",
    })) || [];

  return {
    title: project.title,
    location: `${project.location.city}, ${project.location.country}`,
    clientName: project.client?.name || "",
    funder: project.funder,
    clientNarrative: project.description || "",
    activeStage,
    imageSrc: urlFor(project.mainImage).url(),
    imageAlt: project.title,
    projectImages,
    stageDetails,
    industry: project.industry?.title || "",
    valueOfServices: project.valueOfService?.value,
    currency: project.valueOfService?.currency,
    challenge: project.challenge,
    solution: project.solution,
  };
}

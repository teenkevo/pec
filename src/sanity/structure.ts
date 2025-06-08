import { StructureResolver } from "sanity/structure";
import {
  ProjectsIcon,
  CaseIcon,
  BulbOutlineIcon,
  UsersIcon,
  InfoOutlineIcon,
  DocumentIcon,
  FolderIcon,
} from "@sanity/icons";

const SINGLETON_TYPES = new Set(["aboutUs"]);

const ABOUT_US_ID = "aboutUs";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("PEC Content")
    .items([
      // SINGLETONS 
      S.listItem()
        .title("About Us")
        .id(ABOUT_US_ID)
        .icon(InfoOutlineIcon)
        .child(
          S.document()
            .schemaType("aboutUs")
            .documentId(ABOUT_US_ID)
            .title("About Us")
        ),

      S.divider(),

      //MAIN CONTENT 
      S.documentTypeListItem("project").title("Projects").icon(ProjectsIcon),

      S.documentTypeListItem("industry").title("Industries").icon(CaseIcon),

      S.documentTypeListItem("expertise")
        .title("Areas of Expertise")
        .icon(BulbOutlineIcon),

      S.divider(),

      //PEOPLE & ORGANIZATIONS
      S.documentTypeListItem("team").title("Team Members").icon(UsersIcon),

      S.documentTypeListItem("client").title("Clients").icon(FolderIcon),

      S.divider(),

      // OTHER CONTENT TYPES 

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "project",
            "industry",
            "expertise",
            "team",
            "client",
            "aboutUs",
          ].includes(listItem.getId()!)
      ),
    ]);

export { SINGLETON_TYPES };

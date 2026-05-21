import type { Project, ProjectStatus, ProjectType } from "@/types/project";

export type ProjectFilterOptions = {
  query?: string;
  type?: ProjectType | "All";
  status?: ProjectStatus | "All";
};

export type SearchableProject = Pick<
  Project,
  | "title"
  | "summary"
  | "type"
  | "status"
  | "proofPoint"
  | "techStack"
  | "keywords"
>;

function normalise(value: string) {
  return value.trim().toLowerCase();
}

export function projectMatchesSearch(
  project: SearchableProject,
  query?: string,
) {
  const normalisedSearch = normalise(query ?? "");

  if (normalisedSearch.length === 0) {
    return true;
  }

  const searchableText = [
    project.title,
    project.summary,
    project.type,
    project.status,
    project.proofPoint,
    ...project.techStack,
    ...project.keywords,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalisedSearch);
}

export function filterProjects<TProject extends SearchableProject>(
  projects: readonly TProject[],
  filters: ProjectFilterOptions = {},
) {
  return projects.filter((project) => {
    const matchesSearch = projectMatchesSearch(project, filters.query);

    const matchesType =
      filters.type === undefined ||
      filters.type === "All" ||
      project.type === filters.type;

    const matchesStatus =
      filters.status === undefined ||
      filters.status === "All" ||
      project.status === filters.status;

    return matchesSearch && matchesType && matchesStatus;
  });
}

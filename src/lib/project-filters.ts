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

/**
 * Normalizes a string by trimming surrounding whitespace and converting it to lowercase.
 *
 * @param value - The input string to normalize
 * @returns The input string trimmed and lowercased
 */
function normalise(value: string) {
  return value.trim().toLowerCase();
}

/**
 * Check whether a project matches a text search query.
 *
 * The function normalizes `query` (trim + lowercase). An empty normalized query matches every project.
 *
 * @param project - The project to test; its searchable fields (`title`, `summary`, `type`, `status`, `proofPoint`, `techStack`, `keywords`) are considered.
 * @param query - The search string to match against the project's searchable fields
 * @returns `true` if the normalized `query` is empty or is contained within the project's searchable fields, `false` otherwise.
 */
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

/**
 * Filter a list of projects by a text query, project type, and project status.
 *
 * @param projects - The array of searchable projects to filter
 * @param filters - Optional filter criteria. `query` is a text search; `type` and `status` may be a specific value, `undefined`, or `"All"` — `undefined` and `"All"` mean no filtering on that field.
 * @returns The subset of `projects` that match the text query (if provided) and whose `type` and `status` satisfy the provided filters
 */
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

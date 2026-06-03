"use client";

import { useMemo, useState } from "react";

import { ProjectFilters } from "@/components/projects/project-filters";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ProjectSearch } from "@/components/projects/project-search";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { filterProjects } from "@/lib/project-filters";
import type { Project, ProjectStatus, ProjectType } from "@/types/project";

type ProjectExplorerProps = {
  projects: Project[];
};

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState<ProjectType | "All">("All");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "All">(
    "All",
  );

  const filteredProjects = useMemo(
    () =>
      filterProjects(projects, {
        query: searchTerm,
        type: activeType,
        status: activeStatus,
      }),
    [activeStatus, activeType, projects, searchTerm],
  );

  const hasActiveFilters =
    searchTerm.trim().length > 0 ||
    activeType !== "All" ||
    activeStatus !== "All";

  function resetFilters() {
    setSearchTerm("");
    setActiveType("All");
    setActiveStatus("All");
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <Card className="bg-card/80">
        <CardContent className="space-y-6 p-5 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Find a project
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Search by title, technology, project type, or keyword.
              </p>
            </div>

            {hasActiveFilters ? (
              <Button type="button" variant="outline" onClick={resetFilters}>
                Reset filters
              </Button>
            ) : null}
          </div>

          <ProjectSearch value={searchTerm} onChange={setSearchTerm} />

          <ProjectFilters
            activeType={activeType}
            activeStatus={activeStatus}
            onTypeChange={setActiveType}
            onStatusChange={setActiveStatus}
          />

          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">
              {filteredProjects.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-foreground">
              {projects.length}
            </span>{" "}
            projects.
          </p>
        </CardContent>
      </Card>

      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}

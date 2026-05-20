import type { ProjectStatus, ProjectType } from "@/types/project";
import { projectStatuses, projectTypes } from "@/types/project";
import { Button } from "@/components/ui/button";

type ProjectFiltersProps = {
  activeType: ProjectType | "All";
  activeStatus: ProjectStatus | "All";
  onTypeChange: (type: ProjectType | "All") => void;
  onStatusChange: (status: ProjectStatus | "All") => void;
};

export function ProjectFilters({
  activeType,
  activeStatus,
  onTypeChange,
  onStatusChange,
}: ProjectFiltersProps) {
  const typeOptions: Array<ProjectType | "All"> = ["All", ...projectTypes];
  const statusOptions: Array<ProjectStatus | "All"> = [
    "All",
    ...projectStatuses,
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Filter by type
        </p>
        <div className="flex flex-wrap gap-2">
          {typeOptions.map((type) => (
            <Button
              key={type}
              type="button"
              size="sm"
              variant={activeType === type ? "default" : "outline"}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Filter by status
        </p>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((status) => (
            <Button
              key={status}
              type="button"
              size="sm"
              variant={activeStatus === status ? "default" : "outline"}
              onClick={() => onStatusChange(status)}
            >
              {status}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

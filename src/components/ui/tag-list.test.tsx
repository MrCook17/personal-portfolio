import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TagList } from "@/components/ui/tag-list";

describe("TagList", () => {
  it("renders tags as a semantic list", () => {
    render(<TagList tags={["C#", "WinForms", "SQL"]} />);

    const list = screen.getByRole("list");

    expect(list.tagName).toBe("UL");
    expect(within(list).getAllByRole("listitem")).toHaveLength(3);
  });

  it("adds extracted text separation between adjacent tags", () => {
    render(<TagList tags={["C#", "WinForms", "SQL"]} />);

    expect(screen.getByRole("list").textContent).toBe("C#, WinForms, SQL");
  });
});

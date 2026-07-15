import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CaseStudySummaryCards } from "@/components/case-studies/case-study-summary-cards";

const summary = {
  role: "Sole developer",
  timeline: "Six weeks",
  problem: "Manual checks were slow.",
  approach: "Built a tested API.",
  outcome: "Created a finished case study.",
};

describe("CaseStudySummaryCards", () => {
  it("renders summary labels without creating repeated section headings", () => {
    render(<CaseStudySummaryCards summary={summary} />);

    expect(screen.getByText("Problem").tagName).toBe("DT");
    expect(screen.getByText("Approach").tagName).toBe("DT");
    expect(screen.getByText("Outcome").tagName).toBe("DT");
    expect(screen.queryByRole("heading", { name: "Problem" })).toBeNull();
    expect(screen.queryByRole("heading", { name: "Approach" })).toBeNull();
    expect(screen.queryByRole("heading", { name: "Outcome" })).toBeNull();
  });
});

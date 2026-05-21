import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("combines class names", () => {
    expect(cn("rounded-lg", "border", "p-4")).toBe("rounded-lg border p-4");
  });

  it("ignores false, null and undefined values", () => {
    expect(cn("base", false && "hidden", null, undefined, "visible")).toBe(
      "base visible",
    );
  });

  it("merges conflicting Tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});

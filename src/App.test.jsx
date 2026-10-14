import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("App Component", () => {
  it("should render Code bless me heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /code bless me/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

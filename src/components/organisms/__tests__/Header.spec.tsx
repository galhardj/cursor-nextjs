import { render, screen } from "@testing-library/react";
import Header from "@/components/organisms/Header";

describe("Header", () => {
  it("renders logo text", () => {
    render(<Header />);
    expect(screen.getByText(/pret/i)).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
  });
});

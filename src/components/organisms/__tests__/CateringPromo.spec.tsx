import { render, screen } from "@testing-library/react";
import CateringPromo from "@/components/organisms/CateringPromo";
import { CATERING_PROMO } from "@/constants/catering";

describe("CateringPromo", () => {
  it("renders heading and copy from constants", () => {
    render(<CateringPromo />);
    expect(
      screen.getByRole("heading", { name: CATERING_PROMO.heading }),
    ).toBeInTheDocument();
    expect(screen.getByText(CATERING_PROMO.lead)).toBeInTheDocument();
    expect(screen.getByText(CATERING_PROMO.body)).toBeInTheDocument();
  });

  it("renders CTA link with correct href and label", () => {
    render(<CateringPromo />);
    const link = screen.getByRole("link", { name: CATERING_PROMO.cta.label });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", CATERING_PROMO.cta.href);
  });

  it("renders the image with alt text", () => {
    render(<CateringPromo />);
    // next/image renders an img in test env
    const img = screen.getByAltText(CATERING_PROMO.image.alt);
    expect(img).toBeInTheDocument();
  });
});

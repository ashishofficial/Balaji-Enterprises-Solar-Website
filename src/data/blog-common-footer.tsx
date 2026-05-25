import { siteConfig } from "@/lib/site-config";

export function BlogCommonFooter() {
  return (
    <>
      <h2>How to use this guide before buying solar</h2>
      <p>
        Treat this article as a preparation guide before you speak with an
        installer. The best solar decisions are made when the customer already
        understands the basics: monthly units, roof condition, system type,
        subsidy eligibility, product quality, warranty and maintenance. When
        these points are clear, the quotation becomes easier to judge and the
        chance of buying the wrong system goes down.
      </p>
      <p>
        Before requesting a final quote, keep your latest electricity bill
        ready, take clear roof photos, note your major appliances and decide
        whether your priority is bill saving, backup power or both. Ask the
        installer to explain system size, expected generation, payback period,
        subsidy support if applicable, net-metering process, warranty and AMC.
        A professional quote should answer these questions in writing.
      </p>
      <p>
        Balaji Enterprises works with customers who want practical solar
        guidance instead of guesswork. Whether you are comparing brands,
        calculating savings, applying for subsidy or choosing between on-grid,
        off-grid and hybrid solar, the right starting point is a proper site
        survey and a clear discussion of your electricity use. For help with a
        rooftop solar project, call{" "}
        <a href={`tel:${siteConfig.phone}`}>
          <strong>{siteConfig.phoneDisplay}</strong>
        </a>{" "}
        or send a WhatsApp enquiry with your bill and location.
        We will review the roof, load and budget before recommending any system
        size. This keeps the advice practical for homes, shops, schools and
        small businesses that need dependable solar performance over many
        years.
      </p>
    </>
  );
}

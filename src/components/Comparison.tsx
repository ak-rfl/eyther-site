import FadeIn from "./FadeIn";

const rows = [
  { label: "Strategy", agency: "Same playbook for all clients", homeai: "Learns YOUR business, adapts" },
  { label: "Monthly Cost", agency: "$2,000 - $5,000+", homeai: "From $497/mo" },
  { label: "Hours Active", agency: "9-5, weekdays", homeai: "24/7/365" },
  { label: "Campaign Design", agency: "Quarterly, if you're lucky", homeai: "Continuous, data-driven" },
  { label: "Contract", agency: "6-12 month lock-in", homeai: "Cancel anytime" },
];

export default function Comparison() {
  return (
    <section className="bg-concrete-50 py-20 md:py-24" id="comparison">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight mb-3">
              Your Agency vs. Your AI Marketing Team
            </h2>
            <p className="text-lg text-concrete-600">
              One actually knows your business. The other runs the same playbook
              for everyone.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-[800px] mx-auto bg-white rounded-xl border border-concrete-100 overflow-hidden shadow-md">
            <table className="w-full">
              <thead>
                <tr className="border-b border-concrete-100 bg-concrete-50">
                  <th scope="col" className="w-[140px] md:w-[200px] px-5 py-4">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-concrete-600">
                    Traditional Agency
                  </th>
                  <th scope="col" className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-concrete-600">
                    homeAI
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i < rows.length - 1 ? "border-b border-concrete-100" : ""
                    }
                  >
                    <th scope="row" className="px-5 py-4 font-semibold text-concrete-900 bg-concrete-50 border-r border-concrete-100 text-sm text-left">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-sm text-error border-r border-concrete-100">
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true">&#10007;</span> {row.agency}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-success font-semibold">
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true">&#10003;</span> {row.homeai}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

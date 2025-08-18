import React from "react";

const Home4thsection = () => {
  /* ─────────────────────────────────────────
     BIO‑FUEL–FOCUSED PROJECT CATEGORIES
  ───────────────────────────────────────────*/
  const categories = [
    {
      number: "01",
      title: "Feedstock Sourcing",
      description:
        "Robust agri‑waste & municipal‑waste supply chains secured through long‑term farmer partnerships and city‑level tie‑ups.",
    },
    {
      number: "02",
      title: "Clean Conversion Tech",
      description:
        "State‑of‑the‑art anaerobic digestion & trans‑esterification delivering high‑purity Bio‑CNG, Bio‑Diesel & Ethanol.",
    },
    {
      number: "03",
      title: "Distribution & Logistics",
      description:
        "Nation‑wide pipeline, cylinder & tanker network that moves green molecules efficiently to industrial and mobility customers.",
    },
    {
      number: "04",
      title: "Carbon‑Credit Monetisation",
      description:
        "Certified lifecycle CO₂ savings converted into tradable credits, boosting ROI and supporting net‑zero targets.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 w-[80%]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ─────────── Left Side ─────────── */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Project Pillars
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800 leading-tight">
                Bio‑Fuel Solutions <br /> that Power a Greener India
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 font-sans text-justify">
              <p>
                From feedstock aggregation to last‑mile delivery, KEC Bio‑Fuel
                provides turnkey PMC & EPC expertise for Bio‑CNG, Bio‑Diesel
                and Ethanol assets. Our mission is to convert waste streams
                into clean energy creating rural prosperity.
              </p>
              <p>
                Backed by 34 + EPC contracts and a ₹500 Cr PPP MoU with the
                Uttarakhand Government, we are scaling toward 100 + CBG plants
                nationwide by FY 2026.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 italic text-lg mb-4 leading-relaxed">
                “Every tonne of agri‑waste we upcycle replaces fossil fuel,
                cuts methane emissions, and puts money back in farmers’ hands.”
              </p>
              <p className="text-green-800 font-semibold">– KEC Bio‑Fuel CEO</p>
            </div>

            {/* CTA */}
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              READ MORE
            </button>
          </div>

          {/* ─────────── Right Side ─────────── */}
          <div className="space-y-2">
            {categories.map((cat) => (
              <div
                key={cat.number}
                className="bg-white p-4 rounded-2xl shadow-2xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  {/* Number badge */}
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {cat.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-sans text-justify">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home4thsection;

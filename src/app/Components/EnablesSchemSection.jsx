import React from 'react';
import { Building, Leaf, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

const EnablesSchemSection = () => {
  const pricingData = [
    { sl: 1, description: "Retail Selling Price of CBG upto Rs 70", lowerRetail: "Rs 54.00", higherRetail: "Rs 56.70", procurementGST: "Rs 54.00", procurementNoGST: "Rs 56.70" },
    { sl: 2, description: "Rs 70.01", lowerRetail: "Rs 75", higherRetail: "Rs 55.25", procurementGST: "Rs 58.01", procurementNoGST: "Rs 58.01" },
    { sl: 3, description: "Rs 75.01", lowerRetail: "Rs 80", higherRetail: "Rs 59.06", procurementGST: "Rs 62.01", procurementNoGST: "Rs 62.01" },
    { sl: 4, description: "Rs 80.01", lowerRetail: "Rs 85", higherRetail: "Rs 62.86", procurementGST: "Rs 66.01", procurementNoGST: "Rs 66.01" },
    { sl: 5, description: "Rs 85.01", lowerRetail: "Rs 90", higherRetail: "Rs 66.67", procurementGST: "Rs 70.01", procurementNoGST: "Rs 70.01" },
    { sl: 6, description: "Rs 90.01", lowerRetail: "Rs 95", higherRetail: "Rs 70.48", procurementGST: "Rs 74.01", procurementNoGST: "Rs 74.01" },
    { sl: 7, description: "Rs 95.01", lowerRetail: "Rs 100", higherRetail: "Rs 74.29", procurementGST: "Rs 78.01", procurementNoGST: "Rs 78.01" }
  ];

  const cfaProducts = [
    {
      product: "BioCNG / Enriched Biogas / Compressed Bio Gas",
      cfa: "Rs 3.0 Crore per 4800 kgs of BioCNG/day generated from 12000 m3 Biogas/day (Waste)",
      description: "Upcoming Biogas plants which produce BioCNG / Enriched Biogas produced from biogas generated through biomethanation of Urban waste (including segregated MSW, Agricultural Waste / Industrial wastes / Effluents or mix of these wastes, are eligible for this financial assistance."
    },
    {
      product: "",
      cfa: "(Maximum CFA - Rs 10 Crore/project)",
      description: "In case developer wants to set up BioCNG/Enriched Biogas generating unit at already existing Biogas plant or at distillery effluent based Biogas plant, applicant can avail benefits of this scheme also."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-green-300 via-green-100 to-green-200 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-gray-800">
              Enablers of Scheme
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive energy solutions and financial assistance programs for sustainable development
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Assured Long-term Pricing Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Assured Long-term Pricing</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-slate-600 leading-relaxed font-sans">
                An Expression of Interest (EOI) to procure CBG by IndianOil was released under the SATAT scheme on 1st October 2018. 
                As per the EOI the price offered for CBG by Oil & gas companies is as follows:
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-br from-green-300 via-green-100 to-green-200 text-gray-800">
                  <th className="px-4 py-4 text-left font-semibold">Sl. No.</th>
                  <th className="px-4 py-4 text-left font-semibold">Lower Retail Selling Price of CBG in Slab (excluding GST)/Rs/Kg</th>
                  <th className="px-4 py-4 text-left font-semibold">Higher Retail Selling Price of CBG in Slab (excluding GST)/Rs/Kg</th>
                  <th className="px-4 py-4 text-left font-semibold">Procurement Price of CBG/Rs/Kg (excluding GST)</th>
                  <th className="px-4 py-4 text-left font-semibold">Procurement Price of CBG/Rs/Kg (including GST)</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 font-medium text-slate-700 font-sans">{row.sl}</td>
                    <td className="px-4 py-3 text-slate-600 font-sans">{row.description}</td>
                    <td className="px-4 py-3 text-slate-600 font-sans">{row.lowerRetail}</td>
                    <td className="px-4 py-3 text-slate-600 font-medium font-sans">{row.higherRetail}</td>
                    <td className="px-4 py-3 text-slate-600 font-medium font-sans">{row.procurementGST}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> The above slab is applicable strictly for supply of CBG and not any other product of ₹75km from the CBG Plant. 
              For distance beyond ₹75km the price will be settled as per the mechanism on CBG Procurement Price Revision.
            </p>
          </div>
        </section>

        {/* Facilitation Section */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-br from-green-300 via-green-100 to-green-200 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Facilitation by OMCs through LOI</h2>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4 font-sans text-slate-500">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500">Oil & gas companies shall facilitate Plant owners in design, erection, construction, commissioning of the CBG plant.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500">Oil & gas companies will offtake and market the CBG produced.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500">Oil & gas companies will also facilitate marketing of Bio manure produced from the CBG Plants. For facilitating marketing of Bio-slurry by arrangement with National Agricultural Cooperative Marketing Federation of India Ltd (NAFED).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500">Oil & gas companies are entering into MoU with State Governments for facilitating CBG plants. IndianOil has signed similar MoU with States like Haryana, Uttar Pradesh, Punjab, Gujarat, Maharashtra, Rajasthan, Chhattisgarh, Orissa, Pradseh and Andhra Pradesh.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500">Policy guidelines has been issued for synchronization of CBG produced by plants under SATAT scheme in the City Gas Distribution (CGD network).</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
                  <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Comprehensive Support</h3>
                  <p className="text-slate-600">End-to-end facilitation from design to marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Sector Lending Section */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-br from-green-300 via-green-100 to-green-200 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Priority Sector Lending</h2>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-slate-600 leading-relaxed font-sans">
                As per the revised Priority Sector Lending (PSL) guidelines issued by Reserve Bank of India (RBI) dated 04th September 2020, 
                norms for setting up Compressed Bio Gas (CBG) plants have been included as fresh categories eligible for finance under 
                priority sector, which would enable better credit penetration for setting-up CBG plants.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                Fertilizer Control Order
              </h3>
              <p className="text-green-700 font-sans">
                To promote the manure produced from CBG plants, Fermented Organic manure (FOM) and Digested Biogas Slurry 
                have been included under Fertilizer Control Order (FCO) 1985.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Central Financial Assistance (CFA) provided by MNRE</h3>
              <p className="text-gray-600 mb-4 font-sans">
                Ministry of New and Renewable Energy provides capital subsidy for Compressed Biogas (CBG) projects under 
                "Programme on Energy from Urban, Industrial and Agricultural wastes/residues" of the "National Biogas and 
                Manure Management Programme".
              </p>
              <p className="text-gray-600 mb-6 font-sans">
                As per the revised guidelines dated 29th February 2020, the scheme is extended till 31st March 2021 or till the date 
                the recommendations of 15th Finance Commission/effect of subtitle/MNREsubsidy for CBG projects (as per the latest guidelines) are as follows:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="px-4 py-3 text-left font-semibold text-purple-800">Product</th>
                      <th className="px-4 py-3 text-left font-semibold text-purple-800">CFA</th>
                      <th className="px-4 py-3 text-left font-semibold text-purple-800">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cfaProducts.map((item, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-purple-25' : 'bg-white'} hover:bg-purple-50 transition-colors`}>
                        <td className="px-4 py-4 text-slate-500 font-medium font-sans">{item.product}</td>
                        <td className="px-4 py-4 text-slate-500 font-semibold">{item.cfa}</td>
                        <td className="px-4 py-4 text-slate-500 leading-relaxed font-sans">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnablesSchemSection;
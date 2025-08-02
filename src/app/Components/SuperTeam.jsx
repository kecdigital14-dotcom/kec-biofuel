import React, { useState, useEffect, useRef } from 'react';

const OrgChartComponent = () => {
    const treeRef = useRef(null);
    const pseudoIframeContainerRef = useRef(null);
    const chartRef = useRef(null);

    const [currentPseudoIframeScale, setCurrentPseudoIframeScale] = useState(1);
    const [zoomControlsVisible, setZoomControlsVisible] = useState(true);
    const [statusMessage, setStatusMessage] = useState("Loading...");

    const scaleStep = 0.1;
    const minPseudoIframeScale = 0.2;
    const maxPseudoIframeScale = 3.0;

    // Load external script and inject custom CSS
    useEffect(() => {
        // Inject custom CSS to override OrgChart default styles
        const style = document.createElement('style');
        style.textContent = `
            /* Override OrgChart default background */
            .boc-bg-color {
                // background: linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%) !important;
            }
            
            /* Ensure svg background is also green */
            svg[data-id="orgchart"] {
                // background: linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%) !important;
            }
            
            /* Override any container backgrounds */
            [data-n-id] {
                background: transparent !important;
            }
            
            /* Make sure the main container has green background */
            .orgchart-container, .orgchart-container > div {
                // background: linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%) !important;
            }
        `;
        document.head.appendChild(style);

        const script = document.createElement('script');
        script.src = 'https://balkan.app/js/OrgChart.js';
        script.async = true;
        script.onload = () => {
            initializeChart();
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
            document.head.removeChild(style);
        };
    }, []);

    const getChartData = () => {
        return [
            // CEO at top
            { id: 1, name: "JITENDRA NARYAN", title: "CEO & Founder", tags: ["ceo"], img: "images/ceo.jpg" },

            // First level departments directly under CEO
            { id: 2, pid: 1, name: "ADVISOR", tags: ["section"] },
            { id: 3, pid: 1, name: "EXECUTIVE ASSISTANT", tags: ["section"] },
            { id: 4, pid: 1, name: "Mr. SUNIL KULSHRESTHA", title: "CHIEF FINANCE OFFICER", img: "/images/sunil.png" },
            { id: 5, pid: 1, name: "TECHNOLOGY", tags: ["section"] },
            { id: 6, pid: 1, name: "CHIEF MARKETING OFFICER", tags: ["section"] },
            { id: 7, pid: 1, name: "AGRO-INPUTS", tags: ["section"] },

            // Advisor branch
            { id: 20, pid: 2, name: "Dr. Anshu Gupta", title: "Founder Sarvodaya Hosp.", img: "/images/anshu.png" },
            { id: 21, pid: 2, name: "Mr. Ashish Kaushik", title: "IIM Ahmedabad Advisor", img: "/images/ashish.png" },

            // Under Dr. Anshu Gupta
            { id: 22, pid: 20, name: "Mr. Surender Singhal", title: "Advisor-Chartered Engineer", img: "/images/surender.png" },
            { id: 23, pid: 20, name: "Mr. Deepak Joshi", title: "Advisor- Govt.Liaising", img: "/images/deepak.png" },
            { id: 24, pid: 20, name: "Mr. Vivek Raman", title: "Advisor Business Strategies", img: "/images/vivek.png" },

            // Under Ashish Kaushik
            { id: 25, pid: 21, name: "Mr. P.Dev Anand", title: "Advisor to KEC - Bio mass", img: "/images/pdev.png" },
            { id: 26, pid: 21, name: "Mr. Ratheesh Shamrock", title: "Consultancy(India) U.A.E", img: "/images/ratheesh.png" },
            { id: 27, pid: 21, name: "Mr. Chinmoy Chakroborty", title: "Sr. Vice President, Auditor", img: "/images/chinmoy.png" },

            // Executive Assistant branch
            { id: 30, pid: 3, name: "HUMAN RESOURCE", tags: ["section"] },
            { id: 31, pid: 3, name: "ADMIN & COORDINATOR", tags: ["section"] },

            { id: 32, pid: 30, name: "Mrs. Shivani Khantwan", title: "Human Resource Manager", img: "/images/shivani.png" },
            { id: 33, pid: 30, name: "Mrs. Suman", title: "Co-Coordinator", img: "/images/suman.png" },

            { id: 34, pid: 31, name: "Mr. Ashok Kumar Jaiswal", title: "Admin & Coordinator", img: "/images/ashok.png" },
            { id: 35, pid: 31, name: "Mr. S. Kumar", title: "Admin & Coordinator", img: "/images/skumar.png" },

            // CFO branch
            { id: 40, pid: 4, name: "Mr. Pawan Kumar", title: "Finance & Accountant", img: "/images/pawan.png" },
            { id: 41, pid: 4, name: "Mr. Taanishq Aggarwal", title: "Business Analyst", img: "/images/tanishq.png" },

            // Technology branch
            { id: 50, pid: 5, name: "Mr. Sunandan Taneja", title: "VP Operation Head", img: "/images/sumandan.png" },
            { id: 51, pid: 5, name: "Mr. Saurabh Bamrara", title: "Sr. Project Manager", img: "/images/saurabh.png" },
            { id: 52, pid: 5, name: "Mr. Shivay Singh", title: "Sr. Project Engineer", img: "/images/shivay.png" },

            // Chief Marketing Officer branch
            { id: 60, pid: 6, name: "Dr. Khushbu Chaudhary", title: "Sr.VP, CH CBG, Advisor", img: "/images/khusboo.png" },
            { id: 61, pid: 6, name: "R & D", tags: ["section"] },
            { id: 62, pid: 6, name: "PROJECTS", tags: ["section"] },

            // Under Dr. Khubbu Chaudhary
            { id: 63, pid: 60, name: "Ms. PAYAL JEE", title: "EXECUTIVE ASSISTANT", img: "/images/payal.png" },
            { id: 64, pid: 63, name: "CBG", tags: ["section"] },
            { id: 65, pid: 63, name: "VP-FRANCHISE -AGRO", tags: ["section"] },

            // CBG section
            { id: 66, pid: 64, name: "VP-B2B", tags: ["section"] },
            { id: 67, pid: 64, name: "VP-B2C", tags: ["section"] },

            // VP-B2B
            { id: 68, pid: 66, name: "Mr. Jai Prakash Mandal", title: "Marketing Manager", img: "/images/jai.png" },
            { id: 69, pid: 66, name: "Mr. Gangeshwar", title: "Senior Manager", img: "/images/gangeshwar.png" },
            // { id: 70, pid: 66, name: "Mr. Jai Prakash Mandal", title: "Marketing Manager", img: "/images/jai.png" },
            // { id: 71, pid: 66, name: "Mr. Gangeshwar", title: "Sales Manager", img: "/images/gangeshwar.png" },

            // VP-B2C
            { id: 72, pid: 67, name: "Mr. Jayant Priyadarshan", title: "Sr. VP Sales & Marketing", img: "/images/jayant.png" },
            { id: 73, pid: 67, name: "Mr. Alok Pandey", title: "BDM", img: "/images/alok.png" },
            { id: 74, pid: 67, name: "Mr. Kaushal Kumar", title: "BDM", img: "/images/kaushal.png" },
            { id: 75, pid: 67, name: "Ms. Nitiksha", title: "Asst. Manager Exec.", img: "/images/nitikshasha.png" },

            // VP-FRANCHISE -AGRO
            { id: 76, pid: 65, name: "Ms. Satyam Sharma", title: "PD Manager", img: "/images/satyam.png" },
            { id: 77, pid: 65, name: "Ms. Sunderlal", title: "AVP International BD", img: "/images/sunderlal.png" },

            // R & D
            { id: 78, pid: 61, name: "Mr. Manish aswa", title: "Sr. VP", img: "/images/manish.png" },
            // { id: 79, pid: 61, name: "Mr. Kartik", title: "Sr. Manager", img: "/images/kec_kartik.jpeg" },
            // { id: 80, pid: 61, name: "Mr. Miten Jhaveri", title: "Engineer", img: "/images/miten.png" },

            // Projects
            { id: 81, pid: 62, name: "Mr. Dipesh", title: "Electric Engineer", img: "/images/dipesh.png" },
            { id: 82, pid: 62, name: "Mr. Dipanshu", title: "Civil Engineer", img: "/images/dipansh.png" },

            // Agro-Inputs branch
            { id: 90, pid: 7, name: "Mr. Amarnath Singh", title: "Sr. VP. Lucknow", img: "/images/amarnath.png" },
            { id: 91, pid: 7, name: "Lalit Mohan Pandey", title: "BD Manager", img: "/images/lalit.png" },
            { id: 92, pid: 7, name: "Sandeep Kumar Pandey", title: "BD Manager", img: "/images/sandeep.png" },
            { id: 93, pid: 7, name: "Shivam Verma", title: "BD Manager", img: "/images/kec_shivam.jpeg" },
            { id: 94, pid: 7, name: "GOVERNMENT INSTITUTION PPP", tags: ["section"] },

            // Government Institution PPP
            { id: 95, pid: 94, name: "Mr. Sachin Bisht", title: "Senior Project Manager", img: "/images/sachin.png" },
            { id: 96, pid: 94, name: "Mr. Hirender Nahar", title: "VP", img: "/images/hitender.png" },
            { id: 97, pid: 94, name: "Mr. Virender Nirmesh", title: "AVP Intl.Marketing & Sales", img: "/images/virender.png" },
        ];
    };

    const initializeChart = () => {
        if (!window.OrgChart || !treeRef.current) return;

        try {
            // Template definitions
            window.OrgChart.templates.myTemplate = Object.assign({}, window.OrgChart.templates.ana);
            window.OrgChart.templates.myTemplate.size = [280, 100];
            window.OrgChart.templates.myTemplate.node =
                `<rect x="0" y="0" height="80" width="290" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="12" ry="12"></rect>
        <line x1="0" y1="35" x2="280" y2="35" stroke="#1976d2" stroke-width="1"></line>`;

            window.OrgChart.templates.myTemplate.field_0 =
                `<text width="200" style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; fill: #1565c0;" x="170" y="22" text-anchor="middle">{val}</text>`;

            window.OrgChart.templates.myTemplate.field_1 =
                `<text width="200" style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; fill: #424242;" x="170" y="55" text-anchor="middle">{val}</text>`;

            window.OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="40" cy="40" r="30"></circle></clipPath>' +
                '<image xlink:href="{val}" x="-22" y="10" width="120" height="100" clip-path="url(#{randId})"></image>';

            // CEO Template
            window.OrgChart.templates.ceoTemplate = Object.assign({}, window.OrgChart.templates.myTemplate);
            window.OrgChart.templates.ceoTemplate.size = [350, 90];
            window.OrgChart.templates.ceoTemplate.node =
                `<rect x="0" y="0" height="100" width="350" fill="#189AB4" stroke="#05445E" stroke-width="3" rx="15" ry="15"></rect>
        <line x1="0" y1="45" x2="350" y2="45" stroke="#0d47a1" stroke-width="2"></line>`;

            window.OrgChart.templates.ceoTemplate.field_0 =
                `<text width="250" style="font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; fill: white;" x="200" y="30" text-anchor="middle">{val}</text>`;

            window.OrgChart.templates.ceoTemplate.field_1 =
                `<text width="250" style="font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; fill: #e3f2fd;" x="200" y="70" text-anchor="middle">{val}</text>`;

            window.OrgChart.templates.ceoTemplate.img_0 = '<clipPath id="{randId}"><circle cx="50" cy="50" r="35"></circle></clipPath>' +
                '<image xlink:href="{val}" x="15" y="10" width="70" height="105" clip-path="url(#{randId})"></image>';

            // Section Template
            window.OrgChart.templates.sectionTemplate = Object.assign({}, window.OrgChart.templates.ana);
            window.OrgChart.templates.sectionTemplate.size = [250, 45];
            window.OrgChart.templates.sectionTemplate.node =
                `<rect x="0" y="0" height="50" width="250" fill="#bbdefb" stroke="#1976d2" stroke-width="2" rx="10" ry="10"></rect>`;

            window.OrgChart.templates.sectionTemplate.field_0 =
                `<text width="250" style="font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; fill: #1565c0;" x="125" y="28" text-anchor="middle">{val}</text>`;

            // Invisible template
            window.OrgChart.templates.invisibleTemplate = Object.assign({}, window.OrgChart.templates.ana);
            window.OrgChart.templates.invisibleTemplate.size = [1, 1];
            window.OrgChart.templates.invisibleTemplate.node = `<rect x="0" y="0" height="1" width="1" fill="transparent"></rect>`;
            window.OrgChart.templates.invisibleTemplate.field_0 = ``;

            chartRef.current = new window.OrgChart(treeRef.current, {
                scaleInitial: 0.85,
                mouseScrool: window.OrgChart.action.zoom,
                enableSearch: false,
                template: "myTemplate",
                enableDragDrop: false,
                layout: window.OrgChart.tree,
                orientation: window.OrgChart.orientation.top,
                siblingSeparation: 30,
                levelSeparation: 60,
                scaleMin: 0.1,
                scaleMax: 5,
                backgroundColor: 'transparent',
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img"
                },
                tags: {
                    "ceo": { template: "ceoTemplate" },
                    "section": { template: "sectionTemplate" },
                    "invisible": { template: "invisibleTemplate" }
                }
            });

            chartRef.current.on('ready', function () {
                console.log("OrgChart is fully rendered and ready.");
                updateStatus("Chart Ready");

                // Apply green background after chart is ready
                setTimeout(() => {
                    const svgElement = treeRef.current?.querySelector('svg');
                    if (svgElement) {
                        // svgElement.style.background = 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)';
                    }

                    // Also apply to any chart containers
                    const chartContainers = treeRef.current?.querySelectorAll('[data-n-id], .boc-bg-color');
                    chartContainers?.forEach(container => {
                        container.style.background = 'transparent';
                    });

                    performPseudoIframeZoom('fit');
                }, 500);
            });

            chartRef.current.load(getChartData());
        } catch (error) {
            console.error("Error initializing chart:", error);
            updateStatus("Error Loading Chart");
        }
    };

    const updateStatus = (message) => {
        setStatusMessage(message);
        setTimeout(() => {
            setStatusMessage("Ready");
        }, 2000);
    };

    const performPseudoIframeZoom = (direction) => {
        let newScale = currentPseudoIframeScale;
        if (direction === 'in') {
            newScale = Math.min(maxPseudoIframeScale, currentPseudoIframeScale + scaleStep);
        } else if (direction === 'out') {
            newScale = Math.max(minPseudoIframeScale, currentPseudoIframeScale - scaleStep);
        } else if (direction === 'fit') {
            newScale = 0.9;
        } else if (direction === 'overview') {
            newScale = 0.5;
        } else if (direction === 'reset') {
            newScale = 1;
        }

        if (newScale !== currentPseudoIframeScale) {
            setCurrentPseudoIframeScale(newScale);
            if (pseudoIframeContainerRef.current) {
                pseudoIframeContainerRef.current.style.transform = `scale(${newScale})`;
            }
            updateStatus(`Zoom: ${direction}`);
        }
    };

    return (
        <div className="h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #ffffffff 0%, #a6d8bdff 100%)' }}>
            {/* Header Section */}
            <div className="mb-24">
                <div className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        {/* <h1 className="text-3xl font-bold text-gray-800"></h1> */}
                    </div>
                </div>
            </div>

            {/* CEO Info Section */}
    <div className="flex justify-center mb-8 ">
  <div className="bg-white rounded-xl shadow-xl max-w-4xl mx-4 flex overflow-hidden py-2 max-h-[480px]">
 
    <div className="flex-1 p-8">
      <div className="bg-orange-500 text-white font-bold text-xl p-4 inline-block rounded mb-4">
        JITENDER NARAYAN
        <br />
        <span className="text-base font-semibold">The CEO Behind Our Mission....</span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 font-bold text-justify pr-6">
        Jitendra is Management professional and a technocrat with 14 Yr plus years of experience in
        Business Development through Multi channel as Franchisee & Branch network across North India,
        Operations, Man Management and Profit Centre Management. Worked with Nirmal Bang, Reliance
        Capital & Kassa Finvest in various management level positions. Have set up Commodities and
        Currency & Equity Broking.
      </p>
      <a
        href="https://in.linkedin.com/company/kecbiofuel?trk=public_post_feed-actor-name"
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold uppercase text-sm hover:bg-green-600 transition-colors inline-block shadow-md"
      >
        Know More
      </a>
    </div>


    <div className="flex-1 min-w-80 flex items-center justify-center">
      <img
        src="images/ceo.jpg"
        alt="CEO"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>




            {/* Main Chart Container */}
            <div className="flex-1 flex items-center justify-center px-4 relative">
                <div
                    ref={pseudoIframeContainerRef}
                    className="w-full h-full border-2 border-white rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `scale(${currentPseudoIframeScale})`,
                        transformOrigin: 'center center',
                        background: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)'
                    }}
                >
                    <div ref={treeRef} className="w-full h-full overflow-auto"></div>
                </div>
            </div>

            {/* Zoom Controls */}
            {zoomControlsVisible && (
                <div className="fixed top-24 right-5 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-50 flex flex-col gap-3 border border-white border-opacity-20">
                    <button
                        onClick={() => setZoomControlsVisible(false)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                    >
                        ×
                    </button>

                    <button
                        onClick={() => performPseudoIframeZoom('in')}
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-20"
                    >
                        Zoom In
                    </button>

                    <button
                        onClick={() => performPseudoIframeZoom('out')}
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-20"
                    >
                        Zoom Out
                    </button>

                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-center font-semibold text-gray-800 text-sm border">
                        {Math.round(currentPseudoIframeScale * 100)}%
                    </div>

                    <button
                        onClick={() => performPseudoIframeZoom('fit')}
                        className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-20"
                    >
                        Fit Screen
                    </button>

                    <button
                        onClick={() => performPseudoIframeZoom('overview')}
                        className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-20"
                    >
                        Overview
                    </button>

                    <button
                        onClick={() => performPseudoIframeZoom('reset')}
                        className="bg-gradient-to-r from-blue-200 to-pink-200 text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-20"
                    >
                        Reset
                    </button>

                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-center text-xs font-medium border border-green-200">
                        {statusMessage}
                    </div>
                </div>
            )}

            {/* Toggle Controls Button */}
            {!zoomControlsVisible && (
                <button
                    onClick={() => setZoomControlsVisible(true)}
                    className="fixed top-20 right-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center text-xl z-50 shadow-xl hover:scale-110 transition-transform"
                >
                    ☰
                </button>
            )}
        </div>
    );
};

export default OrgChartComponent;
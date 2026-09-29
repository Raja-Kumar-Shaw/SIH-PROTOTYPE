// Nirman - Platform Demonstration Data
// Focused on Maharashtra Government Departments and Verified Startups

export const MAHARASHTRA_DEPARTMENTS = [
  { id: "dept-1", name: "Water Supply and Sanitation Department", location: "Mantralaya, Mumbai", code: "WSSD-MH" },
  { id: "dept-2", name: "Urban Development Department (UDD)", location: "Mantralaya, Mumbai / MMRDA", code: "UDD-MH" },
  { id: "dept-3", name: "Public Health Department", location: "Mumbai & Nagpur Regional Centers", code: "PHD-MH" },
  { id: "dept-4", name: "Agriculture and Cooperation Department", location: "Pune & Chhatrapati Sambhajinagar", code: "AGRI-MH" },
  { id: "dept-5", name: "Transport Department & MSRTC", location: "Mumbai", code: "TPT-MH" },
  { id: "dept-6", name: "Maharashtra Industrial Development Corporation (MIDC)", location: "Andheri (East), Mumbai", code: "MIDC-MH" }
];

export const DOMAINS = [
  "Water Management",
  "Waste Management",
  "Smart Mobility",
  "Artificial Intelligence",
  "Internet of Things (IoT)",
  "Agriculture Technology",
  "Healthcare",
  "Energy",
  "Disaster Management"
];

export const INITIAL_OPPORTUNITIES = [
  {
    id: "OPP-MH-2026-001",
    title: "IoT-Enabled Real-Time Non-Revenue Water (NRW) Leak Detection & Pressure Balancing",
    department: "Water Supply and Sanitation Department",
    state: "Maharashtra",
    location: "Pune Urban Agglomeration & Pimpri Chinchwad",
    domain: "Water Management",
    requiredTechnology: "IoT Acoustic Sensors, LoRaWAN, SCADA Integration, Cloud Dashboard",
    estimatedProjectValue: "₹50,00,000",
    pilotValue: "₹5,00,000",
    pilotDuration: "60 days",
    timeline: "12 Months Implementation (Post-Pilot)",
    applicationDeadline: "2026-10-15",
    status: "Active",
    summary: "Deployment of non-invasive acoustic sensors along municipal distribution pipelines to reduce physical water loss, identify hidden leaks within 10 minutes, and balance district metering zones.",
    eligibilityCriteria: [
      "Registered Legal Entity with valid CIN / LLPIN",
      "Verified organisation profile on Nirman",
      "Demonstrated technical capacity in acoustic or ultrasonic flow telemetry",
      "ISO 9001 / ISO 27001 or equivalent quality & data security certification",
      "Minimum 5,000 connected device handling capacity in cloud telemetry",
      "At least 1 completed deployment with municipal or industrial utility"
    ],
    mandatoryCapabilities: [
      "IoT Sensors",
      "AI Analytics",
      "Cloud Dashboard",
      "5,000-device capacity"
    ],
    preferredCapabilities: [
      "LoRaWAN gateway support",
      "SCADA bidirectional sync",
      "Mobile alert workflow for field engineers"
    ],
    targetKPIs: [
      { metric: "Water wastage reduction", target: "≥20%", baseline: "32% loss" },
      { metric: "Leak detection response time", target: "≤10 minutes", baseline: "48-72 hours" },
      { metric: "Telemetry system uptime", target: "≥95%", baseline: "80%" },
      { metric: "Pilot execution completion", target: "60 days", baseline: "N/A" }
    ]
  },
  {
    id: "OPP-MH-2026-002",
    title: "Computer Vision & Edge AI for Automated Municipal Solid Waste Segregation & Fleet Telematics",
    department: "Urban Development Department (UDD)",
    state: "Maharashtra",
    location: "Navi Mumbai & Thane Municipal Corporation",
    domain: "Waste Management",
    requiredTechnology: "Edge AI Cameras, Optical Sorter Integration, GPS Telematics, Geospatial GIS",
    estimatedProjectValue: "₹65,00,000",
    pilotValue: "₹6,50,000",
    pilotDuration: "45 days",
    timeline: "14 Months Implementation",
    applicationDeadline: "2026-10-22",
    status: "Active",
    summary: "Automated identification of dry, wet, and hazardous municipal solid waste streams on sorting conveyor belts and optimization of collection vehicle routes.",
    eligibilityCriteria: [
      "Verified enterprise with GSTIN and active MCA registration",
      "Edge computing hardware compliance and CE/BIS certifications",
      "Proven real-time object classification accuracy ≥88%",
      "Data privacy adherence for public camera streams"
    ],
    mandatoryCapabilities: [
      "Computer Vision at Edge",
      "Conveyor Belt Integration",
      "GIS Route Telematics",
      "Real-Time Reporting API"
    ],
    preferredCapabilities: [
      "Hazardous waste sensor integration",
      "Offline cache support",
      "Marathi & Hindi language UI"
    ],
    targetKPIs: [
      { metric: "Purity of dry waste stream", target: "≥90%", baseline: "65%" },
      { metric: "Route fuel consumption reduction", target: "≥15%", baseline: "N/A" },
      { metric: "System classification latency", target: "≤120 ms", baseline: "Manual" }
    ]
  },
  {
    id: "OPP-MH-2026-003",
    title: "Distributed Tele-ICU & Remote Patient Vital Monitoring for Rural Sub-District Hospitals",
    department: "Public Health Department",
    state: "Maharashtra",
    location: "Gadchiroli & Nandurbar Sub-District Hospitals",
    domain: "Healthcare",
    requiredTechnology: "Multi-parameter patient monitor integration, Low-bandwidth WebRTC, HL7/FHIR, EMR Cloud",
    estimatedProjectValue: "₹85,00,000",
    pilotValue: "₹8,00,000",
    pilotDuration: "60 days",
    timeline: "18 Months Implementation",
    applicationDeadline: "2026-11-05",
    status: "Active",
    summary: "Connecting 10 rural Intensive Care Units with central specialist hubs in Nagpur and Mumbai via continuous telemetry, early warning score (EWS) triggers, and secure two-way audio-visual rounds.",
    eligibilityCriteria: [
      "Medical device data interoperability compliance (HL7 / FHIR)",
      "ISO 13485 (Medical Devices) or ISO 27001 certification",
      "Zero patient identifiable data leakage guarantee",
      "Minimum 3 operational tele-consultation installations"
    ],
    mandatoryCapabilities: [
      "HL7/FHIR Interoperability",
      "Low-bandwidth Audio-Video",
      "Continuous Vital Trend Streaming",
      "Early Warning Score (EWS) Engine"
    ],
    preferredCapabilities: [
      "Offline sync during intermittent WAN outage",
      "Solar battery backup compatibility",
      "Integrated regional doctor roster"
    ],
    targetKPIs: [
      { metric: "Critical event early alert lead time", target: "≥15 minutes prior", baseline: "Post-event" },
      { metric: "Avoidable emergency transfers reduction", target: "≥30%", baseline: "High transfer rate" },
      { metric: "Bedside telemetry reliability", target: "≥99%", baseline: "Manual checks" }
    ]
  },
  {
    id: "OPP-MH-2026-004",
    title: "Hyperspectral Satellite & Drone Imagery for Cotton Pest Infestation & Soil Moisture Mapping",
    department: "Agriculture and Cooperation Department",
    state: "Maharashtra",
    location: "Vidarbha & Marathwada Agricultural Zones",
    domain: "Agriculture Technology",
    requiredTechnology: "Synthetic Aperture Radar (SAR), Multispectral Analytics, Farm Advisory SMS/IVR Engine",
    estimatedProjectValue: "₹42,00,000",
    pilotValue: "₹4,20,000",
    pilotDuration: "45 days",
    timeline: "10 Months Implementation",
    applicationDeadline: "2026-10-30",
    status: "Active",
    summary: "Pre-symptomatic detection of Pink Bollworm infestation and hyper-localized soil moisture stress advisory for smallholder cotton farmers across 50 gram panchayats.",
    eligibilityCriteria: [
      "Demonstrated remote sensing analysis capability at 3m spatial resolution",
      "API readiness for integration with state MahaAgri portal",
      "Multilingual farmer advisory delivery pipeline"
    ],
    mandatoryCapabilities: [
      "Multispectral Image Pipeline",
      "Pest Infestation Prediction Model",
      "Soil Moisture Index Calculation",
      "SMS & Voice Advisory Gateway"
    ],
    preferredCapabilities: [
      "Drone survey photogrammetry",
      "Historical weather data fusion",
      "Crop loss geo-tagging"
    ],
    targetKPIs: [
      { metric: "Pest outbreak warning lead time", target: "≥7 days", baseline: "Visual symptom" },
      { metric: "Advisory reach to registered farmers", target: "≥92%", baseline: "40%" },
      { metric: "Pesticide application efficiency gain", target: "≥20%", baseline: "Calendar spray" }
    ]
  },
  {
    id: "OPP-MH-2026-005",
    title: "Adaptive Traffic Signal Control & Intelligent Transit Priority for State Transport Buses",
    department: "Transport Department & MSRTC",
    state: "Maharashtra",
    location: "Chhatrapati Sambhajinagar Arterial Corridors",
    domain: "Smart Mobility",
    requiredTechnology: "Edge Radar/Camera Vehicle Detectors, Signal Controller VISSIM/NTCIP protocol, Cloud Telematics",
    estimatedProjectValue: "₹72,00,000",
    pilotValue: "₹7,00,000",
    pilotDuration: "60 days",
    timeline: "12 Months Implementation",
    applicationDeadline: "2026-11-12",
    status: "Active",
    summary: "Deployment of dynamic green-light extension for MSRTC public buses approaching congested intersections to minimize travel delays and improve schedule adherence.",
    eligibilityCriteria: [
      "Hardware compatibility with existing ITS signal cabinets",
      "Proven corridor synchronization on at least 6 junctions",
      "Cybersecurity audit clearance for municipal network connections"
    ],
    mandatoryCapabilities: [
      "Dynamic Signal Control",
      "Public Transit Priority Logic",
      "Corridor Congestion Analytics",
      "NTCIP Protocol Compatibility"
    ],
    preferredCapabilities: [
      "Emergency vehicle priority mode",
      "Pedestrian crossing countdown sync",
      "Air quality sensor integration"
    ],
    targetKPIs: [
      { metric: "Bus corridor transit time reduction", target: "≥18%", baseline: "42 min avg" },
      { metric: "Intersection wait time variance reduction", target: "≥25%", baseline: "High congestion" },
      { metric: "Signal system availability", target: "≥99.5%", baseline: "92%" }
    ]
  }
];

export const VERIFIED_STARTUPS = [
  {
    id: "ST-2026-881",
    name: "AquaTech Solutions Private Limited",
    legalName: "AquaTech Solutions Pvt Ltd",
    registrationNumber: "U74999MH2021PTC358921",
    pan: "AAACA1234D",
    gstin: "27AAACA1234D1Z5",
    state: "Maharashtra",
    district: "Pune",
    registeredAddress: "Wing B, Baner Tech Park, High Street, Baner, Pune 411045",
    website: "https://aquatech-solutions.in",
    officialEmail: "procurement@aquatech-solutions.in",
    representative: "Vikram Kulkarni",
    designation: "Chief Executive Officer & Founder",
    foundingYear: 2021,
    stage: "Growth / Commercialized",
    teamSize: 34,
    technicalEmployees: 24,
    domain: "Water Management",
    technologies: ["IoT Acoustic Telemetry", "LoRaWAN", "Edge Signal Processing", "Cloud Dashboard", "SCADA API"],
    certifications: ["ISO 9001:2015", "ISO 27001:2022", "CE Marking", "BIS Component Certified"],
    complianceStatus: "Verified & Compliant",
    verificationStatus: "Verified",
    verificationDate: "2026-02-14",
    pricingModel: "Hardware Deployment + Annual Maintenance & Cloud Subscription",
    typicalProjectSize: "₹25,00,000 - ₹75,00,000",
    implementationCapacity: "10,000 devices across 5 districts",
    previousProjects: [
      { client: "Pune Cantonment Board", project: "Distribution Network Smart Pressure & Leak Monitoring", value: "₹28,50,000", outcome: "Achieved 22% NRW loss reduction over 180 days" },
      { client: "MIDC Chakan Industrial Area", project: "Industrial Effluent Flow Rate Telemetry", value: "₹34,00,000", outcome: "Real-time compliance monitoring across 42 manufacturing units" }
    ],
    capabilities: {
      "IoT Sensors": true,
      "AI Analytics": true,
      "Cloud Dashboard": true,
      "5,000-device capacity": true,
      "LoRaWAN gateway support": true,
      "SCADA bidirectional sync": true,
      "Mobile alert workflow for field engineers": true
    },
    matchScores: {
      "OPP-MH-2026-001": {
        score: 94,
        recommendation: "Recommended for Review",
        matchingPoints: [
          "IoT Acoustic Sensors fully align with municipal pipeline requirements",
          "Water management focus with prior urban municipal deployment experience",
          "ISO 9001 and ISO 27001 data security compliance verified",
          "Demonstrated capacity exceeds the required 5,000 connected device threshold",
          "Local maintenance team stationed within Pune administrative division"
        ]
      }
    }
  },
  {
    id: "ST-2026-882",
    name: "UrbaClean Systems LLP",
    legalName: "UrbaClean Systems LLP",
    registrationNumber: "AAB-9921",
    pan: "AABFU7712M",
    gstin: "27AABFU7712M1ZK",
    state: "Maharashtra",
    district: "Thane",
    registeredAddress: "Sector 19A, Vashi, Navi Mumbai, Thane 400703",
    website: "https://urbaclean-systems.in",
    officialEmail: "contact@urbaclean-systems.in",
    representative: "Pooja Deshmukh",
    designation: "Managing Partner",
    foundingYear: 2022,
    stage: "Early Commercial",
    teamSize: 18,
    technicalEmployees: 12,
    domain: "Waste Management",
    technologies: ["Computer Vision at Edge", "YOLOv8 Custom Pipeline", "Fleet Telematics", "GIS Mapping"],
    certifications: ["ISO 9001:2015", "CE Hardware Compliant"],
    complianceStatus: "Verified & Compliant",
    verificationStatus: "Verified",
    verificationDate: "2026-03-01",
    pricingModel: "Tiered Hardware Lease + Monthly Platform Fee",
    typicalProjectSize: "₹30,00,000 - ₹80,00,000",
    implementationCapacity: "50 material recovery facilities and 200 collection vehicles",
    previousProjects: [
      { client: "Navi Mumbai Solid Waste Station", project: "Conveyor Belt Sorting Telemetry Pilot", value: "₹12,00,000", outcome: "Improved dry recyclable classification throughput by 35%" }
    ],
    capabilities: {
      "Computer Vision at Edge": true,
      "Conveyor Belt Integration": true,
      "GIS Route Telematics": true,
      "Real-Time Reporting API": true,
      "Hazardous waste sensor integration": false,
      "Offline cache support": true,
      "Marathi & Hindi language UI": true
    },
    matchScores: {
      "OPP-MH-2026-002": {
        score: 91,
        recommendation: "Recommended for Review",
        matchingPoints: [
          "Edge computer vision pipeline customized for Indian municipal solid waste categories",
          "Operational telemetry tested on high-speed conveyor belts",
          "Navi Mumbai local operational office for rapid physical maintenance",
          "Bilingual Marathi & Hindi user dashboard interface ready"
        ]
      }
    }
  },
  {
    id: "ST-2026-883",
    name: "MedVigil Technologies Pvt Ltd",
    legalName: "MedVigil Technologies Private Limited",
    registrationNumber: "U85110MH2020PTC341102",
    pan: "AAECM9921B",
    gstin: "27AAECM9921B1ZW",
    state: "Maharashtra",
    district: "Nagpur",
    registeredAddress: "IT Park, Gayatri Nagar, Nagpur 440022",
    website: "https://medvigil-tech.in",
    officialEmail: "govt-solutions@medvigil-tech.in",
    representative: "Dr. Aniruddha Patil",
    designation: "Founder & Chief Medical Information Officer",
    foundingYear: 2020,
    stage: "Mature / Scaled",
    teamSize: 42,
    technicalEmployees: 28,
    domain: "Healthcare",
    technologies: ["HL7/FHIR Telemetry", "WebRTC Low Bandwidth", "Early Warning Score Algorithm", "Cloud EMR"],
    certifications: ["ISO 13485:2016", "ISO 27001:2022", "HIPAA Aligned", "DISHA Guideline Compliant"],
    complianceStatus: "Verified & Compliant",
    verificationStatus: "Verified",
    verificationDate: "2026-01-20",
    pricingModel: "Per-Bed Per-Month Hardware + Cloud Tele-ICU Platform",
    typicalProjectSize: "₹40,00,000 - ₹1,20,00,000",
    implementationCapacity: "250 ICU beds across 20 remote facilities",
    previousProjects: [
      { client: "Civil Hospital Nagpur", project: "Remote ICU Hub Connection for 3 Peripheral Centers", value: "₹38,00,000", outcome: "Reduced avoidable inter-hospital transfers by 34%" }
    ],
    capabilities: {
      "HL7/FHIR Interoperability": true,
      "Low-bandwidth Audio-Video": true,
      "Continuous Vital Trend Streaming": true,
      "Early Warning Score (EWS) Engine": true,
      "Offline sync during intermittent WAN outage": true,
      "Solar battery backup compatibility": true,
      "Integrated regional doctor roster": true
    },
    matchScores: {
      "OPP-MH-2026-003": {
        score: 96,
        recommendation: "Recommended for Review",
        matchingPoints: [
          "ISO 13485 certified for medical device interoperability",
          "Low-bandwidth WebRTC tested over 2G/3G conditions in rural Vidarbha",
          "Complete HL7 and FHIR clinical records integration",
          "Active hub established in Nagpur for rapid on-site clinician training"
        ]
      }
    }
  },
  {
    id: "ST-2026-884",
    name: "KrishiVistara Solutions LLP",
    legalName: "KrishiVistara Solutions LLP",
    registrationNumber: "ABB-1890",
    pan: "AABFK4481P",
    gstin: "27AABFK4481P1ZQ",
    state: "Maharashtra",
    district: "Nashik",
    registeredAddress: "AgriTech Hub, Canada Corner, Sharanpur Road, Nashik 422005",
    website: "https://krishivistara.in",
    officialEmail: "contact@krishivistara.in",
    representative: "Sunita Shinde",
    designation: "Co-Founder & Head of Agronomy",
    foundingYear: 2021,
    stage: "Growth",
    teamSize: 22,
    technicalEmployees: 15,
    domain: "Agriculture Technology",
    technologies: ["Sentinel & Planet SAR Analytics", "Soil Moisture Index Engine", "IVR Call Engine", "MahaAgri API"],
    certifications: ["ISO 9001:2015", "Survey of India Geospatial Policy Aligned"],
    complianceStatus: "Verified & Compliant",
    verificationStatus: "Verified",
    verificationDate: "2026-02-28",
    pricingModel: "Area-Based Subscription (Per Hectare/Season) + SMS Service Fee",
    typicalProjectSize: "₹20,00,000 - ₹60,00,000",
    implementationCapacity: "2,00,000 hectares across Western Maharashtra and Marathwada",
    previousProjects: [
      { client: "Nashik Grape Growers Association", project: "Downy Mildew Micro-Climate Advisory", value: "₹18,00,000", outcome: "Prevented localized crop damage across 14,000 acres" }
    ],
    capabilities: {
      "Multispectral Image Pipeline": true,
      "Pest Infestation Prediction Model": true,
      "Soil Moisture Index Calculation": true,
      "SMS & Voice Advisory Gateway": true,
      "Drone survey photogrammetry": true,
      "Historical weather data fusion": true,
      "Crop loss geo-tagging": false
    },
    matchScores: {
      "OPP-MH-2026-004": {
        score: 89,
        recommendation: "Recommended for Review",
        matchingPoints: [
          "Specialized cotton and soybean crop phenology models for Maharashtra soil types",
          "Automated voice call advisory in Marathi dialects",
          "SAR satellite imagery independent of monsoon cloud cover",
          "Field agronomist support network across Vidarbha"
        ]
      }
    }
  },
  {
    id: "ST-2026-885",
    name: "TransRoute Mobility AI Pvt Ltd",
    legalName: "TransRoute Mobility AI Private Limited",
    registrationNumber: "U72900MH2022PTC389104",
    pan: "AACCT8810K",
    gstin: "27AACCT8810K1ZL",
    state: "Maharashtra",
    district: "Thane",
    registeredAddress: "Wagle Industrial Estate, Thane West 400604",
    website: "https://transroute-ai.in",
    officialEmail: "tenders@transroute-ai.in",
    representative: "Kunal Bansal",
    designation: "Chief Technology Officer",
    foundingYear: 2022,
    stage: "Early Commercial",
    teamSize: 19,
    technicalEmployees: 14,
    domain: "Smart Mobility",
    technologies: ["Radar Vehicle Sensors", "NTCIP Signal Controller Firmware", "Transit Priority Logic", "VISSIM Simulation"],
    certifications: ["ISO 9001:2015", "STQC Security Cleared"],
    complianceStatus: "Verified & Compliant",
    verificationStatus: "Verified",
    verificationDate: "2026-03-10",
    pricingModel: "Per-Junction Hardware & Firmware License + Support",
    typicalProjectSize: "₹35,00,000 - ₹90,00,000",
    implementationCapacity: "120 signalized junctions",
    previousProjects: [
      { client: "Thane Smart City Limited", project: "Bus Rapid Transit Priority Signaling Pilot", value: "₹24,00,000", outcome: "Reduced bus junction dwell time by 21%" }
    ],
    capabilities: {
      "Dynamic Signal Control": true,
      "Public Transit Priority Logic": true,
      "Corridor Congestion Analytics": true,
      "NTCIP Protocol Compatibility": true,
      "Emergency vehicle priority mode": true,
      "Pedestrian crossing countdown sync": false,
      "Air quality sensor integration": false
    },
    matchScores: {
      "OPP-MH-2026-005": {
        score: 93,
        recommendation: "Recommended for Review",
        matchingPoints: [
          "Demonstrated compatibility with Indian Standard signal controller hardware",
          "Transit priority algorithm verified on live urban corridor in Thane",
          "STQC security clearance already obtained for municipal traffic networks"
        ]
      }
    }
  }
];

export const DEMO_VERIFICATION_RECORDS = [
  {
    id: "VERIF-2026-901",
    entityName: "AquaTech Solutions Private Limited",
    cinOrLlpin: "U74999MH2021PTC358921",
    pan: "AAACA1234D",
    gstin: "27AAACA1234D1Z5",
    submittedAddress: "Wing B, Baner Tech Park, High Street, Baner, Pune 411045",
    status: "Verified",
    checks: {
      organisationNameMatch: { status: "Pass", detail: "Exact match with Ministry of Corporate Affairs (MCA) database" },
      registrationMatch: { status: "Pass", detail: "Active company status confirmed via MCA registry records" },
      addressMatch: { status: "Pass", detail: "Consistency verified between registered office and GST portal filings" },
      documentConsistency: { status: "Pass", detail: "Certificate of Incorporation, PAN card, and GSTIN match submitted details" },
      duplicateCheck: { status: "Pass", detail: "Zero duplicate entries found across national enterprise registries" },
      representativeCheck: { status: "Pass", detail: "Authorised representative DIN and Board Resolution verified" },
      anomalyDetection: { status: "Pass", detail: "No risk anomalies or adverse records flagged" }
    },
    lastUpdated: "2026-02-14",
    auditorNotes: "All statutory documents verified against official registrar records. Approved for government procurement participation."
  },
  {
    id: "VERIF-2026-902",
    entityName: "UrbaClean Systems LLP",
    cinOrLlpin: "AAB-9921",
    pan: "AABFU7712M",
    gstin: "27AABFU7712M1ZK",
    submittedAddress: "Sector 19A, Vashi, Navi Mumbai, Thane 400703",
    status: "Verified",
    checks: {
      organisationNameMatch: { status: "Pass", detail: "Name matches MCA LLP Master Data records" },
      registrationMatch: { status: "Pass", detail: "LLPIN verified and active in state jurisdiction" },
      addressMatch: { status: "Pass", detail: "Address consistent with utility bills and GST registration" },
      documentConsistency: { status: "Pass", detail: "LLP Agreement and partner authorizations confirmed" },
      duplicateCheck: { status: "Pass", detail: "No duplicate records detected" },
      representativeCheck: { status: "Pass", detail: "Designated Partner DPIN matched" },
      anomalyDetection: { status: "Pass", detail: "Standard operational profile" }
    },
    lastUpdated: "2026-03-01",
    auditorNotes: "Verification completed with authorised partner review. Status marked verified."
  },
  {
    id: "VERIF-2026-903",
    entityName: "Apex Water Automation LLP",
    cinOrLlpin: "AAC-1092",
    pan: "AABCA9918K",
    gstin: "27AABCA9918K1ZZ",
    submittedAddress: "Plot 44, MIDC Bhosari, Pune 411026",
    status: "Additional Verification Required",
    checks: {
      organisationNameMatch: { status: "Pass", detail: "Name matches registrar entry" },
      registrationMatch: { status: "Pass", detail: "LLPIN active" },
      addressMatch: { status: "Flag", detail: "Address difference noted between MCA filing (Bhosari) and GST portal (Chinchwad)" },
      documentConsistency: { status: "Pass", detail: "Founding documents authenticated" },
      duplicateCheck: { status: "Flag", detail: "Potential duplicate phone number linked to previously suspended entity" },
      representativeCheck: { status: "Pass", detail: "DPIN active" },
      anomalyDetection: { status: "Flag", detail: "Tax filing frequency gap observed in FY 2024-25" }
    },
    lastUpdated: "2026-03-24",
    auditorNotes: "Automated checks identify inconsistencies and potential duplicate records. Final verification is subject to authoritative records and authorised review. Clarification letter dispatched to applicant."
  }
];

export const DEMO_PILOT = {
  id: "PLT-MH-2026-01",
  opportunityId: "OPP-MH-2026-001",
  title: "Acoustic Leak Detection & Pressure Balancing Pilot",
  department: "Water Supply and Sanitation Department, Govt. of Maharashtra",
  startup: "AquaTech Solutions Private Limited",
  fullProjectValue: 5000000,
  pilotValue: 500000,
  pilotDurationDays: 60,
  startDate: "2026-04-01",
  endDate: "2026-05-30",
  currentDay: 57,
  objective: "Evaluate whether the non-invasive acoustic telemetry solution achieves the required reduction in non-revenue water loss, meets 10-minute leak response time, and integrates with the regional municipal SCADA console.",
  kpis: [
    {
      id: "kpi-1",
      name: "Water Wastage Reduction",
      description: "Reduction in physical distribution leakage measured at District Metering Zone #4",
      target: "20%",
      targetValue: 20,
      actual: "24%",
      actualValue: 24,
      variance: "+4.0%",
      status: "Achieved",
      evaluationMethod: "Independent ultrasonic electromagnetic bulk meter comparison over 45 days"
    },
    {
      id: "kpi-2",
      name: "Leak Detection Response Time",
      description: "Elapsed duration from physical burst or major fissure to automated SMS alert with GPS coordinates",
      target: "≤10 minutes",
      targetValue: 10,
      actual: "7 minutes",
      actualValue: 7,
      variance: "3 min faster than target",
      status: "Achieved",
      evaluationMethod: "Timestamp logs from 6 simulated control bursts and 3 real-world municipal leak events"
    },
    {
      id: "kpi-3",
      name: "System Telemetry Uptime",
      description: "Availability of cloud dashboard and sensor uplink during 60-day evaluation window",
      target: "≥95%",
      targetValue: 95,
      actual: "97%",
      actualValue: 97,
      variance: "+2.0%",
      status: "Achieved",
      evaluationMethod: "Automated hourly server heartbeat ping records"
    },
    {
      id: "kpi-4",
      name: "Pilot Execution Timeline",
      description: "Completion of sensor deployment, calibration, and final data verification report",
      target: "60 days",
      targetValue: 60,
      actual: "57 days",
      actualValue: 57,
      variance: "3 days ahead of schedule",
      status: "Achieved",
      evaluationMethod: "Site acceptance sign-off by Executive Engineer (Water Works)"
    }
  ],
  comprehensiveEvaluation: {
    pilotPerformance: "Strong",
    scalability: "High",
    security: "Compliant (ISO 27001 / OWASP Top 10 Certified)",
    compliance: "Fully Verified (All statutory declarations complete)",
    technicalCapability: "Strong (Proven edge telemetry architecture)",
    costEffectiveness: "High (Demonstrated 18-month payback based on saved water)",
    maintainability: "High (Modular component replacement without pipeline shutdown)",
    supportCapability: "Strong (Established regional service unit in Pune)",
    finalRecommendation: "Recommended for Procurement Review",
    disclaimer: "The final procurement decision must remain with the authorised government authority and applicable public procurement rules."
  }
};

export const DEMO_PROCUREMENT_CONTRACT = {
  contractId: "CTR-MH-WSSD-2026-088",
  workOrderNumber: "WO/2026/WSSD/PUNE/7821",
  opportunityTitle: "IoT-Enabled Non-Revenue Water Leak Detection & Pressure Balancing",
  department: "Water Supply and Sanitation Department, Govt. of Maharashtra",
  startup: "AquaTech Solutions Private Limited",
  contractValue: 5000000,
  platformServiceFeeRate: 0.02, // 2%
  platformServiceFeeAmount: 100000,
  netContractAmount: 4900000,
  awardDate: "2026-06-15",
  targetCompletionDate: "2027-06-14",
  slaUptime: "99.0% Annual Network Uptime",
  penaltiesClause: "Tiered review mechanism as per Maharashtra Public Procurement Standards",
  milestones: [
    {
      number: 1,
      name: "Baseline Network Survey, Sensor Delivery & Sensor Deployment (Zone 1-3)",
      sharePercentage: 20,
      amount: 1000000,
      baseAmount: 847458,
      gstAmount: 152542,
      deductions: {
        tdsIt: 16949, // 2% TDS under IT Act
        tdsGst: 16949, // 2% GST TDS
        laborCess: 8475, // 1% Labor Welfare Cess
        securityRetention: 42373 // 5% Retention
      },
      netDisbursed: 915254,
      dueDate: "2026-08-30",
      status: "Payment Released",
      completionDate: "2026-08-22",
      releaseDate: "2026-08-24",
      invoiceNumber: "INV/AQUA/2026/041",
      invoiceDate: "2026-08-22",
      mbReference: "MB/PUNE/WSSD/2026/Vol-IV/P.45",
      releaseReference: "IFT/MH/WSSD/2026/0921",
      pfmsToken: "PFMS/MH/2026/8849102",
      bankUtr: "RBIPUN202608249018442",
      escrowStatus: "Released from Escrow",
      delayDays: 0,
      delayReason: null,
      delayDesk: null
    },
    {
      number: 2,
      name: "Full City District Metering Zone Deployment (1,500 Acoustic Sensors Installed)",
      sharePercentage: 30,
      amount: 1500000,
      baseAmount: 1271186,
      gstAmount: 228814,
      deductions: {
        tdsIt: 25424,
        tdsGst: 25424,
        laborCess: 12712,
        securityRetention: 63559
      },
      netDisbursed: 1372881,
      dueDate: "2026-11-30",
      status: "Payment Released",
      completionDate: "2026-11-20",
      releaseDate: "2026-11-22",
      invoiceNumber: "INV/AQUA/2026/089",
      invoiceDate: "2026-11-20",
      mbReference: "MB/PUNE/WSSD/2026/Vol-IV/P.92",
      releaseReference: "IFT/MH/WSSD/2026/1188",
      pfmsToken: "PFMS/MH/2026/9110482",
      bankUtr: "RBIPUN202611221088421",
      escrowStatus: "Released from Escrow",
      delayDays: 0,
      delayReason: null,
      delayDesk: null
    },
    {
      number: 3,
      name: "SCADA Interoperability Integration & Central Command Dashboard Commissioning",
      sharePercentage: 30,
      amount: 1500000,
      baseAmount: 1271186,
      gstAmount: 228814,
      deductions: {
        tdsIt: 25424,
        tdsGst: 25424,
        laborCess: 12712,
        securityRetention: 63559
      },
      netDisbursed: 1372881,
      dueDate: "2027-02-28",
      status: "Pending Approval",
      completionDate: "2027-02-18",
      releaseDate: null,
      invoiceNumber: "INV/AQUA/2027/012",
      invoiceDate: "2027-02-18",
      mbReference: "MB/PUNE/WSSD/2027/Vol-V/P.14",
      releaseReference: null,
      pfmsToken: "PFMS/MH/2027/PENDING-03",
      bankUtr: null,
      escrowStatus: "Funds Escrowed & Locked in SBI Treasury Sub-Account",
      delayDays: 12,
      delayReason: "Telemetry sensor calibration verification variance between Pune Municipal testing team and vendor benchmark data. Technical reconciliation audit held on Feb 24.",
      delayDesk: "Superintending Engineer (Quality Assurance & Evaluation Cell), Pune Water Works",
      msmeAgingDays: 28,
      ldStatus: "Grace Period Active (Clause 18.4) — Liquidated damages waived for technical reconciliation"
    },
    {
      number: 4,
      name: "Final Acceptance, 6-Month Operations Review & Knowledge Transfer to Municipal Engineers",
      sharePercentage: 20,
      amount: 1000000,
      baseAmount: 847458,
      gstAmount: 152542,
      deductions: {
        tdsIt: 16949,
        tdsGst: 16949,
        laborCess: 8475,
        securityRetention: 42373
      },
      netDisbursed: 915254,
      dueDate: "2027-06-14",
      status: "Payment Due",
      completionDate: null,
      releaseDate: null,
      invoiceNumber: "Unbilled",
      invoiceDate: null,
      mbReference: "Awaiting Field Completion",
      releaseReference: null,
      pfmsToken: null,
      bankUtr: null,
      escrowStatus: "Awaiting Escrow Allocation upon Milestone 3 Sign-off",
      delayDays: 0,
      delayReason: null,
      delayDesk: "Department Project Cell"
    }
  ]
};

export const DEMO_PROJECT_MONITORING = {
  contractId: "CTR-MH-WSSD-2026-088",
  projectName: "Pune District Water Telemetry & Pressure Balancing Network",
  department: "Water Supply and Sanitation Department",
  contractor: "AquaTech Solutions Private Limited",
  totalBudget: 5000000,
  budgetUsed: 2500000,
  plannedProgressPercentage: 75,
  actualProgressPercentage: 68,
  variancePercentage: -7,
  status: "At Risk", // On Schedule, At Risk, Delayed, Critical
  delayDays: 7,
  deadline: "2027-02-28",
  delayStage: "Review Required", // Reminder, Overdue, Review Required, Escalated for Review
  escalationHierarchy: [
    { level: 1, role: "Startup Technical Lead", name: "Vikram Kulkarni", status: "Notified (Action plan requested)" },
    { level: 2, role: "Project Officer (Govt)", name: "Shri S. R. Patil, Executive Engineer", status: "Active Case Review Scheduled" },
    { level: 3, role: "Department Authority", name: "Joint Secretary, WSSD Mantralaya", status: "Briefed; Standing by for 14-day review" }
  ],
  governanceNote: "Do not automatically punish or blacklist a startup. Procedural review provides opportunity for remediation before formal administrative notices.",
  actionItems: [
    { id: "act-1", task: "Supply chain component dispatch verification for SCADA gateway cards", owner: "AquaTech", status: "In Progress" },
    { id: "act-2", task: "Municipal control room server rack clearance and network firewall port opening", owner: "WSSD IT Cell", status: "Pending Approval" }
  ]
};

export const DEMO_AUDIT_LOGS = [
  { id: "LOG-9912", timestamp: "2026-09-28 11:32:04 IST", actor: "System Verification Engine", event: "Automated MCA registry comparison executed for entity U74999MH2021PTC358921", result: "Pass" },
  { id: "LOG-9913", timestamp: "2026-09-28 10:14:22 IST", actor: "Executive Engineer (WSSD)", event: "Milestone 3 verification report uploaded for Project CTR-MH-WSSD-2026-088", result: "Submitted" },
  { id: "LOG-9914", timestamp: "2026-09-27 16:45:10 IST", actor: "Finance Desk Officer", event: "Milestone 2 payment release authorization recorded (₹15,00,000)", result: "Success" },
  { id: "LOG-9915", timestamp: "2026-09-26 14:20:00 IST", actor: "Auditor (Admin)", event: "Proposed platform service fee rate validated at 2.0% as per standing rules", result: "Recorded" },
  { id: "LOG-9916", timestamp: "2026-09-25 09:12:45 IST", actor: "System Scheduler", event: "Automated delay detection check completed: 1 project marked At Risk (7-day variance)", result: "Notice Sent" }
];

/* ==========================================================================
   data.js  —  EDIT YOUR CONTENT HERE
   Everything on the site that repeats (skills, experience, projects) lives in
   this file. Change the text between the quotation marks. Keep the commas,
   brackets and quotation marks exactly as they are.
   ========================================================================== */

const portfolioData = {
  name: "Nkechi Udeh",
  title: "Business Analyst | Data & Process Improvement Analyst",
  location: "Manchester, United Kingdom",
  email: "udehnkechi.nu@gmail.com",
  phone: "+44 7379 476687",
  linkedin: "https://www.linkedin.com/in/nkechi-udeh-82a2b1193/",
  github: "https://github.com/Nkechiudeh-30",
  resume: "assets/documents/Nkechi_Udeh_CV.pdf",
  formspreeEndpoint: "https://formspree.io/f/mpppzekj" // also set in index.html <form action>
};

/* ---------- CORE COMPETENCIES ---------- */
const skillGroups = [
  {
    title: "Business Analysis",
    items: [
      "Business Requirements Analysis", "Requirements Elicitation and Documentation",
      "Stakeholder Analysis and Engagement", "Business Process Mapping (AS-IS and TO-BE)",
      "Gap Analysis", "Root Cause Analysis", "Functional and Non-Functional Requirements",
      "User Stories and Acceptance Criteria", "Requirements Prioritisation (MoSCoW)",
      "Business Requirements Documentation (BRD)", "Process Improvement and Solution Recommendations",
      "Risk, Assumptions, Dependencies and Constraints Analysis", "Requirements Traceability"
    ]
  },
  {
    title: "Data & Analytics",
    items: [
      "Data Analysis and Interpretation", "Data Cleaning and Preparation",
      "Data Visualisation and Dashboard Development", "KPI Definition and Performance Monitoring",
      "Trend and Performance Analysis", "Data-Driven Business Recommendations",
      "Excel-Based Data Analysis", "Business Performance Reporting"
    ]
  },
  {
    title: "Tools",
    list: true,
    items: [
      "<strong>Microsoft Excel</strong> — data analysis, pivot tables, pivot charts, calculations and reporting",
      "<strong>Microsoft Power BI</strong> — dashboard development, data visualisation, data modelling and DAX fundamentals",
      "<strong>Microsoft Word</strong> — Business Requirements Documents, project documentation and professional reporting",
      "<strong>Microsoft PowerPoint</strong> — presentation of findings, recommendations and project deliverables",
      "<strong>NVivo</strong> — qualitative data organisation and thematic analysis in academic research"
    ]
  },
  {
    title: "Methodologies & Techniques",
    items: [
      "Requirements Elicitation and Analysis", "AS-IS / TO-BE Process Analysis", "Gap Analysis",
      "Root Cause Analysis", "MoSCoW Prioritisation", "KPI-Based Performance Measurement",
      "Data-Driven Decision-Making", "Thematic Analysis for Qualitative Research",
      "Stakeholder-Centred Problem-Solving"
    ]
  },
  {
    title: "Other Relevant Skills",
    items: [
      "Stakeholder Communication and Relationship Management", "Analytical and Critical Thinking",
      "Problem-Solving and Decision Support", "Business and Technical Documentation",
      "Cross-Functional Collaboration", "Process Coordination and Improvement",
      "Research and Information Synthesis", "Presentation and Report Writing",
      "Organisation and Attention to Detail", "Strategic Thinking and Continuous Improvement"
    ]
  }
];

/* ---------- EXPERIENCE (newest first) ---------- */
const experience = [
  {
    company: "10Alytics",
    role: "Business Analyst",
    location: "Remote / UK",
    start: "June 2026", // NOTE: your CV says June 2025 — please confirm which is correct
    end: "Present",
    description: "Developing practical business analysis skills through structured training and capstone projects, translating business problems into analytical questions, evaluating datasets, and presenting data-driven insights to support business decision-making.",
    achievements: [
      "Developed a retail sales performance analysis project using Excel to examine sales trends and business performance.",
      "Built a business performance dashboard in Power BI to visualise KPIs and support management reporting.",
      "Conducted workforce analysis using SQL to explore employee-related data and identify patterns relevant to workforce planning.",
      "Strengthened the ability to convert raw data and business questions into actionable recommendations through practical capstone projects."
    ],
    impact: "Demonstrates the ability to bridge business needs and data analysis by transforming raw information into meaningful insights, visual performance reports and recommendations that support informed decision-making.",
    responsibilities: [
      "Analyse business scenarios and identify problems, performance gaps and opportunities for improvement.",
      "Translate business objectives into analytical questions, KPIs and reporting requirements.",
      "Clean, transform and analyse datasets using Excel, SQL and Power BI to identify trends, patterns and performance drivers.",
      "Develop interactive dashboards and reports to communicate insights and support evidence-based decisions.",
      "Apply business analysis techniques, including stakeholder analysis, requirements elicitation, process analysis and root-cause analysis.",
      "Document findings, formulate recommendations and communicate analytical outcomes through structured reports and presentations."
    ],
    tools: "Excel (PivotTables, formulas, data cleaning and visualisation), Power BI (Power Query, data modelling, DAX and dashboards), SQL, business requirements documentation, stakeholder analysis, process mapping and KPI analysis."
  },
  {
    company: "Commonwealth Scholarship Commission (CSC)",
    role: "Regional Network Coordinator",
    location: "Southwest England, United Kingdom",
    start: "October 2024",
    end: "October 2025",
    description: "Coordinated a regional network of Commonwealth Scholars, facilitating stakeholder engagement, information sharing and collaborative activities. The role involved understanding members' needs, coordinating activities across multiple stakeholders, resolving operational challenges and communicating information to support effective network delivery.",
    achievements: [
      "Strengthened regional network engagement and coordination through structured communication, stakeholder relationship management and proactive follow-up, ensuring effective information sharing and alignment of activities."
    ],
    impact: "Supported effective regional programme delivery by improving stakeholder coordination, facilitating information flow and helping translate programme objectives into organised activities and practical outcomes.",
    responsibilities: [
      "Gathered feedback and identified the needs, interests and participation challenges of scholars across the region.",
      "Coordinated communication between scholars, programme stakeholders and relevant university or community contacts.",
      "Planned and organised network activities, translating programme objectives into actionable tasks, timelines and deliverables.",
      "Maintained records of engagement, monitored participation and shared relevant updates to support coordination and reporting.",
      "Identified operational issues, followed up on outstanding actions and facilitated solutions through stakeholder collaboration.",
      "Communicated programme information, expectations and updates clearly to different stakeholder groups."
    ],
    tools: "Microsoft Excel, Microsoft Word, Microsoft Teams, email, stakeholder mapping, feedback collection, activity tracking, meeting coordination, reporting and action logs."
  },
  {
    company: "African School of Economics (ASE)",
    role: "HR Administrator",
    location: "Nigeria",
    start: "February 2023",
    end: "September 2024",
    description: "Supported HR operations and administrative processes by maintaining employee records, coordinating recruitment and onboarding, monitoring workforce activities and contributing to process improvements. The role required analysing operational needs, maintaining accurate information, coordinating stakeholders and supporting management decisions.",
    achievements: [
      "Coordinated cross-functional stakeholders to deliver a scholarship launch event at the Presidential Villa in Abuja, supporting the award of scholarships to 200 students across 33 states while meeting critical event deadlines.",
      "Contributed to the development of an employee reward and recognition system, supporting staff engagement and strengthening the recognition of employee performance."
    ],
    impact: "Supported more consistent HR operations, improved access to workforce information and contributed to initiatives designed to strengthen employee engagement, administrative efficiency and organisational delivery.",
    responsibilities: [
      "Collected, maintained and organised employee information to support accurate record-keeping and HR reporting.",
      "Coordinated recruitment and onboarding processes, including gathering requirements from managers and tracking recruitment activities.",
      "Supported performance evaluation and workforce planning processes by coordinating documentation, timelines and stakeholder inputs.",
      "Reviewed administrative workflows to identify inefficiencies, documentation gaps and opportunities to improve operational consistency.",
      "Assisted with the development and implementation of HR policies, procedures and employee engagement initiatives.",
      "Coordinated with management and employees to clarify requirements, resolve administrative issues and communicate process updates."
    ],
    tools: "Microsoft Excel, Microsoft Word, Microsoft PowerPoint, email, employee record management, recruitment tracking, process documentation, performance tracking and stakeholder coordination."
  },
  {
    company: "African School of Economics (ASE)",
    role: "Communication Assistant",
    location: "Abuja, Nigeria",
    start: "August 2022",
    end: "February 2023",
    description: "Supported organisational communication, information management and stakeholder engagement by preparing content, coordinating information across teams and ensuring that messages were clear, accurate and aligned with organisational objectives.",
    achievements: [
      "Delivered timely, clear and accurate communications on institutional activities and initiatives, increasing public awareness and attracting interest from relevant audiences.",
      "Improved consistency of information across communication channels by validating content, coordinating stakeholder inputs and tailoring messages to audience needs."
    ],
    impact: "Helped improve the flow and clarity of organisational information, enabling stakeholders to understand updates, coordinate activities and act on relevant information more effectively.",
    responsibilities: [
      "Gathered information from internal stakeholders to understand communication needs, confirm details and develop relevant content.",
      "Prepared and edited communications, reports, announcements and supporting materials for different audiences.",
      "Coordinated information flow between teams to ensure consistent messaging and timely dissemination of updates.",
      "Organised communication materials and maintained relevant records to support information retrieval and continuity.",
      "Reviewed content for accuracy, consistency and alignment with organisational requirements.",
      "Supported the planning and delivery of communication activities, coordinating tasks and following up on outstanding information."
    ],
    tools: "Microsoft Word, Excel, PowerPoint, email, digital communication platforms, content planning and document management."
  },
  {
    company: "Hillfort Preparatory School", // taken from your CV (the input form had a placeholder)
    role: "School Administrator",
    location: "Abuja, Nigeria",
    start: "January 2021",
    end: "May 2022",
    description: "Managed day-to-day school administrative activities, supporting the coordination of records, schedules, stakeholder communication and operational processes.",
    achievements: [
      "Improved school administration and parent engagement through effective record management, timely communication and coordinated school activities, strengthening parental trust and contributing to increased pupil enrolment and referrals."
    ],
    impact: "Contributed to efficient school operations through reliable record management, better coordination and timely communication, supporting informed decisions and consistent administrative service delivery.",
    responsibilities: [
      "Maintained and updated student, staff and administrative records to support accurate information management.",
      "Coordinated schedules, meetings, school activities and administrative workflows across relevant stakeholders.",
      "Collected and verified information for reports, registers and operational documentation.",
      "Monitored administrative tasks and followed up on outstanding actions to support timely completion.",
      "Responded to enquiries from parents, students, staff and other stakeholders, clarifying needs and directing issues appropriately.",
      "Identified recurring administrative challenges and supported improvements to record-keeping, communication and daily processes."
    ],
    tools: "Microsoft Excel, Word, PowerPoint, email, spreadsheets, record-management systems and scheduling tools."
  }
];

/* ---------- EDUCATION (from your CV) ---------- */
const education = [
  { title: "MSc Sustainable Business Management — Merit", place: "University of Exeter, UK", years: "2024–2025" },
  { title: "BSc Business Administration (HRM Major)", place: "Bells University of Technology, Nigeria", years: "2014–2018" }
];

/* ---------- PROJECTS ---------- */
const projects = [
  {
    id: "brightshore",
    title: "Claims Handling Process Improvement at Brightshore Insurance",
    category: "Business Analysis / Process Improvement",
    image: "assets/images/project-01.jpg",
    alt: "Process mapping diagram comparing current-state and future-state insurance workflows",
    short: "Analysed an inefficient insurance claims process and developed a proposed future-state workflow, root-cause analysis and Business Requirements Document (BRD) to improve settlement speed, customer experience, operational efficiency and process visibility.",
    role: "Business Analyst — 10Alytics Capstone Project",
    tools: ["Draw.io", "Microsoft Word", "Fishbone diagram", "Process maps", "BRD"],
    skills: ["Gap analysis", "Root cause analysis", "AS-IS / TO-BE mapping", "MoSCoW prioritisation", "Requirements traceability"],
    problem: "The existing claims process relied on manual completeness checks, repeated correction cycles, email-based hand-offs and manual customer updates. Unreliable policy and fraud-check system availability further delayed claim processing. The case-study baseline showed average settlement of 21 days, claim abandonment of 19% and system availability of 93%.",
    objective: "Identify gaps between the current and desired claims processes, investigate potential root causes, map the AS-IS and TO-BE workflows, and document prioritised requirements for a more efficient, transparent and reliable claims service.",
    approach: [
      "Business problem and scope analysis.",
      "AS-IS process mapping and gap analysis.",
      "Fishbone cause-and-effect analysis to develop root-cause hypotheses.",
      "TO-BE process design.",
      "Requirements elicitation and documentation.",
      "MoSCoW prioritisation, business rules, acceptance criteria and requirements traceability."
    ],
    dataSource: "The supplied Brightshore Insurance case-study brief. No transaction-level claims dataset was provided; therefore, root causes were treated as hypotheses requiring validation.",
    analysis: [
      "Examined the existing claims lifecycle across claim notification, assessment and settlement to identify manual activities, hand-off delays and repeated work.",
      "Compared baseline performance with management targets to establish the gaps: settlement time of 21 days against a target of 10 days or less; abandonment of 19% against a target of 8% or less; and availability of 93% against a target of at least 99.5%.",
      "Developed a fishbone analysis and mapped the proposed workflow to address incomplete submissions, limited status visibility, manual communication and system exceptions."
    ],
    findings: [
      "Incomplete or inconsistent claim information can trigger correction loops and repeat assessment.",
      "Manual hand-offs and customer updates limit process visibility and increase administrative effort.",
      "Unreliable system availability can interrupt policy and fraud checks.",
      "The absence of consistent stage-level tracking makes bottlenecks difficult to identify and measure."
    ],
    recommendations: [
      "Introduce guided claim submission and early validation of mandatory information and supporting documents.",
      "Provide persistent claim references, customer status visibility and automated event-triggered notifications.",
      "Improve resilience of policy and fraud-check integrations using exception handling and recovery procedures.",
      "Assign clear process ownership, stage-level service targets and management dashboard reporting.",
      "Retain human judgement for complex, disputed or high-risk claims."
    ],
    outcome: "Produced an end-to-end BA solution comprising a gap analysis, fishbone root-cause analysis, AS-IS and TO-BE process maps, and a structured BRD. The BRD documented 7 business requirements, 12 functional requirements and 7 non-functional requirements, with prioritisation, business rules, risks, dependencies, acceptance criteria and traceability.",
    impact: "The proposed solution establishes a roadmap towards reducing settlement time to 10 days or less, reducing claim abandonment to 8% or less, and improving system availability to at least 99.5%. These are proposed targets, not verified results from an implemented system.",
    github: "", dashboard: "" // optional: paste a URL between the quotes
  },
  {
    id: "northwind",
    title: "Sales Performance Analysis & Revenue Optimisation — Northwind Retail Co.",
    category: "Data Analysis / Business Intelligence",
    image: "assets/images/project-02.jpg",
    alt: "Excel sales dashboard showing revenue, profit and sales by country",
    short: "Analysed retail transaction data to investigate sales performance, profitability, discount effectiveness, returns and customer loyalty. Built an interactive Excel dashboard to communicate findings and support management planning.",
    role: "Data Analyst — 10Alytics Business Analysis Programme Capstone",
    tools: ["Microsoft Excel", "PivotTables", "XLOOKUP", "Slicers", "Timeline filters"],
    skills: ["Data cleaning", "KPI analysis", "Comparative analysis", "Dashboard development"],
    problem: "Management needed to understand sales and profitability drivers across stores and regions, assess discount and return patterns, and identify opportunities to improve revenue performance and customer loyalty.",
    objective: "Clean and prepare the FY2024 transaction dataset, answer 13 business questions, identify performance trends and translate the analysis into actionable recommendations.",
    approach: [
      "Data cleaning and validation.",
      "Data enrichment with lookup functions and calculated columns (XLOOKUP, IF, IFERROR, SUMIF, COUNTIF).",
      "Exploratory data analysis, KPI analysis and comparative analysis.",
      "PivotTable analysis and interactive dashboard development."
    ],
    dataSource: "Northwind Retail Co. fictional retail transaction dataset for FY2024, supplied for the capstone project.",
    analysis: [
      "Cleaned the source data, addressing inconsistent dates, missing values and product ID discrepancies; the capstone reports a reduction from 732 raw rows to 561 clean rows.",
      "Enriched the dataset using lookup functions and calculated columns to support analysis of sales, profitability, discounts, returns and loyalty.",
      "Examined regional, monthly, store-level, category-margin and customer-loyalty patterns through 13 business questions."
    ],
    findings: [
      "Data quality issues required resolution before reliable performance analysis.",
      "Sales, profitability, discount effectiveness and returns needed to be considered together rather than relying on revenue alone.",
      "Regional, store-level and customer-loyalty comparisons provided a basis for identifying areas requiring management attention."
    ],
    recommendations: [
      "Use the dashboard to monitor sales and profitability by region, store and period.",
      "Review discounting practices against profitability and return patterns.",
      "Use customer loyalty insights to inform targeted retention and engagement initiatives.",
      "Investigate underperforming stores, categories or periods before allocating additional resources.",
      "Establish consistent data-quality checks for future reporting."
    ],
    outcome: "Delivered a cleaned and enriched dataset, analysis of 13 business questions, an interactive executive dashboard and five strategic recommendations for FY2025 planning.",
    impact: "Provided a structured basis for management to monitor sales performance and investigate revenue and profitability opportunities. Financial improvements were not measured or verified through implementation.",
    github: "", dashboard: ""
  },
  {
    id: "novamed",
    title: "Sales Performance Analysis & Reporting — NovaMed Solutions",
    category: "Business Intelligence / Data Analysis",
    image: "assets/images/project-03.jpg",
    alt: "Power BI pharmacy sales and profitability dashboard showing product performance by margin",
    short: "Developed a multi-page Power BI report to analyse sales and profitability across pharmaceutical products and customers, providing interactive views of revenue, profit, cost of goods sold and customer patterns.",
    role: "Data Analyst — 10Alytics Business Analysis Programme Capstone",
    tools: ["Microsoft Power BI", "Data modelling", "KPI cards", "Interactive report pages"],
    skills: ["Data preparation", "KPI reporting", "Visual analytics", "Comparative analysis"],
    problem: "Management required a consolidated view of sales performance to understand which products and customers contributed to business results and where further investigation into profitability and sales performance was needed.",
    objective: "Transform the supplied sales dataset into an interactive reporting solution that enables users to explore performance trends, compare products and customers, and support evidence-based commercial decisions.",
    approach: [
      "Data preparation and exploratory analysis.",
      "KPI reporting and comparative analysis.",
      "Visual analytics and interactive dashboard development."
    ],
    dataSource: "NovaMed Solutions sales dataset supplied for the capstone, covering 200 customers and 40 drug products.",
    analysis: [
      "Analysed sales and profitability indicators, including revenue, profit and cost of goods sold.",
      "Compared product performance and customer contributions using rankings, trends and customer-level views.",
      "Developed report pages for product performance, transaction-level records and customer demographics to support deeper exploration."
    ],
    findings: [
      "The dataset enabled performance comparisons across 40 products and 200 customers.",
      "Revenue, profit and cost of goods sold provided complementary perspectives for evaluating commercial performance.",
      "Product, customer and geographic views enabled more focused investigation of performance differences."
    ],
    recommendations: [
      "Monitor revenue, profit and cost of goods sold together to avoid making decisions based on sales volume alone.",
      "Investigate products with comparatively weak profitability and identify the drivers of their performance.",
      "Use customer and geographic analysis to identify opportunities for targeted sales engagement.",
      "Adopt a consistent reporting cadence using the dashboard to monitor trends and investigate exceptions."
    ],
    outcome: "Produced a multi-page Power BI report featuring KPI cards, trend charts, product rankings, transaction-level information and customer/geographic analysis.",
    impact: "Created an interactive reporting solution that supports performance monitoring and commercial investigation. Specific revenue improvements or cost savings were not measured.",
    github: "", dashboard: ""
  },
  {
    id: "nextgen",
    title: "Strategic Workforce Optimisation — NextGen Corp.",
    category: "Data Analysis / Process Improvement",
    image: "assets/images/project-04.jpg",
    alt: "HR analytics dashboard showing attrition by department, gender, age and job role",
    short: "Used SQL to investigate workforce indicators and support evidence-based recommendations relating to employee departures, performance, departmental salaries and absenteeism.",
    role: "Data Analyst — 10Alytics Business Analysis Programme Capstone",
    tools: ["SQL", "PostgreSQL", "pgAdmin 4"],
    skills: ["Data aggregation", "GROUP BY analysis", "Ranking queries", "Departmental comparison"],
    problem: "Management needed a clearer understanding of workforce patterns across departments to identify areas requiring further investigation and improve workforce planning and employee management decisions.",
    objective: "Query and analyse a relational workforce database, answer five business questions and translate the results into practical recommendations for workforce monitoring and planning.",
    approach: [
      "Relational database restoration.",
      "SQL querying, data aggregation, GROUP BY analysis and ranking queries.",
      "Departmental comparisons and insight-based recommendations."
    ],
    dataSource: "The supplied NextGen Corp. workforce database used in the 10Alytics capstone.",
    analysis: [
      "Restored and queried the relational database to prepare the information for analysis.",
      "Used SQL aggregations, GROUP BY and ranking queries to investigate five business questions concerning employee departures, performance, salary differences and absenteeism.",
      "Compared workforce indicators across departments to identify patterns that warranted further investigation."
    ],
    findings: [
      "Employee departures, performance, salary and absenteeism provide complementary indicators for understanding workforce challenges.",
      "Departmental comparisons can help identify differences requiring closer investigation.",
      "Workforce patterns should be examined alongside relevant contextual factors before drawing conclusions about their causes."
    ],
    recommendations: [
      "Investigate employee departure patterns by department and explore possible contributing factors.",
      "Review departmental salary differences against role responsibilities, experience and relevant market benchmarks.",
      "Use performance information to identify opportunities for employee development and support.",
      "Monitor absenteeism trends to identify recurring patterns and assess potential operational implications."
    ],
    outcome: "Completed five SQL-led business investigations and translated the analysis into recommendations for further workforce investigation, salary benchmarking, employee development and absence monitoring.",
    impact: "Provided a structured analytical basis for workforce planning and management review. The recommendations were proposed actions; changes in retention, productivity or absenteeism were not measured.",
    github: "", dashboard: ""
  }
];

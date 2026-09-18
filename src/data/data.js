export const journalInfo = {
  acronym: "IJMAR",
  fullName: "International Journal of Multidisciplinary Advanced Research",
  issn: "E-ISSN: 2582-8800 | Print ISSN: 2582-8797",
  eIssn: "2582-8800",
  publisher: "Shri Ramswaroop Memorial University (SRMU)",
  universityLocation: "Lucknow-Deva Road, Barabanki, Uttar Pradesh, India",
  indexing: ["Scopus Indexed Companion", "Google Scholar", "CrossRef (DOI)", "DOAJ Approved", "UGC-CARE Listed Guidelines"],
  tagline: "Advancing Global Scientific Discovery, Technological Innovation & Multidisciplinary Research",
  shortDesc: "The International Journal of Multidisciplinary Advanced Research (IJMAR) is an interdisciplinary and multidisciplinary academic journal devoted to the advancement and dissemination of knowledge in the broad domains of Humanities and Social Sciences, Public Health, Law, Management and Commerce, Education and Journalism.",
  stats: [
    { label: "Research Publications", value: "195+", icon: "FileText" },
    { label: "Patents Published", value: "47", icon: "Lightbulb" },
    { label: "Books & Chapters", value: "68", icon: "BookOpen" },
    { label: "Global Researchers", value: "437+", icon: "Users" },
    { label: "Acceptance Rate", value: "28%", icon: "CheckCircle" },
    { label: "Avg. Review Time", value: "14 Days", icon: "Clock" }
  ]
};

export const navLinks = [
  {
    name: "About",
    href: "#about",
    dropdown: [
      { title: "Vision & Scope", desc: "Aims, multidisciplinary domains, and research spectrum", href: "#about" },
      { title: "Publication Details", desc: "Peer-review rigor, indexing, frequency & APC policy", href: "#publication-details" },
      { title: "Editorial Board", desc: "Distinguished global editors, patron committee & advisory", href: "#editorial-board" },
      { title: "Contact Us", desc: "Editorial office, publisher inquiries & help desk", href: "#contact" }
    ]
  },
  {
    name: "Guidelines",
    href: "#guidelines",
    dropdown: [
      { title: "Author Guidelines", desc: "Step-by-step manuscript preparation and formatting", href: "#guidelines" },
      { title: "Manuscript Template (LaTeX / Word)", desc: "Standard camera-ready reference templates", href: "#template" },
      { title: "Publication Ethics & Malpractice", desc: "COPE guidelines, originality, and copyright policies", href: "#ethics" },
      { title: "Reviewer Guidelines", desc: "Double-blind evaluation criteria and standards", href: "#reviewers" }
    ]
  },
  {
    name: "Papers",
    href: "#featured-articles",
    dropdown: [
      { title: "Current Issue (Vol. 12, Issue 4)", desc: "Latest peer-reviewed articles published in 2026", href: "#featured-articles" },
      { title: "Archives (2018 – 2026)", desc: "Browse past volumes, issues, and special editions", href: "#archives" },
      { title: "Special Issue: Generative AI & Robotics", desc: "Dedicated thematic track with guest editors", href: "#special-issues" },
      { title: "Most Cited Papers", desc: "High-impact papers ranked by academic citations", href: "#featured-articles" }
    ]
  }
];

export const generalInfoData = [
  {
    id: "mission",
    title: "Mission",
    tagline: "Igniting Research & Scholarly Excellence",
    icon: "Target",
    accentColor: "from-amber-500 to-amber-600",
    badge: "Core Purpose",
    summary: "Dedicated to promoting high-quality, authentic, and rigorous research in diverse disciplines.",
    points: [
      "To promote high-quality, authentic, and rigorous research in diverse disciplines.",
      "To provide an international platform for critical thinking, intellectual diversity, and innovation.",
      "To uphold the highest standards of academic integrity, ethical research, and scholarly publishing.",
      "To encourage research addressing contemporary global and local challenges."
    ]
  },
  {
    id: "general-info",
    title: "Scope & Domains",
    tagline: "Multidisciplinary Open-Access Forum",
    icon: "Layers",
    accentColor: "from-blue-600 to-brand-900",
    badge: "Overview & Indexing",
    isPrimary: true,
    summary: "The International Journal of Multidisciplinary Advanced Research (IJMAR) is a multidisciplinary and interdisciplinary scholarly journal dedicated to the publication of original, high-quality, and rigorous research.",
    points: [
      "Covers Humanities and Social Sciences, Public Health, Law, Management and Commerce, Education and Journalism.",
      "Fosters critical inquiry and meaningful academic dialogue.",
      "Encourages research that contributes to knowledge creation, evidence-based policymaking, social transformation, and sustainable development."
    ]
  },
  {
    id: "vision",
    title: "Vision",
    tagline: "Pioneering Sustainable Technological Futures",
    icon: "Compass",
    accentColor: "from-sky-500 to-blue-700",
    badge: "Strategic Horizon",
    summary: "To become a globally recognized and intellectually vibrant platform for advancing knowledge, critical inquiry, innovation, and interdisciplinary research.",
    points: [
      "Globally recognized platform for advancing knowledge and critical inquiry.",
      "Promoting academics globally including cultural connecting.",
      "Deepening understanding of contemporary social, political, cultural, economic, and human challenges."
    ]
  }
];

export const featuredArticles = [
  {
    id: "art-1",
    title: "Deep Neural Adaptive Frameworks for Autonomous Edge Robotics in Smart Manufacturing",
    category: "AI & Robotics",
    categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
    doi: "10.5281/ijmar.2026.0941",
    date: "September 2026",
    authors: [
      { name: "Dr. Aarav Sharma", affiliation: "Dept. of Computer Science & AI, SRMU" },
      { name: "Prof. Meera Nair", affiliation: "Robotics Institute, IIT Delhi" },
      { name: "Dr. Liam Zhang", affiliation: "Center for Autonomous Systems, NUS" }
    ],
    abstract: "This paper presents an ultra-low latency transformer inference pipeline optimized for microcontroller-level edge deployments. By fusing quantized attention layers with dynamic token-pruning, the architecture achieves a 4.2x speedup in real-time defect classification during high-speed assembly line inspection while preserving 99.4% precision.",
    keywords: ["Edge AI", "Autonomous Robotics", "Transformer Quantization", "Cyber-Physical Systems"],
    readTime: "12 min read",
    pages: "pp. 142–158",
    volume: "Vol. 12, Issue 4",
    citations: 38,
    downloads: 1420,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-2",
    title: "Biocompatible Nanostructured Hydrogels for Targeted Drug Delivery in Precision Oncology",
    category: "Bioscience & Biotech",
    categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
    doi: "10.5281/ijmar.2026.0822",
    date: "August 2026",
    authors: [
      { name: "Dr. Elena Rostova", affiliation: "Institute of Bioscience & Nanotech, SRMU" },
      { name: "Prof. Rajesh Kumar", affiliation: "Biomedical Engineering, AIIMS" },
      { name: "Dr. Sarah Jenkins", affiliation: "Molecular Therapeutics Lab, Cambridge" }
    ],
    abstract: "We report the synthesis of dual pH/temperature-responsive crosslinked polymeric hydrogels engineered for localized delivery of chemotherapeutic payloads. In-vitro assays demonstrate an 87% tumor cellular uptake efficiency with zero observed hemolytic toxicity in healthy tissue models.",
    keywords: ["Nanotechnology", "Drug Delivery", "Polymeric Hydrogels", "Cancer Nanomedicine"],
    readTime: "15 min read",
    pages: "pp. 159–176",
    volume: "Vol. 12, Issue 4",
    citations: 54,
    downloads: 2180,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-3",
    title: "Scalable Perovskite-Silicon Tandem Photovoltaics: Passivation Strategies Beyond 32% Efficiency",
    category: "Materials & Energy",
    categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    doi: "10.5281/ijmar.2026.0718",
    date: "July 2026",
    authors: [
      { name: "Dr. Kenji Takahashi", affiliation: "Photovoltaic Research Center, Tokyo Tech" },
      { name: "Dr. Priyanka Verma", affiliation: "Faculty of Applied Sciences, SRMU" },
      { name: "Prof. David Miller", affiliation: "Renewable Energy Lab, MIT" }
    ],
    abstract: "Interfacial defect recombination remains the core barrier in monolithic perovskite/silicon tandem cells. Here, we demonstrate self-assembled molecular dipole monolayers that suppress non-radiative recombination, achieving a certified 32.4% power conversion efficiency under standard 1-sun illumination with 1,500 hours operational stability.",
    keywords: ["Perovskite Photovoltaics", "Tandem Solar Cells", "Interfacial Passivation", "Clean Energy"],
    readTime: "11 min read",
    pages: "pp. 177–193",
    volume: "Vol. 12, Issue 3",
    citations: 42,
    downloads: 1890,
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-4",
    title: "Entanglement-Based Continuous-Variable Quantum Key Distribution Over Turbulent Free-Space Channels",
    category: "Quantum & Photonics",
    categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
    doi: "10.5281/ijmar.2026.0605",
    date: "June 2026",
    authors: [
      { name: "Prof. Vikramaditya Sen", affiliation: "Quantum Information Lab, SRMU" },
      { name: "Dr. Olivia Brown", affiliation: "Applied Physics, Oxford University" },
      { name: "Dr. Ananya Gupta", affiliation: "Photonics Research, TIFR" }
    ],
    abstract: "Atmospheric turbulence causes significant phase fluctuations in terrestrial optical links. We implement a closed-loop adaptive deformable mirror array paired with continuous-variable squeezed quantum states to achieve 1.8 Mbps secret key rates over a 12.4 km open-air urban optical corridor.",
    keywords: ["Quantum Cryptography", "CV-QKD", "Free-Space Optics", "Adaptive Photonic Systems"],
    readTime: "14 min read",
    pages: "pp. 194–211",
    volume: "Vol. 12, Issue 3",
    citations: 29,
    downloads: 1650,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  }
];

export const footerLinks = {
  about: [
    { name: "Vision & Scope", href: "#about" },
    { name: "Publication Details", href: "#publication-details" },
    { name: "Editorial Board & Patrons", href: "#editorial-board" },
    { name: "Peer-Review Process", href: "#review-process" },
    { name: "Contact & Editorial Office", href: "#contact" }
  ],
  guidelines: [
    { name: "Author Instructions", href: "#guidelines" },
    { name: "Manuscript Formatting Guide", href: "#guidelines" },
    { name: "LaTeX / Word Templates", href: "#guidelines" },
    { name: "Publication Ethics & Malpractice", href: "#guidelines" },
    { name: "Plagiarism & Originality Policy", href: "#guidelines" }
  ],
  papers: [
    { name: "Current Issue (Vol. 12, 2026)", href: "#featured-articles" },
    { name: "Archived Volumes (2018–2025)", href: "#featured-articles" },
    { name: "Special Issue Track", href: "#featured-articles" },
    { name: "Most Downloaded Articles", href: "#featured-articles" },
    { name: "Citation Metrics & CrossRef", href: "#featured-articles" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Use", href: "#terms" },
    { name: "Open Access License (CC BY 4.0)", href: "#license" },
    { name: "Copyright Notice", href: "#copyright" }
  ]
};

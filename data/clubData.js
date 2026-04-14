
export const sankalpMeta = {
  tagline: "Together Everyone Achieves More",
  description: [
    "Sankalp is the student club ecosystem at Echelon Institute of Technology, Faridabad — a living, breathing community where curiosity finds its calling. Born from the belief that education is not confined to classrooms, Sankalp empowers students to discover, develop, and lead across sports, culture, technology, service, and beyond.",
    "Each club under Sankalp is a world unto itself, offering semester-long courses, live workshops, inter-college competitions, and real community impact. Whether you're a coder, a dancer, a changemaker, or a dreamer — Sankalp has a home for you.",
  ],
  stats: [
    { value: "8+", label: "Active Clubs" },
    { value: "1000+", label: "Student Members" },
    { value: "50+", label: "Events Per Year" },
    { value: "15+", label: "Years of Legacy" },
  ],
  vision: "To build an integrated, holistic student community — inspired, empowered, and committed to leading fulfilling, creative, and contributive lives.",
  mission: "To cover all aspects of human development through clubs that nurture skills, spark leadership, and forge lifelong bonds — across sports, culture, technology, and social service.",
  leadership: {
    faculty: [
      { name: "Dr. Rajesh Kumar", designation: "Dean, Student Affairs", image: null },
      { name: "Prof. Anita Singh", designation: "Sankalp Faculty Coordinator", image: null },
    ],
    student: [
      { name: "Aryan Mehta", role: "President, Sankalp", club: "Technovation Club", image: null },
      { name: "Priya Sharma", role: "Vice President", club: "Kshitij Cultural Society", image: null },
      { name: "Rahul Verma", role: "General Secretary", club: "Yuva Kreeda Society", image: null },
      { name: "Sneha Gupta", role: "Treasurer", club: "Samvedna Society", image: null },
    ],
  },
}

export const clubs = [
  {
    slug: "yuva-kreeda",
    name: "Yuva Kreeda Society",
    tagline: "Play with Passion",
    theme: {
      primary: "#3B9EE8",
      soft: "rgba(59,158,232,0.08)",
      border: "rgba(59,158,232,0.22)",
      glow: "rgba(59,158,232,0.3)",
      gradient: "linear-gradient(135deg, #1E6FBF 0%, #3B9EE8 100%)",
    },
    description: [
      "Yuva Kreeda Society is the powerhouse of sports and fitness on the Echelon campus. It fuels teamwork, discipline, and endurance through inter-house, inter-departmental, and inter-college sports events.",
      "Whether it's an indoor chess tournament or an outdoor cricket championship, every match under Yuva Kreeda reflects energy, dedication, and the spirit of healthy competition.",
    ],
    coordinators: {
      faculty: [
        { name: "Dr. Harish Pal", designation: "Sports Faculty Coordinator" },
        { name: "Prof. Ramesh Nair", designation: "Physical Education Director" },
      ],
      student: [
        { name: "Karan Singh", role: "Sports Captain" },
        { name: "Deepa Rawat", role: "Vice Captain" },
        { name: "Mohit Yadav", role: "Events Head" },
      ],
    },
    domains: [
      { title: "Outdoor Sports", description: "Cricket, Football, Basketball, Kabaddi, Volleyball, Badminton and more." },
      { title: "Indoor Sports", description: "Chess, Carrom, Table Tennis, Arm Wrestling, and Uno tournaments." },
      { title: "Annual Sports Meet", description: "The flagship inter-departmental mega sports event held every year." },
      { title: "Fitness & Wellness", description: "Regular yoga, gymnasium, and physical training sessions for hostellers." },
    ],
    events: [
      { title: "Annual Sports Meet 2024", date: "2024-11-15", description: "The grand inter-departmental sports extravaganza featuring 20+ sports disciplines.", image: null },
      { title: "Echelon Premier League", date: "2024-03-10", description: "100+ school teams from Delhi-NCR competed in this prestigious cricket tournament with ₹51,000 prize.", image: null },
    ],
    achievements: [
      { title: "Inter-University Football Champions", year: "2024" },
      { title: "Best Sports Club — GGSIPU", year: "2023" },
      { title: "Cricket Tournament Winners, Faridabad District", year: "2023" },
    ],
    gallery: [],
  },
  {
    slug: "samvedna",
    name: "Samvedna Society",
    tagline: "Serve with Heart",
    theme: {
      primary: "#A8D835",
      soft: "rgba(168,216,53,0.07)",
      border: "rgba(168,216,53,0.22)",
      glow: "rgba(168,216,53,0.25)",
      gradient: "linear-gradient(135deg, #7BAA28 0%, #A8D835 100%)",
    },
    description: [
      "Samvedna Society embodies the essence of compassion, responsibility, and community spirit. It is dedicated to social causes and awareness programs that foster empathy among students.",
      "Through its sub-clubs — Raso Vaisa (Food Club), Social Media & Photography Club, The Last Centre, and Samatva Club — Samvedna creates well-rounded human beings, not just engineers.",
    ],
    coordinators: {
      faculty: [
        { name: "Prof. Sunita Verma", designation: "Faculty Coordinator, Samvedna" },
      ],
      student: [
        { name: "Ishaan Batra", role: "Society Head" },
        { name: "Naina Arora", role: "Community Lead" },
        { name: "Vikram Soni", role: "Photography Head" },
      ],
    },
    domains: [
      { title: "Raso Vaisa – Food Club", description: "Celebrating nourishment as a spiritual and communal act, inspired by Ayurvedic kitchen principles." },
      { title: "Social Media & Photography", description: "Capturing campus stories and building EIT's digital visual identity." },
      { title: "The Last Centre", description: "3000 sq ft dedicated space training students in conscious leadership and self-development." },
      { title: "Samatva Club", description: "Promoting balance, mental wellness, and emotional intelligence on campus." },
    ],
    events: [
      { title: "Blood Donation Camp 2024", date: "2024-06-14", description: "Annual blood donation drive in partnership with local hospitals.", image: null },
      { title: "Tree Plantation Drive", date: "2024-08-15", description: "Independence Day plantation drive — 500+ saplings planted across campus.", image: null },
    ],
    achievements: [
      { title: "NSS Best Chapter Award, Haryana", year: "2023" },
      { title: "500+ beneficiaries in health camps", year: "2024" },
    ],
    gallery: [],
  },
  {
    slug: "kshitij",
    name: "Kshitij Cultural Society",
    tagline: "Where Art Meets Rhythm",
    theme: {
      primary: "#E8843B",
      soft: "rgba(232,132,59,0.08)",
      border: "rgba(232,132,59,0.22)",
      glow: "rgba(232,132,59,0.3)",
      gradient: "linear-gradient(135deg, #C4621A 0%, #E8843B 100%)",
    },
    description: [
      "Kshitij is the cultural heartbeat of the Echelon campus — where art, rhythm, and imagination meet. The society provides a vibrant platform for students to showcase their artistic and creative abilities across multiple domains.",
      "From classical music to contemporary dance, fine arts to fashion design, theatre to stand-up comedy — Kshitij is where raw talent finds its stage.",
    ],
    coordinators: {
      faculty: [
        { name: "Dr. Kavita Bose", designation: "Cultural Faculty Coordinator" },
        { name: "Prof. Suresh Menon", designation: "Arts & Music Advisor" },
      ],
      student: [
        { name: "Riya Kapoor", role: "Cultural Secretary" },
        { name: "Arjun Das", role: "Dance Head, Beat Blaster" },
        { name: "Sonal Mehta", role: "Music Head, Melody" },
        { name: "Tanya Singh", role: "Fashion Head, Vogue Vista" },
      ],
    },
    domains: [
      { title: "Melody – Music Society", description: "Classical, folk, and contemporary music — live jam sessions, competitions, and concerts." },
      { title: "Beat Blaster – Dance Society", description: "Bollywood, hip-hop, classical, and fusion dance. Performs at Echiesta and inter-college fests." },
      { title: "Creative Canvas – Fine Arts", description: "Painting, sketching, digital art, and sculpture workshops open to all students." },
      { title: "Vogue Vista – Fashion Society", description: "Fashion shows, styling workshops, and sustainability in fashion awareness." },
      { title: "Pottery – Theatre Society", description: "Drama, street plays, mono-acts, and scriptwriting for the stage." },
    ],
    events: [
      { title: "Echiesta 2024 – Annual Fest", date: "2024-02-20", description: "The flagship Techno-Cultural-Sports Fest with performances by Mohit Chauhan & Harrdy Sandhu.", image: null },
      { title: "Freshers' Cultural Night", date: "2024-09-05", description: "Welcome event for first-year students featuring talent showcases from all Kshitij sub-clubs.", image: null },
    ],
    achievements: [
      { title: "Best Cultural Society, GGSIPU Fest", year: "2024" },
      { title: "1st Place, Inter-College Dance Competition", year: "2023" },
      { title: "Star Night — Raftaar, Guru Randhawa performed", year: "2023" },
    ],
    gallery: [],
  },
  {
    slug: "technovation",
    name: "Technovation Club",
    tagline: "Innovate to Inspire",
    theme: {
      primary: "#3B9EE8",
      soft: "rgba(59,158,232,0.08)",
      border: "rgba(59,158,232,0.22)",
      glow: "rgba(59,158,232,0.3)",
      gradient: "linear-gradient(135deg, #1E6FBF 0%, #3B9EE8 100%)",
    },
    description: [
      "Technovation Club is where Echelon's innovators, coders, and tech enthusiasts converge. It fosters learning through hands-on experimentation, workshops, competitions, and tech exhibitions.",
      "From robotics to cloud computing, from SIH (Smart India Hackathon) preparation to cutting-edge AI projects — Technovation is the launchpad for tomorrow's engineers.",
    ],
    coordinators: {
      faculty: [
        { name: "Dr. Pankaj Mishra", designation: "Technical Club Faculty Head" },
        { name: "Prof. Deepa Sharma", designation: "Robotics Lab Coordinator" },
      ],
      student: [
        { name: "Aditya Raj", role: "Club President" },
        { name: "Simran Kaur", role: "Robotics Lead" },
        { name: "Dev Joshi", role: "Coding Head" },
      ],
    },
    domains: [
      { title: "Electronica & Robotics Club", description: "Hardware projects, IoT, Arduino, Raspberry Pi workshops, and national-level robotics competitions." },
      { title: "Technova", description: "Software innovation cell focused on app development, open-source, and product building." },
      { title: "Science Club", description: "Explores applied sciences through experiments, exhibitions, and the World Climate Clock project." },
    ],
    events: [
      { title: "Techlon 2024 – Biannual Expo", date: "2024-04-18", description: "Final-year B.Tech project showcase — real-world engineering solutions presented to industry mentors.", image: null },
      { title: "Smart India Hackathon Prep Camp", date: "2024-07-20", description: "Intensive 72-hour SIH preparation bootcamp with industry experts.", image: null },
    ],
    achievements: [
      { title: "SIH 2023 Finalists – Team Technovation", year: "2023" },
      { title: "1st Place, GGSIPU Robotics Championship", year: "2024" },
      { title: "Innovation Cell Recognition by IIC", year: "2024" },
    ],
    gallery: [],
  },
  {
    slug: "literary",
    name: "Literary Society",
    tagline: "Carpe Diem – Words that Inspire",
    theme: {
      primary: "#A8D835",
      soft: "rgba(168,216,53,0.07)",
      border: "rgba(168,216,53,0.22)",
      glow: "rgba(168,216,53,0.25)",
      gradient: "linear-gradient(135deg, #7BAA28 0%, #A8D835 100%)",
    },
    description: [
      "The Literary Society — known as Carpe Diem — cultivates the art of communication and creative thinking. Through debates, poetry recitations, storytelling, and open mic sessions, it nurtures the eloquence and confidence of Echelon students.",
      "Carpe Diem believes that the pen is as powerful as the processor — and that technical minds made sharper by words become true leaders.",
    ],
    coordinators: {
      faculty: [
        { name: "Dr. Meena Joshi", designation: "Literary Society Faculty Coordinator" },
      ],
      student: [
        { name: "Aarav Tiwari", role: "Society President" },
        { name: "Ananya Roy", role: "Debate Lead" },
        { name: "Farhan Sheikh", role: "Creative Writing Head" },
      ],
    },
    domains: [
      { title: "Debate & MUNs", description: "Competitive debating, Model United Nations, and extempore speaking training." },
      { title: "Poetry & Storytelling", description: "Open mic nights, slam poetry, and short story workshops for all genres." },
      { title: "Creative Writing", description: "Flash fiction, editorial writing, campus magazine contributions, and newsletter columns." },
    ],
    events: [
      { title: "Carpe Diem Lit Fest 2024", date: "2024-10-12", description: "Annual literary festival with 10+ competitions — debate, quiz, poetry slam, and book reviews.", image: null },
    ],
    achievements: [
      { title: "Best Literary Club, GGSIPU", year: "2023" },
      { title: "Published Campus Magazine — 3rd Edition", year: "2024" },
    ],
    gallery: [],
  },
  {
    slug: "computer-club",
    name: "The Computer Club",
    tagline: "Digital Skills. Future Ready.",
    theme: {
      primary: "#3B9EE8",
      soft: "rgba(59,158,232,0.08)",
      border: "rgba(59,158,232,0.22)",
      glow: "rgba(59,158,232,0.3)",
      gradient: "linear-gradient(135deg, #1E6FBF 0%, #3B9EE8 100%)",
    },
    description: [
      "The Computer Club empowers students with essential technical skills and digital literacy. By organizing workshops, coding sessions, and tech talks, it nurtures innovation and problem-solving abilities.",
      "The club is closely aligned with EIT's Centres of Excellence — AWS, CISCO, IBM, and Pearson — bringing industry-grade training directly to students.",
    ],
    coordinators: {
      faculty: [
        { name: "Prof. Vikas Chandra", designation: "Computer Club Faculty Coordinator" },
      ],
      student: [
        { name: "Nikhil Arora", role: "Club Head" },
        { name: "Pooja Yadav", role: "Web Dev Lead" },
      ],
    },
    domains: [
      { title: "Web & App Development", description: "Full-stack web development, React, Node.js, and mobile app workshops." },
      { title: "Cloud & Cybersecurity", description: "AWS, CISCO certifications, and hands-on cybersecurity training." },
      { title: "AI & Machine Learning", description: "Python, data science, and ML model-building sessions for beginners and advanced learners." },
    ],
    events: [
      { title: "Code Sprint 2024", date: "2024-09-28", description: "24-hour competitive coding marathon open to all students.", image: null },
    ],
    achievements: [
      { title: "AWS Certified Students — 30+", year: "2024" },
      { title: "CISCO NetRiders Top 5 — India Region", year: "2023" },
    ],
    gallery: [],
  },
  {
    slug: "nss",
    name: "NSS Chapter",
    tagline: "Not Me, But You",
    theme: {
      primary: "#A8D835",
      soft: "rgba(168,216,53,0.07)",
      border: "rgba(168,216,53,0.22)",
      glow: "rgba(168,216,53,0.25)",
      gradient: "linear-gradient(135deg, #7BAA28 0%, #A8D835 100%)",
    },
    description: [
      "The National Service Scheme (NSS) at EIT cultivates a deep sense of social responsibility among students. Through camps, health drives, and volunteering projects, NSS inspires youth to contribute selflessly to the community.",
      "Operating under the motto 'Not Me, But You', the NSS chapter has run over 20+ community initiatives — from Swachhta Hi Sewa to Save Girl Child campaigns and Eye Testing Camps.",
    ],
    coordinators: {
      faculty: [
        { name: "Prof. Lakshmi Devi", designation: "NSS Program Officer" },
      ],
      student: [
        { name: "Rohit Sharma", role: "NSS President" },
        { name: "Divya Nair", role: "Camp Coordinator" },
      ],
    },
    domains: [
      { title: "Health & Wellness Drives", description: "Blood donation camps, health check-up camps, cancer awareness, and eye testing." },
      { title: "Environment Initiatives", description: "Tree plantation, plastic-free campaigns, and World Earth Day activities." },
      { title: "Social Awareness", description: "Save Girl Child, Women's Day Celebration, Thalassemia Awareness." },
    ],
    events: [
      { title: "Swachhta Hi Sewa 2024", date: "2024-10-02", description: "Gandhi Jayanti cleanliness drive across campus and surrounding villages.", image: null },
      { title: "Blood Donation Camp", date: "2024-06-14", description: "World Blood Donor Day camp — 200+ units collected.", image: null },
    ],
    achievements: [
      { title: "Best NSS Chapter, Haryana Zone", year: "2023" },
      { title: "500+ volunteers across community programs", year: "2024" },
    ],
    gallery: [],
  },
]
import { Experience, Education, Skill, Project } from './types';

export const PROFILE = {
  name: "Chika Nur Siswoyo",
  title: "Undergraduate Public Administration Student at Universitas Indonesia",
  location: "Kota Bekasi, Jawa Barat, Indonesia",
  about: "I am a dedicated Undergraduate Public Administration Student at Universitas Indonesia with a passion for organizational management, creative arts, and administration. I have a strong background in leadership, event coordination, and visual design, demonstrated through various roles in student organizations and committees.",
  email: "chika.nur@ui.ac.id", // Placeholder based on university
  linkedin: "www.linkedin.com/in/chikanursiswoyo",
  instagram: "https://www.instagram.com/chikannr?igsh=eW9wNTN3OWs0MHc1",
  // Fixed valid Base64 string for PDF (minimal Hello World PDF)
  resumeBase64: "JVBERi0xLjcKCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAwvVHlwZSAvUGFnZXwKL0tpZHMgWzMgMCBSXQwvQ291bnQgMQo+PgplbmRvYmoKCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUgODQyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo0IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKCjUgMCBvYmoKPDwKL0xlbmd0aCAzMAo+PgpzdHJlYW0KQlQKL0YxIDI0IFRmCjEwMCA3MDAgVGQKKEhlbGxvIFdvcmxkKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCgp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDA2MCAwMDAwMCBuIAowMDAwMDAwMTU3IDAwMDAwIG4gCjAwMDAwMDAzMDUgMDAwMDAgbiAKMDAwMDAwMDM5MyAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ3NAolJUVPRgo=" 
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Drawing Enthusiast, Art Lover, Mini Bussiness",
    company: "Self Employed",
    period: "Jan 2018 - Present",
    location: "Jakarta Raya, Indonesia",
    type: "Work",
    description: "Specializing in Manual Art, Creative Arts, Selling Artificial Flowers, Digital Art, Canva, Journaling, and Sketching (Japanese animation characters).",
    skills: ["Manual Art", "Creative Arts", "Digital Art"]
  },
  {
    id: "2",
    role: "Project Officer",
    company: "UniVerse Expo 2026",
    period: "Dec 2025 - Present", // Future date noted from screenshot, keeping as is
    type: "Event"
  },
  {
    id: "3",
    role: "Staff at Dokumentasi",
    company: "ADAPTASI UI",
    period: "Sep 2025 - Dec 2025",
    type: "Organization"
  },
  {
    id: "4",
    role: "PIC of Design",
    company: "PESPORA",
    period: "Jun 2025 - Dec 2025",
    type: "Event",
    description: "Designed and created the logo, Instagram feeds, organized LinkedIn, and prepared the sponsorship proposal design for PESPORA 7.0."
  },
  {
    id: "5",
    role: "PIC of Design and Publication",
    company: "FIA CENDEKIA",
    period: "May 2025 - Dec 2025",
    type: "Organization",
    description: "Led the creation of Fiacendekia 2025's visual identity inspired by the Age of Enlightenment. Designed the main logo, feeds, and applied vintage aesthetics to reflect historical depth."
  },
  {
    id: "6",
    role: "Coordinator of Event",
    company: "Battle of Knowledge 1.0",
    period: "Apr 2025 - Dec 2025",
    type: "Event",
    description: "Coordinated the Battle of Knowledge as Event Coordinator, leading the Debate, Quiz, Poster, and Liaison Officer divisions."
  },
  {
    id: "7",
    role: "Staff at Department of Education and Science",
    company: "BEM FIA UI",
    period: "Mar 2025 - Dec 2025",
    type: "Organization"
  },
  {
    id: "8",
    role: "Mentor",
    company: "LDMK FIA UI",
    period: "Aug 2025 - Nov 2025",
    type: "Volunteering",
    skills: ["Team Mentoring", "Leadership"]
  },
  {
    id: "9",
    role: "Staff at Bedah Universitas",
    company: "Bedah Kampus Universitas Indonesia (BKUI)",
    period: "Aug 2025 - Nov 2025",
    type: "Event"
  },
  {
    id: "10",
    role: "PIC of Debate Competition for OIM UI 2025",
    company: "GEMAFIA UI",
    period: "Apr 2025 - Nov 2025",
    type: "Event"
  },
  {
    id: "11",
    role: "Coordinator of Finance",
    company: "Administration Festival FIA UI",
    period: "Apr 2025 - Oct 2025",
    type: "Organization",
    description: "Coordinated the Finance Department, leading Sponsorship, Ticketing, and Fundraising divisions to optimize revenue streams."
  },
  {
    id: "12",
    role: "Essay Competition Participant",
    company: "FKMPI & UNESA",
    period: "Dec 2024 - Jan 2025",
    type: "Work",
    description: "Participated in essay competitions regarding SDGs, human resources, and bionic hand technology."
  },
  {
    id: "13",
    role: "Decorator",
    company: "Himanera Muda",
    period: "Sep 2024 - Sep 2024",
    type: "Volunteering",
    description: "Created decorations for RADAYA 2024 program with 'Charlie and The Chocolate Factory' theme.",
    skills: ["Traditional Art Skills", "Decoration"]
  },
  {
    id: "14",
    role: "Class Leader",
    company: "SMAS BPS&K I JAKARTA",
    period: "Jun 2021 - Jun 2023",
    type: "Organization",
    skills: ["Leadership", "Strategic Communications", "Account Management", "Financial Analysis"]
  },
  {
    id: "15",
    role: "OSN Geografi Coordinator",
    company: "SMAS BPS&K I JAKARTA",
    period: "Mar 2022 - Jun 2022",
    type: "Organization"
  },
  {
    id: "16",
    role: "OSIS Coordinator of Art Section",
    company: "SMPN 213 JAKARTA",
    period: "Apr 2019 - Dec 2019",
    type: "Organization",
    description: "Coordinated painting extracurricular activities and supported small organizational matters."
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: "1",
    school: "Universitas Indonesia (UI)",
    degree: "Public Administration, Administrative Science",
    period: "2024 - 2028",
    gpa: "Cum Laude",
  },
  {
    id: "2",
    school: "SMAS BPS&K I JAKARTA",
    degree: "Social Sciences",
    period: "2022 - 2024",
    gpa: "94.64",
    details: [
      "Best graduate in the Social Sciences field with the highest GPA",
      "1st eligible rank",
      "Class of 2024",
      "Craftsmanship and Traditional Art Skills"
    ]
  },
  {
    id: "3",
    school: "SMPN 213 JAKARTA",
    period: "2019 - 2021",
    gpa: "89.10",
    details: [
      "OSIS SMPN 213 JAKARTA Activity"
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Professional",
    items: [
      "Team Mentoring",
      "Account Management",
      "Financial Analysis",
      "Strategic Communications",
      "Leadership",
      "Research Skills",
      "Event Coordination"
    ]
  },
  {
    category: "Creative & Design",
    items: [
      "Canva",
      "Decoration",
      "Manual Art",
      "Creative Arts",
      "Traditional Art Skills",
      "Creative Writing",
      "Craftsmanship",
      "Logo Design"
    ]
  },
  {
    category: "Languages",
    items: ["Indonesian (Native)", "English (Professional Working)"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoCampus Initiative",
    description: "A comprehensive proposal and campaign design for sustainable waste management within the university campus.",
    technologies: ["Canva", "Strategic Planning", "Environmental Science"],
    link: "#"
  },
  {
    id: "2",
    title: "Cultural Arts Exhibition Digital Portal",
    description: "Designed the user interface concept for a virtual gallery showcasing student artwork and traditional crafts.",
    technologies: ["UI/UX Design", "Figma", "Digital Art"],
    link: "#"
  },
  {
    id: "3",
    title: "Student Organization Finance Tracker",
    description: "Developed a spreadsheet-based system to track expenses, sponsorships, and fundraising for student organizations.",
    technologies: ["Excel", "Financial Analysis", "Data Management"],
    link: "#"
  }
];
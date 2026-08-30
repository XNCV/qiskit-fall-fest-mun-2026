/**
 * ============================================================
 *  SITE CONFIG — edit this file to update the site's key info
 * ============================================================
 * This is the ONLY file most organizers will ever need to touch.
 */

const SITE_CONFIG = {
  // ---- Event basics -------------------------------------------------
  eventName: "Qiskit Fall Fest",
  eventYear: "2026",
  orgName: "Memorial University of Newfoundland",
  orgShort: "MUN",
  tagline: "A student-run celebration of quantum computing, powered by Qiskit.",

  // ---- Registration ---------------------------------------------------
  // Paste your registration link here (Google Form, Eventbrite, Luma, etc.)
  // Leave it as an empty string "" to show a disabled "Opening Soon" button.
  registrationUrl: "",

  // ---- Date & Location (edit freely — plain text, shown as typed) ----
  dateText: "Date: To Be Announced",
  timeText: "",
  venueName: "Venue: To Be Announced",
  venueAddress: "Memorial University of Newfoundland, St. John's, NL, Canada",

  // Google Maps embed src — swap the query in the URL for your exact venue.
  mapEmbedSrc:
    "https://www.google.com/maps?q=Memorial+University+of+Newfoundland&output=embed",

  // ---- Contact & social (replace placeholders before publishing) -----
  contactEmail: "qiskit.fallfest.mun@example.com",
  social: {
    instagram: "",
    linkedin: "",
    discord: "",
    twitter: "",
    github: ""
  },

  // Official global Qiskit Fall Fest program page
  qiskitFallFestGlobalUrl: "https://www.ibm.com/quantum/blog/fall-fest-2024",

  // ---- FAQ -------------------------------------------------------------
  faq: [
    {
      q: "Who can attend Qiskit Fall Fest MUN?",
      a: "All MUN students, staff, and community members curious about quantum computing are welcome — no prior experience with quantum or programming is required. Some sessions will have beginner and advanced tracks."
    },
    {
      q: "Is there a cost to attend?",
      a: "Details on pricing (free or paid) will be shared on the registration page once it opens. Historically, Qiskit Fall Fest events are free for students."
    },
    {
      q: "Do I need to bring my own laptop?",
      a: "Yes — please bring a laptop capable of running Python and Jupyter notebooks, or a Google/IBM account to use cloud-based tools. Setup instructions will be emailed to registered participants."
    },
    {
      q: "Will this be in person, virtual, or hybrid?",
      a: "Format details (in-person at MUN, virtual, or hybrid) will be posted here as soon as they're confirmed."
    },
    {
      q: "What is Qiskit Fall Fest?",
      a: "Qiskit Fall Fest is a global program supported by IBM Quantum where university chapters around the world host independent, student-organized quantum computing events each fall."
    },
    {
      q: "How can my organization sponsor this event?",
      a: "We'd love to have you! Reach out via the contact email below and our team will share our sponsorship package."
    }
  ]
};

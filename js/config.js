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
  dateText: "November 6–8, 2026",
  timeText: "",
  venueName: "Venue: To Be Announced",
  venueAddress: "Memorial University of Newfoundland, St. John's, NL, Canada",

  // Google Maps embed src — swap the query in the URL for your exact venue.
  // Centered on Memorial University's official address, at a moderate zoom
  // so the surrounding area is still visible — raise/lower z to zoom in/out.
  mapEmbedSrc:
    "https://www.google.com/maps?q=47.5741117,-52.7352094&z=15&output=embed",

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
      q: "What is Qiskit Fall Fest?",
      a: "Qiskit Fall Fest is a global program supported by IBM Quantum where university chapters around the world host independent, student-organized quantum computing events each fall."
    },
    {
      q: "Who can attend Qiskit Fall Fest MUN?",
      a: "All MUN students, staff, and community members curious about quantum computing are welcome. No prior experience with quantum programming is required. Some sessions will have beginner and advanced tracks."
    },
    {
      q: "Is there a cost to attend?",
      a: "No, the event is free to attend."
    },
    {
      q: "Do I need to bring my own laptop?",
      a: "Yes for students who want to join the Hackathon. Please bring a laptop capable of running Python and Jupyter notebooks. Setup instruction will be provided in the workshops."
    },
    {
      q: "Will this be in person, virtual, or hybrid?",
      a: "Attendees should be in-person at MUN. Speakers can join online."
    },
  ]
};

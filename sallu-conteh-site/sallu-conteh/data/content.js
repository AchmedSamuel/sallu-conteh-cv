/* =====================================================================
   SITE CONTENT — Sallu Conteh
   ---------------------------------------------------------------------
   Edit this file to add or change experience, education, projects,
   training and references. The website AND the printable CV (cv.html)
   both read from here.

   • To ADD an entry: copy one whole { ... } block (including the comma
     after it), paste it where you want it, and change the text.
   • Keep the quotes "..." around text. Use ’ instead of ' inside text.
   • Newest entries first.
   • Lines starting with // are comments.
   • After editing: Commit on GitHub, wait ~1 minute, reload with
     Ctrl + Shift + R.
   ===================================================================== */

window.SITE_CONTENT = {

  /* ---------------- EXPERIENCE ------------------------------------------ */
  experience: [
    {
      role: "Voluntary Lecturer",
      org: "IAMTECH College",
      place: "Kissy Dockyard, Freetown",
      dates: "Jun 2018 – Oct 2018",
      points: [
        "Lectured Business Mathematics for Diploma classes",
        "Lectured Engineering Mathematics for first-year degree students",
        "Lectured Business Mathematics for Higher National Diploma (HND) classes"
      ],
      tags: ["Teaching", "Engineering Mathematics", "Business Mathematics"]
    },
    {
      role: "Industrial Attachment — Electrical",
      org: "MANTRAC (Caterpillar) SL Limited",
      place: "Freetown, Sierra Leone",
      dates: "Jan 2017 – Mar 2017",
      points: [
        "Carried out preventive maintenance on electrical installations and equipment, including plant machines, excavators, bulldozers, power lines and circuit breakers",
        "Found faults on complex low- and high-voltage networks, critical systems and equipment, diagnosing problems and finding solutions",
        "At the Kingtom main power station, maintained high-voltage Caterpillar generator sets synchronised with the two main generators and the supply from Bumbuna, for safe, reliable and balanced electricity distribution to the Western Area",
        "Made sure portable equipment and fixed installations were tested and routine inspections carried out",
        "Completed tasks assigned by supervisors on time"
      ],
      tags: ["Power Generation", "HV/LV Fault Finding", "Preventive Maintenance", "Caterpillar Gensets"]
    },
  ],

  /* ---------------- EDUCATION -------------------------------------------
     Leave a field "" if unknown — it will simply not be shown.            */
  education: [
    {
      degree: "MSc in Renewable Energy Study and the Environment",
      school: "",          // ← add the university
      dates: "",           // ← add the dates
      notes: [],
      badge: "MSc"
    },
    {
      degree: "BSc in Electrical and Electronic Engineering",
      school: "Fourah Bay College, University of Sierra Leone",
      dates: "Oct 2013 – Apr 2018",
      notes: ["Final-year project: Cell-phone-based soft starting of an induction motor with current control"],
      badge: "BSc"
    },
    {
      degree: "Certificate in Computer Software",
      school: "Government Technical Institute, Freetown",
      dates: "Feb 2017 – Dec 2017",
      notes: ["Grade: First Division", "MS-DOS, MS Windows, MS Word, Excel, Access, PowerPoint and Publisher"],
      badge: "Certificate"
    },
    {
      degree: "West African Senior School Certificate Examination (WASSCE)",
      school: "Saint Francis Secondary School, Makeni",
      dates: "Sep 2006 – Jul 2011",
      notes: ["Eight credits, including English, Mathematics, Physics, Chemistry and Engineering Science"],
      badge: "WASSCE"
    },
    {
      degree: "Basic Education Certificate Examination (BECE)",
      school: "The Islamic Secondary School, Kenema",
      dates: "Sep 2003 – Jul 2006",
      notes: ["Aggregate 14 in eight subjects, including grade 2 in Mathematics and grade 3 in English"],
      badge: "BECE"
    },
  ],

  /* ---------------- PROJECTS -------------------------------------------- */
  projects: [
    {
      kind: "BSc Final-Year Project",
      title: "Cell-Phone-Based Soft Starting of an Induction Motor with Current Control",
      summary: "A soft-starting system for an induction motor that limits the starting current and can be controlled from a mobile phone.",
      tags: ["Power Electronics", "Motor Control", "Remote Control"],
      links: []
    },
  ],

  /* ---------------- TRAINING & CERTIFICATES ----------------------------- */
  training: [
    { name: "Graduate Internship Programme — Orientation Training", issuer: "National Youth Commission, Sierra Leone", date: "Sep 2017" },
  ],

  /* ---------------- REFERENCES ------------------------------------------
     Only names and roles are shown publicly. Contact details are NOT
     published — they are given on request. Ask each referee before
     listing them.                                                         */
  references: [
    { name: "Mr. Ibrahim A. Sawaneh", role: "Director of Academic Affairs", org: "IAMTECH College, Kissy Dockyard" },
    { name: "Professor Jonas Abioseh Redwood-Sawyerr", role: "Former Deputy Vice-Chancellor and Principal", org: "Fourah Bay College, University of Sierra Leone" },
    { name: "Mr. Desmond Decker", role: "Service Manager", org: "MANTRAC (Caterpillar) SL Limited" },
  ],
};

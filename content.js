/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.
   Every style (theme) reads from this file, so you only fill it in once.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- STYLE ----------
     Pick your look: "terminal", "clean", or "story".
     showThemePicker: true shows the style switcher in the corner.
     Set it to false once you've picked your favorite.
  */
  theme: "clean",
  showThemePicker: true,


  /* ---------- ABOUT YOU ---------- */

  name: "Gabriela Maria Aguirre",
  initials: "GA",
  photo: "images/headshot.jpg",

  headline: "Mechanical engineering student interested in MEP, HVAC, manufacturing, and construction.",

  tagline: "I like building things people actually use.",

  school: "ME at UT Austin, class of 2027",

  location: "Austin, TX",

  status: "Looking for Summer 2027 full-time employment",

  about: "I’m a mechanical engineering student at The University of Texas at Austin with hands-on experience in mechanical design, manufacturing, construction, and electronics. I enjoy building and troubleshooting physical systems, from restoring mechanical gearboxes and designing 3D-printed components to developing a Raspberry Pi photobooth. I’m especially interested in opportunities in MEP, HVAC, manufacturing, and mechanical design where I can apply engineering principles to real-world problems.",


  /* ---------- CONTACT ---------- */

  email: "gabriela512aguirre@gmail.com",

  resume: "resume.pdf",

  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gabriela512aguirre/"
    },

    {
      label: "GitHub",
      url: "https://github.com/Gaby-Aguirre"
    },
  ],


  /* ---------- EXPERIENCE ----------
     Newest first. Copy a { ... }, block to add another.

     Jobs, internships, research, org leadership, and your own
     business all count.
  */

  experience: [

    {
      role: "Security Guard",
      org: "W3 Events",
      place: "Austin, TX",
      dates: "June 2024 – Present",
      summary: "Provided security at 100+ events, including festivals with up to 50,000 attendees, managing crowd flow and coordinating emergency response with on-site EMS.",
      tags: [
        "Safety",
        "Crowd Management",
        "Emergency Response",
        "Level II Guard"
      ],
    },

    {
      role: "SHPE Jr. Cochair",
      org: "Society of Hispanic Professional Engineers",
      place: "Austin, TX",
      dates: "August 2024 – May 2026",
      summary: "Created 22 engineering and college-readiness lesson plans for 20–30 high school students per class at Del Valle High School and coordinated transportation for UT student mentors.",
      tags: [
        "Leadership",
        "STEM Outreach",
        "Mentoring",
        "Lesson Planning"
      ],
    },

    {
      role: "Recruitment Team Member",
      org: "Sigma Lambda Alpha Sorority, Inc.",
      place: "Austin, TX",
      dates: "January 2025 – Present",
      summary: "Designed and produced 200+ promotional stickers using Sketchbook and a low-cost label-printing workflow, contributing to a 20% increase in applicants completing recruitment requirements.",
      tags: [
        "Graphic Design",
        "Manufacturing",
        "Sketchbook",
        "Recruitment"
      ],
    },

    {
      role: "Engineering Intern",
      org: "Texas Department of Transportation",
      place: "Austin, TX",
      dates: "May 2024 – August 2024",
      summary: "Shadowed a Civil Engineering Project Manager on I-35 construction projects, visiting active sites 2–5 times per week and observing bridge expansion, structural work, and construction coordination.",
      tags: [
        "Construction",
        "Infrastructure",
        "Field Engineering",
        "Bridge Construction"
      ],
    },

    {
      role: "Desk Assistant",
      org: "Nuclear Engineering and Teaching Laboratory",
      place: "Austin, TX",
      dates: "January 2024 – May 2024",
      summary: "Supported daily laboratory operations through clerical work, package handling, front-desk support, appointment coordination, document preparation, and supply purchasing.",
      tags: [
        "Administrative Support",
        "Procurement",
        "Organization",
        "Laboratory"
      ],
    },

  ],


  /* ---------- PROJECTS ----------
     2 to 4 projects works best. Class projects count!

     "result" is one line about what happened or what you learned.

     "url" can link to a demo, GitHub repo, or photos ("" for none).
  */

  projects: [

    {
      name: "Kid Trax Dodge Charger Gearbox Restoration",
      when: "Machine Elements · June–July 2026",
      stack: [
        "SolidWorks",
        "3D Printing",
        "PETG",
        "Mechanical Design"
      ],
      summary: "Led the gearbox portion of a team restoration of a damaged 12V Kid Trax Dodge Charger, replacing contaminated plastic spur gears with PETG helical gears and restoring the vehicle's electrical and mechanical systems.",
      result: "Restored the vehicle to full operation while improving gearbox smoothness, noise, and reliability.",
      url: "https://docs.google.com/presentation/d/1udCfTFDuD6pwA6FWX8RLGn8LzLSBV5h37wXKR-7fJgo/edit",
    },

    {
      name: "AC/DC 3D-Printed Windmill",
      when: "Mechatronics · January–May 2026",
      stack: [
        "TinkerCAD",
        "LM339",
        "LM35",
        "Bridge Rectifier",
        "3D Printing"
      ],
      summary: "Designed and built a wind-speed indicator that converts generator AC output to DC and uses comparator circuits and adjustable voltage thresholds to distinguish low, medium, and high wind speeds.",
      result: "Successfully demonstrated real-time wind-speed indication using LED outputs across a 0–1.2 V generator range.",
      url: "https://docs.google.com/presentation/d/1pWJDnLGHsimY_ynz45ATbphX2kYtFFeMZ0oiSwmEMO/edit",
    },

    {
      name: "Raspberry Pi Photobooth",
      when: "Personal Project · 2026",
      stack: [
        "Python",
        "Raspberry Pi",
        "AutoCAD",
        "3D Printing"
      ],
      summary: "Built a touchscreen photobooth using a Raspberry Pi 3B+, camera, speakers, Wi-Fi, countdown timer, and thermal receipt printer by modifying an existing open-source photobooth program to fit custom hardware.",
      result: "Built a fully functional touchscreen photobooth and began designing a custom 3D-printed enclosure in AutoCAD.",
      url: "https://github.com/Gaby-Aguirre/pi-photobooth",
    },

  ],


  /* ---------- SKILLS ----------
     Group them however makes sense for your major.
  */

  skills: [

    {
      group: "CAD & Design",
      items: [
        "SolidWorks",
        "AutoCAD",
        "TinkerCAD",
        "Revit"
      ],
    },

    {
      group: "Engineering Software",
      items: [
        "MATLAB",
        "Multisim"
      ],
    },

    {
      group: "Programming & Electronics",
      items: [
        "Python",
        "Arduino",
        "Raspberry Pi"
      ],
    },

    {
      group: "Fabrication",
      items: [
        "3D Printing",
        "Laser Cutting"
      ],
    },

    {
      group: "Adobe",
      items: [
        "InDesign",
        "Acrobat"
      ],
    },

    {
      group: "Safety",
      items: [
        "OSHA 10-Hour Safety Training",
        "Level II Security Guard License"
      ],
    },

  ],


  /* ---------- AWARDS ----------
     Use [] if you don't have awards.
  */

  awards: [],

};

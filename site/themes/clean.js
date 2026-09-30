/* =========================================================
   ORANGE PROFESSIONAL THEME
   White background + orange typography + orange buttons
   ========================================================= */

:root {
  --bg: #ffffff;
  --surface: #ffffff;
  --surface-soft: #fff7ed;
  --surface-orange: #ffedd5;

  --text: #431407;
  --text-muted: #7c2d12;
  --text-light: #9a3412;

  --orange-dark: #c2410c;
  --orange: #ea580c;
  --orange-bright: #f97316;
  --orange-light: #fb923c;
  --orange-pale: #ffedd5;

  --border: #fed7aa;
  --border-light: #ffedd5;

  --shadow: 0 8px 30px rgba(194, 65, 12, 0.08);
  --shadow-hover: 0 14px 40px rgba(194, 65, 12, 0.14);

  --radius: 16px;
  --max-width: 1120px;
}


/* =========================================================
   GLOBAL
   ========================================================= */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
  line-height: 1.65;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--orange);
  color: white;
}


/* =========================================================
   MAIN CONTAINER
   ========================================================= */

.wrap {
  width: min(var(--max-width), calc(100% - 48px));
  margin: 0 auto;
}


/* =========================================================
   HEADER
   ========================================================= */

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 28px 0;

  border-bottom: 1px solid var(--border-light);
}

.me {
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;

  color: var(--orange-dark);
}

nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

nav a {
  position: relative;

  color: var(--text-muted);
  font-size: 14px;
  font-weight: 700;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

nav a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -7px;

  width: 0;
  height: 2px;

  background: var(--orange);

  transition: width 0.2s ease;
}

nav a:hover {
  color: var(--orange);
}

nav a:hover::after {
  width: 100%;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
  padding: 100px 0 110px;
  max-width: 900px;
}

.hero h1 {
  margin: 0 0 25px;

  font-size: clamp(44px, 7vw, 78px);
  line-height: 1.02;
  letter-spacing: -0.055em;
  font-weight: 850;

  color: var(--text);
}

.hero h1 span {
  color: var(--orange);
}

.hero p {
  max-width: 720px;

  margin: 0 0 25px;

  color: var(--text-muted);

  font-size: 19px;
  line-height: 1.75;
}


/* =========================================================
   STATUS
   ========================================================= */

.now {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 8px 13px;

  border: 1px solid var(--border);
  border-radius: 999px;

  background: var(--surface-soft);

  color: var(--orange-dark);

  font-size: 13px;
  font-weight: 700;
}

.now i {
  width: 8px;
  height: 8px;

  display: block;

  border-radius: 50%;

  background: var(--orange-bright);

  box-shadow: 0 0 0 4px var(--orange-pale);
}


/* =========================================================
   SECTIONS
   ========================================================= */

section {
  padding: 75px 0;
}

section + section {
  border-top: 1px solid var(--border-light);
}

section h2 {
  margin: 0 0 32px;

  color: var(--orange-dark);

  font-size: 14px;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}


/* =========================================================
   PROJECT GRID
   ========================================================= */

.grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 28px;
}

.proj {
  display: block;

  padding: 18px;

  border: 1px solid var(--border-light);
  border-radius: var(--radius);

  background: white;

  box-shadow: var(--shadow);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.proj:hover {
  transform: translateY(-6px);

  border-color: var(--border);

  box-shadow: var(--shadow-hover);
}


/* =========================================================
   PROJECT SCREEN / MOCKUP
   ========================================================= */

.shot {
  overflow: hidden;

  position: relative;

  height: 230px;

  margin-bottom: 20px;

  border-radius: 12px;

  background: var(--surface-soft);

  border: 1px solid var(--border-light);
}

.dots {
  position: absolute;

  top: 14px;
  left: 15px;

  display: flex;
  gap: 6px;

  z-index: 2;
}

.dots b {
  width: 7px;
  height: 7px;

  display: block;

  border-radius: 50%;

  background: var(--orange-light);
}

.dots b:nth-child(2) {
  background: var(--orange);
}

.dots b:nth-child(3) {
  background: var(--orange-dark);
}


/* =========================================================
   PROJECT SCREEN VARIATIONS
   ========================================================= */

.screen {
  position: absolute;

  inset: 38px 15px 15px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  font-size: 23px;
  font-weight: 850;
  letter-spacing: -0.03em;

  color: var(--orange-dark);

  text-align: center;
}


/* Light orange */

.screen.s1 {
  background:
    linear-gradient(
      135deg,
      #fff7ed,
      #ffedd5
    );
}


/* Soft orange */

.screen.s2 {
  background:
    linear-gradient(
      135deg,
      #ffedd5,
      #fed7aa
    );
}


/* Medium orange */

.screen.s3 {
  background:
    linear-gradient(
      135deg,
      #fed7aa,
      #fdba74
    );
}


/* Strong orange */

.screen.s4 {
  background:
    linear-gradient(
      135deg,
      #fb923c,
      #ea580c
    );

  color: white;
}


/* =========================================================
   PROJECT TEXT
   ========================================================= */

.proj h3 {
  margin: 0 0 8px;

  color: var(--text);

  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.proj h3 small {
  color: var(--orange);

  font-size: 11px;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.proj p {
  margin: 0;

  color: var(--text-muted);

  font-size: 14px;
  line-height: 1.7;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

.xp {
  margin: 0;
  padding: 0;

  list-style: none;
}

.xp li {
  display: grid;

  grid-template-columns: 48px 1fr auto;

  align-items: center;

  gap: 16px;

  padding: 20px 0;

  border-bottom: 1px solid var(--border-light);
}

.xp li:first-child {
  padding-top: 0;
}

.xp li:last-child {
  border-bottom: none;
}


/* Company logo / abbreviation */

.logo {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: var(--surface-orange);

  border: 1px solid var(--border);

  color: var(--orange-dark);

  font-size: 12px;
  font-weight: 900;

  letter-spacing: 0.02em;
}

.role {
  color: var(--text);

  font-size: 16px;
  font-weight: 800;
}

.org {
  margin-top: 3px;

  color: var(--text-muted);

  font-size: 13px;
}

.xp time {
  color: var(--orange);

  font-size: 12px;
  font-weight: 750;

  white-space: nowrap;
}


/* =========================================================
   SKILLS
   ========================================================= */

.skills {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}

.skills span {
  display: inline-flex;

  align-items: center;

  padding: 8px 13px;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: var(--surface-soft);

  color: var(--orange-dark);

  font-size: 12px;
  font-weight: 750;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.skills span:hover {
  background: var(--orange-pale);

  border-color: var(--orange-light);

  transform: translateY(-2px);
}


/* =========================================================
   CONTACT
   ========================================================= */

.contact {
  padding-bottom: 100px;
}

.links {
  display: flex;

  flex-wrap: wrap;

  align-items: center;

  gap: 12px;
}


/* =========================================================
   BUTTONS
   ========================================================= */

.btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 44px;

  padding: 10px 18px;

  border-radius: 10px;

  border: 1px solid var(--border);

  background: white;

  color: var(--orange-dark);

  font-size: 13px;
  font-weight: 800;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);

  background: var(--surface-orange);

  border-color: var(--orange-light);

  box-shadow: 0 7px 20px rgba(194, 65, 12, 0.12);
}


/* Primary button */

.btn.primary {
  background: var(--orange);

  border-color: var(--orange);

  color: white;

  box-shadow: 0 7px 18px rgba(234, 88, 12, 0.20);
}

.btn.primary:hover {
  background: var(--orange-dark);

  border-color: var(--orange-dark);

  color: white;

  box-shadow: 0 10px 25px rgba(194, 65, 12, 0.25);
}


/* =========================================================
   DIFFERENT BUTTON SHADES
   ========================================================= */

.btn:nth-child(2) {
  background: var(--orange-bright);

  border-color: var(--orange-bright);

  color: white;
}

.btn:nth-child(2):hover {
  background: var(--orange);

  border-color: var(--orange);
}

.btn:nth-child(3) {
  background: var(--orange-light);

  border-color: var(--orange-light);

  color: var(--text);
}

.btn:nth-child(3):hover {
  background: var(--orange-bright);

  border-color: var(--orange-bright);

  color: white;
}


/* Resume button */

.btn:last-of-type {
  background: var(--surface-orange);

  border-color: var(--orange-light);

  color: var(--orange-dark);
}

.btn:last-of-type:hover {
  background: var(--orange);

  border-color: var(--orange);

  color: white;
}


/* =========================================================
   EMAIL
   ========================================================= */

.email {
  display: inline-flex;

  align-items: center;

  min-height: 44px;

  padding: 10px 4px;

  color: var(--orange);

  font-size: 13px;
  font-weight: 800;

  transition: color 0.2s ease;
}

.email:hover {
  color: var(--orange-dark);
}


/* =========================================================
   FOOTER
   ========================================================= */

footer {
  padding: 30px 0 45px;

  border-top: 1px solid var(--border-light);

  color: var(--text-light);

  font-size: 12px;
}


/* =========================================================
   AVATAR
   ========================================================= */

.avatar {
  border: 2px solid var(--orange-light);
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 800px) {

  .wrap {
    width: min(100% - 32px, var(--max-width));
  }

  header {
    padding: 22px 0;
  }

  nav {
    gap: 16px;
  }

  .hero {
    padding: 70px 0 75px;
  }

  .hero h1 {
    font-size: clamp(40px, 11vw, 60px);
  }

  section {
    padding: 55px 0;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .shot {
    height: 210px;
  }
}


@media (max-width: 560px) {

  header {
    align-items: flex-start;

    flex-direction: column;

    gap: 18px;
  }

  nav {
    width: 100%;

    justify-content: space-between;
  }

  .hero p {
    font-size: 16px;
  }

  .xp li {
    grid-template-columns: 42px 1fr;

    gap: 12px;
  }

  .logo {
    width: 42px;
    height: 42px;
  }

  .xp time {
    grid-column: 2;

    margin-top: -8px;
  }

  .links {
    align-items: stretch;

    flex-direction: column;
  }

  .btn,
  .email {
    width: 100%;
  }
}

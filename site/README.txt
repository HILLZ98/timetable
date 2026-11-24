SCHOOL TIMETABLE SYSTEM - HOSTING GUIDE

OPTION A - Simplest (no accounts needed to edit, data saved in each browser)
  1. Cloudflare dashboard > Workers & Pages > Create > Pages > Upload assets.
  2. Upload this folder (index.html). Deploy. Done.
  Use "Data & online" > Download data (JSON) for backups.
  Works the same on Netlify, GitHub Pages or any web host.

OPTION B - One shared timetable for everyone (recommended)
  1. Cloudflare > Storage & Databases > KV > Create namespace "timetable".
  2. Create a Pages project and upload this whole folder, INCLUDING the "functions" folder
     (use drag-and-drop upload or connect a GitHub repo).
  3. Pages project > Settings > Bindings > Add KV namespace:
        Variable name: TT     Namespace: timetable
  4. Settings > Variables and Secrets > add secret ADMIN_PASS = your chosen password.
  5. Redeploy. Open the site > "Data & online" > log in with the password.
  Everyone can view; only people with the password can edit. Click
  "Load Kanyabwanga sample" once to fill in your current teachers and timetable.

USING THE SYSTEM
  New teacher:   Teachers > Add teacher > enter code, name, days available, classes and
                 subjects (periods and doubles). Leave "Timetable automatically" ticked: the
                 teacher is placed into the existing timetable without moving anyone else.
  A-level:       Students (A-level) > upload a CSV/Excel file with Name, Class, Subjects
                 (e.g. PHY/GEO/MTC/ICT). Subjects are only run at the same time when no
                 student takes both. Reports shows any student with a clash.
  Full rebuild:  Generate > Generate timetable (check the result, then Apply; Undo is available).

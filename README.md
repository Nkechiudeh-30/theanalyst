# Nkechi Udeh — Business Analyst Portfolio

A static portfolio website built with plain HTML, CSS and JavaScript. No Node.js, npm, React or build step. Upload the files and it works.

## Upload to GitHub
1. Sign in to GitHub and click **New repository**. Name it (for a personal site use `YOUR-USERNAME.github.io`, otherwise any name). Set it to **Public**.
2. Click **Add file → Upload files**. Unzip this project first, then drag in **everything inside the folder** (`index.html`, `assets`, `favicon.ico`, and so on).
3. Check that `index.html` is in the **root** of the repository, not inside another folder.
4. Click **Commit changes**.

## Turn on GitHub Pages
**Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.**
GitHub Pages uses `index.html` as the entry page. After a minute or two your site is live at the address shown on that Settings page.

## Where to change things
| What | File |
|---|---|
| Name, title, location, email, phone, LinkedIn, GitHub, CV path, Formspree endpoint | `assets/js/data.js` (top, `portfolioData`) |
| Skills | `assets/js/data.js` → `skillGroups` |
| Experience | `assets/js/data.js` → `experience` |
| Projects and case studies | `assets/js/data.js` → `projects` |
| Education | `assets/js/data.js` → `education` |
| Hero text, About text, page title, SEO tags | `index.html` |
| Formspree endpoint (form action) | `index.html` (`<form id="contact-form" action=...>`) and `data.js` |

Keep the quotation marks, commas and brackets exactly as they are when editing `data.js`.

## Images
Put images in `assets/images/`. Profile photo: `profile.jpg`. Project images: `project-01.jpg` and so on. To use a different image, replace the file (same name) or change the `image:` path in `data.js`. Keep images under about 300 KB where you can.

## CV
Put your PDF in `assets/documents/` and set `resume:` in `data.js`. If you rename the file, avoid spaces. The **View CV** button opens it in a new tab and **Download CV** saves it.

## Add a project
Copy one whole `{ ... },` block in the `projects` list in `data.js`, paste it below, give it a new `id`, and edit the text. Add its image to `assets/images/`. Fill `github:` and `dashboard:` with URLs, or leave them as empty quotes to hide the buttons.

## Colours and fonts
`assets/css/style.css`, top of the file: `:root` holds the light colours and `[data-theme="dark"]` holds the dark colours. Fonts are `--font-head` and `--font-body`; the Google Fonts `<link>` in `index.html` loads them.

## Favicon
`favicon.ico` (project root) is a simple "NU" placeholder. Replace it with your own `.ico` file of the same name.

## Contact form
The form posts to your Formspree endpoint. Submissions arrive in your Formspree dashboard and email. Test once after deploying.

## Social preview image
In `index.html`, change `og:image` to the full URL of your photo once the site is live, for example `https://YOUR-USERNAME.github.io/assets/images/profile.jpg`.

## Opening locally
Double-click `index.html`. Everything works except that the contact form needs the site to be online.

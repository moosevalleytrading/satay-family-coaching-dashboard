# Satay Family Coaching Dashboard

This repository contains a **static SEO dashboard** for **Satay Family Coaching**, built for **GitHub Pages** hosting. It includes:

- A homepage dashboard with SEO metrics  
- A content calendar overview  
- A site copy analysis section  
- Keyword research insights  

---

---

## How to Use

1. **Hosting**  
   Push this repository to GitHub. In your repository **Settings > Pages**, enable GitHub Pages from the `main` branch.

2. **Data Updates**  
   All SEO data is stored as **JSON** files in the `data/` folder. Modify or replace these files as your coaching-related content and strategy evolve.

3. **Customization**  
   - Update the **CSS** in `/assets/css/` to match your branding.  
   - Modify or add **JavaScript** functions in `/assets/js/components/` to suit your project’s functionality needs.  

---

## GitHub Pages Deployment

1. Navigate to **Settings** in your GitHub repository.  
2. Choose **Pages** from the sidebar (or within the code & automation tab).  
3. Set the **Source** to the `main` branch.  
4. Set the folder to **`/ (root)`** if needed.  
5. Save your settings.  
6. Access your published site at `https://[username].github.io/satay-family-coaching-dashboard`.

---

### Important Notes

- All HTML references use **relative paths** (e.g., `./pages/content-calendar.html`) to ensure compatibility with GitHub Pages.  
- JSON data must be **committed** to the repository so the client-side JavaScript can fetch it.  
- The site relies on **client-side** scripts to load and display data.  
- If you plan to fetch **external data**, ensure **CORS** permissions allow public access.

---

## Built With

- **Tailwind CSS** – For responsive, utility-first styling.  
- **Chart.js** – (If used) For data visualization on relevant pages.  
- **Vanilla JavaScript** – For fetching JSON and updating the DOM.  
- **JSON** – For structured data storage and easy updates.

---

## License

This project is provided for demonstration purposes by **Carson Cruz** for **ComCreate LLC**. You may adapt or extend it for your own use.  

## File Structure
satay-family-coaching-dashboard/ ├── index.html ├── pages/ │ ├── content-calendar.html │ ├── site-copy.html │ └── keyword-research.html ├── assets/ │ ├── css/ │ │ ├── styles.css │ │ └── components/ │ │ ├── dashboard.css │ │ ├── calendar.css │ │ └── tables.css │ ├── js/ │ │ ├── main.js │ │ └── components/ │ │ ├── charts.js │ │ ├── calendar.js │ │ └── tables.js │ └── images/ │ ├── icons/ │ └── branding/ ├── data/ │ ├── keywords.json │ ├── content-calendar.json │ ├── site-copy.json │ ├── pages.json │ └── metrics.json └── README.md




# 🌍 Rest API Countries

A simple web app that displays information about countries around the world. Built with plain HTML, CSS, and JavaScript — no frameworks, no libraries.

---

## 🔍 What it does

- Fetches country data from a local `countries.json` file
- Displays each country as a card showing its flag, name, population, region, capital, area and timezone
- Lets you **search** for a country by name in real time
- Lets you **filter** countries by region (Africa, Americas, Asia, Europe, Oceania)

---

## 🛠️ How it works

The project is made up of three files:

| File | Purpose |
|------|---------|
| `index.html` | Page structure — header, search bar, filter dropdown, card grid |
| `styles.css` | All the styling — layout, colors, responsive design |
| `script.js` | Fetches the JSON data, builds the cards, handles search and filter |
| `countries.json` | The data source — 250 countries with name, flag, population, region, capital, area and timezone |

### Data flow

1. When the page loads, `script.js` fetches `countries.json`
2. It loops through every country and builds an HTML card for each one
3. All the cards get injected into the `<div id="countries">` in `index.html`
4. When you type in the search bar or pick a region, the list filters live without reloading the page

---

## 🎨 Design

| Token | Value |
|-------|-------|
| Background | `#F0F4F8` |
| Header | `#1E2A3A` |
| Cards | `#FFFFFF` |
| Accent | `#E07A5F` |
| Text muted | `#5A6A7A` |
| Font | Karla (Google Fonts) |

---

## 📁 Project structure

```
RestAPICountries/
├── index.html
├── styles.css
├── script.js
└── countries.json
```

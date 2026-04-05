# Klaire Li — Personal Website

A single-page personal resume/portfolio website built with HTML, CSS, and JavaScript.

## Overview

A static resume website showcasing Klaire Li's experience, education, skills, and interests — with a contact form powered by Formspree.

## Sections

| Section | Description |
|---|---|
| About | Bio, contact info, and social media links |
| Experience | Work history (Microsoft, Youws, UC Berkeley, IDbyDNA) |
| Education | UC Berkeley and Los Altos High School |
| Skills | Programming languages, frameworks, and CS concepts |
| Interests | Personal hobbies and activities |
| Contact | Email form via Formspree |

## File Structure

```
Personal-Website/
├── index.html          # Main single-page HTML file
├── css/
│   └── styles.css      # Custom styles (based on Start Bootstrap Resume theme)
├── js/
│   └── scripts.js      # Smooth scrolling and navbar behavior (jQuery)
└── assets/
    └── img/
        ├── profile.jpg  # Profile photo
        └── favicon.ico  # Browser tab icon
```

## Tech Stack

- **HTML/CSS** — Structure and styling
- **Bootstrap 4** — Responsive layout and components
- **jQuery** — Smooth scrolling and scroll-spy navigation
- **Font Awesome / Devicon** — Skill and social media icons
- **Formspree** — Contact form email forwarding (no server required)

## Running Locally

Just open `index.html` in a browser. No server setup needed.

## Contact Form

The form collects Name, Email, and Message, then forwards submissions to `klaire.li@gmail.com` via [Formspree](https://formspree.io) (free tier, 50 submissions/month).

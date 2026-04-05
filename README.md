# Klaire Li — Personal Website

A single-page personal resume/portfolio website built with HTML, CSS, JavaScript, and PHP.

## Overview

This is a static resume website showcasing Klaire Li's experience, education, skills, and interests — with a contact form that sends email via PHP.

## Sections

| Section | Description |
|---|---|
| About | Bio, contact info, and social media links |
| Experience | Work history (Microsoft, Youws, UC Berkeley, IDbyDNA) |
| Education | UC Berkeley and Los Altos High School |
| Skills | Programming languages, frameworks, and CS concepts |
| Interests | Personal hobbies and activities |
| Contact | Email form that submits to a PHP mailer |

## File Structure

```
Personal-Website/
├── index.html          # Main single-page HTML file
├── css/
│   └── styles.css      # Custom styles (based on Start Bootstrap Resume theme)
├── js/
│   └── scripts.js      # Smooth scrolling and navbar behavior (jQuery)
├── php/
│   └── action_page.php # Handles contact form submission and sends email
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
- **PHP** — Server-side contact form email handler

## Running Locally

Since the contact form requires PHP, you'll need a local server to test the full site.

**Option 1 — PHP built-in server:**
```bash
php -S localhost:8000
```
Then open `http://localhost:8000` in your browser.

**Option 2 — Static only (no contact form):**
Just open `index.html` directly in a browser.

## Contact Form

The form (`index.html` → `php/action_page.php`) collects:
- Full Name
- Email
- Message

On submission, it forwards the message to `klaire.li@gmail.com` via [Formspree](https://formspree.io) (free tier, 50 submissions/month).

# Subramanian Rajmohan — Weight-Loss Coaching

A modern, responsive website for Subramanian Rajmohan's weight-loss coaching services. The site includes coaching information, service details, contact information, and an interactive daily calorie calculator.

## Live website

[subramanian-rajmohan-coaching.netlify.app](https://subramanian-rajmohan-coaching.netlify.app/)

## Features

- Responsive coaching landing page
- About page with coach profile and values
- Services page with coaching programmes and process
- Contact page with clickable email and telephone links
- Interactive calorie calculator
- Daily targets for weight loss, maintenance, and weight gain
- Accessible form validation and mobile-friendly navigation
- Automatic deployment from GitHub through Netlify

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Coaching introduction and approach |
| About | `about.html` | Coach profile and coaching values |
| Services | `services.html` | Coaching services and process |
| Calculator | `calculator.html` | Interactive daily calorie calculator |
| Contact | `contact.html` | Address, email, and phone information |

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Netlify

No frameworks or build tools are required.

## Run locally

Clone or download the repository, then open `index.html` in a web browser.

```bash
git clone https://github.com/codewithrajmohan/clarie-calculator.git
cd clarie-calculator
```

For the best local experience, serve the directory with any static web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Calorie calculation

The calculator uses the Mifflin–St Jeor equation and an activity multiplier to estimate total daily energy expenditure.

- Weight-loss target: maintenance calories minus 500 kcal
- Maintenance target: estimated total daily energy expenditure
- Weight-gain target: maintenance calories plus 500 kcal

The results are general estimates and are not medical advice.

## Project structure

```text
clarie-calculator/
├── assets/
│   ├── rnp-tech-logo.jpg
│   └── subramanian-rajmohan.jpeg
├── index.html
├── about.html
├── services.html
├── calculator.html
├── contact.html
├── styles.css
├── script.js
└── README.md
```

## Deployment

The production site is deployed on Netlify from the `main` branch. New commits pushed to `main` trigger an automatic deployment.

## Contact

**Subramanian Rajmohan**  
RNP TECH  
[rajmohan@rnptech.com.sg](mailto:rajmohan@rnptech.com.sg)  
[+65 9851 2015](tel:+6598512015)

## License

All rights reserved. Contact the owner before reusing the website content, branding, or images.

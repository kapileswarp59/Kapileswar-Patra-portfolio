Kapileswar Patra Portfolio

A personal portfolio website to showcase projects, skills, and contact information. Built using React, Vite, TypeScript, Tailwind CSS, Framer Motion, and a Node.js backend for email functionality.

Table of Contents

Demo

Features

Tech Stack

Project Structure

Installation

Usage

Contact

Demo

Add your live demo link here: Portfolio Live

Features

Responsive and mobile-friendly design

Animated UI with Framer Motion

Contact form with email functionality using Node.js and Nodemailer

Social media integration (LinkedIn, GitHub, Email)

Showcase of personal projects and skills

Tech Stack

Frontend: React, Vite, TypeScript, Tailwind CSS, Framer Motion

Backend: Node.js, Express, Nodemailer, CORS

Icons: Lucide React

Project Structure
portfolio/
│
├── public/                  # Static assets like images
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Main pages like Home, About, Contact
│   ├── hooks/               # Custom hooks
│   ├── ui/                  # UI components (Button, Input, Textarea)
│   ├── App.tsx              # Main app file
│   ├── main.tsx             # React entry point
│   └── styles/              # CSS / Tailwind config
├── portfolio-backend/       # Backend folder for email service
│   ├── server.js            # Express server for contact form
│   └── package.json
├── package.json
├── tsconfig.json
└── README.md

Installation

Clone the repository

git clone https://github.com/kapileswarp59/Kapileswar-Patra-portfolio.git


Install frontend dependencies

cd kapileswar-elevated-main
npm install


Install backend dependencies

cd portfolio-backend
npm install

Usage

Start the backend server (for contact form)

node server.js


Start the frontend development server

npm run dev


Open your browser and visit http://localhost:8080

Contact

Email: kapileswarp59@gmail.com

LinkedIn: Kapileswar Patra

GitHub: kapileswarp59

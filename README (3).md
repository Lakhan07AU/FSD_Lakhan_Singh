<!--
  FSD | Full Stack Development
  A curated learning repository by Lakhan Singh.
-->

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0F172A,45:1D4ED8,100:06B6D4&text=FULL%20STACK%20DEVELOPMENT&fontColor=FFFFFF&fontSize=34&fontAlignY=38&desc=Learn%20it.%20Build%20it.%20Ship%20it.&descAlignY=58&descSize=17" alt="Full Stack Development banner" width="100%" />

  <h1>⚡ FSD — Lakhan Singh</h1>
  <p><b>A hands-on journey from HTML fundamentals to full-stack application development.</b></p>

  <p>
    <a href="https://github.com/Lakhan07AU/FSD_Lakhan_Singh"><img src="https://img.shields.io/badge/Repository-FSD_Lakhan_Singh-0F172A?style=for-the-badge&logo=github&logoColor=white" alt="Repository"/></a>
    <img src="https://img.shields.io/badge/Focus-Frontend%20%26%20Backend-2563EB?style=for-the-badge" alt="Focus"/>
    <img src="https://img.shields.io/badge/Learning-by%20Building-0891B2?style=for-the-badge" alt="Learning by building"/>
  </p>

  <p>
    <a href="#-repository-tour">Explore the repository</a> ·
    <a href="#-featured-project">Featured project</a> ·
    <a href="#-run-locally">Run locally</a>
  </p>

</div>

---

## 🧭 About this repository

Welcome to my **Full Stack Development (FSD)** workspace. This repository brings together practical exercises, case-study submissions, and a capstone application developed while learning how modern web applications are designed and built.

Instead of keeping concepts in isolation, I use small experiments to understand the building blocks of the web—then bring those skills together in a larger project.

> **The goal:** turn concepts into working software, one practical at a time.

## ✨ What you'll find here

<table>
  <tr>
    <td width="50%">
      <h3>🧪 JavaScript & Web Practicals</h3>
      Small, focused exercises covering variables, conditions, functions, arrays and objects, DOM interactions, events, responsive web design, and browser-based interfaces.
    </td>
    <td width="50%">
      <h3>📚 Case Studies</h3>
      PDF submissions collected in one place for quick review and reference.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🛠️ Capstone Application</h3>
      A Home Services Marketplace connecting customers with service options through a multi-page web experience.
    </td>
    <td width="50%">
      <h3>🔌 Backend & APIs</h3>
      Practice with Node.js, Express, MongoDB/Mongoose, authentication, and API-driven application flows.
    </td>
  </tr>
</table>

## 🗂️ Repository tour

| Folder | What's inside |
|---|---|
| [`Practical/`](./Practical/) | HTML, CSS, and JavaScript exercises, plus mini-projects such as a calculator, digital clock, food cafe page, hospital landing page, and LMS API. |
| [`CaseStudy/`](./CaseStudy/) | Case-study PDFs and written coursework submissions. |
| [`Capstone Project/Home-Services-Marketplace/`](./Capstone%20Project/Home-Services-Marketplace/) | The main capstone project, with separate frontend and backend folders. |

### A few practicals to explore

- **JavaScript foundations:** [Variables](./Practical/Basics%20of%20var%20and%20const%20in%20js.html), [Conditions](./Practical/Condition%20Statements%20in%20js.js), [Functions](./Practical/Functions%20in%20js.html), [Arrays & Objects](./Practical/Arrays%20and%20objects%20in%20js.html)
- **DOM & interactions:** [DOM in JavaScript](./Practical/DOM%20in%20js.html), [Event Handlers](./Practical/Event%20handlers%20in%20js.html)
- **Mini interfaces:** [Calculator](./Practical/Calculator/Calculator.html), [Digital Clock](./Practical/Digital%20Clock.html), [Indian Flag](./Practical/Indian%20Flag/flag.html)
- **Web page practice:** [Food Cafe](./Practical/Food%20Cafe/Food%20Cafe.html), [Hospital Landing Page](./Practical/Hospital%20Landing%20Page/Hospital.html)

---

## 🚀 Featured project

<div align="center">
  <h3>🏠 Home Services Marketplace</h3>
  <p><i>A web application concept for discovering services, managing bookings, and supporting service providers.</i></p>
  <a href="./Capstone%20Project/Home-Services-Marketplace/">
    <img src="https://img.shields.io/badge/Explore-Capstone%20Project-2563EB?style=for-the-badge&logo=github&logoColor=white" alt="Explore capstone"/>
  </a>
</div>

The capstone combines a multi-page frontend with a Node.js/Express backend and MongoDB persistence.

### Core areas represented in the codebase

- **Customer experience:** browse services, compare options, manage a cart, and make bookings.
- **Account & profile:** user authentication, profiles, and consumer/provider roles.
- **Service-provider workflow:** provider dashboard and service-management experience.
- **Booking lifecycle:** booking records, status updates, and booking-related communication.
- **Supporting interactions:** favorites, addresses, notifications, reviews, and support tickets.

### Technology stack

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111827" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-111827?style=flat-square&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" alt="Mongoose"/>
</p>

---

## ⚙️ Run locally

### 1. Clone the repository

```bash
git clone https://github.com/Lakhan07AU/FSD_Lakhan_Singh.git
cd FSD_Lakhan_Singh
```

### 2. Open a practical

Most practicals are standalone HTML/CSS/JavaScript files. Open the selected `.html` file in your browser, or use the Live Server extension in Visual Studio Code.

### 3. Run the Home Services Marketplace backend

You will need **Node.js**, **npm**, and a local **MongoDB** instance.

```bash
cd "Capstone Project/Home-Services-Marketplace/backend"
npm install
npm run dev
```

The backend package defines `npm start` and `npm run dev`. The server is configured for port **5000** and expects MongoDB at `mongodb://127.0.0.1:27017/home_services`.

> **Configuration note:** the backend uses a JWT secret from the `JWT_SECRET` environment variable when provided. Set a strong secret in your local environment before using the application beyond local practice. Do not commit secrets or credentials.

### 4. Serve the frontend

Open a second terminal:

```bash
cd "Capstone Project/Home-Services-Marketplace/frontend"
npm run start
```

This starts Python's simple HTTP server on port **8000**. Keep the backend running separately on port **5000**.

---

## 🧠 Skills I'm developing

- Semantic HTML and page structure
- CSS styling and responsive layout fundamentals
- JavaScript logic, functions, arrays, objects, and DOM manipulation
- Client-side application flows and API communication
- Node.js and Express server fundamentals
- MongoDB data modeling with Mongoose
- Authentication concepts and role-based application structure
- Organizing practical work into maintainable project folders

## 🛣️ Learning roadmap

- [x] Practise core HTML, CSS, and JavaScript concepts
- [x] Build small browser-based interfaces and exercises
- [x] Explore API and backend fundamentals
- [x] Build a Home Services Marketplace capstone
- [ ] Improve setup documentation and add clear screenshots
- [ ] Add repeatable testing and deployment instructions

## 📌 Notes

This is an educational repository that evolves as I practise and improve. Folder names and implementations may reflect coursework stages; refer to each project folder for its specific files and instructions.

## 👨‍💻 Author

<div align="center">
  <h3>Lakhan Singh</h3>
  <p>BCA — Artificial Intelligence & Machine Learning</p>
  <p>
    <a href="https://github.com/Lakhan07AU"><img src="https://img.shields.io/badge/GitHub-Lakhan07AU-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub profile"/></a>
    <a href="https://github.com/Lakhan07AU/FSD_Lakhan_Singh"><img src="https://img.shields.io/badge/Explore-the%20code-2563EB?style=for-the-badge&logo=github&logoColor=white" alt="Explore code"/></a>
  </p>
  <p><i>Building consistently. Learning in public. Improving with every commit.</i></p>
</div>

---

<div align="center">
  <sub>Made with curiosity, code, and a commitment to keep learning. ✨</sub>
</div>

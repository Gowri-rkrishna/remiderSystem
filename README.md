<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [Medicare Connect] 🎯
Deployment lacking, due to certain time constraints and inadequancy of error correction while deployment.
## Basic Details

### Team Name: Aatrix

### Team Members
- Member 1: Aarushi Sankar - College of Engineering Chengannur
- Member 2: Gowri Krishna R - College of Engineering Chengannur

### Hosted Project Link
[mention your project hosted link here]

### Project Description
Medicare Connect is a family-linked medicine reminder web app designed for elderly patients, where family members can register their loved ones, add their daily medicines with dosage and timing, and monitor whether they've been taken. Patients receive clear reminders and can mark medicines as taken, while family members get real-time status updates all through a simple, large-text interface built for ease of use by seniors.

### The Problem statement
Elderly patients often struggle to remember their daily medications, leading to missed doses, incorrect timings, and serious health complications. Managing multiple medicines becomes overwhelming without proper support, and family members especially those living apart have no reliable way to monitor whether their loved ones are taking their prescribed medicines on time. Existing reminder apps are often too complex, small-screened, or not designed with seniors in mind, making them difficult to use for the very people who need them most.

### The Solution
Medicare Connect is a family-linked medicine monitoring web application specifically designed to bridge the gap between elderly patients and their caregivers. Upon registration, each patient receives a unique Patient ID that their family member can use to link accounts, creating a direct digital connection between the patient and their support network. Family members can then log in to add the patient's medicines including the medicine name, dosage, and scheduled time — directly from their own device, no matter where they are. On the patient's side, the interface displays all their medicines in large, readable text with clear "Mark as Taken" buttons, making it effortless for seniors to interact with the app. Family members can monitor the status of each medicine in real time, instantly seeing whether a dose has been taken or missed. The app features a calming, high-contrast visual design with large fonts and simple navigation, built specifically so that elderly users can use it confidently without any technical assistance. Medicare Connect turns medicine management from a daily struggle into a seamless, shared responsibility between patients and the people who care about them.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: HTML,CSS,JavaScript
- Frameworks used: Express.js
- Libraries used: Mongoose,dotenv,bcrypt,jsonwebtoken,node-cron
- Tools used: Vscode,GITHUB



---

## Features

List the key features of your project:
- Feature 1:  Dual Role System - Separate login and registration for Patients and Family Members, each with their own dedicated dashboard and access level.
- Feature 2:  Medicine Management - Family members can add medicines for their linked patient with full details medicine name, dosage, and scheduled time all managed remotely from their own device.
- Feature 3: Mark as TakenReal-Time Monitoring - Family members can instantly view the live status of each medicine whether it has been taken or missed giving caregivers peace of mind from anywhere. Patients        can mark each medicine as taken directly from their dashboard with a single tap, designed with large buttons and clear text for elderly ease of use.
- Feature 4:  Elderly-Friendly UI - The entire interface is built with large fonts, high-contrast colors, and simple navigation specifically designed so senior users can interact confidently without any technical   assistance.

---

## Implementation

### For Software:

#### Installation
```bash
npm init -y
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
```

#### Run
```bash
node server.js
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1]
*![WhatsApp Image 2026-02-28 at 9 53 05 AM](https://github.com/user-attachments/assets/4f677002-d984-4570-9f39-da6304661d66)
Welcome / Splash Screen
The animated landing page of Medicare Connect, featuring the site logo, large brand name with letter-by-letter animation, tagline, description, and feature pills the first screen users see before being scrolled into the login page.

![Screenshot2]
 ![WhatsApp Image 2026-02-28 at 9 53 21 AM](https://github.com/user-attachments/assets/10519343-9a02-493c-af5a-c6537e9b8ad0)
 Login Page: Role Selection
The Medicare Connect login page where users sign in to their existing account. The role dropdown is open showing two options — Login as Patient or Login as Family Member — allowing the system to redirect each user to their respective dashboard. The page also includes a password field, a "Remember me on this device" checkbox for convenience, a Sign In button, and a link to the registration page for new users.

![Screenshot3]
![WhatsApp Image 2026-02-28 at 9 53 53 AM](https://github.com/user-attachments/assets/cf042233-9a62-4583-a01f-f72ece814212)
 Register Page: Account Creation
The Medicare Connect registration page where new users create their account. The role dropdown is open displaying two options — Register as Patient or Register as Family Member — determining what type of account is created. Patients receive a unique Patient ID upon registration that they can share with their family. The form includes fields for email address, password, and confirm password, followed by a Create Account button and a link back to the login page for existing users.

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```





## Project Demo

### Video
https://drive.google.com/file/d/1-EUdAPX7xvG0tkOaP-d3cW9a3QWZpPmX/view?usp=drive_link

Medicare Connect is a family-linked medicine reminder system designed specifically for elderly patients, solving the critical problem of missed medications by connecting patients directly with their family caregivers through a shared digital platform. The demo video walks through the complete end-to-end user flow, beginning with the registration process where users select their role — either Patient or Family Member — and create an account. Upon patient registration, a unique Patient ID is automatically generated, which the patient shares with their family member to establish the monitoring connection. Once logged in, the family member's dashboard allows them to link the patient account using this ID and remotely add medicines with the name, scheduled time, and dosage. On the patient side, all medicines appear in large, elderly-friendly text with a clear "Mark as Taken" button for each entry, making it effortless for seniors to interact with the app. As the patient marks medicines, the status updates in real time on the family dashboard — taken medicines display a green tick Taken badge while missed ones trigger a red button Overdue - Not Taken alert card, and a live browser push notification fires reading "Medicare Alert — One or more medicines are overdue!" From a technical standpoint, the backend is powered by Node.js and Express.js handling all API routes and logic, MongoDB with Mongoose storing user accounts, medicine records, and status logs, and node-cron running scheduled background checks to automatically flag overdue medicines — all tied together with JWT authentication securing sessions across both user roles, while the entire frontend is built with pure HTML, CSS, and Vanilla JavaScript for a lightweight, fast, and accessible experience.

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** GitHub Copilot, ChatGPT, Claude

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- Aarushi Sankar: Specific contributions - Frontend development,UI/UX design, Testing.
- Gowri Krishna R: Specific contributions - Backend development, Database design,API integration.

---


<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [Medicare Connect] 🎯

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
[Installation commands - e.g., npm install, pip install -r requirements.txt]
```

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
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

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

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

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub

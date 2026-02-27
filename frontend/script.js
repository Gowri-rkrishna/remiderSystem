// REGISTER
function register() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const role = document.getElementById("role").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (users.find(u => u.email === email)) {
    alert("An account with this email already exists.");
    return;
  }

  let patientId = null;

  if (role === "patient") {
    patientId = "PAT" + Math.floor(1000 + Math.random() * 9000);
    const display = document.getElementById("patientIdDisplay");
    display.style.display = "block";
    display.innerText = "🪪 Your Patient ID: " + patientId + "  —  Share this with your family!";
  }

  users.push({ role, name, email, password, patientId });
  localStorage.setItem("users", JSON.stringify(users));

  if (role === "patient") {
    setTimeout(() => window.location.href = "login.html", 2500);
  } else {
    alert("Registration Successful! Please login.");
    window.location.href = "login.html";
  }
}

// LOGIN
function login() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const user = users.find(u => u.email === email && u.password === password && u.role === role);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    if (user.role === "family") {
      window.location.href = "family-dashboard.html";
    } else {
      window.location.href = "patient-dashboard.html";
    }
  } else {
    alert("Invalid credentials or wrong role selected. Please try again.");
  }
}

// LINK PATIENT (Family Side)
function linkPatient() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const enteredId = document.getElementById("patientLinkId").value.trim();

  const patient = users.find(u => u.patientId === enteredId);

  if (patient) {
    currentUser.linkedPatientId = enteredId;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    alert("✅ Patient linked successfully! Patient: " + patient.name);
  } else {
    alert("❌ Invalid Patient ID. Please check and try again.");
  }
}

// ADD MEDICINE (Family Only for Linked Patient)
function addMedicine() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  if (!currentUser.linkedPatientId) {
    alert("⚠ Please link a patient first!");
    return;
  }

  const name = document.getElementById("medName").value.trim();
  const time = document.getElementById("time").value;
  const dose = document.getElementById("dose").value.trim();

  if (!name || !time || !dose) {
    alert("Please fill in all medicine fields.");
    return;
  }

  const meds = JSON.parse(localStorage.getItem("meds") || "[]");

  meds.push({
    patientId: currentUser.linkedPatientId,
    name,
    dose,
    time,
    taken: false,
    timestamp: Date.now()
  });

  localStorage.setItem("meds", JSON.stringify(meds));
  alert("✅ Medicine added successfully!");

  document.getElementById("medName").value = "";
  document.getElementById("time").value = "";
  document.getElementById("dose").value = "";

  if (typeof refreshMonitor === "function") refreshMonitor();
}

// SHOW MEDICINES — Patient Dashboard
if (document.getElementById("medList")) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const meds = JSON.parse(localStorage.getItem("meds") || "[]");
  const container = document.getElementById("medList");

  const patientMeds = meds.filter(m => m.patientId === currentUser.patientId);

  if (patientMeds.length > 0) {
    patientMeds.forEach((med, index) => {
      const globalIndex = meds.indexOf(med);
      container.innerHTML += `
        <div class="medicine-card" id="medCard${globalIndex}">
          <h3>💊 ${med.name}</h3>
          <p>⏰ Time: ${med.time}</p>
          <p>💉 Dose: ${med.dose}</p>
          <button class="secondary-btn" onclick="markTaken(${globalIndex})" id="btn${globalIndex}"
            ${med.taken ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
            ${med.taken ? '✅ Taken' : 'Mark as Taken'}
          </button>
          <div>
            ${med.taken ? '<span class="status taken">✅ Medicine Taken</span>' : ''}
          </div>
        </div>
      `;
    });
  }
}

// MARK TAKEN
function markTaken(index) {
  const meds = JSON.parse(localStorage.getItem("meds") || "[]");
  meds[index].taken = true;
  localStorage.setItem("meds", JSON.stringify(meds));

  const btn = document.getElementById("btn" + index);
  if (btn) {
    btn.disabled = true;
    btn.innerText = "✅ Taken";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
  }
  const card = document.getElementById("medCard" + index);
  if (card) {
    const div = card.querySelector("div");
    if (div) div.innerHTML = '<span class="status taken">✅ Medicine Taken</span>';
  }
}
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
    display.innerHTML = 
      '<div style="text-align: center;">' +
      '<div style="color: #7c3aed; font-size: 14px; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Your Patient ID</div>' +
      '<div style="color: #1a1040; font-size: 28px; font-weight: 700; font-family: monospace; letter-spacing: 2px; margin-bottom: 12px;">' + patientId + '</div>' +
      '<div style="color: #666; font-size: 12px; margin-bottom: 12px;">Share this with your family member to get connected</div>' +
      '<button onclick="copyToClipboard(\'' + patientId + '\')" style="background: #7c3aed; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">📋 Copy ID</button>' +
      '</div>';
  }

  users.push({ role, name, email, password, patientId });
  localStorage.setItem("users", JSON.stringify(users));

  if (role === "patient") {
    setTimeout(() => window.location.href = "login.html", 10000);
  } else {
    alert("Registration Successful! Please login.");
    window.location.href = "login.html";
  }
}

// Copy to Clipboard Function
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert("✅ Patient ID copied to clipboard!");
  }).catch(function(err) {
    alert("Patient ID: " + text);
  });
}

// LOGIN
function login() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const rememberMe = document.getElementById("rememberMe")?.checked || false;

  const user = users.find(u => u.email === email && u.password === password && u.role === role);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    if (rememberMe) {
      localStorage.setItem("autoLogin", JSON.stringify({email, role, timestamp: Date.now()}));
    } else {
      localStorage.removeItem("autoLogin");
    }
    if (user.role === "family") {
      window.location.href = "family.html";
    } else {
      window.location.href = "patient.html";
    }
  } else {
    alert("Invalid credentials or wrong role selected. Please try again.");
  }
}

// AUTO-LOGIN on page load (only on login page)
function checkAutoLogin() {
  // Only run on login page
  if (!document.getElementById("role")) return;
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const autoLoginData = JSON.parse(localStorage.getItem("autoLogin") || "{}");
  
  // If already logged in, redirect to dashboard
  if (currentUser && currentUser.role) {
    if (currentUser.role === "family") {
      window.location.href = "family.html";
    } else {
      window.location.href = "patient.html";
    }
    return;
  }
  
  // If auto-login is enabled and credentials exist, try auto-login
  if (autoLoginData.email && autoLoginData.role) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === autoLoginData.email && u.role === autoLoginData.role);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      if (user.role === "family") {
        window.location.href = "family.html";
      } else {
        window.location.href = "patient.html";
      }
    }
  }
}

// Run auto-login check only on login page
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkAutoLogin);
} else {
  setTimeout(checkAutoLogin, 100);
}

// LINK PATIENT (Family Side)
function linkPatient() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const enteredId = document.getElementById("patientLinkId").value.trim();

  if (!enteredId) {
    alert("⚠ Please enter a Patient ID.");
    return;
  }

  const patient = users.find(u => u.patientId === enteredId);

  if (!patient) {
    alert("❌ Invalid Patient ID. Please check and try again.");
    return;
  }

  // Check if already linked to same patient
  if (currentUser.linkedPatientId === enteredId) {
    alert("✅ This patient is already linked!");
    document.getElementById("patientLinkId").value = "";
    return;
  }

  // If changing patient, ask for confirmation
  if (currentUser.linkedPatientId && currentUser.linkedPatientId !== enteredId) {
    var confirm = window.confirm("⚠ You are currently monitoring a different patient.\n\nDo you want to switch to " + patient.name + "?\n\nClick OK to switch, Cancel to keep current patient.");
    if (!confirm) return;
  }

  currentUser.linkedPatientId = enteredId;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  document.getElementById("patientLinkId").value = "";
  alert("✅ Patient linked successfully! Monitoring: " + patient.name);
  
  if (typeof refreshMonitor === "function") refreshMonitor();
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
  function isTimeOverdue(medicineTime) {
    var now = new Date();
    var currentHours = String(now.getHours()).padStart(2, '0');
    var currentMinutes = String(now.getMinutes()).padStart(2, '0');
    var currentTime = currentHours + ':' + currentMinutes;
    return currentTime > medicineTime;
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const meds = JSON.parse(localStorage.getItem("meds") || "[]");
  const container = document.getElementById("medList");

  const patientMeds = meds.filter(m => m.patientId === currentUser.patientId);

  if (patientMeds.length > 0) {
    patientMeds.forEach((med, index) => {
      const globalIndex = meds.indexOf(med);
      const isOverdue = !med.taken && isTimeOverdue(med.time);
      const cardClass = isOverdue ? 'medicine-card overdue-card' : 'medicine-card';
      const statusHtml = med.taken ? 
        '<span class="status taken">✅ Medicine Taken</span>' : 
        (isOverdue ? '<span class="status overdue">🚨 OVERDUE - TAKE NOW!</span>' : '<span class="status pending">⏳ Pending</span>');
      
      container.innerHTML += `
        <div class="${cardClass}" id="medCard${globalIndex}">
          <h3>💊 ${med.name}</h3>
          <p>⏰ Time: ${med.time}</p>
          <p>💉 Dose: ${med.dose}</p>
          <button class="secondary-btn" onclick="markTaken(${globalIndex})" id="btn${globalIndex}"
            ${med.taken ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
            ${med.taken ? '✅ Taken' : 'Mark as Taken'}
          </button>
          <div>
            ${statusHtml}
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
  
  // Refresh monitoring if on family dashboard
  if (typeof refreshMonitor === "function") refreshMonitor();
}
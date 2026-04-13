const API = "http://localhost:3000/students";

let isVisible = false;

// Add Student
function addStudent() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value, 10);
  const course = document.getElementById("course").value;

  if (!name || !age || !course) {
    alert("Please fill all fields");
    return;
  }

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, age, course })
  })
  .then(res => res.json())
  .then(() => {
    alert("✅ Student Added");

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

    if (isVisible) getStudents();
  })
  .catch(err => console.log(err));
}

// Toggle Show/Hide
function toggleStudents() {
  const list = document.getElementById("students");
  const btn = document.getElementById("toggleBtn");

  if (!isVisible) {
    getStudents();
    list.style.display = "block";
    btn.innerText = "🙈 Hide Students";
  } else {
    list.style.display = "none";
    btn.innerText = "📋 Show Students";
  }

  isVisible = !isVisible;
}

// Get Students
function getStudents() {
  fetch(API)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("students");
    list.innerHTML = "";

    data.forEach(student => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${student.name} (${student.age}) - ${student.course}
        <button onclick="deleteStudent('${student._id}')">❌</button>
      `;

      list.appendChild(li);
    });
  })
  .catch(err => console.log(err));
}

// Delete Student
function deleteStudent(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(() => {
    if (isVisible) getStudents();
  })
  .catch(err => console.log(err));
}
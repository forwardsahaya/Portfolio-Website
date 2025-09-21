// Cursor animation
const cursor = document.querySelector(".cursor");
const cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  cursorOutline.style.top = `${e.clientY}px`;
  cursorOutline.style.left = `${e.clientX}px`;
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Load JSON data
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    // Skills
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
      data.skills.forEach(skill => {
        skillsContainer.innerHTML += `
          <div class="col-md-4 mb-3">
            <div class="card shadow-sm p-3 text-center">
              <h5>${skill.name}</h5>
              <p>${skill.level}</p>
            </div>
          </div>
        `;
      });
    }

    // Work
    const workContainer = document.getElementById("work-container");
    if (workContainer) {
      data.work.forEach(project => {
        workContainer.innerHTML += `
          <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
              <img src="${project.image}" class="card-img-top" alt="${project.title}">
              <div class="card-body">
                <h5>${project.title}</h5>
                <p>${project.description}</p>
              </div>
            </div>
          </div>
        `;
      });
    }

    // Experience
    const expContainer = document.getElementById("experience-container");
    if (expContainer) {
      data.experiences.forEach(exp => {
        expContainer.innerHTML += `
          <div>
            <h5>${exp.role} @ ${exp.company}</h5>
            <p><em>${exp.years}</em></p>
            <p>${exp.description}</p>
          </div>
        `;
      });
    }
  });

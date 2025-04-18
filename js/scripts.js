// Dummy card data
const cards = [
  {
    id: 1,
    title: "555 Timer IC Circuit",
    image: "img/circuit1.svg",
    description: "A simple LM555 timer circuit in astable mode for various applications.",
    content: "On and off time of the LED is determined by the capacity of capacitors."
  },
  {
    id: 2,
    title: "555 Timer LED Blinker",
    image: "img/circuit2.svg",
    description: "Classic timer-based LED flasher.",
    content: "You can explain frequency, resistor values, and give your explanation here."
  },
   {
    id: 3,
    title: "TEST",
    image: "img/circuit2.svg",
    description: "Classic timer-based LED flasher.",
    content: "You can explain frequency, resistor values, and give your explanation here."
  },
];

// Create cards and append to container
const cardContainer = document.getElementById("cardContainer");

cards.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${card.image}" alt="${card.title}" loading="lazy" />
    <div class="card-content">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    </div>
  `;
  div.addEventListener("click", () => openModal(card));
  cardContainer.appendChild(div);
});




// PCB entries
const pcbProjects = [
  {
    id: 1,
    title: "RBBB Pro Board Remake",
    schematic: "img/first.svg",
    layout: "img/first_layout.jpg",
    description: `&emsp;This is a recreation of RBBB Pro board by me for learning purpose.
                Relatively simple circuit for the beginner pcb design learners. I used OrCAD environment for the project.<br><br>
                &emsp; Firstly, I used Capture app of OrCAD to draw schematic, then with interconnection between apps I sent the schematic to pcb editor and design the layout there.
                I am planning to recreate more pcb designes as well as my own circuits.`,
    downloadLink: "downloads/RBBB_project.zip"
  },
  // Add more PCB objects like this in the future
];

const pcbContainer = document.getElementById("pcbContainer");

pcbProjects.forEach(project => {
  const section = document.createElement("section");
  section.classList.add("pcb-project");

  section.innerHTML = `
    <h3>${project.title}</h3>
    <div class="pcb-images">
      <img src="${project.schematic}" alt="Schematic for ${project.title}" />
      <img src="${project.layout}" alt="PCB Layout for ${project.title}" />
    </div>
    <p>${project.description}</p>
    <a href="${project.downloadLink}" download class="download-btn">Download Project Files</a>
  `;

  pcbContainer.appendChild(section);
});





// Modal logic
const modalRoot = document.getElementById("modalRoot");

function openModal(card) {
  modalRoot.innerHTML = `
    <div class="modal" onclick="closeModal(event)">
      <div class="modal-content">
        <span class="modal-close" onclick="closeModal(event)">&times;</span>
        <h2>${card.title}</h2>
        <img src="${card.image}" alt="${card.title}" />
        <p>${card.content}</p>
      </div>
    </div>
  `;
}

function closeModal(event) {
  if (event.target.classList.contains("modal") || event.target.classList.contains("modal-close")) {
    modalRoot.innerHTML = "";
  }
}

// Dark mode toggle
const darkModeBtn = document.getElementById("darkModeToggle");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Tab switching functionality
document.querySelectorAll('.main-nav-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    document.querySelectorAll('.main-nav-tabs .tab').forEach(t => t.classList.remove('active'));
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Activate clicked tab
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    // Show the corresponding tab content
    document.getElementById(tabId).classList.add('active');
  });
});



// Zoomable image modal
document.body.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.closest(".pcb-images")) {
    const src = e.target.getAttribute("src");
    const alt = e.target.getAttribute("alt") || "";

    const modal = document.createElement("div");
    modal.className = "image-zoom-modal";
    modal.innerHTML = `
      <div class="image-zoom-content">
        <span class="zoom-close">&times;</span>
        <img src="${src}" alt="${alt}" />
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".zoom-close").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.remove();
    });
  }
});

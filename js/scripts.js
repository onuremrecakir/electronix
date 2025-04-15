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

// Dummy card data
const cards = [
  {
    id: 1,
    title: "Pushbutton ON/OFF Controller",
    image: "img/circuit1.svg",
    description: "A simple SR latch-based controller with pushbuttons.",
    content: "Here's where you explain the circuit, add your diagram, maybe even a SPICE netlist."
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

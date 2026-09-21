// AR Electricals product data.
// Later, an admin panel can replace/edit this data through Firebase without redesigning the website.

const WHATSAPP_NUMBER = "919313630632";
const EMAIL_ADDRESS = "arelectrical.co@gamil.com";

const products = [
  {
    id: "load-bank-1",
    name: "Load Bank",
    code: "AR-LB / 01",
    image: "assets/products/load-bank-1.png",
    description: "Industrial load bank solution for controlled electrical load testing and performance verification.",
    tags: ["Load Testing", "Industrial", "Custom Build"]
  },
  {
    id: "fire-panel",
    name: "Fire Panel",
    code: "AR-FIRE / PANEL",
    image: "assets/products/fire-panel.png",
    description: "Purpose-built fire panel assembly with organised controls, indicators and protection components.",
    tags: ["Fire System", "Control", "Panel Assembly"]
  },
  {
    id: "lt-panel",
    name: "LT Panel",
    code: "AR-LT / PANEL",
    image: "assets/products/lt-panel.png",
    description: "Industrial LT panel solution designed for reliable low-tension power control, protection and distribution.",
    tags: ["LT Panel", "Power Control", "Distribution"]
  },
  {
    id: "load-bank-2",
    name: "Load Bank",
    code: "AR-LB / 02",
    image: "assets/products/load-bank-2.png",
    description: "Compact load bank panel configuration suitable for electrical load monitoring and testing requirements.",
    tags: ["Load Bank", "Testing", "Industrial"]
  },
  {
    id: "amf-meter-box-panel",
    name: "AMF Meter Box Panel",
    code: "AR-AMF / METER",
    image: "assets/products/amf-meter-box-panel.png",
    description: "AMF meter box panel for automatic mains failure applications with integrated metering and controls.",
    tags: ["AMF", "Metering", "Automatic"]
  },
  {
    id: "apfc-panel",
    name: "APFC Panel",
    code: "AR-APFC / PF",
    image: "assets/products/apfc-panel.png",
    description: "Automatic power factor correction panel designed for efficient industrial electrical power management.",
    tags: ["APFC", "Power Factor", "Industrial"]
  },
  {
    id: "dg-panel",
    name: "DG Panel",
    code: "AR-DG / PANEL",
    image: "assets/products/dg-panel.png",
    description: "DG control and distribution panel solution for dependable generator power management and switching.",
    tags: ["DG", "Generator", "Control"]
  }
];

const productGrid = document.getElementById("productGrid");
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalOrderBtn = document.getElementById("modalOrderBtn");
const modalEmailBtn = document.getElementById("modalEmailBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let modalProductId = null;

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function emailUrl(subject, body) {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderProducts() {
  productGrid.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-code">${product.code}</div>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-tags">
          ${product.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="product-actions">
          <button type="button" data-details="${product.id}">Details</button>
          <button type="button" class="email-now" data-email="${product.id}">Email</button>
          <button type="button" class="order-now" data-order="${product.id}">WhatsApp</button>
        </div>
      </div>
    </article>
  `).join("");
}


function orderProductOnWhatsApp(product) {
  const message = [
    "Hello AR Electricals, I want to get a quotation of a panel.",
    "",
    `Product: ${product.name}`,
    "Please share the suitable specification, quotation and delivery timeline."
  ].join("\n");

  window.open(whatsappUrl(message), "_blank", "noopener");
}

function orderProductByEmail(product) {
  const subject = `Enquiry for ${product.name} - AR Electricals`;
  const body = [
    "Hello AR Electricals,",
    "",
    `I am interested in ${product.name}.`,
    "Please share the suitable specification, quotation and delivery timeline.",
    "",
    "Regards"
  ].join("\n");

  window.location.href = emailUrl(subject, body);
}

function openModal(product) {
  modalProductId = product.id;
  modalTitle.textContent = product.name;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalDescription.textContent = product.description;
  modalTags.innerHTML = product.tags.map(tag => `<span>${tag}</span>`).join("");
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

productGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-details]");
  const emailButton = event.target.closest("[data-email]");
  const orderButton = event.target.closest("[data-order]");

  if (detailButton) {
    const product = products.find(p => p.id === detailButton.dataset.details);
    if (product) openModal(product);
  }

  if (emailButton) {
    const product = products.find(p => p.id === emailButton.dataset.email);
    if (product) orderProductByEmail(product);
  }

  if (orderButton) {
    const product = products.find(p => p.id === orderButton.dataset.order);
    if (product) orderProductOnWhatsApp(product);
  }
});

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeModal);
});

modalOrderBtn.addEventListener("click", () => {
  const product = products.find(p => p.id === modalProductId);
  if (product) {
    closeModal();
    orderProductOnWhatsApp(product);
  }
});

modalEmailBtn.addEventListener("click", () => {
  const product = products.find(p => p.id === modalProductId);
  if (product) {
    closeModal();
    orderProductByEmail(product);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});


menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();

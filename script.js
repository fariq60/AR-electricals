// AR Electricals product data.
// Later, an admin panel can replace/edit this data through Firebase without redesigning the website.

const WHATSAPP_NUMBER = "919313630632";

const products = [
  {
    id: "lt-panel",
    name: "LT Panels",
    category: "power",
    code: "AR-LT / POWER",
    icon: "⚡",
    description: "Low-tension panel solutions for safe industrial power control and distribution.",
    tags: ["Industrial", "Power Distribution", "Custom Build"]
  },
  {
    id: "amf-panel",
    name: "AMF Panels",
    category: "automation",
    code: "AR-AMF / AUTO",
    icon: "⏱",
    description: "Automatic mains failure panel solutions for dependable changeover applications.",
    tags: ["AMF", "Automatic", "Power Backup"]
  },
  {
    id: "apfc-panel",
    name: "APFC Panels",
    category: "power",
    code: "AR-APFC / PF",
    icon: "⌁",
    description: "Automatic power factor correction panel solutions for industrial electrical systems.",
    tags: ["Power Factor", "Industrial", "Optimisation"]
  },
  {
    id: "control-panel",
    name: "Control Panels",
    category: "control",
    code: "AR-CTRL / SYS",
    icon: "⎍",
    description: "Professional control panel systems designed around machine and process requirements.",
    tags: ["Control", "Process", "Custom Logic"]
  },
  {
    id: "distribution-panel",
    name: "Distribution Panels",
    category: "power",
    code: "AR-DIST / GRID",
    icon: "⫶",
    description: "Electrical distribution panels for organised, safe and reliable power routing.",
    tags: ["Distribution", "Safety", "Industrial"]
  },
  {
    id: "custom-panel",
    name: "Customised Solutions",
    category: "control",
    code: "AR-CUSTOM / ENG",
    icon: "⬡",
    description: "Project-specific electrical panel solutions built around your technical requirement.",
    tags: ["Custom", "Project Based", "Engineering"]
  },
  {
    id: "installation",
    name: "Installation Support",
    category: "service",
    code: "AR-SVC / INSTALL",
    icon: "🛠",
    description: "Installation assistance for industrial electrical panel projects and site requirements.",
    tags: ["Installation", "Site Support", "Industrial"]
  },
  {
    id: "maintenance",
    name: "Maintenance Support",
    category: "service",
    code: "AR-SVC / MAINT",
    icon: "✓",
    description: "Maintenance support for panel systems to help keep electrical operations dependable.",
    tags: ["Maintenance", "Service", "Support"]
  }
];

const productGrid = document.getElementById("productGrid");
const filterChips = document.getElementById("filterChips");
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalOrderBtn = document.getElementById("modalOrderBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let modalProductId = null;

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts(filter = "all") {
  const visible = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  productGrid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-top">
        <div class="product-code">${product.code}</div>
        <div class="product-icon">${product.icon}</div>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-tags">
          ${product.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="product-actions">
          <button type="button" data-details="${product.id}">Details</button>
          <button type="button" class="order-now" data-order="${product.id}">Order / Enquire</button>
        </div>
      </div>
    </article>
  `).join("");
}


function orderProductOnWhatsApp(product) {
  const message = [
    "Hello AR Electricals,",
    "",
    `I am interested in ${product.name}.`,
    "Please share the suitable specification, quotation and delivery timeline."
  ].join("\n");

  window.open(whatsappUrl(message), "_blank", "noopener");
}

function openModal(product) {
  modalProductId = product.id;
  modalTitle.textContent = product.name;
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

filterChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  document.querySelectorAll(".chip").forEach(chip => chip.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.filter);
});

productGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-details]");
  const orderButton = event.target.closest("[data-order]");

  if (detailButton) {
    const product = products.find(p => p.id === detailButton.dataset.details);
    if (product) openModal(product);
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

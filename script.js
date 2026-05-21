const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const requestForm = document.querySelector("#requestForm");

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.dataset.elevated = String(window.scrollY > 10);
});

requestForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(requestForm);
  const name = data.get("name")?.toString().trim();
  const phone = data.get("phone")?.toString().trim();
  const service = data.get("service")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  const text = [
    "Ola, Lava Express. Quero marcar uma recolha.",
    name ? `Nome: ${name}` : "",
    phone ? `Telefone: ${phone}` : "",
    service ? `Servico: ${service}` : "",
    message ? `Mensagem: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(`https://wa.me/244951169793?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});

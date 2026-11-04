/* =========================================================
   Portfolio - Kevin Orlando Ortiz Paramo
   Features: language switcher (EN/ES), mobile menu, contact form
   ========================================================= */

/* ---------- 1. TRANSLATIONS (dictionary) ---------- */
const traducciones = {
  en: {
    "nav.home": "HOME",
    "nav.about": "ABOUT ME",
    "nav.skills": "SKILLS",
    "nav.education": "EDUCATION",
    "nav.projects": "PROJECTS",
    "nav.contact": "CONTACT",

    "hero.greeting": "Hello, I am",
    "hero.role": "Web Programming Student",
    "hero.text": "I build simple and clear web pages using HTML, CSS and JavaScript.",
    "hero.button": "See my projects",

    "about.title": "About me",
    "about.p1": "I am a student of the Technical Professional program in Web Programming at UNIESPINAL, in El Espinal, Tolima, Colombia.",
    "about.p2": "I like to learn how a page works: from the menu and the buttons to the user login and the images. I am also interested in game development.",

    "skills.title": "Skills",
    "skills.desc": "These are the tools I use to build a web page.",

    "education.title": "Education",
    "education.item1.title": "Technical Professional in Web Programming",
    "education.item1.text": "Courses: Object-Oriented Programming (Java), General Systems Theory, web development and English.",

    "projects.title": "Projects",
    "projects.p1.title": "UNIRELAS Web Platform",
    "projects.p1.text": "A team project: a web platform with a home page, a menu and several pages for the user.",
    "projects.p2.title": "Login Page",
    "projects.p2.text": "A simple login page where the user writes an email and a password, with a button to send the form.",
    "projects.p3.title": "Java OOP Exercises",
    "projects.p3.text": "Practice exercises with classes, objects and methods in Java.",

    "contact.title": "Contact",
    "contact.text": "Write me a message using this form.",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send message",
    "form.ok": "Thank you! Your message is ready to send.",

    "footer.rights": "All rights reserved.",

    "btn.language": "ES",
    "aria.language": "Change language",
    "aria.menu": "Open menu"
  },

  es: {
    "nav.home": "INICIO",
    "nav.about": "SOBRE MÍ",
    "nav.skills": "SKILLS",
    "nav.education": "FORMACIÓN",
    "nav.projects": "PROYECTOS",
    "nav.contact": "CONTACTO",

    "hero.greeting": "Hola, soy",
    "hero.role": "Estudiante de Programación Web",
    "hero.text": "Construyo páginas web simples y claras usando HTML, CSS y JavaScript.",
    "hero.button": "Ver mis proyectos",

    "about.title": "Sobre mí",
    "about.p1": "Soy estudiante del Técnico Profesional en Programación Web en UNIESPINAL, en El Espinal, Tolima, Colombia.",
    "about.p2": "Me gusta aprender cómo funciona una página: desde el menú y los botones hasta el inicio de sesión del usuario y las imágenes. También me interesa el desarrollo de videojuegos.",

    "skills.title": "Habilidades",
    "skills.desc": "Estas son las herramientas que uso para construir una página web.",

    "education.title": "Formación",
    "education.item1.title": "Técnico Profesional en Programación Web",
    "education.item1.text": "Materias: Programación Orientada a Objetos (Java), Teoría General de Sistemas, desarrollo web e inglés.",

    "projects.title": "Proyectos",
    "projects.p1.title": "Plataforma Web UNIRELAS",
    "projects.p1.text": "Proyecto en equipo: una plataforma web con página de inicio, menú y varias páginas para el usuario.",
    "projects.p2.title": "Página de Login",
    "projects.p2.text": "Una página de inicio de sesión sencilla donde el usuario escribe un correo y una contraseña, con un botón para enviar el formulario.",
    "projects.p3.title": "Ejercicios de POO en Java",
    "projects.p3.text": "Ejercicios de práctica con clases, objetos y métodos en Java.",

    "contact.title": "Contacto",
    "contact.text": "Escríbeme un mensaje usando este formulario.",
    "form.name": "Nombre",
    "form.email": "Correo",
    "form.message": "Mensaje",
    "form.send": "Enviar mensaje",
    "form.ok": "¡Gracias! Tu mensaje está listo para enviarse.",

    "footer.rights": "Todos los derechos reservados.",

    "btn.language": "EN",
    "aria.language": "Cambiar idioma",
    "aria.menu": "Abrir menú"
  }
};

/* ---------- 2. LANGUAGE SWITCHER ---------- */
let idiomaActual = "en";

function aplicarIdioma(idioma) {
  idiomaActual = idioma;
  const texto = traducciones[idioma];

  // Replace the text of every element with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const clave = el.getAttribute("data-i18n");
    if (texto[clave]) {
      el.textContent = texto[clave];
    }
  });

  // Update the language button and accessibility labels
  const botonIdioma = document.getElementById("btn-idioma");
  botonIdioma.textContent = texto["btn.language"];
  botonIdioma.setAttribute("aria-label", texto["aria.language"]);
  document.getElementById("btn-menu").setAttribute("aria-label", texto["aria.menu"]);

  // Update the <html lang="..."> attribute
  document.documentElement.lang = idioma;

  // Remember the choice (wrapped in try/catch in case storage is blocked)
  try {
    localStorage.setItem("idioma", idioma);
  } catch (e) { /* ignore */ }
}

function alternarIdioma() {
  aplicarIdioma(idiomaActual === "en" ? "es" : "en");
}

/* ---------- 3. MOBILE MENU ---------- */
function alternarMenu() {
  document.getElementById("nav").classList.toggle("abierto");
}

function cerrarMenu() {
  document.getElementById("nav").classList.remove("abierto");
}

/* ---------- 4. CONTACT FORM ---------- */
function manejarFormulario(evento) {
  evento.preventDefault(); // do not reload the page
  const mensaje = document.getElementById("respuesta-form");
  mensaje.textContent = traducciones[idiomaActual]["form.ok"];
  evento.target.reset();
}

/* ---------- 5. START ---------- */
document.addEventListener("DOMContentLoaded", function () {
  // Footer year
  document.getElementById("anio").textContent = new Date().getFullYear();

  // Events
  document.getElementById("btn-idioma").addEventListener("click", alternarIdioma);
  document.getElementById("formulario").addEventListener("submit", manejarFormulario);

  // Load the saved language (English by default)
  let guardado = "en";
  try {
    guardado = localStorage.getItem("idioma") || "en";
  } catch (e) { /* ignore */ }
  aplicarIdioma(guardado);
});

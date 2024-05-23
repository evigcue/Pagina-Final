document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded evento disparado")
  /* Mensaje cuando un usuario decide enviar un formulario */
  const boton = document.getElementById("enviar");
  if (boton) {
    boton.addEventListener("click", (event) => {
      event.stopPropagation();
      alert("¡Hola! Gracias por interesarte en nuestro contacto.");
    });
  }

  /* Cuando hago click en botonmenu se activa barmenu */
  const botonmenu = document.getElementById("navbutton");
  const barmenu = document.getElementsByClassName("navbar")[0];
  const mainElement = document.querySelector("main");

  if (botonmenu && barmenu) {
    botonmenu.addEventListener("click", () => {
      console.log("Boton pulsado");
      const estiloBarmenu = window.getComputedStyle(barmenu);
      if (estiloBarmenu.display === "none" || estiloBarmenu.display === "") {
          barmenu.style.display = "block";
          mainElement.style.transform = "translateY(" + barmenu.clientHeight + "px)";
  
          // Ajustar la posición vertical de la barra de navegación
          const navbarHeight = barmenu.offsetHeight;
          const windowHeight = window.innerHeight;
          const navbarTop = (windowHeight - navbarHeight) / 2 + window.pageYOffset;
          barmenu.style.top = navbarTop + "px";
  
          centerNavbar(barmenu); // Llamar a la función para centrar la barra de navegación
      } else {
          barmenu.style.display = "none";
          mainElement.style.transform = "translateY(0)";
      }
  });
  
  function centerNavbar(navbar) {
      const windowWidth = window.innerWidth;
      const navbarWidth = navbar.offsetWidth;
      const leftPosition = (windowWidth - navbarWidth) / 2;
      navbar.style.left = leftPosition + "px";
  }
}
});
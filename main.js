//! CREAR NAVBAR

const createNav = () => {
  const navbar = document.querySelector('#navbar');
  const logo = document.createElement('img');
  const ul = document.createElement('ul');
  const inicio = document.createElement('li');
  const explorar = document.createElement('li');
  const crear = document.createElement('li');
  const buscador = document.createElement('form');
  const inputBuscar = document.createElement('input');
  const btnBuscar = document.createElement('button');
  const btnImg = document.createElement('img');
  const notificaciones = document.createElement('img');
  const mensajes = document.createElement('img');
  const perfil = document.createElement('img');

  logo.src = "./assets/logo.png";
  logo.classList.add('logo');
  inicio.textContent = 'Inicio';
  explorar.textContent = 'Explorar';
  crear.textContent = 'Crear';
  buscador.classList.add('search-form');
  inputBuscar.type = 'text';
  inputBuscar.placeholder = '       Buscar';
  inputBuscar.classList.add('search-bar');
  btnBuscar.type = 'submit';
  btnBuscar.classList.add('search-button');
  btnImg.src = './assets/logo-buscar.png';
  btnImg.classList.add('button-img');
  notificaciones.src = './assets/notificaciones-logo.png';
  mensajes.src = './assets/mensajes-logo.png';
  perfil.src = './assets/perfil-logo.png';
  perfil.classList.add('perfil');
  mensajes.classList.add('mensajes');
  notificaciones.classList.add('notificaciones');

  navbar.append(logo);
  navbar.appendChild(ul);
  ul.appendChild(inicio);
  ul.appendChild(explorar);
  ul.appendChild(crear);
  navbar.append(buscador);
  buscador.appendChild(btnBuscar);
  btnBuscar.append(btnImg);
  buscador.appendChild(inputBuscar);
  navbar.append(notificaciones);
  navbar.append(mensajes);
  navbar.append(perfil);
};

createNav();


//! FETCH API
 for (let i = 0; i < 1; i++) { // cambiar la i
   fetch(`https://api.unsplash.com/search/photos?page=${i}&per_page=30&query=surf&client_id=DKX8RFHjXo-PYoAveyuGV5a7gFdUXra8DvHlgOJPU8E`)
   .then((res) => res.json())
   .then((pics) => printImages(pics.results));
   };

//! PINTAR IMÁGENES
 const gallerySection = document.querySelector('#gallery');
 const printImages = (images) => {
   for (const image of images) {
     const img = document.createElement('img');
     // console.log(image.links.download);
     img.src = image.links.download;
     img.classList.add('pic-pinterest');
     gallerySection.appendChild(img);
   }
 };

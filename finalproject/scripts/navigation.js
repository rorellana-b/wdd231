const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

// dates
const dates = document.querySelector("#currentyear");
const last = document.querySelector("#lastModified");
const today = new Date();
dates.innerHTML = `&copy <span>${today.getFullYear()}</span> - Ronal Orellana - El Salvador`;
last.innerHTML = `Last Modification: ${document.lastModified}`;



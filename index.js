let isModalActive = false;
let darkMode = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
}

function toggleContrast() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function toggleModal() {
    if (isModalActive) {
      isModalActive = false;
      return document.body.classList.remove("modal--active");
    }
    isModalActive = true;
    document.body.classList += " modal--active";
  }

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        "service_egwhe2t",
        "template_xqnpasi",
        event.target,
        "kXO2GUU8lkGiiTFaV"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");

        success.classList += " modal__overlay--visible";
      })
      .catch((e) => {
        console.log(e);
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly at azsnobird1227@yahoo.com"
        );
      });
}
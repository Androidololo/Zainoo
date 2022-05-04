import "../assets/styles.scss";
let head = document.querySelector('header')
head.innerHTML += `
<a href="./index.html" class="header__title">Zainoo&trade;</a>
<nav class="header__icons">
    <img class="header__icon" src="./assets/img/search.svg">
    <img class="header__icon" src="./assets/img/basket.svg">
    <img class="header__icon" src="./assets/img/person.svg">
</nav>
`;
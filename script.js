
const dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("click", () => {
    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function() {
    const categoriesLink = document.querySelector('a[href="#categories"]');
    const categoriesSection = document.querySelector('.categories');
    
    categoriesLink.addEventListener('click', function(event) {
        event.preventDefault();
        categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

function openPopup() {
    document.getElementById('order-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
}

document.getElementById('order-link').addEventListener('click', function(event) {
    event.preventDefault();
    openPopup();
});

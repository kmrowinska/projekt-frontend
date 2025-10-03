document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initButtons();
    initSlider();
});

function initNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            placeholder.innerHTML = data;
            initDropdowns();
            initHamburger();
        });
}

function initDropdowns() {
    document.querySelectorAll('.dropbtn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const dropdown = btn.parentElement;
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            dropdown.classList.toggle('active');
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    });
}

function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}


function initButtons() {
    const btn1 = document.querySelector('.custom-btn');
    const btn2 = document.querySelector('.custom-btn2');

    btn1?.addEventListener('click', () => window.location.href = 'pages/investments.html');
    btn2?.addEventListener('click', () => window.location.href = 'pages/about.html');
}


function initSlider() {
    const images = ["images/poznanpark.png"];
    let current = 0;

    const imgElement = document.querySelector(".card-right img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (!imgElement || !prevBtn || !nextBtn) return;

    function updateImage() {
        imgElement.src = images[current];
    }

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % images.length;
        updateImage();
    });

    updateImage(); 
}
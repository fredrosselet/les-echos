document.querySelectorAll('.nav-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
        var nav = document.getElementById(button.getAttribute('aria-controls'));
        var isOpen = nav.classList.toggle('nav-open');
        button.setAttribute('aria-expanded', isOpen);
    });
});

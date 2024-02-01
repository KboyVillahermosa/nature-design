
const toggleButton = document.getElementById('switch');
const body = document.body;

toggleButton.addEventListener('click',() => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('ligth-mode');
});

const toggleBtn = document.querySelector('.toggle_btn')
      const toggleBtnIcon = document.querySelector('.toggle_btn i')
      const dropDownMenu = document.querySelector('.dropdown_menu')

      toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
      
        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
      }
      
      window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".navbar");
        navbar.classList.toggle("sticky", window.scrollY > 0);
      });
      window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".dropdown_menu");
        navbar.classList.toggle("sticky", window.scrollY > 0);
      });
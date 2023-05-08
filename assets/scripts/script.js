// Dropdown muncul ketika di klik
function dropdownFunction1() {
    document.getElementById("divisiDropdown").classList.toggle("show");
}

function dropdownFunction2() {
    document.getElementById("projectDropdown").classList.toggle("show");
}

// Menutup dropdown ketika klik diluar dropdown
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
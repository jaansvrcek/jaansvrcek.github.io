document.addEventListener("DOMContentLoaded", function(event) {

	//add event listener to the element which toggles navigation
	var button = document.getElementsByClassName("nav-toggle");
	if (button != null) {
			button = button[0];
			button.addEventListener("click", toggleMenu);
	}

	function toggleMenu() {
		var menu = document.getElementsByClassName("nav");
		if (menu != null) {
			menu = menu[0];
			if (menu.classList.contains("nav--collapsed"))
			{
				menu.classList.remove("nav--collapsed");
			}
			else
			{
				menu.className += " nav--collapsed";
			}
		}
		window.scrollTo(0,0);
	}
});

const menuLinks = document.querySelectorAll('.navbar__ul a[href^="#"]');
console.log(menuLinks);

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute("id");
			const menuLink = document.querySelector(`.navbar__ul a[href="#${id}"]`);

			if (entry.isIntersecting) {
				document.querySelector(".navbar__ul a.seleccionado").classList.remove("seleccionado");
				menuLink.classList.add("seleccionado");
			}
		});
	},
	{ rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
	const hash = menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

function initScrollToTop() {
	const scrollToTopBtn = document.getElementById("back-to-top");

	const rootElement = document.documentElement;
	function scrollToTop() {
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	scrollToTopBtn.addEventListener("click", scrollToTop);
}
initScrollToTop();

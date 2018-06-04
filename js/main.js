(() => {
  const mobileWidth = 680;

  const addMenuBackground = () => {
    const pageWidth = window.innerWidth;
    const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop;
    const navigation = document.querySelector("header nav");

    if(pageWidth > mobileWidth) {
      bodyOffset > 0 ? navigation.classList.add("mrw-nav-fixed") : navigation.classList.remove("mrw-nav-fixed");
    }
  }

  const onNavItemClick = () => {
    const navItemList = document.querySelectorAll(".mrw-section-link");
    const navItems = [...navItemList];

    navItems.forEach(item => {
      item.addEventListener("click", event => {
        event.preventDefault();

        const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

        scrollToSection(sectionId);
      })
    })
  }

  const scrollToSection = sectionId => {

  }

  window.addEventListener("scroll", () => {
    addMenuBackground();
  })

  onNavItemClick();
})();

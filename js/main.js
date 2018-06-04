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

  window.addEventListener("scroll", () => {
    addMenuBackground();
  })

})();

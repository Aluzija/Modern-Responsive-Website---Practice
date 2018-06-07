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
    let sectionPosition, sectionOffset;
    const navigationHeight = document.querySelector("header nav").offsetHeight;
    const pageWidth = window.innerWidth;
    if(sectionId !== "#") {
      sectionOffset = document.querySelector(sectionId).offsetTop;
      sectionPosition = pageWidth > mobileWidth ? (sectionOffset - navigationHeight) : sectionOffset;
    } else {
      sectionPosition = 0;
    }
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': sectionPosition
    })
  }

  const onTestimonialsChange = () => {
    let firstChild, lastChild;
    const prevArrow = document.querySelector("#mrw-testimonials-prev");
    const nextArrow = document.querySelector("#mrw-testimonials-next");
    const testimonials = document.querySelector(".mrv-testimonials ul");

    document.addEventListener("click", () => {
      if(event.target === prevArrow) {
        lastChild = testimonials.lastElementChild;
        testimonials.insertAdjacentElement("afterbegin", lastChild);
      } else if(event.target === nextArrow) {
        firstChild = testimonials.firstElementChild;
        testimonials.insertAdjacentElement("beforeend", firstChild);
      }
    })
  }

  window.addEventListener("scroll", () => {
    addMenuBackground();
  })

  onNavItemClick();
  onTestimonialsChange();
})();

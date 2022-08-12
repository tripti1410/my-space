window.addEventListener("load", (event) => {
  const profileImageContainer = document.querySelector(
    ".home-profile-container"
  )
  const profileImage = document.querySelector(".home-profile-image")

  /*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 800px)": function () {
      gsap.to(profileImage, {
        y: () => profileImage.offsetHeight - profileImageContainer.offsetHeight,
        ease: "none",
        scrollTrigger: {
          trigger: profileImageContainer,
          start: "top 20%",
          end: "center top",
          scrub: true,
          markers: true,
          // invalidateOnRefresh: true,
        },
      })
    },

    // all
    all: function () {},
  })
})

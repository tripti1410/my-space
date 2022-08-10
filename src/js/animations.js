window.addEventListener("load", (event) => {
  console.log("page is fully loaded")
  if (gsap) {
    let testimonial_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonial-svg",
        markers: true,
        start: "center center",
        end: "center center",
        toggleActions: "play none play restart",
      },
    })
    gsap.set("#tg-mouth-after", { drawSVG: "0% 30%" })
    gsap.set(["#tg-filled-star", "#tg-filled-side-star"], {
      transformOrigin: "50% 50%",
      scale: 0.8,
    })
    testimonial_tl
      .fromTo(
        "#tg-filled-star",
        { scale: 1.3, transformOrigin: "50% 50%" },
        {
          scale: 1,
          transformOrigin: "50% 50%",
          fill: "#ffbb43",
          ease: "power4.out",
        }
      )
      .to("#tg-blank-star", { stroke: "#ffbb43", duration: 0.1 }, "<")
      .fromTo(
        "#tg-filled-side-star",
        { scale: 1.3, transformOrigin: "50% 50%" },
        {
          scale: 1,
          transformOrigin: "50% 50%",
          fill: "#ffa522",
          ease: "power4.out",
        },
        "<"
      )
      .to("#tg-blank-side-star", { stroke: "#ffa522", duration: 0.1 }, "<")
      .to("#tg-eyeball-R", { x: 1, ease: "back" })
      .to("#tg-eyeball-L", { x: 1, ease: "back" }, "<")
      .to("#tg-mouth-after", { drawSVG: "0% 100%" }, "<")
  }
})

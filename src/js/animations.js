import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText)

window.addEventListener("load", (event) => {
  if (gsap) {
    let testimonial_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonial-svg",
        // markers: true,
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

    // MMS animation
    let dustingHands = gsap.timeline({
      repeat: 2,
      yoyo: true,
      paused: true,
      defaults: {
        ease: "power3.in",
        immediateRender: false,
        transformOrigin: "100% 100%",
      },
    })

    dustingHands
      .fromTo(["#mms-arm-R"], { rotation: -10 }, { rotation: 10 })
      .fromTo(["#mms-R-palm-2"], { rotation: -47 }, { rotation: 47 }, "<")
      .fromTo(["#mms-arm-L"], { rotation: 10 }, { rotation: -10 }, "-=0.5")
      .fromTo(["#mms-L-palm-2"], { rotation: 47 }, { rotation: -47 }, "<")

    let mms_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mms-svg",
        // markers: true,
        start: "center center",
        end: "center center",
        toggleActions: "play none play restart",
      },
    })
    mms_tl
      //Throwing hand
      .from(".mms-title", { y: 80, ease: "sine.out" })
      .to(
        "#mms-elbow-L",
        {
          transformOrigin: "100% 0%",
          rotation: 20,
          duration: 0.4,
          ease: "power4.in",
        },
        0
      )
      .to(
        "#mms-arm-L",
        {
          transformOrigin: "0% 100%",
          rotation: -10,
          duration: 0.4,
          ease: "power4.in",
        },
        "<"
      )
      .to(
        ["#mms-L-palm-2"],
        {
          transformOrigin: "0% 100%",
          rotation: -8,
          x: -3,
          duration: 0.4,
          ease: "power4.in",
        },
        "<"
      )
      .to("#mms-ball", { x: -27, y: -10, duration: 0.6, ease: "power4.in" }, 0)
      .to("#mms-ball", {
        y: 1,
        duration: 1,
        ease: "bounce.out",
        yoyoEase: "power3.out",
      })
      .to(
        "#mms-elbow-R",
        {
          transformOrigin: "100% 0%",
          rotation: 25,
          duration: 0.4,
          ease: "power4.in",
        },
        0
      )
      .to(
        "#mms-arm-R",
        {
          transformOrigin: "0% 100%",
          rotation: -24,
          duration: 0.4,
          ease: "power4.in",
        },
        "<"
      )
      .to(
        "#mms-R-palm-2",
        {
          transformOrigin: "0% 100%",
          rotation: -5,
          x: -3,
          duration: 0.4,
          ease: "power4.in",
        },
        "<"
      )
      .to(
        ["#mms-face", "#mms-hair", "#mms-eyes"],
        { x: -1, transformOrigin: "0% 0%" },
        0
      )

      //Throwing hand back
      .to(
        "#mms-elbow-L",
        {
          transformOrigin: "100% 0%",
          rotation: 0,
          duration: 0.4,
          ease: "power4.out",
        },
        "-=1.2"
      )
      .to(
        "#mms-arm-L",
        {
          transformOrigin: "0% 100%",
          rotation: 0,
          duration: 0.4,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        ["#mms-L-palm-2"],
        {
          transformOrigin: "100% 100%",
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        "#mms-elbow-R",
        {
          transformOrigin: "100% 0%",
          rotation: 0,
          duration: 0.4,
          ease: "power4.out",
        },
        "-=1.2"
      )
      .to(
        "#mms-arm-R",
        {
          transformOrigin: "0% 100%",
          rotation: 0,
          duration: 0.4,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        "#mms-R-palm-2",
        {
          transformOrigin: "0% 100%",
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        ["#mms-face", "#mms-hair", "#mms-eyes"],
        { x: 0, transformOrigin: "0% 0%" },
        "-=1.2"
      )
      .add(dustingHands.play(), "-=0.2")
      .from("#mms-mouth", { scale: 0.1, transformOrigin: "20% 100%" }, "<")
      .to(["#mms-arm-R", "#mms-arm-L", "#mms-L-palm-2", "#mms-R-palm-2"], {
        transformOrigin: "100% 100%",
        rotation: 0,
        x: 0,
        y: 0,
      })
      .from(
        [
          "#mms-eyeball-L",
          "#mms-eye-cover-L",
          "#mms-eyeball-R",
          "#mms-eye-cover-R",
        ],
        {
          transformOrigin: "100% 100%",
          repeat: 3,
          scaleY: 0,
          duration: 0.3,
          repeatDelay: 1.2,
          immediateRender: false,
        },
        0
      )
      .fromTo(
        "#mms-hair-bush",
        { rotation: 3 },
        { rotation: -3, repeat: 6, yoyo: true },
        0
      )
    // about section
    

    // heading2.forEach((item, i) => {
    //   ScrollTrigger.create({
    //     trigger: item,
    //     start: "top bottom",
    //     end: "bottom top",
    //     toggleClass: "inView",
    //     animation: gsap.from(sectionTitle.chars, {
    //       ease: "elastic.out(1, 0.5)",
    //       stagger: 0.1,
    //       y: 80,
    //       autoAlpha: 0,
    //       duration: 0.8,
    //     }),
    //   })
    // })
  }
})

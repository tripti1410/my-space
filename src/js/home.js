import MmsSection from "$src/components/mms-section/mms-section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(ScrollTrigger, SplitText)

function aboutSection() {
  const profileImageContainer = document.querySelector(
    ".home-profile-container"
  )
  const profileImage = document.querySelector(".home-profile-image")
  let aboutSection_tl = gsap.timeline()

  const aboutHeadingChildSplit = new SplitText(".about-heading", {
    type: "lines",
    linesClass: "split-child",
  })
  const aboutHeadingParentSplit = new SplitText(".about-heading", {
    type: "lines",
    linesClass: "split-parent",
  })
  const aboutContentChildSplit = new SplitText(".content", {
    type: "lines",
    linesClass: "split-child",
  })
  const aboutContentParentSplit = new SplitText(".content", {
    type: "lines",
    linesClass: "split-parent",
  })
  // gsap.to(profileImage, {
  //   y: () => profileImage.offsetHeight - profileImageContainer.offsetHeight,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: profileImageContainer,
  //     start: "15% 19%",
  //     end: "center top",
  //     scrub: true,
  //     fastScrollEnd: true
  //     // markers: true,
  //   },
  // })
  aboutSection_tl
    .set(".home-about-container", { autoAlpha: 1 })
    .from(profileImage, { yPercent: 100, duration: 1 })
    .from(
      [aboutHeadingChildSplit.lines, aboutContentChildSplit.lines],
      {
        duration: 1,
        yPercent: 100,
        ease: "power4.out",
        stagger: 0.1,
      },
      0
    )
  return aboutSection_tl
}

function workSection() {
  const workHeading = new SplitText("#home-work-title", {
    type: "chars",
  })
  let scaleDistributor = gsap.utils.distribute({
    base: 0.2,
    amount: 1.5,
    from: "center",
    ease: "power1",
  })

  let distanceDistributor = gsap.utils.distribute({
    base: -200,
    amount: 400,
    ease: "none",
  })
  const projects = gsap.utils.toArray(".home-work-container__project")
  let workSection_tl = gsap.timeline()
  workSection_tl
    .set(".home-work-container", { autoAlpha: 1 })
    .from(workHeading.chars, {
      scale: scaleDistributor,
      x: distanceDistributor,
      opacity: 0,
      stagger: {
        each: 0.01,
        from: "center",
      },
      duration: 2,
    })
    .from(projects, { autoAlpha: 0, yPercent: 30, stagger: 0.04 })
  return workSection_tl
}
function serviceSection() {
  const serviceSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hire-me",
      // markers: true,
      start: "top 50%",
      fastScrollEnd: true,
    },
  })
  const serviceHeading = new SplitText("#home-service-title", {
    type: "chars",
  })
  const letsChatText = new SplitText(".home-services-container__lets-chat h3", {
    type: "chars",
  })
  gsap.set(letsChatText.chars, { opacity: 0 })
  serviceSection_tl
    .from(serviceHeading.chars, {
      rotate: 360,
      stagger: 0.05,
      xPercent: -100,
      autoAlpha: 0,
      duration: 0.1,
    })
    .from(".service", { autoAlpha: 0 }, "-=0.5")
    .from("#mascot-svg", { autoAlpha: 0, duration: 0.3 })
    .to(letsChatText.chars, { opacity: 1, stagger: 0.05, duration: 0.3 })
  return serviceSection_tl
}
function testimonialSection() {
  const testimonialSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonial-section",
      // markers: true,
      start: "top 50%",
      fastScrollEnd: true,
    },
  })
  const testimonialHeading = new SplitText("#home-testimonial-title", {
    type: "chars",
  })
  testimonialSection_tl
    .from(testimonialHeading.chars, {
      stagger: 0.05,
      ease: "back",
      autoAlpha: 0,
      yPercent: 100,
    })
    .from(gsap.utils.toArray(".testimonial-section > blockquote"), {
      autoAlpha: 0,
      stagger: 0.01,
      yPercent: 20,
      ease: "power4.out",
    })
  return testimonialSection_tl
}
function articlesSection() {
  const articlesSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-writing-container",
      // markers: true,
      start: "top 50%",
      fastScrollEnd: true,
    },
  })
  const articleHeading = new SplitText("#home-writing-title", {
    type: "chars",
  })
  const articles = gsap.utils.toArray(".home-writing-container .blog")
  gsap.set(articles, { autoAlpha: 0, scale: 0 })
  articlesSection_tl
    .from(articleHeading.chars, {
      stagger: 0.05,
      ease: "back",
      autoAlpha: 0,
      rotation: gsap.utils.random(0, -360, 40),
    })
    .to(
      articles,
      {
        autoAlpha: 1,
        scale: 1,
        ease: "sine.out",
        stagger: {
          grid: [3, 3],
          from: "edges",
          ease: "power2.in",
          amount: 0.5,
        },
      },
      "-=0.5"
    )
  return articlesSection_tl
}
function recognitionSection() {
  const recognitionSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-mentions-container",
      // markers: true,
      start: "top 50%",
      fastScrollEnd: true,
    },
  })
  const recognitionHeading = new SplitText("#home-recognition-title", {
    type: "chars",
  })
  gsap.set(recognitionHeading.chars, {
    filter: "blur(0px) brightness(1)",
    rotation: 10
  })
  recognitionSection_tl.to(recognitionHeading.chars, {
    filter: "blur(30px) brightness(10)",
    rotation: 0,
    clearProps: "filter",
    stagger: {
      each: 0.01,
      ease: "none",
    },
  })
  return recognitionSection_tl
}
function mmsSection() {
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
      markers: true,
      start: "center center",
      end: "center center",
      toggleActions: "play none play restart",
      // fastScrollEnd: true,
    },
  })
  mms_tl
    //Throwing hand
    //.from(".mms-title", { y: 80, ease: "sine.out" })
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
  return mms_tl
}
window.addEventListener("load", (event) => {
  gsap.to(".header", { autoAlpha: 1, ease: "sine.out", duration: 0.1 })
  aboutSection()
  workSection()
  serviceSection()
  testimonialSection()
  articlesSection()
  recognitionSection()
  mmsSection()
})

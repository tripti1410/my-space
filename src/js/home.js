import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(ScrollTrigger, SplitText)

window.addEventListener("load", (event) => {
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
  aboutSection_tl.from(profileImage, { yPercent: 100, duration: 1 }).from(
    [aboutHeadingChildSplit.lines, aboutContentChildSplit.lines],
    {
      duration: 1,
      yPercent: 100,
      ease: "power4.out",
      stagger: 0.1,
    },
    0
  )

  gsap.to(profileImage, {
    y: () => profileImage.offsetHeight - profileImageContainer.offsetHeight,
    ease: "none",
    scrollTrigger: {
      trigger: profileImageContainer,
      start: "15% 19%",
      end: "center top",
      scrub: true,
      // markers: true,
    },
  })

  //Work section
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
    .from(workHeading.chars, {
      scale: scaleDistributor,
      x: distanceDistributor,
      opacity: 0,
      stagger: {
        each: 0.01,
        from: "center",
      },
    })
    .from(projects, { autoAlpha: 0, yPercent: 30, stagger: 0.04 })

  //Service section
  const serviceSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hire-me",
      // markers: true,
      start: "top 50%",
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
    .from(".service", { autoAlpha: 0 })
    .from("#mascot-svg", { autoAlpha: 0 })
    .to(letsChatText.chars, { opacity: 1, stagger: 0.05 })

  //Testimonial section
  const testimonialSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonial-section",
      // markers: true,
      start: "top 50%",
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
  //articles section
  const articlesSection_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-writing-container",
      markers: true,
      start: "top 50%",
    },
  })
  const articleHeading = new SplitText("#home-writing-title", {
    type: "chars",
  })
  console.log(gsap.utils.toArray(".home-writing-container .blog"), "gg")
  articlesSection_tl
    .from(articleHeading.chars, {
      stagger: 0.05,
      ease: "back",
      autoAlpha: 0,
      rotation: gsap.utils.random(0, -360, 40),
    })
    .from(gsap.utils.toArray(".home-writing-container .blog"), {
      stagger: 0.1,
      ease: "back",
      scale: 0.2,
      ease: "power4.out",
    })
  //Motion banner

})

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

gsap.set(".svg-wrap", { autoAlpha: 1 });

const tl = gsap.timeline();

tl.fromTo(
	".swipe",
	{
		xPercent: -100,
	},
	{
		duration: 1,
		xPercent: 100,
		ease: "sine.easeInOut",
		stagger: {
			each: 0.15,
		},
	},
	0
)
	.from(
		".maskSwipe",
		{
			xPercent: -100,
			ease: "sine.easeInOut",
		},
		0.4
	)

	.from("#mascot", {
		transformOrigin: "100% 100%",
		x: 70,
		y: 20,
		rotate: 30,
		ease: "back.out(3)",
	})
	.from(["#mascot-eyeball-L", "#mascot-eyeball-R"], {
		scaleY: 0,
		ease: "elastic.out(0.5, 0.4)",
		transformOrigin: "50% 50%",
		duration: 0.2,
		repeat: 3,
		repeatDelay: 1,
	})
	.from(
		["#mascot-eyecover-L", "#mascot-eyecover-R"],
		{
			scaleY: 0.1,
			transformOrigin: "100% 100%",
			duration: 0.2,
			repeat: 3,
			repeatDelay: 1,
		},
		"<"
	)
	.from(
		".elements",
		{ autoAlpha: 0, ease: "back.out(2)", stagger: 0.05 },
		"-=4"
	)
	.from(
		"#hello",
		{
			duration: 0.4,
			drawSVG: "0%",
		},
		"-=3.5"
	)
	.from(
		"#speech *",
		{
			drawSVG: "0%",
			stagger: 0.05,
		},
		"-=3.5"
	);
const talk_tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".about-page__talk-image",
		start: "top 50%",
		toggleActions: "play complete reverse reset",
	},
});

talk_tl
	.from(".talk-image-bg", {
		scaleX: 0,
		transformOrigin: "left center",
		ease: "expo.out",
		duration: 1.2,
	})
	.from(
		".maskSwipeTalkImage",
		{
			duration: 1.2,
			ease: "expo.out",
			xPercent: -100,
		},
		"-=0.5"
	)
	.from(
		[".littleCircle, .bigCircle"],
		{
			scale: 0,
			transformOrigin: "50% 50%",
			stagger: 0.1,
		},
		"-=0.2"
	)
	.from(
		[".hoop"],
		{
			drawSVG: 0,
			stagger: 0.1,
		},
		"-=0.2"
	)
	.from(
		"#highlight-on-talk-image *",
		{
			drawSVG: 0,
			stagger: 0.05,
		},
		"-=0.2"
	);

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(
	ScrollTrigger,
	SplitText,
	DrawSVGPlugin,
	MotionPathPlugin,
	MorphSVGPlugin
);

function mascotAnimation() {
	let tl = gsap.timeline({
		defaults: { duration: 2, ease: "power4.in" },
	});
	tl.from("#mascot", {
		xPercent: -10,
		scale: 0,
		transformOrigin: "100% 100%",
		autoAlpha: 0,
		ease: "elastic.out(0.5, 0.4)",
	})
		.from(
			[
				"#mascot-eyeball-L",
				"#mascot-eyeball-R",
				"#mascot-eyebrow-L",
				"#mascot-eyebrow-R",
			],
			{
				y: -1,
				x: -1,
				ease: "elastic.out(0.5, 0.4)",
				transformOrigin: "50% 50%",
			},
			"-=0.2"
		)
		.from("#mascot-specs", { y: -1, x: -1, ease: "elastic.out(0.5, 0.4)" }, "<")
		.to("#large-drop", {
			motionPath: {
				path: "#short-path",
				align: "#short-path",
				alignOrigin: [0.5, 0.5],
			},
		})
		.to("#large-drop", {
			motionPath: {
				path: "#short-path",
				align: "#short-path",
				alignOrigin: [0.5, 0.5],
				start: 1,
				end: 0,
			},
		})
		.to(
			"#small-drop",
			{
				keyframes: {
					rotate: [0, -90, -90],
				},
				motionPath: {
					path: "#long-path",
					align: "#long-path",
					alignOrigin: [0.5, 0.5],
				},
			},
			0
		)
		.set("#small-drop", { autoAlpha: 0 });
	// .from(
	// 	"#mascot-bush",
	// 	{
	// 		scale: 0.8,
	// 		ease: "elastic.out(0.5, 0.4)",
	// 		transformOrigin: "100% 100%",
	// 	},
	// 	"-=0.25"
	// );
	// .fromTo(
	// 	"#mascot-bush",
	// 	{ rotation: -4 },
	// 	{
	// 		rotation: 1,
	// 		transformOrigin: "70% 70%",
	// 		repeat: 2,
	// 		yoyo: true,
	// 		duration: 0.25,
	// 		ease: "none",
	// 	}
	// )
	// .from(["#mascot-eyeball-L", "#mascot-eyeball-R"], {
	// 	scaleY: 0,
	// 	transformOrigin: "100% 100%",
	// 	immediateRender: false,
	// 	repeat: 1,
	// 	repeatDelay: 0.5,
	// })
	// .from(
	// 	["#mascot-eyecover-L", "#mascot-eyecover-R"],
	// 	{
	// 		scaleY: 0.1,
	// 		transformOrigin: "100% 100%",
	// 		immediateRender: false,
	// 		repeat: 1,
	// 		repeatDelay: 0.5,
	// 	},
	// 	"<"
	// )
	// .from(
	// 	"#mascot-mouth",
	// 	{ scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.2 },
	// 	"<"
	// );
	return tl;
}
function workSection() {
	const workHeading = new SplitText("#home-work-title", {
		type: "chars",
	});
	let scaleDistributor = gsap.utils.distribute({
		base: 0.2,
		amount: 1.5,
		from: "center",
		ease: "power1",
	});

	let distanceDistributor = gsap.utils.distribute({
		base: -200,
		amount: 400,
		ease: "none",
	});
	let workSection_tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#home-work-title",
			// markers: { startColor: "red", endColor: "red", fontSize: "20px" },
			start: "top 85%",
			end: "bottom 70%",
			toggleActions: "play none play restart",
		},
	});
	workSection_tl.from(workHeading.chars, {
		scale: scaleDistributor,
		x: distanceDistributor,
		opacity: 0,
		stagger: {
			each: 0.01,
			from: "center",
		},
		duration: 1,
	});
	return workSection_tl;
}
function serviceSection() {
	const serviceSection_tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#hire-me",
			start: "top 70%",
			fastScrollEnd: true,
		},
	});
	const serviceHeading = new SplitText("#home-service-title", {
		type: "chars",
	});
	serviceSection_tl
		.set(".home-services-container", { autoAlpha: 1 })
		.from(serviceHeading.chars, {
			rotate: 360,
			stagger: 0.05,
			xPercent: -100,
			autoAlpha: 0,
			duration: 0.1,
		});
	return serviceSection_tl;
}
function envelopHighlight(highlight) {
	let tl = gsap.timeline();
	const highlightPath = MorphSVGPlugin.convertToPath(highlight);

	tl.fromTo(
		highlightPath,
		{ drawSVG: "100%", autoAlpha: 0 },
		{ duration: 0.1, drawSVG: "100% 50%", autoAlpha: 1 }
	)
		.fromTo(
			highlightPath,
			{ drawSVG: "0%" },
			{ duration: 0.1, drawSVG: "10%", immediateRender: false },
			"<"
		)
		.to(highlightPath, { duration: 0.1, drawSVG: "90% 100%" })
		.to(highlightPath, { duration: 0.1, drawSVG: "100% 100%" });
	return tl;
}
function envelopAnimation() {
	gsap.set("#envelop", { autoAlpha: 1 });
	const letterProxy = MorphSVGPlugin.convertToPath("#letter-rect-proxy");
	gsap.set("#letter-rect-proxy", { autoAlpha: 0 });
	gsap.set("#envelop-cover-open", { autoAlpha: 0 });
	gsap.set("#envelop-shadow", { transformOrigin: "50% 50%", scale: 0.7 });
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#envelop",
			start: () => "top 40%",
			end: () => "100 50%",
			toggleActions: "play none restart none",
		},
	});
	tl.fromTo(
		"#envelop-outer",
		{ y: 10, scale: 0.7, transformOrigin: "50% 50%" },
		{ y: -20, rotate: -3, repeat: 4, yoyo: true }
	)
		.fromTo(
			"#envelop-shadow",
			{ scale: 0.7 },
			{
				scale: 0.85,
				transformOrigin: "50% 50%",
				repeat: 4,
				yoyo: true,
			},
			"<"
		)
		.to(
			"#envelop-cover-close",
			{
				morphSVG: "48.82 185 97.09 215 145.63 185 48.82 185",
				duration: 0.5,
				repeat: 4,
				yoyo: true,
			},
			"<"
		)
		.to("#envelop-outer", {
			y: "-=30",
			scale: 1,
			rotate: 0,
			transformOrigin: "50% 50%",
			ease: "elastic.in(1, 0.5)",
		})
		.addLabel("letterPopsUp", "-=0.2")
		.to(
			"#envelop-shadow",
			{
				scale: 1,
				transformOrigin: "50% 50%",
				ease: "elastic.in(1, 0.5)",
			},
			"<"
		)
		.to(
			"#envelop-cover-close",
			{
				morphSVG: "48.82 184.54 97.31 143.44 145.63 184.36 48.82 184.54",
				ease: "power4.in",
			},
			"letterPopsUp"
		)
		.to("#envelop-cover-open", { autoAlpha: 1, duration: 0.01 }, ">")
		.to("#envelop-cover-close", { autoAlpha: 0, duration: 0.01 }, "<")
		.to(
			"#letter-rect",
			{
				height: 60,
				y: -60,
				duration: 0.2,
				transformOrigin: "50% 100%",
				ease: "elastic.in(1, 0.4)",
			},
			"-=0.2"
		)
		.addLabel("highlight", ">")
		.to(
			"#letter-rect",
			{
				height: "+=30",
				y: "-=30",
				transformOrigin: "50% 100%",
				duration: 0.2,
				ease: "sine.in",
			},
			"+=0.1"
		)
		.add(envelopHighlight("#high-1"), "highlight")
		.add(envelopHighlight("#high-2"), "highlight+=0.05")
		.add(envelopHighlight("#high-3"), "highlight")
		.add(envelopHighlight("#high-4"), "highlight+=0.05")
		.to("#letter-rect", { autoAlpha: 0, duration: 0 })
		.to(letterProxy, { autoAlpha: 1, duration: 0 }, "<")
		.to(letterProxy, {
			morphSVG:
				"M126.39,179.54c-21.44-.5-42.87-.99-64.31-1.49-3.58-32.37,.64-67.26,19.51-95.13,21.54,2.39,42.06,4.64,63.49,7.91-16.44,26.55-22.21,58.32-18.69,88.71Z",
			duration: 0.1,
		})
		.to(letterProxy, {
			motionPath: {
				path: "#letter-flying-path",
				align: "#letter-flying-path",
				autoRotate: 90,
				alignOrigin: [0.41, 1],
				start: 0.12,
				end: 1,
			},
			duration: 0.3,
		})
		.set(letterProxy, { autoAlpha: 0 }, "<0.2");
	tl.timeScale(0.75);

	return tl;
}
function testimonialSection() {
	const testimonialSection_tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".testimonial-section",
			// markers: true,
			start: "top 50%",
			fastScrollEnd: true,
			toggleActions: "play none play restart",
		},
	});
	const testimonialHeading = new SplitText("#home-testimonial-title", {
		type: "chars",
	});

	testimonialSection_tl.from(testimonialHeading.chars, {
		stagger: 0.05,
		ease: "back",
		autoAlpha: 0,
		yPercent: 100,
	});

	return testimonialSection_tl;
}
function articlesSection() {
	const articlesSection_tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".home-writing-container",
			// markers: true,
			start: "top 50%",
			end: "top 40%",
			toggleActions: "play none play restart",
		},
	});
	const articleHeading = new SplitText("#home-writing-title", {
		type: "chars",
	});

	articlesSection_tl.from(articleHeading.chars, {
		stagger: 0.05,
		ease: "back",
		autoAlpha: 0,
		rotation: gsap.utils.random(0, -360, 40),
	});
	return articlesSection_tl;
}
function recognitionSection() {
	const recognitionSection_tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".home-mentions-container",
			// markers: true,
			start: "top 50%",
			toggleActions: "play none play restart",
		},
	});
	const recognitionHeading = new SplitText("#home-recognition-title", {
		type: "chars",
	});
	gsap.set(recognitionHeading.chars, {
		filter: "blur(0px) brightness(1)",
	});
	recognitionSection_tl.to(recognitionHeading.chars, {
		filter: "blur(30px) brightness(10)",
		clearProps: "filter",
		stagger: {
			each: 0.01,
			ease: "none",
		},
	});
	return recognitionSection_tl;
}
function mmsCharacterAnimation() {
	let dustingHands = gsap.timeline({
		repeat: 2,
		yoyo: true,
		paused: true,
		defaults: {
			ease: "power3.in",
			immediateRender: false,
			transformOrigin: "100% 100%",
		},
	});

	dustingHands
		.fromTo(["#mms-arm-R"], { rotation: -10 }, { rotation: 10 })
		.fromTo(["#mms-R-palm-2"], { rotation: -47 }, { rotation: 47 }, "<")
		.fromTo(["#mms-arm-L"], { rotation: 10 }, { rotation: -10 }, "-=0.5")
		.fromTo(["#mms-L-palm-2"], { rotation: 47 }, { rotation: -47 }, "<");
	let mms_tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#mms-svg",
			// markers: true,
			start: "center 70%",
			end: "center 70%",
			toggleActions: "play none play restart",
		},
	});
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
		);
	return mms_tl;
}
function testimonialCharacterAnimation() {
	gsap.set("#tg-mouth-after", { drawSVG: "0% 30%" });
	gsap.set(["#tg-filled-star", "#tg-filled-side-star"], {
		transformOrigin: "50% 50%",
		scale: 0.8,
	});
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#testimonial-svg",
			start: "top 50%",
			end: "+=10",
			toggleActions: "play none restart restart",
		},
	});
	tl.fromTo(
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
		.to("#tg-mouth-after", { drawSVG: "0% 100%" }, "<");
	return tl;
}
function phoneToTab() {
	let tl = gsap.timeline();
	tl.from(["#phone"], { rotate: 90, transformOrigin: "50% 50%" }, "+=0.1")
		.to(["#web-mock-phone"], { rotate: -90, svgOrigin: "49.6px 50px" }, "<")
		.to("#phone-outer-rect", { morphSVG: "#tab-outer-rect" }, "<")
		.to("#phone-inner-rect", { morphSVG: "#tab-inner-rect" }, "<")
		.to(
			[
				"#header-phone",
				"#phone-banner",
				"#phone-content-1",
				"#phone-content-2",
				"#phone-content-3",
			],
			{ x: 10, autoAlpha: 0, duration: 0.1, stagger: 0.02 },
			0.3
		)
		.to(
			["#phone-top-circle"],
			{ scale: 1.3, x: -7, transformOrigin: "50% 50%" },
			0.25
		)
		.to(["#phone-bottom-circle"], { x: 6 }, "<");
	return tl;
}
function tabContent(tabFooter) {
	let tl = gsap.timeline();
	tl.from(["#tab-header", "#tab-banner"], {
		yPercent: -100,
		autoAlpha: 0,
		duration: 0.1,
		stagger: 0.01,
	})
		.from(
			[
				"#tab-content-1",
				"#tab-content-2",
				"#tab-content-3",
				"#tab-content-4",
				"#tab-content-5",
				"#tab-content-6",
			],
			{ yPercent: -100, autoAlpha: 0, duration: 0.1, stagger: 0.1 },
			"-=0.1"
		)
		.from(
			gsap.utils.toArray("#tab-blocks rect"),
			{ autoAlpha: 0, stagger: 0.01 },
			"-=0.1"
		)
		.to(tabFooter, { duration: 0.1, autoAlpha: 1 }, "-=0.3");
	return tl;
}
function tabToMonitor(tabFooter) {
	let tl = gsap.timeline();
	tl.to("#phone-outer-rect", {
		morphSVG: "#monitor-outer-rect",
	})
		.to(
			"#phone-inner-rect",
			{
				morphSVG: "#monitor-inner-rect",
			},
			"<"
		)
		.set(
			["#phone-top-circle", "#phone-bottom-circle"],
			{ x: 0, y: 0, autoAlpha: 0, duration: 0.1 },
			"<"
		)
		.from(
			"#monitor-base-vertical",
			{ yPercent: -100, autoAlpha: 0, duration: 0.2 },
			"<0.4"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-header-bg"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-header-bg") },
			0
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-banner-bg"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-banner-bg") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-banner-content-1"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-banner-content-1") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-banner-content-2"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-banner-content-2") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-banner-content-3"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-banner-content-3") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-logo"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-logo") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-menu-1"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-menu-1") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-menu-2"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-menu-2") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-menu-3"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-menu-3") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-menu-4"),
			{ morphSVG: MorphSVGPlugin.convertToPath("#monitor-menu-4") },
			"<"
		)
		.to(
			MorphSVGPlugin.convertToPath("#tab-footer"),
			{
				morphSVG: MorphSVGPlugin.convertToPath("#monitor-footer"),
				autoAlpha: 1,
				y: 0,
			},
			"<"
		);

	return tl;
}
function monitorContent() {
	let tl = gsap.timeline();
	tl.from(gsap.utils.toArray("#desktop-bottom rect"), {
		rotate: 360,
		transformOrigin: "50% 50%",
		stagger: 0.01,
		autoAlpha: 0,
	})
		.from(
			"#desktop-bars rect",
			{ scaleX: 0, transformOrigin: "0% 0%", stagger: 0.01, autoAlpha: 0 },
			"<"
		)
		.from(
			gsap.utils.toArray("#desktop-aside rect:not(:first-child)"),
			{ rotate: 360, transformOrigin: "50% 50%", stagger: 0.01, autoAlpha: 0 },
			"<"
		)
		.from(
			gsap.utils.toArray("#desktop-aside rect:first-child"),
			{ scaleY: 0, transformOrigin: "0% 0%", autoAlpha: 0 },
			"<"
		)
		.to(
			"#tab-content",
			{ scale: 1.25, x: -19, y: -15, transformOrigin: "50% 50%" },
			"<"
		);
	return tl;
}
function responsiveDevice() {
	let master = gsap.timeline({
		scrollTrigger: {
			trigger: "#responsive-devices",
			start: () => "top 40%",
			end: () => "bottom 50%",
			// markers: true,
			toggleActions: "play none restart none",
		},
	});
	gsap.set("#responsive-devices", { autoAlpha: 1 });
	gsap.set(
		[
			"#tab-inner-rect",
			"#tab-outer-rect",
			"#tab-top-circle",
			"#tab-bottom-circle",
			"#monitor-inner-rect",
			"#monitor-outer-rect",
			"#monitor-header-bg",
			"#monitor-footer",
			"#monitor-banner-content",
			"#monitor-bottom-circle",
			"#tab-footer",
		],
		{ autoAlpha: 0 }
	);
	const tabFooter = MorphSVGPlugin.convertToPath("#tab-footer");
	master
		.add(phoneToTab())
		.add(tabContent(tabFooter))
		.add(tabToMonitor())
		.add(monitorContent());

	master.timeScale(0.5);
}
window.addEventListener("load", (event) => {
	let mm = gsap.matchMedia(),
		breakPoint = 800;
	mm.add(
		{
			isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
			isMobile: `(max-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
		},
		(context) => {
			let { isMobile } = context.conditions;
			// mascotAnimation();
			testimonialCharacterAnimation();
			mmsCharacterAnimation();
			responsiveDevice();
			envelopAnimation();
			if (!isMobile) {
				serviceSection();

				workSection();
				articlesSection();
				testimonialSection();
				recognitionSection();
			}
		}
	);
});

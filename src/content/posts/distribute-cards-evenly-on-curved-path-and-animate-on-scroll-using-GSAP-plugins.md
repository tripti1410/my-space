---
path: /blog/distribute-cards-evenly-on-curved-path-and-animate-on-scroll-using-GSAP-plugins/
slug: distribute-cards-evenly-on-curved-path-and-animate-on-scroll-using-GSAP-plugins
date: 2025-04-18T17:46:24.033Z
title: "Distribute cards evenly on curved path and animate on scroll using GSAP plugins"
tags:
  - how-to
  - GSAP
  - ScrollTrigger
  - tech
---

In this tutorial, we’ll learn how to animate cards along a curved path and trigger that animation based on scroll — using **GSAP**, **ScrollTrigger**, and the **MotionPathPlugin**.

![Demo of distributing cards evenly on scroll](/assets/distribute-cards-evenly-on-curved-path/demo-distribute-cards-evenly.gif)

You’ve probably seen this kind of animation on modern websites — especially in fashion e-commerce or platforms that use cards to display content. These cards often animate in a carousel format, shuffle in place, or follow a path-based transition. While this demo is simple, it unlocks possibilities for countless modern UI animations. Below is the demo CodePen

<p class="codepen" data-height="300" data-slug-hash="XJWvBrY" data-pen-title="cards move on curve GSAP" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/XJWvBrY">
  cards move on curve GSAP</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

### The Curved Path

To begin, we need a path along which the cards will move. There are two common ways to define a motion path in GSAP:

1. **Using coordinates directly** via GSAP's `motionPath` plugin.
2. **Using an SVG path**, which is what we’ll use here.

We’ll embed the SVG in the HTML and refer to its `#id` or `.class` in the animation.

### The Cards

We place 8 cards inside a container called `.card-container`. Each card will be individually animated along the curved path.

### Setup

Wrap the SVG and the card container inside a parent element called `.motion-wrapper`. To make the cards appear on the path visually, we overlap the SVG using `position: absolute`.

![initial-state.png](/assets/distribute-cards-evenly-on-curved-path/initial-state.png)

### Aligning Cards to the curved path using motionPath

The `MotionPathPlugin` helps us easily align the cards to the curved SVG path. Here’s the basic logic to align and animate each card.

Pick all cards and loop through them using `forEach`. Animate the cards with [`gsap.to`](http://gsap.to) tween, using motionPath to curve them. I also centered the cards using `alignOrigin: [0.5, 0.5]` along the curved line. `autoRotate` will make the card rotate correctly.

```jsx
const cards = gsap.utils.toArray(".item");
cards.forEach((card, i) => {
	gsap.to(card, {
		motionPath: {
			path: ".curve-path",
			align: ".curve-path",
			alignOrigin: [0.5, 0.5],
			autoRotate: true,
		},
	});
});
```

Doing so cards will overlap at the start of the curved path. Like it is shown below.

![cards-at-start.png](/assets/distribute-cards-evenly-on-curved-path/cards-at-start.png)

### Evenly Distributing Cards Along a Curved Path with MotionPath

When distributing cards along a curved path with equal spacing, we usually need to do some math — especially to determine the total length of that path. Since the path can be of any shape or size, calculating the exact length manually would be tedious.

Thankfully, the `motionPath` plugin simplifies this process for us. Instead of calculating the path length ourselves, the plugin abstracts it using a normalized scale:

- `0` represents the **start** of the path
- `1` represents the **end** of the path

We can use these normalized values in the plugin's properties like `start` and `end` to control the positioning of elements along the curve. By default, `start` is set to `0` and `end` is set to `1`, giving us an intuitive way to distribute items along any path — no manual length calculations required.

In the below image I have drawn an example how we distribute cards along a straight line of length 14 and there are 8 cards.

![hand-drawn.jpg](/assets/distribute-cards-evenly-on-curved-path/hand-drawn.jpg)

On a curved path, we follow the same logic but with normalized values:

- Total length of curved path = 1
- Total number of cards = 8
- Total number of spacing = 8 - 1 = 7
- All the cards are aligned center

<aside>
💡 spacing = Total length of curved path / Total number of spacing = 1 / 7

</aside>

We know first card is 0 and last card is 1. For others cards will use below math where `i` is the card position as we will be looping through all the cards. We use `i - 1` because the first and last cards are centered, so part of them sits outside the path bounds.

<aside>
💡 position of card = spacing * (i - 1)

</aside>

### Utility Function to Calculate Card Start Position

Here’s the function to compute each card’s `start` value on the path:

```jsx
function getStartValues(i, totalCards) {
	if (i + 1 === 1) {
		// First card so value should be 1 but if we make exact one that autororate does not take effect so reduced it with marginal difference.
		return 0.99;
	} else if (i + 1 === 8) {
		return 0;
	} else {
		//totalCards - 1 because last and first cards half portion is out as we are aligning it from the center of the card
		return (totalCards - (i + 1)) * (1 / (totalCards - 1));
	}
}
```

We are using `end: 1` I am animating it from start to end position. But this can be animated in various ways.

```jsx
cards.forEach((card, i) => {
	gsap.to(card, {
		scrollTrigger: {
			trigger: ".motion-container",
			start: () => "top top",
			end: () => "bottom+=300 center",
			scrub: 1,
			markers: true,
		},
		ease: "none",
		motionPath: {
			path: ".curve-path",
			align: ".curve-path",
			alignOrigin: [0.5, 0.5],
			autoRotate: true,
			start: getStartValues(i, totalCards), // Distribute evenly along the path
			end: 1,
		},
	});
});
```

### Scroll-Based Animation with ScrollTrigger

We animate the cards on scroll using `ScrollTrigger`. One ScrollTrigger pins the section, while another is used per card to scrub the animation along the path. A detailed explanation of scrollTrigger is beyond the scope of this blog, which focuses on illustrating the distribution concept along a curved path.

All the code and animation be seen on the CodePen demo.

### Wrapping Up

This blog focused on animating cards along a motion path, evenly spaced and controlled by scroll. While we didn’t dive deep into `ScrollTrigger` mechanics here, this setup shows the power of combining GSAP's tools to build sleek, interactive experiences.

A similar concept using a curved carousel on scroll is explored in another post — [**coming soon**].

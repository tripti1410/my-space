---
path: /blog/macBook-air-text-zoom-animation-greensock-and-scrollTrigger/
slug: macBook-air-text-zoom-animation-greensock-and-scrollTrigger
date: 2025-04-12T17:46:24.033Z
title: "Apples's MacBook Air text zoom animation on scroll effect with GreenSock & ScrollTrigger"
videolink: https://www.youtube.com/watch?v=kl0GSH2mIsQ
tags:
  - how-to
  - GSAP
  - ScrollTrigger
  - tech
---

Apple’s website is famous for its slick, simple, and elegant animations. One standout effect was the MacBook Air zoom text animation, which used to be featured on their site but isn’t there anymore. Here I will explain how to achieve this(shown in CodePen) effect. I have also created video about it check out [here](https://youtu.be/QmGHzZETBgA?si=IxOBaqOomkfg1HRi).

<p class="codepen" data-height="300" data-slug-hash="QWJvxRE" data-pen-title="Apple.com Zoom In Text Scroll Animation" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/QWJvxRE">
  Apple.com Zoom In Text Scroll Animation</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

There are three key things to keep in mind:

1. Zooming in on the text makes the black color cover the viewport.
2. Scrolling activates this animation.
3. The container remains fixed during animation.

### Setup

I’ve got an image(MacBook Air text) inside a `div` called `text-wrapper`. This `text-wrapper` is nested inside a parent container we’ll call it `.intro-section`

The panel is a full-width, full-height viewport container, and the `text-wrapper` is centred inside it using flex-box—just standard CSS. Below the `.intro-section`, the rest of the page is made up of regular full-width, full-height sections to add vertical scrolling space. Immediate section of the intro section should be black in order to seamlessly transition. Below I have mentioned the most important part of HTML and CSS and left the pure decorative part.

```html
<div class="container intro-section">
	<div id="text-wrapper">
		<img
			width="100%"
			src="https://assets.website-files.com/649d3eeab715708cabae995a/649d4aa28aeae2926e9c6919_macbook-air-text.svg"
			alt="Image contains MacBook Air text"
		/>
	</div>
</div>
<section class="section section-2 black ">
	<p>Some text ...</p>
</section>
<section class="section purple ">
	<p>Lorem ipsum dolor, ...</p>
</section>
```

```css
body {
  ....
  overflow-x: hidden;
}
#text-wrapper {
  width: 50vw;
}
p {
	...
  width: 60vw;
}
.section {
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10
}
```

### Animation

I started by defining a gsap timeline.

```jsx
let tlIntro = gsap.timeline();
```

To this timeline I will add a tween for `#text-wrapper` .Since this is a zoom effect I will use scale and `transformOrigin: '50% 50%'` . Scale value I started with randomly like 100 and transformOrigin is for it to scale from the center.

```jsx
tlIntro.to("#text-wrapper", { scale: 100, transaformOrigin: "50% 50%" });
```

After adding this I realised I need to add scrollTrigger in order to trigger it on scroll. `scrub: 1` triggers the elements on scroll and `pin:true` will keep `.intro-section` in place till the animation finishes. Below is the code.

```jsx
let tlIntro = gsap.timeline({
	scrollTrigger: {
		trigger: ".intro-section",
		scrub: 1,
		pin: true,
	},
});
```

After running this in browser I realised that scaling works fine but when it scales fully the letter ‘O’ ‘s center part is scaling which is white in color.

The goal is for the black part of the "O" (in "MacBook Air") to fill the entire screen as it zooms. However, this doesn’t happen by default, so I added `transform: translateX(-410%)` to shift ‘O’ in a way that ‘O’’s black part is center and scaling. Also adjusted scaling value to meet the need.

```jsx
let tlIntro = gsap.timeline({
	scrollTrigger: {
		trigger: ".intro-section",
		scrub: 1,
		pin: true,
	},
});

tlIntro.to("#text-wrapper", {
	scale: 130,
	xPercent: -410,
	transaformOrigin: "50% 50%",
});
```

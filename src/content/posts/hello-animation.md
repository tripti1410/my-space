---
path: /blog/3D-text-line-animation-using-greensock-and-svg/
slug: 3D-text-line-animation-using-greensock-and-svg
date: 2023-01-30T11:26:01Z
title: "'hello' animation - Apple's screensaver recreation using GreenSock and SVG"
tags:
  - SVG
  - GSAP
  - tech
---

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="pordWpZ" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/pordWpZ">
  hello animation apple's screen saver</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

In this article, I’m going to show you how to create above 3D text line animation using SVG and GreenSock. I first saw this effect on Apple’s screen saver “Hello” which comes in different languages, so I thought I would create it using GreenSock. When I created it and posted it on Twitter, it got a lot of likes and views and people really liked it. This is one of my favourite.
I have also created [video](https://youtu.be/zQ2luDgJp1k) of creating the same.

![Social media recognition](/assets/recognision-sm-hello-animation.png "Social media recognition collage")

## Let's create this graphic.

I drew this “Hello” text using an iPad and an Apple Pencil. If you don’t have an iPad or an Apple Pencil, you can use a pen tool to create this. The requirement was to make it look like 3D, so I created it following [this](https://illustratorhow.com/make-3d-text/) tutorial. I then exported this graphic using “Export As” and exported it as an SVG.

After exporting from the Illustrator, I pasted the SVG into [SVGMO](https://jakearchibald.github.io/svgomg/) and cleaned the SVG. This is how it looks when you put it in the CodePen HTML panel.

![SVG hello animation](/assets/codpen-html-hello-animation.png "Codepen image showing SVG with all ellipses")

You can see that everything is an Ellipse since I’ve converted it to a 3D looking text. Everything is an Ellipse, many ellipse elements.

## Move on to Animation.

GSAP plugin is included in the CodePen(Settings→ Js).

Created a timeline named `tl`, and gave a `repeat: -1` so that the entire timeline repeats infinitely. I want this text to be hidden initially, so I am setting `autoAlpha: 0` for all the ellipses using `gsap.set`. GSAP uses `autoAlpha` as a shortcut for opacity and visibility property. So `autoAlpha: 0` means `visibility: hidden` and `opacity: 0`, hence nothing is visible in the browser.

Let’s make hello text animation. The animation which we want to create look like a line animation. In SVG all we have is ellipses. It will look like line animation if ellipses appear one after the other. The `stagger: 0.05` will make the ellipse come one after the other by 0.05 seconds. autoAlpha: 1 will make it visible on the screen. Code will look like this:

```jsx
let tl = gsap.timeline({ repeat: -1 });

gsap.set('ellipse', {**autoAlpha: 0**})

tl.to("ellipse", { **autoAlpha: 1, stagger: 0.05**,duration: 1, ease: "power4.out" })
```

Animation looks very slow because of the number of ellipses. We’ll fix that later.

The next thing is to bring the text from behind, scaled down from the center. When the animation finishes, it should be in its original look and position. I’m scaling down the entire SVG using `scale: 0.5`. To scale it down from the center, add `transformOrigin: 50% 50%`. I want this to run in the same time period as the above one `duration: 50`. Position parameter `<` which will start this tween at the same time as previous tween. You can use `0` also in this case, to start this tween at the starting of the above tween.

```jsx
gsap.set("#hello-text", { scale: 0.5, transformOrigin: "50% 50%" });
tl.to("ellipse", {
	autoAlpha: 1,
	duration: 1,
	stagger: 0.05,
	ease: "power4.out",
}).to("#hello-text", { scale: 1, duration: 50 }, "<"); // Use "<" or "0" for this case

//The same can be wriiten using from tween and no gsap.set,like below
tl.to("ellipse", {
	autoAlpha: 1,
	duration: 1,
	stagger: 0.05,
	ease: "power4.out",
}).from(
	"#hello-text",
	{ scale: 0, duration: 50, transformOrigin: "50% 50%" },
	"<"
); // Use "<" or "0" for this case
```

Now the animation looks good, but it is slow. GreenSock comes with a function called `timeScale()`. We can speed the timeline or slowed it down by passing a number or decimal to the function. Here I am speeding it up by 8 times.

```jsx
tl.timeScale(8);
```

Voila! Animation is done, and it looks good.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="pordWpZ" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/pordWpZ">
  hello animation apple's screen saver</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

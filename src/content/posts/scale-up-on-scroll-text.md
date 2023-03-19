---
path: /blog/scale-up-on-scroll-text-using-greensock-and-scrollTrigger/
slug: scale-up-on-scroll-text-using-greensock-and-scrollTrigger
date: 2023-03-19T17:46:24.033Z
title: "Creating a Scale Up Text on Scroll Effect with GreenSock"
tags:
  - how-to
  - GSAP
  - ScrollTrigger
  - tech
---

In this Blog, I'll be walking you through creating a scale up text on scroll effect using GreenSock (GSAP) and ScrollTrigger. This effect can add an engaging animation to your website's text content as users scroll through the page. So, let's get started!

Will create the below effect:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="NWBwgpE" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/NWBwgpE">
  scaled up text on scroll-final</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

If you prefer video content, I created a [video](https://www.youtube.com/watch?v=kl0GSH2mIsQ) of explaining the same.

## Step 1: Setting up HTML and CSS

We'll create a basic HTML structure. Add two paragraphs inside a div with a class `text-container` and wrap everything in a section. Then, give some basic styling to the text container. Besides this, include GreenSock and Scroll Trigger in the JS of your code editor.

## Step 2: Animating Text using GreenSock

Next, we'll animate the text using GreenSock. We want the text to be in its original position at the end of the animation, so we'll create a `from` tween for this. Inside the `from` tween, we'll access both paragraphs using their class names `(.text-1, .text-2)` in an array. We'll set `y: 300`
`(i.e. transform: translateY(300px))` for both paragraphs to push them down from their original position. We'll also add `scale: 0.5` and `transform-origin: center(50% 50%)` to make the text scale up from center. Finally, we'll add `opacity:0` so that initially it's visually hidden and then it will appear as it scales up. We can also add stagger to make it look even better.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="wvxdRqr" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/wvxdRqr">
  text scaleup on scroll scrollTrigger: step 2 text animation</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Voila text animation is done!

## Step 3: Attaching Animation to Scroll Trigger

Now, we'll attach our animation to ScrollTrigger. We'll add the `.text-container` as a trigger element, as it is the parent element for both paragraphs. We'll also add markers to see the trigger points on the screen properly, which will help us debug better.

To see the text coming from below properly, we'll add two sections above and below the text container. This will add spacing around the text container.

As of now, ScrollTrigger set trigger points to the default values, we can see markers in the screen. We'll change the start trigger point to "top top" (which is actually a default value), and we'll push the end trigger point down by 600 `end: "+=600"`. This will allow us to see the text animation as it enters the screen from below longer.

We'll also add `scrub: true` to the configuration so that the animation runs smoothly using document scrollbar. Finally, we'll add `pin: true`. This will allow us to see text animation properly while the text container becomes stationary as soon as scrollbar hits the trigger.

And that's it! Our Scale Up Text on Scroll Effect is complete. Many award-winning websites have used this, and it's an excellent way to add some engaging animation to your text content.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="NWBwgpE" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/NWBwgpE">
  scaled up text on scroll-final</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

If you have questions or would like me to create similar effects, please comment on YouTube or connect through Twitter and DM. Thank you so much!

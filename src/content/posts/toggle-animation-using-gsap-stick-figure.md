---
path: /blog/toggle-animation-using-gsap-stick-figure/
slug: toggle-animation-using-gsap-stick-figure
date: 2023-06-12T11:26:01Z
title: "Toggle animation using gsap: Stick figure"
tags:
  - SVG
  - GSAP
  - tech
---

I posted this on [twitter](https://twitter.com/imtraptir/status/1667935697230077953) and created this for a CodePen challenge. Inspired by [dribble](https://dribbble.com/shots/4369652-Switch) shot.

I am writing this blog as an overview of how I created this pen. This is not a detail blog, just an overview and important bits. Please keep open the code and preview while reading this blog.

**CodePen Demo:**

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="bGQNQyL" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/bGQNQyL">
  theme-toggle: stick-figure</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### SVG creation

I created an SVG of rectangular shape viewBox of 150x200. All the body parts are individual elements, mostly they are basic shapes. I only created the initial state in the illustrator and exported that as SVG from the four states(this is shown in the below image).

![Stick figure](/assets/stick-figure-wb.png "Showing all the 4 state story board for animation of stick figure")

### Stick figure animation

As you can see in the above image, there are 4 states. I used gsap to animate the stick figure for all the states.

> Important: animated SVG elements attribute using e.g. `gsap.to(”.class”,{ attr: {x1: , x2: , y1: ,y2:}})`

**Leg animation:** All the leg parts are simple line elements. So all the elements have these four attributes `x1, x2, y1, y2`. By modifying these attributes, I animated legs. It may seem like complex numbering, but it’s simply math and logic. When the leg is vertical, `x1` = `x2` but `y1`≠ `y2`. Difference of y values will be the length of the line and vice versa. The four values for inclined legs will vary and depend on the line angle.

**Eyes:** I did Blinking eyes using `scaleY` 0 and 1.

Entire stick figure is inside a group element. And using this group element stick figure is movable for toggling inside button.

**Face:** I moved face up and down using `cy` attribute.

**Highlights:** There are 4 lines which are `path` elements. I did animating path elements using drawSVG.

Rest of the things are easy to understand. I attached all the animations to one `gsap` timeline named `wakeup_tl`, and it is in the paused state.

### Putting it in the action with the toggle button

There were a few things I did on toggle on and off.

**Toggle** **On:** Play the `wakeup_tl` and `highlight_tl` timeline. Once the animation completes, it will call a handler that activates all the actions for light mode.

**Toggle** **Off:** Reverse the `wakeup_tl` timeline. Each click should show the little highlight, so restart `highlight_tl`. Once the animation completes, it will call a handler that activates all the actions for dark mode.

If you have any queries please email me of DM at twitter. Or if you like this demo and blog please consider sharing on twitter.

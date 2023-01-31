---
path: /blog/slide-up-text-effect-with-and-without-GSAP-SplitText-plugin/
slug: slide-up-text-effect-with-and-without-GSAP-SplitText-plugin
date: 2023-01-31T11:26:01Z
title: "Slide-Up Text Effect with and without GSAP SplitText plugin"
tags:
  - SplitText
  - GSAP
  - tech
---

This blog shows how to make a sleek slide-up text effect using GSAP. First, I’ll cover creating the effect for a single line, then move on to multiple lines and how the SplitText plugin simplifies the process.

If you prefer video content, I created a [video](https://youtu.be/trXQ8oFhE-s) of explaining the same.

## **Single line text animation**

For single line text, I have an H1 tag with an ID of “intro”. I also have a parent element with a class of “intro-parent”. This parent element is required for the animation and later I will show you why.

```
<div class=”intro-parent">
<h1 id="intro">
    Hi, I’m Trapti. I love SVG, animations and Web
  </h1>
</div>
```

In JS, I added a transform to the intro text, moving it up by 100 (using yPercent). I also added a duration and ease to the animation. To avoid the flash of unstyled content (FOUC), the `visibility` and `opacity` of the text set to hidden initially in CSS and then set to `1` when the JavaScript loads.

```
gsap.set(“#intro”, { autoAlpha: 1 });//to avoid FOUC
//Single line
 gsap.from(“#intro”, {
      duration: 1,
      yPercent: 100,
      ease: “power4.out”,
 });

```

As it stands, this text animation on its own doesn’t look attractive. To make it visually appealing, I’ll hide text initially and reveal it from the bottom. To achieve this, the importance of the parent element comes. I’ll add **`overflow: hidden`** to the parent to hide anything outside of it. I already set **`yPercent: 100`** to push the text down by its full height.

```
.intro-parent {
  overflow: hidden
}
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="VwBBNpw" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/VwBBNpw">
  Single line Slide up text animation using GSAP</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## **Multiple line slide up text effect**

For multiple lines of text, I have divided the text into two separate lines by adding two divs inside the H1 element. Both divs have a parent and a line class.

```
<h1 id="intro">
    <div class="parent">
      <div class="line">Hi, I’m Trapti.</div>
    </div>
    <div class="parent">
      <div class="line">I love SVG, animations and Web</div>
    </div>
  </h1>

```

In the CSS, the parent class has an overflow property set to hidden.

```
.parent {
  overflow: hidden;
	border: 1px solid;
}

```

In the JS, all the elements with class `line` are selected using the GSAP utility function `toArray`. `stagger: 0.1` will help slide up the lines one after the other.

```
const lines = gsap.utils.toArray(“#intro .line”)
gsap.from(lines, {
      duration: 1,
      yPercent: 100,
      ease: “power4.out”,
      stagger: 0.1
});

```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="YzjjMJq" data-user="tripti1410"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/YzjjMJq">
      Single line Slide up text animation using GSAP</a> by trapti (<a
      href="https://codepen.io/tripti1410">@tripti1410</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

By doing this, our effect is done.

Modern websites often employ this eye-catching effect, but manually writing HTML, CSS, and making it responsive for multiple paragraphs across the website can be challenging.

The solution is to use GSAP and the SplitText plugin. This plugins make it easy to create a slide-up text effect for single or multiple lines of text. You can apply this effect to your entire website, saving time and effort when creating animations for large amounts of text.

## **Multiple line slide up text effect using GSAP SplitText plugin**

Include SplitText plugin and register it. It is a paid plugin of GreenSock.

In HTML, add a bunch of texts in any element. I am adding in H1 element.

```
<h1 id="intro">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
  </h1>

```

SplitText plugin allows us to divide the text into characters, words, and lines. In this effect, as lines are being animated, will divide texts into lines.

Create a new SplitText object for the text. Give it a type line. We can also give each line a class by adding linesClass.

```
const intro = new SplitText(“#intro”, {
  type: “lines”,
  linesClass: “intro-line”
});

```

As we have seen above example, we need a parent for these lines. To add a parent to each line, we can create another SplitText object with a different class for the parent.

```
const introLineParent = new SplitText(“#intro”, {
  linesClass: “intro-line-parent”
});

```

Set `overfow:hidden` to the parent, i.e. `.intro-line-parent`

Same animation I will apply to the lines. I can target lines using class names, in this case `intro-line` or grab the intro object and access line by the key `line`.

```jsx
gsap.from(intro.lines, {
  duration: 1,
  yPercent: 100,
  ease: “power4.out”,
  stagger: 0.1
});

```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="oNMMOVj" data-user="tripti1410"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/oNMMOVj">
      Multiple line Slide up text animation using GSAP</a> by trapti (<a
      href="https://codepen.io/tripti1410">@tripti1410</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Voila! It is super easy with SplitText plugin as we also do not have to worry about the responsiveness of the text.

## Let’s add accessibility to it by enabling reduce motion

Consideration for the user is crucial when creating websites. Users with reduce motion preferences should experience minimal or no movement on the site. Animations should not exceed 5 seconds according to accessibility guidelines. Excessive movement of elements on the screen can cause headache to the user. GSAP’s matchMedia configuration makes it easier to accommodate user preferences.

```jsx
let mm = gsap.matchMedia();
mm.add(
  {
    reducedMotion: “(prefers-reduced-motion: no-preference)”
  },
  () => {
		// Include above animation here.
  }
);

```

We can test this by enabling/disabling the reduce motion toggle in our device inside setting→accessibility→Display→ Reduce motion.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="xxWBbOw" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/xxWBbOw">
  text-effect with and without split text plugin</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

---
path: /blog/why-transforms-dont-work-as-expected-inside-SVG-(and-how-to-fix-it)/
slug: why-transforms-dont-work-as-expected-inside-SVG-(and-how-to-fix-it)
date: 2025-04-27T17:46:24.033Z
title: "SVG TIP: Why Transforms Don’t Work as Expected inside SVG (And How to Fix It)"
tags:
  - SVG
  - tech
  - CSS
---

I made a [video](https://www.youtube.com/watch?v=ElYG_J0fTLo) explaining this issue—check it out!

When animating SVGs, you might notice that rotations and other transforms don’t behave as you’d expect. For example:

You apply a rotation, but instead of spinning in place, the element moves around unpredictably.

![Demo.gif](</assets/why-transforms-don’t-work-as-expected-inside-SVG-(and-how-to-fix-it)/demo.gif>)

## Demo: Rotating a Square Around Its Center

Here’s an example:

- A outermost square (thin black outline) is SVG outline.
- A square (thick black outline) with a blue circle at its center.
- We want the square to rotate around the blue circle.
- The red circle marks the SVG’s center (not the square’s center).

  ![initial-setuo.png](</assets/why-transforms-don’t-work-as-expected-inside-SVG-(and-how-to-fix-it)/initial-setup.png>)

### First Try: Basic Rotation

```css
#box {
	animation: rotateBox 3s linear infinite;
}
@keyframes rotateBox {
	to {
		transform: rotate(360deg);
	}
}
```

**Problem:** The square rotates around the **top-left corner** (default transform-origin) of the SVG.

### Second try: Set the transform-origin to 50% 50%.

```css
#box {
	animation: rotateBox 3s linear infinite;
	transform-origin: 50% 50%;
}
```

**Still a problem:** Now it rotates around the **SVG’s center (red circle)**, not the square’s center.

### The Fix: transform-box: fill-box

```css
#box {
	animation: rotateBox 3s linear infinite;
	transform-origin: 50% 50%;
	transform-box: fill-box; /* Makes transforms use the element's own origin */
}
```

✅ **Now it works!** The square rotates around its **own center (blue circle).**

### Why This Happens

By default, SVG transforms use the SVG’s coordinate system, not the element’s. The issue is resolved by using `transform-box: fill-box`, which makes transformations relative to the element.

🔗 Live Demo: CodePen Example

<p class="codepen" data-height="300" data-slug-hash="jORxMqy" data-pen-title="Demo Transaform box" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/jORxMqy">
  Demo Transaform box</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Important points

1. Default transform-origin in SVGs can be tricky.
2. Use `transform-box: fill-box` to make transforms behave as expected inside the SVG.

This small CSS tweak saves a lot of frustration!

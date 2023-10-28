---
path: /blog/moving-background-on-scroll-using-css-gradient-and-variable/
slug: moving-background-on-scroll-using-css-gradient-and-variable
date: 2023-10-27T22:50:24.033Z
title: "Moving background on scroll using CSS gradient and variable"
tags:
  - CSS
  - tech
---

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="vYvPXrE" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/vYvPXrE">
  moving bg using css gradient </a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<aside>
💡 <strong>Highlight of the blog post:</strong> Animating the start and end value of start color of linear gradient CSS.
</aside>

In this blog post, we'll introduce a technique that doesn't require any additional HTML elements to create a captivating effect. We'll be crafting a linear gradient that smoothly moves upwards or downwards while changing colors as you scroll. Let's dive into the code!

### **HTML Markup**

First, let's set up the HTML structure for our content:

```html
<div class="cont">
	<h1>HI</h1>
</div>
```

### **CSS Magic**

Now, let's apply the CSS styles to create the scroll-activated gradient effect:

```css
.cont {
	max-width: 100vw;
	height: 100vh;
	background: linear-gradient(yellow 100%, white 0%);
	/* Just to make it look pretty */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 5rem;
}
```

Let's break down the key components of the CSS:

1. **Full viewport dimensions:** We set the width and height of the container to 100% of the viewport's width and height.
2. **Background Gradient:** We create the linear gradient effect using the **`background`** property. It starts with a yellow color and gradually transitions to white color. **`background: linear-gradient(yellow 100%, white 0%)`**. As it is, this will display a solid yellow color.

### **Exploring the Gradient**

Now, let's delve deeper into the gradient effect.
In a linear gradient:

- The first value is the direction.
- The second is the start color with a value that determines how much this color should cover.
- The third is the end color with a value that indicates how much this color should cover.

```css
.cont {
	background: linear-gradient(to top, yellow 100%, white 0%);
}
```

The **`yellow`** color covers 100%, meaning the entire container is initially yellow. To achieve the effect of moving this yellow color from top to bottom and revealing the white color, we need to animate its coverage percentage. We can easily do this by using a CSS variable. Let's convert the code above to accept a CSS variable.

```css
.cont {
	--target: 100%;
	background: linear-gradient(yellow var(--target), white 0%);
}
```

Now, the yellow color coverage is accessible via a CSS variable. We can animate this percentage. Additionally, we specify the direction in which it should move; in this case, we use **`to top`**.

```css
.cont {
	--target: 100%;
	background: linear-gradient(to top, yellow var(--target), white 0%);
}
```

To animate it, you can use the following JavaScript code. In this we are making CSS varible to 0% from 100%.

```jsx
gsap.to(".cont", {
	"--target-1": "0%",
	ease: "none",
});
```

To make it work with scrolling, we can use ScrollTrigger, like this:

```jsx
gsap.to(".cont", {
	"--target-1": "0%",
	ease: "none",
	scrollTrigger: {
		trigger: ".cont",
		markers: true,
		start: "top top",
		end: "+=1000",
		pin: true,
		scrub: 1,
	},
});
```

See the working example in the CodePen below.

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="vYvPXrE" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/vYvPXrE">
  moving bg using css gradient </a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Now, what if the text color also changes as the user scrolls through it?

We need to add the background gradient to the text as well but altering colors. So that when background color becomes white text becomes yellow and vise versa. `background` property will give a background color to the text. Since we need to fill the color inside the text, we'll use the following properties along with it: Code sample above showcases this as well.

```css
h1 {
	background: linear-gradient(to top, white var(--target-1), yellow 0%);
	line-height: 0.95;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
```

And there you have it! Many effects can be created using this technique, and it can be fine-tuned further.

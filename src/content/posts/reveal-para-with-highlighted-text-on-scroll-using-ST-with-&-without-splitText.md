---
path: /blog/reveal-paragraph-with-highlighted-text-on-scroll-using-scrollTrigger-with-&-without-splitText-plugin/
slug: reveal-paragraph-with-highlighted-text-on-scroll-using-scrollTrigger-with-&-without-splitText-plugin
date: 2023-09-18T09:00:00.0Z
title: "Reveal paragraph with highlighted text on scroll, using scroll trigger - with and without splitText plugin"
tags:
  - SplitText
  - GSAP
  - ScrollTrigger
  - tech
---

In this tutorial, we will create an animation that reveals a paragraph with highlighted text on scroll, utilising the Scroll Trigger plugin, with and without the splitText plugin.

First, let's take a look at the animation we'll be creating:

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="MWZoamx" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/MWZoamx">
  Text enablinging and highlight on scrolltrigger: splittext plugin</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### **Setup**

To begin, create a paragraph inside a wrapper. We won't cover the basic styling here, but it's essential to make the design look appealing. If styling is required for the animation, it will be mentioned later.

```html
<div class="wrapper">
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
		debitis, delectus assumenda temporibus exercitationem qui aperiam
		consectetur nobis ullam molestias asperiores in vel. Asperiores numquam quam
		id. Et, cumque dolore.
	</p>
</div>
```

Since we need to animate each word individually, we'll wrap each word in an HTML element. This allows us to target each word separately.

This can be achieved in two ways:

1. Manually writing HTML where each word is wrapped in an HTML and styled in such a way that it look and behave seamless like a paragraph text.
2. Using the splitText plugin. Here in HTML will just add a paragraph to `p` tag. InJS will write splitText plugin’s code. And this will create a wrapper for each word inside `p` tag.

## We'll start by using the splitText plugin.

After adding the splitText plugin CDN to your project, you can use it as follows:

```jsx
let paraTexts = new SplitText("p", { type: "words", wordsClass: "para-word" });
```

This code wraps each word in the paragraph and applies a class to each word shown in the below image. And we can access words by accessing `paraTexts.words`.

![Image showcasing HTML in devtool view before and after version of splitText plugin](/assets/before-and-after-splitText-plugin.png "Image showcasing HTML in devtool view before and after version of splitText plugin")

### **Implementing ScrollTrigger**

Now, let's reveal these words on scroll using ScrollTrigger. Add the ScrollTrigger CDN to your CodePen project and set up a basic configuration:

```jsx
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".wrapper",
		pin: true,
		scrub: true,
		markers: true,
	},
});
```

Here's a breakdown of the configuration:

- **`trigger`**: The trigger element is the wrapper.
- **`pin`**: This pins the section while the text animation occurs.
- **`scrub`**: Animation runs as you scroll.
- **`markers`**: Adds markers to visualize triggers.

Next, add the animation to fade in the text word by word:

```jsx
tl.from(paraTexts.words, { opacity: 0.5, stagger: 0.1 });
```

This code animates each word with opacity 0.5 to 1. 0.5 will fade in and 1 will fade out. Stagger 0.1 will help word animate one by one after 0.1 seconds.

Here is live version for the above:

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="oNJGLMg" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/oNJGLMg">
  text reveal word by word using scrollTrigger &amp; splitText plugin</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### **Adding Highlights**

Now, let's add highlights to 2 words in the paragraph. Highlights are background colors that animate from left to right, covering the entire word from behind. To achieve this I am going to add class `highlight-1` and `highlight-2` at the index 5 and 13 to target 6t and 14th word in the paragraph.

Here's how to add a highlight class to specific words using plain Javascript:

```jsx
paraTexts.words[5].classList.add("highlight-1");
paraTexts.words[13].classList.add("highlight-2");
```

In your CSS, create different class names (.highlight-1 and .highlight-2) for each highlight or target them separately to avoid running both highlights simultaneously. Use the following styles to create the green background for the highlighted words:

```jsx
.highlight-2,
.highlight-1 {
	position: relative;
}
.highlight-2::after,
.highlight-1::after {
  content: "";
  width: 100%;
  background-color: green;
  position: absolute;
  top: 6px;
  left: 0px;
  height: 35px;
  z-index: -1;
}
```

To animate the highlights, use **`scaleX`** to go from 0 to 100 with **`transformOrigin: 0% 0%`**. we will target pseudo-elements using GSAP's CSSRulePlugin.

Now we have highlights to animate, and the highlighted word and other words around that. It should look seamless, as if the paragraph is revealing from top to bottom. Wherever the highlighted word is, it should also get highlighted with the text reveal. For this, we need to divide all the words in the paragraph into three parts:

1. Words before the first highlight(calling it paraPart1)
2. Words after the first highlight and before the second highlight ( calling it paraPart2)
3. Words after the second highlight (calling it paraPart3)

This division will help us achieve the desired effect, as shown below in the image.

![Paragraph segments for various tweens with highlights](/assets/showing-para-segments.jpg "Image swing aparagraph with highlighted text and clear segments of para for the animation")

Finally, arrange all the tweens(paraPart1, highlight-1 paraPart2, highlight-2, paraPart-3) in a timeline:

```jsx
tl.from(spanPart1, { opacity: 0.5, stagger: 0.1 })
	.from(".highlight-1", { opacity: 0.5, duration: 0.1 })
	.from(
		CSSRulePlugin.getRule(".highlight-1:after"),
		{ cssRule: { scaleX: 0, transformOrigin: "0% 0%" }, duration: 0.2 },
		"<"
	)
	.from(spanPart2, { opacity: 0.5, stagger: 0.1 })
	.from(".highlight-2", { opacity: 0.5, duration: 0.1 })
	.from(
		CSSRulePlugin.getRule(".highlight-2:after"),
		{ cssRule: { scaleX: 0, transformOrigin: "0% 0%" }, duration: 0.2 },
		"<"
	)
	.from(spanPart3, { opacity: 0.5, stagger: 0.1 });
```

You've now completed the animation. Here's the final result:

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="MWZoamx" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/MWZoamx">
  Text enablinging and highlight on scrolltrigger: splittext plugin</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## **Without Using splitText**

For this approach, we'll manually write all the HTML instead of generating it with the splitText plugin. To select all the words in an array, you can use **`querySelectorAll()`** or GSAP’s utility function **`.toArray`**. The rest of the process remains the same.

Here's the CodePen link for this version:

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="LYMLVZM" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/LYMLVZM">
  Text enablinging and highlight on scrolltrigger </a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### **The Difference**

The key difference between the two approaches lies in how the HTML elements are generated and targeted. The splitText plugin automates the process, making it more efficient and convenient. However, when manually creating elements, you have more control over customisation but may require additional effort. Choose the method that best suits your project's needs.

I personally prefer the splitText plugin approach for several reasons:

1. **Simplicity and Efficiency:** With splitText, we eliminate the need to manually create and style HTML elements for each word, making the setup cleaner and more efficient. This is especially beneficial when dealing with different devices and screen sizes.
2. **Easy Revert:** If we ever need to revert the animation or make changes to it, the splitText approach allows for quick modifications without the hassle of rearranging HTML elements.
3. **Flexibility for Future Enhancements:** SplitText provides flexibility for future enhancements. For instance, if we decide to change the animation to reveal characters or lines instead of words, the transition is straightforward with the plugin.
4. **Responsiveness:** SplitText handles text responsiveness seamlessly. It adapts well to varying text lengths and screen sizes, ensuring a consistent and polished look.
5. **Ease of Management:** When implementing similar text effects across multiple sections or pages on a website, managing them becomes much easier with the splitText approach. It centralizes the animation logic and simplifies updates or maintenance tasks.

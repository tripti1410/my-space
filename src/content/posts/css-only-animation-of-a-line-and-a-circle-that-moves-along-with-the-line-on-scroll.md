---
path: /blog/css-only-animation-of-a-line-and-a-circle-that-moves-along-with-the-line-on-scroll/
slug: css-only-animation-of-a-line-and-a-circle-that-moves-along-with-the-line-on-scroll
date: 2024-04-20T17:46:24.033Z
title: "CSS only: Animation of a line and a circle that moves along with the line on scroll"
videolink: https://youtu.be/GT0P15xAQpc
tags:
  - how-to
  - CSS
  - SVG
  - tech
---

Are you excited as I am to create animations like [Lemonade](https://www.lemonade.com/giveback-2019) using CSS? CSS can do this. Adding scroll and on view animation with CSS is currently only possible in Chrome, but it will soon be available in all browsers.

Here I have created a simple CodePen to explain this.

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="NWoELEP" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/NWoELEP">
  simple  line -animation : CSS scroll</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

If you prefer watching video, here is the [link](https://youtu.be/GT0P15xAQpc) for the same.

### Outline of the blog

1. Setup
2. Important Note
3. Line animation
4. Line animation controlled by scroll
5. Circle moving along the line
6. Circle moving controlled by scroll
7. Other related codepens

## Setup

There are totally three elements. Grey line which is always visible on the screen has a class name `line-base`. A black line is moving on top of the grey line and has class name `line-running`. The circle will move ahead of the black line as a pointer has a class name `line-circle`.

## Important note

To learn how this is possible with SVG, read this [blog](https://css-tricks.com/svg-line-animation-works/) post.

In brief, it is possible for us to animate an SVG this way is because SVG provides us with two attributes: `stoke-dasharray` and `stoke-dashoffset`. These are the attributes responsible for creating dash in the SVG line. `stoke-dasharray` for visible dashes and `stoke-dashoffset` for invisible gaps between dashes. We manipulate these attribute values to create an illusion that the line is moving.

<aside>
⭐ You can only achieve line animation if you create SVG paths (or any element) with only a stroke and no fill, because of the specific attributes we use for strokes.

</aside>

Let’s understand this with example. Say the total length of the line is 100. Then will create a dash using `stoke-dasharray` of the same length, i.e. 100. Then will also create a gap using `stoke-dashoffset` of the same length, i.e. 100. The line won’t show on the screen as it’s covered by `stoke-dashoffset`. For `stoke-dashoffset` will create animation to move it from the total length of the line to the 0 or any desired value. In this, I am using 0.

<aside>
⭐ Manually calculating length of the line is tedious. Calculate the length of the line using the `pathLength` attribute of SVG.

</aside>

Include this attribute `pathLength="1"` in the animated element. Here it is `line-running`. In the CSS, you can use `1` for the full length and `0` for the start in `stoke-dasharray` and `stoke-dashoffset`. You can also use decimals like 0.5 for the half length.

```html
@keyframes line-animation { from { stroke-dashoffset: 1; } to {
stroke-dashoffset: 0; } }
```

Attach this keyframe in the animation with 5 seconds duration and linear ease, as shown below.

```html
.line-running { stroke-dasharray: 1; stroke-dashoffset: 1; animation:
line-animation 5s linear forwards; }
```

## Line animation controlled by scroll

Attach the above animation to the scroll just by including this line.

```html
.line-running { // ...Previous properties animation-timeline: scroll(); }
```

Now the scroll controls line animation. However, there is an issue with the line not moving at scroll speed. So it does not seem like the line is running parallel to the scroll throughout its length. This is happening because the SVG’s length is smaller than the entire page’s length. To fix this will give animation start and end range. Start the animation when scroll reaches a specific position and end at another position.

```html
.line-running { // ...Previous properties animation-range-start: 2%;
animation-range-end: 50%; }
```

To debug the scroll animation and also figure out these range values, you can use Scroll driven animation browser extension. [https://chromewebstore.google.com/detail/scroll-driven-animations/ojihehfngalmpghicjgbfdmloiifhoce](https://chromewebstore.google.com/detail/scroll-driven-animations/ojihehfngalmpghicjgbfdmloiifhoce) This also includes an intro video of how to use it.

## Circle moving along the line

Using `offset-path` we can define the path on which the circle should move. `offset-path` takes `url` and the line `coordinates`.

We will animate offset distance, which is `0` initially to `100%`. This way circle will start moving along the line.

```html
.line-circle { transform-box: fill-box; offset-anchor: 50% 50%; offset-path:
path('...copy d attribyte value from the element and use it here'); offset-path:
url('#line-base'); animation: move 5s forwards linear; animation-timeline:
scroll(); animation-range-start: 2%; animation-range-end: 50%; } @keyframes move
{ to { offset-distance: 100%; } }
```

The position of the circle changed after including `offset-path` because the circle is by default taking the SVG’s origin. We need to change it to use its own by using `transform-box: fill-box`. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box).

<aside>
⭐  If you are trying to rotate an element/shape inside another SVG. The shape will consider the outer SVG viewbox center as the center of transformation. Here we want it to take its own viewbox center. So we should add `transform-box: fill-box`

</aside>

The element’s start is now the default anchor. To center align the circle with the line will use `offset-anchor: 50% 50%`.

To control moving circle on scroll, add the same properties as line animation and it will work just fine.

<aside>
⭐ `offset-anchor: 50% 50%` it aligns the length center with the line it is moving along.

</aside>

TADA!

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="NWoELEP" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/NWoELEP">
  simple  line -animation : CSS scroll</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I also posted this on [x](https://twitter.com/imtraptir/status/1733213398131683821) here is how many people appreciated it.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⭐ It blew my mind when I created using only CSS - SVG line animation &amp; moving element along the SVG path on scroll<br>💡creating this is very easy, just a few lines of code <br>Here are a few demos of different SVG line animation &amp; moving element along the SVG path on scroll<br>(1/6) <a href="https://t.co/d7Q6x2WUjN">pic.twitter.com/d7Q6x2WUjN</a></p>&mdash; Trapti Rahangdale (@imtraptir) <a href="https://twitter.com/imtraptir/status/1733213398131683821?ref_src=twsrc%5Etfw">December 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Other related CodePens

CodePen showcasing similar as lemonade moving with CSS

<p class="codepen" data-height="300" data-default-tab="js" data-slug-hash="vYbQzoP" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/vYbQzoP">
  Complex continuous line animation on scroll using only CSS: lemonade</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

CodePen showcasing line animation similar as lemonade moving with GreenSock

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="GRyBxeZ" data-user="tripti1410" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/GRyBxeZ">
  line animation on scroll recreation of lemonade:GSAP</a> by trapti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

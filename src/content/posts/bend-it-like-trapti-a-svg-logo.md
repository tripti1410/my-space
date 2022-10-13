---
path: /blog/bend-it-like-trapti-a-svg-logo/
slug: bend-it-like-trapti-a-svg-logo
date: 2019-11-03T17:46:24.033Z
title: "Bend It Like Trapti - a SVG\_logo"
tags:
  - SVG
---

Creating a wave shape logo using the SVG **textOnAPath**.

![svg-logo](/assets/screenshot-2019-11-03-at-14.41.56.png "Final svg logo")

I was developing my portfolio website and I wanted a logo. Being a non designer it was difficult to come up with something in shorter period of time without doing much of research, thoughts and iterations. I wanted a simple logo with my name on it. SVG element **textOnAPath** is a good way to make the logo standout.

I am more comfortable handcrafting simple SVG. You may also use tools like Illustrator, figma etc. to create SVG.

Following SVG elements were used to create this logo.

**text:** This element defines a graphics element consisting of text. Attribute x and y is used to position the text. And most presentation attributes like font-size, font-weight etc. can be used.

**textPath:** This element is used to layout text along a path, for instance in a curve path, zigzag path etc.

**tspan:** This element is used to add text or subtext inside the text element. It allows to style or position the text if required.

**path:** This element is used to draw the line, arc, curves etc. It is very powerful element in SVG because any graphic can be created with this.

> While doing this, I learned all about text in SVG and created a cheatsheet of this for the future reference.
>
> [**SVG text cheatsheet**](https://codepen.io/tripti1410/pen/WBmMOB)
>
> ---

First we will create the wave pattern for the logo, which can be created using any tool like Illustrator, figma or [**SVG path builder Codepen**](https://codepen.io/anthonydugois/pen/mewdyZ). Or if you are comfortable writing path coordinates in SVG, handcraft it like I did.

```
<svg xmlns="http://www.w3.org/2000/svg" width="500px" height="100px" viewBox="0 0 300 100"><title>Trapti Rahangdale</title><path id="curve-path" d="M 0 60 C 140 90 190 0 290 50 " stroke-  width="3" stroke="#f5b326" fill="none"></path></svg>
```

Add text element to show the name in SVG.

```
<svg xmlns="http://www.w3.org/2000/svg" width="500px" height="100px" viewBox="0 0 300 100"> <title>Trapti Rahangdale</title>  <path id="curve-path" d="M 0 60 C 140 90 190 0 290 50 " stroke-  width="3" stroke="#f5b326" fill="none"></path><text>Trapti Rahangdale</text></svg>
```

Now we are ready to bend it like Trapti :) To do that add a textPath element. Linking between path and text is done by **xlink:href** attribute with **path id** as a value.

```
<svg xmlns="http://www.w3.org/2000/svg" width="500px" height="100px" viewBox="0 0 300 100"><title>Trapti Rahangdale</title><path id="curve-path" d="M 0 60 C 140 90 190 0 290 50 " stroke-  width="3" stroke="#f5b326" fill="none"></path><text><textPath xlink:href="#curve-path">Trapti Rahangdale</textPath></text></svg>
```

![svg-logo](/assets/screenshot-2019-11-02-at-18.05.53.png "Result of the above steps")

Now I wanted **Text below the path and only Capital letters to go above the path** -  I used tspan element with the dx and dy attributes. dy for moving the text in Y direction and dx to move it in X direction. Also increase the font-size, bigger font-size for capital letters and small for others. And I got the desired result below is the code.

![svg-logo](/assets/screenshot-2019-11-03-at-14.11.11.png "Desired SVG logo - text below the path only capital letters above the path")

```
<text font-size="30px" x="0" y="0" letter-spacing="1px"><textPath xlink:href="#curve-path"><tspan font-size="70px" dy="25">T </tspan><tspan dx="-28">rapti</tspan><tspan font-size="70px" dx="10" dy="2"> R </tspan><tspan dx="-17">ahangdale</tspan></textPath></text>
```

## Accessibility

When tested in **voice over** text was not pronounced properly. It was sounding like this:

[Soundcloud link](https://soundcloud.com/trapti-rahangdale/svg-logo-voice-over)

Basically the problem was on writing letters separately on a tspan, I did this because I wanted it to style differently. Voice over was pronouncing "T" separately and "rapti" separately instead of "Trapti".

Then I made changes in my design and changed all letters to lowercase and showing them above the path. But to give a little more twist I added one more path with different color. Making it all lowercase was my choice, one can make it capitalize or uppercase using CSS or by just writing it that way.

In the code, I changed the SVG document and wrote entire text inside textPath element, and adjusted the position and font-size, to get the desired result.

> **Tip1: -** Avoid using tspan to segregate letters for styling purposes.

> **Tip2: -** Textpath element works fine in HTML, but while writing in JSX use textPath otherwise it will not work.

## Final result

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="tripti1410" data-slug-hash="57958a6c7d5c87fd062a8f165b0b5774" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Bend It Like Trapti - a SVG logo ">

<span>See the Pen <a href="https://codepen.io/tripti1410/pen/57958a6c7d5c87fd062a8f165b0b5774">
Bend It Like Trapti - a SVG logo </a> by tripti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Summary

Text based graphic can be created very easily by hand or using any tool(Illustrator, Figma etc.). What you get is Accessible, searchable, selectable text. Check for accessibility always Make sure it woks for everyone.

**References**

1. [Official docs](https://www.w3.org/TR/SVG11/text.html#TextOnAPath) on text along the path
2. SVG Text [cheatsheet](https://codepen.io/tripti1410/pen/WBmMOB)

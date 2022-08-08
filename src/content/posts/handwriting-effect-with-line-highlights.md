---
path: /blog/handwriting-effect-with-line-highlights
slug: handwriting-effect-with-line-highlights
date: 2022-06-22T12:48:18Z
title: "Handwriting effect with line highlights"
tags:
  - SVG, GSAP, drawSVG, how-to
---

# Handwriting effect with line highlights

https://codepen.io/tripti1410/pen/LYQKpRN/360a03d9c8ab725b95dd0edefa5ffc16?editors=0110

This is a brief how-to on this fun animation I created. It looks like there is so much happening, however it is very simple and easy. GSAP’s timeline makes it super simple to chain all the parts and `drawSVG` plugin to actually draw the path. I used Illustrator to create the SVG. 

## Preparation of SVG

1. Choose any handwriting font and write the text (in our example, "Tripti") in it. Convert it into strokes, make sure every word is made up only with strokes and fill none. If the font has uneven width or some texture then draw over it with a pen tool and use the same.
2. The letters in words should be in a way as if one is writing. The main text is ready.
3. Copy the main text and paste it just below the main text and reduce the stroke width. This is the first highlight. Create the same highlight for the letter “T” and paste it just above the main text.
4. Give a name to each letter and its parts. 
5. Export the SVG and clean it in [SVGOMG](https://jakearchibald.github.io/svgomg/). 

## Animation using GSAP and GSAP drawSVG plugin

1. Paste SVG in codepen and include GSAP and `drawSVG` plugin. 
2. Hide SVG using CSS property opacity and visibility. In JS using the GSAP set enables it. This will remove the initial FOUC.
3. If you want to know more about how SVG strokes work for this animation, read [this](https://css-tricks.com/svg-line-animation-works/) 
4. Select all the paths with their `id`s and assign them 0 values so that they are at the start point of that path. 
5. First will reveal the main text one by one as if are writing. gsap.to(“id”, {drawSVG: “100% 100%) followed by the below highlight stating this just after the main text starts. Here https://codepen.io/GreenSock/pen/bNdLyR  is the demonstration of this work. 
6. The highlight which is above and below will create nice highlights as if it’s drawing till the end and vanishing from the start. And by playing a little with timings this kind of effect will be created.  


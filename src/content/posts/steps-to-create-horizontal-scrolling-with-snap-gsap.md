---
path: /blog/steps-to-create-horizontal-scrolling-with-snap-gsap/
slug: steps-to-create-horizontal-scrolling-with-snap-gsap
date: 2022-05-16T09:00:00.0Z
title: "Horizontal snapping sections using GSAP"
tags:
  - how-to
  - GSAP
  - ScrollTrigger
---

As part of the answering question in the forum, I am writing this blog to help me and other people.

Horizontal snapping sections (simple) using GSAP. This pen is created by Greensock. Below are the written steps on how to go about creating this with the explanation of what each property does.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YzygYvM" data-user="GreenSock" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/GreenSock/pen/YzygYvM">
  Horizontal snapping sections (simple) - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

1. Create a container in which there are 6 sections(called panel).
2. The width of the container is 600%, 100% for each section. Also display property is set to flex, which by default arrange its children row wise (horizontally). Then there is `flex-wrap: nowrap` which will make sure sections will not come down in the next row.
3. In body, overscroll-behavior: none; which will not allow scrolling. Basically overriding scrolling behaviour.
4. In body Height is 100vh to make it full viewport vertically. And container is 100% so as to stretch to full viewport height.
5. By doing the above there will be first section on the page full width and height without any scroll. All the other sections are on right side of this but not visible.
6. To make it horizontally scrollable will use GSAP and scrollTrigger.
7. Select all the sections and store in an array using gsap.utils.toArray(".panel")
8. For each section add xPercent in negative, this will take section in left direction. So 100 \* section number will make first section go 100% second section 200% and so on.
9. Scrolltrigger is set to trigger container and pin true. And there is no start value define so scrollTrigger will grab the default value which is `start: "top top"` in this case. Which means it will start when top of the container meets the top of the scroller. Scrub is set to 1, which is to link scrollTrigger to scrollbar and take 1sec for it to respond.
10. End value is vertical scrolling based on how wide the container is so it feels more natural. One can change the end value to manipulate the speed of scrolling.
11. Snap is to make scrolling momentum based means as user stops it should not stop simply but stop after certain momentum is applied. The description written in first section is very clear which is: "It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops".

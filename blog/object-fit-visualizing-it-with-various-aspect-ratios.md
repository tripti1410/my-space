---
path: /blog/object-fit-visualizing-it-with-various-aspect-ratios
date: 2019-06-07T09:46:12.291Z
title: "Object-fit visualizing it with various aspect ratio"
---
There are times where we have to show image or video inside a container(which has width and height). And requirements can be any of these types -

1. Show full image in the container maintaining aspect ratio.
2. Show full image in the container, if aspect ratio is maintained well and good but not necessary. 
3. Just fill the container with image do not care for aspect ratio.
4. Don't do anything just show as it is. If it is cropping that's also fine. we might control which are to be cropped off.

We can solve this problem using object-fit. Object-fit is a property which defines how the element looks inside the container in which it is set.

These are few options, which will help us to fulfil these requirements.

object-fit: fill | contain | cover | none | scale-down

I will explain these options in detail below. 

It is painful to visualize how an image with certain size will look inside a container of certain size or what object-fit option to choose to fulfil requirements. To make this easy I created a small tool which will help visualize these object-fit options in various scenarios.
<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="tripti1410" data-slug-hash="jovYPE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="object-fit">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/jovYPE/">
  object-fit</a> by tripti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
This tool allow us to visualise object-fit property in different scenarios. I created this because I often come across dealing with raster images (images in .png, .jpg etc. format). These images can not be scaled unlike SVG's. Same concept is valid for videos and other embeddable media formats.
There are few use cases I am listing down according to my experience, but there can be many - 
Slider 
Thumbnail
Avatar
Showing embedded media. etc.

Before going in detail to learn object-fit options let's look at how I have done demo setup because I will be using this to explain object-fit options.

Demo setup details:

Container width is set default to 500px above screen devices 500px, below it is 100% of the width the device(for responsive design). Height of the container will be calculated based on the width of the container and aspect ratio (default is 16:9).

Math to calculate height is width/height = aspect ratio.

For the image set the width (default to 400px), height will calculated based on aspect ratio selected(default to 3:4), with this width and height will fetch the image eg: https://source.unsplash.com/4w8-xhdcZoU/400x533.33.

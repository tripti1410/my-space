---
path: /blog/object-fit-visualizing-it-with-various-aspect-ratios
slug: object-fit-visualizing-it-with-various-aspect-ratios
date: 2019-06-07T09:46:12.291Z
title: "Object-fit visualizing it with various aspect\_ratios"
tags:
  - CSS
---
There are times where we have to show image or video inside a container(which has width and height). And requirements can be any of these types -

1. Show full image in the container maintaining aspect ratio.
2. Show full image in the container, if aspect ratio is maintained well and good but not necessary. 
3. Just fill the container with image do not care for aspect ratio.
4. Don't do anything just show as it is. If it is cropping that's also fine. We might control which are to be cropped off (by object-position).

We can solve this problem using object-fit. **Object-fit** is a property which defines how the element looks inside the container in which it is set.

These are few options, which will help us to fulfil these requirements.

**`object-fit: fill | contain | cover | none | scale-down`**

I will explain these options in detail below. 

It is painful to visualize how an image with certain size will look inside a container of certain size or what object-fit option to choose to fulfil requirements. To make this easy I created a small tool which will help visualize these object-fit options in various scenarios.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="tripti1410" data-slug-hash="jovYPE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="object-fit">
  <span>See the Pen <a href="https://codepen.io/tripti1410/pen/jovYPE/">
  object-fit</a> by tripti (<a href="https://codepen.io/tripti1410">@tripti1410</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>



This tool allow us to visualise **object-fit** property in different scenarios. I created this because I often come across dealing with raster images (images in .png, .jpg etc. format). These images can not be scaled unlike SVG's. Same concept is valid for videos and other embeddable media formats.

There are few use cases I am listing down according to my experience, but there can be many - 

1. Slider 
2. Thumbnail
3. Avatar
4. Showing embedded media. etc.

Before going in detail to learn **object-fit** options let's look at how I have done demo setup because I will be using this to explain object-fit options.

### Demo setup details:

Container width is set default to 500px above screen devices 500px, below it is 100% of the width the device(for responsive design). Height of the container will be calculated based on the width of the container and aspect ratio (default is 16:9).

> **Math to calculate height is width/height = aspect ratio.**

Image width is can be set (default to 400px), height will calculated based on aspect ratio selected(default to 3:4), with this width and height will fetch the image eg: source.unsplash.com/4w8-xhdcZoU/400x533.33.

Then you can select object-fit options to check how the images look with these set up and figure out what works for you. Details of each property will be discussed below. 

### Object fit options in detail:

**Fill:** It is the default property for object-fit. It tries to fill the image inside the container with respect to container's width and height. As a result this will not respect the aspect ratio of the image. As described in the below gif while I have kept containers aspect ratio 16:9 and object-fit is fill. Just by changing image aspect ratio, we are getting the different different size images  and these images are trying to fill them self in the 16:9 container because of that we are not able to see proper image. As you can see if aspect ratio of image and aspect ratio of container is same resulting image is still visible better.

![object-fit: fill](/assets/object-fit-fill.gif "Object-fit: fill")

**Cover:** It will maintain the aspect ratio but try to fill the image to width and height of the container and while doing that it will crop the image. For example as shown in below gif when aspect ratio is changed to 3:4 image got cropped.

![object-fit: cover](/assets/object-fit-cover.gif "object-fit: cover")

**Contain:** It will maintain aspect ratio and try to fit in the container leaving the extra space horizontally or vertically. Let's see in the image below.

![object-fit: contain](/assets/object-fit-contain.png "object-fit: contain")

There is black space left on both side of the image. Container size is 500x281px. Here is how image size calculated and rendered. We have set image width 400 and aspect ratio 3:4. So image size is 400x 533px. As we can see the height is greater than the width so it will take container's height i.e. 281px, and render image vertically.

> **imageWidth/281 = 3/4**

 Image size is 210x281px. And image is placed horizontally in centre, so there is space.

![object-fit: contain](/assets/object-fit-conatin-black-up-down.png "object-fit: contain")

There is black space on top and bottom of the image. Container size is 500x333px. Here is how image size calculated. We have set image width 400 and aspect ratio 16:9. So image size is 400x 255px. As we can see the height is less than the width so it will take container's width i.e. 500px, and render image horizontally.

> **500/imageHeight = 16/9**

Image size is 500x281px. And image is placed vertically in centre, so there is space.

**None:** Image will not try to fit into the container. This will simply maintain image's original size. Irrespective of how it looks.

![object-fit: none](/assets/object-fit-none.png "object-fit: none")

In the above image deers are looking cropped, because image is going outside of the container.

In the above image, all deers are visible as it is able to fit in the container.

**Scale down:** This will consider setting none and contain whichever gives the smallest size will be shown.

![object-fit: scale-down](/assets/object-fit-contain-none-1.png "object-fit: scale-down")

As we can see in the above image contain size is smaller and concrete, so result of scale-down property will be similar to object-fit contain.

**Browser Support** for object-fit: https://caniuse.com/#search=object-fit

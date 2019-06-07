---
path: /blog/object-fit-visualizing-it-with-various-aspect-ratios
date: 2019-06-07T09:46:12.291Z
title: "Object-fit visualizing it with various aspect\_ratios"
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

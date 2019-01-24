# Proximity/text zoom

Proximity issues can arise when interface elements are designed far apart from one another. This mostly affects people with **low-vision** who rely on Zoom software.

What happens when someone uses Zoom software is that they only see a small fraction of the screen at once. Usually the zoomed portion of the screen follows the current position of the mouse pointer or keyboard cursor.

As a result of someone only being able to see a small section at a time, oftentimes when attempting to complete a task, content is difficult to find or may be missed entirely.

How do we test to ensure there are minimal to no proximity issues within our designs? One relatively simple and effective method is to perform what's called, "the straw test."

## The straw test

How you perform the straw test?

1.  Take one hand and making a fist
2.  Open your fist just enough to let a "straw" through
3.  Hold your fist up to one of your eyes and attempt to view your design

When it comes to reviewing a design or reading content on the web, the typical reading flow in North America is top-to-bottom, left-to-right. With this in mind, get your straw tests ready and attempt to fill out this form:

### The straw test "test" part 1

- [Poor Proximity](https://codepen.io/svinkle/full/wXNMZr/)

Was it easy or difficult to accomplish? Did you find yourself going back and forth to make sure the field you were viewing matched up with the `label` it was intended for? How long did it take you to complete?

This is a prime example of poor proximity. The form `label`s are much too far apart from their `input` elements. The submit `button` is on the bottom right, which would be much more difficult to locate than if it were placed on the other side.

Let's revisit the same form but with its proximity issues fixed:

### The straw test "test" part 2

- [Better Proximity](https://codepen.io/svinkle/full/LrqNPV/)

How was filling out this form compared to the last when testing with the straw test? Much faster and easier to fill out? Less frustrating?

This demonstrates why, ideally, forms are designed with the form `label` directly above the form field. This way the form is much easier to consume for people with low-vision who may be using zoom software. It also makes things easier for everyone else in the end, as making things accessible often does.

The main purpose of the straw test is to ensure related elements and content in general is easily found for people with low-vision who rely on zoom software. Even with 20/20 vision, items which are located far apart can be difficult to find.

Let's make sure the user experience we create is easily discoverable and comfortable for our users. We don't want to make them work any harder than they already need to.

## ✅ [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html)

This comes back to 1.3.3 Sensory Characteristics which states

> "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound."

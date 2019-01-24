# Offscreen content

As we've previously discussed, screen reader users are able to navigate by specific pieces of content. In doing so, folks who rely on this technology are able to find a heading, section, or a specific link quite quickly.

An issue may arise, however, when links, labels, buttons, etc are not sufficient in conveying their purpose. Their purpose in being should be explained well enough within their accessible name. If the name is not clear or perhaps the same type of element is repeated with the exact same name, this may lead to confusion or frustration for the user.

## Repeated link content

Take for instance, the classic "Read more" links which often appear on blog or news listing pages. An example link might be marked up as:

```html
<a href="article/how-to-make-pasta-sauce.html"> Read more </a>
```

On a blog post page with links to posts, if someone were to navigate by links alone, they'd hear something along the lines of, _"Read more link, Read more link, Read more link."_ With each link sounding the exact same, there's no way to determine where any one particular link may lead to.

## Providing context without disrupting design

There are a couple methods available in order to help provide more context for links like these without disrupting the intended design.

Of course, adding extra visible text would be ideal as this would benefit people with **cognitive impairments** with clear labelling or those with **low-vision** who rely on zoom software. But, if you're unable to sway the design in this direction, let's look at alternative methods.

### Visually hidden text

The CSS `visuallyhidden` class definition is a way to visually hide text content from sighted users, yet, have it be available for screen reader users.

This method was originally created by [Jonathan Snook](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility) and has since been adopted in the [HTML5 Boilerplate](https://html5boilerplate.com/) project as a default class definition in its CSS offering.

```html
<a href="article/how-to-make-pasta-sauce.html">
  Read more <span class="visuallyhidden">about How to Make Pasta Sauce</span>
</a>
```

Coming back to the "Read more" link example, we see here the HTML looks the same as before but with the addition of a new `span` element. This span features the `visuallyhidden` class which means the text content within will be hidden from sighted users, preserving the original design, but also provides the extra context needed for screen reader users.

Now, when someone using a screen reader encounters this link, they would hear, _"Read more about How to Make Pasta Sauce."_

### The `aria-label` approach

```html
<a
  href="article/how-to-make-pasta-sauce.html"
  aria-label="Read more about How to Make Pasta Sauce"
>
  Read more
</a>
```

Using the `aria-label` attribute is an alternative to the `visuallyhidden` CSS method. This approach directly sets the intended hidden content as the accessible name for the element.

Revisiting the link example from before, this code is a little bit cleaner and easier to read compared to the `visuallyhidden` example.

One thing you may have noticed is the repeat content of, "Read more" within the `aria-label` attribute. This is required in order for a screen reader to announce the text in its entirety.

As a result of using the `aria-label` attribute is that the attribute value takes precedence over anything else that's placed within the link element. In other words, when you apply the `aria-label` attribute, any text within the element will be completely ignored by screen readers.

### ✅ [2.5.5 Target Size](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)

This comes back to 2.4.4 Link Purpose which states

> "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general."

## A few more examples…

Let's review a couple more common situations where off-screen text would be helpful.

### A table of `button`s

Imaging a table of content items, and each item can be removed from the table using a button control. These controls might be marked up as:

```html
<button>Remove</button>
```

Since we know that screen reader users are able to navigate by specific content, hearing "Remove" multiple times (assuming there's multiple items in the table) is not very helpful. Remove what, exactly?

Let's use an `aria-label` attribute to help give context to each of the controls:

```html
<button aria-label="Remove {item title}">Remove</button>
```

With the `aria-label` added each instance of the `button` control and the `{item title}` added to its output, we can provide extra meaning to each control.

### Star ratings

It's common to see a visual representation of a rating on a product page. Often this is represented by a set of icons, typically star icons, representing a 0 to 5 range. The visual meaning of the star image is typically understandable enough for sighted users, but how do we provide an accurate text alternative for someone using a screen reader?

Here's a typical example of a star rating markup outputting icons: using an `i` element to simple output a set of icons.

```html
<i class="icon icon-star star-4"></i>
```

Guessing by the class name, `star-4`, this might output a "4 out of 5" visual rating, but if someone's using a screen reader, there's nothing available to convey the same information.

In order to do so, add some `visuallyhidden` text to provide a text alternative (and also swap the `i` element for a `span` as `i` has semantic meaning):

```html
<span class="icon icon-star star-4">
  <span class="visuallyhidden">4 out of 5</span>
</span>
```

Now when a screen reader encounters this content, the `visuallyhidden` text alternative will be announced, providing content for the user to understand the current product rating: "4 out of 5 stars."

## Offscreen navigation

![An animated GIF showcasing offscreen menu being activated and sliding into view.](../slide-deck/images/offscreen-navigation.gif)

A common pattern for web design these days is to hide primary navigation in an "offscreen drawer", toggled by a hamburger menu control. This pattern is usually set in place for a small screen or mobile context, though it's also been seen on desktop sites as well.

An accessibility issue with this pattern arises when the drawer container is positioned off-screen via CSS position property only. The menu is tucked away visually, however, when someone using a keyboard to navigate `Tab`s through the page content, these visually "hidden" links will still be focusable, essentially creating hidden tab-stops. This is an issue as the keyboard-only user is not able to determine the current focus position on the screen.

### Completely hiding content

In order to hide content completely from sighted users, keyboard-only users, and screen reader users, there are a few methods we can take:

- Applying CSS `display: none` to the drawer container will accomplish the desired effect of hiding the content from keyboard users. One note on this solution is that the display property cannot be animated without some extra JavaScript setting the property at a specific time.
- Applying the CSS `visibility: hidden` property essentially produces a similar result as using `display: none`. The difference here is the visibility property is much easier to animate, especially when used alongside the `opacity` CSS property.
- Lastly, applying the HTML `hidden` attribute to the drawer container would product the same result as the CSS `display: none` property; hiding the content completely from visual and non-visual users alike.

> If visually hidden, hide from keyboard and assistive technology, too.

The purpose of this is to ensure an equal user experience. If something is visually hidden from view, this content should also be hidden from keyboard and screen reader access.

### ✅ [2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)

This comes back to WCAG 2.4.3: Focus Order which states

> "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability."

In this context, focus is lost within the visually hidden links which cause hidden tab-stops. This can create a confusing user experience for **keyboard-only** users when they wonder where the cursor went?

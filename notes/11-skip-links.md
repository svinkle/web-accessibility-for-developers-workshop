# Skip links

Imagine only having a keyboard available to navigate the web. You're on a site, doing some research for a topic of interest, and every time you load a new page, you have to `Tab` your way through the same content over and over.

The header with a mega-nav dropdown which opens on keyboard focus, a search form, a left side content area… what a headache! If only there were some way to skip all of this repeated content to get to what you actually want; the main content of the page.

## The skip link

![Animated GIF showcasing a 'Skip to content' link moving focus to the content body.](../slide-deck/images/skip-link.gif)

`Enter` the skip link. The skip link is a link which is typically found at the very top of the HTML document, the first thing available when using a keyboard. It's purpose is to solve the issues described above; skip over the repeated content areas in order to set keyboard focus onto the main body content. This way, keyboard-only users have a mechanism to go directly to the main content.

## Skip link requirements

There are specific requirements in order to create a skip link:

- Implement as a valid link with an `href` attribute
- Set the value of the `href` attribute to match the `id` of the element which will receive keyboard focus
- Add the `visuallyhidden` CSS class in order to hide the link visually
- Add the `focusable` CSS class in order to show the link when it receives focus (this helps sighted keyboard-only users know where they currently are in the document)
- Place the link as the first item at the top of the HTML document

```html
<a href="#main" class="visuallyhidden focusable">Skip to content</a>
```

With the skip link in place and ready to go, the last requirements is providing a place for the link to anchor to; what do we set as the links `href` value?

## Skip to where?

The other part of creating a skip link is to send keyboard focus to somewhere useful. Remember, the purpose of the link is to skip over repeated content in order to provide quick access to the main content area.

Typically, when the link is activated, focus will be sent to an element such as the `main` container or perhaps an `article` element. These elements do not receive keyboard focus by default so in order to accomplish this, the `tabindex` attribute needs to be added to the element. Specifying a value of `-1` will allow the element to receive focus, but will _not_ be available in the tab order when moving around the page content.

```html
<a href="#main" class="visuallyhidden focusable">Skip to content</a>

<!-- … -->

<main id="main" tabindex="-1"><!-- … --></main>
```

With this in place, activating the skip link will bring keyboard focus from the very top of the document, past all the repeatable content, and directly to the `main` element. From this point, the user is able to `Tab` forward and consume the primary content of the page.

## ✅ [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)

This comes back to 2.4.1 Bypass Blocks which states

> "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages."

#### Exercise!

1.  In your browser and editor, load: `website/index.html`.
2.  Add a skip link to the top of the document.
3.  Add the code for the container to receive focus.

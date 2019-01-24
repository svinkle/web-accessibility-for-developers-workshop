# Page structure

Setting in place a solid page structure and design for any site or app is key for building an accessible experience. Page structure consist of headings and landmark elements which help screen reader users understand the layout and content of the page at a high-level.

## Headings

When we speak about a "heading" we refer to the larger bits of text which denote a new section of content the page often found within body copy, not the "header" of the site, which typically consist of the logo and navigation, etc.

> People who depend on assistive technology often navigate by headings first.

It's important that the code making up the heading structure is linear and is in a logical order. When someone who depends on assistive technology visits a new site or page that they've never been to before, they'll often first navigate by headings to get a sense of the content being offered on the page. It's the same idea as someone reading through the headings of a newspaper; gather the general idea of the content available, then visit the sections of interest.

### Logical heading order is key

```html
<h1>Primary heading</h1>
<!-- … -->

<h2>Sub-section</h2>
<!-- … -->

<h3>Sub-sub-section</h3>
<!-- … -->

<h2>Sub-section</h2>
<!-- … -->
```

For example, in your HTML you'd start with a single `h1` heading as the primary title of the page, followed by an `h2` heading for each major sub-section of content. If there were any sub-sub-sections, those would feature `h3` headings. When a section of content is complete, the heading would return to the appropriate level to start the new section.

In addition to the HTML code behind the headings, the visual design of headings is also very important. Text sizes which go from large to medium to small denotes the content structure and related content. People with a **cognitive impairment** or **reading/learning disability** will greatly appreciate content being split into pieces with headings conveying the message that, "this is a new section of content." Without headings, large walls of content can be quite difficult for some people to consume and may even lead to a sense of overwhelm.

### Examples

Checkout these examples. Notice the increased readability and understanding of the text as the headings are added to the document.

- [No headings…](https://codepen.io/svinkle/full/ZRwYPm/)
- [Some headings-ish…](https://codepen.io/svinkle/full/QxYyyp/)
- [Solid headings](https://codepen.io/svinkle/full/PaVZzZ/)

_(Try out the last one using a screen reader)_

### ✅ [2.4.6 Headings and Labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

This comes back to 2.4.6 Headings and Labels which states

> "Headings and labels describe topic or purpose."

## Landmark elements

Landmarks are the HTML elements which define the overall structure of a complete page. A typical web page might include sections such as a top bar with a heading logo, main navigation, a sidebar with more navigation or additional related content, a footer section, and of course the main body content. As a result, what we now have with HTML5 are specific elements which feature the semantic meaning for each section.

At a high level, the landmark elements consist of:

| Landmark | HTML `role`     | Purpose                                                                                                                                                 |
| -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header   | `banner`        | Typically the first landmark element in the DOM, containing the main logo, primary navigation, and sometimes a search form.                             |
| Footer   | `contentinfo`   | Typically the last element in the DOM, containing links and copyright information.                                                                      |
| Aside    | `complimentary` | Contains content relative to the article or the site in general.                                                                                        |
| Nav      | `navigation`    | Used to denote navigation areas.                                                                                                                        |
| Main     | `main`          | The main content area of the page, typically found as a sibling to the `header` and `footer`.                                                           |
| Section  | —               | A generic element used for sectioning off content such as portions of a page or article—not to be confused with the `div` which as no semantic meaning. |

Just like with headings, people who use a screen reader are able to discover page content by navigating via landmark elements only. This allows people to quickly jump to different sections of the page without having to wade through content unrelated to their current task.

## Exercise!

1.  Load up the HTML pages of our demo site in your editor and browser.
2.  Adjust the markup to include Landmark elements such as `header`, `main`, `footer`, `aside`, etc.
3.  **Hint!** The applied CSS classes help to decide where a Landmark might be placed.

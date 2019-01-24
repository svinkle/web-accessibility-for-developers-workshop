# Page `title`

When we speak about the "page title" we're not necessarily talking about the text in the primary h1 element. Rather, the text which appears in the browser tab, the same text which is placed in the title element in the head section of the document.

Although this content often reflects that of the primary h1, it's important to know why this content is crucial to creating an accessible user experience and when it needs to be updated.

> The page `title` is the first bit of information that is announced by a screen reader.

The reason why having clear and unique title content for each page of the website is important is due to the fact that this is the first bit of information that is announced by a screen reader.

In order to provide context for where the user currently is in a task, or if they clicked on a link from a social media site directly to a page, it's important to provide this information right away. The title text helps to give immediate feedback of where the user currently is.

## How to write `title` text

What ends up in the title element actually depends on the current page or state of the site. Ideally the flow of information in the title would be, from left to right: state | page | site.

For example:

- The homepage title would simply reflect the site name

  ```html
  <title>outdoorsy</title>
  ```

- The title for a Contact page would be:

  ```html
  <title>Contact | outdoorsy</title>
  ```

- A blog post would include the title of the post within the title element:
  ```html
  <title>How to Choose the Right Hiking Gear | outdoorsy</title>
  ```

Notice the hierarchy does not get included in the title. This is to avoid having screen readers announce too much information at once.

### Updating the state

Using the title element to convey the current state of a website is an extra bonus for someone using a screen reader. With this, they'll receive the message right away and can avoid wading through page content to find the current state of things.

For example:

- If someone submits a form with invalid data which results in a full-page refresh, having the title reflect this state would be helpful in quickly informing the user of the error state of the form.

  ```html
  <title>Error | Contact | outdoorsy</title>
  ```

- If someone is filling out a multi-step form, perhaps making an online purchase, the title might reflect the current step of the process which they're about to complete.
  ```html
  <title>Payment information (Step 3 of 4) | Shop | outdoorsy</title>
  ```

With clear and unique title element content, both sighted users and screen reader users will benefit in knowing exactly where they are within your site.

## ✅ [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

This comes back to 2.4.2: Page Titled which states

> "Web pages have titles that describe topic or purpose.""

## Exercise!

1.  Load up the HTML pages of our demo site in your editor and browser.
2.  Set an appropriate page `title`.
3.  **Bonus!** Try starting up a screen reader and refresh the page to hear the `title` content.

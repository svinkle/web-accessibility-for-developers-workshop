(() => {
  const selectors = {
    commentForm: 'comment-form',
    errorOnForm: 'error-on-form'
  };

  const fields = ['name', 'emailaddress', 'comment'];
  const commentForm = document.querySelector(`.${selectors.commentForm}`);

  const validate = (e) => {
    e.preventDefault();
    let i = 0;

    for (const field of fields) {
      const inputField = commentForm.querySelector(`#${field}`);
      const inputErrorContainer = document.createElement('p');

      inputErrorContainer.classList.add('error-on-form');

      if (inputField.value === '') {
        inputField.classList.add('form-error');
        inputErrorContainer.textContent = 'This cannot be empty';
        inputField.parentNode.insertBefore(
          inputErrorContainer,
          inputField.nextSibling
        );

        // Attach a unique id to the $errorElm variable
        inputErrorContainer.id = 'input-' + i;

        // Add aria-describedby to the $elm variable, settings its value to the id created above
        inputField.setAttribute('aria-describedby', inputErrorContainer.id);

        i++;
      } else {
        inputField.classList.remove('form-error');
        inputErrorContainer.remove();
      }
    }
  };

  commentForm.addEventListener('submit', validate, false);
})();

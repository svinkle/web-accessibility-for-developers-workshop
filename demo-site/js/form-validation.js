(() => {
  $('.comment-form').on('submit', function(e) {
    e.preventDefault();

    $('.error-on-form').remove();

    const fields = ['name', 'emailaddress', 'comment'];

    fields.forEach((fieldName, i) => {
      const $elm = $(this[fieldName]);
      const $errorElm = $('<p>').addClass('error-on-form');

      if (this[fieldName].value === '') {
        $elm.addClass('form-error');
        $errorElm
          .text($elm.prev().text() + ' cannot be empty')
          .insertAfter($elm);

        // Attach a unique id to the $errorElm variable

        // Add aria-describedby to the $elm variable, settings its value to the id created above
      } else {
        $elm.removeClass('form-error');
        $errorElm.remove();
      }
    });

    if ($('.form-error').length > 0) {
      const $errorElm = $('<p>')
        .addClass('error-on-form')
        .text('There are errors in the form');
      $errorElm.insertAfter('.comment h3');
    }
  });
})();

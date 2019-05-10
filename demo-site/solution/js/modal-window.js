(() => {
  const selectors = {
    close: 'close',
    newsletterSignupBtn: 'newsletter-signup-btn',
    overlay: 'overlay',
    popup: 'popup',
    popupTitle: 'popup-title-2',
    show: 'show'
  };

  const keyCode = {
    esc: 27
  };

  const modalOverlay = document.querySelector(`.${selectors.overlay}`);
  const modalWindow = document.querySelector(`.${selectors.popup}`);
  const closeModalBtn = document.querySelector(`.${selectors.close}`);
  const openModalBtn = document.querySelector(
    `.${selectors.newsletterSignupBtn}`
  );

  let activeElement = null;

  // Add aria attributes to ready the elements for screen reader users
  modalWindow.setAttribute('role', 'dialog');
  modalWindow.setAttribute('aria-labelledby', selectors.popupTitle);
  modalWindow.setAttribute('aria-modal', true);
  modalWindow.setAttribute('tabindex', -1);
  openModalBtn.setAttribute('aria-haspopup', 'modal');

  // Show the modal window
  const showModal = () => {

    // Cache the last active element
    activeElement = document.activeElement;

    // Set all other container elements as 'inert'
    for (const node of document.body.children) {
      if (node !== modalOverlay) {
        node.inert = true;
      }
    }

    // Add the CSS class to show the modal
    modalOverlay.classList.add(selectors.show);

    // Set keyboard focus on the modal window
    window.requestAnimationFrame(() => {
      modalWindow.focus();
    });

    // Close the modal on 'close' click event
    closeModalBtn.addEventListener('click', hideModal);

    // Check for 'Esc' keydown event
    document.addEventListener('keydown', escCheck);
  };

  // Hide the modal window
  const hideModal = () => {

    // Remove 'inert' attribute
    for (const node of document.body.children) {
      node.inert = false;
    }

    // Remove the CSS class to hide the modal
    modalOverlay.classList.remove(selectors.show);

    // Set keyboard focus on the previously active element
    window.requestAnimationFrame(() => {
      activeElement.focus();
    });

    // Remove close button event listener
    closeModalBtn.removeEventListener('click', hideModal);

    // Remove 'Esc' event listener
    document.removeEventListener('keydown', escCheck);
  };

  // Add support for the 'Esc' key
  const escCheck = (e) => {
    if (e.keyCode === keyCode.esc) {
      hideModal();
    }
  };

  // Open the modal on 'signup' click
  openModalBtn.addEventListener('click', showModal);
})();

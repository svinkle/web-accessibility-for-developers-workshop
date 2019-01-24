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

  const activeElement = null;

  // Add aria attributes to ready the elements for screen reader users

  // Show the modal window
  const showModal = () => {

    // Cache the last active element

    // Set all other container elements as 'inert'

    // Add the CSS class to show the modal
    modalOverlay.classList.add(selectors.show);

    // Set keyboard focus on the modal window
    window.requestAnimationFrame(() => {});

    // Close the modal on 'close' click event
    closeModalBtn.addEventListener('click', hideModal);

    // Check for 'Esc' keydown event
  };

  // Hide the modal window
  const hideModal = () => {

    // Remove 'inert' attribute

    // Remove the CSS class to hide the modal
    modalOverlay.classList.remove(selectors.show);

    // Set keyboard focus on the previously active element
    window.requestAnimationFrame(() => {});

    // Remove close button event listener
    closeModalBtn.removeEventListener('click', hideModal);

    // Remove 'Esc' event listener
  };

  // Add support for the 'Esc' key
  const escCheck = (e) => {};

  // Open the modal on 'signup' click
  openModalBtn.addEventListener('click', showModal);
})();

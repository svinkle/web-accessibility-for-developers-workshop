(() => {
  const selectors = {
    tip: 'tip',
    tooltip: 'tool-tip',
    tooltipActive: 'tip-active',
    tooltipLauncher: 'tool-tip-btn'
  };

  const keyCode = {
    esc: 27
  };

  const isVisible = false;

  const tip = document.querySelector(`.${selectors.tip}`);
  const tooltip = document.querySelector(`.${selectors.tooltip}`);
  const tooltipLauncher = document.querySelector(
    `.${selectors.tooltipLauncher}`
  );

  // Add aria attributes for screen reader users

  // Function to Show the tooltip content
  const showToolTip = () => {

    // Add the tip-active class to the tooltip varable
    // Toggle the aria-pressed attribute valuable
    // Set the isVisible variable
  };

  // Function to Hide the tooltip
  const hideToolTip = () => {};

  // Toggle the tooltip visibility on tooltipLauncher click event

  // Show tooltip on tooltipLauncher focus event

  // Hide tooltip on tooltipLauncher blur event

  // Hide tooltip on Esc keydown event

  // Close on document click event (only if visible)
})();

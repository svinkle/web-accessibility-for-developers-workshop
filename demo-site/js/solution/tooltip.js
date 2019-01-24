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

  let isVisible = false;

  const tip = document.querySelector(`.${selectors.tip}`);
  const tooltip = document.querySelector(`.${selectors.tooltip}`);
  const tooltipLauncher = document.querySelector(
    `.${selectors.tooltipLauncher}`
  );

  // Add aria attributes for screen reader users
  tooltipLauncher.setAttribute('aria-label', 'More information');
  tooltipLauncher.setAttribute('aria-describedby', tip.id);
  tooltipLauncher.setAttribute('aria-controls', tip.id);
  tooltipLauncher.setAttribute('aria-pressed', false);
  tip.setAttribute('role', 'tooltip');

  // Function to Show the tooltip content
  const showToolTip = () => {
    tooltip.classList.add(selectors.tooltipActive);
    tooltipLauncher.setAttribute('aria-pressed', true);
    isVisible = true;
  };

  // Function to Hide the tooltip
  const hideToolTip = () => {
    tooltip.classList.remove(selectors.tooltipActive);
    tooltipLauncher.setAttribute('aria-pressed', false);
    isVisible = false;
  };

  // Toggle the tooltip visibility on launcher button click event
  tooltipLauncher.addEventListener('click', () => {
    isVisible ? hideToolTip() : showToolTip();
  });

  // Show on laucher button focus event
  tooltipLauncher.addEventListener('focus', () => {
    showToolTip();
  });

  // Hide tooltip on blur event
  tooltipLauncher.addEventListener('blur', () => {
    hideToolTip();
  });

  // Hide tooltip on Esc keydown event
  tooltipLauncher.addEventListener('keydown', (e) => {
    if (e.keyCode === keyCode.esc) {
      hideToolTip();
    }
  });

  // Close on document click event (only if visible)
  document.addEventListener('click', (e) => {
    if (isVisible && tooltipLauncher !== e.target) {
      hideToolTip();
    }
  });
})();

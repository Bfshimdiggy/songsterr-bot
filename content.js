// Function to click the link if it exists
function clickLink() {
    // Select the link using a unique selector
    const link = document.querySelector('p.rq1ph a');


    if (link) {
      link.click();
      console.log('Clicked the "Continue with interruptions" link.');
    }
  }
  
  // Observe changes in the DOM and try clicking the link
  const observer = new MutationObserver(() => {
    clickLink();
  });
  
  // Start observing the body for changes in child nodes
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Try clicking the link on initial load
  clickLink();
  
document.getElementById("cta-button").addEventListener("click", function () {
    const defaultText = document.getElementById("cta-default");
    const clickedContent = document.getElementById("cta-clicked");
  
    // Hide the default text and show the clicked content
    defaultText.style.display = "none";
    clickedContent.style.display = "flex";
  
    // After 2 seconds, revert the changes
    setTimeout(() => {
      clickedContent.style.display = "none";
      defaultText.style.display = "inline";
    }, 2000);
  });
  
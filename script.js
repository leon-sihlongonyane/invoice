document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const imageInput = document.getElementById("chosen-image");
  const imageCountDisplay = document.querySelector(".imagecount");
  const outputDisplay = document.querySelector(".output");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const files = imageInput.files;

    imageCountDisplay.textContent = `Selected ${files.length} images`;
    outputDisplay.textContent = "Processing...";

    // Here is where you would add logic to process the image and make the call to the Gemini API.
    // We'll add more code here later.
    setTimeout(()=>{
      outputDisplay.textContent = "This would be the data extracted from the image";
    },1500);
  });
});

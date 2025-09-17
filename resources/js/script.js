const toggleButton = document.getElementById("togglePhotoBtn");
const photoContainer = document.getElementById("photo-container");


photoContainer.style.display = "block";

toggleButton.addEventListener("click", function () {
  if (photoContainer.style.display === "none") {
    photoContainer.style.display = "block";
    toggleButton.textContent = "Hide Photo";
  } else {
    photoContainer.style.display = "none";
    toggleButton.textContent = "Show Photo";
  }
});
// Task 4: Dynamic artist List (following Lab 3 pattern)
const addArtistButton = document.getElementById('add-artist'); addArtistButton.addEventListener('click', function() {
const interest = prompt("Enter one of your artists:");
if (interest && interest.trim() !== '') {
// Create new paragraph element (same as Lab 3) const artistElement = document.createElement('p'); artistElement.textContent = '• ' + interest;
          // Style it a bit
artistElement.style.backgroundColor = '#f0f8ff'; artistElement.style.padding = '5px'; artistElement.style.margin = '5px 0'; artistElement.style.borderRadius = '3px';
          // Append to container (same concept as Lab 3)
const container = document.getElementById('artists- container');
container.appendChild(artistElement); }
});


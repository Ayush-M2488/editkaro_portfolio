document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Optional: Toggle active state on service items
function toggleActive(element) {
  element.classList.toggle('active');
}

// Function to open contact form
function openForm() {
  document.getElementById('contactForm').style.display = 'block';
}

// Function to close contact form
function closeForm() {
  document.getElementById('contactForm').style.display = 'none';
}

// Function to send form (Placeholder function)
function sendForm() {
  alert("Form submitted!"); // Placeholder for form submission
  closeForm(); // Close the form after submission
}

// Function to play video
function playVideo(videoSource) {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoElement = document.getElementById('videoSource');

  videoElement.src = videoSource;
  videoPlayer.load();
  modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.pause(); // Pause the video
  modal.style.display = "none"; // Hide the modal
}

// Close the modal when clicking outside of the video
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
      closeModal();
  }
}

function openVideoModal(videoFile) {
  const modal = document.getElementById('videoModal');
  const videoSource = document.getElementById('videoSource');
  const videoPlayer = document.getElementById('videoPlayer');

  // Set the video source and play the video
  videoSource.src = videoFile;
  videoPlayer.load(); // Load the new video
  modal.style.display = 'flex'; // Show the modal
  videoPlayer.play(); // Start playing the video
}
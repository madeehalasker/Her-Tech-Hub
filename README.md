# CFG-Project
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Define the character set and specify responsive viewport -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Link to the custom CSS file for contact styling -->
    <link rel="stylesheet" href="contact.css"/>
    
    <!-- Link to Bootstrap CSS via CDN for styling and layout -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    
    <!-- Set the title of the webpage -->
    <title>Contact Us</title>
</head>
<body>
    <!-- Create a section for the contact form -->
    <div class="contact-section">
        <!-- Title for the contact section -->
        <h2>Contact Us</h2>
        
        <!-- Description text for the contact section -->
        <p>If you have any questions or feedback, feel free to get in touch with us.</p>
        
        <!-- Contact form -->
        <form id="myForm">
            <!-- Label and input field for the user's name -->
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
    
            <!-- Label and input field for the user's email -->
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
    
            <!-- Label and textarea for the user's message -->
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
    
            <!-- Button to submit the contact form -->
            <button type="submit">Send</button>
        </form>
    </div>
    
    <!-- Line break for spacing -->
    <br></br>
    
    <!-- Create a container for the image carousel -->
    <div class="carousel-container">
        <!-- Initialize a Bootstrap carousel component -->
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <!-- Define the carousel items -->
          <div class="carousel-inner">
            <!-- First carousel item (active) with an image -->
            <div class="carousel-item active">
              <img src="img/slide1.png" class="d-block w-100" alt="Slide 1">
            </div>
            
            <!-- Second carousel item with another image -->
            <div class="carousel-item">
              <img src="img/slide2.png" class="d-block w-100" alt="Slide 2">
            </div>
            
            <!-- Third carousel item with a different image -->
            <div class="carousel-item">
              <img src="img/slide3.jpeg" class="d-block w-100" alt="Slide 3">
            </div>
          </div>
        </div>
      </div>
      
      <!-- Include a custom JavaScript file for functionality -->
      <script src="script.js"></script>
      
      <!-- Include Bootstrap JavaScript and dependencies via CDN -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

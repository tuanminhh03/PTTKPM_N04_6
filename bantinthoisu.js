const apiKey = 'b9cdbf759a6cb247e1b952064ad085e9'; // Replace with your actual API key

// Function to fetch weather data
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=21.0278&lon=105.8342&appid=b9cdbf759a6cb247e1b952064ad085e9&lang=vi`;

    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update HTML with weather data
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp - 273.15)}°C`;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/10d@2x.png`;
        document.getElementById('weather-icon').setAttribute('src', iconUrl);
        
    } catch (error) {
        console.log('Error:', error);
    }
}

// Call the function with a desired city
getWeatherData('HaNoi');

var modal = document.getElementById("feedback-modal");

        // Get the button that opens the modal
        var btn = document.getElementById("open-feedback-button");

        // Get the element to close the modal
        var closeBtn = document.getElementById("close-feedback");

        // When the user clicks on the button, open the modal
        btn.addEventListener("click", function() {
            modal.style.display = "block";
        });

        // When the user clicks on (x) or outside the modal, close it
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });


document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();


    var comment = document.getElementById('comment').value;
  
    // Create a new comment element
    var commentElement = document.createElement('li');
    commentElement.innerHTML =  comment;
  
    // Append the new comment to the comment list
    document.getElementById('comment-list').appendChild(commentElement);
  
    // Clear the form inputs
    document.getElementById('comment').value = '';
  });


// Get all comment elements
var commentElements = document.getElementsByClassName('comment');

// Add event listeners to each comment element
Array.from(commentElements).forEach(function(commentElement) {
  var likeButton = commentElement.querySelector('.like-btn');
  var replyButton = commentElement.querySelector('.reply-btn');
  var replySection = commentElement.querySelector('.reply-section');
  var replyInput = commentElement.querySelector('.reply-input');

  // Like button click event handler
  likeButton.addEventListener('click', function() {
    // Toggle the "liked" class on the button
    likeButton.classList.toggle('liked');

    // Update the button text
    if (likeButton.classList.contains('liked')) {
      likeButton.textContent = 'Đã thích';
    } else {
      likeButton.textContent = 'Thích';
    }
  });

  // Reply button click event handler
  replyButton.addEventListener('click', function() {
    // Toggle the display of the reply section
    var isReplySectionVisible = replySection.style.display === 'block';
    replySection.style.display = isReplySectionVisible ? 'none' : 'block';

    replyInput.focus();
  });

  // Submit reply on Enter key press
  replyInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      submitReply();
    }
  });

  // Function to submit a reply
  function submitReply() {
    var replyText = replyInput.value;
    if (replyText.trim() !== '') {
        // Create a new reply element
        var replyElement = document.createElement('div');
        replyElement.classList.add('comment');
  
        // Create a `<strong>` element for the username
        var usernameElement = document.createElement('strong');
        usernameElement.textContent = 'Username: ';
  
        // Create a text node with the reply text
        var replyTextNode = document.createTextNode(replyText);
  
        // Append the username and reply text to the reply element
        replyElement.appendChild(usernameElement);
        replyElement.appendChild(replyTextNode);
  
        // Apply styles to the reply element
        replyElement.style.padding = '8px 0 0 16px';
        replyElement.style.margin = '8px 0 0 16px';
        replyElement.style.borderRadius = '12px'; 
        replyElement.style.fontSize = '90%'; 
  
        // Append the reply element to the comment section
        commentElement.appendChild(replyElement);
  
        // Clear the reply input
        replyInput.value = '';
  
        // Hide the reply section
        replySection.style.display = 'none';
    }
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var searchTerm = sessionStorage.getItem('searchTerm');
  createSearchForm('search-form-container1', searchTerm);
  createSearchForm('search-form-container2', searchTerm);
});

function createSearchForm(containerId, searchTerm) {
  var searchFormContainer = document.getElementById(containerId);
  searchFormContainer.innerHTML = ''; // Clear previous search form

  var searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.id = 'search-term';
  searchBox.placeholder = 'Enter your search term';
  searchBox.value = searchTerm || '';

  var searchButton = document.createElement('button');
  searchButton.type = 'submit';

  // Add the search icon using Font Awesome
  var searchIcon = document.createElement('i');
  searchIcon.className = 'fas fa-search';
  searchButton.appendChild(searchIcon);

  var searchForm = document.createElement('form');
  searchForm.id = 'search-form';
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchTerm = document.getElementById('search-term').value;

    // Store the search term in session storage
    sessionStorage.setItem('searchTerm', searchTerm);

    // Redirect to page 2
    window.location.href = 'search.html';
  });

  searchForm.appendChild(searchBox);
  searchForm.appendChild(searchButton);
  searchFormContainer.appendChild(searchForm);
}


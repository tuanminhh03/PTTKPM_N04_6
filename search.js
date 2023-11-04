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




document.addEventListener('DOMContentLoaded', function() {
  var searchTerm = sessionStorage.getItem('searchTerm');
  var selectedCategory = sessionStorage.getItem('selectedCategory');

  if (searchTerm) {
    performSearch(searchTerm, selectedCategory);
  }

  createSearchForm('search-form-container1', searchTerm, selectedCategory);
  createSearchForm('search-form-container2', searchTerm, selectedCategory);
});

function createSearchForm(containerId, searchTerm, selectedCategory) {
  var searchFormContainer = document.getElementById(containerId);
  searchFormContainer.innerHTML = ''; // Clear previous search form

  var searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.id = 'search-term';
  searchBox.placeholder = 'Nhập tin bạn muốn tìm kiếm...';
  searchBox.value = searchTerm || '';

  var searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.textContent = 'Tìm';

  var categorySelect = document.createElement('select');
  categorySelect.id = 'category-select';

  // Create category options
  var categories = ['Tất cả', 'Thời sự', 'Thời tiết', 'Thể thao'];
  for (var i = 0; i < categories.length; i++) {
    var option = document.createElement('option');
    option.value = categories[i];
    option.text = categories[i];
    categorySelect.appendChild(option);
  }

  // Set the selected category
  if (selectedCategory) {
    categorySelect.value = selectedCategory;
  }


  var searchForm = document.createElement('form');
  searchForm.id = 'search-form';
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchTerm = document.getElementById('search-term').value;
    var selectedCategory = document.getElementById('category-select').value;

    // Store the search term and selected category in session storage
    sessionStorage.setItem('searchTerm', searchTerm);
    sessionStorage.setItem('selectedCategory', selectedCategory);

    // Perform the search
    performSearch(searchTerm, selectedCategory);
  });

  searchForm.appendChild(searchBox);
  searchForm.appendChild(searchButton);
  searchForm.appendChild(categorySelect);
  searchFormContainer.appendChild(searchForm);
}
  
  function performSearch(searchTerm) {
    var searchResultsContainer = document.getElementById('search-results-container');
    // Clear previous search results
    searchResultsContainer.innerHTML = '';
    
  
    // Perform your search logic here
    // Replace the code below with your actual search implementation
  
    // Mock search results
    var mockResults = [
      { 
          title: 'Dự kiến trình Chính phủ nghỉ Tết từ 29/12 Âm lịch', 
          description: 'Kỳ nghỉ Tết Giáp Thìn có thể kéo dài 7 ngày, từ 29 tháng chạp Quý Mão đến mùng 5 tháng giêng Giáp Thìn (8-14/2/2024), theo đề xuất của Bộ Lao động Thương binh và Xã hội.', 
          imageUrl: 'https://i1-vnexpress.vnecdn.net/2023/10/17/HUY22961612274548-1697171306-6979-1697534423.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=b8kLc5ejg3VB4Yu4DVhVjA',
          url: 'bantinthoisu1.html',
      },
      { 
          title: 'Dự báo thời tiết TP.HCM hôm nay 17/10: Đêm có mưa rào và dông', 
          description: 'Thời tiết tại TP.HCM hôm nay 17/10, chiều tối và đêm có mưa rào và dông vài nơi.', 
          imageUrl: 'https://cdn-i.vtcnews.vn/resize/CANbelY-ruq65A_uTk4QmGDzI55-sZ-V0/upload/2023/10/17/du-bao-thoi-tiet-tphcm-06375920.jpg',
          url: 'bantinthoisu2.html',
      },
      { 
          title: 'Tin mưa lớn từ chiều 16/10 và dự báo thời tiết 10 ngày tới', 
          description: 'Từ nay đến 18/10, khu vực Nam Hà Tĩnh đến Quảng Trị có mưa vừa, mưa to với lượng mưa phổ biến từ 50-100mm, có nơi trên 200mm..', 
          imageUrl: 'https://cdn-i.vtcnews.vn/resize/CANbelY-ruov2uVcvUyahsJN4dbRDXIr0/upload/2023/10/16/lu-trong-tung-avar-10343837.png',
          url: 'bantinthoisu3.html', 
      },
      { 
          title: 'HLV Martinez: "Bồ Đào Nha phải tận dụng tối đa kinh nghiệm của Ronaldo"', 
          description: 'HLV Roberto Martinez đánh giá cao kinh nghiệm của tiền đạo đội trưởng Cristiano Ronaldo trong việc giúp Bồ Đào Nha tiến bộ và hướng tới Euro 2024.', 
          imageUrl: 'https://i1-thethao.vnecdn.net/2023/10/18/image-jpeg-3343-1697641926.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=zIwIhwGrAuykUQG1LRTsYA',
          url: 'bantinthoisu4.html', 
      },
  ];
  
  var matchingResults = mockResults.filter(function(result) {
    return result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           result.description.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  // Display search results
  if (matchingResults.length > 0) {
      matchingResults.forEach(function(result) {
        var resultDiv = document.createElement('div');
        resultDiv.classList.add('news-article');
  
        var resultExtraContent = document.createElement('div');
        resultExtraContent.classList.add('news-article-extra');
  
        var resultImageLink = document.createElement('a');
        resultImageLink.href = result.url;
  
        var resultImage = document.createElement('img');
        resultImage.src = result.imageUrl;
        resultImage.alt = result.title;
  
        resultImageLink.appendChild(resultImage);
  
        var resultContentDiv = document.createElement('div');
        resultContentDiv.classList.add('news-article-content');
  
        var resultTitleLink = document.createElement('a');
        resultTitleLink.href = result.url;
  
        var resultTitle = document.createElement('h2');
        resultTitle.classList.add('news-article-title');
        resultTitle.textContent = result.title;
  
        resultTitleLink.appendChild(resultTitle);
  
        var resultDescriptionLink = document.createElement('a');
        resultDescriptionLink.href = result.url;
  
        var resultDescription = document.createElement('p');
        resultDescription.classList.add('news-article-description');
        resultDescription.textContent = result.description;
  
        resultDescriptionLink.appendChild(resultDescription);
  
        resultExtraContent.appendChild(resultImageLink);
  
        resultContentDiv.appendChild(resultTitleLink);
        resultContentDiv.appendChild(resultDescriptionLink);
        
        resultDiv.appendChild(resultExtraContent);
        resultDiv.appendChild(resultContentDiv);
  
        searchResultsContainer.appendChild(resultDiv);
      });
    } else {
      var noResultsDiv = document.createElement('div');
      noResultsDiv.textContent = 'Không có kết quả tìm kiếm phù hợp.';
      searchResultsContainer.appendChild(noResultsDiv);
    }
  }

// Get the search input element
var searchInput = document.getElementById('searchQuery');

// Add an event listener for the "keypress" event
searchInput.addEventListener('keypress', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === 'Enter') {
        var query = searchInput.value;
        if (query) {
            var url = 'https://www.google.com/search?q=site:boards.4chan.org+' + encodeURIComponent(query);
            chrome.tabs.create({ url: url });
        }
    }
});

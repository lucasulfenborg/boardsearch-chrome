var searchInput = document.getElementById('searchQuery');

// auto focus
searchInput.focus();

searchInput.addEventListener('keypress', function(event) {
    //Search
    if (event.key === 'Enter') {
        var query = searchInput.value;
        if (query) {
            var url = 'https://www.google.com/search?q=site:boards.4chan.org+' + encodeURIComponent(query);
            chrome.tabs.create({ url: url });
        }
    }
});

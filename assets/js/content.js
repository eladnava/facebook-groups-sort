// View group posts & sort by date desc
var filters = {"rp_chrono_sort:0":"{\"name\":\"chronosort\",\"args\":\"\"}","filter_bsg_search_layout:0":"{\"name\":\"filter_bsg_search_list_layout\",\"args\":\"\"}"}

// Convert to url-encoded base64 stringified JSON
var encodedFilters = encodeURIComponent(btoa(JSON.stringify(filters)));

// PWA support (check address bar every second)
setInterval(() => {
    // Check whether searching inside a group
    if (window.location.href && window.location.pathname.includes('/groups') && window.location.pathname.includes('/search') && !window.location.search.includes(encodedFilters)) {
        // Filters param already set?
        if (window.location.search.includes('&filters=')) {
            // Override it
            window.location = window.location.href.replace(/&filters=.+/g, '&filters=' + encodedFilters);
        }
        else {
            // Append filters param
            window.location += '&filters=' + encodedFilters;
        }
    }
}, 1000);
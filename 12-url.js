//const currenturl= window.location.href;
//console.log("URL of current Website is:", currenturl);

// Check if window object is defined (for non-browser environments)
if (typeof window !== 'undefined') {
    const currentUrl = window.location.href;

    console.log("Current website URL:", currentUrl);
} else {
    console.log("Unable to retrieve current URL: window object is not available.");
}

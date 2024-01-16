// Create a new instance of the Showdown converter
var converter = new showdown.Converter();

// Function to convert Markdown in elements with class 'md' to HTML
function convertMarkdownToHTML() {
    // Find all elements with the 'md' class
    var markdownElements = document.querySelectorAll('.md');

    // Iterate over these elements
    markdownElements.forEach(function(element) {
        // Get the Markdown content
        var markdownContent = element.textContent;

        // Convert the Markdown content to HTML
        var htmlContent = converter.makeHtml(markdownContent);

        // Replace the element's content with the HTML content
        element.innerHTML = htmlContent;
    });
}

// Run the conversion function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', convertMarkdownToHTML);

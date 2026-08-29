// Get navigation links

const navLinks =
    document.querySelectorAll("[data-page]");


// Get page title and content

const pageTitle =
    document.getElementById("pageTitle");

const pageContent =
    document.getElementById("pageContent");


// Page content

const pages = {

    "Dashboard": {
        title: "Welcome to Dashboard",
        content: "You have successfully logged in."
    },

    "Books": {
        title: "Books",
        content: "View and manage all library books."
    },

    "Members": {
        title: "Members",
        content: "View and manage library members."
    },

    "Issue Book": {
        title: "Issue Book",
        content: "Issue books to library members."
    },

    "Return Book": {
        title: "Return Book",
        content: "Manage books returned by members."
    },

    "Reports": {
        title: "Reports",
        content: "View library reports and information."
    },

    "About": {
        title: "About Library",
        content: "Digital Library Management System."
    }

};


// Add click event to navigation

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        // Get selected page

        const page =
            this.getAttribute("data-page");


        // Check page exists

        if (pages[page]) {

            // Update title

            pageTitle.textContent =
                pages[page].title;


            // Update content

            pageContent.textContent =
                pages[page].content;


            // Scroll to top

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

});
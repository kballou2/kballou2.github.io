document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("data/header.json")
        .then((response) => response.json())
        .then((data) => {
            // Process JSON data
            const h1 = document.createElement("h1");
            const paragraph = document.createElement("p");
            const quote = document.createElement("p");
            const nav = document.createElement("nav");
            const header = document.getElementById("header");
            data.navLinks.forEach((item, count) => {
                // Create menu item link element
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON

                // Preappend the ~ for seperator
                if (count !== 0) nav.append("~");

                // Append menu item to the container
                nav.appendChild(menuItem);  
            });

            h1.textContent = data.h1;
            paragraph.textContent = data.p;
            quote.innerHTML = `<strong><q>${data.quote}</q></strong>`;

            header.appendChild(h1);
            header.appendChild(paragraph);
            header.appendChild(quote);
            header.appendChild(nav);
        })
        .catch((error) => console.error("Error fetching menu:", error));

    // Fetch JSON data
    fetch("data/footer.json")
    .then((response) => response.json())
    .then((data) => {
        // Process JSON data
        const nav = document.createElement("nav");
        const paragraph = document.createElement("p");
        const footer = document.getElementById("footer");
        data.navLinks.forEach((item) => {
            // Create menu item link element
            const menuItem = document.createElement("a");
            menuItem.classList.add("menu-item");
            menuItem.textContent = item.name;
            menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON

            // Append menu item to the container
            nav.appendChild(menuItem);
        });

        
        paragraph.innerHTML = `Designed by <a href="kindbearwebdesign.co/index.html">&copy; 2024 Kind Bear Web Design</a>`;

        footer.appendChild(nav);
        footer.appendChild(paragraph);

    })
    .catch((error) => console.error("Error fetching menu:", error));
});


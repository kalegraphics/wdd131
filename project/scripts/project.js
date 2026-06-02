const temples = [
    {
        name: "Abuja Temple",
        location: "Nigeria",
        dedicated: 2005,
        area: 11500,
        image: "images/abuja.jpg"
    },
    {
        name: "Salt Lake Temple",
        location: "USA",
        dedicated: 1893,
        area: 253000,
        image: "images/salt-lake.jpg"
    },
    {
        name: "Manila Temple",
        location: "Philippines",
        dedicated: 1984,
        area: 26683,
        image: "images/manila.jpg"
    },
    {
        name: "Rome Temple",
        location: "Italy",
        dedicated: 2019,
        area: 41010,
        image: "images/rome.jpg"
    }
];

function displayTemples(list) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${temple.name}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}">
        `;

        container.appendChild(card);
    });
}

function showTemples(filter) {
    let filtered = [];

    if (filter === "home") {
        filtered = temples;
        document.getElementById("title").textContent = "All Temples";
    }

    else if (filter === "old") {
        filtered = temples.filter(t => t.dedicated < 1900);
        document.getElementById("title").textContent = "Old Temples";
    }

    else if (filter === "new") {
        filtered = temples.filter(t => t.dedicated > 2000);
        document.getElementById("title").textContent = "New Temples";
    }

    else if (filter === "large") {
        filtered = temples.filter(t => t.area > 90000);
        document.getElementById("title").textContent = "Large Temples";
    }

    else if (filter === "small") {
        filtered = temples.filter(t => t.area < 10000);
        document.getElementById("title").textContent = "No Small Temples";
    }

    displayTemples(filtered);
}

// default load
displayTemples(temples);
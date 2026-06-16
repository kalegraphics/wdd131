// ===============================
// NEW KINGDOM CHURCH JAVASCRIPT
// HOME OF WONDERS
// ===============================

// CURRENT YEAR
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// LAST MODIFIED
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;
}

// ===============================
// HERO SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if (slides.length > 0) {

    showSlide(currentSlide);

    setInterval(nextSlide, 5000);
}

// ===============================
// UPCOMING EVENTS
// ===============================

const events = [

    {
        title: "Miracle Communion Service",
        date: "Every Thursday",
        time: "6:00 PM"
    },

    {
        title: "First Service",
        date: "Every Sunday",
        time: "7:45 AM"
    },

    {
        title: "Kingdom Service",
        date: "Every Sunday",
        time: "9:30 AM"
    },

    {
        title: "Youth Revival Night",
        date: "Last Friday Monthly",
        time: "5:00 PM"
    }

];

const eventContainer = document.querySelector("#eventContainer");

if (eventContainer) {

    events.forEach(event => {

        const card = document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
        `;

        eventContainer.appendChild(card);

    });
}

// ===============================
// MINISTRY FILTER
// ===============================

const ministryFilter =
    document.querySelector("#ministryFilter");

if (ministryFilter) {

    ministryFilter.addEventListener("change", function () {

        const selected = this.value;

        const ministries =
            document.querySelectorAll(".ministry-card");

        ministries.forEach(card => {

            if (
                selected === "all" ||
                card.dataset.category === selected
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }

        });

    });

}

// CONTACT FORM

const contactForm =
document.querySelector("#contactForm");

const successMessage =
document.querySelector("#successMessage");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

successMessage.style.display="block";

contactForm.reset();

window.scrollTo({
top: successMessage.offsetTop - 100,
behavior:"smooth"
});

});

}

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.2
    }

);

const hiddenElements =
    document.querySelectorAll("section");

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// NAVIGATION ACTIVE LINK
// ===============================

const navLinks =
    document.querySelectorAll("nav a");

const currentPage =
    window.location.pathname.split("/").pop();

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.style.backgroundColor = "#d4af37";
        link.style.color = "#000";

    }

});

const events = [

{
title: "Miracle Communion Service",
date: "Every Thursday",
time: "6:00 PM"
},

{
title: "First Service",
date: "Every Sunday",
time: "7:45 AM"
},

{
title: "Kingdom Service",
date: "Every Sunday",
time: "9:30 AM"
},

{
title: "Youth Revival Night",
date: "Last Friday Monthly",
time: "5:00 PM"
},

{
title: "Night Of Wonders",
date: "Quarterly",
time: "6:00 PM"
},

{
title: "Community Outreach",
date: "Monthly",
time: "9:00 AM"
}

];
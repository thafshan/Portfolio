/* =========================================================
   PORTFOLIO JAVASCRIPT
   Afshan Thayab Khan
========================================================= */


/* =========================================================
   HERO — CHANGING TEXT
========================================================= */

const changingText = document.querySelector(".changing-text");

const roles = [
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Frontend Developer"
];

let roleIndex = 0;
let characterIndex = 0;

let isDeleting = false;


/*
    Typing animation
*/

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        changingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;


        /*
            Finished typing the word.
            Wait before deleting.
        */

        if (characterIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        changingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;


        /*
            Finished deleting.
            Move to next role.
        */

        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }


    /*
        Typing speed
    */

    const speed = isDeleting ? 60 : 100;

    setTimeout(typeRole, speed);
}


/*
    Start animation
*/

if (changingText) {
    typeRole();
}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

const navigationLinks =
    document.querySelectorAll('a[href^="#"]');


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        /*
            Ignore empty "#"
        */

        if (targetId === "#") {
            return;
        }


        const targetSection =
            document.querySelector(targetId);


        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();


/* =========================================================
   CONTACT FORM
========================================================= */

/* =========================================================
   EMAILJS — CONTACT FORM
========================================================= */


/*
    Initialize EmailJS
*/

emailjs.init({
    publicKey: "gpAOt7dLdcFvQ3w6h"
});


/*
    Contact Form
*/

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            /*
                Stop normal form submission
            */

            event.preventDefault();


            /*
                Send form using EmailJS
            */

            emailjs.sendForm(
                "service_yj2oefl",
                "template_zmm5c8s",
                contactForm
            )

            .then(function () {

                /*
                    Success
                */

                alert(
                    "Thank you! Your message has been sent successfully."
                );


                /*
                    Clear form
                */

                contactForm.reset();

            })

            .catch(function (error) {

    console.error("EmailJS Error:", error);

    alert(
        "EmailJS Error:\n\n" +
        error.status +
        "\n" +
        error.text
    );

});

        }
    );

}


/* =========================================================
   FOOTER YEAR
========================================================= */

const currentYear =
    document.querySelector(".footer-bottom p");


if (currentYear) {

    currentYear.textContent =
        "© " +
        new Date().getFullYear() +
        " Afshan Thayab Khan. All Rights Reserved.";

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.querySelector(
        '.footer-bottom a[href="#home"]'
    );


if (backToTop) {

    backToTop.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".highlight-card, " +
        ".timeline-card, " +
        ".skill-category, " +
        ".certificate-card, " +
        ".project-card, " +
        ".contact-content"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   PAGE LOADED
========================================================= */

console.log(
    "Portfolio loaded successfully 🚀"
);
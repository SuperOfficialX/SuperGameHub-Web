const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

const newEraModal = document.querySelector("#new-era-modal");
const updateReadButton = document.querySelector(".update-read-button");
const modalCloseButton = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

const documentButtons = document.querySelectorAll(".document-button");

const toast = document.querySelector(".site-toast");

let toastTimeout;


/* =========================
   MOBILE NAVIGATION
========================= */

function openMenu() {
    navLinks.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );
}

function closeMenu() {
    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}

menuToggle.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.contains("active");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

});


/* =========================
   CLOSE MENU ON NAV CLICK
========================= */

navItems.forEach((link) => {

    link.addEventListener("click", () => {
        closeMenu();
    });

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

        if (
            newEraModal &&
            newEraModal.classList.contains("active")
        ) {
            closeNewEraModal();
        }

    }

});


/* =========================
   CLOSE MENU OUTSIDE
========================= */

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        navLinks.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {
        closeMenu();
    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentId =
                entry.target.id;

            navItems.forEach((link) => {

                const isCurrent =
                    link.getAttribute("href") ===
                    `#${currentId}`;

                link.classList.toggle(
                    "active",
                    isCurrent
                );

            });

        });

    },
    {
        root: null,
        threshold: 0.35
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================
   TOAST
========================= */

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================
   NEW ERA UPDATE MODAL
========================= */

function openNewEraModal() {

    if (!newEraModal) {
        return;
    }

    newEraModal.classList.add("active");

    newEraModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    if (modalCloseButton) {
        modalCloseButton.focus();
    }

}


function closeNewEraModal() {

    if (!newEraModal) {
        return;
    }

    newEraModal.classList.remove("active");

    newEraModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

}


if (updateReadButton) {

    updateReadButton.addEventListener(
        "click",
        () => {

            openNewEraModal();

        }
    );

}


if (modalCloseButton) {

    modalCloseButton.addEventListener(
        "click",
        () => {

            closeNewEraModal();

        }
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        () => {

            closeNewEraModal();

        }
    );

}


/* =========================
   DOCUMENT BUTTONS
========================= */

documentButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const documentType =
                button.dataset.document;

            if (documentType === "game-documents") {

                showToast(
                    "Official game documents will be added here soon."
                );

                return;
            }

            if (documentType === "announcements") {

                showToast(
                    "Official announcements will be added here soon."
                );

            }

        }
    );

});


/* =========================
   INITIAL LOAD
========================= */

console.log(
    "Super Game Hub website loaded successfully."
);
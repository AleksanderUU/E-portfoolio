document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    revealElements.forEach(
        (element, index) => {

            element.style.transitionDelay =
                `${Math.min(index * 60, 420)}ms`;

            observer.observe(element);

        }
    );


    /* =====================================================
       HUD CARD 3D EFFECT
    ===================================================== */

    document
        .querySelectorAll(
            ".project, .data-card"
        )
        .forEach((card) => {


            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (
                            (event.clientX - rect.left)
                            /
                            rect.width
                            -
                            0.5
                        ) * 4;


                    const y =
                        (
                            (event.clientY - rect.top)
                            /
                            rect.height
                            -
                            0.5
                        ) * -4;


                    card.style.transform =
                        `
                        perspective(800px)
                        rotateX(${y}deg)
                        rotateY(${x}deg)
                        translateY(-3px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    document
        .querySelectorAll(".nav a")
        .forEach((link) => {

            const href =
                link.getAttribute("href");


            if (
                href === currentPage ||
                (
                    currentPage === "" &&
                    href === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });


    /* =====================================================
       TERMINAL CURSOR
    ===================================================== */

    const cursors =
        document.querySelectorAll(".cursor");


    cursors.forEach((cursor) => {

        setInterval(() => {

            cursor.style.opacity =
                cursor.style.opacity === "0"
                    ? "1"
                    : "0";

        }, 500);

    });

});
/* Mobile navigation */
const nav = document.querySelector(".nav");
const header = document.querySelector(".site-header");
if (nav && header && window.matchMedia("(max-width: 700px)").matches) {
    const toggle = document.createElement("button");
    toggle.className = "mobile-nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Ava navigatsioon");
    toggle.textContent = "MENÜÜ";
    header.insertBefore(toggle, nav);
    toggle.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
    });
}

/* CV mobile navigation */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".site-header");
  if (!nav || !header) return;

  const button = document.createElement("button");
  button.className = "cv-mobile-nav";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.textContent = "MENÜÜ";

  header.insertBefore(button, nav);

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("mobile-open");
    button.setAttribute("aria-expanded", String(open));
  });
});

/* =========================================================
   SUBTLE POINTER GLOW
========================================================= */
document.querySelectorAll(".hud").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    });
});

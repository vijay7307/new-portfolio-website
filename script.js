document.addEventListener('DOMContentLoaded', function() {

    // Cursor glow (Apple-like)
    document.addEventListener("mousemove", (e) => {
        const orb = document.querySelector(".hero-orb");
        orb.style.transform = `translate(${e.clientX / 50}px, ${
            e.clientY / 50
        }px)`;
    });

    const orb = document.querySelector(".hero-orb");
    const img = document.querySelector(".hero-visual img");

    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        orb.style.transform = `translate(${x}px, ${y}px)`;
        img.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    });

    /* ---------- SCROLL FUNCTION ---------- */
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    /* -------- HERO BUTTONS -------- */
    document.getElementById("viewWorkBtn").addEventListener("click", () => {
        scrollToSection("projects");
    });

    document.getElementById("contactBtn").addEventListener("click", () => {
        scrollToSection("contact");
    });

    /* -------- VIEW PROJECT (GITHUB) -------- */
    const viewProjectButton1 = document.querySelectorAll(".view-project-btn1"); 

    const viewProjectButton2 = document.querySelectorAll(".view-project-btn2");

    viewProjectButton1.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.open(
                "https://github.com/vijay7307/smart-attendance-system",
                "_blank"
            );
        });
    });

    viewProjectButton2.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.open(
                "https://github.com/vijay7307/swabhimanThali",
                "_blank"
            );
        });
    });

    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // allowed ONLY in AJAX mode

        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/maqnwoyw", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            form.reset(); // ✅ INPUTS CLEAR
            successMsg.style.display = "block";
        } else {
            alert("Something went wrong ❌");
        }
    });


});
    
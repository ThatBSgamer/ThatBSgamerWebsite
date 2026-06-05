const isTouchDevice = window.matchMedia("(hover: none)").matches;

if (isTouchDevice) {
    let openNav = null;

    document.querySelectorAll(".navOption > a").forEach(link => {
        link.addEventListener("click", e => {
            const navOption = link.parentElement;
            const hasSubmenu = navOption.querySelector(".moreOptions")?.children.length > 0;

            if (!hasSubmenu) return;

            if (openNav !== navOption) {
                e.preventDefault();

                openNav?.classList.remove("open");

                navOption.classList.add("open");
                openNav = navOption;
            }
            // If already open, allow navigation normally.
        });
    });

    document.addEventListener("click", e => {
        const navOption = e.target.closest(".navOption");

        if (!navOption && openNav) {
            openNav.classList.remove("open");
            openNav = null;
        }
    });
}
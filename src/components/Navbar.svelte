<script>
    let currentSection = "home";
    let mobileMenuOpen = false;

    function scrollTo(section) {
        currentSection = section;
        mobileMenuOpen = false;
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<nav class=" fixed top-0 w-full bg-[#282C33] z-50" >
    <div class="px-4 sm:px-6 md:px-12 lg:px-[171px]">
        <div class="flex items-center justify-between h-14">
            <!-- Logo -->
            <button
                on:click={() => scrollTo("home")}
                class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate"
                aria-label="Go to home"
            >
                Humam Haidar Mohsin
            </button>

            <!-- Desktop Navigation -->
            <ul class="hidden md:flex items-center gap-4 lg:gap-8">
                {#each ["home", "projects", "skills", "about", "contact"] as section}
                    <li>
                        <button
                            on:click={() => scrollTo(section)}
                            class={"relative font-medium text-sm lg:text-base " +
                                (currentSection === section
                                    ? "text-white"
                                    : "text-[#C778DD]")}
                        >
                            <span class="text-[#C778DD]">#</span>{section}
                        </button>
                    </li>
                {/each}
            </ul>

            <!-- Mobile Menu Button -->
            <button
                on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
                class="md:hidden text-[#ABB2BF] p-2"
                aria-label="Toggle menu"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {#if mobileMenuOpen}
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    {:else}
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    {/if}
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        {#if mobileMenuOpen}
            <div class="md:hidden py-4 border-t border-[#ABB2BF]/50">
                <ul class="flex flex-col gap-4">
                    {#each ["home", "projects", "skills", "about", "contact"] as section}
                        <li>
                            <button
                                on:click={() => scrollTo(section)}
                                class={"w-full text-left font-medium " +
                                    (currentSection === section
                                        ? "text-white"
                                        : "text-[#C778DD]")}
                            >
                                <span class="text-[#C778DD]">#</span>{section}
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</nav>

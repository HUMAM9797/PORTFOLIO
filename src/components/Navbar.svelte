<script>
    let currentSection = "home";

    function scrollTo(section) {
        currentSection = section;
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<nav class="fixed top-0 w-full h-14 bg-[#282C33] z-50 ">
    <div class="">
        <div class="flex justify-around items-center h-20 ">
            <!-- Logo -->
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-slack-icon lucide-slack"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>
            <button 
                on:click={() => scrollTo("home")}
                class="mr-20 text-xl font-bold text-white"
            >
                Elias
            </button>

            <!-- Navigation -->
            <ul class="hidden md:flex items-center gap-8">
                {#each ["home", "about", "projects", "skills", "contacts"] as section}
                    <li>
                        <button
                            on:click={() => scrollTo(section)}
                            class="relative text-[#C778DD] font-medium  {currentSection === section ? 'text-white' : ''}"
                        >
                            <span class="text-[#C778DD]">#</span>{section}
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

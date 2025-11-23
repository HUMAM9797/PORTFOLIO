<script>
        import { fade, fly, slide } from "svelte/transition";
        import { flip } from "svelte/animate";

    function scrollToContact() {
        document.getElementById("contact") ?.scrollIntoView({ behavior: "smooth" });
    }

    
</script>

<section
    id="home"
    transition:fade={{ duration: 800 }}
    
    class="min-h-screen flex items-center  bg-[#282C33] pt-16 px-4 sm:px-6 md:px-12 lg:px-[171px]"
>
    <div class="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-12 lg:gap-28">
        <!-- Text Content -->
        <div class="w-full lg:w-auto">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Iam a <span class="bg-[#C778DD] bg-clip-text text-transparent">web designer</span> and
            </h1>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                <span class="bg-[#C778DD] bg-clip-text text-transparent">front-end developer</span>
            </h1>

            <p class="text-base sm:text-lg text-[#ABB2BF] mb-6 md:mb-8 max-w-xl">
                I have craft responsive websites where technologies meet creativity
            </p>

            <button
                on:click={scrollToContact}
                class="px-4 md:px-6 py-2 text-sm md:text-base text-white border border-[#C778DD] hover:bg-[#C778DD]/20 transition-all duration-300 transform hover:scale-105"
            >
                Contact me !!
            </button>
        </div>

        <!-- Image Section -->
        <div class="flex flex-col items-center w-full lg:w-auto max-w-md ">
            <img src="/public/images/Group 47.png" alt="Portfolio illustration" class="w-full h-auto" in:fly={{ y: 14, duration: 1000, delay: 150 }} />
            <div class="border border-[#ABB2BF] px-2 py-1 flex items-center justify-start w-full ">
                <div class="w-3 h-3 md:w-4 md:h-4 bg-[#C778DD] mr-2 md:mr-3 flex-shrink-0"></div>
                <p class="text-sm md:text-base text-[#ABB2BF]">
                    Currently working on 
                    <span class="text-white">ITS</span> 
                </p>
            </div>
        </div>
    </div>
</section>
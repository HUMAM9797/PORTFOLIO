<script>
    function scrollToContact() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<section
    id="home"
    class="min-h-screen flex items-center justify-center bg-[#282C33] pt-16 px-8 gap-20"
>
    <div class=" text-left z-10">

        <h1 class="text-4xl font-bold text-white">
            Iam a <span class="bg-[#C778DD] bg-clip-text text-transparent">web designer</span> and
        </h1>
        <h1 class="text-4xl font-bold text-white mb-6 ">
            <span class="bg-[#C778DD] bg-clip-text text-transparent">front-end developer</span>
        </h1>

        <p class="text-lg text-[#ABB2BF] mb-8 max-w-xl">
            He crafts responsive websites where technologies meet creativity
        </p>

        <button
            on:click={scrollToContact}
            class="px-6 py-2 text-white border border-[#C778DD]  hover:bg-[#C778DD] transition-all duration-300 transform hover:scale-105"
        >
            Contact me !!
        </button>
    </div>

    <div class="flex flex-col items-center">
        <img src="\public\images\Group 47.png" alt="">
        <div class="border border-[#ABB2BF] px-10 py-1 flex items-center justify-start w-full">
            <div class="w-4 h-4 bg-[#C778DD] mr-3 -ml-6"></div>
            <p class="text-[#ABB2BF]">Corrently working on 
                <span class="text-white">ITS</span> 
            </p>
        </div>
    </div>

</section>

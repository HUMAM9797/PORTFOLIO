<script>
    import { flip } from "svelte/animate";
    import { fade, fly, slide } from "svelte/transition";

    let projects = [
        {
            id: 1,
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            technologies: ["HTML", "SCSS", "Python", "Flask"],
            img:"public/images/project1.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "ProtectX",
            description: "Discord anti-crash bot",
            technologies: ["React", "Express", "Discord.js", "Node.js"],
            img:"public/images/project2.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            technologies: ["CSS", "Express", "Node.js"],
            img:"public/images/project3.jpg",
            link: "#",
        },
    ];
</script>

<section
    id="projects"
    class="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-[171px] bg-[#282C33] "
>
    <div class="">
        <!-- Section Header -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
            <div class="flex items-center gap-3 md:gap-6 w-full sm:w-auto">
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-[#C778DD] font-semibold whitespace-nowrap">
                    #<span class="bg-white bg-clip-text text-transparent">projects</span>
                </h2>
                <div class="h-0.5 bg-[#C778DD] flex-grow sm:w-32 md:w-64 lg:w-[530px] my-3"></div>
            </div>

            <div class="text-white hover:text-[#ABB2BF] text-base md:text-lg cursor-pointer whitespace-nowrap">
                View all → 
            </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {#each projects as project}
                <div class="border border-[#ABB2BF] bg-[#282C33] flex flex-col ">
                    <!-- Image / Visual -->
                    <div class="h-32 md:h-48 bg-[#282C33] flex items-center justify-center" >
                        <img src={project.img} alt="">
                    </div>
                    
                    <!-- Tech strip -->
                    <div class="border-y border-[#ABB2BF] px-2 py-1 bg-[#282C33]">
                        <div class="flex flex-wrap gap-1 text-sm md:text-base lg:text-lg text-[#ABB2BF]">
                            {#each project.technologies as tech}
                                <span class="px-1 py-0.5">{tech}</span>
                            {/each}
                        </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="px-1 mx-2">
                        <h3 class="text-2xl  text-white my-2 ">{project.title}</h3>
                        <p class="text-[#ABB2BF] text-sm md:text-base lg:text-lg">{project.description}</p>
                    </div>
                    
                    <!-- Button -->
                    <div class="p-3 md:p-4">
                        <a 
                            href={project.link} 
                            class="inline-block px-5 md:px-5  py-1 border border-[#C778DD] text-white text-lg  hover:bg-[#C778DD]/20 transition" 
                        >
                            Live →
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
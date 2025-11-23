<script>
    let skillCategories = [
        {
            category: "Languages",
            icon: "🎨",
            skills: ["TypeScript", "Lua", "Python", "JavaScript"],
        },
        {
            category: "Databases",
            icon: "💾",
            skills: ["SQLite", "PostgreSQL", "Mongo"],
        },
        {
            category: "Tools",
            icon: "🛠️",
            skills: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch"],
        },
        {
            category: "Other",
            icon: "⚙️",
            skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
        },
        {
            category: "Frameworks",
            icon: "🔧",
            skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
        },
    ];
</script>

<section id="skills" class="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-[171px] bg-[#282C33]">
    <div class="">
        <!-- Section Header -->
        <div class="flex items-center gap-4 mb-12">
            <h2 class="text-4xl  text-[#C778DD] whitespace-nowrap">
                #<span class="text-white">skills</span>
            </h2>
            <div class="h-0.5 bg-[#C778DD] w-24 sm:w-32 md:w-48 lg:w-[220px] my-5"></div>
        </div>

        <div class="absolute">
            <img src="public/images/Group 36.png" alt="">
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-auto max-w-xl items-start">
            {#each skillCategories as category}
                <div class="border border-[#ABB2BF]">
                    <div class="px-3 md:px-4 py-2 border-b border-[#ABB2BF]">
                        <h3 class="text-base md:text-lg text-white">{category.category}</h3>
                    </div>
                    <div class="flex flex-wrap gap-1 p-2 text">
                        {#each category.skills as skill}
                            <span class="text-sm md:text-base lg:text-lg text-[#ABB2BF]">{skill}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
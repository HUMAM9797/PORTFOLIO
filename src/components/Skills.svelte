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

<section id="skills" class="py-20 px-4 bg-gradient-to-br from-[#252b42] to-[#1a1f3a] transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
                #<span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">skills</span>
            </h2>
        </div>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each skillCategories as category}
                <div
                    class="bg-[#252b42]/60 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-600/30"
                >
                    <!-- Category Header -->
                    <div class="flex items-center gap-3 mb-6">
                        <span class="text-3xl">{category.icon}</span>
                        <h3 class="text-lg font-bold text-white">
                            {category.category}
                        </h3>
                    </div>

                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-2">
                        {#each category.skills as skill}
                            <span class="px-3 py-1 bg-[#1a1f3a] text-gray-300 rounded text-sm border border-purple-600/20 hover:border-purple-600/50 transition-colors duration-300">
                                {skill}
                            </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

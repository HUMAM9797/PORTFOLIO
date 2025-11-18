<script>
    let projects = [
        {
            id: 1,
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            technologies: ["HTML", "SCSS", "Python", "Flask"],
            icon: "🎮",
            link: "#",
        },
        {
            id: 2,
            title: "ProtectX",
            description: "Discord anti-crash bot",
            technologies: ["React", "Express", "Discord.js", "Node.js"],
            icon: "🛡️",
            link: "#",
        },
        {
            id: 3,
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            technologies: ["CSS", "Express", "Node.js"],
            icon: "💜",
            link: "#",
        },
    ];
</script>

<section
    id="projects"
    class="py-20 px-4 bg-gradient-to-br from-[#1a1f3a] to-[#252b42] transition-colors duration-300"
>
    <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="flex justify-between items-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-white">
                #<span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">projects</span>
            </h2>
            <div class="text-purple-400 hover:text-purple-300 text-lg font-semibold cursor-pointer">View all ---></div>
        </div>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <div
                    class="bg-[#252b42]/50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-purple-600/40"
                >
                    <!-- Project Icon -->
                    <div
                        class="p-12 text-center bg-gradient-to-br from-purple-600/30 to-pink-600/20"
                    >
                        <span class="text-6xl">{project.icon}</span>
                    </div>

                    <!-- Project Content -->
                    <div class="p-6">
                        <h3
                            class="text-xl font-bold text-white mb-3"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-gray-300 mb-4 leading-relaxed"
                        >
                            {project.description}
                        </p>

                        <!-- Technologies -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each project.technologies as tech}
                                <span
                                    class="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-semibold border border-purple-600/40"
                                >
                                    {tech}
                                </span>
                            {/each}
                        </div>

                        <!-- View Project Button -->
                        <a
                            href={project.link}
                            class="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                        >
                            View Project →
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

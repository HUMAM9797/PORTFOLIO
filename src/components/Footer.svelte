<script>
    let currentYear = new Date().getFullYear();

    let socialLinks = [
        { name: "GitHub", icon: "💻", url: "https://github.com" },
        { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
        { name: "Discord", icon: "🎮", url: "https://discord.com" },
    ];

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<footer class="bg-[#1a1f3a] text-white border-t border-purple-600/30">
    <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Brand -->
            <div>
                <h3 class="text-2xl font-bold mb-4">
                    Elias<span class="text-purple-400">.</span>
                </h3>
                <p class="text-gray-400 leading-relaxed mb-4">
                    Web designer and front-end developer
                </p>
                <div class="flex gap-3">
                    {#each socialLinks as social}
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 bg-[#252b42]/50 rounded-full flex items-center justify-center text-xl hover:bg-purple-600 hover:scale-110 transition-all duration-300 border border-purple-600/30"
                            title={social.name}
                        >
                            {social.icon}
                        </a>
                    {/each}
                </div>
            </div>

            <!-- Footer Info -->
            <div class="col-span-2 text-right">
                <p class="text-gray-300 text-sm">
                    © {currentYear} <span class="font-semibold text-purple-400">Elias</span>. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>

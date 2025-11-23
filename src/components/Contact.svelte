<script>
    let contactInfo = [
        {
            icon: "💬",
            title: "Discord",
            value: "humam97",
        },
        {
            icon: "📧",
            title: "Email",
            value: "humam.h.mohsin@gmail.com",
        },
    ];

    let socialLinks = [
        { name: "GitHub", icon: "💻", url: "https://github.com" },
        { name: "Figma", icon: "🎨", url: "https://figma.com" },
        { name: "Discord", icon: "💬", url: "https://discord.com" },
    ];

    let currentYear = new Date().getFullYear();
</script>

<div class="min-h-screen flex flex-col">
    <!-- Contact Section -->
    <section id="contact" class="flex-grow py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-[171px]">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-white whitespace-nowrap">
                    <span class="text-[#c778dd]">#</span>contacts
                </h2>
                <div class="h-0.5 bg-[#c778dd] flex-grow max-w-xs"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <!-- Left Side - Description -->
                <div class="flex-1">
                    <p class="text-[#ABB2BF] text-base md:text-lg leading-relaxed">
                        I'm interested in freelance opportunities. However,
                        if you have other request or question, don't
                        hesitate to contact me
                    </p>
                </div>

                <!-- Right Side - Contact Box -->
                <div class="flex justify-start lg:justify-end">
                    <div class="border border-[#ABB2BF]  max-w-sm p-4">
                        <h3 class="text-white font-semibold mb-4 text-base md:text-lg">
                            Message me here
                        </h3>

                        <!-- Contact Info -->
                        <div class="space-y-2">
                            {#each contactInfo as info}
                                <div class="flex items-center gap-2">
                                    <span class="text-base md:text-2xl">{info.icon}</span>
                                    <span class="text-[#ABB2BF] text-sm md:text-lg break-all">{info.value}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-[#ABB2BF] py-6 md:py-8 mt-auto px-4 sm:px-6 md:px-12 lg:px-[171px]">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 md:mb-12">
                <!-- Left - Brand -->
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-3 h-3 md:w-4 md:h-4 bg-white flex-shrink-0"></div>
                        <h3 class="text-white font-bold text-base md:text-lg">
                            Humam 
                            <span class="text-[#ABB2BF] font-normal block sm:inline sm:ml-2">
                                humam.h.mohsin.com
                            </span>
                        </h3>
                    </div>
                    <p class="text-[#f3f3f3] text-sm md:text-base lg:text-lg">
                        Web designer and front-end developer
                    </p>
                </div>

                <!-- Right - Media -->
                <div>
                    <h4 class="text-white font-medium mb-3 text-lg md:text-xl lg:text-2xl">Media</h4>
                    <div class="flex gap-2 md:gap-3">
                        {#each socialLinks as social}
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-[#ABB2BF] hover:text-white transition-colors text-xl md:text-2xl"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center">
                <p class="text-[#ABB2BF] text-sm md:text-base">© Copyright 2025.</p>
            </div>
        </div>
    </footer>
</div>
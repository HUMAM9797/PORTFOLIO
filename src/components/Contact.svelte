<script>
    let formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    let isSubmitting = false;
    let submitMessage = "";

    function handleSubmit(event) {
        event.preventDefault();
        isSubmitting = true;

        setTimeout(() => {
            submitMessage = "Thank you! Your message has been sent successfully. 🎉";
            isSubmitting = false;
            formData = { name: "", email: "", subject: "", message: "" };
            setTimeout(() => {
                submitMessage = "";
            }, 5000);
        }, 1500);
    }

    let contactInfo = [
        {
            icon: "💻",
            title: "Discord",
            value: "!Elias#3519",
        },
        {
            icon: "📧",
            title: "Email",
            value: "elias@elias.me",
        },
    ];

    let socialLinks = [
        { name: "GitHub", icon: "💻", url: "https://github.com" },
        { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
        { name: "Discord", icon: "🎮", url: "https://discord.com" },
    ];
</script>

<section
    id="contact"
    class="py-20 px-4 bg-gradient-to-br from-[#1a1f3a] to-[#252b42]"
>
    <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
                #<span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">contacts</span>
            </h2>
            <p class="text-gray-300 max-w-2xl mx-auto">
                I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div>
                <h3 class="text-2xl font-bold text-white mb-6">Message me here</h3>
                
                <!-- Contact Info Cards -->
                <div class="space-y-4 mb-8">
                    {#each contactInfo as info}
                        <div class="flex items-center gap-4 p-4 bg-[#252b42]/50 rounded-lg border border-purple-600/30">
                            <span class="text-2xl">{info.icon}</span>
                            <div>
                                <p class="text-sm text-gray-400 font-medium">{info.title}</p>
                                <p class="text-gray-300 font-semibold">{info.value}</p>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Social Links -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">Media</h4>
                    <div class="flex gap-4">
                        {#each socialLinks as social}
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-12 h-12 bg-[#252b42]/50 rounded-full flex items-center justify-center text-2xl hover:bg-purple-600 hover:scale-110 transition-all duration-300 border border-purple-600/30"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

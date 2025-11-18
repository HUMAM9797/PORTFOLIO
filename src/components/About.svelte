<script>
    let aboutText = "Hello, i'm Elias!";
    let description = "I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.";
</script>

<section id="about" class="py-20 px-4 bg-gradient-to-br from-[#1a1f3a] to-[#252b42] transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
                #<span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">about-me</span>
            </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div>
                <h3 class="text-2xl font-bold text-white mb-6">{aboutText}</h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                    {description}
                </p>
                <button class="mt-8 px-6 py-2 border border-purple-600/60 text-purple-300 rounded hover:bg-purple-600 hover:text-white transition-colors duration-300">
                    Read more →
                </button>
            </div>

            <!-- Image Placeholder -->
            <div class="flex justify-center">
                <div class="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl shadow-2xl flex items-center justify-center border border-purple-600/30">
                    <span class="text-8xl">👨‍💻</span>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    let aboutText = "Hello, I'm Humam!";
    let description = `I'm a self-taught front-end developer based in Baghdad, Iraq. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences., Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`;
</script>

<section id="about" class="py-12 md:py-16 lg:py-20 bg-[#282C33] px-4 sm:px-6 md:px-12 lg:px-[171px]">
    <div class=" ">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            <!-- Left Content -->
            <div class="order-2 lg:order-1">
                <!-- Section Header -->
                <div class="flex items-center gap-2 md:gap-4 mb-4 md:mb-6 border border-[#ABB2BF] w-full">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl text-[#C778DD] whitespace-nowrap">
                        #<span class="text-white">about-me</span>
                    </h2>
                    <div class="h-0.5 bg-[#C778DD] flex-grow max-w-sm"></div>
                </div>
                
                <h3 class="text-lg md:text-xl font-black text-[#ABB2BF] mb-3 md:mb-6">
                    {aboutText}
                </h3>
                
                <p class="text-base md:text-lg text-[#ABB2BF] mb-4 md:mb-6 font-black leading-relaxed">
                    {description}
                </p>
                
                <button
                    class="px-4 md:px-5 py-1 text-base md:text-lg border border-[#ABB2BF] text-white hover:bg-[#C778DD]/20 transition-colors duration-300"
                >
                    Read more →
                </button>
            </div>

            <!-- Right Image -->
            <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div class=" border border-[#ABB2BF] overflow-hidden">
                    <img 
                        src="/public/images/Group 50.png" 
                        alt="Profile image" 
                        class="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
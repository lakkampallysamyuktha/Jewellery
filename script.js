// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. LOADER & HERO ANIMATION
       ========================================================================== */
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (!hasSeenLoader) {
        const loaderTl = gsap.timeline({
            onComplete: () => sessionStorage.setItem('hasSeenLoader', 'true')
        });
        
        loaderTl.to(".loader-logo", {
            opacity: 1,
            y: -10,
            duration: 1,
            ease: "power3.out"
        })
        .to(".loader-line", {
            width: "100%",
            duration: 1.5,
            ease: "power4.inOut"
        }, "-=0.5")
        .to(".luxury-loader", {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.2
        })
        .fromTo(".hero-img, .ab-hero-bg", 
            { scale: 1.2, filter: "blur(10px)" }, 
            { scale: 1, filter: "blur(0px)", duration: 2, ease: "power3.out" }, 
            "-=0.8"
        )
        .fromTo(".hero-content > *, .ab-hero-content > *", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }, 
            "-=1.5"
        )
        .fromTo(".floating-element, .glass-card", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" }, 
            "-=1"
        );
    } else {
        gsap.set(".luxury-loader", { display: "none" });
        
        const fastHeroTl = gsap.timeline();
        fastHeroTl.fromTo(".hero-img, .ab-hero-bg", 
            { scale: 1.05, filter: "blur(5px)" }, 
            { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
        )
        .fromTo(".hero-content > *, .ab-hero-content > *", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 
            "-=1"
        )
        .fromTo(".floating-element, .glass-card", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }, 
            "-=0.5"
        );
    }

    /* ==========================================================================
       2. HEADER SCROLL & MOBILE MENU
       ========================================================================== */
    const header = document.getElementById("header");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        
        if (mobileMenu.classList.contains("active")) {
            document.body.style.setProperty('overflow', 'hidden', 'important');
            document.documentElement.style.setProperty('overflow', 'hidden', 'important');
            gsap.fromTo(".mobile-link", 
                { y: 30, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
            );
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
    });

    /* ==========================================================================
       3. SWIPER INITIALIZATIONS
       ========================================================================== */
    
    // Check if mobile for conditional swipers
    const isMobile = window.innerWidth < 1024;

    if (typeof Swiper !== 'undefined') {
        if (isMobile) {
            // Collections Swiper (Mobile Only)
            new Swiper(".collections-swiper", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            // Occasions Swiper (Mobile Only)
            new Swiper(".occasions-swiper", {
                slidesPerView: 1.1,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }

        // Style Guide Swiper (All devices)
        new Swiper(".style-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
        // Stories Swiper (All devices)
        new Swiper(".stories-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }

    /* ==========================================================================
       4. GSAP SCROLL ANIMATIONS
       ========================================================================== */
    
    // Floating animations for hero elements
    gsap.to(".el-1", {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".el-2", {
        y: 20,
        rotation: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".trending-card", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // General Section Reveal
    gsap.utils.toArray(".section-title").forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Craftsmanship Timeline Draw
    gsap.fromTo(".timeline-line", 
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 80%",
                end: "bottom 50%",
                scrub: 1
            }
        }
    );

    gsap.utils.toArray(".timeline-step").forEach(step => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
            },
            x: 30,
            opacity: 0,
            duration: 0.8
        });
    });

    // Image Mask Reveals
    gsap.utils.toArray(".ed-image, .occ-image, .boutique-image-wrapper").forEach(img => {
        gsap.fromTo(img, 
            { clipPath: "inset(100% 0 0 0)" },
            {
                clipPath: "inset(0% 0 0 0)",
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                }
            }
        );
        
        // Image slight zoom inside wrapper
        gsap.fromTo(img.querySelector("img"),
            { scale: 1.2 },
            {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                }
            }
        );
    });

    // Why Choose Us - Trust Features Reveal
    gsap.fromTo(".feature-card", 
        { opacity: 0, y: 50 },
        {
            scrollTrigger: {
                trigger: ".trust-grid",
                start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
            clearProps: "opacity,transform" // Clear props after animation to prevent Chrome rendering bugs
        }
    );

    // Sticky Editorial Lookbook
    const scrollContents = gsap.utils.toArray(".scroll-content");
    const stickyImages = gsap.utils.toArray(".sticky-img");

    if (scrollContents.length > 0) {
        scrollContents.forEach((content) => {
            ScrollTrigger.create({
                trigger: content,
                start: "top 50%", // When the content reaches middle of screen
                end: "bottom 50%",
                onEnter: () => activateImage(content.dataset.img),
                onEnterBack: () => activateImage(content.dataset.img),
            });
        });

        function activateImage(targetId) {
            stickyImages.forEach(img => {
                if (img.id === targetId) {
                    img.classList.add("active");
                } else {
                    img.classList.remove("active");
                }
            });
        }
    }

    // New Arrivals Hero Text Zoom Animation
    if (document.querySelector(".na-hero-minimal-content")) {
        const delayTime = sessionStorage.getItem('hasSeenLoader') ? 0.2 : 2.5;
        gsap.fromTo(".na-hero-minimal-content",
            { y: -40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, delay: delayTime, ease: "power3.out" }
        );
    }

    // About Page Philosophy Section Zoom In
    if (document.querySelector(".ab-philosophy")) {
        gsap.fromTo(".ab-philosophy .container > span, .ab-philosophy .container > h2",
            { scale: 0.8, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".ab-philosophy",
                    start: "top 80%"
                },
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.2)"
            }
        );
        
        gsap.fromTo(".ab-phil-card",
            { scale: 0.5, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".ab-phil-grid",
                    start: "top 80%"
                },
                scale: 1,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "back.out(1.5)"
            }
        );
    }

    // About Page Promise Section Reveal
    if (document.querySelector(".ab-pure-inner")) {
        gsap.fromTo(".ab-pure-inner > *",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".ab-pure-promise",
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }
        );
    }

    // Footer Reveal Animation
    gsap.fromTo(".footer-grid > *",
        { y: 40, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }
    );
    
    gsap.fromTo(".footer-bottom",
        { y: 20, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".footer",
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }
    );

    // Form Validation for Contact Page
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.setAttribute('novalidate', true);
        
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            bookingForm.querySelectorAll('.error-message').forEach(el => el.remove());
            bookingForm.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));
            
            const requiredFields = bookingForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error-input');
                    
                    const errorMsg = document.createElement('span');
                    errorMsg.classList.add('error-message');
                    let msgText = 'This field is required.';
                    if(field.id === 'boutique') msgText = 'Please select a store.';
                    if(field.id === 'date') msgText = 'Please select a preferred date.';
                    if(field.id === 'name') msgText = 'Please enter your full name.';
                    if(field.id === 'email') msgText = 'Please enter your email address.';
                    
                    errorMsg.textContent = msgText;
                    field.parentNode.appendChild(errorMsg);
                } else if (field.type === 'email') {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(field.value.trim())) {
                        isValid = false;
                        field.classList.add('error-input');
                        const errorMsg = document.createElement('span');
                        errorMsg.classList.add('error-message');
                        errorMsg.textContent = 'Please enter a valid email address.';
                        field.parentNode.appendChild(errorMsg);
                    }
                }
            });
            
            if (isValid) {
                window.location.href = '404.html';
            } else {
                const firstError = bookingForm.querySelector('.error-input');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        
        // Remove error message on input change
        bookingForm.querySelectorAll('[required]').forEach(field => {
            field.addEventListener('input', function() {
                if (this.classList.contains('error-input')) {
                    this.classList.remove('error-input');
                    const errorMsg = this.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
        });
    }

    // Back to top functionality
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Refresh ScrollTrigger after a slight delay to ensure all AOS animations and layout shifts are accounted for
    window.addEventListener('load', () => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
    });
});

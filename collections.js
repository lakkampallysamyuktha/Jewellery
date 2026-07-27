document.addEventListener("DOMContentLoaded", () => {
    // Make sure GSAP and ScrollTrigger are available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Cinematic Hero Animation (Text Only)
        const colHeroTl = gsap.timeline({ delay: 1.5 });
        
        colHeroTl.fromTo(".coll-hero-content > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
        )
        .fromTo(".scroll-indicator-split",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "bounce.out" },
            "-=0.5"
        );

        // Hero Parallax Scroll
        gsap.to(".col-hero-bg img", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".col-hero-full",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // 2. Signature Spotlight Animation
        gsap.fromTo(".spotlight-img-large", 
            { x: -50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".signature-spotlight",
                    start: "top 80%"
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        gsap.fromTo(".spotlight-content",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".signature-spotlight",
                    start: "top 70%"
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        gsap.fromTo(".spotlight-img-small",
            { x: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".signature-spotlight",
                    start: "top 60%"
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // 3. Masonry Grid Reveal
        gsap.utils.toArray(".masonry-item").forEach((item, i) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.1, // Stagger effect
                    ease: "back.out(1.2)"
                }
            );
        });

        // 4. Materials of Prestige Reveal
        gsap.fromTo(".materials .section-header > *",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".materials",
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            }
        );

        gsap.fromTo(".material-card",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".materials-scroll-wrapper",
                    start: "top 75%"
                },
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            }
        );

        // 5. The Master's Selection Reveal
        gsap.fromTo(".master-selection .section-header > *",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".master-selection",
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            }
        );

        gsap.fromTo(".master-piece",
            { y: 60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".masters-grid",
                    start: "top 75%"
                },
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // 6. Editorial Reveal
        gsap.fromTo(".ed-col.text-col > *:not(.bespoke-steps)",
            { x: -30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".editorial-grid",
                    start: "top 75%"
                },
                x: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            }
        );

        gsap.fromTo(".bespoke-steps li",
            { x: -30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".bespoke-steps",
                    start: "top 85%"
                },
                x: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            }
        );

        gsap.fromTo(".ed-col.img-col",
            { x: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".editorial-grid",
                    start: "top 75%"
                },
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // 7. Shop The Look Reveal
        gsap.fromTo(".hotspot-overlay > *",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".shop-the-look",
                    start: "top 75%"
                },
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            }
        );
    }
});

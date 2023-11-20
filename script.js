gsap.to(".headpara h1",{
    transform: "translateX(-50%)",
    delay: 5,
    fontWeight: "200",
    scrollTrigger:{
        trigger: ".page1",
        scoller: "body",
        start: "top 0",
        pin: true,
        scrub: 2,
    }
})
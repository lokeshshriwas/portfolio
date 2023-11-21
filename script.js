gsap.to(".headpara p",{
    transform: "translateX(-80%)",
    color: "black",
    scrollTrigger:{
        trigger: ".page1",
        scoller: "body",
        start: "top 0",
        pin: true,
        scrub: 2,
    }
})


gsap.from("#storycontainer #storyinfo p",{
    transform: "translateX(-1000%)",
    stagger: 3,
    opacity: 0,
    scrollTrigger:{
        trigger: ".page2",
        scoller: "body",
        start: "top 0",
        duration: 3,
        scrub: 1,
        pin: true
    }
})

gsap.from("#storycontainer img",{
    opacity: 0,
    scale: 0,
    scrollTrigger:{
        trigger: ".page2",
        scoller: "body",
        start: "top 1",
        scrub: 1,
    }
})
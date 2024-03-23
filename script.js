Shery.mouseFollower();
Shery.makeMagnet("a, img")

if(window.innerWidth < 700){
    gsap.to(".headpara #mainslider",{
        transform: "translateX(-480vw)",
        color: "black",
        fontWeight: 700,
        scrollTrigger:{
            trigger: ".page1",
            scroller: "body",
            start: "top 0",
            pin: true,
            scrub: 1,
        }
    })
} else{
    gsap.to(".headpara #mainslider",{
        transform: "translateX(-80vw)",
        fontWeight: 800,
        color: "black",
        scrollTrigger:{
            trigger: ".page1",
            scroller: "body",
            start: "top 0",
            pin: true,
            scrub: 1,
        }
    })
}


gsap.from("#storycontainer #storyinfo p",{
    transform: "translateX(-1000%)",
    stagger: 3,
    opacity: 0,
    scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        start: "top 0",
        duration: 3,
        scrub: 1,
        pin: true,
    }
})

gsap.from("#storycontainer img",{
    opacity: 0,
    scale: 0,
    scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        start: "top 1",
        scrub: 1,
    }
})

gsap.from(".pg3part1 h1",{
    transform: "translateX(-100%)",
    color: "black",
    scrollTrigger:{
        trigger: ".page3",
        scroller: "body",
        start: "top 1",
        scrub: 1,
        pin: true,
    }
})

gsap.from(".pg3part2 h1",{
    transform: "translateX(100%)",
    color: "black",
    scrollTrigger:{
        trigger: ".page3",
        scroller: "body",
        start: "top 1",
        scrub: 1,
    }
})

gsap.from(".page2",{
    backgroundColor: "#b0a695",
    scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        strat: "top -50",
        scrub: 3,
    }
})

gsap.from(".page3",{
    backgroundColor: "#aba190",
    scrollTrigger:{
        trigger: ".page3",
        scroller: "body",
        strat: "top -50",
        scrub: 3,
    }
})

gsap.from(".page4-1",{
    backgroundColor: "#a09585",
    scrollTrigger:{
        trigger: ".page4-1",
        scroller: "body",
        strat: "top -50",
        scrub: 3,
    }
})
gsap.from(".page4-2",{
    backgroundColor: "#a09585",
    scrollTrigger:{
        trigger: ".page4-2",
        scroller: "body",
        strat: "top -50",
        scrub: 3,
    }
})

gsap.from(".page5",{
    backgroundColor: "#897d6f",
    scrollTrigger:{
        trigger: ".page5",
        scroller: "body",
        strat: "top -50",
        end: "top -99",
        scrub: 3,
    }
})

gsap.from(".card",{
    scale: 0,
    duration: 2,
    opacity: 0,
    scrollTrigger:{
        trigger: (".page4-1"),
        scroller: "body",
        pin: true,
        scrub: 2,
        start: "top -50",
        end : "top 90"
    }
})

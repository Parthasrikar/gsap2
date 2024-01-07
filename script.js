let tl = gsap.timeline();

tl.from("#nav img,#nav h3,#nav button", {
    y:-100,
    duration:1,
    opacity:0,
    
})

tl.from("#main h1", {
    opacity:0,
    y:200,
    stagger:0.5
})

tl.from("#main> img,h5", {
    opacity:0,
    scale:0,
    stagger:0.5
})

tl.from("#scroll" , {
    opacity:0,
    scale:0
})

tl.to("h5", {
    y:-30,
    yoyo:true,
    duration:0.3,
    repeat:-1
})

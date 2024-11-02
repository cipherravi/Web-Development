let tl1=gsap.timeline();

tl1.from(".menu-container li ",{
    y:-20,
    x:-8,
    duration:0.6,
    stagger:0.2,
    opacity:0,
    ease:"power1",

})
tl1.from (".nav .submit",{
    x:200,
    delay:-0.9,
    duration:1,
    opacity:0
})
tl1.from (".nav .logo",{
    x:-200,
    delay:-0.9,
    duration:1,
    opacity:0
})
var tl=gsap.timeline()


tl.from("a",{
    y:10,
    duration:4,
    delay:.1,
    opacity:0,
    scale:1.5,
    color:"#8B0000"

})

let bt = document.querySelector("button");

bt.addEventListener("click", function(){
    window.location.href = "perfume.html";
});



gsap.to("#turb1",{
    attr:{baseFrequency:'0.03'},
    yoyo:true,
    repeat:-1,
    duration:4,
    ease:"sine.inOut"
})

gsap.to("#wave1", { x: "-50%", repeat: -1, ease: "linear", duration: 8 });
gsap.to("#wave2", { x: "-50%", repeat: -1, ease: "linear", duration: 6 });
gsap.to("#wave3", { x: "-50%", repeat: -1, ease: "linear", duration: 4 });




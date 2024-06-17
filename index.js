
const scroll = new LocomotiveScroll({
    el: document.querySelector('.uoar'),
    smooth: true
});
function mouseround(){
    var xscale=0;
    var yscale =0;
    
    var xprev=0;
    var yprev=0;
    window.addEventListener('mousemove',function(dets){
        var xdiff = dets.clientX-xprev;
        var ydiff = dets.clientY-yprev;

        xprev=xdiff;
        yprev=ydiff;
        
        xscale = gsap.utils.clamp(.98,.12,xdiff);
        yscale = gsap.utils.clamp(.98,.12,ydiff);
        console.log(xscale,yscale);
        mousefollower(xscale,yscale);
    })
}
var timeout;
function mousefollower(xscale,yscale){
    clearTimeout(timeout);
    window.addEventListener('mousemove',function(dets){
        document.querySelector('.minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
        // document.querySelector('.minicircle').style.transform = ;
        timeout = setTimeout(function(){
            document.querySelector('.minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${1}, ${1})`;
        },10);
    })

}
function firstpageanim(){
    var t1=gsap.timeline();
    t1.from('.nav',{
        y:'-100',
        opacity:0,
        duration:1.5,
        stagger:.2,
        ease:Expo.easeInOut

    })
    t1.to('#boxelem',{
        y:'0',
        duration:1.5,
        stagger:0.2,
        opacity:0.7


    })
}

    
document.querySelectorAll(".ielem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    
    // Initial overflow hidden
    elem.style.overflow = "hidden";
    
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0,
        top: 0,
        left: 0,
        rotate: 0
      });
      
      // Reset overflow to hidden
      elem.style.overflow = "hidden";
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      
      // Turn off overflow
      elem.style.overflow = "visible";
      
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
});



mousefollower();
firstpageanim();
mouseround();
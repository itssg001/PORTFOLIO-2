var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.top = "80px"
}
function closemenu(){
    sidemenu.style.top = "-170px"
}
const page1Head = new SplitType(".page1head");
function animationPage1(){
    gsap.to(".page1  .page1head .char",{
        y:0,
        delay:0.1,
        duration:0.1,
        stagger:0.05
    })
    gsap.from(".page1 .right-col img",{
        y:150,
        opacity:0,
        delay:0.1,
        duration:0.3,
    })
}
animationPage1()
function animationPage2(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page2",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.4,
        scrollTrigger:{
            trigger:".page2"
        }
    })
}
animationPage2();
function animationPage3(){
    const page3Head = new SplitType(".page3head")
    
    gsap.to(".page3 .page3head .char",{
        y:0,
        delay:0.2,
        duration:0.3,
        stagger:0.05,
        scrollTrigger:{
            trigger:".page3"
        }
    })
    gsap.from(".page3 .first-ex",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.4,
        stagger:0.5,
        scrollTrigger:{
            trigger:".page3 .first-ex"
        }
    })
}
animationPage3()   
function animationPage4(){
    const page4head = new SplitType(".page4head");
    gsap.to(".page4 .page4head .char",{
        y:0,
        delay:0.1,
        duration:0.2,
        stagger:0.05,
        scrollTrigger:{
            trigger:".page4"
        }
    })
    gsap.from(".page4 .education",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.3,
        stagger:0.5,
        scrollTrigger:{
            trigger:".page4"
        }
    })
}
animationPage4();
const footerHead = new SplitType(".footerhead");
function animationFooter(){
    gsap.registerPlugin(ScrollTrigger);
  gsap.to(".footer .left-col .footerhead .char",{
    y:0,
    delay:0.1,
    duration:0.1,
    stagger:0.05,
    scrollTrigger:{
      trigger:".footer .left-col"
    }
  })
  gsap.from(".footer .right-col a",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".footer .right-col"
      }
  })
  document.querySelector(".footer .email").addEventListener("mouseenter",function(){
    gsap.to(".footer .email",{
        transform:"scale(0.90)"
    })
  })
  document.querySelector(".footer .email").addEventListener("mouseleave",function(){
    gsap.to(".footer .email",{
        transform:"scale(1)"
    })
  })
  document.querySelector(".footer .github").addEventListener("mouseenter",function(){
    gsap.to(".footer .github",{
        transform:"scale(0.90)"
    })
  })
  document.querySelector(".footer .github").addEventListener("mouseleave",function(){
    gsap.to(".footer .github",{
        transform:"scale(1)"
    })
  })
  document.querySelector(".footer .twitter").addEventListener("mouseenter",function(){
    gsap.to(".footer .twitter",{
        transform:"scale(0.90)"
    })
  })
  document.querySelector(".footer .twitter").addEventListener("mouseleave",function(){
    gsap.to(".footer .twitter",{
        transform:"scale(1)"
    })
  })
  document.querySelector(".footer .linkedin").addEventListener("mouseenter",function(){
    gsap.to(".footer .linkedin",{
        transform:"scale(0.90)"
    })
  })
  document.querySelector(".footer .linkedin").addEventListener("mouseleave",function(){
    gsap.to(".footer .linkedin",{
        transform:"scale(1)"
    })
  })
}
animationFooter()
   
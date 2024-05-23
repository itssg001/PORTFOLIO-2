var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.top = "80px"
}
function closemenu(){
    sidemenu.style.top = "-170px"
}
// cursor animation
document.addEventListener('mousemove',function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y
    })
})
document.querySelector(".page1").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform:"translate(-50%, -50%) scale(1)"
    })
})
document.querySelector(".page1").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        transform:"translate(-50%, -50%) scale(0)"
    })
})
const page1Head = new SplitType(".page1-head");
const paeg1SubHead = new SplitType(".page1_sub-head");
function animationPage1(){
    gsap.to(".page1 .page1-head .char",{
        y:0,
        delay:0.01,
        duration:0.01,
        stagger:0.05,
        
    })
    gsap.to(".page1 .page1_sub-head .char",{
        x:8,
        delay:0.01,
        duration:0.02,
        stagger:0.05

    })
    gsap.from(".page1 .right-col .resume-btn",{
        x:-40,
        delay:0.1,
        duration:0.4,
        stagger:0.05
    })
    gsap.from(".page1 .right-col .projects-btn",{
        x:-160,
        delay:0.4,
        duration:0.4,
        stagger:0.05
    })
}
animationPage1()
 function animationPage2(){
    document.querySelector(".about-wrapper").addEventListener("mouseenter",function(){
    gsap.to(".about-wrapper",{
        transform:"scale(0.97)"
    })    
    })
    document.querySelector(".about-wrapper").addEventListener("mouseleave",function(){
        gsap.to(".about-wrapper",{
            transform:"scale(1)"
        })    
        })
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page2 .about-wrapper",{
    y:100,
    opacity:0,
    delay:0.4,
    duration:0.4,
    scrollTrigger:{
        trigger:".page2",
    }
}) 
}
animationPage2()
 function animationPage3(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page3 .left-col",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.3,
        scrollTrigger:{
            trigger:".page3"
        }
    })
    document.querySelector(".page3 .right-col").addEventListener("mouseenter",function(){
        gsap.to(".page3 .right-col",{
            transform:"scale(0.96)"
        })
    })
    document.querySelector(".page3 .right-col").addEventListener("mouseleave",function(){
        gsap.to(".page3 .right-col",{
            transform:"scale(1)"
        })
    })
    gsap.from(".page3 .right-col",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.3,
        scrollTrigger:{
            trigger:".page3"
        }
    })
 }
 animationPage3()
 function animationPage4(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page4 .design_tech",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.3,
        scrollTrigger:{
            trigger:".page4"
        }
    })
    gsap.from(".page4 .ui_ux",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.5,
        scrollTrigger:{
            trigger:".page4"
        }
    })
    gsap.from(".page4 .frontend",{
        y:100,
        opacity:0,
        delay:0.6,
        duration:0.7,
        scrollTrigger:{
            trigger:".page4"
        }
    })
}
animationPage4();
function animationPage5(){
    gsap.registerPlugin(ScrollTrigger);
    document.querySelector(".page5 .project-1").addEventListener("mouseenter",function(){
        gsap.to(".page5 .project-1",{
            transform:"scale(0.93)"
        })
    })
    document.querySelector(".page5 .project-1").addEventListener("mouseleave",function(){
        gsap.to(".page5 .project-1",{
            transform:"scale(1)"
        })
    })
    document.querySelector(".page5 .project-2").addEventListener("mouseenter",function(){
        gsap.to(".page5 .project-2",{
            transform:"scale(0.93)"
        })
    })
    document.querySelector(".page5 .project-2").addEventListener("mouseleave",function(){
        gsap.to(".page5 .project-2",{
            transform:"scale(1)"
        })
    })
    gsap.from(".page5 .project-1",{
        y:110,
        opacity:0,
        delay:0.2,
        duration:0.3,
        scrollTrigger:{
            trigger:".page5 .project-1"
        }
    })
    gsap.from(".page5 .project-2",{
        y:110,
        opacity:0,
        delay:0.2,
        duration:0.3,
        scrollTrigger:{
            trigger:".page5 .project-2"
        }
    })
    document.querySelector(".page5 .project_page_link").addEventListener("mouseenter",function(){
        gsap.to(".page5 .project_page_link",{
            transform:"scale(0.92)"
        })
    })
    document.querySelector(".page5 .project_page_link").addEventListener("mouseleave",function(){
        gsap.to(".page5 .project_page_link",{
            transform:"scale(1)"
        })
    })
    gsap.from(".page5 .project_page_link",{
        y:100,
        opacity:0,
        delay:0.1,
        duration:0.3,
        scrollTrigger:{
            trigger:".page5 .project_page_link"
        }
    })
}
animationPage5();

const footerHead = new SplitType(".footerhead");
function animationFooter(){
    gsap.registerPlugin(ScrollTrigger);
  gsap.to(".footer .left-col .footerhead .char",{
    y:0,
    delay:0.1,
    duration:0.1,
    stagger:0.05,
    scrollTrigger:{
      trigger:".footer"
    }
  })
  gsap.from(".footer .right-col a",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".footer"
      }
  })
  
  document.querySelector(".footer .email").addEventListener("mouseenter",function(){
    gsap.to(".footer .email",{
        transform:"scale(0.90)"
    })
    gsap.to(".footer .onhover_msg-email",{
        display:"block"
    })
    
  })
  document.querySelector(".footer .email").addEventListener("mouseleave",function(){
    gsap.to(".footer .email",{
        transform:"scale(1)",
        
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
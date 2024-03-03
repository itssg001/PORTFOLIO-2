var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.top = "80px"
}
function closemenu(){
    sidemenu.style.top = "-170px"
}
function animationConatctPage(){
  const contactHead = new SplitType(".contacthead");
  const contactSubHead = new SplitType(".contactsubhead");
  gsap.to(".contact_heading .contacthead .char",{
    y:0,
    delay:0.1,
    duration:0.2,
    stagger:0.05
  })
  gsap.to(".contact_heading .contactsubhead .char",{
    y:0,
    delay:0.1,
    duration:0.2,
    stagger:0.05
  })
  gsap.from(".page1 .get_in_touch",{
    y:100,
    opacity:0,
    delay:0.3,
    duration:0.5
  })
  gsap.from(".page1 .right-col",{
    y:100,
    opacity:0,
    delay:0.4,
    duration:0.6,
    scrollTrigger:{
        trigger:".right-col"
    }
  })
}  
animationConatctPage()
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
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.top = "80px"
}
function closemenu(){
    sidemenu.style.top = "-170px"
}
function animationMyWorkHead(){
    const myWorkHead = new SplitType(".myworkhead");
    const myWorkSubHead = new SplitType(".myworksub-head") 
    gsap.to(".my-work_heading .myworkhead .char",{
        y:0,
        delay:0.1,
        duration:0.2,
        stagger:0.05
    })
    gsap.to(".my-work_heading .myworksub-head .char",{
        y:0,
        delay:0.1,
        duration:0.2,
        stagger:0.05
    })
}
animationMyWorkHead();
function animationMyworkPage(){
    gsap.registerPlugin(ScrollTrigger);
gsap.from(".my-work_page .projectcard1",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.6
})
gsap.from(".my-work_page .projectcard2",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.6
})
gsap.from(".my-work_page .projectcard3",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.6,
    scrollTrigger:{
        trigger:".projectcard3"
    }
})
gsap.from(".my-work_page .projectcard4",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.6,
    scrollTrigger:{
        trigger:".projectcard3"
    }
})
document.querySelector(".my-work_page .projectcard1").addEventListener("mouseenter",function(){
    gsap.to(".projectcard1",{
        transform:"scale(0.96)"
    })
})
document.querySelector(".my-work_page .projectcard1").addEventListener("mouseleave",function(){
    gsap.to(".projectcard1",{
        transform:"scale(1)"
    })
})
document.querySelector(".my-work_page .projectcard2").addEventListener("mouseenter",function(){
    gsap.to(".projectcard2",{
        transform:"scale(0.96)"
    })
})
document.querySelector(".my-work_page .projectcard2").addEventListener("mouseleave",function(){
    gsap.to(".projectcard2",{
        transform:"scale(1)"
    })
})
document.querySelector(".my-work_page .projectcard3").addEventListener("mouseenter",function(){
    gsap.to(".projectcard3",{
        transform:"scale(0.96)"
    })
})
document.querySelector(".my-work_page .projectcard3").addEventListener("mouseleave",function(){
    gsap.to(".projectcard3",{
        transform:"scale(1)"
    })
})
document.querySelector(".my-work_page .projectcard4").addEventListener("mouseenter",function(){
    gsap.to(".projectcard4",{
        transform:"scale(0.96)"
    })
})
document.querySelector(".my-work_page .projectcard4").addEventListener("mouseleave",function(){
    gsap.to(".projectcard4",{
        transform:"scale(1)"
    })
})
}
animationMyworkPage();
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
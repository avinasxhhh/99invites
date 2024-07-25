function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set ScrollTrigger proxy methods for Locomotive Scroll
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and update Locomotive Scroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}


function menu() {
    const menu = document.getElementById('nav');

    let isOpen = false;

    menu.addEventListener('click', () => {
        if (isOpen) {
            gsap.to(".menuanim1", {
                '--clip': "140%",
                ease: Power2,
                duration: 1
            })
            gsap.to(".menuanim2", {
                '--clip': "140%",
                ease: Power2,
                duration: 1,
                delay: .5
            })
        } else {
            gsap.to(".menuanim1", {
                '--clip': "0%",
                ease: Power2,
                duration: 1,
                delay: .5
            })
            gsap.to(".menuanim2", {
                '--clip': "0%",
                ease: Power2,
                duration: 1,

            })
        }
        isOpen = !isOpen;
    });


    var frame1 = document.querySelector(".menu-text1")
    var frame2 = document.querySelector(".menu-text2")
    var frame3 = document.querySelector(".menu-text3")
    var frame4 = document.querySelector(".menu-text4")
    var frame5 = document.querySelector(".menu-text5")
    var frame6 = document.querySelector(".menu-text6")

    frame1.addEventListener("mousemove", function (dets) {
        gsap.to("#text", {
            duration: .3,
            y: "-5vw"
        })
    })
    frame1.addEventListener("mouseleave", function (dets) {
        gsap.to("#text", {
            duration: .3,
            y: 0
        })
    })

    frame2.addEventListener("mousemove", function (dets) {
        gsap.to("#text2", {
            duration: .3,
            y: "-5vw"
        })
    })
    frame2.addEventListener("mouseleave", function (dets) {
        gsap.to("#text2", {
            duration: .3,
            y: 0
        })
    })

    frame3.addEventListener("mousemove", function (dets) {
        gsap.to("#text3", {
            duration: .3,
            y: "-5vw"
        })
    })
    frame3.addEventListener("mouseleave", function (dets) {
        gsap.to("#text3", {
            duration: .3,
            y: 0
        })
    })

    frame4.addEventListener("mousemove", function (dets) {
        gsap.to("#text4", {
            duration: .3,
            y: "-5vw"
        })
    })
    frame4.addEventListener("mouseleave", function (dets) {
        gsap.to("#text4", {
            duration: .3,
            y: 0
        })
    })

    frame5.addEventListener("mousemove", function (dets) {
        gsap.to("#text5", {
            duration: .3,
            y: "-5vw"
        })
    })
    frame5.addEventListener("mouseleave", function (dets) {
        gsap.to("#text5", {
            duration: .3,
            y: 0
        })
    })

    frame6.addEventListener("mousemove", function (dets) {
        gsap.to("#text6", {
            duration: .3,
            y: "-5vw"
        })
    })
    frame6.addEventListener("mouseleave", function (dets) {
        gsap.to("#text6", {
            duration: .3,
            y: 0
        })
    })
}
menu();

function loader() {


    var tl = gsap.timeline()

    tl.to(".loader .lod", {
        delay: 1,
    })

    tl.to(".loader .lod", {
        display: "none"
    })
    tl.to(".loadbg", {
        y: "-200vh",
        duration: 1.5,
        ease: "expo.out",
    })

    tl.to(".loadbg", {
        display: "none"
    })


}

loader()

function headingsAnim() {

    gsap.from(".foot-hed  h1 span", 2, {
        scrollTrigger: {
            trigger: ".foot-hed ",
            start: "top 200%",
            end: "bottom 70%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });
    gsap.from(".foot-hed  p", 2.5, {
        scrollTrigger: {
            trigger: ".foot-hed ",
            start: "top 200%",
            end: "bottom 70%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });
    gsap.from(".hed h1 span", 2, {
        scrollTrigger: {
            trigger: ".hed",
            start: "top 170%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });
    gsap.from(".hed p", 2.5, {
        scrollTrigger: {
            trigger: ".hed",
            start: "top 150%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });
    gsap.from(".hedpri h1 span", 2, {
        scrollTrigger: {
            trigger: ".hedpri",
            start: "top 170%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });
    gsap.from(".hedfaq h1 span", 2, {
        scrollTrigger: {
            trigger: ".hedfaq",
            start: "top 150%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });
    gsap.from(".hednoti2 h1 span", 2, {
        scrollTrigger: {
            trigger: ".hednoti2",
            start: "top 150%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });

    gsap.from(".hednoti h1 span", 2, {
        scrollTrigger: {
            trigger: ".hednoti",
            start: "top 150%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });

    gsap.from(".mohed h1 span", 2, {
        scrollTrigger: {
            trigger: ".mohed",
            start: "top 150%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });

    gsap.from(".slidhed  h1 span", 2, {
        scrollTrigger: {
            trigger: ".slidhed",
            start: "top 150%",
            end: "bottom 10%",
            // markers: true,
            // pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
    });


    var tl = gsap.timeline()
    tl.from(".h-line", {
        x: -700,
        duration: 2.5,
        ease: "expo.out",
    }, "a")
    tl.from(".v-line", {
        y: -700,
        duration: 2.5,
        ease: "expo.out",
    }, "a")


}

headingsAnim();



Shery.mouseFollower();
Shery.makeMagnet(".magnet");


function slider() {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    const listHTML = document.querySelector('.carousel .list');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');

    nextButton.addEventListener('click', () => showSlider('next'));
    prevButton.addEventListener('click', () => showSlider('prev'));

    let unAcceptClick;
    const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';

        carousel.classList.remove('next', 'prev');
        const items = document.querySelectorAll('.carousel .list .item');

        if (type === 'next') {
            listHTML.appendChild(items[0]);
            carousel.classList.add('next');
        } else {
            listHTML.prepend(items[items.length - 1]);
            carousel.classList.add('prev');
        }

        clearTimeout(unAcceptClick);
        unAcceptClick = setTimeout(() => {
            nextButton.style.pointerEvents = 'auto';
            prevButton.style.pointerEvents = 'auto';
        }, 2000);
    };

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            carousel.classList.remove('next', 'prev');
            carousel.classList.add('showDetail');
        });
    });

    backButton.addEventListener('click', () => {
        carousel.classList.remove('showDetail');
    });
}
slider();

// function cool() {

//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".cool",
//             start: "top 20%",
//             end: "top 0",
//             //   markers: true,
//             scrub: 2,
//             pin: true
//         }
//     })

//     tl.to(".cool h1", {
//         fontSize: 250,
//     }, "a")


//     tl.to(".videocool", {
//         y: -300,

//     })
//     //   tl.to(".cool img", {
//     //     width: "90%"

//     //   })
// }
// cool();

function MobileAnimations() {

    gsap.to(".mobile", {
        scrollTrigger: {
            trigger: ".top",
            start: "top top",
            end: "bottom -460%",
            // markers: true,   
            pin: true,
            scrub: 5,
        },
    });

    // Prewedding

    gsap.from(".preicon", {
        scrollTrigger: {
            trigger: ".PreIcon",
            start: "top 20%",
            end: "bottom -30%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".heading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".heading",
            start: "top 30%",
            end: "bottom -60%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".line span", 1.8, {
        scrollTrigger: {
            trigger: ".prePara",
            start: "top 70%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // Profile

    gsap.from(".groom", {
        scrollTrigger: {
            trigger: ".profilegroom",
            start: "top 40%",
            end: "bottom 10%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".bride", {
        scrollTrigger: {
            trigger: ".profilebride",
            start: "top 60%",
            end: "bottom 20%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".profileheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".profileheading",
            start: "top 30%",
            end: "bottom -110%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".proline span", 1.8, {
        scrollTrigger: {
            trigger: ".ProfilePara",
            start: "top 40%",
            end: "bottom -70%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".Proimg1 img", 1.2, {
        scrollTrigger: {
            trigger: ".Proimg1",
            start: "top 20%",
            end: "bottom -50%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        rotation: 50,
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".Proimg2 img", 1.2, {
        scrollTrigger: {
            trigger: ".Proimg2",
            start: "top 60%",
            end: "bottom -40%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // Blessings

    gsap.from(".bleicon", {
        scrollTrigger: {
            trigger: ".BleIcon",
            start: "top 50%",
            end: "bottom 10%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".Bleheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".Bleheading",
            start: "top 40%",
            end: "bottom -100%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".blePara span", 1.8, {
        scrollTrigger: {
            trigger: ".blePara",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // WarmRegards

    gsap.from(".warmicon", {
        scrollTrigger: {
            trigger: ".WarmIcon",
            start: "top 50%",
            end: "bottom -20%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".Warmheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".Warmheading",
            start: "top 40%",
            end: "bottom -130%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".warmline span", 1.8, {
        scrollTrigger: {
            trigger: ".warmPara",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".warmimg1 img", 1.2, {
        scrollTrigger: {
            trigger: ".warmimg1",
            start: "top 30%",
            end: "bottom -50%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        rotation: 50,
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".warmimg2 img", 1.2, {
        scrollTrigger: {
            trigger: ".warmimg2",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // Moments

    gsap.from(".moicon", {
        scrollTrigger: {
            trigger: ".MoIcon",
            start: "top 50%",
            end: "bottom -40%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".moheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".moheading",
            start: "top 40%",
            end: "bottom -150%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".moline span", 1.8, {
        scrollTrigger: {
            trigger: ".moPara",
            start: "top 60%",
            end: "bottom -30%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // Time

    gsap.from(".timeicon", {
        scrollTrigger: {
            trigger: ".TimeIcon",
            start: "top 50%",
            end: "bottom 10%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".timeheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".timeheading",
            start: "top 40%",
            end: "bottom -130%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".timeline span", 1.8, {
        scrollTrigger: {
            trigger: ".TimePara",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // PhotoShoot

    gsap.from(".shooticon", {
        scrollTrigger: {
            trigger: ".ShootIcon",
            start: "top 50%",
            end: "bottom 10%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".shootheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".shootheading",
            start: "top 40%",
            end: "bottom -100%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".shootline span", 1.8, {
        scrollTrigger: {
            trigger: ".ShootPara",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".shootimg1 img", 1.2, {
        scrollTrigger: {
            trigger: ".shootimg1",
            start: "top 70%",
            end: "bottom -50%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        rotation: 50,
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".shootimg2 img", 1.2, {
        scrollTrigger: {
            trigger: ".shootimg2",
            start: "top 20%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".shootimg3 img", 1.2, {
        scrollTrigger: {
            trigger: ".shootimg3",
            start: "top 30%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });
    gsap.from(".shootimg4 img", 1.2, {
        scrollTrigger: {
            trigger: ".shootimg4",
            start: "top 80%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });



    // Location

    gsap.from(".locaicon", {
        scrollTrigger: {
            trigger: ".LocaIcon",
            start: "top 50%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".locaheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".locaheading",
            start: "top 40%",
            end: "bottom -100%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".locationimg1 img", 1.2, {
        scrollTrigger: {
            trigger: ".locationimg1",
            start: "top 70%",
            end: "bottom 10%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        rotation: 50,
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".locationimg2 img", 1.2, {
        scrollTrigger: {
            trigger: ".locationimg2",
            start: "top 20%",
            end: "bottom -40%",
            // markers: true,
            pin: true,
            scrub: 0.5,
        },
        scale: 0,
        // ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    gsap.from(".localine span", 1.8, {
        scrollTrigger: {
            trigger: ".LocaPara",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });

    // contact

    gsap.from(".conicon", {
        scrollTrigger: {
            trigger: ".ConIcon",
            start: "top 50%",
            end: "bottom 0%",
            // markers: true,
            pin: true,
            scrub: 0.9,
        },
        duration: 3,
        ease: "elastic.out",
        scale: 0,
        skewY: 7,
        stagger: {
            amount: 0.1
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".conheading h1 span", 1.8, {
        scrollTrigger: {
            trigger: ".conheading",
            start: "top 40%",
            end: "bottom -100%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 300,
        stagger: 0.2,
        duration: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });


    gsap.from(".conline span", 1.8, {
        scrollTrigger: {
            trigger: ".conPara",
            start: "top 60%",
            end: "bottom -10%",
            // markers: true,
            pin: true,
            scrub: 2,
        },
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        yoyo: true,
        repeat: 1
    });
}

MobileAnimations();

function FAQ() {
    document.addEventListener('DOMContentLoaded', () => {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const content = item.querySelector('.faq-content');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = 0;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                item.classList.toggle('active');
            });
        });
    });
}

FAQ();


function reviews() {
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Rcont",
            start: "top bottom",
            end: "bottom top",
            // markers: true,
            scrub: 2
        },
    })

    t1.to(".up", {
        yPercent: 30,
        duration: 7
    }, 'a')
    t1.to(".down", {
        yPercent: -30,
        duration: 7
    }, 'a')
}
reviews();

function botton() {
    var slibtn1 = document.querySelector(".slibtn1")
    var slibtn2 = document.querySelector(".slibtn2")
    var slibtn3 = document.querySelector(".slibtn3")
    var slibtn4 = document.querySelector(".slibtn4")
    var slibtn5 = document.querySelector(".slibtn5")
    var slibtn6 = document.querySelector(".slibtn6")
    var slibtn7 = document.querySelector(".slibtn7")
    var button = document.querySelector(".buttonn")
    var pbutton = document.querySelector(".pbuttonn")
    var coolbtn = document.querySelector(".coolbtn")

    slibtn1.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn1.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    slibtn2.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn2.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    slibtn3.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn3.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    slibtn4.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn4.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    slibtn5.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn5.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    slibtn6.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn6.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    slibtn7.addEventListener("mousemove", function (dets) {
        gsap.to(".slibt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    slibtn7.addEventListener("mouseleave", function (dets) {
        gsap.to(".slibt", {
            y: 0,
            duration: .2,
        })
    })
    button.addEventListener("mousemove", function (dets) {
        gsap.to(".butt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    button.addEventListener("mouseleave", function (dets) {
        gsap.to(".butt", {
            y: 0,
            duration: .2,
        })
    })
    pbutton.addEventListener("mousemove", function (dets) {
        gsap.to(".pbutt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    pbutton.addEventListener("mouseleave", function (dets) {
        gsap.to(".pbutt", {
            y: 0,
            duration: .2,
        })
    })
    coolbtn.addEventListener("mousemove", function (dets) {
        gsap.to(".coolbt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    coolbtn.addEventListener("mouseleave", function (dets) {
        gsap.to(".coolbt", {
            y: 0,
            duration: .2,
        })
    })


}

botton();



loco();







$(document).ready(function(){

    $('.owl-one').owlCarousel({
        stagePadding: 50,
        loop:true,
        Autoplay:true,
        autoplay : 500,
        margin:10,
        nav:true,
        navContainer: "#myNavs",
        dots: false,
        navText: ['Prev', 'Next'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.owl-two').owlCarousel({
        loop:true,
        Autoplay:true,
        autoplay : 500,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // hero
    var tlHeroController = new ScrollMagic.Controller()

    var tlHero = gsap.timeline();

    tlHero.fromTo(".hero--bg-image", {autoAlpha:0, transformOrigin:"right", scaleX:0},{autoAlpha:1, scaleX:1, duration:1.5})
    tlHero.fromTo(".half-bg-colour", {autoAlpha:0, transformOrigin:"left", scaleX:0}, {autoAlpha:1, scaleX:1}, "=+0.2")
    tlHero.fromTo(".hero__content", {autoAlpha:0, y:-40}, {autoAlpha:1, y:0, duration:2}, "=+0.2")


    var tlHeroScene = new ScrollMagic.Scene({
        triggerElement: "#hero-js",
        triggerHook: 0.8,
        reverse: true
    })

        .setTween(tlHero)
        .addTo(tlHeroController)


    // down-up-js
    $(".down-up-js").each( function(){

        var downUpJsController = new ScrollMagic.Controller()

        var downUpJsScene = new ScrollMagic.Scene({
            triggerElement:this,
            triggerHook: 0.8
        })
            .setTween(gsap.fromTo(this, {autoAlpha:0, y:30}, {autoAlpha:1, y:0, duration:2.5}))
            .addTo(downUpJsController)

    })

    // renting rv
    var rentingRvController = new ScrollMagic.Controller()

    var rentingRvTl = gsap.timeline();

    rentingRvTl.fromTo("#renting-rv", {autoAlpha:0, y:30}, {autoAlpha:1, y:0, duration:1.5})
    rentingRvTl.fromTo(".rv-number", {autoAlpha:0}, {autoAlpha:1, stagger:0.8}, "=+0.2")


    var rentingRvScene = new ScrollMagic.Scene({
        triggerElement: "#renting-rv",
        triggerHook: 0.8
    })

        .setTween(rentingRvTl) //addtween for timeline. setTween for single
        .addTo(rentingRvController)


    // discovery
    var discoveryController = new ScrollMagic.Controller()

    var discoveryScene = new ScrollMagic.Scene({
        triggerElement: "#discovery",
        triggerHook: 0.9
    })

        .setTween(gsap.fromTo("#discovery .item", {autoAlpha:0, transformOrigin:"top", scaleY:0}, {autoAlpha:1, stagger:0.4, scaleY:1}))

        .addTo(discoveryController)

});



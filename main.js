// Sticky Navigation
let navbar = $(".navbar")

$(window).scroll(function () {
   let oTop = $(".section-2").offset().top - window.innerHeight

   if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky")
   } else {
      navbar.removeClass("sticky")
   }
})

// Number Animation
let numberAnimation = selector => {
   $(selector).each(function () {
      $(this).animate({
         Counter: $(this).text()
      }, {
            duration: 2000,

            step: function (value) {
               $(this).text(Math.ceil(value))
            }
         })
         
   })
}

let a = 0
$(window).scroll(function () {
   let oTop = $(".numbers").offset().top - window.innerHeight

   if (a == 0 && $(window).scrollTop() >= oTop) {
      a++
      numberAnimation(".rect > h1")
   }
})
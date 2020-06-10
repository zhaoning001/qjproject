$(function () {

    $('#dowebok').fullpage({
        verticalCentered: true,
        resize: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'foot'],
        scrollOverflow: false,
        scrollingSpeed: 1000, //速度
        scrollBar: false,
       
        afterLoad: function (anchorLink, index) {
            console.log(index)
            if(index == 2){
            //    $(".qh-two").find("h1").removeClass("fadeOutDown").addClass("fadeInDown")
            //    $(".qh-two").find("h2").removeClass("fadeOutDown").addClass("fadeInLeft")
            //    $(".qh-two").find("p").removeClass("fadeOutDown").addClass("fadeInRight")
            }else if(index==3){
              $(".secthree-right li").removeClass("fadeOutUp").addClass("fadeInUp")
            }
            // if(index == 2){$('.counter').countUp({time:1000});}
            // if(index == 8){
            //     $('.mbox8Bg').addClass("cut");
            // }
            // if(index ==9){
            //     $("#navPage").addClass("noactive");
            // }
        },
        onLeave: function (index, nextIndex, direction) {
            if(index == 2){
                // $(".qh-two").find("h1").removeClass("fadeInDown").addClass("fadeOutDown")
                // $(".qh-two").find("h2").removeClass("fadeInLeft").addClass("fadeOutDown")
                // $(".qh-two").find("p").removeClass("fadeInRight").addClass("fadeOutDown")
             }else if(index==3){
                $(".secthree-right li").removeClass("fadeInUp").addClass("fadeOutUp")
            }
        }
    });
    setInterval(function() {
         
    },2000)
})
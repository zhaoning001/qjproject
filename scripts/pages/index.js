$(function() {
    $('#dowebok').fullpage({
        verticalCentered:true,
        resize:false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5','foot'],
        scrollOverflow: false,
        scrollingSpeed: 1000, //速度
        afterLoad: function(anchorLink, index){
            // $("#fp-nav ul li").eq(index-1).addClass("active");
            // if(index != 1){
            //     $('header').addClass("active");
            // }
            // if(index == 2){$('.counter').countUp({time:1000});}
            // if(index == 8){
            //     $('.mbox8Bg').addClass("cut");
            // }
            // if(index ==9){
            //     $("#navPage").addClass("noactive");
            // }
        },
        onLeave: function(index, nextIndex, direction){
            // if(index != 1){
            //     $('header').removeClass("active");
            // }
            // if(index == 8 && direction == 'up'){
            //     $('.mbox8Bg').removeClass("cut");
            // }
            // if(index ==9){
            //     $("#navPage").removeClass("noactive");
            // }
        }
    });
})
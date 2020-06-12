$(function () {
	$(".nav-moblie").click(function() {
		if($(this).hasClass("navmo-active")) {
			$(this).removeClass("navmo-active")
			$('.neirong-bd').removeClass("neirong-show")
		} else {
			$(this).addClass("navmo-active")
			$('.neirong-bd').addClass("neirong-show")
		}
	})
    var flag = 0;
	$(".liac_smziy").click(function() {
		if(flag == 0) {
			$(".smnav_xial").animate({
				height: "185px"
			}, 500)
			flag = 1
		} else {
			$(".smnav_xial").animate({
				height: "0"
			}, 500)
			flag = 0
		}
	})
	// 轮播
	var lbflag =0 
	function lunb() {
		lbflag++;
		var num=-lbflag*25+"%"
		if(lbflag==3){
			$(".lunsy li").eq(0).addClass("active").siblings().removeClass("active")
		}
		$(".banner-box").css({"transform":"translateX("+ num +")","transition-duration":'1s'})
		$(".lunsy li").eq(lbflag).addClass("active").siblings().removeClass("active")
		$(".one-wz1").removeClass("fadeInDown")
		$(".one-wz1").eq(lbflag).addClass("fadeInDown")
	}
	setInterval(function() {
		lunb(3)
	},4000);
	$(".banner-box").on("transitionend",function() {
		if(lbflag>=3){
			lbflag=0
			$(".banner-box").css({"transform":"translateX(0%)","transition-duration":'0s'})	
		}
	})
})
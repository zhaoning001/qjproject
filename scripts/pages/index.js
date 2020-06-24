$(function () {

   
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
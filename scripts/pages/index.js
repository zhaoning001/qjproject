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
})
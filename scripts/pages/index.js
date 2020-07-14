$(function () {

   
	// 轮播
	var lbflag =0 
	function lunb() {
		lbflag++;
		var num=-lbflag*25+"%"
		if(lbflag==3){
			$(".lunsy li").eq(0).addClass("active").siblings().removeClass("active")
		}
		setTimeout(function(){
			$(".banner-box").css({"transform":"translateX("+ num +")","transition-duration":'1s'})
			$(".lunsy li").eq(lbflag).addClass("active").siblings().removeClass("active")
			$(".one-wz1").removeClass("fadeInDown")
			$(".one-wz1").eq(lbflag).addClass("fadeInDown")
		},1000)
	}
	setInterval(function() {
		lunb(3)
	},8000);
	$(".banner-box").on("transitionend",function() {
		if(lbflag>=3){
			lbflag=0
			$(".banner-box").css({"transform":"translateX(0%)","transition-duration":'0s'})	
		}
	})
	var casetime=0.1
    uitll.getdata("/admin/front/cases?type=manage&page=1&limit=9", "get", "", "", "false", "true", function(data) {
	   $.each(data.data,function(index,val) {
		casetime=+0.1;
		var litemplate='   <li class="wow fadeInUp animated"  data-wow-offset="10" data-wow-delay='+ casetime +"s"+'>'+
		'                    <a href="/pages/casedetali.html?id='+ val.id +'">'+
		'                        <div class="works-bg" style="background-image:url('+val.path+');"></div>'+
		'                        <p>'+val.title+'</p>'+
		'                    </a>'+
		'                </li>';
		$(".secthree-right ul").append(litemplate)
	   })
		
	}) 
	var dynamictime=0.1
    uitll.getdata("/admin/front/live?type=live&page=1&limit=10", "get", "", "", "false", "true", function(data) {
	   $.each(data.data,function(index,val) {
		var month=val.date.substring(0,10)
		dynamictime=+0.1;
		var litemplate=' <li class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow flipInY animated" data-wow-delay="0.1s"'+
		'                    style="background-image: url('+ val.path +');">'+
		'                    <div class="nes-div">'+
		'                        <div class="nes-divnrbox">'+
		'                            <h1>'+ val.title +'</h1>'+
		'                            <span>'+ month +'</span>'+
		'                            <em></em>'+
		'                            <p>'+ val.content +'</p>'+
		'                        </div>'+
		'                    </div>'+
		'                </li>';
		var lisemplat=$(litemplate).clone()
		if(index==1 || index==3){
			lisemplat.find(".nes-div").addClass("nes-divtwo")
		}else if(index==2 || index==5){
			lisemplat.find(".nes-div").addClass("fl")
		}else{
			lisemplat.find(".nes-div").addClass("fr")
		}
		$(".qh-three ul").append(lisemplat)
	   })
		
	}) 
	if(sessionStorage.getItem("suspension") == null){
		setTimeout(function(){
			$(".suspension").show();
			sessionStorage.setItem("suspension", "true");
	
		},10000)
	}
	
	$(".susperclose").click(function(){
		$(".suspension").hide()
	})
	$(".suspension button").click(function(){
		window.open('http://wpa.qq.com/msgrd?v=3&uin=40075537&site=qq&menu=yes')
	})
})
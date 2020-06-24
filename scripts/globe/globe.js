$(function () {
   //    动态头部  
   var toptempleat = ' <div class="nav-listbox">' +
      '            <div class="container">' +
      '                <img src="/themes/images/logo.png" alt="">' +
      '                <ul class="col-lg-6 col-md-7 col-sm-8 hidden-xs navlistul clearfix">' +
      '                    <li> <a href="/"> 首页</a></li>' +
      '                    <li> <a href="/pages/about.html"> 关于</a></li>' +
      '                    <li> <a href="javascript:;"> 服务</a><ul class="nav-xial"><li><a href="/pages/servicestation.html"> 品牌网络建设</a></li><li><a href="/pages/servicebrand.html"> 品牌视觉设计</a></li><li><a href="/pages/servicewx.html"> 微信定制开发</a></li><li><a href="/pages/service.html"> 网络营销策划</a></li><li><a href="/pages/servicemark.html"> 知识产权注册</a></li></ul></li>' +
      '                    <li> <a href="javascript:;"> 案例</a><ul class="nav-xial" style="bottom:-87px;"><li><a href="/pages/case.html"> 品牌网站建设</a></li><li><a href="javascript:;"> 品牌视觉设计</a></li></ul></li>' +
      '                    <li> <a href="/pages/dynamic.html"> 动态</a></li>' +
      '                    <li> <a href="/pages/contactus.html"> 联系</a></li>' +
      '                </ul>' +
      '                <div class="nav-moblie visible-xs">' +
      '                    <a href="javascript:;" class="nav_one"></a>' +
      '                    <a href="javascript:;" class="nav_two"></a>' +
      '                    <a href="javascript:;" class="nav_three"></a>' +
      '                </div>' +
      '            </div>' +
      '          ' +
      '        </div>' +
      '        <div class="neirong-bd neirong-hide">' +
      '            <div class="neirongli-bd">' +
      '                <a href="/">首页</a>' +
      '                <a href="/pages/about.html">关于</a>' +
      '                <a href="javascript:;" class="liac_smziy liac_smziy2">服务</a>' +
      '                 <ul class="smnav_xial smnav_xial1">' +
      '                    <li>' +
      '                        <a href="/pages/servicestation.html">品牌网络建设</a>' +
      '                    </li>' +
      '                    <li>' +
      '                        <a href="/pages/servicebrand.html">品牌视觉设计</a>' +
      '                    </li>' +
      '                    <li>' +
      '                        <a href="/pages/servicewx.html">微信定制开发</a>' +
      '                    </li>' +
      '                    <li>' +
      '                        <a href="/pages/service.html">网络营销策划</a>' +
      '                    </li>' +
      '                    <li>' +
      '                        <a href="/pages/servicemark.html">知识产权注册</a>' +
      '                    </li>' +
      '                </ul>' +
      '                <a href="javascript:;" class="liac_smziy liac_smziy1">案例</a>' +
      '                 <ul class="smnav_xial smnav_xial2">' +
      '                    <li>' +
      '                        <a href="/pages/case.html">品牌网站建设</a>' +
      '                    </li>' +
      '                    <li>' +
      '                        <a href="pages/resour_artist.html">品牌视觉设计</a>' +
      '                    </li>' +
      '                </ul>' +

      '                <a href="/pages/dynamic.html">动态</a>' +
      '                <a href="/pages/contactus.html">联系</a>' +
      '            </div>' +
      '        </div> ';
   var temp = $(toptempleat).clone()
   if ($(".nav-listoutbox").data('type') >= 0) {
      console.log(temp.find(".navlistul > li").eq($(".nav-listoutbox").data('type')))
      temp.find(".navlistul > li").eq($(".nav-listoutbox").data('type')).addClass("active")
   }
   $(".nav-listoutbox").append(temp)
   // 动态底部
   var footertemplate = ' <div class="container">' +
      '                <h1 class="wow fadeInUp animated"  data-wow-offset="200" data-wow-delay="0s">青京科技-致力于打造一站式品牌建设推广服务商！</h1>' +
      '                <div class="footer-nrbox row">' +
      '                    <div class="wow footer-list col-lg-3 col-lg-offset-1 col-md-offset-1 col-md-3 col-sm-4 col-xs-9 fadeInUp animated" data-wow-offset="10" data-wow-delay="0.1s">' +
      '                        <h1 style="background-image: url(/themes/images/footer1.png);">电话/TEL</h1>' +
      '                        <span>17600288215(7*24)</span>' +
      '                        <span>15901278749(工作日)</span>' +
      '                    </div>' +
      '                    <div class="wow footer-list col-lg-3 col-lg-offset-1 col-md-offset-1  col-md-3 col-sm-4 col-xs-12 fadeInUp animated"  data-wow-offset="10" data-wow-delay="0.2s">' +
      '                        <h1 style="background-image: url(/themes/images/footer2.png);">QQ咨询/TEL</h1>' +
      '                        <span>40075537（售前）</span>' +
      '                        <span>1491202268（售后）</span>' +
      '                    </div>' +
      '                    <div class="wow footer-list col-lg-3 col-lg-offset-1 col-md-offset-1 col-md-3 col-sm-4 col-xs-12 fadeInUp animated" data-wow-offset="10" data-wow-delay="0.3s">' +
      '                        <h1 style="background-image: url(/themes/images/footer3.png);" class="email">邮箱/E-mail</h1>' +
      '                        <span>40075537@qq.com</span>' +
      '                        <span>1491202268@qq.com</span>' +
      '                    </div> ' +
      '                </div>' +
      '            </div>';

   $(".footer-box").append(footertemplate)
   $(".nav-moblie").click(function () {
      if ($(this).hasClass("navmo-active")) {
         $(this).removeClass("navmo-active")
         $('.neirong-bd').removeClass("neirong-show")
      } else {
         $(this).addClass("navmo-active")
         $('.neirong-bd').addClass("neirong-show")
      }
   })
   var flag = 0;
   $(".liac_smziy2").click(function () {
      if (flag == 0) {
         $(".smnav_xial1").animate({
            height: "185px"
         }, 500)
         flag = 1
      } else {
         $(" .smnav_xial1").animate({
            height: "0"
         }, 500)
         flag = 0
      }
   })
   var flagg = 0
   $(".liac_smziy1").click(function () {
      if (flagg == 0) {
         $(".smnav_xial2").animate({
            height: "185px"
         }, 500)
         flagg = 1
      } else {
         $(".smnav_xial2").animate({
            height: "0"
         }, 500)
         flagg = 0
      }
   })
   $("head").append('<link rel="shortcut icon" href="/themes/images/favicon.png" type="image/x-icon">')
})
$(function() {
    $(".from-box button").click(function(){
        
        var name=$("#username").val();
        var phone=$("#telephone").val();
        var company=$("#commpanyname").val();
        // var address=$("#you-need").val();
        var xq_teat=$("#you-need").val();
          if(name.length==0){
              alert("姓名不能为空")
              return
          }
          if(phone.length==0 || !/^1\d{10}$/.test(phone)){
              alert("请输入合法手机号码！")
              return
          } 
          $(this).text("正在提交中")
          var submitdata={
              "type":"mail",
              "name":name,
              "tel":phone,
              "company":company,
            //   "addr":address,
              "content":xq_teat
          }
          var that=$(this)
          uitll.getdata("/admin/front/contact?", "get", "", submitdata, "false", "true", function(data) {
              alert("提交成功")
              that.text("立即提交")
              $(".from-box  input").val("") 
              $(".from-box  textarea").val("")
         }) 
    })
})
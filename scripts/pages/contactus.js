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
          if(phone.length==0){
              alert("电话不能为空")
              return
          }
          if(company.length==0){
              alert("公司名称不能为空")
              return
          }
        //   if(address.length==0){
        //       alert("公司地址不能为空")
        //       return
        //   }
          if(xq_teat.length==0){
              alert("需求不能为空")
              return
          }
          var submitdata={
              "type":"mail",
              "name":name,
              "tel":phone,
              "company":company,
            //   "addr":address,
              "content":xq_teat
          }
          uitll.getdata("/admin/front/contact?", "get", "", submitdata, "false", "true", function(data) {
              alert("提交成功")
              $(".from-box  input").val("") 
              $(".from-box  textarea").val("")
         }) 
    })
})
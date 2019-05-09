$uname = $("#uname");//用户名
$upwd = $("#upwd");//密码
$(function(){
	//用一个变量接受cookie
		var str = document.cookie;
		
		//分割 慢慢取出cookie
		var str1 = str.split("; ")

		for(var i = 0; i < str1.length; i++) {
		
			var str2 = str1[i].split("=");
			console.log(str2)
			if(str2[0] == "y") { //如果键相等 取出对应的值
				var st = str2[1];
				$("#y").html("当前登陆的用户是:"+st);
					$("#y").css("color","red")
					/*$("#logout").click(function(){
					if(confirm("确认注销吗?")){
						location.href = "index.html";
						$("#y").html("请登录");
					}*/
				/*})*/
					
					
				
				
			};
			if(str2[0] == "m") {
				var st1 = str2[1]
				//console.log(st1); 
			}
			$(".btn").click(function() {
				if(st == $uname.val() && st1 == $upwd.val()) {
					console.log(st)
					alert("登录成功");
					
					
				window.location.href="index.html";
				
				} else {
					alert("登录失败")
				}
			})
			
			
			
			

		}
	$("#remember").change(function() {
		//alert()
		document.cookie = "st=" + $uname.val() ;
		document.cookie = "st1=" + $upwd.val();
		//console.log(res)
		var time = new Date;
		time.setDate(time.getDate() + 1)
	})
	
})

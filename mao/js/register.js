/*点击查号隐藏固定栏和遮罩层*/
	$(".maskCon_anniu_Con2").click(function() {
		$("#maskCon").css("z-index", 999).hide(1, function() {
			$("#mask").css('z-index', 998).hide();
		});
	})
	/*鼠标移入到input框改变边框颜色*/
	$(".regInputMain_middle_a").mouseenter(function() {
		$(this).css("border", "1px solid black")
	})
	$(".regInputMain_middle_a").mouseleave(function() {
		$(this).css("border", "")
	})
	$(".inputDiv1_1_left").mouseenter(function() {
		$(this).css("border", "1px solid black")
		$(".inputDiv1_1_right").css("border-bottom", "1px solid black")
							   .css("border-top", "1px solid black")
							   .css("border-right", "1px solid black")
	})
	$(".inputDiv1_1_left").mouseleave(function() {
		$(this).css("border", "")
		$(".inputDiv1_1_right").css("border", "")
	})
	/*鼠标移入到下一步按钮上改变按钮的背景颜色*/
	$('.regInputMain_middle_bottom').mouseenter(function(){
		$(this).css("background","#BD2C00");
	})
	$('.regInputMain_middle_bottom').mouseleave(function(){
		$(this).css("background","");
	})
	/*鼠标移入到两个注册标签上改变字体颜色*/
	$(".firm").mouseenter(function(){
		$(this).children("a").css("color","red");
	})
	$(".firm").mouseleave(function(){
		$(this).children("a").css("color","#666");
	})
	$(".inter").mouseenter(function(){
		$(this).children("a").css("color","red");
	})
	$(".inter").mouseleave(function(){
		$(this).children("a").css("color","#666");
	})
	/*鼠标移入到最底部的导航中出现下划线*/
	$(".oUl_bottomCon").find("a").mouseenter(function(){
		$(this).css("border-bottom","1px solid black")
	})
	$(".oUl_bottomCon").find("a").mouseleave(function(){
		$(this).css("border-bottom","")
	})
	
	
	
	
	
	/*第一个文本框获焦显示文字*/
	$(".rightInput").focus(function(){
		$(this).val("")
		$qq.html("")
		$qqq.html("");
		$("#rightInput1").show()
						 .css("font-size","10px")
						 .css("color","#E3E4E5");
		$(".inputDiv1_1_right").css("border","1px solid black");
		
	})
	var $qq = $("#qq")//提示语
	var $qqq = $("#qqq")//提示语*/
	var $test = $(".regInputMain_middle_a");//点击按钮进行提示
	$(".rightInput").blur(function(){
		$("#rightInput1").hide()
		$(".inputDiv1_1_right").css("border","");
		//手机号正则
		var reg = /^1[35789]\d{9}$/;
		if($(".rightInput").val() == "") {
			$qq.html("请输入手机号")
			$qq.css("color", "red").css("font-size",12)
		} else if(reg.test($(".rightInput").val())) {
			$qq.html("格式正确")
			$qq.css("color", "gold").css("font-size",12)
			$test.click(function(){
				$(".container").show()
				jigsaw.init(document.getElementById('captcha'), function () {
   				 document.getElementById('msg').innerHTML = '验证成功！'
   					 $("#Account").show();
   					 $(".container").hide()
 				 })
				$qqq.html("请完成验证").css("color","gold");
			})
		} else {
			$qq.html("格式不正确")
			$qq.css("color", "red").css("font-size",12)
			$test.click(function(){
				$qqq.html("请输入手机号").css("color","red");
			})
		}
	})
	$test.click(function(){
		$qqq.html("请输入手机号");
		$qqq.css("font-size",12).css("color","red")
	})
		
	
	
	
	
	
	
	
	
	
	/*显示出隐藏中国*/
	$(".inputDiv1_1_left").click(function(){
		$(".hide_ChinaDiv").toggle();
	})

/*填写用户信息*/
var $s5 = $("#s5")
var $s6 = $("#s6")
var $s7 = $("#s7")
var $text1 = $(".AccInput:eq(0)").find('input');
var $text2 = $(".AccInput:eq(1)").find('input');
var $text3 = $(".AccInput:eq(2)").find('input');
$text1.focus(function(){
	$(".ImportName:eq(0)").show()
	$s5.html("")
})
$text2.focus(function(){
	$(".ImportName:eq(1)").show()
	$s6.html("")
})
$text3.focus(function(){
	$(".ImportName:eq(2)").show()
	$s7.html("")
})
/*失焦*/
$text1.blur(function(){
	$(".ImportName:eq(0)").hide();
	//手机号正则   用户名
		var reg1 = /^1[3578]\d{9}$/;
		
		var reg2 = /[\u4e00-\u9fa50-9a-zA-Z_\-]{4,20}/;
		if($text1.val() == "") {
			$s5.html("不能为空")
			$s5.css("color", "red").css("font-size",12)
		} else if(reg1.test($text1.val())||reg2.test($text1.val())) {
			$s5.html("格式正确").css("font-size",12)
			$s5.css("color", "gold")
		} else {
			$s5.html("格式不正确").css("font-size",12)
			$s5.css("color", "red")
		}
})
$text2.blur(function(){
	$(".ImportName:eq(0)").hide();
	//密码正则
		var reg2 = /^[0-9a-zA-Z]+$/;
		var reg4 = /\s+/;
		if($text2.val() == "") {
			$s6.html("请输入密码")
			$s6.css("color", "red").css("font-size",12)
		} else if($text2.val().length < 8) {
			$s6.html("不少于8位")
			$s6.css("color", "red").css("font-size",12)
		} else if(reg4.test($text2.val())) {
			$s6.html("不能输入空格")
			$s6.css("color", "red").css("font-size",12)
		} else if(reg2.test($text2.val())) {
			$s6.html("格式正确")
			$s6.css("color", "gold").css("font-size",12)
		} else {
			$s6.html("格式不正确")
			$s6.css("color", "red").css("font-size",12)
		}
})
$text3.blur(function(){
	if( $text3.val() == "" ){
		$s7.html("再次输入密码")
		$s7.css("color", "red").css("font-size",12)
	}else if( $text3.val() == $text2.val() ){
		$s7.html("密码一致")
		$s7.css("color", "gold").css("font-size",12)
		/*alert()*/
		$("#Accomp").show()
		$(".AccDiv").click(function(){
			var $t1 = $text1.val();
			var $t2 = $text2.val();
			document.cookie = "y=" + $t1;
			document.cookie = "m=" + $t2;
			window.location.href = "index.html";
			/*$t1.replaceAll(".Cli").children("a").eq(1).html()*/
		})
	}else{
		$s7.html("密码不一致")
		$s7.css("color", "red").css("font-size",12)
	}
})



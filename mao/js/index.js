

	

$(function(){
	xllb("xl1");//顶条下拉列表1234
	xllb("xl2");
	xllb("xl3");
	xllb("xl4");
	function xllb(id){
	var oId = document.getElementById(id);
	//console.log(oId);
	var oDdd = oId.getElementsByTagName("div")[0];
	//console.log(oDdd);
//	var oDdd = $(""+id+" div").eq(0).get(0);
	oId.onmouseenter = function(){
		oId.className = "libg";
		oDdd.style.display = "block";
		oDdd.style.zIndex = "99";
	}
	oId.onmouseleave = function(){
		oId.className = " ";
		oDdd.style.display = "none";
		oDdd.style.zIndex = "0";
	}
}
})


$(function() {

	$('.containor').on('mouseenter', function() {
		$(".nav-right").removeClass('hide');
	}).on('mouseleave', function() {
		$(".nav-right").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', 'li', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
	})

})


$(function(){
	var timer = setInterval(auto,1500);

	var index = 0;
	function auto(){
		index++;
		if(index==$(".xuhao li").size()){
			index=0;
			
		}
		$(".xuhao li").eq(index).addClass('xh-dq').siblings().removeClass("xh-dq");
		$(".lb-bg").eq(index).fadeIn().siblings().fadeOut();

	}
	//鼠标操作
	$(".xuhao li").mouseenter(function(){
		clearInterval( timer );
		index = $(this).index()-1;
		auto();
	})
	$(".xuhao li").mouseout(function(){
		timer = setInterval( auto() ,1500);
	})
})


var $nav =$("#xd");
var $Lt = $("#LoutiNav");
	window.onscroll = function(){
		var h = document.body.scrollTop || document.documentElement.scrollTop;
		if(h > 600){
			$nav.css("display","block");
			$nav.css("position","fixed");
			$nav.css("top",0);
			
			$Lt.css("display","block");
			
		}else{
			$nav.css("display","none");
			$Lt.css("display","none");
			
		}
	}
	

/*
	 思路 ：
        1、点击左侧的楼层号  显示对应的楼层信息
        	操作当前点击的楼层号的高亮显示
        	点击不同楼层号  设置页面滚走的距离  为当前楼层距离内容窗口的top值
	 	2、点击 top  回到顶部
	 	3、操作滚动条显示对应的楼层号
	 */
	
	let  $list = $("#LoutiNav li:not(.last)");//楼层号
	let  $topLi = $(".last");//回调顶部
	let  $floorDiv = $(".Louti");//楼层
	let flag = true;//假设值为true时  滚动条可以被操作
	$list.click(function(){
		flag = false;
		//当前的li高亮的显示
		$(this).find("span")
			   .addClass( "active" )
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass( "active" );
		//获取当前操作的楼层号的下标
		let index = $(this).index();
		//根据下标获取对应的楼层
		let $floor = $floorDiv.eq( index );
		//获取该楼层相对于body的距离
		let bTop = $floor.offset().top;
		
		//设置页面滚走的距离 为 bTop
		$("body,html").animate( { scrollTop : bTop } , 1000 , function(){
			flag = true;
		} );
	})
	
	//回到顶部
	$topLi.click(function(){
		flag = false;
		$("body,html").animate( { scrollTop : 0 } , 1000 , function(){
			flag = true;
		} );
	})
	
	//操作滚动条显示对应的楼层号
	$(window).scroll( function(){
		if( flag ){
			//获取页面滚走的距离
			let sTop = $(document).scrollTop();
		
			//使用filter遍历每一个楼层 并返回满足某个条件的楼层
			// 条件: 某个楼层距离body的top值 - 页面滚走的距离 <　楼层高度/2
			let $fDiv = $floorDiv.filter( function(index){
				return Math.abs( $(this).offset().top - sTop ) < $(this).height()/2;
			} )
		
			//获取当前在可视区中高度最高的楼层的下标
			let index = $fDiv.index();
			if( index != -1 ){
				//根据下标找到对应要高亮显示的楼层号
				$list.eq(index).find("span")
							   .addClass("active")
							   .end()
							   .siblings()
							   .find("span")
							   .removeClass("active");
			}
			if( sTop < 100 || sTop > ($floorDiv.eq(6).offset().top + 300) ){
				$list.find("span").removeClass("active");
			}
		}
	} )
	
/*
	* jsonp格式接口：
	接口路径：   https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txt+"&cb=fn
	wd 参 数值为用户搜索的数据值
	cb 为callback回调函数
	*/
	let oSsk = document.getElementById("ssk");
	oSsk.onkeyup = function(){
		let txt = this.value;
		let script = document.createElement("script");
		script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txt+"&cb=fn";
		document.querySelector('head').appendChild(script);
	}
	function fn(res){
		let arr = res.s;
		let str = "";
		for (let i = 0;i<arr.length;i++) {
			str +=`<li style="width:100%;height:22px;background: #fff;text-indent:10px;"><a style='color:#000;font-size:14px' href="https://www.baidu.com/s?wd=${arr[i]}">${arr[i]}</a></li>`;
		}
		$("#select").html(str);
	}
	$("#select").on("mouseenter","li",function(){
		$(this).css("background-color","#ff0036")
		$(this).css("color","#fff")
	}).on("mouseleave","li",function(){
		$(this).css("background-color","")
		
	})
	$("#select").on("mouseenter","a",function(){
		
		$(this).css("color","#fff")
	}).on("mouseleave","a",function(){
		$(this).css("color","#000")
		
	})
	/*$("#select").on('click','li',function(){
		oSsk.value = $(this).val()
	})
	$("#select").remove()*/


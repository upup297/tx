window.onload = function(){
		var $smallImg = $("#small img"),
			$bigImg = $("#big img"),
			$list = $("#bottom li"),
			$box = $("#box"),
			$mask = $("#mask"),
			smallImgW = $smallImg.eq(0).width(),
			smallImgH = $smallImg.eq(0).height();
		$list.mouseenter(function(){
			var index = $(this).index();
			//让index对应的小图和大图显示 其他的隐藏
			$smallImg.eq(index).show().siblings("img").hide();
			$bigImg.eq(index).show().siblings().hide();
			$mask.css("backgroundImage",`url(images/${index+1}m.jpg)`);
		})
		
		$("#small").on({
			"mouseenter" :　function(){
				$("#mask").show();
				$("#big").show();
			},
			"mouseleave" : function(){
				$("#mask").hide();
				$("#big").hide();
			},
			"mousemove" : function(e){
				var bigImgW = $bigImg.eq(0).width();
				var bigImgH = $bigImg.eq(0).height();
				var e = e || event;
				var x = e.pageX - $box.offset().left - $mask.width()/2;
				var y = e.pageY - $box.offset().top - $mask.height()/2;
				var maxL = $box.width() - $mask.width();
				var maxT = $box.height() - $mask.height();
				x = Math.min(Math.max( 0 , x ) , maxL);
				y = Math.min(Math.max( 0 , y ) , maxT);
				$mask.css({
					left : x,
					top : y,
					backgroundPositionX : -x,
					backgroundPositionY : -y
				})
				
				// 大图left / mask的left = 大图宽度/小图宽度  =  大图可视区宽度 / mask的宽度
				var bigImgLeft = x*bigImgW / smallImgW;
				var bigImgTop = y*bigImgH / smallImgH;
				 
				//设置大图的left和top值
				$(".bigImage").css({
					left : -bigImgLeft,
					top : -bigImgTop
				})
			}
		})
		//加减操作
		var index = 1;
		$(".updateCountadd").click(function(){
			index++;
			$(".shop-cout").html(index);
		})
		$(".updateCountjian").click(function(){
			index--;
			if(index < 1){
				index = 1;
			}else{
				$(".shop-cout").html(index);
			}	
		})
		
		
		
		
			
			//将没有子级菜单ul的li的列表项符号去掉
		$("li:not(:has(ul))").css("list-style","none");
		//点击所有的li时  都阻止事件冒泡
		$("li").click(function(){
			return false;//jquery中可以使用return false阻止事件冒泡
		})
		//有子级菜单ul的li添加单击事件
		$("li:has(ul)").click(function(){
			//判断当前操作的li的子级ul是否是隐藏或显示的？
			if( $(this).children("ul").css("display")=="none" ){
				//$(this).children("ul").show(1000);
				//列表项为 -
				$(this).css("list-style-image","url(images/-.gif)");
			}else{
				//$(this).children("ul").hide(1000);
				//列表项为 +
				$(this).css("list-style-image","url(images/1.gif)");
			}
			$(this).children("ul").toggle(1000);
		})
		
		/*tab切换*/
		let $list1 = $(".tab li");
			$cons = $(".products  .main")
		$list1.click(function(){
			$(this).addClass("active")
			       .siblings()
			       .removeClass("active")
		var index = $(this).index();
		console.log(index)
		$cons.eq(index)
			 .addClass("selected")
			 .siblings()
			 .removeClass("selected")
		})

	}

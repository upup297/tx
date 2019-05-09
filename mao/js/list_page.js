
$(function(){
	xllb("xl1");//顶条下拉列表1234
	xllb("xl2");
	xllb("xl3");
	xllb("xl4");
	function xllb(id){
		var oId = document.getElementById(id);
		
		var oDdd = oId.getElementsByTagName("div")[0];
	
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
	
		
		
		
		/*
	点击标签图片   显示所有表情   如果点击浏览器其它部分  隐藏所有标签  如果点击某个表情，该表情添加到文本框中
	其余都是dom操作
	 */
	$(".bq").click(function(){
		$(".face").slideDown(500);
		return false;
	})
	$(document).click(function(){
		$(".face").slideUp(500);
	})
	$(".face li").click(function(){
		$(this).find("img").clone().appendTo(".message").html();
	})
	let reg = /tmd|sb|213/ig;
	$(".submit").click(function(){		
		let conStr = $(".message").html();
		colStr = conStr.replace(reg,"*")
		$(".msgCon").prepend(`<div class='msgBox'>		
								<dl><dt><img src='img/tx.jpg'/></dt><dd>浮云</dd></dl>
								<div class='msgTxt'>${conStr}</div>
							</div>`)
		$(".msgBox:first").append(`<div class='time1'>${new Date().toLocaleString()}</div>`);
		$(".message").html("");
	})
})



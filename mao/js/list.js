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
	/*$("li").hover(function(){
		$(this).find("span").css("display","block")
	},function(){
		$(this).find("span").css("display","none")
	})*/
	
	$("li").hover(function(){
		$(this).find("img").animate( {height:0,top:25},500,function(){
			$(this).hide().next().show().animate( {height:100,top:0},500 )
		} )
	},function(){
		$(this).find("span").animate( {height:0,top:25},500,function(){
			$(this).hide().prev().show().animate( {height:50,top:0},500 )
		} )
	})
		
})


/*var deff7 = $.ajax({
		type:"get",
		url:"json/list.json?_id="+new Date().getTime(),
		async:true
	});
	
	deff7.done(function(json){
		var strCon = "";
		for(var i = 0;i<json.list.length;i++){
			var pro = json.list[i];
		
			strCon +=`<div class="gmm">
						
						<a href="page.html?id=${pro.id}"><img src="images/${pro.src}"></a>
						<p>${pro.price}</p>
						<div class="xl">${pro.name}</div>
						<button data-pid=${pro.id} data-pname=${pro.name} data-price=${pro.price} data-src=${pro.src}>${pro.gm}</button>
					</div>`;
		}
		
		$(".gm").html(strCon);
		
		
	})*/
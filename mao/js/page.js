window.onload = function(){
		let hrefStr = location.href;
		//http://127.0.0.1:8848/shopCar/page.html?pid=shop012&classify=classify001
		let arr = hrefStr.split("?")[1].split("&");
		let pid = arr[0].split("=")[1];
		let classify = arr[1].split("=")[1];
		$.ajax({
			url : "json/tmgj.json",
			type : "get",
			success : function(json){
				let proList = json[classify].list;
				console.log(proList)
				let str = "";
				proList.forEach((pro)=>{
					if(pro.id==pid){
						str +=`<div class="small" >
									<img src="images/${pro.small}" alt="" class="mm"/>
									<div class="mask"></div>
								</div>
								<div class="big">
									<img src="images/${pro.big}" class="bigImage"/>
								</div>
								<ul class="bottom">
									<li><img src="images/${pro.bottom}" alt=""></li>
								</ul>`;
									
								$(".fdj").html(str);
								
								let $small = $(".small"),
									$big = $(".big"),
									$btmList = $(".bottom li"),
									$smallImg = $small.children("img"),
									$bigImg = $big.children("img"),
									$fdj = $(".fdj"),
									$mask = $(".mask");
									$btmList.mouseenter(function(){
										let index = $(this).index();
										$smallImg.eq(index).show().siblings().hide();
										$bigImg.eq(index).show().siblings().hide();
									})
									$small.on({
										"mouseenter" : function(){
											$big.show();
											$mask.show();
										},
										"mouseleave" : function(){
											$big.hide();
											$mask.hide();
										},
										"mousemove" : function(evt){
											let e = evt || event;
											let x = e.pageX - $fdj.offset().left - $mask.width()/2;
											let y = e.pageY - $fdj.offset().top - $mask.width()/2;
											let maxL = $small.width() - $mask.width();
											let maxT = $small.height() - $mask.height();
											x = Math.min(Math.max(0,x),maxL);
											y = Math.min(Math.max(0,y),maxT);
											$mask.css({
												left : x,
												top : y,
												backgroundPositionX : -x,
												backgroundPositionY : -y
											})
											
											let bigImgLeft = x*$big.width()/$mask.width();
											let bigImgTop = y*$big.height()/$mask.height();
											
											$bigImg.css({
												left : -bigImgLeft,
												top : -bigImgTop
											})
										}
									})
								
					}
				})
			}
		})
	
		

}
	

	
	


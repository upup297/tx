window.onload = function(){
		var deff = $.ajax({
		type:"get",
		url:"json/pp.json?_id="+new Date().getTime(),
		async:true
	});
	
	deff.done(function(json){
		var strCon = "";
		for(var i = 0;i<json.list.length;i++){
			var pro = json.list[i];
		
			strCon +=`<li>
					  	<div class="img-3d">
					          	
					            <div class="img-front">
					                <img src="images/${pro.src}" alt="">
					            </div>
					        </div>
					        <div class="mask">
					            <img src="images/${pro.src1}" alt="">
					            <p>${pro.name}</p>
					            <a href="javascript:;">${pro.name2}</a>
					           
					        </div> 
   				 		</li>`;
		}
		
		$(".iconWall").html(strCon);
	})

}


	let deff = $.ajax({
		type:"get",
		url:"json/tmcs.json?_id="+new Date().getTime(),
		async:true
	});
	deff.done(function(json){
		let titleStr = "";
		proList = [];
		let conStr = "";
		for (let attr in json) {
			titleStr += `<span classify=${attr}>${json[attr].name}</span>`;
			
			proList = json[attr].list;
			for (let i = 0;i<proList.length;i++) {
				let pro = proList[i];
				conStr += `<li>
								<a href="xiangq.html?pid=${pro.id}&classify=${attr}">
									<img src="images/${pro.src}" />
									<p class="tit">${pro.name}</p>
									<p class="tit1">${pro.price}</p>
								</a>
							</li>`;
			}
		}
		$(".r-s").html(titleStr);
		$(".box").html(conStr);
		$(".r-s").on("mouseenter","span",function(){
			$(this).css("border-bottom","2px solid #000");
			let classify = $(this).attr("classify");
			let proList = json[classify].list;
			let conStr1 = "";
			for(let i = 0;i<proList.length;i++){
				let pro = proList[i];
				conStr1 += `<li>
								<a href="xiangq.html?pid=${pro.id}&classify=${classify}">
									<img src="images/${pro.src}" />
									<p class="tit">${pro.name}</p>
									<p class="tit1">${pro.price}</p>
								</a>
							</li>`;
			}
			$(".box").html(conStr1);
		}).on("mouseleave","span",function(){
			$(this).css("border-bottom","");
		})
		$(".box").on("mouseenter","li",function(){
			$(this).css("border","1px solid red")
		}).on("mouseleave","li",function(){
			$(this).css("border","")
		})
	});
	
	let deff1 = $.ajax({
		type:"get",
		url:"json/tmgj.json?_id="+new Date().getTime(),
		async:true
	});
	deff1.done(function(json){
		let titleStr = "";
		proList = [];
		let conStr = "";
		for (let attr in json) {
			titleStr += `<span classify=${attr}>${json[attr].name}</span>`;
			proList = json[attr].list;
			for (let i = 0;i<proList.length;i++) {
				let pro = proList[i];
				conStr += `<li>
								<a href="page.html?pid=${pro.id}&classify=${attr}">
									<img src="images/${pro.src}" />
									<p class="tit">${pro.name}</p>
									<p class="tit1">${pro.price}</p>
								</a>
							</li>`;
			}
		}
		$(".gj-s").html(titleStr);
		$(".box1").html(conStr);
		$(".gj-s").on("mouseenter","span",function(){
			
			$(this).css("border-bottom","2px solid #000");
			let classify = $(this).attr("classify");
			let proList = json[classify].list;
			let conStr1 = "";
			for(let i = 0;i<proList.length;i++){
				let pro = proList[i];
				conStr1 += `<li>
								<a href="page.html?pid=${pro.id}&classify=${classify}">
									<img src="images/${pro.src}" />
									<p class="tit">${pro.name}</p>
									<p class="tit1">${pro.price}</p>
								</a>
							</li>`;
			}
			$(".box1").html(conStr1);
		}).on("mouseleave","span",function(){
			$(this).css("border-bottom","");
		})
		
		$(".box1").on("mouseenter","li",function(){
			$(this).css("border","1px solid red")
		}).on("mouseleave","li",function(){
			$(this).css("border","")
		})
		
	})


let deff2 = $.ajax({
		type:"get",
		url:"json/tmcs.json?_id="+new Date().getTime(),
		async:true
	});
	deff2.done(function(json){
		let titleStr = "";
		proList = [];
		let conStr = "";
		for (let attr in json) {
			titleStr += `<span classify=${attr}>${json[attr].name}</span>`;
			proList = json[attr].list;
			for (let i = 0;i<proList.length;i++) {
				let pro = proList[i];
				conStr += `<li>
								<a href="xiangq.html?pid=${pro.id}&classify=${attr}">
									<img src="images/${pro.src}" />
									<p class="tit">${pro.name}</p>
									<p class="tit1">${pro.price}</p>
								</a>
							</li>`;
			}
		}
		$(".ml-s").html(titleStr);
		$(".box2").html(conStr);
		$(".ml-s").on("mouseenter","span",function(){
			$(this).css("border-bottom","2px solid #000");
			let classify = $(this).attr("classify");
			let proList = json[classify].list;
			let conStr1 = "";
			for(let i = 0;i<proList.length;i++){
				let pro = proList[i];
				conStr1 += `<li>
								<a href="xiangq.html?pid=${pro.id}&classify=${classify}">
									<img src="images/${pro.src}" />
									<p class="tit">${pro.name}</p>
									<p class="tit1">${pro.price}</p>
								</a>
							</li>`;
			}
			$(".box2").html(conStr1);
		}).on("mouseleave","span",function(){
			$(this).css("border-bottom","");
		})
		$(".box2").on("mouseenter","li",function(){
			$(this).css("border","1px solid red")
		}).on("mouseleave","li",function(){
			$(this).css("border","")
		})
	});
	
let deff3 = $.ajax({
		type:"get",
		url:"json/cdkw.json?_id="+new Date().getTime(),
		async:true
	});
	
	deff3.done(function(json){
		var strCon = "";
		for(var i = 0;i<json.list.length;i++){
			var pro = json.list[i];
		
			strCon +=`<div class="xr-4">
							<a href="xiangq.html"><img src="images/${pro.src}" alt=""></a>
									
							<div class="ms2">${pro.name}</div>
							<div class="ms3">${pro.price}</div>
						</div>`;
		}
		
		$(".dw-xr").html(strCon);
		
		
	})


let deff4 = $.ajax({
		type:"get",
		url:"json/dzac.json?_id="+new Date().getTime(),
		async:true
	});
	
	deff4.done(function(json){
		var strCon = "";
		for(var i = 0;i<json.list.length;i++){
			var pro = json.list[i];
		
			strCon +=`<div class="xr-4">
							<a href="xiangq.html"><img src="images/${pro.src}" alt=""></a>
									
							<div class="ms2">${pro.name}</div>
							<div class="ms3">${pro.price}</div>
						</div>`;
		}
		
		$(".ac-xr").html(strCon);
		
		
	})
	
	let deff5 = $.ajax({
		type:"get",
		url:"json/hwcx.json?_id="+new Date().getTime(),
		async:true
	});
	
	deff5.done(function(json){
		var strCon = "";
		for(var i = 0;i<json.list.length;i++){
			var pro = json.list[i];
			
		
			strCon +=`<div class="xr-4">
							<a href="xiangq.html"><img src="images/${pro.src}" alt=""></a>
									
							<div class="ms2">${pro.name}</div>
							<div class="ms3">${pro.price}</div>
						</div>`;
		}
		
		$(".cx-xr").html(strCon);
		
		
	})
	let deff6 = $.ajax({
		type:"get",
		url:"json/like.json?_id="+new Date().getTime(),
		async:true
	});
	
	deff6.done(function(json){
		var strCon = "";
		for(var i = 0;i<json.list.length;i++){
			var pro = json.list[i];
			
		
			strCon +=`<div class="cx-8">
							<a href="xiangq.html?id=${pro.id}"><img src="images/${pro.src}" alt=""></a>
									
							<div class="ms2">${pro.name}</div>
							<div class="ms3">${pro.price}</div>
						</div>`;
		}
		
		$(".like-cxx").html(strCon);
		
		
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
		
		
	})
	*/
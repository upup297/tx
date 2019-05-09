//取出页面元素
function $id(id){
	return document.getElementById(id) ;
}
//取min--max的随机数
function rand(min,max){
	return Math.round(Math.random()*(max-min)+min);
}
//取出十六进制颜色值
function getColor(){
	var str="abcdef0123456789";
	var color="#";
	for(var i=1;i<=6;i++){
		color+=str.charAt(rand(0,15));
	}
	return color;
}
//rgb颜色值
function getColor2(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}
//四位验证码
function vfCode(){
	var str="";
	for(var i=1;i<=4;i++){
		str+=rand(0,9);
	}
	return str;
	}
//封装一个函数 功能是 将日期转成字符串 显示自定义的时间格式
function dateToString(d){
	var y=d.getFullYear();
	var mon=toTwo((d.getMonth()+1));
	var d1=d.getDate();
	var h=d.getHours();
	var mit=d.getMinutes();
	var s=d.getSeconds();
	return y+"-"+mon+"-"+d1+" "+h+":"+mit+":"+s;
}
function toTwo(str){
	return str<10?"0"+str:str;	
}
//数组去重
function has(arr,num){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===num){
			return false;
		}
	}
	return true;
}
//数组去重
function norepeat( arr ){
	//return Array.from( new Set( arr ) );
	return   [... new Set( arr )];
}
//function noRepeat(arr){
//	var emptArr=[];
//	for(var i=0;i<arr.length;i++){
//		if(has(emptArr,arr[i])){
//			emptArr.push(arr[i]);
//		}
//	}
//	return empaArr;
//}
//创建一个元素
function createEle(ele){
	return document.createElement(ele);
}
//封装一个函数  功能是获取任意一个元素非行内样式值
//形参是变量所以不加引号
function getStyle(obj,attr){
	//兼容
	if( getComputedStyle ){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
// 匀速运动
var timer=null;
function starMove(obj,target){
	clearInterval(timer);
	timer = setInterval(function(){	
		var speed = target-obj.offsetLeft > 0 ? 10 : -10;
		if(obj.offsetLeft == target){
			clearInterval(timer);
		}else{
			$id("box").style.left = obj.offsetLeft + speed +"px";
		}
	},50)
}
//完美运动
function startMove(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var flag = true;
			for(var attr in json){
				var current = 0;
				if( attr == "opacity" ){
					current =  getStyle( obj , attr ) * 100;
				}else{
					current = parseInt( getStyle( obj , attr ) );
				}
				var speed =(json[attr]-current) / 10;
				speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );
				if(current != json[attr]){
					flag=false;
				}
							//运动没有结束 需要继续设置该元素的样式
				if( attr == "opacity" ){
					obj.style[attr] = (current + speed)/100;
				}else if( attr == "zIndex" ){
					obj.style[attr] = json[attr];//直接达到目标值就可以
				}else{
					obj.style[attr] = current + speed + "px";
				}
			}
			if(flag){
				clearInterval(obj.timer);
				if(callback){
					callback();
				}	
			}
		},50)
	}  



//碰撞函数
function pz(d1,d2){
	R1 = d1.offsetWidth+d1.offsetLeft;
	L1 = d1.offsetLeft;
	T1 = d1.offsetTop;
	B1 = d1.offsetHeight + d1.offsetTop;
	
	R2 = d2.offsetWidth+d2.offsetLeft;
	L2 = d2.offsetLeft;
	T2 = d2.offsetTop;
	B2 = d2.offsetHeight + d2.offsetTop;
	
	//如果碰不上 返回false 
	if( R1 < L2 || B1 < T2 || T1 > B2 || L1 > R2 ){
		return false;
	}else{
		return true;
	}
}

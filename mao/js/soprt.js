//json 参数中 存储多个属性 attr和目标值target
function startMove(obj,json,callback){
	clearInterval(obj.timer);//为了防止频繁操作按钮时 运动加速的问题
	obj.timer = setInterval( ()=>{
		var flag = true;//假设循环结束后 值为true 表示所有动作都结束了 可以停止定时器了
		for(var attr in json){
			//获取当前运动元素的实际样式值 （非行内样式 getComputedStyle）
			var currennt = 0;
			if(attr == "opacity"){
				currennt = getStyle( obj,atttr ) * 100;
			}else{
				currennt = parseInt( getStyle( obj , attr ) );
			}
			var speed = (json[attr] - currennt)/10;
			speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );
			if(currennt != json[attr]){//说明运动没有结束
				flag = false;
			}
			//运动没有结束 需要继续设置该元素的样式
			if(attr == "opacity"){
				obj.style[attr] = (currennt + speed)/100;
			}else if(attr == "zIndex"){
				obj.style[attr] = json[attr];//直接到达目标值
			}else{
				obj.style[attr] = currennt + speed + "px";
			}
		}
		
		//循环结束后 判断flag的值是否为true
		if(flag){
			clearInterval( obj.timer );
			//上一个动作完成了 就进入到下一个动作 可变的动作
			if(callback){
				callback();//调用下一个功能
			}
		}
	} ,30)
}

//封装一个函数 获取任意一个元素非行内样式值
function getStyle(obj,attr){
	//兼容
	if(getComputedStyle){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currenntStyle[attr];
	}
}
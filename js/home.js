
//搜索框
function but_over(){	
	var serch=document.getElementById("serch");
	var but=document.getElementById("serch_but");
	var txt=document.getElementById("serch_txt");
	txt.style.display="block";
	but.style.marginLeft="0px";
	but.style.backgroundColor="#990099";		
}
	
function serch_out(){
	
	var serch=document.getElementById("serch");
	var but=document.getElementById("serch_but");
	var txt=document.getElementById("serch_txt");
	txt.style.display="none";
	but.style.marginLeft="150px";
	but.style.backgroundColor="#996699";	
	
}
var placec;
function rilitime(){
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yue=date.getMonth();
	var ri=date.getDate();
	var day=date.getDay();
	var year=date.getFullYear();
	m=check(m);
	s=check(s);	
	day=riqi(day);
	var time=document.getElementById("time_p").innerHTML=h+":"+m+":"+s;	
	var timemonth=document.getElementById("time_month").innerHTML=yue+1+"月"+ri+"日"+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期"+day;	
	 t=setTimeout("rilitime()",1000);
}
function placel(){
	if(placec==null){
		return;
	}
	document.getElementById("place_c").innerHTML=--placec;	
}
function placer(){
	if(placec==null){
		return;
	}
	document.getElementById("place_c").innerHTML=++placec;
}



function riqi(i){
	if(i=="0"){i="日";}
	else if(i=="1"){i="一";}
	else if(i=="2"){i="二";}
	else if(i=="3"){i="三";}
	else if(i=="4"){i="四";}
	else if(i=="5"){i="五";}
	else if(i=="6"){i="六";}	
	return i;
}


function check(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}



//
//********************动图***************************//

function but_left_over(){
	var left=document.getElementById("but_left");
	left.style.opacity="1";	
}
function but_left_out(){
	var left=document.getElementById("but_left");
	left.style.opacity="0.3";	
}
function but_right_over(){
	var right=document.getElementById("but_right");
	right.style.opacity="1";	
}
function but_right_out(){
	var right=document.getElementById("but_right");
	right.style.opacity="0.3";	
}
var lunbok; // 图片 div
var butleft;
var butright;
var lunbo;
var timer;//定时器
var index=0;
var li;
var curPositon = 0; // 当前的图片位置
var dotArray; // 点 li 数组
window.onload=function(){
	dotArray = document.getElementById("dot_ul").getElementsByTagName("li");
	 placec=document.getElementById("place_c").innerHTML=new Date().getFullYear();
	rilitime();
	lunbok=document.getElementById('lunbo_k');
	butleft=document.getElementById('but_left');
	butright=document.getElementById('but_right');
	lunbo=document.getElementById("lunbo");
	li=document.getElementById("dot_ul").getElementsByTagName('li');
	butleft.onclick = function(){
		pre();
	}
	butright.onclick = function(){
		next();
	}
	play();
	lunbo.onmouseout=play;
	lunbo.onmouseover=stop;	
	var dot0 = document.getElementById("dot0");
	
		dot0.onclick = function(){
			curPositon = 0;
			onFocusChanged();
		}	
		dot0.style.backgroundImage = "url(img/lx_purple.svg)";
		document.getElementById("dot1").onclick = function(){
			curPositon = 1;
			onFocusChanged();
		}
	
		document.getElementById("dot2").onclick = function(){
			curPositon = 2;
			onFocusChanged();
		}
	
		document.getElementById("dot3").onclick = function(){
			curPositon = 3;
			onFocusChanged();
		}
		var spin = document.getElementById("spin");//获取div
		//点击div那一获取当前div位置
		spin.onmousedown= function(e){
			//鼠标点击物体时相对于物体左侧边框的距离=点击时位置相对于浏览器左侧的距离-物左侧边框相对于最左边的距离
			var e = e || window.event;//兼容ie浏览器
			var diffX = e.clientX - spin.offsetLeft;	
			var diffY = e.clientY - spin.offsetTop;
			 /*低版本ie bug:物体被拖出浏览器可是窗口外部时，还会出现滚动条，  
       	     解决方法是采用ie浏览器独有的2个方法setCapture()\releaseCapture(),这两个方法，  
            可以让鼠标滑动到浏览器外部也可以捕获到事件，而我们的bug就是当鼠标移出浏览器的时候，  
            限制超过的功能就失效了。用这个方法，即可解决这个问题。注：这两个方法用于onmousedown和onmouseup中*/  
            if(typeof spin.setCapture!='undefined'){
            	spin.setCapture();
            }
            
            document.onmousemove= function(e){
            	
            	var e = e || window.event;//兼容ie浏览器
            	var left = e.clientX-diffX;
            	var top = e.clientY-diffY;
            	spin.style.opacity=0.5;
            	//控制拖拽物体的范围只能在浏览器是窗内，不允许出现先滚动条
            	if(left<0){
            		left=0;
            	}else if(left>window.innerWidth-spin.offsetWidth){
            		left = window.innerWidth-spin.offsetWidth;
            	}
            	if(top<0){
            		top=0;
            	}else if(top>window.innerHeight-spin.offsetHeight){
            		top = window.innerHeight- spin.offsetHeight;
            	}
            	//移动物体时重新得到物体的距离，解决拖动出现晃动的现象
            	spin.style.left =left+'px';
            	spin.style.top = top +'px';         	
            	document.onmouseup= function(e){
            	//当鼠标弹起时不在移动
            	spin.style.opacity=1;
            	this.onmousemove = null;
            	this.onmouseup = null;//预防鼠标弹起后还会循环（即鼠标放上去的时候还会移动）
            	//修复低版本ie
            	if(typeof spin.releaseCapture!='undefined'){
            		spin.releaseCapture();
            		}
            	}
            }
		}
}		
	function play(){//定时器
		timer=setInterval(function(){
			next()
		},2000);
	}	
	//解除定时器,鼠标停在图片上时图片不动
	function stop(){		    
		clearInterval(timer); //window.clearInterval解除定时器
	}	
//	function animate(offset){
//		if (lunbok.style.left=="") {
//		var newleft=0+offset;
//		lunbok.style.left=newleft+'px';
//		}
//		var newleft=parseInt(lunbok.style.left)+offset;
//		lunbok.style.left=newleft+'px';
//		
//		if(newleft<-1200){
//			lunbok.style.left=0+ "px";
//		}
//		if(newleft>-400){
//			lunbok.style.left=-1200+"px";
//		}
//	}	
	// 焦点位置发生改变
	function onFocusChanged(){
		for (var i=0;i<dotArray.length;i++) {
			dotArray[i].style.backgroundImage = "url(img/lx_gray.svg)";
		}
		dotArray[curPositon].style.backgroundImage = "url(img/lx_purple.svg)";
		onImageChanged();
	}
//	var imgChangedTimer; // 图片动画定时器
//	var offset=0; // 图片移动左间距
	// 图片位置发生改变
	function onImageChanged(){
//		if(curPositon==0){
//			offset=0;
//			lunbok.style.left = offset+"px";
//			clearTimer();
//			return;
//		}
//		if(imgChangedTimer != null){
//			clearTimer();
//			offset=(-(curPositon%4))*400;
//			lunbok.style.left = offset+"px";
//			return;
//		}

		var offset = -curPositon*400;
		lunbok.style.left = offset+"px";
	}
	// 下一个
	function next(){
		curPositon++;
		curPositon = curPositon%4;
		onFocusChanged();
//		nextAnime();
	}
	// 上一个
	function pre(){
		--curPositon
		if(curPositon < 0){
			curPositon = 3;
		}
		curPositon = curPositon%4;
		onFocusChanged();
//		preAnime();
	}
	// 下一个动画
//	function nextAnime(){
//		imgChangedTimer = setInterval(function(){
//		var maxOffset = -curPositon*400;
//		offset-=4;
//		lunbok.style.left = offset+"px";
//		if(offset<=maxOffset){
//				// 清除定时器
//				clearTimer();
//				offset = maxOffset;
//				return;
//			}
//		},5);
//	}
	// 上一个动画
//	function preAnime(){
//		imgChangedTimer = setInterval(function(){
//		var maxOffset = -curPositon*400;
//		offset+=4;
//		lunbok.style.left = offset+"px";
//		if(offset>=maxOffset){
//				// 清除定时器
//				clearTimer();
//				offset = maxOffset;
//				return;
//			}
//		},5);
//	}
	// 清除动画定时器
//	function clearTimer(){
//				clearInterval(imgChangedTimer);
//				imgChangedTimer =null;
//	}

	
function dropdown(li){
		var ul=li.getElementsByTagName('ul')[0];
		var img = li.getElementsByTagName('img')[0];		
//		console.log("display:"+ul.style.display)
		if(ul.style.display!="block"){
			ul.style.display="block";
			img.setAttribute('src','img/jintou_up.png');
		}else{
			ul.style.display="none";
			img.setAttribute('src','img/jintou_down.png');
		}
}
//元素.setAttribute() //增加,更改属性,有两个参数,第一个参数是属性名,第二个是值.

//元素.getAttribute() //传入属性名,获得该属性对应的值


//function dropdown(li){
//	var updown=li.getElementsByTagName('ul')[0];
//	updown.style.display="none";
//}




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
//获取当前时间函数
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
			var d1 = new Date();  // 获取当前系统时间 我现在的时间是 2016年4月25日 星期一
d1.getFullYear();    // 获取年信息， 2016
d1.getMonth();      // 获取月信息（从0开始 范围：0-11） 3
d1.getDate();      // 获取天信息 此处结果：25
d1.getDay();      // 获取星期信息 （0-6） 此处结果： 1 
//# 设置 2016年3月15日
//var d2 = new Date(2016, 2, 15);    // 月是从0开始计数， 需要减一
//d2.getFullYear();          // 2016
//d2.getMonth();            // 2
//d2.getDate();            // 15
//d2.toLocaleDateString();      // "2016/3/15" 证明设置正确 
var d3 = new Date(2016, 3, 30);
d3.toLocaleDateString();      // "2016/4/30"
var d4 = new Date(2016, 3, 31);
d4.toLocaleDateString();      // "2016/5/1"
var d5 = new Date(2016, 3, 33);
d5.toLocaleDateString();      // "2016/5/3"
var d6 = new Date(2016, 4, 1);
d6.toLocaleDateString();      // "2016/5/1"
var d7 = new Date(2016, 4, 0);
d7.toLocaleDateString();      // "2016/4/30"
var d8 = new Date(2016, 4, -3);
d8.toLocaleDateString();      // "2016/4/27"

 (function(){
  /*
   * 用于记录日期，显示的时候，根据dateObj中的日期的年月显示
   */
  var dateObj = (function(){
    var _date = new Date();    // 默认为当前系统时间
    return {
      getDate : function(){
        return _date;
      },
      setDate : function(date) {
        _date = date;
      }
    };
  })();
 
  // 设置calendar div中的html部分
  renderHtml();
  // 表格中显示日期
  showCalendarData();
  // 绑定事件
  bindEvent();
 
  /**
   * 渲染html结构
   */
  function renderHtml() {
    var calendar = document.getElementById("calendar");
    var titleBox = document.createElement("div");  // 标题盒子 设置上一月 下一月 标题
    var bodyBox = document.createElement("div");  // 表格区 显示数据
 
    // 设置标题盒子中的html
    titleBox.className = 'calendar-title-box';
    titleBox.innerHTML = "<span class='prev-month' id='prevMonth'></span>" +
      "<span class='calendar-title' id='calendarTitle'></span>" +
      "<span id='nextMonth' class='next-month'></span>";
    calendar.appendChild(titleBox);    // 添加到calendar div中
 
    // 设置表格区的html结构
    bodyBox.className = 'calendar-body-box';
    var _headHtml = "<tr>" + 
              "<th>日</th>" +
              "<th>一</th>" +
              "<th>二</th>" +
              "<th>三</th>" +
              "<th>四</th>" +
              "<th>五</th>" +
              "<th>六</th>" +
            "</tr>";
    var _bodyHtml = "";
 
    // 一个月最多31天，所以一个月最多占6行表格
    for(var i = 0; i < 6; i++) {  
      _bodyHtml += "<tr>" +
              "<td></td>" +
              "<td></td>" +
              "<td></td>" +
              "<td></td>" +
              "<td></td>" +
              "<td></td>" +
              "<td></td>" +
            "</tr>";
    }
    bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>" +
              _headHtml + _bodyHtml +
              "</table>";
    // 添加到calendar div中
    calendar.appendChild(bodyBox);
  }
 
  /**
   * 表格中显示数据，并设置类名
   */
  function showCalendarData() {
    var _year = dateObj.getDate().getFullYear();
    var _month = dateObj.getDate().getMonth() + 1;
    var _dateStr = getDateStr(dateObj.getDate());
 
     //  设置顶部标题栏中的 年、月信息
    var calendarTitle = document.getElementById("calendarTitle");
    var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4,2) + "月";
    calendarTitle.innerText = titleStr;
 
    // 设置表格中的日期数据
    var _table = document.getElementById("calendarTable");
    var _tds = _table.getElementsByTagName("td");
    var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
    for(var i = 0; i < _tds.length; i++) {
      var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
      var _thisDayStr = getDateStr(_thisDay);
      _tds[i].innerText = _thisDay.getDate();
      //_tds[i].data = _thisDayStr;
      _tds[i].setAttribute('data', _thisDayStr);
      if(_thisDayStr == getDateStr(new Date())) {    // 当前天
        _tds[i].className = 'currentDay';
      }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
        _tds[i].className = 'currentMonth';  // 当前月
      }else {    // 其他月
        _tds[i].className = 'otherMonth';
      }
    }
  }
 
  /**
   * 绑定上个月下个月事件
   */
  function bindEvent() {
    var prevMonth = document.getElementById("prevMonth");
    var nextMonth = document.getElementById("nextMonth");
    addEvent(prevMonth, 'click', toPrevMonth);
    addEvent(nextMonth, 'click', toNextMonth);
    var table = document.getElementById("calendarTable");
var tds = table.getElementsByTagName('td');
for(var i = 0; i < tds.length; i++) {
  addEvent(tds[i], 'click', function(e){
    console.log(e.target.getAttribute('data'));
  });
}
  }
 
  /**
   * 绑定事件
   */
  function addEvent(dom, eType, func) {
    if(dom.addEventListener) {  // DOM 2.0
      dom.addEventListener(eType, function(e){
        func(e);
      });
    } else if(dom.attachEvent){  // IE5+
      dom.attachEvent('on' + eType, function(e){
        func(e);
      });
    } else {  // DOM 0
      dom['on' + eType] = function(e) {
        func(e);
      }
    }
    
  }
 
  /**
   * 点击上个月图标触发
   */
  function toPrevMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    showCalendarData();
  }
 
  /**
   * 点击下个月图标触发
   */
  function toNextMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    showCalendarData();
  }
 
  /**
   * 日期转化为字符串， 4位年+2位月+2位日
   */
  function getDateStr(date) {
    var _year = date.getFullYear();
    var _month = date.getMonth() + 1;    // 月从0开始计数
    var _d = date.getDate();
     
    _month = (_month > 9) ? ("" + _month) : ("0" + _month);
    _d = (_d > 9) ? ("" + _d) : ("0" + _d);
    return _year + _month + _d;
  }
})();
		
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
	}

	
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


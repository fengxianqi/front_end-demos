# 学习笔记
# 获取dom
document.getElementsByClassName()
document.getElementsTagName()
document.getElementById()
# 设置class
ele.className='xxx';
# 设置样式
ele.style[attr]=val;
ele.style.attr=val;
# 去除样式
ele.removeAttribute(attr);
# 获取样式
ele.currentStyle?ele.currentStyle[attr]:'undifined';
getComputedStyle(obj, null)[attr];

# 鼠标移入移出事件
ele.onmouseover=function(){}
ele.onmouseout=function(){}
# innerHTML
# parseInt()和Number()
# Image对象
var img=new Image();
img.src='xx.jpg';
img.complete==true 或img.onload//判断是否加载完
# 正则
/xx/.test(str)==true;//判断
str.replace(/^(\d)$/, "0$1"); //$1表示第一个分组，这句的作用是补零	
# eval()
# subString(index,length)
# setInterval(f,1000);
clearInterval(timer);
# Date()
var d=new Date();
var h=d.gethours();
var m=d.getMinutes();
var m=d.getSeconds();
# typeof xx //返回类型
# arguments 默认内置参数
# 获得焦点,市区焦点
ele.onfocus=function(){}
ele.onblur=function(){}
# 事件的绑定删除
var EventUtil = {
	addHandler: function (oElement, sEvent, fnHandler) {
		oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : oElement.attachEvent("on" + sEvent, fnHandler)	
	},
	removeHandler: function (oElement, sEvent, fnHandler) {
		oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, fnHandler)
	},
	addLoadHandler: function (fnHandler) {
		this.addHandler(window, "load", fnHandler)
	}
};
EventUtil.addLoadHandler(function () {
	var aBtn = document.getElementsByTagName("input");
	
	//为第一个按钮添加绑定事件
	EventUtil.addHandler(aBtn[1], "click", function () {
		EventUtil.addHandler(aBtn[0], "click", fnHandler);	
		aBtn[0].value = "我可以点击了"
	});
	
	//解除第一个按钮的绑定事件
	EventUtil.addHandler(aBtn[2], "click", function () {
		EventUtil.removeHandler(aBtn[0], "click", fnHandler);
		aBtn[0].value = "毫无用处的按钮"	
	});
	
	//事件处理函数
	function fnHandler ()
	{
		alert("事件绑定成功！")	
	}	
})
# 获取当前页面坐标
    var event = event || window.event;
    alert("坐标：[" + event.clientX + ", " + event.clientY + "]")
# 当前按下的键盘
	document.onkeydown = function (event)
	{
		var event = event || window.event;
		oP.innerHTML = event.keyCode;
		return false
	}
# 阻止右键菜单
document.oncontextmenu = function ()
{
	return false
}
# 鼠标移动事件
ele.onmousemove 
# 鼠标按下
ele.onmousedown 
# 鼠标拖拽
this.setCapture && this.setCapture();//激活拖拽
ele.releaseCapture && ele.releaseCapture();

# 自定义右键菜单
window.onload = function ()
{
	var oMenu = document.getElementById("menu");
	var aLi = oMenu.getElementsByTagName("li");
	//加载后隐藏自定义右键菜单
	oMenu.style.display = "none";
	//菜单鼠标移入/移出样式
	for (i = 0; i < aLi.length; i++)
	{
		//鼠标移入样式
		aLi[i].onmouseover = function ()
		{
			this.className = "active"	
		};
		//鼠标移出样式
		aLi[i].onmouseout = function ()
		{
			this.className = ""	
		}
	}
	//自定义菜单
	document.oncontextmenu = function (event)
	{
		var event = event || window.event;
		var style = oMenu.style;
		style.display = "block";
		style.top = event.clientY + "px";
		style.left = event.clientX + "px";
		return false;
	};
	//页面点击后自定义菜单消失
	document.onclick = function ()
	{
		oMenu.style.display = "none"	
	}
};





# 知识点
1.opacity: 0.5;要加filter: alpha(opacity=50);可以兼容ie
2.overflow可以清除浮动
3.清除浮动 ul:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
4.css3背景渐变 http://www.runoob.com/css3/css3-gradients.html
			background: -webkit-linear-gradient(#d85201,#e56f06,#ffdab9); /* Safari 5.1 - 6.0 */
  			background: -o-linear-gradient(#d85201,#e56f06,#ffdab9); /* Opera 11.1 - 12.0 */
  			background: -moz-linear-gradient(#d85201,#e56f06,#ffdab9); /* Firefox 3.6 - 15 */
 			background: linear-gradient(#d85201,#e56f06,#ffdab9); /* 标准的语法（必须放在最后） */
5.阻止事件冒泡(event || window.event).cancelBubble = true;
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


# 知识点
1.opacity: 0.5;要加filter: alpha(opacity=50);可以兼容ie
2.overflow可以清除浮动
3.清除浮动 ul:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
4. css3背景渐变 http://www.runoob.com/css3/css3-gradients.html
			background: -webkit-linear-gradient(#d85201,#e56f06,#ffdab9); /* Safari 5.1 - 6.0 */
  			background: -o-linear-gradient(#d85201,#e56f06,#ffdab9); /* Opera 11.1 - 12.0 */
  			background: -moz-linear-gradient(#d85201,#e56f06,#ffdab9); /* Firefox 3.6 - 15 */
 			background: linear-gradient(#d85201,#e56f06,#ffdab9); /* 标准的语法（必须放在最后） */
5.阻止事件冒泡(event || window.event).cancelBubble = true;
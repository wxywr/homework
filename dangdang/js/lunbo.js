// 轮播
var scroll_img=[
	"images/dd_scroll_1.jpg",
	"images/dd_scroll_2.jpg",
	"images/dd_scroll_3.jpg",
	"images/dd_scroll_4.jpg",
	"images/dd_scroll_5.jpg",
	"images/dd_scroll_6.jpg"
]
var INDEX=0;
var img = document.querySelector('.lunbo .img img');//获取img
console.log(img);
var number = document.querySelectorAll('.number ul li');//获取所有li
console.log(number);
//自动轮播
function lunbo(){
	img.src=scroll_img[INDEX];
	for(var i=0;i<number.length;i++){
		number[i].style.backgroundColor="";
		number[i].style.color="#000";
	}
	number[INDEX].style.backgroundColor="#FF9966";
	number[INDEX].style.color="#fff";
	INDEX++;
	if(INDEX>=scroll_img.length){
		INDEX=0;
	}
}
lunbo();
var time = setInterval(lunbo,1000);
//鼠标经过图片时清除定时器
img.onmouseover = function(){
	clearInterval(time);
}
//鼠标离开图片时启动定时器
img.onmouseout = function(){
	time = setInterval(lunbo,1000);
}

//播放鼠标选中的li所对应的img
for(var i=0;i<number.length;i++){
	number[i].index=i;
	number[i].onmouseover=function(){
		INDEX=this.index;
		lunbo();
		clearInterval(time);
	}
	number[i].onmouseout=function(){
		time = setInterval(lunbo,1000);
	}
}
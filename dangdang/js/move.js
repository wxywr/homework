//书讯快递 文字循环向上滚动特效
var bookList = document.getElementsByClassName('bk_list')[0];
console.log(bookList);
var list = document.querySelector(".right-1 .bk_list ul");
console.log(list);
function moveTop(){
	if(list.offsetHeight-bookList.scrollTop<=226){
		bookList.scrollTop=0;//回到顶部
	}else{
		bookList.scrollTop++;
	}
}
// console.log(list.offsetHeight);
// console.log(bookList.scrollTop);

var timer = setInterval(moveTop,30);

bookList.onmouseover=function(){
	clearInterval(timer);
}
bookList.onmouseout=function(){
	timer = setInterval(moveTop,30);
}
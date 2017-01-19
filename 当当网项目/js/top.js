fun();
function fun(){
	var yi=document.querySelectorAll(".right .wz p");
	var a=document.querySelectorAll(".right .wz div")
	// console.log(a)
	for (var i = 0; i < yi.length; i++) {
		yi[i].index=i;
		yi[i].onmouseover=function () {
		for (var x = 0; x < a.length; x++) {
		yi[x].style.backgroundColor='#F0F0F0';
		}
		this.style.backgroundColor='#fff';
		for (var j = 0; j< a.length; j++) {
			a[j].style.display='none';
		}
		a[this.index].style.display='block';			
	}
}
	setInterval(show,2000);
	var n=0;
	function show(){
		n++;
		for (var x = 0; x < a.length; x++) {
			yi[x].style.backgroundColor='#F0F0F0';
			a[x].style.display='none';
		}
		yi[n].style.backgroundColor='#fff';
		a[n].style.display='block';
		if(n>=1){
			n=-1;
		}

	}
//点击添加样式边框
var bk=document.querySelectorAll('.wp .yb li');
	for (var i = 0; i < bk.length; i++) {
		bk[i].index=i;
		bk[i].onmouseover=function(){
			// for (var j = 0; j< bk.length; j++) {
			// 	bk[j].style.border="1px solid #ccc";	
			// }
			this.style.border='3px solid red';
		}
		bk[i].onmouseout=function(){
			this.style.border="1px solid #ccc";
		}
	}

//左边导航栏部分
var nl=document.querySelectorAll('.dh .nl');
var li=document.querySelectorAll('.left .dh>li');
var ul=document.querySelector('.all .left ul')
// console.log(li)
	for (var i = 0; i < nl.length; i++) {
		nl[i].index=i;
		nl[i].onmouseover=function(){
			// console.log(123)
			this.style.display='block';
			li[this.index].className='hover';
		}
		nl[i].onmouseout=function(){
			this.style.display='none';
			li[this.index].className='';
		}
	}
//切换TAB
var p=document.querySelectorAll('.right .qh p');
console.log(p)
var div=document.querySelectorAll('.right .qh div');
for (var i = 0; i < p.length; i++) {
	p[i].index=i;
	p[i].onmouseover=function(){
		for (var j = 0; j< div.length; j++) {
			div[j].style.display="none";
			p[j].style.backgroundColor='#fff'
		}
		this.style.backgroundColor='#ccc'
		div[this.index].style.display='block'
		}
	}
}
var city=document.querySelector('.city');
var	li=document.querySelectorAll('.ddd');
console.log(li[2].innerHTML)
for (var i = 0; i < li.length; i++){
	li[i].onclick=function(){
		city.innerHTML=this.innerHTML
	}
}
// var cs=document.querySelectorAll('.hover ul a');
// for (var i = 0; i < cs.length; i++){
// 	cs[i].onmouseover=function(){
// 		city.innerHTML=this.innerHTML
// 		console.log(123)
// 	}

// }
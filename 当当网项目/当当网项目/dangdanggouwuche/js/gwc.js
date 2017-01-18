var num=document.querySelectorAll('.xm .sl input');
//绑定加事件
var jia=document.querySelectorAll('.xm .sl .jia');
var jian=document.querySelectorAll('.xm .sl .jian');
	for (var i = 0; i < jia.length; i++) {
		jia[i].index=i;
		jian[i].index=i;
		jia[i].onclick=function(){
	 	    a=Number(num[this.index].value);
			a++;
			num[this.index].value=a;
			subtotal(this.index);
		}
			jian[i].onclick=function(){
			a=Number(num[this.index].value);
			a--;
			if (a<1) {
				a=1
			}
			num[this.index].value=a;
			subtotal(this.index);
		}
	}
//绑定减事件
var a=0;
//金额小计
function subtotal(index){
	var dj=Number(document.querySelectorAll('.xm .dj')[index].innerHTML);
	var sl=Number(document.querySelectorAll('.xm .sl input')[index].value)
	var num=dj*sl;
	var je=document.querySelectorAll('.xm .je');
	je[index].innerHTML=num.toFixed(1);
	total();
}
//全选，单选
var some = document.getElementsByName('some');
var all = document.getElementsByName('all');
console.log(all);
	for (var i = 0; i < all.length; i++) {
    	all[i].onclick = function(){
		if(this.checked == true){
			checkStatic(true);
		}else{
			checkStatic(false);
		}
	}
}	
//两个全选不会关联
	function checkStatic(sta){
		for(var i = 0;i<some.length;i++){
			some[i].checked = sta;
		}
	}
//删除一行
var del=document.querySelectorAll('.xm .del');
var st=document.querySelector('section')
for (var i = 0; i < del.length; i++) {//=是为了删除最后一行，不加也可以，这行报错，不影响
	del[i].index=i;
	del[i].onclick=function(){
		var xm=document.querySelectorAll('.xm');
		st.removeChild(xm[this.index]);
		total();
	}
}
//总计
function total(){
	var je=document.querySelectorAll('.xm .je');
	var zj=document.querySelector('footer p span');
	var num=0;
	for (var i = 0; i < je.length; i++) {
		num+=Number(je[i].innerHTML);
	}
	zj.innerHTML=num.toFixed(1);
}

//触发图片变大
var img=document.querySelectorAll('.xm .sp>img')
var div=document.querySelectorAll('.xm .sp div')
console.log(img)
for (var i = 0; i < img.length; i++) {
	img[i].index=i;
	img[i].onmouseover=function(){
		div[this.index].style.display='block'
	}
	img[i].onmouseout=function(){
		div[this.index].style.display='none'
	}
}
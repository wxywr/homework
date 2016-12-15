var a = document.getElementsByClassName('more')[0];
var b = document.getElementsByClassName('net')[0];
var c = document.getElementsByClassName('corner')[0];

var d = document.getElementsByClassName('one')[0];

//更多
a.onclick=function(){
	if(b.style.display=="block"){
		b.style.display="none";
		c.style.borderTop='8px solid #333';
		c.style.borderBottom='none';
	}
	else{
		b.style.display="block";
		c.style.borderBottom='8px solid red';
		c.style.borderTop='none';
	}
}


//鼠标经过改变背景图片
// d.onmouseover = function(){
// 	this.style.backgroundPosition='3px 27px';
// }
// d.onmouseout = function(){
// 	this.style.backgroundPosition='-26px -55px';
// }

var partner = document.querySelectorAll('form ul li'); //获取ul下面的所有li
console.log(partner);
for(var i = 0;i<partner.length;i++){
	partner[i].onmouseover = function(){
		var bpx = document.defaultView.getComputedStyle(this,null).backgroundPositionX; //获取外部css样式
		bpx = parseFloat(bpx);
		// console.log(bpx)
		this.style.backgroundPositionX= bpx+29+'px';
	}
	partner[i].onmouseout = function(){
		var bpx = document.defaultView.getComputedStyle(this,null).backgroundPositionX;
		bpx = parseFloat(bpx);
		// console.log(bpx)
		this.style.backgroundPositionX= bpx-29+'px';
	}
}


//验证邮箱，手机号，QQ号，密码
var form = document.getElementsByTagName('form')[0];
var tan = document.getElementById('alert');
var no = document.getElementById('wrong');
var mi = document.getElementsByName('pw')[0];
var mia = /^[a-zA-Z]\w{5,17}$/;
var mail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var qq = /^[1-9][0-9]{4,}$/;
form.onsubmit=function(){
	var all = form.num.value;
	var mail3=mail.test(all);
	console.log(mail3);
	var phone3=phone.test(all);
	console.log(phone3);
	var qq3=qq.test(all);
	console.log(qq3);
	var mia2 = form.pw.value;
	var mia3 = mia.test(mia2);
	console.log(mia3);

	// if(!mail3&&!phone3&&!qq3){
	// 	tan.style.display="block";
	// 	return false;
	// }
	if(mail3||phone3||qq3){
		tan.style.display="none";
		}else{
		tan.style.display="block";
		return false;
	}
	//验证邮箱、手机号、QQ号

	if(mia3==false){
		no.style.display="block";
		return false;
	}//验证密码
}
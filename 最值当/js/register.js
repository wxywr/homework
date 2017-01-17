//新用户注册验证
var input = document.querySelectorAll('.four');
console.log(input);
var p =document.querySelectorAll('.main-r p');
var you= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
//第一个input框初始化
form.email.focus();
form.email.style.border="1px solid #000";

var email = document.getElementsByClassName('mail')[0];	
email.onfocus=function(){
	p[0].innerHTML='邮箱/手机号可用于登录、找回密码、接收订单通知等服务';
	p[0].style.color="#333";
	email.style.border="1px solid #000";
}
email.onblur=function(){
	email.style.border="1px solid #ccc";
}

var password = document.querySelector('.main-r .mima');
password.onfocus=function(){
	p[1].innerHTML='密码为6-21个字符，可由英文、数字及符号组成';
	p[1].style.color="#333";
	password.style.border="1px solid #000";
}
password.onblur=function(){
	p[1].innerHTML='';
	password.style.border="1px solid #ccc";
}
var sure = document.querySelector('.main-r .sure');
sure.onfocus=function(){
	p[2].innerHTML='请再次输入密码';
	p[2].style.color="#333";
	sure.style.border="1px solid #000";
}
sure.onblur=function(){
	p[2].innerHTML='';
	sure.style.border="1px solid #ccc";
}
var yan = document.querySelector('.main-r .code');
yan.onfocus=function(){
	p[3].innerHTML='请填写图片中的字符，不区分大小写';
	p[3].style.color="#333";
	yan.style.border="1px solid #000";
}
yan.onblur=function(){
	p[3].innerHTML='';
	yan.style.border="1px solid #ccc";
}

form.onsubmit=function(){
	if(form.email.value==""){
		 p[0].innerHTML="邮箱/手机号码不能为空";
		 p[0].style.color="red";
		 email.style.border="1px solid red";
		 input[0].style.backgroundColor='#FEF0EF';
	}
	if(form.password.value==""){
		 p[1].innerHTML="登录密码不能为空";
		 p[1].style.color="red";
		 password.style.border="1px solid red";
		 input[1].style.backgroundColor='#FEF0EF';
	}
	if(form.pwd.value==""){
		 p[2].innerHTML="密码不能为空";
		 p[2].style.color="red";
		 sure.style.border="1px solid red";
		 input[2].style.backgroundColor='#FEF0EF';
	}
	if(form.yzm.value==""){
		 p[3].innerHTML="请输入图形验证码";
		 p[3].style.color="red";
		 yan.style.border="1px solid red";
		 input[3].style.backgroundColor='#FEF0EF';
	}
	return false;
}


//企业用户注册验证
var put = document.querySelectorAll('.company input');
var allP = document.querySelectorAll('.company .warn');
// for(var i = 0;i<put.length;i++){
// 	put[i].index=i;
// 	put[i].onfocus=function(){
// 		put[this.index].style.border="1px solid red";
// 	}
// 	put[i].onblur=function(){
// 		put[this.index].style.border="1px solid #ccc";
// 	}
// }
put[0].onfocus=function(){
	put[0].style.border="1px solid #000";
	allP[0].innerHTML="4-20个字符，可由小写字母、中文、数字组成";
	allP[0].style.color="#a8a8a8";
	put[0].style.backgroundColor='#FFF';
}
put[0].onblur=function(){
	allP[0].innerHTML="";
	put[0].style.border="1px solid #ccc";
}

put[1].onfocus=function(){
	put[1].style.border="1px solid #000";
	allP[1].innerHTML="密码为6-20个字符，可由英文、数字及符号组成";
	allP[1].style.color="#a8a8a8";
	put[1].style.backgroundColor='#FFF';
}
put[1].onblur=function(){
	allP[1].innerHTML="";
	put[1].style.border="1px solid #ccc";
}

put[2].onfocus=function(){
	allP[2].innerHTML="请再次输入密码";
	put[2].style.border="1px solid #000";
	allP[2].style.color="#a8a8a8";
	put[2].style.backgroundColor='#FFF';
}
put[2].onblur=function(){
	allP[2].innerHTML="";
	put[2].style.border="1px solid #ccc";
}

put[3].onfocus=function(){
	allP[3].innerHTML="请填写单位执照上的名称，最长为30个汉字(60个字符)";
	put[3].style.border="1px solid #000";
	allP[3].style.color="#a8a8a8";
	put[3].style.backgroundColor='#FFF';
}
put[3].onblur=function(){
	allP[3].innerHTML="";
	put[3].style.border="1px solid #ccc";
}

put[4].onfocus=function(){
	allP[4].innerHTML="请输入邮箱，建议填写企业邮箱";
	put[4].style.border="1px solid #000";
	allP[4].style.color="#a8a8a8";
	put[4].style.backgroundColor='#FFF';
}
put[4].onblur=function(){
	allP[4].innerHTML="";
	put[4].style.border="1px solid #ccc";
}

put[5].onfocus=function(){
	allP[5].innerHTML="2-32个字符，可由中文或英文组成";
	put[5].style.border="1px solid #000";
	allP[5].style.color="#a8a8a8";
	put[5].style.backgroundColor='#FFF';
}
put[5].onblur=function(){
	allP[5].innerHTML="";
	put[5].style.border="1px solid #ccc";
}

put[6].onfocus=function(){
	allP[6].innerHTML="请输入手机号码";
	put[6].style.border="1px solid #000";
	allP[6].style.color="#a8a8a8";
	put[6].style.backgroundColor='#FFF';
}
put[6].onblur=function(){
	allP[6].innerHTML="";
	put[6].style.border="1px solid #ccc";
}

put[7].onfocus=function(){
	allP[7].innerHTML="请填写图片中的字符，不区分大小写";
	put[7].style.border="1px solid #000";
	allP[7].style.color="#a8a8a8";
	put[7].style.backgroundColor='#FFF';
}
put[7].onblur=function(){
	allP[7].innerHTML="";
	put[7].style.border="1px solid #ccc";
}
var button = document.querySelector('#form .click');
button.onclick=function(){
	allP[0].innerHTML="用户名不能为空";
	allP[0].style.color="red";
	put[0].style.border="1px solid red";
	put[0].style.backgroundColor='#FEF0EF';

	allP[1].innerHTML="登录密码不能为空";
	allP[1].style.color="red";
	put[1].style.border="1px solid red";
	put[1].style.backgroundColor='#FEF0EF';

	allP[2].innerHTML="密码不能为空";
	allP[2].style.color="red";
	put[2].style.border="1px solid red";
	put[2].style.backgroundColor='#FEF0EF';

	allP[3].innerHTML="公司名称不能为空";
	allP[3].style.color="red";
	put[3].style.border="1px solid red";
	put[3].style.backgroundColor='#FEF0EF';

	allP[4].innerHTML="邮箱不能为空";
	allP[4].style.color="red";
	put[4].style.border="1px solid red";
	put[4].style.backgroundColor='#FEF0EF';

	allP[5].innerHTML="联系人姓名不能为空";
	allP[5].style.color="red";
	put[5].style.border="1px solid red";
	put[5].style.backgroundColor='#FEF0EF';

	allP[6].innerHTML="手机号不能为空";
	allP[6].style.color="red";
	put[6].style.border="1px solid red";
	put[6].style.backgroundColor='#FEF0EF';
	
	allP[7].innerHTML="请输入图形验证码";
	allP[7].style.color="red";
	put[7].style.border="1px solid red";
	put[7].style.backgroundColor='#FEF0EF';
}

//绘制验证码
var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		draw();
		canvas.onclick=function(){
			ctx.clearRect(0,0,120,30);
			draw();
		}
		//绘制验证码图片
		function draw(){
			//绘制一个随机的背景颜色--填充一个矩形
			ctx.fillStyle=randColor(170,250);//浅色
			ctx.fillRect(0,0,120,30);

			//绘制4个随机的字符
			var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

			for(var i=0;i<=90;i+=30){
	            var c = letter[randNum(0,letter.length)];
	            ctx.fillStyle=randColor(60,160);//文字颜色
	            ctx.font=randNum(15,40)+'px SimHei';//文字大小
	            ctx.fillText(c,i+randNum(0,15),randNum(15,30));
			}
			//绘制颜色随机干扰线
			for(var i=0;i<10;i++){
				ctx.beginPath();//每一根线是一条新路线
				ctx.moveTo(randNum(0,120),randNum(0,30)); 
				ctx.lineTo(randNum(0,120),randNum(0,30)); 
				ctx.strokeStyle=randColor(60,160);
				ctx.stroke();
			}
			//绘制颜色随机干扰点
			for(var i=0;i<10;i++){
				ctx.beginPath();//每一根线是一条新路线
				ctx.moveTo(randNum(0,120),randNum(0,30),randNum(1,5),0,2*Math.PI); 
				ctx.strokeStyle=randColor(60,160);
				ctx.stroke();
			}
		}
		//产生一个随机的颜色值
		function randColor(min,max){
			var r = Math.floor(Math.random()*(max-min)+min);
			var g = Math.floor(Math.random()*(max-min)+min);
			var b = Math.floor(Math.random()*(max-min)+min);
			return 'rgb('+r+','+g+','+b+')';
		}
		//产生一个随机的整数值
		function randNum(min,max){
			var num = Math.floor(Math.random()*(max-min)+min);
			return num;
		}
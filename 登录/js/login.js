// .............更多...............
$('section .btm span').click(function(){
	$('.aLink').toggle();
});
// ........微信 微博 触发效果........
$('.aAll a').hover(function(){
	var num=parseInt($(this).css('backgroundPositionX'))+20;
	$(this).css('backgroundPositionX',num+'px');
})
// ..............用户名..............

// ................文本框 密码框获取焦点的.............
function show(obj,content){
	obj.css('border','1px solid #969696');
	obj.parent().next().html(content);
}
$(":text").focus(function(){
	show($(this),'请输入邮箱/昵称/手机号码'); 
})
$(':password').focus(function(){
	show($(this),'请填写长度为6-20个字符的密码'); 
})
// .........文本框 密码框失去焦点的时候...........
var stat;
$(':text').blur(test1)//文本框失去焦点事件
function test1(){
	var reg1=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var reg2=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	$(this).parent().next().html('');
	$(this).css('border','1px solid #E6E6E6');
	if(reg1.test($(this).val())==false||reg2.test($(this).val())==false){
			stat=false;
	}
}
$(':password').blur(test2)//密码框失去焦点事件
function test2(){
	$(this).parent().next().html('');
	$(this).css('border','1px solid #E6E6E6');
	var reg=/^([a-zA-Z0-9]{6,20})$/;
	if(reg.test($(this).val)==false){
		stat=false;
	}
}
$('form').submit(function(){//提交框事件
	if($(':text').val()==""||$(':password').val()==""){
		reg4();
		console.log(123);
		return false;
	}else{
		stat=true;
		$(':text').unbind().blur(test1);
		$(':password').unbind().blur(test2);
		return stat;

	}
})

function reg4(){
	show2($(':text'),'请输入邮箱/昵称/手机号码'); 
	show2($(':password'),'请填写长度为6-20个字符的密码'); 
}

function show2(obj,content){
	obj.css('border','1px solid red');
	obj.parent().next().html(content);
	obj.parent().next().css('color','red');
}
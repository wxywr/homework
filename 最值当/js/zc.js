$('#form .top-l p').eq(1).css('backgroundColor','#EBEEEF');
$('#form_1 .top-l p').eq(0).css('backgroundColor','#EBEEEF');
$('form .top-l p').click(function(){
	var index = $(this).index();
	var a = index;
	$('form .top-l p').eq(a).css('backgroundColor','#fff').siblings().css('backgroundColor','#EBEEEF');
	$('form').eq(a).show().siblings().hide();
})
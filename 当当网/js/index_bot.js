qx();
function qx(){
	var bq=document.querySelectorAll('.bq li');
	console.log(bq)
	var cen1=document.querySelectorAll('.cen1');
	console.log(cen1)
	for (var i = 0; i < bq.length; i++) {
		bq[i].index=i;
		bq[i].onmousemove=function(){
			for (var y= 0; y< bq.length; y++) {
				cen1[y].style.display='none';
			}
			cen1[this.index].style.display='block';
		}
		bq[i].onmouseout=function(){
			for (var y= 0; y< bq.length; y++) {
				bq[y].style.paddingBottom='0px';
				bq[y].style.backgroundColor='#f5f5f5';
				bq[y].style.border='1px solid #ccc';
			}
			this.style.paddingBottom='2px';
			this.style.backgroundColor='white';
			this.style.border='2px solid black';
			this.style.borderBottom='none';
		}
	}
}
// lb();
// function lb(){
// 	var ul=document.querySelectorAll('.b ul li');
// 	console.log(ul)
// 	var img1=document.querySelector('.cen1_left img')
// 	var i=0;
// 	for (var i = 0; i < ul.length; i++) {
// 		i++;

// 	}
// }
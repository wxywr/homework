var musicList=[
		{
			name:"感恩的心",
			author:"欧阳菲菲",
			url:"music/感恩的心.mp3"
		},
		{
			name:"偷偷的爱",
			author:"丁当",
			url:"music/偷偷的爱.Mp3"
		},
		{
			name:"最后一页",
			author:"江语晨",
			url:"music/最后一页.mp3"
		},
		{
			name:"爱要坦荡荡",
			author:"萧潇",
			url:"music/爱要坦荡荡.mp3"
		}
	];

//添加歌曲列表
var ul = document.getElementsByTagName('ul')[0];
console.log(ul);
var list=[];
for(var i = 0;i<musicList.length;i++){
	list[i]=document.createElement('li');
	list[i].innerHTML=musicList[i].name+'-'+musicList[i].author;
	ul.appendChild(list[i]);
 }

var INDEX=0; //每次播放的下标
var audio= document.getElementById('musicbox');
var mList = document.querySelectorAll('li');


//播放函数
function playMusic(index){
	audio.setAttribute("src",musicList[index].url);
	audio.play();
	if(playmode==1){
		for(var i=0;i<mList.length;i++){
			mList[i].className="";
		}
	}	
	play.className="playing";
	mList[index].className="isplay";
	INDEX=index;
	auto();
}

//双击播放所选歌曲
for(i=0;i<mList.length;i++){
	mList[i].index=i;
	if(playmode==1){
		mList[i].ondblclick=function(){
			playMusic(this.index);
		}
	}
}

//点击play按钮播放或暂停音乐并改变图标样式
var play = document.getElementById('play');
function playclick(){
	if(play.className!=""){
		play.className="";
		audio.pause();
	}else{
		play.className="playing";
		audio.play();
	}
}

//播放下一曲
var next = document.getElementById('next');
next.onclick = function(){
	nextmusic();
}
function nextmusic(){
	// INDEX+=1;
	if(playmode==1){
		INDEX+=1;
	}
	if(INDEX==musicList.length){//当下标值等于li的长度4时从第一首开始
		INDEX=0;
	}
	playMusic(INDEX);
}

playMusic(INDEX);//页面加载自动播放


//获取时间
var progress = document.querySelector('#progress div');
var time = document.getElementById('time');
//设置时间样式
function timeStyle(time){
	var t = Math.round(time);
	var m = Math.floor(t/60);
	var s = t-m*60;
	if(m<10){
		m='0'+m;
	}
	if(s<10){
		s='0'+s;
	}
	str = m+":"+s;
	return str;
}
function auto(){
	var alltime=audio.duration;
	var currentTime=audio.currentTime;
	var percent=Math.floor(currentTime*100/alltime);
	if(!isNaN(alltime)){
		progress.style.width=percent+'px';
		time.innerHTML=timeStyle(currentTime)+"/"+timeStyle(alltime);
	}
	setTimeout(auto,1000);
	if(audio.ended==true){
		nextmusic();
	}
}

//播放模式变化
var mode = document.getElementById("mode");
var playmode=1;
mode.onclick=function(){
	if(playmode==1){
		mode.innerHTML="单曲";
		playmode=0;
		for(var i=0;i<mList.length;i++){
			mList[i].className="disable";
		}
		mList[INDEX].className="isplay";
	}else{
		mode.innerHTML="全部";
		playmode=1;
		for(var i=0;i<mList.length;i++){
			mList[i].className="";
		}
		mList[INDEX].className="isplay";
	}
}

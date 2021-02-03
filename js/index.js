window.addEventListener('load',function(){
	 var video=document.querySelector('video');
	 var box=document.getElementById('box');
	 var bt=document.querySelector('input');
	 var bt2=document.getElementById('bt');
	 bt2.addEventListener('click',function(){
	 var t1=document.getElementById('t1').value;
	 var p1=document.getElementById('p1').value;
	 	if(t1=='xjt' && p1=='123'){
	 		window.open('SY.html')
	 	}else{
	 		alert('密码或用户名错误')
	 	}
	 })
	vdTime=setTimeout(function(){
		video.style.display='none';
		bt.style.display='none';
	},10000)
	boxTime=setTimeout(function(){
		box.style.display='block';
	},10000)
	bt.addEventListener('click',function(){
		video.style.display='none';
		box.style.display='block';
		bt.style.display='none';
	})
})

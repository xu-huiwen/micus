$(function(){
	var audio=$("#audio")[0];
	var play = $(".play");
	var current=$(".current-time");
	var duration=$(".duration");
	var PI=$(".p-i");
	var progress=$(".progress");
	var vol=$(".volume")
	var VI=$(".v-i")
	var startpos
	var startpos1
	var mute=$(".mute");
    var currentIndex=1;
    var logo=$(".logo .right")
    var logox=$(".logo .midddle")
    var lxs=$(".lxs")
    
    
    
    
    
    var musics=[{
        name:"青花瓷-萌萌哒天团",
    	author:"萌萌哒天团",
    	src:"mic/青花瓷-萌萌哒天团.mp3",
    	src1:"img/6.png"
    	},{
    	name:"谭维维 - 爱到底",
    	author:"谭维维",
    	src:"mic/谭维维 - 爱到底.mp3",
    	src1:"img/2.png"
    	},{
    	name:"中国画-萌萌哒天团",
    	author:"萌萌哒天团",
    	src:"mic/中国画-萌萌哒天团.mp3",
    	src1:"img/7.png"
    	}];

function render(){
	$("#lists").empty();
	$.each(musics,function(i,v){
		var c=(i===currentIndex) ? "playno" : "";
		$("<li  class='"+c+"'><div class='left'><div class='top'>"+v.name+"</div><div class='bottom'>"+v.author+"</div></div><div class='right icon'>&#xe778;</div></li>").appendTo("#lists")
	})

}


    $("#lists").on("click","li",function(){
    	$("#lists").find("li").removeClass("playno");
    	$(this).addClass("playno");
    	currentIndex=$(this).index();
    	audio.src=musics[currentIndex].src;
    	logox.html(musics[currentIndex].author)
    	audio.play();
    })
    render();
    
    
    
    
    
    
    //切歌
    $("#lists").on("touchend",function(){
    	var index=$(this).index();
    	currentIndex=index;
    	lxs.attr({src:musics[currentIndex].src1})
    	logox.html(musics[currentIndex].author)
//  	audio.src=musics[currentIndex].src;
    	render();
    })
    
    //下一首
    function next(){
    	currentIndex += 1;
    	if(currentIndex===musics.length){
    		currentIndex=0;
    	}
    	audio.src=musics[currentIndex].src;
    	lxs.attr({src:musics[currentIndex].src1})
    	logox.html(musics[currentIndex].author)
    	render();
    }
    
    //上一首
    function prev(){
    	currentIndex-=1;
    	if(currentIndex===-1){
    		currentIndex=musics.length-1;
    	}
    	audio.src=musics[currentIndex].src;
    	lxs.attr({src:musics[currentIndex].src1})
    	logox.html(musics[currentIndex].author)
    	render();
    }

    $(".prev").on("touchend",prev);
    $(".next").on("touchend",next);
    render();

$(audio).on("ended",function(){
	next();
})
    
	var x=currentIndex;
//	var xx=$(".playno .left .top").text();
	logo.on('click',function(){
		if(logo.hasClass("menu")){
			$(".Lyrics").css("display","none");
			$("#lists").css("display","none");
			$(".body").css("display","block");
			logo.removeClass("menu");
		}else{
			$(".Lyrics").css("display","none");
			$(".body").css("display","none");
			$("#lists").css("display","block");
			
			$("#lists").find("li").removeClass("playno");
	    	$("#lists li").eq(x).addClass("playno");
			logo.addClass("menu");
		}
	})
     
    
        $(".body").on("touchstart",function(e){
         	 startpos=e.originalEvent.changedTouches[0].clientX;
         })
         $(".body").on("touchend",function(e){
         	var p=e.originalEvent.changedTouches[0].clientX;
         	if(p-startpos>=50){
         		 $(".body").css("display","none");
         		 $(".Lyrics").css("display","block");
         	}
         	
         })
         
         
         $(".Lyrics").on("touchstart",".lyri",function(e){
         	 startpos1=e.originalEvent.changedTouches[0].clientX;
         })
        $(".Lyrics").on("touchend",".lyri",function(e){
         	var p1=e.originalEvent.changedTouches[0].clientX;
         	if(p1-startpos1< -50){
         		$(".body").css("display","block");
         		$(".Lyrics").css("display","none");
         	}
         	
         })
        
        
        
        
        
        
        
        
        
        
	
	//时间
	function format(v){
		v=Math.floor (v);
		var s = v % 60;
		s=(s<10)?("0"+s):s;
		var m=Math.floor(v/60);
		return m + ":" + s;
	}
	
	
	play.on("click",function(){
		if(audio.paused){
			audio.play();
			play.html("&#xf0067;");
			
		}else{
			audio.pause();
			play.html("&#xe778;");
		}
	})
	
	
	
	
	
	
	
	
	
	//播放与暂停
	
	$(audio).on("play",function(){
		play.html("&#xf0067;");
//		var xx=$(".playno .left .top").text();
//		var xxx=$(".logo .middle").append(xxx);
		
    })	
	$(audio).on("pause",function(){
         play.html("&#xe778;");
	})

			

	
	
	//音乐进度条
	progress.on("click",function(e){
		audio.currentTime=e.offsetX / $(this).width() * audio.duration;
	})
	
	
	
	$(audio).on("canplay",function(){
		duration.html(format(audio.duration));
	})
	
	
	
	
	
	
	
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var left=progress.width() * audio.currentTime / audio.duration 
		- PI.width() / 2;
		PI.css('left',left);
	})
	
	
	
	//进度拖最
	PI.on("click",false)
	PI.on('mousedown',function(e){
		var r=PI.width()/2;
		var start=r-e.offsetX;
		$(document).on('mousemove',function(e){
			var left=e.clientX - progress.position().left + start;
			var c=left / progress.width() * audio.duration;
			if(c>=audio.duration||c<=0){
				return;
			}
			audio.currentTime=c;
		})
		return false;
	})

		$(document).on('mouseup',function(){
			$(document).off('mousemove');
		})

	
	//音量
   	//音量

	VI.on("click",false)
	vol.on("click",function(e){
		audio.volume=e.offsetX/vol.width();
		mute.removeAttr("data-v");
	})
	
	mute.on("click",function(){
		if($(this).attr("data-v")){
			audio.volume=$(this).attr("data-v");
			$(this).removeAttr("data-v");
		}else{
			$(this).attr("data-v",audio.volume)
			audio.volume = 0;
		}
	})
	
	
	$(audio).on('volumechange',function(){
		VI.css('left',vol.width()* audio.volume-VI.width()/2);
	})
	
	
	
	//音量拖最

	VI.on('mousedown',function(e){

		var r=VI.width()/2;
		var start=r-e.offsetX;
		$(document).on('mousemove',function(e){
			var m=e.clientX;
			var left=m-vol.position().left+start;
			var v=left/vol.width();
			if(v>1||v<0){
				return;
			}
			audio.volume=v;
		})
		return false;
	})

	$(document).on('mouseup',function(){
			$(document).off('mousemove');
		})
	
	
	
	
	
	
	
	
	
	
	
	
	


	
	
	
	
	
	
	
	
	
	
})
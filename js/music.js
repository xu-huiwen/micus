$(document).ready(function(){
	
	var audio=$("#audio").get(0);
	var $audio=$(audio);
	var play=$("#key .start");
	var a=$("#key .start a");
	var current=$("#progress .begin span");
	var duration=$("#progress .over span");
	var cir=$("#cir");
	var progress=$("#progress .pro .progress");
	var next=$("#key .right");
	var previous=$("#key .left");
	var red=$("#progress .pro .progress .red")
	
	
	
///////////////////////////////////////////////////////////////////	


//时间格式转换
	
	function time(v){
		v = Math.floor(v)
		var s= v % 60;
		s = s < 10 ? ("0"+s ):s ;
		var z= Math.floor(v / 60)
		return z+":"+s;
	}
	play.on("touchend",function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}			
	})	
	
	
	
	cir.on("touchend",false)
	cir.on("touchstart",function(e){
		
		var offsetX=e.originalEvent.changedTouches[0].clientX -cir.offset().left;
		var ir=cir.width()/2;
		var start= ir - offsetX;
		$(document).on("touchstart",function(e){
			var left=e.originalEvent.changedTouches[0].clientX - progress.position().left +start;
			var c= left/progress.width()*audio.duration;
			if(c>=audio.duration || c<=0){
				return;
			}
			audio.currentTime =c;	
			console.log(c)
		})
		return false;
	})
	$(document).on("touchend",function(){
		$(document).off("touchmove")
	});
	
	
	progress.on("touchend",function(e){
		var ir=cir.width()/2;
		var offsetX=e.originalEvent.changedTouches[0].clientX -cir.offset().left;
		audio.currentTime=(offsetX) / (progress.width()*audio.duration);
    });
	
	//音乐进度
    
	$(audio).on("timeupdate",function(){
		current.html(time(audio.currentTime));
		var ir=cir.width()/2;
		var width=progress.width()* audio.currentTime /audio.duration
		var left= progress.width()* audio.currentTime /audio.duration-ir
		cir.css("left",left);
		red.css("width",width);
	})
    
    
    cir.on("touchend",false);
	
	
	var index=0;
	var music=[{
		name:"萌萌哒天团 - 中国画",
		zuozhe:'萌萌哒天团',
		src:"萌萌哒天团 - 中国画.mp3",
		duration:"3:27",
		lyrics:[	
            {time:"0:00",lyric:"中国画"},
            {time:"0:20",lyric:"演唱：萌萌哒天团"},
            {time:"0:26",lyric:"词曲：芊芊"},
            {time:"0:34",lyric:""},
            {time:"0:38",lyric:"墨香染,空意境"},
            {time:"0:41",lyric:"孤山远影,碧空净"},
            {time:"0:44",lyric:"动和静,人事情"},
            {time:"0:47",lyric:"花虫鸟兽众生灵"},
            {time:"0:50",lyric:"钟鼓楼,钟声鸣"},
            {time:"0:53",lyric:"笔落雷霆,风雨惊"},
            {time:"0:57",lyric:"画中诗,画中情"},
            {time:"1:00",lyric:"宁静致远,见禅心"},
            {time:"1:05",lyric:""},
            {time:"1:07",lyric:"布局抒心意"},
            {time:"1:10",lyric:"画中寓真情"},
            {time:"1:13",lyric:"浓淡总相宜"},
            {time:"1:16",lyric:"黑白现分明"},
            {time:"1:19",lyric:"花开富贵一心经"},
            
            {time:"1:22",lyric:"浓抹淡写笔意灵"},
            {time:"1:26",lyric:"花团锦簇蜜蜂鸣"},
            {time:"1:29",lyric:"却道无声却有情"},
            {time:"1:32",lyric:"变化动与静"},
            {time:"1:35",lyric:""},
            {time:"1:45",lyric:"墨香染,空意境"},
            {time:"1:48",lyric:"孤山远影,碧空净"},
            {time:"1:51",lyric:"动和静,人事情"},
            {time:"1:54",lyric:"花虫鸟兽众生灵"},
            {time:"1:58",lyric:"钟鼓楼,钟声鸣"},
            {time:"2:01",lyric:"笔落雷霆,风雨惊"},
            {time:"2:04",lyric:"画中诗,画中情"},
            {time:"2:07",lyric:"画中诗,画中情"},
            {time:"2:13",lyric:""},
            {time:"2:14",lyric:"布局抒心意"},
            {time:"2:17",lyric:"画中寓真情"},
            {time:"2:20",lyric:"浓淡总相宜"},
            {time:"2:23",lyric:"黑白现分明"},
            {time:"2:26",lyric:"花开富贵一心经"},
            {time:"2:29",lyric:"浓抹淡写笔意灵"},
            {time:"2:32",lyric:"花团锦簇蜜蜂鸣"},
            {time:"2:36",lyric:"却道无声却有情"},
            {time:"2:39",lyric:""},
            {time:"2:40",lyric:"布局抒心意"},
            {time:"2:42",lyric:"画中寓真情"},
            {time:"2:45",lyric:"浓淡总相宜"},
            {time:"2:48",lyric:"黑白现分明"},
            {time:"2:52",lyric:"花开富贵一心经"},
            {time:"2:55",lyric:"浓抹淡写笔意灵"},
            {time:"2:58",lyric:"花团锦簇蜜蜂鸣"},
            {time:"3:01",lyric:"却道无声却有情"},
            {time:"3:04",lyric:"轻重和缓急"},
            {time:"3:08",lyric:""}
        ]
	},
	{
		name:"谭维维 - 爱到底",
		zuozhe:'谭维维',
		src:"谭维维 - 爱到底.mp3",
		duration:"4:27",
		lyrics:[	
            {time:"0:00",lyric:"爱到底 - 谭维维"},
            {time:"0:02",lyric:"(电视剧《偏偏喜欢你》主题曲)"},
            {time:"0:05",lyric:"词：和汇慧,李扬"},
            {time:"0:06",lyric:"曲：和汇慧,王梓同"},
            {time:"0:08",lyric:""},
            {time:"0:45",lyric:"问一问自己到底有多倔强"},
            {time:"0:51",lyric:"才让爱上你成为一种奢望"},
            {time:"0:56",lyric:""},
            {time:"0:59",lyric:"想不顾一切为爱迷失方向"},
            {time:"1:05",lyric:"但是再努力也看不到希望"},           
            {time:"1:11",lyric:""},
            {time:"1:13",lyric:"问一问自己到底有多坚强"},
            {time:"1:19",lyric:"茫茫人海中 心只为你绽放"},
            {time:"1:24",lyric:""},
            {time:"1:27",lyric:"也曾经刻意伪装 说过的谎"},
            {time:"1:33",lyric:"只要拥有你心就不会彷徨"},
            {time:"1:41",lyric:"面对不完美的自己"},
            {time:"1:45",lyric:"爱有什么资格逃避"},
            {time:"1:48",lyric:"即使承受着委屈"},
            {time:"1:52",lyric:"我要证明我爱你"},
            {time:"1:55",lyric:"差一点就要失去"},
            {time:"1:59",lyric:"用尽所有的勇气"},
            {time:"2:02",lyric:"不管命运的抗拒"},
            {time:"2:06",lyric:"我要爱到底"},
            {time:"2:13",lyric:""},
            {time:"2:38",lyric:"问一问自己到底有多坚强"},  
            {time:"2:43",lyric:"茫茫人海中 心只为你绽放"},
            {time:"2:49",lyric:""},
            {time:"2:52",lyric:"也曾经刻意伪装 说过的谎"},
            {time:"2:58",lyric:"只要拥有你心就不会彷徨"},
            {time:"3:04",lyric:""},
            {time:"3:06",lyric:"面对不完美的自己"},
            {time:"3:10",lyric:"爱有什么资格逃避"},
            {time:"3:13",lyric:"即使承受着委屈"},
            {time:"3:16",lyric:"我要证明我爱你"},
            {time:"3:20",lyric:"差一点就要失去"},
            {time:"3:23",lyric:"用尽所有的勇气"},
            {time:"3:27",lyric:"不管命运的抗拒"},
            {time:"3:30",lyric:"我要爱到底"},
            {time:"3:34",lyric:"面对不完美的过去"},
            {time:"3:38",lyric:"我们相处不容易"},
            {time:"3:41",lyric:"明天依然美丽"},
            {time:"3:44",lyric:"可幸福还没有看到结局"},
            {time:"3:48",lyric:"如果我屏住了呼吸"},
            {time:"3:52",lyric:"忍着伤痛走下去"},
            {time:"3:55",lyric:"直到能拥抱你"},
            {time:"3:58",lyric:"一直爱到底"}
            
        ]
	},
	{
		name:"青花瓷-萌萌哒天团",
		zuozhe:'萌萌哒天团',
		src:"青花瓷-萌萌哒天团.mp3",
		duration:"3:06",
		lyrics:[	
            {time:"0:00",lyric:"《青花瓷》"},
            {time:"0:03",lyric:"演唱者：萌萌哒天团"},
            {time:"0:09",lyric:"词：卢小娟（芊芊）"},
            {time:"0:13",lyric:"曲：卢小娟（芊芊）"},
            {time:"0:24",lyric:"青花瓷，画中一美人"},
            {time:"0:28",lyric:"我在千年前，做了一幅画，却在画里渲染了你的容颜"},
            {time:"0:36",lyric:"庭院深深，离落草堂袖随风"},
            {time:"0:40",lyric:"有美一人"},
            {time:"0:45",lyric:"悬云鬓，顾影轻颦，倩影娉婷"},
            {time:"0:48",lyric:"淡香馨，不染清襟，逸雅出尘"},
            {time:"0:54",lyric:"一席水袖独自舞，沁骨愁痕"},
            {time:"1:02",lyric:"细腻温文高唐墨，古韵香沉"},
            {time:"1:10",lyric:"素袂青衫，却露愁颜"},
            {time:"1:34",lyric:"青花瓷，画中一美人"},
            {time:"1:38",lyric:"我在千年前，做了一幅画，却在画里渲染了我的思念"},
            {time:"1:46",lyric:"庭院深深，相思成灰悲秋风"},
            {time:"1:50",lyric:"笔画思念"},
            {time:"1:55",lyric:"书墨染，白衣沾香，墨迹愁肠"},
            {time:"1:58",lyric:"画朱颜，沧海桑田，为谁缠绵"},
            {time:"2:04",lyric:"青花瓷着红添香，点染惆怅"},
            {time:"2:12",lyric:"细腻温文高唐墨，古韵香沉"},
            {time:"2:20",lyric:"情寄千年，历经沧桑"},
            {time:"2:28",lyric:"一席水袖独自舞，沁骨愁痕"},
            {time:"2:36",lyric:"细腻温文高唐墨，古韵香沉"},
            {time:"2:44",lyric:"素袂青衫，却露愁颜"},
            {time:"2:52",lyric:"却露愁颜"}         
        ]
	}]
	
	//添加歌曲列表（渲染）
	
	function add(){
		$("#uls").empty();
		$.each(music,function(i,v){
			console.log(i)	
			var c = ( i === index ) ? "active" : "";
			console.log(c)
			$('<li class="'+c+'"><span class="names">'+music[i].name+'-'+music[i].zuozhe+'</span><a class="delete" href="javascript:;">&#xe775;</a></li>').appendTo("#uls");
			 $(music[index].lyrics).each(function(i,v){
	            $("<p class="+ i +">"+v.lyric+"</p>").appendTo("#lyric .lyric-box .lyric")
	        })
			
//		 	var ins=index+1;
//	  	  	console.log(ins)
//			$("#zhao").css({background: "url('../images/1"+ins+".jpg');"})
			
			
		})
	}
	add();
	
	
	// 列表 删除
	$("#uls").on('touchend','.delete',function(){
		var li = $(this).closest('li');
		var indexs = li.index();
		music.splice(indexs,1);
		
		if (indexs === index) {
			if(music[indexs]) {
				audio.src=music[index].src;
			} else {
				audio.src= '';
			}
		} else if (indexs > index){
				   //不操心
			} else if (indexs < index){
				index -= 1;
			}
			
		add();
		audio.play();
		return false;
	});
	
	
	
	
	//歌曲切换
	
	$("#uls").on("touchend","span",function(){
		
		index=$(this).closest('li').index();
		audio.src=music[index].src;
	 	var ins=index+1;
  	  	console.log(ins)
		$("#zhao").css({backgroundImage: "url('images/1"+ins+".jpg')"})
		audio.play();
		add();
	})
	
	//列表添加
//	$("#uls").on('touchend','div',function (){
//		var d = $(this).attr("data-v");
//		database.push(JSON.parse(d));
//		render();
//		
//	})

	
   
	
	
	
	//下一首
	
	function Next(){
		var indexs=index+1;
		if(indexs>=music.length){
			indexs=0;
		}
		audio.src=music[indexs].src;
		var ins=indexs+1;
  	  	console.log(ins)
		$("#zhao").css({backgroundImage: "url('images/1"+ins+".jpg')"})
		index=indexs;
		add();
		audio.play();
	}
	next.on("touchend",Next);
	
	//上一首
	
	function Previous(){
		var indexs=index-1;
		if(indexs<0){
			indexs=2;
		}
		audio.src=music[indexs].src;
		var ins=indexs+1;
  	  	console.log(ins)
		$("#zhao").css({backgroundImage: "url('images/1"+ins+".jpg')"})
		index=indexs;
		add();
		audio.play()
	}
	
	previous.on("touchend",Previous)
	
	
	//取消歌曲列表
	
	$("#list .uls-floor .close").on("touchend",function(){
		$("#list").removeClass("li");
		$("#list").addClass("lis");
		return false;
	})
	
	//打开歌曲列表
	
	$("#floor #key .list").on("touchend",function(){
		$("#list").addClass("li");
		$("#list").removeClass("lis");
		return false;
	})
	
	//清空列表
	
	$("#list .uls-header .clear").on("touchend",function(){
		$("#uls li").remove();
	})
	
	

	
	//音量条
	var vol=$("#volume .right .volume");
	var vI=$("#volume .right .volume a")
	var jin=$("#volume .left a");
	
	console.log(vol.width())
	
	
	
	
	
	
	vI.on('touchend',function (e){
		var offsetX  = e.originalEvent.changedTouches[0].clientX - vI.offset().left;
		var r = vI.width() / 2;
		var start = r - offsetX;
		$(document).on('touchmove',function(e){
			var pos = e.originalEvent.changedTouches[0].clientX - vol.offset().left + start;
			var v = pos/vol.width()
			if( v >=1 || v <=0 ){
				return;
			}
			audio.volume = v;
		})
		return false;
	});
	$(document).on('touchend',function(){
		$(document).off('touchmove');
	})
	
	//音量条拖拽
	
	
	vol.on('touchend',function(e){
		var offsetX = e.originalEvent.changedTouches[0].clientX - vol.offset().left;
		console.log(offsetX)
		audio.volume = offsetX / $(this).width();
//		console.log(audio.volume)
		jin.removeAttr("v");
	});
	
	$audio.on("volumechange",function(){
		vI.css("left",vol.width() * audio.volume - vI.width()/2 +"px") ;
		$("#volume .right .this").css("width",vol.width() * audio.volume - vI.width()/2 +"px")
		
		console.log(vol.width())
//		console.log(audio.volume)
//		console.log(vI.width()/2)
		console.log(vol.width() * audio.volume - vI.width()/2)
	});
	

	
	//静音控制
	
	
	jin.on("touchend",function(){
		if($(this).attr("v")){
			//自定义
			audio.volume=$(this).attr("v");
			$(this).removeAttr("v")
			
		}else{
			$(this).attr("v",audio.volume)
			audio.volume=0;
		}
	})
	 
	
	//用户
	
	
	var user=$("#header .return a");
	var userLeft=$("#user .user-left");
	var userRight=$("#user .user-right");
	
	user.on("touchend",function(){
		$("#user").css("display","block")
		userLeft.addClass("dong");
		userLeft.removeClass("dongs");
		userRight.addClass("zhezhao");
		userRight.removeClass("zhezhaos");
	})
	
	userRight.on("touchend",function(){
		
		userLeft.removeClass("dong");
		userLeft.addClass("dongs");
		userRight.removeClass("zhezhao");
		userRight.addClass("zhezhaos");
		$("#user").css("display","block")
	})
	
	
	//喜欢
	
	
	var like=$("#floor #menu .center .like");
	like.on("touchend",function(){
		$(this).find("a").toggleClass("click");
		return false;
	})
	
	
	//循环方式
	
	
	var circ=$("#key .circulation a");
	var i=0;
	$("#key .circulation").on("touchend",function(){		
		if(i>=circ.length){
			i=0;
		}
		$("#key .circulation a").removeClass("active");
		$("#key .circulation a").eq(i).addClass("active");
		
		i++;
	})
	
	
//////////////////////////////////////////////////////////////////////



	
	$audio.on("volumechange",function(){
		
	})
	$audio.on("loadstart",function(){
		$("#header .name").html(music[index].name);
		$("#header .author").html(music[index].zuozhe);
		var volume=audio.volume;
		console.log(volume);
		vI.css("left",vol.width() *volume - vI.width()/2 +"px") ;
		$("#volume .right .this").css("width",vol.width() * audio.volume - vI.width()/2 +"px")
	})
	$audio.on("progress",function(){
		
	})
	$audio.on("canplay",function(){
		duration.html(time(audio.duration))
	})
	$audio.on("play",function(){
		a.html("&#xe673;");
		a.css("font-size","0.6rem")
	})
	$audio.on("pause",function(){
		a.html("&#xe78a;");
		a.css("font-size","0.6rem")
	})
	$audio.on("ended",function(){
		var indexs;
		if($("#key .circulation a.active").hasClass("all")){
			indexs=index+1;
			if(indexs>=music.length){
				indexs=0;
			}
		}else if($("#key .circulation a.active").hasClass("suiji")){
			indexs = parseInt( Math.random()*(music.length-1) );
		}else if($("#key .circulation a.active").hasClass("one")){
			indexs=index;
		};
		
		console.log(indexs)
		audio.src=music[indexs].src;
		index=indexs;
		add();
		audio.play();
	})
	$audio.on("timeupdate",function(){
		$(music[index].lyrics).each(function(i,v){
            if(time(audio.currentTime) == v.time){
                   console.log(time(audio.currentTime))
                
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3
                }
                var a=i+3;
               $(".lyric").empty()
                for(var j=i;j<music[index].lyrics.length;j++){
                    $("<p class="+ j +">"+music[index].lyrics[j].lyric+"</p>").appendTo("#lyric .lyric-box .lyric")
                }
                $("."+a).addClass("active")
            }
        })
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
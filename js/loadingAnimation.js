function playLoadingAnim(a){var b=randomSonic();return b.play(),a.appendChild(b.canvas),b}function randomSonic(){var a=parseInt(3*Math.random(),10);return 0==a?new Sonic({width:200,height:200,stepsPerFrame:4,trailLength:1,pointDistance:.02,fps:30,fillColor:"#FF7B24",setup:function(){this._.lineWidth=20},step:function(a,b,c){var d=a.progress,e=360*d,f=Math.PI/180*e,g=Math.PI/180*(e-180),h=8*b;this._.fillRect(90*Math.cos(f)+(100-h/2),40*Math.sin(f)+(100-h/2),h,h),this._.fillStyle="#63D3FF",this._.fillRect(40*Math.cos(g)+(100-h/2),90*Math.sin(g)+(100-h/2),h,h),1==a.progress&&(this._.globalAlpha=.5>c?1-c:c,this._.fillStyle="#EEE",this._.beginPath(),this._.arc(100,100,6,0,360,0),this._.closePath(),this._.fill())},path:[["line",80,20,120,180]]}):1==a?new Sonic({width:100,height:60,padding:10,stepsPerFrame:2,trailLength:1,pointDistance:.03,strokeColor:"#FF7B24",step:"fader",multiplier:2,setup:function(){this._.lineWidth=10},path:[["arc",10,10,10,-270,-90],["bezier",10,0,40,20,20,0,30,20],["arc",40,10,10,90,-90],["bezier",40,0,10,20,30,0,20,20]]}):2==a?new Sonic({width:100,height:100,stepsPerFrame:4,trailLength:.8,pointDistance:.01,fps:20,path:[["arc",60,60,30,0,360]],step:function(a,b){var d=10,e=d*(b>.5?1-b:b);drawFlame.call(this,"#FF6C08",a.x*b,a.y,e),drawFlame.call(this,"#FFD341",a.x,a.y*b,e),drawFlame.call(this,"#FF3000",a.x,a.y,e)}}):void 0}function drawFlame(a,b,c,d){this._.fillStyle=a,this._.beginPath(),this._.arc(b,c,d,0,2*Math.PI,!1),this._.closePath(),this._.fill()}
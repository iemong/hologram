
function outputVideo2(){
	 var video = document.getElementById("myVideo");
  	 var canvas = document.getElementById("myCanvas");
	 var ctx = canvas.getContext("2d");	
	 var canvas_width = canvas.getAttribute("data-width");
	 canvas_width = parseInt(canvas_width);
	 var canvas_height = canvas.getAttribute("data-height");
	 canvas_height = parseInt(canvas_height);
	 var video_width = video.getAttribute("data-width");
	 video_width = parseInt(video_width);
	 var video_height = video.getAttribute("data-height");
	 video_height = parseInt(video_height);

	 console.log(video_height);
	 setInterval(function(){
         //ctx.clearRect (0 , 0 , 600 , 400);
          ctx.globalCompositeOperation = "source-over";
          ctx.save ();
          ctx.translate(video_width / 2, video_height / 2);
          ctx.rotate(180 / 180 * Math.PI);
        　ctx.translate(-1 * video_width / 2, -1 * video_height / 2);
         ctx.translate(-1 * (canvas_width / 2 - video_width / 2), -1 * (canvas_height - video_height));
		  ctx.drawImage(video, 0, 0, video_width, video_height);
          ctx.restore ();
          ctx.fillStyle = "rgb(0,0,0)";
          ctx.drawImage(video, canvas_width /2 - video_width / 2, 0, video_width, video_height);
          ctx.globalCompositeOperation = "destination-atop";
          ctx.beginPath();
          ctx.moveTo(0,0);
          ctx.lineTo(canvas_width, 0);
          ctx.lineTo(0, canvas_height);
          ctx.lineTo(canvas_width, canvas_height);
          ctx.lineTo(canvas_width / 2, canvas_height / 2);
          ctx.closePath();	  
          ctx.fill();
          ctx.globalCompositeOperation = "source-over";
          //ctx.clip();
          
         
	  }, 1000/30);
}

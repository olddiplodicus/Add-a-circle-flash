jQuery(document).ready(function() {
	// jQuery("h1").before("<div style='z-index:1000; padding:10px; top: -300px; left:75px; width: 124px; height:124px; background-color: white; border: 5px solid #4c77aa; border-radius: 62px; '><p style='width:100%; text-align:center; font-weight:bold'>We are experts <br> in form creation!</p></div>");
	
	jQuery("div.site-branding-text").before('<div id="homepageflash_wrap"><canvas id="homepageflash"></canvas></div>')
		var can = document.getElementById('homepageflash');
		var context = can.getContext('2d');
		jQuery("#homepageflash").attr( {
			width: 150,
            height: 150
		}) 
 
        jQuery("#homepageflash_wrap").css( 
        	'left', '400px', 'position', 'relative');
       jQuery("#homepageflash").css( 
        	'float', 'right', 'position', 'relative', 'top', '-250px');
      var centerX = 150 / 2;
      var centerY = 150 / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#5a95da';
      context.stroke();
      context.translate(-24,24);
		context.fillStyle = "black";
		context.font = "bold 20px Arial";
		context.textAlign = "center";
		
		context.rotate(-20*Math.PI/180);
		context.fillText("We are ", (can.width / 2), (can.height / 2) + -24);
		context.fillText("HTML form", can.width / 2, (can.height / 2) + 0);
		context.fillText("experts", can.width / 2, (can.height / 2) + 24); 
		context.fillText("too", can.width / 2, (can.height / 2) + 48); 

		context.shadowColor = '#333';
      context.shadowBlur = 20;
      context.shadowOffsetX = 15;
      context.shadowOffsetY = 15;

      
})
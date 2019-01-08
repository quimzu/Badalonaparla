jQuery(document).ready(function($) {

loadImage = new Image();
loadImage.src = "https://www.badalonaparla.cat/sites/all/themes/basic/images/1.jpg";

loadImage2 = new Image();
loadImage2.src = "https://www.badalonaparla.cat/sites/all/themes/basic/images/2.jpg";

loadImage3 = new Image();
loadImage3.src = "https://www.badalonaparla.cat/sites/all/themes/basic/images/3.jpg";

  //This will be random from bg1.jpg to bg10.jpg
  /* $("#top").css("background-image", "url(https://www.badalonaparla.cat/sites/all/themes/basic/images/"+GenerateNumber(3)+".jpg)");*/

   //1 to max
   function GenerateNumber(max) {
      return Math.floor(Math.random()*max) + 1;
   }

$('body,html').scrollTop(505);

$("#navigation li.last a").click(function() {
		$('body,html').animate({scrollTop : 0},'slow');
 $("#top").css("background-image", "url(https://www.badalonaparla.cat/sites/all/themes/basic/images/"+GenerateNumber(3)+".jpg)");
	 return false;
	});



$("#top").css({
             height: $(window).height()
        });

$("#full").css({
             top: $(window).height()
        });

	$(".view-portada ul li").click(function() {
	 
	 var url=$(this).find("a").attr("href");
	 location.href=url;
	 return false

	}); 
	


$(".view-portada ul li#0").append('<img src="https://dl.dropboxusercontent.com/u/274605/logo_festes.png"/>');	
		
 			
});

 		
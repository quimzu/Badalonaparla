jQuery(document).ready(function($) {

//Precarregar imatges logos:
loadImage = new Image();
loadImage.src = "/sites/default/files/arnau_hover.jpg";

loadImage2 = new Image();
loadImage2.src = "/sites/default/files/quim_hover.jpg";

loadImage3 = new Image();
loadImage3.src = "/sites/default/files/julia_hover.jpg";

loadImage4 = new Image();
loadImage4.src = "/sites/default/files/carla_hover.jpg";

loadImage5 = new Image();
loadImage5.src = "/sites/default/files/arnau_dreta.jpg";

loadImage6 = new Image();
loadImage6.src = "/sites/default/files/quim_esquerra.jpg";

loadImage7 = new Image();
loadImage7.src = "/sites/default/files/julia_dreta.jpg";

loadImage8 = new Image();
loadImage8.src = "/sites/default/files/carla_esquerra.jpg";

loadImage9 = new Image();
loadImage9.src = "/sites/default/files/arnau_abaix.jpg";

loadImage10 = new Image();
loadImage2.src = "/sites/default/files/quim_adalt.jpg";

loadImage11 = new Image();
loadImage11.src = "/sites/default/files/julia_adalt.jpg";

loadImage12 = new Image();
loadImage12.src = "/sites/default/files/carla_abaix.jpg";

loadImage13 = new Image();
loadImage13.src = "/sites/default/files/julia_diagonal.jpg";

loadImage14 = new Image();
loadImage14.src = "/sites/default/files/carla_diagonal.jpg";

loadImage15 = new Image();
loadImage15.src = "/sites/default/files/arnau_diagonal.jpg";

loadImage16 = new Image();
loadImage16.src = "/sites/default/files/quim_diagonal.jpg";

//loadImage17 = new Image();
//loadImage17.src = "/sites/default/files/julia_dreta.jpg";
//
//loadImage18 = new Image();
//loadImage18.src = "/sites/default/files/carla_esquerra.jpg";
//
//loadImage19 = new Image();
//loadImage19.src = "/sites/default/files/arnau_abaix.jpg";
//
//loadImage20 = new Image();
//loadImage20.src = "/sites/default/files/quim_abaix.jpg";
//


	
	
	
$("#carla").live("mouseover", function(){ 
 	$(this).children("img").attr("src", "/sites/default/files/carla_hover.jpg"); 
 	$("#arnau img").attr("src", "/sites/default/files/arnau_dreta.jpg"); 
 	$("#quim img").attr("src", "/sites/default/files/quim_adalt.jpg"); 
 	$("#julia img").attr("src", "/sites/default/files/julia_diagonal.jpg"); 
 	
 	
 	$(".cv").hide();	 
 	$(".cv-carla").show();	 

});

$("#carla").live("mouseout", function(){ 
	$(this).children("img").attr("src", "/sites/default/files/carla.jpg");
// 	$("#arnau img").attr("src", "/sites/default/files/arnau.jpg"); 
// 	$("#quim img").attr("src", "/sites/default/files/quim.jpg"); 
//  	$("#julia img").attr("src", "/sites/default/files/julia.jpg"); 
// 
 	
	


});
	 
$("#quim").live("mouseover", function(){ 
 	$(this).children("img").attr("src", "/sites/default/files/quim_hover.jpg"); 
	 $("#arnau img").attr("src", "/sites/default/files/arnau_diagonal.jpg"); 
	 $("#carla img").attr("src", "/sites/default/files/carla_abaix.jpg"); 
	 $("#julia img").attr("src", "/sites/default/files/julia_dreta.jpg"); 	
 
 	 	$(".cv").hide();	 
 		
 	 $(".cv-quim").show();	

});

$("#quim").live("mouseout", function(){ 
	$(this).children("img").attr("src", "/sites/default/files/quim.jpg");
//	$("#arnau img").attr("src", "/sites/default/files/arnau.jpg"); 
//	$("#carla img").attr("src", "/sites/default/files/carla.jpg"); 
//	$("#julia img").attr("src", "/sites/default/files/julia.jpg"); 

});		  	

$("#arnau").live("mouseover", function(){ 
 	$(this).children("img").attr("src", "/sites/default/files/arnau_hover.jpg"); 
 	$("#quim img").attr("src", "/sites/default/files/quim_diagonal.jpg"); 
 	$("#carla img").attr("src", "/sites/default/files/carla_esquerra.jpg"); 
 	$("#julia img").attr("src", "/sites/default/files/julia_adalt.jpg"); 	
 	 	$(".cv").hide();	 	 
	$(".cv-arnau").show();	
});

$("#arnau").live("mouseout", function(){ 
	$(this).children("img").attr("src", "/sites/default/files/arnau.jpg");
	

});		
	
$("#julia").live("mouseover", function(){ 
 	$(this).children("img").attr("src", "/sites/default/files/julia_hover.jpg"); 	
 	 $("#quim img").attr("src", "/sites/default/files/quim_esquerra.jpg"); 
 	 $("#carla img").attr("src", "/sites/default/files/carla_diagonal.jpg"); 
 	 $("#arnau img").attr("src", "/sites/default/files/arnau_abaix.jpg"); 		
 	 	
 	 	$(".cv").hide();	 
 	 
	$(".cv-julia").show();	
});

$("#julia").live("mouseout", function(){ 
	$(this).children("img").attr("src", "/sites/default/files/julia.jpg");

});		
	
 			
});

 		
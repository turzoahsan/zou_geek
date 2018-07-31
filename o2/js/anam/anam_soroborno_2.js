

    var sound11= document.getElementById('sounde11');
    var sound12= document.getElementById('sounde12');
    var sound13= document.getElementById('sounde13');
    var sound14= document.getElementById('sounde14');
    var sound15= document.getElementById('sounde15');
    var selected=1;


function init()
{
document.getElementById(selected).style.backgroundColor = "red";

}
init();
function test(){
    alert("I am authorized");
}
function select_letter(x)
{
    // alert("I am clicked");

    setTimeout(function(){
        document.getElementById("refresh_button").style.display = "none";
    },0);
    setTimeout(function(){
        $("#play_button").fadeIn();        
    },0);	
    
  

	document.getElementById("sb1_head2").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"
	document.getElementById("sb1_head3").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"

	document.getElementById("bigLtr").style.visibility = 'hidden';

	document.getElementById(x).style.backgroundColor = "red";

	document.getElementById(selected).style.backgroundColor = "#3A72B8";
	document.getElementById(selected).style.backgroundColor = "#3A72B8";

	var img2_src='images/BIG_sb'+x+'.png';
	document.getElementById("myLtr").src = img2_src;

	var img_src='images/an'+x+'_1.gif';
	document.getElementById("sb1_img").src = img_src;

	var lekhi='anam_1_cl1_'+x+'.html';
    document.getElementById("cholo_lk").href=lekhi;

    var shikhi='as'+x+'.html';
    document.getElementById("cholo_sk").href=shikhi;
	
	selected=x;	
}
function sb_animation()
{
    // alert("i am clickd");
   


$('#myLtr').removeClass('letter_anm');

 document.getElementById("bigLtr").style.visibility = "none";

	if(selected==1)
	{
	// <!--     --------------------  AUDIO ---------------------    -->
		setTimeout(function() {
      sound1_1.play();
		}, 1000);
		setTimeout(function() {
      sound1_2.play();
		}, 3000);
		setTimeout(function() {
      sound1_3.play();
		}, 5000);
		setTimeout(function() {
      sound1_4.play();
		},7000);
		setTimeout(function() {
      sound1.play();
		}, 8000);
		
		// <!--     --------------------  Animation ---------------------    -->
        
	   

        setTimeout(function(){
            $("#play_button").css("pointer-events", "none");
        }, 1000);
        setTimeout(function(){
            $("#play_button").fadeOut();
            $("#refresh_button").fadeIn();
            $("#play_button").css("pointer-events", "auto");
        }, 12000);
        
        $('#refresh_button').click(function() {
            location.reload();
        });





    	setTimeout(function() {
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>অ</span>জ </span> <span id='sp2'>আসে</span>";
    	
    	 }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp3'><span id='sp3_1'>অ</span>লি </span> <span id='sp4'>হাসে</span>";
         }, 4500);

    	document.getElementById("sb1_img").style.visibility="visible";

    	setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

    	setTimeout(function() {document.getElementById("sp1").style.color="black";
    	                       document.getElementById("sp2").style.color="black";}, 1500);

    	setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
    	setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);
    		
    	setTimeout(function() {document.getElementById("sb1_img").src = "images/an1_2.gif";}, 4000);



    	document.getElementById("sb1_img").style.visibility="visible";
    	setTimeout(function() {document.getElementById("sp3").style.color="red";}, 5000);
    	setTimeout(function() {document.getElementById("sp3").style.color="black";
    	                       document.getElementById("sp4").style.color="black";}, 5500);

    	setTimeout(function() {document.getElementById("sp4").style.color="black";}, 6000);
    	setTimeout(function() {document.getElementById("sp3_1").style.color="red";},7000);

    	setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
    		                      $('#myLtr').addClass('letter_anm');
    		                  },10500);

    
        // new added
        setTimeout(function() {
            
                                $('#newText').addClass('left_first_text');
                                }, 4000);        
        


        // function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>অ</span><span id='sp1_2_anam'>জ</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            var d_text_2 = "<span id='sp3_anam'><span id='sp3_1_anam'>অ</span><span id='sp3_2_anam'>লি</span> </span>";  
            setTimeout(function(){                
                document.getElementById('newText2').innerHTML = d_text_2;
            }, 8000); 
            setTimeout(function() {document.getElementById("sp3_1_anam").style.color="red";}, 8000);

            setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        // }
        // new_anam();

       

        // setTimeout(function(){
        //     var d_text = "<span id='sp3_anam'><span id='sp3_1_anam'>অ</span><span id='sp3_2_anam'>লি</span> </span>";            
        //     document.getElementById('newText2').innerHTML = d_text;
        // }, 8000);
        
        // $("#sp1_anam").fadeOut(10000);

        // setTimeout(function(){
        //     $('#sp1_2_anam').css('opacity', '0');
        // }, 9000);
        // setTimeout(function(){
        //     $('#sp3_2_anam').css('opacity', '0');
        // }, 9000);



        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
	}
    



// ############################################ item 2 ########################################## //


	
	if(selected==2)
	{
//	<!--     --------------------  AUDIO ---------------------    -->
		setTimeout(function() {
      sound2_1.play();
		}, 1000);
		setTimeout(function() {
      sound2_2.play();
		}, 3000);
		setTimeout(function() {
      sound2_3.play();
		}, 5000);
		setTimeout(function() {
      sound2_4.play();
		},7000);
		setTimeout(function() {
      sound2.play();
		}, 8000);
		

// <!--     --------------------  Animation ---------------------    -->
      

        setTimeout(function(){
            $("#play_button").css("pointer-events", "none");
        }, 1000);
        setTimeout(function(){
            $("#play_button").fadeOut();
            $("#refresh_button").fadeIn();
            $("#play_button").css("pointer-events", "auto");
        }, 12000);
        
        $('#refresh_button').click(function() {
            location.reload();
        });


		
		setTimeout(function() {
     document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>আ</span>ম </span> <span id='sp2'>খাই</span>";
	 
	 }, 0);

        setTimeout(function() {
     
      document.getElementById("sb1_head3").innerHTML="<span id='sp3'><span id='sp3_1'>আ</span>তা </span> <span id='sp4'>চাই</span>";
     }, 4500);
		
		setTimeout(function() {
       document.getElementById("sp1").style.color="red";}, 500);
		setTimeout(function() {
      document.getElementById("sp1").style.color="black";
	  document.getElementById("sp2").style.color="black";}, 1500);
		setTimeout(function() {
      document.getElementById("sp2").style.color="black";}, 2000);
		setTimeout(function() {
       document.getElementById("sp1_1").style.color="red";},3000);
		
		setTimeout(function() {
    
	 document.getElementById("sb1_img").src = "images/an2_2.gif";
	 }, 4000);
		
		setTimeout(function() {
       document.getElementById("sp3").style.color="red";}, 4500);
		setTimeout(function() {
      document.getElementById("sp3").style.color="black";
	  document.getElementById("sp4").style.color="black";}, 5000);
		setTimeout(function() {
      document.getElementById("sp4").style.color="black";}, 6000);
		setTimeout(function() {
       document.getElementById("sp3_1").style.color="red";},7000);
		setTimeout(function() {
		$('#myLtr').addClass('letter_anm');
	    document.getElementById("bigLtr").style.visibility = "visible";},10000);



        // ################### ----- new added ---- #################### //
        setTimeout(function() {
            
            $('#newText').addClass('left_first_text');
            }, 4000);        
        

        // function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>আ</span><span id='sp1_2_anam'>ম</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            var d_text_2 = "<span id='sp3_anam'><span id='sp3_1_anam'>আ</span><span id='sp3_2_anam'>তা</span> </span>";  
            setTimeout(function(){                
                document.getElementById('newText2').innerHTML = d_text_2;
            }, 8000); 
            setTimeout(function() {document.getElementById("sp3_1_anam").style.color="red";}, 8000);

            setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        // }
        // new_anam();

       

        



        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);

        //########----------- end of the new added code... ----------################//
		
	}


// ############################################ item 3 ########################################## //
        if(selected==3)
    {
    // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound3_1.play();
        }, 1000);
        setTimeout(function() {
      sound3_2.play();
        }, 3000);
        setTimeout(function() {
      sound3_3.play();
        }, 5000);
        setTimeout(function() {
      sound3_4.play();
        },7000);
        setTimeout(function() {
      sound3.play();
        }, 8000);
        
        // <!--     --------------------  Animation ---------------------    -->
        
    
        setTimeout(function(){
            $("#play_button").css("pointer-events", "none");
        }, 1000);
        setTimeout(function(){
            $("#play_button").fadeOut();
            $("#refresh_button").fadeIn();
            $("#play_button").css("pointer-events", "auto");
        }, 12000);
        
        $('#refresh_button').click(function() {
            location.reload();
        });


        
        setTimeout(function() {
     document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ই</span>ট </span> <span id='sp2'>আনি</span>";
     
    }, 0);

        setTimeout(function() {
     
      document.getElementById("sb1_head3").innerHTML="<span id='sp3'><span id='sp3_1'>ই</span>লিশ </span> <span id='sp4'>কিনি</span>";
    }, 4500);
        
        setTimeout(function() {
       document.getElementById("sp1").style.color="red";}, 500);
        setTimeout(function() {
      document.getElementById("sp1").style.color="black";
      document.getElementById("sp2").style.color="black";}, 1500);
        setTimeout(function() {
      document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {
       document.getElementById("sp1_1").style.color="red";},3000);
        
        setTimeout(function() {
    
     document.getElementById("sb1_img").src = "images/an3_2.gif";
     }, 4000);
        
        setTimeout(function() {
       document.getElementById("sp3").style.color="red";}, 4500);
        setTimeout(function() {
      document.getElementById("sp3").style.color="black";
      document.getElementById("sp4").style.color="black";}, 5000);
        setTimeout(function() {
      document.getElementById("sp4").style.color="black";}, 6000);
        setTimeout(function() {
       document.getElementById("sp3_1").style.color="red";},7000);
        setTimeout(function() {
        $('#myLtr').addClass('letter_anm');
        document.getElementById("bigLtr").style.visibility = "visible";},10000);



        // ################### ----- new added ---- #################### //
        setTimeout(function() {
            
                                $('#newText').addClass('left_first_text');
                                }, 4000);        
        


        // function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ই</span><span id='sp1_2_anam'>ট</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            var d_text_2 = "<span id='sp3_anam'><span id='sp3_1_anam'>ই</span><span id='sp3_2_anam'>লিশ</span> </span>";  
            setTimeout(function(){                
                document.getElementById('newText2').innerHTML = d_text_2;
            }, 8000); 
            setTimeout(function() {document.getElementById("sp3_1_anam").style.color="red";}, 8000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        // }
        // new_anam();

       

        



        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
        //########----------- end of the new added code... ----------################//
        
    }
	


// ############################################ item 4 ########################################## //


	
	


// ############################################ item 5 ########################################## //

	




// ############################################ item 6 ########################################## //
	
	




// ############################################ item 7 ########################################## //
	
	



// ############################################ item 8 ########################################## //
	
	



// ############################################ item 9 ########################################## //

	




// ############################################ item 10 ########################################## //


	




// ############################################ item 11 ########################################## //

	
	
	
}
$('.carousel').carousel({
    interval: false
}) 

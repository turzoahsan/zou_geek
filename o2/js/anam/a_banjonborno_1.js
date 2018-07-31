

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

function select_letter(x)
{

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

	var img2_src='img/BIG_bn'+x+'.png';
	document.getElementById("myLtr").src = img2_src;

	var img_src='images/ban'+x+'_1.gif';
	document.getElementById("sb1_img").src = img_src;

	var lekhi='anam_1_clb_'+x+'.html';
    document.getElementById("cholo_lk").href=lekhi;

    // var shikhi='as'+x+'.html';
     var shikhi='404.html';
    document.getElementById("cholo_sk").href=shikhi;
	
	selected=x;	
}




function sb_animation()
{

    $('#myLtr').removeClass('letter_anm');

    document.getElementById("bigLtr").style.visibility = "none";

//################################################################################## item 1 ########################################################################//
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
      sound1.play();
        }, 5000);
        
		
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ক</span>লম </span> <span id='sp2'>ধরি</span>";    	
    	 }, 0);

       

    	document.getElementById("sb1_img").style.visibility="visible";

    	setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

    	setTimeout(function() {document.getElementById("sp1").style.color="black";
    	                       document.getElementById("sp2").style.color="black";}, 1500);

    	setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
    	setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

    	setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
    		                      $('#myLtr').addClass('letter_anm');
    		                  },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ক</span><span id='sp1_2_anam'>লম</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
	}
    





//################################################################################## item 2 ########################################################################//
    if(selected==2)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound2_1.play();
        }, 1000);
        setTimeout(function() {
      sound2_2.play();
        }, 3000);
        setTimeout(function() {
      sound2.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>খ</span>বর </span> <span id='sp2'>পড়ি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>খ</span><span id='sp1_2_anam'>বর</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //



//################################################################################## item 3 ########################################################################//
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
      sound3.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>গ</span>ম </span> <span id='sp2'>ভাঙাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>গ</span><span id='sp1_2_anam'>ম</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 4 ########################################################################//
    if(selected==4)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound4_1.play();
        }, 1000);
        setTimeout(function() {
      sound4_2.play();
        }, 3000);
        setTimeout(function() {
      sound4.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ঘ</span>র </span> <span id='sp2'>বানাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঘ</span><span id='sp1_2_anam'>র</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 5 ########################################################################//
    if(selected==5)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound5_1.play();
        }, 500);
        setTimeout(function() {
      sound5_2.play();
        }, 3500);
        setTimeout(function() {
      sound5.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>ব্যা<span id='sp1_1'>ঙ</span> ডাকে</span> <span id='sp2'> ঘ্যাঙ ঘ্যাঙ</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ব্যা</span><span id='sp1_2_anam'>ঙ</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


//################################################################################## item 6 ########################################################################//
    if(selected==6)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound6_1.play();
        }, 1000);
        setTimeout(function() {
      sound6_2.play();
        }, 3000);
        setTimeout(function() {
      sound6.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>চ</span>শমা</span> <span id='sp2'> রাখি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>চ</span><span id='sp1_2_anam'>শমা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //




//################################################################################## item 7 ########################################################################//
    if(selected==7)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound7_1.play();
        }, 1000);
        setTimeout(function() {
      sound7_2.play();
        }, 3000);
        setTimeout(function() {
      sound7.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ছ</span>বি</span> <span id='sp2'> দেখি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ছ</span><span id='sp1_2_anam'>বি</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


//################################################################################## item 8 ########################################################################//
    if(selected==8)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound8_1.play();
        }, 1000);
        setTimeout(function() {
      sound8_2.play();
        }, 3000);
        setTimeout(function() {
      sound8.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>জ</span>ল</span> <span id='sp2'> নামে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>জ</span><span id='sp1_2_anam'>ল</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 9 ########################################################################//
    if(selected==9)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound9_1.play();
        }, 1000);
        setTimeout(function() {
      sound9_2.play();
        }, 3000);
        setTimeout(function() {
      sound9.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ঝ</span>ড়</span> <span id='sp2'> থামে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঝ</span><span id='sp1_2_anam'>ড়</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //




//################################################################################## item 10 ########################################################################//
    if(selected==10)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound10_1.play();
        }, 1000);
        setTimeout(function() {
      sound10_2.play();
        }, 3000);
        setTimeout(function() {
      sound10.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>মি<span id='sp1_1'>ঞা</span> ডাকে</span> <span id='sp2'> রোদে ঘেমে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>মি</span><span id='sp1_2_anam'>ঞা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //



//################################################################################## item 11 ########################################################################//
    if(selected==11)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound11_1.play();
        }, 1000);
        setTimeout(function() {
      sound11_2.play();
        }, 3000);
        setTimeout(function() {
      sound11_.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ট</span>গর </span> <span id='sp2'>তুলি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ট</span><span id='sp1_2_anam'>গর</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


//################################################################################## item 12 ########################################################################//
    if(selected==12)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound12_1.play();
        }, 1000);
        setTimeout(function() {
      sound12_2.play();
        }, 3000);
        setTimeout(function() {
      sound12_.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ঠো</span>ঙা </span> <span id='sp2'>খুলি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঠো</span><span id='sp1_2_anam'>ঙা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //	

//################################################################################## item 13 ########################################################################//
    if(selected==13)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound13_1.play();
        }, 1000);
        setTimeout(function() {
      sound13_2.play();
        }, 3000);
        setTimeout(function() {
      sound13.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ডা</span>ব</span> <span id='sp2'> খাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ডা</span><span id='sp1_2_anam'>ব</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 14 ########################################################################//
    if(selected==14)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound14_1.play();
        }, 1000);
        setTimeout(function() {
      sound14_2.play();
        }, 3000);
        setTimeout(function() {
      sound14.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ঢা</span>ক</span> <span id='sp2'> বাজাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঢা</span><span id='sp1_2_anam'>ক</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 15 ########################################################################//
    if(selected==15)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound15_1.play();
        }, 1000);
        setTimeout(function() {
      sound15_2.play();
        }, 3000);
        setTimeout(function() {
      sound15.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>চর<span id='sp1_1'>ণ</span> ফেলে </span> <span id='sp2'>মাঠে যাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>চর</span><span id='sp1_2_anam'>ণ</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 16 ########################################################################//
    if(selected==16)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound16_1.play();
        }, 1000);
        setTimeout(function() {
      sound16_2.play();
        }, 3000);
        setTimeout(function() {
      sound16.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ত</span>বলা</span> <span id='sp2'> বাজাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ত</span><span id='sp1_2_anam'>বলা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

//################################################################################## item 17 ########################################################################//
    if(selected==17)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound17_1.play();
        }, 1000);
        setTimeout(function() {
      sound17_2.play();
        }, 3000);
        setTimeout(function() {
      sound17.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>থা</span>লা</span> <span id='sp2'> সাজাই</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>থা</span><span id='sp1_2_anam'>লা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 18 ########################################################################//
    if(selected==18)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound18_1.play();
        }, 1000);
        setTimeout(function() {
      sound18_2.play();
        }, 3000);
        setTimeout(function() {
      sound18.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>দ</span>ই</span> <span id='sp2'> আনি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>দ</span><span id='sp1_2_anam'>ই</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 19 ########################################################################//
    if(selected==19)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound19_1.play();
        }, 1000);
        setTimeout(function() {
      sound19_2.play();
        }, 3000);
        setTimeout(function() {
      sound19.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ধা</span>মা</span> <span id='sp2'> টানি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ধা</span><span id='sp1_2_anam'>মা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 20 ########################################################################//
    if(selected==20)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound20_1.play();
        }, 1000);
        setTimeout(function() {
      sound20_2.play();
        }, 3000);
        setTimeout(function() {
      sound20.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ন</span>দীর জলে</span><span id='sp2'> নাও চলে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ন</span><span id='sp1_2_anam'>দী</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


 //################################################################################## item 21 ########################################################################//
    if(selected==21)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound21_1.play();
        }, 1000);
        setTimeout(function() {
      sound21_2.play();
        }, 3000);
        setTimeout(function() {
      sound21.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>পা</span>তা </span> <span id='sp2'> নড়ে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>পা</span><span id='sp1_2_anam'>তা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 22 ########################################################################//
    if(selected==22)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound22_1.play();
        }, 1000);
        setTimeout(function() {
      sound22_2.play();
        }, 3000);
        setTimeout(function() {
      sound22.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ফ</span>ল </span> <span id='sp2'> পড়ে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ফ</span><span id='sp1_2_anam'>ল</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 23 ########################################################################//
    if(selected==23)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound23_1.play();
        }, 1000);
        setTimeout(function() {
      sound23_2.play();
        }, 3000);
        setTimeout(function() {
      sound23.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ব</span>ক </span> <span id='sp2'>গাছে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ব</span><span id='sp1_2_anam'>ক</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 24 ########################################################################//
    if(selected==24)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound24_1.play();
        }, 1000);
        setTimeout(function() {
      sound24_2.play();
        }, 3000);
        setTimeout(function() {
      sound24.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ভা</span>লুক </span> <span id='sp2'> নাচে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ভা</span><span id='sp1_2_anam'>লুক</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 25 ########################################################################//
    if(selected==25)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound25_1.play();
        }, 1000);
        setTimeout(function() {
      sound25_2.play();
        }, 3000);
        setTimeout(function() {
      sound25.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>মগ ডালে</span> <span id='sp2'> <span id='sp1_1'>ম</span>য়না দোলে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ম </span><span id='sp1_2_anam'>য়না</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 26 ########################################################################//
    if(selected==26)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound26_1.play();
        }, 1000);
        setTimeout(function() {
      sound26_2.play();
        }, 3000);
        setTimeout(function() {
      sound26.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>য</span>ব </span> <span id='sp2'> আনি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>য</span><span id='sp1_2_anam'>ব</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 27 ########################################################################//
    if(selected==27)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
      setTimeout(function() {
      sound27_1.play();
        }, 1000);
        setTimeout(function() {
      sound27_2.play();
        }, 3000);
        setTimeout(function() {
      sound27.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>র</span>থ</span> <span id='sp2'> টানি</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>র</span><span id='sp1_2_anam'>থ</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


 //################################################################################## item 28 ########################################################################//
    if(selected==28)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound28_1.play();
        }, 1000);
        setTimeout(function() {
      sound28_2.play();
        }, 3000);
        setTimeout(function() {
      sound28.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ল</span>তা</span> <span id='sp2'> দোলে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ল</span><span id='sp1_2_anam'>তা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


 //################################################################################## item 29 ########################################################################//
    if(selected==29)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound29_1.play();
        }, 1000);
        setTimeout(function() {
      sound29_2.play();
        }, 3000);
        setTimeout(function() {
      sound29.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>শ</span>শা</span> <span id='sp2'> ঝোলে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>শ</span><span id='sp1_2_anam'>শা</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 30 ########################################################################//
    if(selected==30)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound30_1.play();
        }, 1000);
        setTimeout(function() {
      sound30_2.play();
        }, 3000);
        setTimeout(function() {
      sound30.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>ষাঁ</span>র আসে</span><span id='sp2'> নদীর কূলে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ষাঁ</span><span id='sp1_2_anam'>র</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 31 ########################################################################//
    if(selected==31)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound31_1.play();
        }, 1000);
        setTimeout(function() {
      sound31_2.play();
        }, 3000);
        setTimeout(function() {
      sound31.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>স</span>বুজ </span> <span id='sp2'> পাতা</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>স</span><span id='sp1_2_anam'>বুজ</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


 //################################################################################## item 32 ########################################################################//
    if(selected==32)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound32_1.play();
        }, 1000);
        setTimeout(function() {
      sound32_2.play();
        }, 3000);
        setTimeout(function() {
      sound32.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>হ</span>লদে </span> <span id='sp2'> ছাতা</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>হ</span><span id='sp1_2_anam'>লদে</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


 //################################################################################## item 33 ########################################################################//
    if(selected==33)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound33_1.play();
        }, 1000);
        setTimeout(function() {
      sound33_2.play();
        }, 3000);
        setTimeout(function() {
      sound33.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>ঝ<span id='sp1_1'>ড়</span> </span> <span id='sp2'> থামে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঝ</span><span id='sp1_2_anam'>ড়</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 34 ########################################################################//
    if(selected==34)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound34_1.play();
        }, 1000);
        setTimeout(function() {
      sound34_2.play();
        }, 3000);
        setTimeout(function() {
      sound34.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>আ<span id='sp1_1'>ষাঢ়</span></span> <span id='sp2'> নামে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>আ</span><span id='sp1_2_anam'>ষাঢ়</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 35 ########################################################################//
    if(selected==35)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound35_1.play();
        }, 1000);
        setTimeout(function() {
      sound35_2.play();
        }, 3000);
        setTimeout(function() {
      sound35.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>পা<span id='sp1_1'>য়</span>য় যায়</span> <span id='sp2'> ঘরের কোনে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>পায়</span><span id='sp1_2_anam'>য়</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 36 ########################################################################//
    if(selected==36)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound36_1.play();
        }, 1000);
        setTimeout(function() {
      sound36_2.play();
        }, 3000);
        setTimeout(function() {
      sound36.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>উ<span id='sp1_1'>ৎ</span>সব</span> <span id='sp2'> মাঝে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>উৎ</span><span id='sp1_2_anam'>সব</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 37 ########################################################################//
    if(selected==37)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound37_1.play();
        }, 1000);
        setTimeout(function() {
      sound37_2.play();
        }, 3000);
        setTimeout(function() {
      sound37.play();
        }, 5000);
        
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>সং</span> </span><span id='sp2'> সাজে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>স</span><span id='sp1_2_anam'>ং</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //


 //################################################################################## item 38 ########################################################################//
    if(selected==38)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound38_1.play();
        }, 1000);
        setTimeout(function() {
      sound38_2.play();
        }, 3000);
        setTimeout(function() {
      sound38.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>দুঃখ</span></span><span id='sp2'> ভোলে</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>দুঃ</span><span id='sp1_2_anam'>খ</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //

 //################################################################################## item 39 ########################################################################//
    if(selected==39)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
      setTimeout(function() {
      sound39_1.play();
        }, 1000);
        setTimeout(function() {
      sound39_2.play();
        }, 3000);
        setTimeout(function() {
      sound39.play();
        }, 5000);
        
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'><span id='sp1_1'>চাঁদের</span> </span> <span id='sp2'> আলো</span>";      
         }, 0);

       

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                               document.getElementById("sp2").style.color="black";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";}, 2000);
        setTimeout(function() {document.getElementById("sp1_1").style.color="red";},3000);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                  $('#myLtr').addClass('letter_anm');
                              },5000);

    
        // new added
        setTimeout(function() {          
            $('#newText').addClass('left_first_text');
        }, 4000);        
    
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>চাঁ</span><span id='sp1_2_anam'>দের</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 4000); 
            setTimeout(function() {document.getElementById("sp1_1_anam").style.color="red";}, 4000);

            // setTimeout(function() {$("#sp1_anam").fadeOut();}, 12000); 
            // setTimeout(function() {$("#sp3_anam").fadeOut();}, 12000);  


        }
        new_anam();

        setTimeout(function(){

            $('#sp1_2_anam').animate({
                opacity:0
            }, 1000);
        }, 4500);

        setTimeout(function(){

            $('#sp3_2_anam').animate({
                opacity:0
            }, 1000);
        }, 9000);
    }
 // ##################################################################################################################################################################### //





	
}
$('.carousel').carousel({
    interval: false
}) 

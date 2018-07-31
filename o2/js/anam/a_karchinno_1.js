

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
    

    setTimeout(function(){
        document.getElementById("refresh_button").style.display = "none";
    },0);
    setTimeout(function(){
        $("#play_button").fadeIn();        
    },0);	
    
   

	document.getElementById("sb1_head2").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"
	document.getElementById("sb1_head3").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"

	document.getElementById("bigLtr").style.visibility = 'hidden';
    // document.getElementById("sp1_anam").style.visibility = 'hidden';

	document.getElementById(x).style.backgroundColor = "red";

	document.getElementById(selected).style.backgroundColor = "#3A72B8";
	document.getElementById(selected).style.backgroundColor = "#3A72B8";

	var img2_src='img/k_BIG_bn'+x+'.png';
	document.getElementById("myLtr").src = img2_src;

	var img_src='img/kar'+x+'_1.jpg';
	document.getElementById("sb1_img").src = img_src;

	var lekhi='anam_1_kar_'+x+'.html';
    document.getElementById("cholo_lk").href=lekhi;

    // var shikhi='as'+x+'.html';
    // document.getElementById("cholo_sk").href=shikhi;
	
	selected=x;	
}
function sb_animation()
{
   


    $('#myLtr').removeClass('letter_anm');

    document.getElementById("bigLtr").style.visibility = "none";
//################################################################## item 1 ###############################################################//
	if(selected==1)
	{
	   // <!--     --------------------  AUDIO ---------------------    -->
		setTimeout(function() {
      sound1_1.play();
        }, 1000);
		
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>কাকা</span> <span id='sp2'>যায়।</span> <span id='sp3'>&nbspডাব</span> <span id='sp4'>খায়।</span>";
    	
    	 }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>খালা</span> <span id='sp6'>যায়।</span> <span id='sp7'>&nbspজাম</span> <span id='sp8'>খায়।</span>";
         }, 4500);

    	document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar1_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
            		            $('#myLtr').addClass('letter_anm');
            		                  },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>আ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
	}


//##################################################################  ###############################################################//  



//################################################################## item 2 ###############################################################//
    if(selected==2)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound2_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>ডিম</span> <span id='sp2'>কিনি। </span> <span id='sp3'>&nbspঝিল</span> <span id='sp4'>চিনি।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>খিল</span> <span id='sp6'>টানি। </span> <span id='sp7'>&nbspআনি</span> <span id='sp8'>পানি।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar2_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ই-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 3 ###############################################################//
    if(selected==3)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
      setTimeout(function() {
      sound3_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>নদীর</span> <span id='sp2'>তীর।</span> <span id='sp3'>বাতাস</span> <span id='sp4'>ধীর।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>বিনা</span> <span id='sp6'>আনি। </span> <span id='sp7'>গীত </span> <span id='sp8'>শুনি।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar3_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঈ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 4 ###############################################################//
    if(selected==4)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound4_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>খুকুর </span> <span id='sp2'>ঘুঙুর।</span> <span id='sp3'>ঝুমুর </span> <span id='sp4'>ঝুমুর।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>মুমুর </span> <span id='sp6'>পুতুল।</span> <span id='sp7'>আমের </span> <span id='sp8'>মুকুল।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar4_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>উ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 5 ###############################################################//
    if(selected==5)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound5_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>ময়ূর </span> <span id='sp2'>যায়।</span> <span id='sp3'>নূপুর </span> <span id='sp4'>পায়।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>শূর </span> <span id='sp6'>যায়।</span> <span id='sp7'>দূর </span> <span id='sp8'>গাঁয়।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar5_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঊ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 6 ###############################################################//
    if(selected==6)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound6_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>বৃষ </span> <span id='sp2'>এল </span> <span id='sp3'>দৃঢ় </span> <span id='sp4'>পায়।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>মৃগ </span> <span id='sp6'>ছানা </span> <span id='sp7'>তৃণ </span> <span id='sp8'>খায়।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar6_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঋ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 7 ###############################################################//
    if(selected==7)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound7_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>জেলে </span> <span id='sp2'>জলে </span> <span id='sp3'>জাল </span> <span id='sp4'>ফেলে।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>ধরে </span> <span id='sp6'>মাছ </span> <span id='sp7'>হেসে </span> <span id='sp8'>খেলে।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar7_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>এ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 8 ###############################################################//
    if(selected==8)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound8_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>বৈশাখ </span> <span id='sp2'>মাসে </span> <span id='sp3'>বৈকাল </span> <span id='sp4'>বেলা।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>সৈকতে</span> <span id='sp6'>বসেছে</span> <span id='sp7'>মেলা।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar8_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঐ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 9 ###############################################################//
    if(selected==9)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
       setTimeout(function() {
      sound9_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>ছোলা </span> <span id='sp2'>খায় </span> <span id='sp3'>লোপা </span> <span id='sp4'>বসে।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>ঢোল </span> <span id='sp6'>হাতে </span> <span id='sp7'>খোকা </span> <span id='sp8'>হাসে</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar9_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        // new added
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ও-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  


//################################################################## item 10 ###############################################################//
    if(selected==10)
    {
       // <!--     --------------------  AUDIO ---------------------    -->
        setTimeout(function() {
      sound10_1.play();
        }, 1000);
        
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
        document.getElementById("sb1_head2").innerHTML="<span id='sp1'>মৌরি </span> <span id='sp2'>রাখি </span> <span id='sp3'>কৌটা </span> <span id='sp4'>ভরি।</span>";
        
         }, 0);

        setTimeout(function() {
        
        document.getElementById("sb1_head3").innerHTML="<span id='sp5'>চৌকা </span> <span id='sp6'>ঘুড়ি</span> <span id='sp7'>তৈরি</span> <span id='sp8'>করি।</span>";
         }, 4500);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp1").style.color="red";}, 500);

        setTimeout(function() {document.getElementById("sp1").style.color="black";
                                document.getElementById("sp2").style.color="red";}, 1500);

        setTimeout(function() {document.getElementById("sp2").style.color="black";
                                document.getElementById("sp3").style.color="red"; }, 2000);

        setTimeout(function() {document.getElementById("sp3").style.color="black";
                                document.getElementById("sp4").style.color="red"; }, 2500);

        setTimeout(function() {document.getElementById("sp4").style.color="black"; }, 3000);

        setTimeout(function() {document.getElementById("sb1_img").src = "img/kar10_2.jpg";}, 4000);

        document.getElementById("sb1_img").style.visibility="visible";

        setTimeout(function() {document.getElementById("sp5").style.color="red";}, 4500);

        setTimeout(function() {document.getElementById("sp5").style.color="black";
                                document.getElementById("sp6").style.color="red";}, 5000);

        setTimeout(function() {document.getElementById("sp6").style.color="black";
                                document.getElementById("sp7").style.color="red";}, 5500);

        setTimeout(function() {document.getElementById("sp7").style.color="black";
                                document.getElementById("sp8").style.color="red";}, 6000);

        setTimeout(function() {document.getElementById("sp8").style.color="black";}, 6500);

        setTimeout(function() {document.getElementById("bigLtr").style.visibility = "visible";
                                $('#myLtr').addClass('letter_anm');
                                      },9000);
    
        
        setTimeout(function() {           
            $('#newText').addClass('left_first_text');
        }, 4000);       
        
        function new_anam(){
            var d_text = "<span id='sp1_anam'><span id='sp1_1_anam'>ঔ-</span><span id='sp1_2_anam'>কার</span> </span>";
            setTimeout(function(){                
                document.getElementById('newText').innerHTML = d_text;
            }, 7000); 
            setTimeout(function() {document.getElementById("sp1_anam").style.color="red";}, 7000);

        }
        new_anam();


        setTimeout(function(){
            $('#sp1_2_anam').animate({
                opacity:1
            }, 1000);
        }, 9000);
        
    }
//##################################################################  ###############################################################//  



}
	
	

$('.carousel').carousel({
    interval: false
}) 

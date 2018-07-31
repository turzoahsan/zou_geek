var p=0;
// var x = 0;
function add_anm()
{
	// alert("just start");
if(p==0)
	{
		// alert("i am zero");
		$('#content_1').fadeIn('slow');   
		$('#content_2').fadeIn('slow'); 
		$('#content_3').fadeIn('slow'); 
		$('#content_4').fadeIn('slow'); 
			
		$('#content_4').addClass('classnamel'); 
		$('#content_4').removeClass('classnamelRv');

		$('#content_2').addClass('classnamer'); 
		$('#content_2').removeClass('classnamerRv');

		$('#content_1').addClass('classnamet');
		$('#content_1').removeClass('classnametRv');

		$('#content_3').addClass('classnameb');
		$('#content_3').removeClass('classnamebRv');	
	}
if(p==1)
	{	
		// alert("i am one");
		$('#content_4').addClass('classnamelRv');
		$('#content_4').removeClass('classnamel'); 

		$('#content_2').addClass('classnamerRv');
		$('#content_2').removeClass('classnamer'); 

		$('#content_1').addClass('classnametRv');
		$('#content_2').removeClass('classnamer'); 
		$('#content_3').addClass('classnamebRv');
		$('#content_2').removeClass('classnamer');

		$('#content_1').fadeOut('slow');   
		$('#content_2').fadeOut('slow'); 
		$('#content_3').fadeOut('slow'); 
		$('#content_4').fadeOut('slow'); 
		
		$(".slide_later").removeClass('new_later');
		$("#sl_bottom").removeClass('sl_bottom');
		$("#sl_left").removeClass('sl_left');
		$("#sl_top").removeClass('sl_top');
	}
	if(p==0)
	{
	p=1;
	}else{p=0}	
}


function top_clk()
{
	as1.play();	
}
function right_clk()
{
	as2.play();
}
function bottom_clk()
{
	as3.play();
}
function left_clk()
{
	as4.play();
}

function slideout(){
	
		$(".slide_later").toggleClass('new_later');
		
	
}
function slideout_bottom(){
	
		$("#sl_bottom").toggleClass('sl_bottom');
	
}
function slideout_left(){
	
		$("#sl_left").toggleClass('sl_left');
	
}
function slideout_top(){
	
		$("#sl_top").toggleClass('sl_top');
	
}




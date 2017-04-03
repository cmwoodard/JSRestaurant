$(document).ready(function(){	
	$('#content').append($('<div class="tabGrid"></div>'));
	$('.tabGrid').append($('<div class = "tab" id="tab1">Home</div>'));
	$('.tabGrid').append($('<div class = "tab" id="tab2">Menu</div>'));
	$('.tabGrid').append($('<div class = "tab" id="tab3">Contact</div>'));
	$('.tabGrid').append($('<div id="info"> </div>'));
	$('#tab1').addClass('active');
	drawHome();
	
	$('.tab').on('click', function(){		
		$(this).addClass('active');
		$('#info').html('');
		
		if($(this).attr('id') == "tab1"){			
			drawHome();
		}
		else if($(this).attr('id') == "tab2"){
			drawMenu();
		}
		else if($(this).attr('id') == "tab3"){
			drawContact();
		}
	});	
});

function drawHome(){
	$('#tab2').removeClass('active');
	$('#tab3').removeClass('active');
	$('#info').append($('<h1>Home</h1>'));
	$('#info').append($('<p>This place is great!</p>'));
}

function drawMenu(){
	$('#tab1').removeClass('active');
	$('#tab3').removeClass('active');
	$('#info').append($('<h1>Menu:</h1>'));
	$('#info').append($('<p>We have lots of stuff!</p>'));
	$('#info').append($('<ul>Thing 1</ul>'));
	$('#info').append($('<ul>Thing 2</ul>'));
	$('#info').append($('<ul>Thing 3</ul>'));
}

function drawContact(){
	$('#tab1').removeClass('active');
	$('#tab2').removeClass('active');
	$('#info').append($('<h1>Contact us:</h1>'));
	$('#info').append($('<h3>Office:</h3>'));
	$('#info').append($('<p>(800) 555-1234</p>'));
	$('#info').append($('<h3>Email:</h3>'));
	$('#info').append($('<p><a href=email:thisplace@gmail.com>thisplace@gmail.com</a></p>'));
	
}
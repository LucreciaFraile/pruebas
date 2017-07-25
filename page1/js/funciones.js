$(document).ready(function($) {

$totalClicks=0;


var result = $('#divOculto1').offset();
$leftInicial= result.left;

$medidaMarginTop:0;
$medidaMarginDivs:0;


/*valor del margen dependiendo de la versión*/



$('#divOculto1').hide();
$('#divOculto2').hide();
$('#divOculto3').hide();
$('#divOculto4').hide();


  $('#cuadrado').click(function() {

	  	if($totalClicks==0)
	  	{
	  		$('#divOculto1').show(200);
	  	}
	  	else if($totalClicks==1){
	  		
	  		$('#divOculto2').show('200', function() {
	  			if ($('#header').width()>460) 
	  			{
	  				$('#cuadrado').hide();
	  				$('#cuadrado').css({
		  			'margin-top': 5});
		  			$('#cuadrado').show();
	  			}
	  			else
	  			{
	  					//dispositivo movil
	  					$('#cuadrado').css({
		  			'margin-top': 5});
	  					$('#divOculto2').css({
		  			'margin-top': 5});


	  			}
	  		});
	  		
	  	}
	  	else if($totalClicks==2){
	  		$('#divOculto3').show(200);
	  	}
	  	else if($totalClicks==3){
	  		$('#divOculto4').show(200);
	  		$('#cuadrado').hide(200);
	  	}
	  	$totalClicks+=1;
    });

});

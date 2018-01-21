(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown_trigger').dropdown();
    var dropgame = true
    
    $('.game-menu').click(function(){
    	if (dropgame===true){
    		dropgame=false
    		$('.game-sub-nav').show();
    		} else {
    			dropgame=true
    			$('.game-sub-nav').hide();
    		}
    		});
    		

$('.dropdown-sidenav').hide();
  }); // end of document ready
})(jQuery); // end of jQuery name space
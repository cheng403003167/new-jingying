$(function(){
	$('.method').on('click',function(){
		$(this).parents(".on").find(".bank").slideToggle(function(){
			if($(this).css('display')=="none"){
				$(this).prev().find('.arr').css({
					"backgroundPosition":"-19px"
				})
			}else{
				$(this).prev().find('.arr').css({
					"backgroundPosition":"left"
				})
			}
		});
	})
})

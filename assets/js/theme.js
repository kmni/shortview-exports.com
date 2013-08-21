/***************************************************************************
 * @Author: NetChillies - PepUp The Web!
 * @Website: http://www.netchillies.com/
 * @Contact: http://www.netchillies.com/contact
 * @Privacy Policy & Terms of Use: http://www.netchillies.com/terms
 * @License Info: http://www.netchillies.com/license
 ***************************************************************************/

var hju	= {
	slides:	function(){
		$('.slideshow').slides({
        	width:				894,
        	autoHeight:			true,
        	preloadImage:		'/assets/images/ajax-loader.gif',
        	generateNextPrev:	false,
        	pagination:			false,
        	generatePagination:	false,
        	slideSpeed:			500,
        	play:				4000
		});
	},
	init:	function(){
		this.slides();
	}
};

$(document).ready(function(){
	hju.init();
});

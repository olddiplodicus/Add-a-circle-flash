<?php
/*
Plugin name: Home Picture Flash

Description: Shows a flash circle/shape over the opening picture in Twenty-Seventeen

*/
function lep_add_flash_scripts() {
wp_register_script('Add_the_flash', plugins_url('addflash.js', __FILE__), array('jquery'),'1.1', true);
wp_enqueue_script('Add_the_flash');
}


function homepageflash() { 
	str_replace('ensembles', 'orchestras', the_content());
	/* 
	<div id="homepageflash" 
	style="width:100px; height:100px; z-index:1000; top:50px; right:150px; background-color:white; border:1px solid red">
	We do forms!</div>
	*/
 } 

// add_action( "wp_loaded", "homepageflash"); 
add_action( 'wp_enqueue_scripts', 'lep_add_flash_scripts' );  

?>
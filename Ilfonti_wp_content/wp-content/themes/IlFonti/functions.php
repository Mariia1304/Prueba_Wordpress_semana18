<?php


	add_action( 'wp_enqueue_scripts', function() {

		wp_deregister_script('jquery');

	    //Enqueue Style
	    
	    wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/main.css');

	    //Enqueue Scripts

	    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js'
	        , null, null, true);
	   

	    // wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js'));

	} );

// registrar menu

	function menus_setup() {
	  register_nav_menus(
	    array(
	      'header-menu' => __( 'Header Menu' ),
	      'footer-menu' => __( 'Footer Menu' ),

	    )
	  );
	}
	add_action( 'after_setup_theme', 'menus_setup' );

// custom logo
	function config_custom_logo() {
	add_theme_support( 'custom-logo', array(
	  'height'      => 300,
	  'width'       => 300,
	  'flex-height' => true,
	  'flex-width'  => true,
	  'header-text' => array( 'site-title', 'site-description' ),
	));
	}
	add_action( 'after_setup_theme', 'config_custom_logo' );
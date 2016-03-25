<?php

add_filter('show_admin_bar', '__return_false');

function theme_enqueue_style()
{
    wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() .'/css/bootstrap.min.css', false );
    wp_enqueue_style( 'theme-css', get_template_directory_uri() .'/style.css', false );
}

function theme_enqueue_script()
{
    wp_enqueue_script( 'jquery-js', get_template_directory_uri() . '/js/jquery-2.1.4.min.js', [], '', true );
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', [], '', true );
    wp_enqueue_script( 'parallax-js', get_template_directory_uri() . '/js/parallax.min.js', [], '', true );
    wp_enqueue_script( 'app-js', get_template_directory_uri() . '/js/app.js', [], '', true );
}

add_action( 'wp_enqueue_scripts', 'theme_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'theme_enqueue_script' );
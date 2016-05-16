<?php get_header(); ?>

<!-- NAVBAR -->
<nav class="navbar">
    <div class="container-fluid">
        <div class="row">
            <div id="navbar-logo" class="col-sm-3">
                <img src="<?php bloginfo('template_directory'); ?>/img/logo_home.png">
            </div>

            <div class="col-sm-6 col-sm-offset-3">
                <div id="contact-info">
                    <i class="fa fa-phone"></i> <span>+61 415 520 602</span>
                    <br>
                    <i class="fa fa-envelope"></i> <span>contact@arepa.com.au</span>
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- FORM -->
<div id="ninja-form">
    <?php if( function_exists( 'ninja_forms_display_form' ) ){ ninja_forms_display_form( 5 ); } ?>
</div>

<!-- PARALLAX 1 -->
<div class="parallax-container" data-parallax="scroll" data-speed="0" data-image-src="<?php bloginfo('template_directory'); ?>/img/arepa.jpg">
    <div class="container">
        <div class="row">
            <div id="parallax-box" class="col-xs-12 col-sm-8 col-sm-offset-2">
                <h1>The best thing since the taco!</h1>

                <h2>Get a FREE drink with your next purchase</h2>

                <div class="alert alert-danger" role="alert">
                    Please enter a valid email address
                </div>

                <div class="alert alert-success" role="alert">
                    Thanks for your submission
                </div>

                <div class="input-group input-group-lg">
                    <input type="text" class="form-control" placeholder="E-mail address">
                    <span class="input-group-btn">
                        <button class="btn btn-success submit" type="button">Get voucher</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- TRUCK -->
<div class="container">
    <div id="truck-graphic" class="row">
        <div class="col-xs-12">
            <img src="<?php bloginfo('template_directory'); ?>/img/camion.png" class="img-responsive">
        </div>
    </div>
</div>

<!-- PARALLAX 2 -->
<div class="parallax-container" data-parallax="scroll" data-speed="0" data-image-src="<?php bloginfo('template_directory'); ?>/img/arepa.jpg">
    <div class="container">
        <div class="row">
            <div id="parallax-box" class="col-xs-12 col-sm-8 col-sm-offset-2">
                <h2 id="full-width">Would you like to know the next time we bring arepas to your area?</h2>

                <div class="alert alert-danger" role="alert">
                    Please enter a valid email address
                </div>

                <div class="alert alert-success" role="alert">
                    Thanks for your submission
                </div>

                <div class="input-group input-group-lg">
                    <input type="text" class="form-control" placeholder="E-mail address">
                    <span class="input-group-btn">
                        <button class="btn btn-success submit" type="button">Let me know</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- AREPA -->
<div class="container">
    <div id="truck-graphic" class="row">
        <div id="arepa-description" class="col-xs-12 col-sm-8 col-sm-offset-2">
            <img src="<?php bloginfo('template_directory'); ?>/img/arepa-description.jpg" class="img-responsive">
        </div>
    </div>
</div>

<!-- FOOTER -->
<div id="footer" class="container-fluid">
    <div class="row">
        <div id="social-icons" class="col-xs-12">
            <ul class="list-inline">
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" class="btn-social btn-outline"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
    </div>
</div>

<?php get_footer(); ?>
<?php get_header(); ?>
    <body>
        <?php
          $custom_logo_id = get_theme_mod( 'custom_logo' );
          $logo = wp_get_attachment_image_src( $custom_logo_id , 'large' );
        ?>
        <header>
            <a class="" href="http://mariiache.freshwork.cl">
                <img alt="" class="wow fadeIn" data-wow-delay=".2s" id="logo" src="<?php echo $logo[0]; ?>"/>
            </a>
        </header>
        <div class="carousel slide wow fadeIn" data-ride="carousel" data-wow-delay=".2s" id="carouselExampleInterval" style="margin-top: 20px;">
            <div class="carousel-inner">
               <div class="carousel-item active" data-interval="5000">
                    <img alt="" class="d-inline w-50" src="<?php echo get_field('foto1')['sizes']['slider'];?>" style="float: left;"/>
                    <img alt="" class="d-inline w-50" src="<?php echo get_field('foto2')['sizes']['slider'];?>" style="float: left;"/>
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img alt="" class="d-inline w-50" src="<?php echo  get_field('foto3')['sizes']['slider'];?>" style="float: left;"/>
                    <img alt="" class="d-inline w-50" src="<?php echo  get_field('foto4')['sizes']['slider'];?>"/>
                </div>
            </div>
            <a class="carousel-control-prev" data-slide="prev" href="#carouselExampleInterval" role="button">
                <span aria-hidden="true" class="carousel-control-prev-icon">
                </span>
                <span class="sr-only">
                    Previous
                </span>
            </a>
            <a class="carousel-control-next" data-slide="next" href="#carouselExampleInterval" role="button">
                <span aria-hidden="true" class="carousel-control-next-icon">
                </span>
                <span class="sr-only">
                    Next
                </span>
            </a>
        </div>
        <?php if ( has_nav_menu( 'header-menu' ) ) { ?>
        <div id="menu" style="margin-top: 20px;">
            <div class="row wow fadeIn" data-wow-offset="100">
                <div class="col-md-4 ">
                    <img alt="cena" class="img-fluid" id="cena" src="<?php echo get_template_directory_uri() . '/assets/img/sitio/cena.jpeg'?>"/>
                </div>

                <div class="col-md-4 " id="menu-select">
                     
                    <h1 style="margin-bottom: 0px;">
                        MENÚ
                    </h1>

                    <?php wp_nav_menu( array( 
                        'theme_location'    => 'header-menu',
                        'container' => false,
                        'menu_class' => false,
                        'menu_id' => 'menu-items'
                    )); ?>
            <?php } ?>
                    
                </div>
                <div class="col-md-4">
                    <img alt="" class="img-fluid" id="oliva" src="<?php echo get_template_directory_uri() . '/assets/img/sitio/oliva.png'?>"/>
                </div>
            </div>
            <!-- seccion antipastas -->
            <section class="wow fadeIn" data-wow-offset="100" id="antipastos" style="margin:20px;">
                <h1>
                     <?php the_field('antipastos_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('antipastos_content')): ?>
                        <?php while (have_rows('antipastos_content')): the_row();
                            // vars
                $img_plate1 = get_sub_field('foto_plato1');
                $name_plate1 = get_sub_field('name_plato1');
                $descr_plate1 = get_sub_field('descrip_plato1');
                $price_plate1 = get_sub_field('price_plato1');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="..." class="card-img-top" src="<?php echo $img_plate1['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate1; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate1; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate1; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
            </section>
            <!-- seccion ensaladas -->
            <section class="wow fadeIn" data-wow-offset="100" id="ensaladas" style="margin:20px;">
                <h1>
                    <?php the_field('ensaladas_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('ensaladas_content')): ?>
                        <?php while (have_rows('ensaladas_content')): the_row();
                            // vars
                $img_plate2 = get_sub_field('foto_plato2');
                $name_plate2 = get_sub_field('name_plato2');
                $descr_plate2 = get_sub_field('descrip_plato2');
                $price_plate2 = get_sub_field('price_plato2');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate2['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate2; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate2; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate2; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
               
            </section>
            <!-- seccion sopas -->
            <section class="wow fadeIn" data-wow-offset="100" id="sopas" style="margin:20px;">
                <h1>
                    <?php the_field('sopas_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('sopas_content')): ?>
                        <?php while (have_rows('sopas_content')): the_row();
                            // vars
                $img_plate3 = get_sub_field('foto_plato3');
                $name_plate3 = get_sub_field('name_plato3');
                $descr_plate3 = get_sub_field('descrip_plato3');
                $price_plate3 = get_sub_field('price_plato3');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate3['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate3; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate3; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate3; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
               
            </section>
            <!-- seccion pizza tradicional -->
            <section class="wow fadeIn" data-wow-offset="100" id="pizza_trad" style="margin:20px;">
                <h1>
                    <?php the_field('pizza_trad_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('pizza_trad_content')): ?>
                        <?php while (have_rows('pizza_trad_content')): the_row();
                            // vars
                $img_plate4 = get_sub_field('foto_plato4');
                $name_plate4 = get_sub_field('name_plato4');
                $descr_plate4 = get_sub_field('descrip_plato4');
                $price_plate4 = get_sub_field('price_plato4');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate4['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate4; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate4; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate4; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
            </section>
            <!-- seccion pizzas -->
            <section class="wow fadeIn" data-wow-offset="100" id="pizzas" style="margin:20px;">
               <h1>
                    <?php the_field('pizza_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('pizza_content')): ?>
                        <?php while (have_rows('pizza_content')): the_row();
                            // vars
                $img_plate5 = get_sub_field('foto_plato5');
                $name_plate5 = get_sub_field('name_plato5');
                $descr_plate5 = get_sub_field('descrip_plato5');
                $price_plate5 = get_sub_field('price_plato5');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate5['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate5; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate5; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate5; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
            </section>
            <!-- seccion postres -->
            <section class="wow fadeIn" data-wow-offset="100" id="postres" style="margin:20px;">
                <h1>
                    <?php the_field('postre_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('postre_content')): ?>
                        <?php while (have_rows('postre_content')): the_row();
                            // vars
                $img_plate6 = get_sub_field('foto_plato6');
                $name_plate6 = get_sub_field('name_plato6');
                $descr_plate6 = get_sub_field('descrip_plato6');
                $price_plate6 = get_sub_field('price_plato6');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate6['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate6; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate6; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate6; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
            </section>
            <!-- seccion infusiones -->
            <section class="wow fadeIn" data-wow-offset="100" id="infusiones" style="margin:20px;">
                <h1>
                    <?php the_field('infusion_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('infusion_content')): ?>
                        <?php while (have_rows('infusion_content')): the_row();
                            // vars
                $img_plate7 = get_sub_field('foto_plato7');
                $name_plate7 = get_sub_field('name_plato7');
                $descr_plate7 = get_sub_field('descrip_plato7');
                $price_plate7 = get_sub_field('price_plato7');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate7['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate7; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate7; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate7; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
            </section>
            <!-- seccion bebidas -->
            <section class="wow fadeIn" data-wow-offset="100" id="bebidas" style="margin:20px;">
                <h1>
                    <?php the_field('bebida_title'); ?>
                </h1>
                <div class="row" style="margin:10px;">
                    <?php if (have_rows('bebida_content')): ?>
                        <?php while (have_rows('bebida_content')): the_row();
                            // vars
                $img_plate8 = get_sub_field('foto_plato8');
                $name_plate8 = get_sub_field('name_plato8');
                $descr_plate8 = get_sub_field('descrip_plato8');
                $price_plate8 = get_sub_field('price_plato8');
                ?>
                    <div class="card">
                        <div class="card-img">
                        <img alt="" class="card-img-top" src="<?php echo $img_plate8['sizes']['medium']; ?>"/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">
                             <?php echo $name_plate8; ?> 
                            </h5>
                            <p class="card-text">
                              <?php echo $descr_plate8; ?>   
                            </p>
                            <p class="price">
                              <?php echo $price_plate8; ?>   
                            </p>
                        </div>
                    </div>
                    <?php endwhile; ?>
                     <?php endif; ?>
                </div>
            </section>
        </div>
       
        <div id="reserva_de_mesa">
            <button id="reservar">
                DESEA RESERVAR LA MESA?
            </button>
            <div id="form"  class="display mx-auto" >
           <?php the_field('booking_calendar'); ?>
            </div>
        </div>
        <?php  get_footer(); ?>
        
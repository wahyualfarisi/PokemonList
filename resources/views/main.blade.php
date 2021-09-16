<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Pokemon List</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;600&display=swap" rel="stylesheet">
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
    </head>
    <body>
       <header class="header">
           <h2 class="header_name">Pokemon List</h2>
           <div class="header_action">
                <a href="javascript:void(0)" class="link"> My Pokemon List ( 13 ) </a>
           </div>
       </header>
       <main id="main">
           <div class="pagination">
               <button class="pagination-prev">PREV</button>
               <button class="pagination-next">NEXT</button>
           </div>
           <ul class="pokemon_collection">
                <li>
                    <a href="javascript:void(0)" class="pokemon_collection-item"> 
                        <figure class="pokemon_collection-image">
                            <img 
                                class="pokemon_collection-image-item"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
                                alt="hm"
                            >
                        </figure>
                        <div class="pokemon_collection-info">
                            <h3 class="pokemon_collection-name">Bulbasaur</h3>
                            <span>Grass</span>
                            <span>Poison</span>
                        </div>
                    </a>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Ivysaur</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">VenuSaur</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
                <li class="pokemon_collection-item">
                    <figure class="pokemon_collection-image">
                        <img 
                            class="pokemon_collection-image-item"
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" 
                            alt="hm"
                        >
                    </figure>
                    <div class="pokemon_collection-info">
                        <h3 class="pokemon_collection-name">Charmander</h3>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </li>
           </ul>
       </main>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
       <script src="{{asset('js/app-ui.js')}}"></script>
       <script src="{{asset('js/app-controller.js')}}"></script>
       <script>
           $(function() {
               AppController.init();
           })
       </script>
    </body>
</html>

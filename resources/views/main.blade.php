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
           <h2 class="header_name"></h2>
           <div class="header_action">
                <a href="#/my-pokemon" class="link"> My Pokemon List ( 13 ) </a>
           </div>
       </header>
       <main id="main"></main>
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

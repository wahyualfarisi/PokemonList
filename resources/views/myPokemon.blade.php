<div class="myPokemon">
    <div class="myPokemon-search">
        <input type="text" name="search" placeholder="Search my pokemon" spellcheck="false">
    </div>
    <ul class="myPokemon-collection"></ul>
</div>


<script>
    $(function() {
        AppController.setHeaderName('.header_name', 'My Pokemon <span>List</span> ');
        AppController.myPokemon();
    })
</script>
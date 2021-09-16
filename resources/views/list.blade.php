<div class="pagination">
    <div class="pagination-info">Page <span class="paging-number">-</span></div>
    <div class="pagination-action">
        <button class="pagination-btn pagination-first">First Page</button>
        <button class="pagination-btn pagination-prev">Prev</button>
        <button class="pagination-btn pagination-next">Next</button>
        <button class="pagination-btn pagination-last">Last Page</button>
    </div>
</div>
<ul class="pokemon_collection">
    {{-- <li>
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
    </li> --}}
</ul>

<script>
    $(function() {
        AppController.pokemonList();
    })
</script>
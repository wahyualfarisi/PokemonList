<div class="pagination">
    <div class="pagination-info">Page <span class="paging-number">-</span></div>
    <div class="pagination-action">
        <button class="pagination-btn pagination-first">First Page</button>
        <button class="pagination-btn pagination-prev">Prev</button>
        <button class="pagination-btn pagination-next">Next</button>
        <button class="pagination-btn pagination-last">Last Page</button>
    </div>
</div>
<ul class="pokemon_collection"></ul>
<script>
    $(function() {
        AppController.setHeaderName('.header_name', 'Pokemon <span>Lists</span> ');
        AppController.pokemonList();
    })
</script>
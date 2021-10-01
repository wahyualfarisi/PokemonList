<div class="pagination">
    <div class="pagination-info">Page <span class="paging-number">-</span> & Total: <span class="total_pokemon">-</span> </div>
    {{-- <div class="pagination-action">
        <button class="pagination-btn pagination-first">First Page</button>
        <button class="pagination-btn pagination-prev">Prev</button>
        <button class="pagination-btn pagination-next">Next</button>
        <button class="pagination-btn pagination-last">Last Page</button>
    </div> --}}
    <div class="pagination-action">
       
    </div>
</div>
<select name="select-limit" id="select-limit">
    <option value="">-- Select Limit -- </option>
    <option value="10">10</option>
    <option value="25">25</option>
    <option value="50">50</option>
</select>
<ul class="pokemon_collection"></ul>
<script>
    $(function() {
        AppController.setHeaderName('.header_name', 'Pokemon <span>Lists</span> ');
        AppController.pokemonList();
    })
</script>
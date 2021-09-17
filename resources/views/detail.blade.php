<div class="pokemon-detail">
    <div class="pokemon-info">
        <div>
            <figure class="pokemon-info-img">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="" />
            </figure>
            <button class="pokemon-info-btn pokemon-info-btn-capture">TANGKAP</button>
        </div>
        
        <div class="pokemon-info-desc">
            <h2 class="pokemon-info-desc-name">Bulbasaur</h2>
            <div class="pokemon-info-desc-count">
                <div class="pokemon-info-desc-count-item">
                    <h5>Weight</h5>
                    <h2>7</h2>
                    <div>hectograms</div>
                </div>
                <div class="pokemon-info-desc-count-item">
                    <h5>Height</h5>
                    <h2>700</h2>
                    <div>hectograms</div>
                </div>
                <div class="pokemon-info-desc-count-item">
                    <h5>Base Experience</h5>
                    <h2>711</h2>
                </div>
            </div>
            <div class="pokemon-info-desc-type">
                <h3>Type</h3>
                <span>Grass</span>
                <span>Poison</span>
            </div>
            <div class="pokemon-info-desc-abilities">
                <h3>Abilities</h3>
                <span>Overgrow</span>
                <span>chlorophyll</span>
            </div>
        </div>
    </div>
</div>

<script>
    $(function() {
        AppController.setHeaderName('.header_name', 'Pokemon <span>Detail</span> ');
    })
</script>
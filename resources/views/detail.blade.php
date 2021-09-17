<div class="pokemon-detail">
    <div class="pokemon-info">
        <div>
            <figure class="pokemon-info-img">
                <img id="pokemon-image" src="{{ asset('img/loader-image.gif') }}" alt="" />
            </figure>
           <div class="pokemon-info-action"></div>
        </div>
        
        <div class="pokemon-info-desc">
            <h2 class="pokemon-info-desc-name">Loading...</h2>
            <div class="pokemon-info-desc-count">
                <div class="pokemon-info-desc-count-item">
                    <h5>Weight</h5>
                    <h2 id="weight">Loading...</h2>
                    <div>in hectograms</div>
                </div>
                <div class="pokemon-info-desc-count-item">
                    <h5>Height</h5>
                    <h2 id="height">Loading...</h2>
                    <div>in hectograms</div>
                </div>
                <div class="pokemon-info-desc-count-item">
                    <h5>Base Experience</h5>
                    <h2 id="base_experience">Loading...</h2>
                    <div>experience gained for defeating</div>
                </div>
            </div>
            <div class="pokemon-info-desc-type">
                <h3>Types</h3>
            </div>
            <div class="pokemon-info-desc-abilities">
                <h3>Abilities</h3>
            </div>
        </div>
    </div>
</div>

<div id="modalConfirm" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Confirm Capture ?</h2>
        </div>
        <div class="modal-action">
            <button class="modal-action-btn modal-action-btn-cancel">Cancel</button>
            <button class="modal-action-btn modal-action-btn-submit">Submit</button>
        </div>
    </div>  
</div>

<script>
    $(function() {
        var ID = "{{ $id }}";
        AppController.setHeaderName('.header_name', 'Pokemon <span>Detail</span> ');
        AppController.detail(ID);
    })
</script>
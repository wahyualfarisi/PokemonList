const AppUI = ( () => {

    return {
        renderList: (page, pokemons) => {
            const { next, previous, results } = pokemons;
            $('.paging-number').text(page);

             if(!previous) {
                $('.pagination-prev').attr('disabled', true);
            }else{
                $('.pagination-prev').attr('disabled', false);
                $('.pagination-first').attr('disabled', false);

            }
             if(!next) {
                $('.pagination-next').attr('disabled', true)
             }else{
                $('.pagination-next').attr('disabled', false)
                $('.pagination-last').attr('disabled', false)
             }

            //show pokemon list ---
            let outputHTML = '';
            if(results.length > 0) {
                results.forEach(item => {
                    outputHTML += `
                        <li>
                            <a href="javascript:void(0)" class="pokemon_collection-item"> 
                                <figure class="pokemon_collection-image">
                                    <img 
                                        class="pokemon_collection-image-item"
                                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png" 
                                        alt="hm"
                                    >
                                </figure>
                                <div class="pokemon_collection-info">
                                    <h3 class="pokemon_collection-name">${item.name}</h3>
                                </div>
                            </a>
                        </li>
                    `;
                });
            }

            $('.pokemon_collection').html( outputHTML );

        }
    }
})()
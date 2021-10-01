const AppUI = ( () => {
    const BASE_URL_IMAGE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

    const updateButtonAction = ( data ) => {
        let output;
        if(data) {
            output = `<span>CAPTURED</span>`;
        }else{
            output = `<button class="pokemon-info-btn pokemon-info-btn-capture">CAPTURE</button>`;
        }
        $('.pokemon-info-action').html(output)
    }

    return {
        renderList: (page, pokemons, rangePage) => {
            
            const { next, previous, results } = pokemons;

            $('.paging-number').text(page);
            $('.total_pokemon').text(results.length)



            //  if(!previous) {
            //     $('.pagination-prev').attr('disabled', true);
            // }else{
            //     $('.pagination-prev').attr('disabled', false);
            //     $('.pagination-first').attr('disabled', false);

            // }
            //  if(!next) {
            //     $('.pagination-next').attr('disabled', true)
            //  }else{
            //     $('.pagination-next').attr('disabled', false)
            //     $('.pagination-last').attr('disabled', false)
            //  }

            //output pagination
            let pagination_output = '';
            if(rangePage.length > 0){
                rangePage.slice(0,4).forEach(item => {
                    pagination_output += `<button>${item}</button>`
                })
            }
            $('.pagination-action').html(pagination_output);

            //show pokemon list ---
            let outputHTML = '';
            if(results.length > 0) {
                results.forEach(item => {
                    let id = item.url.split('/')[6];
                    outputHTML += `
                        <li>
                            <a href="#/list/${id}" class="pokemon_collection-item"> 
                                <figure class="pokemon_collection-image">
                                    <img 
                                        class="pokemon_collection-image-item"
                                        src="${BASE_URL_IMAGE}/${id}.png" 
                                        alt="hm"
                                    >
                                </figure>
                                <div class="pokemon_collection-info">
                                    <h3 class="pokemon_collection-name">${item.name}</h3>
                                    ${item.isCaptured ? `<span>Captured</span>` : '' } 
                                </div>
                            </a>
                        </li>
                    `;
                });
            }

            $('.pokemon_collection').html( outputHTML );

        },
        renderDetail: (data, obj) => {
            
            let typesOutput = '', abilitiesOutput = '';

            const {id, name, abilities, types, weight, base_experience, height} = data;
            
            $('.pokemon-info-desc-name').text(name ? name : '-');
            $('#weight').text(weight ? weight : '-');
            $('#height').text(height ? height : '-');
            $('#base_experience').text(base_experience ? base_experience : '-');

            if(types.length > 0) {
                types.forEach(item => {
                    typesOutput += ` <span>${item.type.name}</span>`
                })
            }
            if(abilities.length > 0){
                abilities.forEach(item => {
                    abilitiesOutput += `<span>${item.ability.name}</span>`;
                })
            }

            //if obj is not null, pokemon already exists on my pokemon list
            updateButtonAction(obj);

            $('.pokemon-info-desc-type').append(typesOutput);
            $('.pokemon-info-desc-abilities').append(abilitiesOutput);
            $('#pokemon-image').attr('src',`${BASE_URL_IMAGE}/${id}.png`);
        },
        updateMyPokemon: (total) => {
            $('.mypokemon-count').html(`(${total})`)
        },
        updateButtonAction: (data) => updateButtonAction(data),
        renderMyPokemon: (data, searchValue) => {
            let output = '';
            

            if(data.length > 0) {

                data.filter(item => {
                    
                    if(searchValue === ""){
                        return item;
                    }else if(item.name && item.name.includes(searchValue) ){
                        return item;  
                    }
                }).forEach(item => {
                    console.log(item)
                    let typesOutput = '', abilityOutput = '';

                    if(item.types.length > 0) {
                        item.types.forEach(item => {
                            typesOutput += ` <span>${item.type.name}</span>`
                        })
                    }
                    if(item.abilities.length > 0){
                        item.abilities.forEach(item => {
                            abilityOutput += `<span>${item.ability.name}</span>`;
                        })
                    }
                    output += `
                        <li class="myPokemon-collection-item myPokemon-collection-item-${item.id}">
                            <figure class="myPokemon-collection-item-image">
                                <img src="${BASE_URL_IMAGE}/${item.id}.png" alt="">
                            </figure>
                            <div class="myPokemon-collection-item-info">
                                <h1>${item.name}</h1>
                                <div class="myPokemon-collection-item-info-type">
                                    <h4>Types</h4>
                                    ${typesOutput}
                                </div>
                                <div class="myPokemon-collection-item-info-type">
                                    <h4>Abilities</h4>
                                    ${abilityOutput}
                                </div>
                            </div>
                            <div class="myPokemon-collection-item-action">
                                <button data-id="${item.id}" class="btn-release">Release</button>
                            </div>
                        </li>
                    `
                })
                
            }else{
                output = '<p>My Pokemon is empty</p>';
            }
            
            
            $('.myPokemon-collection').html(output)
            
        }
    }
})()
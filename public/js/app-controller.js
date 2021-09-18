const RequestData = ( () => {
    return {
        get: (url, type, dataType = 'JSON', data = {}, callbackSuccess, callbackError) => {
            $.ajax({ url, type, dataType, data,
                headers: {
                    'Accept': 'application/json',
                },
                beforeSend: function () {
                    
                },
                success: function (res) {
                    callbackSuccess(res);
                },
                error: function (err) {
                    callbackError(err)
                }
            })
        }
    }
})();

const MyPokemonList = ( () => {
    let data = [];
    const storageName = 'MyPokemon';

    const saveToLocalStorage = (data) => {
        localStorage.setItem(storageName, JSON.stringify(data));
    }

    const getAllPokemon = () => {
        return JSON.parse( localStorage.getItem(storageName) ) || [];
    }

    return {
        addTolist: (pokemonObj) => {
          data = JSON.parse( localStorage.getItem(storageName) ) || [];
          
          data.push(pokemonObj);
          //save to localstorage
          saveToLocalStorage(data);
        },
        releasePokemon: (id) => {

        },
        getPokemons: () => getAllPokemon(),
        getNamePokemon: () => {
            return getAllPokemon().map(item => item.name);
        }
    }
})();


const AppController = ( ( REQ, UI, MY_POKEMON ) => {

    let PAGE = 1;
    let LAST_PAGE;

    const setRoute = (container) => {
        let path = location.hash.substr(1);
        if (location.hash) {
            loadContent(path, container);     
        } else {
            location.hash = '#/list'
        }

        $(window).on('hashchange', function () {
            path = location.hash;
            loadContent(path.substr(1), container);
        });
    }

    const loadContent = (path, element) => {
        REQ.get(path, 'GET', 'HTML', {}, response => {
            $(element).html(response)
        }, err => {
            alert('Access Denied');
        })
    }

    const getPokemonList = ( page = PAGE ) => {
       $('.pokemon_collection').html('<div class="loader">Loading ... </div>')
       $('.pagination-btn').attr('disabled', true);

       REQ.get('/api/list', 'GET', 'JSON', { page }, response => {
           if(response.status === 200){

                const { page, data, last_page} = response;
                LAST_PAGE = last_page;
                
                //set label to pokemon was captured
                let checkIsCaptured = data.results.map(item => {
                    if(MY_POKEMON.getNamePokemon().includes(item.name)) {
                        return {
                            ...item,
                            isCaptured: true
                        }
                    }
                    return item
                } )
                
                const obj = {
                    next: data.next,
                    previous: data.previous,
                    results: checkIsCaptured
                }

                UI.renderList( page, obj)
           }
       }, err => {
           console.log(err);
       })
    }

    const paginationListener = () => {

        $('.pagination-first').on('click', function() {
            getPokemonList( PAGE = 1 );
        })
        $('.pagination-next').on('click', function() {
            getPokemonList( ++PAGE );
        })
        $('.pagination-prev').on('click', function() {
            getPokemonList( --PAGE );
        })
        $('.pagination-last').on('click', function() {
            getPokemonList( PAGE = LAST_PAGE );
        })
    }

    const getPokemonDetail = ( id ) => {
        let currentPokemon = null;

        //Fetch Pokemeon detail
        REQ.get(`/api/list/${id}`, 'GET', 'JSON', {}, response => {
            if(response.status === 200){
                currentPokemon = response.data;
                let checkIfExist = MY_POKEMON.getPokemons().filter(item => item.id === currentPokemon.id)[0];
                UI.renderDetail( response.data, checkIfExist );
            }
        }, err => {
            console.log(err);
        })

        //Event Listener tangkap pokemon
        $(document).on('click', '.pokemon-info-btn-capture', function() {
            $('#modalConfirm').css('display','block');
        });

        $('.modal-action-btn-cancel').on('click', function() {
            $('#modalConfirm').css('display','none');
        });

        $('.modal-action-btn-submit').on('click', function() {
            $('.pokemon-info-btn-capture').attr('disabled', true).text('CAPTURING...')
            $('#modalConfirm').css('display','none');
            let originalImage = $('#pokemon-image').attr('src');
            $('#pokemon-image').attr('src','https://pbs.twimg.com/profile_images/344513261567479678/f97f5c6510994f677877b08320475008.gif')
            getProbability(res => {
                if(res) {
                    $('#pokemon-image').attr('src', originalImage);
                    alert('Success capture pokemon')
                    MY_POKEMON.addTolist( currentPokemon );
                    UI.updateMyPokemon( MY_POKEMON.getPokemons().length );
                    UI.updateButtonAction( currentPokemon );
                }else{
                    $('#pokemon-image').attr('src', originalImage);
                    $('.pokemon-info-btn-capture').attr('disabled', false).text('CAPTURE')
                    alert('Failed Capture, Try Again')
                }
            });
        })

    }

    const getProbability = ( callback ) => {
        
        REQ.get('/api/random', 'GET','JSON', {}, response => {
            setTimeout( () => {
                callback(response.isCaptured);
            }, 1500)
        })
    }

    return {
        init: () => {
            setRoute('#main');
            UI.updateMyPokemon( MY_POKEMON.getPokemons().length );
        },
        setHeaderName: (dom, html) =>  $(dom).html(html),
        pokemonList: () => {
            getPokemonList()
            paginationListener();
        },
        detail: (id) => {
            getPokemonDetail( id );
        },
        myPokemon: () => {
            let data = MY_POKEMON.getPokemons();
            console.log(data);
        }
    }
})(RequestData, AppUI, MyPokemonList)
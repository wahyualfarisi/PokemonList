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
        getPokemons: () => getAllPokemon()
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
                UI.renderList(page,data)
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
            getProbability(res => {
                if(res) {
                    alert('Success capture pokemon')
                    $('#modalConfirm').css('display','none');
                    MY_POKEMON.addTolist( currentPokemon );
                    UI.updateMyPokemon( MY_POKEMON.getPokemons().length );
                    UI.updateButtonAction( currentPokemon );
                }else{
                    alert('Failed Capture, Try Again')
                }
            });
        })

    }

    const getProbability = ( callback ) => {
        
        REQ.get('/api/random', 'GET','JSON', {}, response => {
            callback(response.isCaptured);
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
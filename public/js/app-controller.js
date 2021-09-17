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


const AppController = ( ( REQ, UI ) => {

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

    return {
        init: () => {
            setRoute('#main');
        },
        setHeaderName: (dom, html) =>  $(dom).html(html),
        pokemonList: () => {
            getPokemonList()
            paginationListener();
        }
    }
})(RequestData, AppUI)
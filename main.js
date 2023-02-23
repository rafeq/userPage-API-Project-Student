
let _userImg
let _first
let _last
let _state
let _quote
let _pokemonName
let _pokemoImg
let _meat
let _frinds

dataLoad = function () {
    api = new APIManager()
    api.userInfoApi((info) => {
        _userImg = info.results[0].picture.medium
        _first = info.results[0].name.first
        _last = info.results[0].name.last
        _state = info.results[0].location.state
    })


    api.quoteApi((quote) => {
        _quote = quote["quote"]
    });

    api.pokemonApi((pokemon) => {
        _pokemonName = pokemon.species.name
        _pokemoImg = pokemon.sprites.front_default
    });

    api.meatApi((meat) => {
        _meat = meat
    });

    api.frindsApi((frinds) => {
        _frinds = frinds
    });

}

dataRender = function () {
    render = new Renderer()
    $(".user-container").empty()
    $(".quote-container").empty()
    $(".pokemon-container").empty()
    $(".meat-container").empty()
    $(".friends-container").empty()
    render.renderProfile(_userImg, _first, _last, _state)
    render.renderFrinds(_frinds)
    render.renderMeat(_meat)
    render.renderPokemon(_pokemonName, _pokemoImg)
    render.renderQuote(_quote)
}

$("#load").on("click", dataLoad)
$("#display").on("click", dataRender)

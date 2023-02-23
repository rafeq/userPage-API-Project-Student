
class Renderer {
    constructor() {

    }

    renderProfile(img, first, last, state) {
        const source = $("#profile-template").html()
        const template = Handlebars.compile(source)
        let profileHtml = template({ profileImage: img, first: first, last: last, state: state })
        $(".user-container").append(profileHtml)
    }

    renderQuote(quote) {
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        let quoteHtml = template({ quote: quote })
        $(".quote-container").append(quoteHtml)
    }

    renderPokemon(pokemon, pokemonImg) {
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        let pokemonHtml = template({ pokemon: pokemon, pokemonImg: pokemonImg })
        $(".pokemon-container").append(pokemonHtml)
    }

    renderMeat(meat) {
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        let meatHtml = template({ meta: meat })
        $(".meat-container").append(meatHtml)
    }

    renderFrinds(frinds) {
        const source = $("#frinds-template").html()
        const template = Handlebars.compile(source)

        for (const frind of frinds.results) {
            let frindsHtml = template({ frind: frind.name.first})
            $(".friends-container").append(frindsHtml)
        }
        
    }

}

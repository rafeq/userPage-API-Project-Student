//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}

    }

    userInfoApi(callback) {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (info) {
                callback(info)
            }
        });
    }

    quoteApi(callback) {
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: function (info) {
                callback(info)
            }
        });
    }

    pokemonApi(callback) {
        let i = Math.floor(Math.random() * 100)
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${i}`,
            dataType: 'json',
            success: function (info) {
                callback(info)
            }
        });
    }

    meatApi(callback) {
        let i = Math.floor(Math.random() * 100)
        $.ajax({
            url: `https://baconipsum.com/api/?type=all-meat&sentences=${i}&start-with-lorem=${i}`,
            dataType: 'json',
            success: function (info) {
                callback(info)
            }
        });
    }

    frindsApi(callback) {
        $.ajax({
            url: 'https://randomuser.me/api?results=6',
            dataType: 'json',
            success: function (info) {
                callback(info)
            }
        });
    }
}
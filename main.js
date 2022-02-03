let App = Vue.createApp({
    data() {
        return {
            pokemon: [
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/152.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/155.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/158.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/175.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/252.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/255.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/258.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/280.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/387.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/390.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/393.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                },
                {
                    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
                    imgFrontURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
                    imgBackURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/446.png",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3
                }
            ]
        }
    }
  });

App.component("pokemon", {
    props: ["pokemondata"],
    data() {
        return {
            
        }
    },
    computed: {
        randomBackground() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            return "background-color: rgb(" + r + ", " + g + ", " + b + ", 0.6)";
        }
    },
    methods: {
        flip() {
            this.pokemondata.timesClicked++;

            if (this.pokemondata.timesClicked == this.pokemondata.clickLimit + 1) {
                this.pokemondata.timesClicked = 0;

                let newPokeNum = Math.floor(Math.random() * 649) + 1;
                this.pokemondata.imgFrontURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + newPokeNum + ".png";
                this.pokemondata.imgBackURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + newPokeNum + ".png";

                this.pokemondata.state = "front";
                this.pokemondata.imgURL = this.pokemondata.imgFrontURL;
            }

            else {
                if (this.pokemondata.state == "front") {
                    this.pokemondata.state = "back";
                    this.pokemondata.imgURL = this.pokemondata.imgBackURL;
                }
                else {
                    this.pokemondata.state = "front";
                    this.pokemondata.imgURL = this.pokemondata.imgFrontURL;
                }
            }
        }
    },
    template: `<div class="pokemon_div" :style="randomBackground">
        <img :src="pokemondata.imgURL" @mouseover="flip">
    </div>`
});
  
App.mount("#app");
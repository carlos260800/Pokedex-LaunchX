const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        if (res.status != "200") {
            console.log(res);
            pokeImage("../source/img/unu.jpeg");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        //console.log(pokeImg);
        let nombre = data.name;
        let id=data.id;
        let tipo1 = data.types[0].type.name;
        // let tipo2=data.types[1].type.name;
        let hp = data.stats[0].base_stat;
        let ataque = data.stats[1].base_stat;
        let defensa = data.stats[2].base_stat;
        let ataqueEspecial= data.stats[3].base_stat;
        let defensaEspecial = data.stats[4].base_stat;
        let habilidad1=data.abilities[0].ability.name;
        let habilidad2=data.abilities[1].ability.name;
        pokeImage(pokeImg);
        document.getElementById("nombre").innerHTML=nombre;
        document.getElementById("id").innerHTML=id;
        document.getElementById("pokeTipo").innerHTML=tipo1;
        // document.getElementById("pokeTipo2").innerHTML=tipo2;
        document.getElementById("pokeHp").innerHTML=hp;
        document.getElementById("pokeAtaque").innerHTML=ataque;
        document.getElementById("pokeDefensa").innerHTML=defensa;
        document.getElementById("pokeAtaqueEspecial").innerHTML=ataqueEspecial;
        document.getElementById("pokeDefensaEspecial").innerHTML=defensaEspecial;
        document.getElementById("habilidad1").innerHTML=habilidad1;
        document.getElementById("habilidad2").innerHTML=habilidad2;
        //pokeTipo(tipo);
        // console.log(nombre);
        // console.log(tipo);
        // console.log(hp);
        // console.log(ataque);
        // console.log(defensa);
        //console.log(habilidades);
        //console.log(id);
    })
}

// fetchPokemon();
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

// const imprimir = () => {
//     const pokeName = document.getElementById("pokeName");
//     let pokeInput = pokeName.value;
//     console.log('oli ' + pokeInput);
// }
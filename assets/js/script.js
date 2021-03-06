let informacionPokemon=$('#resultado');

  $(document).ready(function (){
    $(`.botonBuscador`).click(function() {  
    let userInput = $("#buscadorPokemon").val();
    let url = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    let poke_name;
$.ajax({
  url: url,
  type: "json",
  method: "GET",
  success: function (data) {
    //-------Nombre Pokemon------//
    poke_name = data.forms[0].name;
    $("#nombrePokemon").empty();
    $("#nombrePokemon").append("Nombre Pokemon: "+poke_name.toUpperCase()); 
    //------ ID del pokemon------//
    let pokeNumero=data.id;
    $("#poke-id").empty();
    $("#poke-id").append("Pokedex #: "+pokeNumero); 
  }   
});
//------ Imagenes------//
$.ajax({
  url: url,
  type: "json",
  method: "GET",
  success: function (data) {
    const spriteFront = data.sprites.front_default;
    $("#imgPokeFront").attr("src", spriteFront );
 
    const spriteBack = data.sprites.back_default;
    $("#imgPokeBack").attr("src", spriteBack);
  }
});
//------Tipo pokemon--------------//
$.ajax({
  url: url,
  type: "json",
  method: "GET",
  success: function (data) {
    $("#poke-tipos0").empty();
    $("#poke-tipos1").empty();
    for(let i=0; i< data.types.length; i++) {
      $("#poke-tipos"+i).html('<p>' + data.types[i].type.name + '</p>' );
    }
  }
});
//------ Estadisticas------//
$.ajax({
  url: url,
  type: "json",
  method: "GET",
  success: function (data) {
    let poke_salud = data.stats[5].base_stat;
    let poke_ataque = data.stats[4].base_stat;
    let poke_defensa = data.stats[3].base_stat;
    let poke_velocidad = data.stats[2].base_stat;
    let poke_ataqEspe = data.stats[1].base_stat;
    let poke_defEspe = data.stats[0].base_stat;
    $('#poke-salud').text(poke_salud);
    $('#poke-ataque').text(poke_ataque);
    $('#poke-defensa').text(poke_defensa);
    $('#poke-velocidad').text(poke_velocidad);
    $('#poke-ataqEspe').text(poke_ataqEspe);
    $('#poke-defEspe').text(poke_defEspe);
    //------Grafico Estadisticas------------//
    let poke_atributo = [
      'Salud',
      'Ataque',
      'Defensa',
      'Ataque Especial',
      'Defensa Especial',
      'Velocidad'
    ];
    
    let poke_atributo_data = [
      poke_salud,
      poke_ataque,
      poke_defensa,
      poke_velocidad,
      poke_ataqEspe,
      poke_defEspe
    ];

    let ctx = document.querySelector('#poke-grafico');
let pokeGrafico = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: poke_atributo,
    datasets: [{
      data: poke_atributo_data,
      label: poke_name,
      backgroundColor: 'rgb(45, 101, 255)',
      borderColor: 'rgb(252, 252, 252)',
    }]
  },
  options: {
    scale: {
      ticks: {
          suggestedMin: 0,
          suggestedMax: 200
      }
  }
  }
})
  }
});

})
//----------- Funciòn que ejecuta la busqueda aleatoria de un pokemon 1 a 1000 ----------_//
//----------- Funciòn que ejecuta la busqueda aleatoria de un pokemon 1 a 1000 ----------_//
$(`#pokeRandom`).click(function() {  
  let pokeRandom = Math.floor((Math.random() * 1000) + 1);
  let url = "https://pokeapi.co/api/v2/pokemon/" + pokeRandom;
  let poke_name;
  console.log("DEBUG:::::: Pokemon Random Nº"+pokeRandom);
  console.log("DEBUG:::::: URL"+url);

$.ajax({
url: url,
type: "json",
method: "GET",
success: function (data) {//-------Nombre Pokemon------//
  poke_name = data.forms[0].name;
  $("#nombrePokemon").empty();
  $("#nombrePokemon").append("Nombre Pokemon: "+poke_name); 
  //------ ID del pokemon------//
  let pokeNumero=data.id;
  $("#poke-id").empty();
  $("#poke-id").append("Pokedex #: "+pokeNumero); 
}   
});
//------ Imagenes------//
$.ajax({
url: url,
type: "json",
method: "GET",
success: function (data) {
  const spriteFront = data.sprites.front_default;
  $("#imgPokeFront").attr("src", spriteFront );

  const spriteBack = data.sprites.back_default;
  $("#imgPokeBack").attr("src", spriteBack);
}
});
//------Tipo pokemon--------------//
$.ajax({
url: url,
type: "json",
method: "GET",
success: function (data) {
  $("#poke-tipos0").empty();
  $("#poke-tipos1").empty();
  for(let i=0; i< data.types.length; i++) {
    $("#poke-tipos"+i).html('<p>' + data.types[i].type.name + '</p>' );
  }

}
});
//------ Estadisticas------//
$.ajax({
url: url,
type: "json",
method: "GET",
success: function (data) {
  let poke_salud = data.stats[5].base_stat;
  let poke_ataque = data.stats[4].base_stat;
  let poke_defensa = data.stats[3].base_stat;
  let poke_velocidad = data.stats[2].base_stat;
  let poke_ataqEspe = data.stats[1].base_stat;
  let poke_defEspe = data.stats[0].base_stat;
  $('#poke-salud').text(poke_salud);
  $('#poke-ataque').text(poke_ataque);
  $('#poke-defensa').text(poke_defensa);
  $('#poke-velocidad').text(poke_velocidad);
  $('#poke-ataqEspe').text(poke_ataqEspe);
  $('#poke-defEspe').text(poke_defEspe);
 
  //------Grafico Estadisticas------------//
  let poke_atributo = [
    'Salud',
    'Ataque',
    'Defensa',
    'Ataque Especial',
    'Defensa Especial',
    'Velocidad'
  ];
  
  let poke_atributo_data = [
    poke_salud,
    poke_ataque,
    poke_defensa,
    poke_velocidad,
    poke_ataqEspe,
    poke_defEspe
  ];

  let ctx = document.querySelector('#poke-grafico');
let pokeGrafico = new Chart(ctx, {
type: 'radar',
data: {
  labels: poke_atributo,
  datasets: [{
    data: poke_atributo_data,
    label: poke_name,
    backgroundColor: 'rgb(45, 101, 255)',
    borderColor: 'rgb(252, 252, 252)',
  }]
},
options: {
  scale: {
    ticks: {
        suggestedMin: 0,
        suggestedMax: 200
    }
}
}
})
}

});

})

});

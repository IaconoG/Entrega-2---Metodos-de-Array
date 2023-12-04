const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const hayElementosEnArray = (arr) => {
  return arr.length === 0;
};
const listaDePizzasVacia = (arr) => {
  if (hayElementosEnArray(arr)) {
    console.log("No hay pizzas disponibles.");
    return;
  }
};

const imprimirPizzasIDImpar = (pizzas) => {
  listaDePizzasVacia(pizzas);

  pizzas.forEach((pizza) => {
    if (pizza.id % 2 !== 0) {
      console.log(
        "La " +
          pizza.nombre +
          " tiene un precio de " +
          pizza.precio +
          ".\nIngredientes: ",
        pizza.ingredientes.join(", ")
      );
    }
  });
};
console.log("a) Imprimir pizzas que tengan id impar");
imprimirPizzasIDImpar(pizzas);

const hayPizzasConValorMenorASeisientos = (pizzas) => {
  listaDePizzasVacia(pizzas);

  const pizzasCumplenCondicion = pizzas.filter((pizza) => pizza.precio < 600);
  const strNombrePizzasQueCumplenCondiciona = pizzasCumplenCondicion
    .map((pizzas) => pizzas.nombre)
    .join("\n- ");

  if (pizzasCumplenCondicion.length > 0) {
    console.log(
      "Si existen pizas que sean menor a 600, tales como \n-",
      strNombrePizzasQueCumplenCondiciona
    );
  } else {
    console.log("No existen pizzas que cumplan con esta condicion");
  }
};
console.log("\n");
console.log("b) Existen pizza con valor menor a 600?");
hayPizzasConValorMenorASeisientos(pizzas);

const imprimirNombreYPrecioDeCadaPizza = (pizzas) => {
  listaDePizzasVacia(pizzas);

  const pizzaInfo = pizzas.map((pizza) => `- ${pizza.nombre}: ${pizza.precio}`);
  console.log(pizzaInfo.join("\n"));
};
console.log("\n");
console.log("c) Imprimir el nombre de cada pizza con su respectivo precio.");
imprimirNombreYPrecioDeCadaPizza(pizzas);

const imprimirIngredietnesDeCadaPizza = (pizzas) => {
  listaDePizzasVacia(pizzas);

  pizzas.forEach((pizza) => {
    const ingredientesDePizza = pizza.ingredientes.join("\n -");
    console.log(
      `Ingredientes de la ${pizza.nombre}:\n -${ingredientesDePizza}`
    );
  });
};
console.log("\n");
console.log("d) Todos los ingredientes de cada pizza ");
imprimirIngredietnesDeCadaPizza(pizzas);

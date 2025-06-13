const chistes = [
  "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
  "¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
  "¿Cuál es el animal más antiguo? La cebra, porque está en blanco y negro.",
  "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
  "¿Cómo se despiden los químicos? Ácido un placer.",
  "¿Por qué está feliz la escoba? Porque ba-rriendo.",
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Qué hace un pez? ¡Nada!",
  "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.",
  "¿Qué le dijo el 0 al 8? ¡Bonito cinturón!"
];

let actual = 0;

const chisteContenedor = document.getElementById('chiste-container');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

function mostrarChiste(index) {
  chisteContenedor.innerText = chistes[index];
}

anterior.onclick = () => {
  actual = (actual - 1 + chistes.length) % chistes.length;
  mostrarChiste(actual);
};

siguiente.onclick = () => {
  actual = (actual + 1) % chistes.length;
  mostrarChiste(actual);
};

mostrarChiste(actual);

let rewiews = [
  {
    title: "Ascenso al Monte Fuji",
    content: "Subí al Monte Fuji y llegué hasta la quinta estación. Ver el amanecer desde la cima fue indescriptible. El esfuerzo valió la pena por las vistas panorámicas que se podían disfrutar desde la cumbre.",
    author: "Carlos Martínez Sánchez"
  },
  {
    title: "Descubriendo los Jardines Kenroku-en",
    content: "Recorrí los jardines Kenroku-en en Kanazawa, uno de los tres jardines más famosos de Japón. Pasear por sus senderos rodeados de naturaleza fue muy relajante, especialmente en primavera, cuando los cerezos estaban en flor.",
    author: "María Rodríguez Pérez"
  },
  {
    title: "Explorando el Mercado de Tsukiji",
    content: "Visité el Mercado de Tsukiji en Tokio, donde vi la famosa subasta de atunes y probé sushi fresco directo de los puestos. Fue una experiencia única para los amantes de la comida y una excelente manera de comenzar el día.",
    author: "Juan Pablo García López"
  },
]

function showRewiewsList() {
  const REWIEWS_LIST = document.getElementById("rewiews-list");

  let rewiewsToShow = ""
  for (let i = 0; i < rewiews.length; i++) {
    rewiewsToShow += `
    <div>
      <h3>${rewiews[i].title}</h3>
      <p>${rewiews[i].content}</p>
      <p>${rewiews[i].author}</p>
    </div>
    `
  }
  REWIEWS_LIST.innerHTML = rewiewsToShow;
}

function listenForSubmit() {
  const REWIEWS_REGISTER = document.getElementById("form-rewiews");
  REWIEWS_REGISTER.addEventListener("submit", introduceNewRewiewAndShow);
}

function introduceNewRewiew(e) {
  e.preventDefault()
  const TITLE = e.target.title.value;
  const CONTENT = e.target.content.value;
  const AUTHOR = e.target.author.value;

  rewiews.push({
    title: TITLE,
    content: CONTENT,
    author: AUTHOR
  })
}

function introduceNewRewiewAndShow(e) {
  introduceNewRewiew(e)
  showRewiewsList()
}

showRewiewsList()
listenForSubmit()
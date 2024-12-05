let reviews = [
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

function showReviewsList() {
  const REVIEWS_LIST = document.getElementById("reviews-list");

  let reviewsToShow = ""
  for (let i = 0; i < reviews.length; i++) {
    reviewsToShow += `
    <div>
      <h3>${reviews[i].title}</h3>
      <p>${reviews[i].content}</p>
      <p>${reviews[i].author}</p>
    </div>
    `
  }
  REVIEWS_LIST.innerHTML = reviewsToShow;
}

function listenForSubmit() {
  const REVIEWS_REGISTER = document.getElementById("form-reviews");
  REVIEWS_REGISTER.addEventListener("submit", introduceNewReviewAndShow);
}

function introduceNewReview(e) {
  e.preventDefault()
  const TITLE = e.target.title.value;
  const CONTENT = e.target.content.value;
  const AUTHOR = e.target.author.value;

  reviews.push({
    title: TITLE,
    content: CONTENT,
    author: AUTHOR
  })
}

function introduceNewReviewAndShow(e) {
  introduceNewReview(e)
  showReviewsList()
}

showReviewsList()
listenForSubmit()
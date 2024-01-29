// const carousel = document.querySelector(".carousel");
// let sliders = [];

// let slideIndex = 0; //track current slide

// const createSlide = () => {
//   if (slideIndex >= movies.length) {
//     slideIndex = 0;
//   }

//   //creating dom element
//   let slide = document.createElement("div");
//   var imgElement = document.createElement("img");
//   let content = document.createElement("div");
//   let h1 = document.createElement("h1");
//   let p = document.createElement("p");

//   //attach all elements
//   imgElement.appendChild(document.createTextNode(""));
//   h1.appendChild(document.createTextNode(movies[slideIndex].name));
//   p.appendChild(document.createTextNode(movies[slideIndex].des));
//   content.appendChild(h1);
//   content.appendChild(p);
//   slide.appendChild(content);
//   slide.appendChild(imgElement);
//   caraousel.appendChild(slide);

//   //setting image element
//   imgElement.src = movies[slideIndex].image;
//   slideIndex++;

//   //setting element class names
//   slide.className = "slider";
//   content.className = "slide-content";
//   h1.className = "movie-title";
//   p.className = "movie-des";

//   sliders.push(slide);
// };
// createSlide();
//   if(slider.lenght) {
//     slider[0].style.marginleft = `calc(-${100 * (slider.length - 2)}% - ${
//       30 * (slider.length - 2)
//     }px)`;
//   }
// }

// for(let i=0 ; i<3 ; i++){
//   createSlide();
// }

// setInterval(()=>{
//   createSlide();
// },3000);

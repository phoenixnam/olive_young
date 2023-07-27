// const menu = document.querySelector('#menu');
// const menuButton = document.querySelector('#menu-btn');
// const menuLinks = document.querySelectorAll('#menu a');

// menuButton.addEventListener('click', () => {
//     menu.classList.toggle('invisible');
// });

// menuLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử khác
//     });
// });


// document.getElementById('searchInput').addEventListener('input', function() {
//     const searchTerm = this.value.toLowerCase();
//     const products = document.querySelectorAll('.product');
  
//     products.forEach(function(product) {
//       const productName = product.querySelector('#product').innerText.toLowerCase();
//       const productDetail = product.querySelector('#detail').innerText.toLowerCase();
  
//       if (productName.includes(searchTerm) || productDetail.includes(searchTerm)) {
//         product.style.display = 'block';
//       } else {
//         product.style.display = 'none';
//       }
//     });
//   });

// document.addEventListener('alpine:init', () => {
//     Alpine.data('slider', () => ({
//         currentIndex: 1,
//         images: [
//             // 'https://source.unsplash.com/1600x900/?beach',
//             // 'https://source.unsplash.com/1600x900/?cat',
//             // 'https://source.unsplash.com/1600x900/?dog',
//             // 'https://source.unsplash.com/1600x900/?lego',
//             // 'https://source.unsplash.com/1600x900/?textures&patterns'
//         ],
//         back() {
//             if (this.currentIndex > 1) {
//                 this.currentIndex = this.currentIndex - 1;
//             }
//         },
//         next() {
//             if (this.currentIndex < this.images.length) {
//                 this.currentIndex = this.currentIndex + 1;
//             } else if (this.currentIndex <= this.images.length){
//                 this.currentIndex = this.images.length - this.currentIndex + 1
//             }
//         },
//     }))
// });
// let currentSlideID = 1;
// const sliderE = document.getElementById('slider');
// const totalSlides = sliderE.childElementCount;
// console.log(totalSlides);

// function next() {
//   if (totalSlides > currentSlideID) {
//     currentSlideID++;
//     showSlide();
//   } else {
//     currentSlideID = 1; // Quay lại slide đầu tiên
//     showSlide();
//   }
// }

// function prev() {
//   if (currentSlideID > 1) {
//     currentSlideID--;
//     showSlide();
//   } else {
//     currentSlideID = totalSlides; // Quay lại slide cuối cùng
//     showSlide();
//   }
// }

// function showSlide() {
//   const slides = document.getElementById('slider').getElementsByTagName('li');
//   for (let index = 0; index < totalSlides; index++) {
//     const element = slides[index];
//     if (currentSlideID === index + 1) {
//       element.classList.remove('hidden');
//     } else {
//       element.classList.add('hidden');
//     }
//   }
// }

// // Chuyển tiếp tự động sau mỗi 5 giây
// setInterval(() => {
//   next();
// }, 5000);



//// Bìa coffe


document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            // 'https://source.unsplash.com/1600x900/?beach',
            // 'https://source.unsplash.com/1600x900/?cat',
            // 'https://source.unsplash.com/1600x900/?dog',
            // 'https://source.unsplash.com/1600x900/?lego',
            // 'https://source.unsplash.com/1600x900/?textures&patterns'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
});
let currentSlideID = 1;
const sliderE = document.getElementById('slider');
const totalSlides = sliderE.childElementCount;
console.log(totalSlides);

function next() {
  if (totalSlides > currentSlideID) {
    currentSlideID++;
    showSlide();
  } else {
    currentSlideID = 1; // Quay lại slide đầu tiên
    showSlide();
  }
}

function prev() {
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlide();
  } else {
    currentSlideID = totalSlides; // Quay lại slide cuối cùng
    showSlide();
  }
}

function showSlide() {
  const slides = document.getElementById('slider').getElementsByTagName('li');
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSlideID === index + 1) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }
}

// Chuyển tiếp tự động sau mỗi 5 giây
setInterval(() => {
  next();
}, 5000);


var menuElement = document.getElementById('menu');
var menuButton = document.getElementById('menu-btn');

menuButton.addEventListener('click', ()=>{
  menu.classList.toggle('invisible')
})
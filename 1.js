// Получаем элементы интерфейса
const currentImage = document.getElementById("current-image");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const navigationDots = document.querySelectorAll(".dot");

// Массив с путями к изображениям
const images = [
  "./img/1.png",
  "./img/2.jpg",
  "./img/3.jpg",
];
let currentIndex = 0;

// Функция для обновления текущего изображения
function updateImage() {
  currentImage.src = images[currentIndex]; // Обновляем src изображения
  navigationDots.forEach((dot, index) => {
    dot.classList.remove("active"); // Удаляем класс активности у всех точек
    if (index === currentIndex) {
      dot.classList.add("active"); // Добавляем класс активности текущей точке
    }
  });
}

// Обработчик клика на кнопку "Предыдущее изображение"
previousButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Циклическое переключение к последнему изображению
  }
  updateImage();
});

// Обработчик клика на кнопку "Следующее изображение"
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Циклическое переключение к первому изображению
  }
  updateImage();
});

// Обработчик клика на навигационные точки
navigationDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateImage();
  });
});

// Инициализация слайдера
updateImage();

// // const camera = document.getElementById("camera");
// // const photoExamples = document.getElementById("photoExamples");

// // camera.addEventListener("click", () => {
// //   // Переключаем классы по клику
// //   photoExamples.classList.toggle("visible");
// //   photoExamples.classList.toggle("hidden");
// // });

// camera.addEventListener("click", () => {
//   photoExamples.classList.toggle("visible");
//   photoExamples.classList.toggle("hidden");

//   if (photoExamples.classList.contains("visible")) {
//     // Перезапускаем анимацию при каждом клике
//     const photos = photoExamples.querySelectorAll(".photo");
//     photos.forEach((photo) => {
//       photo.style.animation = "none";
//       void photo.offsetWidth; // триггер перезапуска
//       photo.style.animation = "";
//     });
//   }
// });

// /*-----------------------------------*/

// // const comicguy = document.querySelector(".comicguy");

// // comicguy.addEventListener("click", () => {
// //   comicguy.classList.toggle("clicked");
// // });

// // /*------*/

// // comicguy.addEventListener("click", () => {
// //   itExamples.classList.toggle("visible");
// //   itExamples.classList.toggle("hidden");

// //   if (itExamples.classList.contains("visible")) {
// //     // Перезапускаем анимацию при каждом клике
// //     const photos = itExamples.querySelectorAll(".it");
// //     its.forEach((it) => {
// //       it.style.animation = "none";
// //       void it.offsetWidth; // триггер перезапуска
// //       it.style.animation = "";
// //     });
// //   }
// // });

// /*-----------------------------------*/

// const comicguy = document.querySelector(".comicguy");
// const itExamples = document.querySelector("#itExamples");

// comicguy.addEventListener("click", () => {
//   comicguy.classList.toggle("clicked");
//   itExamples.classList.toggle("visible");
//   itExamples.classList.toggle("hidden");

//   if (itExamples.classList.contains("visible")) {
//     const its = itExamples.querySelectorAll(".it");

//     its.forEach((it, index) => {
//       it.style.animation = "none";
//       void it.offsetWidth;

//       it.style.animation = `slideUp 0.5s ${index * 0.2}s forwards`;
//     });
//   }
// });

// /*-----------------------------------*/

// justin.addEventListener("click", () => {
//   engExamples.classList.toggle("visible");
//   engExamples.classList.toggle("hidden");

//   if (engExamples.classList.contains("visible")) {
//     const eng = engExamples.querySelectorAll(".eng");
//     engs.forEach((eng) => {
//       eng.style.animation = "none";
//       void eng.offsetWidth;
//       eng.style.animation = "";
//     });
//   }
// });

// /*-----------------------------------*/

// function toggleFocus(element, relatedBlock) {
//   const isActive = element.classList.toggle("active");
//   relatedBlock.classList.toggle("visible");
//   relatedBlock.classList.toggle("hidden");

//   if (isActive) {
//     collage.classList.add("focus-mode");
//   } else {
//     collage.classList.remove("focus-mode");
//   }
// }

// // comicguy
// comicguy.addEventListener("click", () => {
//   toggleFocus(comicguy, itExamples);
// });

// // camera
// camera.addEventListener("click", () => {
//   toggleFocus(camera, photoExamples);
// });

// !/*-----------------------------------*/

const collage = document.querySelector(".collage");
const camera = document.querySelector("#camera");
const comicguy = document.querySelector("#comicguy");
const photoExamples = document.querySelector("#photoExamples");
const itExamples = document.querySelector("#itExamples");

// Универсальная функция: делает элемент + relatedBlock active/visible и запускает анимацию
function toggleFocus(element, relatedBlock) {
  const isActive = element.classList.toggle("active");

  // переключаем видимость блока с примерами
  relatedBlock.classList.toggle("visible");
  relatedBlock.classList.toggle("hidden");

  if (isActive) {
    // пометить и сам элемент, и блок как активные (чтобы CSS мог их исключить из затемнения)
    element.classList.add("active");
    relatedBlock.classList.add("active");

    // затемнить остальное
    collage.classList.add("focus-mode");

    // убрать активность/подсветку с других интерактивных элементов и их блоков
    [camera, comicguy].forEach((el) => {
      if (el !== element) {
        el.classList.remove("active", "clicked");
      }
    });
    [photoExamples, itExamples].forEach((block) => {
      if (block !== relatedBlock) {
        block.classList.remove("active", "visible");
        block.classList.add("hidden");
      }
    });

    // Запускаем поочерёдную анимацию вложенных элементов (если есть)
    const items = relatedBlock.querySelectorAll(".photo, .it, .eng");
    items.forEach((item, index) => {
      item.style.animation = "none";
      void item.offsetWidth; // триггер перезапуска
      item.style.animation = `slideUp 0.6s ${index * 0.2}s forwards ease-out`;
    });
  } else {
    // убираем активность и затемнение (можно добавить плавный выход, если нужно)
    element.classList.remove("active");
    relatedBlock.classList.remove("active");

    // если хочешь плавный уход, можно добавить focus-leave как раньше; для простоты уберём сразу
    collage.classList.remove("focus-mode");
  }
}

// Привязываем обработчики
camera.addEventListener("click", () => toggleFocus(camera, photoExamples));

// comicguy — сохраняем поворот .clicked и переключение фокуса
comicguy.addEventListener("click", () => {
  comicguy.classList.toggle("clicked");
  toggleFocus(comicguy, itExamples);
});

const justin = document.querySelector("#justin");
const engExamples = document.querySelector("#engExamples");

justin.addEventListener("click", () => {
  toggleFocus(justin, engExamples);

  // Анимация появления поочерёдно
  if (engExamples.classList.contains("visible")) {
    const engItems = engExamples.querySelectorAll(".eng");
    engItems.forEach((item, index) => {
      item.style.animation = "none";
      void item.offsetWidth; // триггер перезапуска
      item.style.animation = `slideUp 0.6s ${index * 0.2}s forwards ease-out`;
    });
  }
});

const friendly = document.querySelector("#friendly");
const friendlyExamples = document.querySelector("#friendlyExamples");

friendly.addEventListener("click", () => {
  toggleFocus(friendly, friendlyExamples);

  // Анимация появления поочерёдно
  if (friendlyExamples.classList.contains("visible")) {
    const friendItems = friendlyExamples.querySelectorAll(".friend");
    friendItems.forEach((item, index) => {
      item.style.animation = "none";
      void item.offsetWidth; // триггер перезапуска
      item.style.animation = `slideUp 0.6s ${index * 0.2}s forwards ease-out`;
    });
  }
});

const smash = document.querySelector("#smash");
const smashExamples = document.querySelector("#smashExamples");

smash.addEventListener("click", () => {
  toggleFocus(smash, smashExamples);

  // Анимация появления поочерёдно
  if (smashExamples.classList.contains("visible")) {
    const friendItems = smashExamples.querySelectorAll(".smash-p");
    smashItems.forEach((item, index) => {
      item.style.animation = "none";
      void item.offsetWidth; // триггер перезапуска
      item.style.animation = `slideUp 0.6s ${index * 0.2}s forwards ease-out`;
    });
  }
});

const eco = document.querySelector("#eco-print");
const ecoExamples = document.querySelector("#ecoExamples");

eco.addEventListener("click", () => {
  toggleFocus(eco, ecoExamples);

  if (ecoExamples.classList.contains("visible")) {
    const ecoItems = ecoExamples.querySelectorAll(".eco");
    ecoItems.forEach((item, index) => {
      item.style.animation = "none";
      void item.offsetWidth;
      item.style.animation = `slideUp 0.6s ${index * 0.2}s forwards ease-out`;
    });
  }
});

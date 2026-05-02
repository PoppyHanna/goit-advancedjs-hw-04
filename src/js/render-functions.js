// Описаний у документації
// import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.js-container');
const loader = document.querySelector('.loader');

// Ініціалізуємо SimpleLightbox для всіх зображень у галереї
const lightbox = new SimpleLightbox('.js-container .image-card a', {
      captionsData: 'alt',
      captionDelay: 250,
});

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}




export function renderFoto(data) {

    const fragment = document.createDocumentFragment();

    data.hits.forEach(image => {
        // Створюємо контейнер для карточки зображення
        const card = document.createElement('li');
        card.classList.add('image-card');

        // Створюємо контейнер для обгортки посилання та інформації
        const container = document.createElement('div');
        container.classList.add('li-cont');

        // Створюємо посилання
        const link = document.createElement('a');
        link.href = image.largeImageURL;
        link.classList.add('link-a')

        // Створюємо зображення
        const imgElement = document.createElement('img');
        imgElement.classList.add('pic-card');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;

        // Додаємо зображення до посилання
        link.appendChild(imgElement);

        // Додаємо посилання з зображенням до контейнера
        container.appendChild(link);

        // Створюємо елемент div для обгортки інформації
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('item-text');

        // Створюємо список ul
        const infoList = document.createElement('ul');
        infoList.classList.add('image-info');

        // Створюємо елементи списку li для інформації про зображення
        const likesInfo = document.createElement('li');
        likesInfo.textContent = `Likes: ${image.likes}`;

        const viewsInfo = document.createElement('li');
        viewsInfo.textContent = `Views: ${image.views}`;

        const commentsInfo = document.createElement('li');
        commentsInfo.textContent = `Comments: ${image.comments}`;

        const downloadsInfo = document.createElement('li');
        downloadsInfo.textContent = `Downloads: ${image.downloads}`;

        // Додаємо елементи li до списку ul
        infoList.appendChild(likesInfo);
        infoList.appendChild(viewsInfo);
        infoList.appendChild(commentsInfo);
        infoList.appendChild(downloadsInfo);

        // Додаємо список ul до елемента div
        infoContainer.appendChild(infoList);

        // Додаємо контейнер зі списком до карточки
        container.appendChild(infoContainer);

        // Додаємо контейнер до фрагменту
        card.appendChild(container);

        // Додаємо карточку до галереї
        fragment.appendChild(card);
    });

    // Додаємо фрагмент з карточками до галереї
    gallery.appendChild(fragment);

    lightbox.refresh();
}


// Функція для додавання додаткових зображень у галерею

export function renderMorePhotos(data) {
    const gallery = document.querySelector('.js-container');
    const fragment = document.createDocumentFragment();

    data.hits.forEach(image => {
        // Створення DOM-елементів карточки тут
        const card = document.createElement('li');
        card.classList.add('image-card');

        // Створюємо контейнер для обгортки посилання та інформації
        const container = document.createElement('div');
        container.classList.add('li-cont');

        // Створюємо посилання
        const link = document.createElement('a');
        link.href = image.largeImageURL;
         link.classList.add('link-a')

        // Створюємо зображення
        const imgElement = document.createElement('img');
        imgElement.classList.add('pic-card');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;

        // Додаємо зображення до посилання
        link.appendChild(imgElement);

        // Додаємо посилання з зображенням до карточки
        container.appendChild(link);

        // Створюємо елемент div для обгортки інформації
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('item-text');

        // Створюємо список ul
        const infoList = document.createElement('ul');
        infoList.classList.add('image-info');

        // Створюємо елементи списку li для інформації про зображення
        const likesInfo = document.createElement('li');
        likesInfo.textContent = `Likes: ${image.likes}`;

        const viewsInfo = document.createElement('li');
        viewsInfo.textContent = `Views: ${image.views}`;

        const commentsInfo = document.createElement('li');
        commentsInfo.textContent = `Comments: ${image.comments}`;

        const downloadsInfo = document.createElement('li');
        downloadsInfo.textContent = `Downloads: ${image.downloads}`;

        // Додаємо елементи li до списку ul
        infoList.appendChild(likesInfo);
        infoList.appendChild(viewsInfo);
        infoList.appendChild(commentsInfo);
        infoList.appendChild(downloadsInfo);

        // Додаємо список ul до елемента div
        infoContainer.appendChild(infoList);

        // Додаємо контейнер зі списком до карточки
        container.appendChild(infoContainer);

        // Додаємо контейнер до карточки
        card.appendChild(container);

        // Додаємо карточку до фрагменту
        fragment.appendChild(card);
    });

    // Додаємо фрагмент з карточками до галереї
    gallery.appendChild(fragment);

    // Ініціалізуємо SimpleLightbox для всіх зображень у галереї
    // const lightbox = new SimpleLightbox('.js-container .image-card a', {
    //      captionsData: 'alt',
    //      captionDelay: 250,
    // });
    lightbox.refresh();
}

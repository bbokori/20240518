// script.js
document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // 클릭된 이미지를 큰 이미지로 보여주는 로직을 추가할 수 있어
      alert('이미지 클릭!');
    });
  });
});
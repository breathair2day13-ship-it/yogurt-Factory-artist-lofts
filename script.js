const dialog = document.querySelector('#lightbox');
const dialogImage = dialog.querySelector('img');
const closeBtn = dialog.querySelector('.close');
document.querySelectorAll('.space-gallery img, .mosaic img').forEach(img => {
  img.addEventListener('click', () => {
    dialogImage.src = img.src;
    dialogImage.alt = img.alt;
    dialog.showModal();
  });
});
closeBtn.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

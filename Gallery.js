document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        let modal = document.createElement('div');
        modal.classList.add('lightbox');
        modal.innerHTML = `<div class="lightbox-content">
                            <img src="${this.src}" alt="Gallery Image">
                            <span class="close">&times;</span>
                           </div>`;
        document.body.appendChild(modal);

        // Close modal on click
        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
    });
});

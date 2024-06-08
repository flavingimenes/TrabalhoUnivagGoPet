document.getElementById('verMaisBtn').addEventListener('click', function() {
    var moreText = document.querySelector('.more-text');
    var btn = document.getElementById('verMaisBtn');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        btn.textContent = 'Ver menos';
    } else {
        moreText.style.display = 'none';
        btn.textContent = 'Ver mais';
    }
});

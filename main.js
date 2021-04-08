const toogleSideBar = document.querySelector('.toogle-btn');

toogleSideBar.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});


const toogleMateryAll = document.querySelectorAll('.toogle-matery');

toogleMateryAll.forEach((matery) => {
    const next = matery.nextElementSibling;

    matery.addEventListener('click', function() {
        if (next.classList.contains('active')) {
            next.classList.remove('active')
        } else {
            let current = document.querySelector('.container-container-materias.active');
            if (current) {
                current.classList.remove('active');
            }
            next.classList.add('active');
        }
    })

});
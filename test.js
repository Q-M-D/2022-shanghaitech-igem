const stars = document.querySelectorAll('.star');
console.log(stars);

const setStarInitXPosition = (star) => {
    const START_WIDTH = 24;
    const windowWidth = window.innerWidth;
    const starLeftPosition = (Math.random() * windowWidth) - START_WIDTH;
    star.style.left = `${starLeftPosition}px`;
};

const setStarMoveSpeed = (star) => {
    const starMoveSpeed = -1 - Math.random();
    star.dataset.speed = starMoveSpeed;
};

stars.forEach(setStarInitXPosition);
stars.forEach(setStarMoveSpeed);

window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.moon');
    const parallaxScrollingElements = [...stars, moon];
    // console.log(parallaxScrollingElements[7].dataset);

    parallaxScrollingElements.forEach((element) => {
        if (0 <= document.getElementsByClassName("night")[0].getBoundingClientRect().top) {
            return;
        }
        const elementMoveSpeed = Number(element.dataset.speed);
        // element.style.transform = `
        //   translateY(${scrollPositionY * elementMoveSpeed}px)
        // `
            ;
    });
});

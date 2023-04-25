window.addEventListener("load", function () {
    const btnBooking = document.querySelector(".booking__btn");
    const header = document.querySelector(".header");
    const template = `
<div class="modal__wrap ">
<div class="booking__modal">
    
</div>
<div class="modal">
    <i class='bx bx-window-close modal__close'></i>
    <p class="modal__contents">Dell co con cc j ca</p>
</div>
</div>
`;
    const body = document.body;
    btnBooking.addEventListener("click", function (e) {
        header.insertAdjacentHTML("beforeend", template);
        const modal = document.querySelector(".modal__wrap");
        modal.classList.add("modal__wrap--active");
        body.style.height = "100vh";
        body.style.overflow = "hidden";
    });
    body.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.matches(".modal__close")) {
            const modalClose = document.querySelector(".modal__close");
            const modal = modalClose.parentNode.parentNode;
            modal.parentNode.removeChild(modal);
            body.style.height = "auto";
            body.style.overflow = "auto";
        } else if (e.target.matches(".booking__modal")) {
            console.log(e.target);
            const modal = e.target.parentNode;
            modal.parentNode.removeChild(modal);
            body.style.height = "auto";
            body.style.overflow = "auto";
        }
    });
    const tabItem = [...document.querySelectorAll(".tab-item")];
    const tabContent = [...document.querySelectorAll(".tab-content")];

    tabItem.forEach(function (item) {
        return item.addEventListener("click", clicktab);
    });
    const Tab = document.querySelector(".tab-items");
    const shortLine = document.querySelector(".tab-items--before");
    shortLine.style.width = `170px`;
    function clicktab(event) {
        let { left, top, width, height } = event.target.getBoundingClientRect();
        const widthWin = window.innerWidth;
        const offSetLeft = (widthWin - 1170) / 2 + 585;
        shortLine.style.left = `${left - offSetLeft}px`;
        shortLine.style.width = `${width + 30}px`;
        const tabNum = event.target.dataset.tab;
        [...tabContent].forEach((item) => {
            item.classList.remove("tab-content--active");
            if (item.getAttribute("data-tab") === tabNum) {
                item.classList.add("tab-content--active");
            }
        });
    }

    const pricingSwitch = document.querySelector(".switch-label");
    const pricingPrice = [...document.querySelectorAll(".pricing__item-price")];
    let cnt = 0;
    const PriceOldOne = [...pricingPrice][0].textContent;
    const PriceOldTwo = [...pricingPrice][1].textContent;
    const PriceOldThree = [...pricingPrice][2].textContent;
    pricingSwitch.addEventListener("click", function () {
        if (cnt % 2 == 0) {
            [...pricingPrice].forEach((item) => {
                let price = Math.ceil(parseInt(item.textContent) / 3);
                item.textContent = `${price}`;
                cnt++;
            });
        } else {
            [...pricingPrice][0].textContent = `${PriceOldOne}`;
            [...pricingPrice][1].textContent = `${PriceOldTwo}`;
            [...pricingPrice][2].textContent = `${PriceOldThree}`;
            cnt++;
        }
    });

    const reviewNext = document.querySelector(".review-wrap--after");
    const reviewPrevious = document.querySelector(".review-wrap--before");
    const reviewList = [...document.querySelectorAll(".review__inner-item")];
    const reviewDot = [...document.querySelectorAll(".review__dot")];
    let index = 1;
    reviewNext.addEventListener("click", function () {
        [...reviewList].forEach(function (item) {
            if (item.classList.contains("review__inner-item--active")) {
                index = reviewList.indexOf(item);
            }
            item.classList.remove("review__inner-item--active");
        });
        [...reviewDot].forEach(function (item) {
            item.classList.remove("review__dot--active");
        });
        console.log(index);
        if (index < reviewDot.length - 1) {
            index = index + 1;
            reviewList[index].classList.add("review__inner-item--active");
            reviewDot[index].classList.add("review__dot--active");
        } else {
            index = 0;
            reviewList[index].classList.add("review__inner-item--active");
            reviewDot[index].classList.add("review__dot--active");
        }
    });

    reviewPrevious.addEventListener("click", function () {
        [...reviewList].forEach(function (item) {
            item.classList.remove("review__inner-item--active");
        });
        [...reviewDot].forEach(function (item) {
            item.classList.remove("review__dot--active");
        });
        if (index > 0) {
            index = index - 1;
            reviewList[index].classList.add("review__inner-item--active");
            reviewDot[index].classList.add("review__dot--active");
        } else {
            index = reviewDot.length - 1;
            reviewList[index].classList.add("review__inner-item--active");
            reviewDot[index].classList.add("review__dot--active");
        }
    });
    const serviceImg = document.querySelector(".col__img");
    console.log(serviceImg);
    const serviceImgCover = document.querySelector(".col__img-cover");
    console.log(serviceImgCover);
    serviceImgCover.addEventListener("mousemove", function (e) {
        const pX = e.pageX;
        const pY = e.pageY;
        serviceImg.style = "";
    });
});

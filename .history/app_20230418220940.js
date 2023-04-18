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
pricingSwitch.addEventListener("click", function () {
    [...pricingPrice].forEach((item) => {
        console.log(parseInt(item.innerText) / 3);
    });
});

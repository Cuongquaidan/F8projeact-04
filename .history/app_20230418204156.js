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
        console.log(modal);
        modal.parentNode.removeChild(modal);
        body.style.height = "auto";
        body.style.overflow = "auto";
    }
});
const tabItem = [...document.querySelectorAll(".tab-item")];
tabItem.forEach(function (item) {
    return item.addEventListener("click", clicktab);
});
const Tab = document.querySelector(".tab-items");
console.log(Tab);
const shortLine = document.querySelector(".tab-items--before");
console.log(shortLine);
shortLine.style.width = `170px`;
function clicktab(event) {
    let { left, top, width, height } = event.target.getBoundingClientRect();
    console.log({ left, top, width, height });
    const widthWin = window.innerWidth;
    const offSetLeft = (widthWin - 1170) / 2 + 585;
    console.log(widthWin);
    shortLine.style.left = `${left}px`;
    shortLine.style.width = `${width}px`;
}

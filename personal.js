const popupTrigger = document.getElementById("popup-trigger");
const popupClose = document.getElementById("popup-close");
const popup = document.getElementById("popup");

// Show pop-up when trigger is clicked
popupTrigger.addEventListener("click", () => {
    popup.style.display = "block";
});

// Close pop-up when close button is clicked
popupClose.addEventListener("click", () => {
    popup.style.display = "none";
});

const popupTrigger2 = document.getElementById("popup-trigger2");
const popupClose2 = document.getElementById("popup-close2");
const popup2 = document.getElementById("popup2");

// Show pop-up when trigger is clicked
popupTrigger2.addEventListener("click", () => {
    popup2.style.display = "block";
});

// Close pop-up when close button is clicked
popupClose2.addEventListener("click", () => {
    popup2.style.display = "none";
});
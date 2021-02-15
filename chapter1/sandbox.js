// get html elemnts
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const closePopup = document.querySelector(".popup-close");

// add event to button
button.addEventListener("click", () => {
	popup.style.display = "block";
});

// add event to close popup
popup.addEventListener("click", () => {
	popup.style.display = "none";
});
closePopup.addEventListener("click", () => {
	popup.style.display = "none";
});

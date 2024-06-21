function openPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    popupImage.src = imageSrc;
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function increaseQuantity(quantityId) {
    var quantityInput = document.getElementById(quantityId);
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

function decreaseQuantity(quantityId) {
    var quantityInput = document.getElementById(quantityId);
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}
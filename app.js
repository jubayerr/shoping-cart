const plusBtnPhone = document.getElementById("plusBtnPhone");
const minusBtnPhone = document.getElementById("minusBtnPhone");
const phoneQuantity = document.getElementById("phoneQuantity");
const phonePrice = document.getElementById("phonePrice");

plusBtnPhone.addEventListener("click", () => {
  handleProductChange(true);
});

minusBtnPhone.addEventListener("click", () => {
  handleProductChange(false);
});

function handleProductChange(isIncrease) {
  const phoneCount = parseInt(phoneQuantity.value);
  let phoneNewCount;
  if (isIncrease == true) {
    phoneNewCount = phoneCount + 1;
  }
  if (isIncrease == false && phoneCount > 0) {
    phoneNewCount = phoneCount - 1;
  }
  phoneQuantity.value = phoneNewCount;
  const phoneTotal = phoneNewCount * 1219;
  phonePrice.innerText = phoneTotal;
}

const plusBtnPhone = document.getElementById("plusBtnPhone");
const minusBtnPhone = document.getElementById("minusBtnPhone");
const phoneQuantity = document.getElementById("phoneQuantity");
const phonePrice = document.getElementById("phonePrice");

plusBtnPhone.addEventListener("click", () => {
  const phoneCount = parseInt(phoneQuantity.value);
  const phoneNewCount = phoneCount + 1;
  phoneQuantity.value = phoneNewCount;
  const phoneTotal = phoneNewCount * 1219;
  phonePrice.innerText = phoneTotal;
});

const plusBtnPhone = document.getElementById("plusBtnPhone");
const minusBtnPhone = document.getElementById("minusBtnPhone");
const phoneQuantity = document.getElementById("phoneQuantity").value;
const phonePrice = document.getElementById("phonePrice");

plusBtnPhone.addEventListener("click", () => {
  let phoneQuantityNum = parseFloat(phoneQuantity);
  console.log(phoneQuantityNum);
});

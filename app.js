const plusBtnPhone = document.getElementById("plusBtnPhone");
const minusBtnPhone = document.getElementById("minusBtnPhone");
const phoneQuantity = document.getElementById("phoneQuantity");
const phonePrice = document.getElementById("phonePrice");
const plusBtnCase = document.getElementById("plusBtnCase");
const minusBtnCase = document.getElementById("minusBtnCase");
const caseQuantity = document.getElementById("caseQuantity");
const casePrice = document.getElementById("casePrice");
const subtotal = document.getElementById("subtotal");

plusBtnPhone.addEventListener("click", () => {
  handleProductChange(true);
});

minusBtnPhone.addEventListener("click", () => {
  handleProductChange(false);
});

plusBtnCase.addEventListener("click", () => {
  handleCaseChange(true);
});

minusBtnCase.addEventListener("click", () => {
  handleCaseChange(false);
});

function handleProductChange(isIncrease) {
  const phoneCount = parseInt(phoneQuantity.value);
  let phoneNewCount = 0;
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

function handleCaseChange(isIncrease) {
  const caseCount = parseInt(caseQuantity.value);
  let caseNewCount = 0;
  if (isIncrease == true) {
    caseNewCount = caseCount + 1;
  } else if (isIncrease == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseQuantity.value = caseNewCount;
  const caseTotal = caseNewCount * 59;
  casePrice.innerText = caseTotal;
}

function handleProductChange(product, isIncrease) {
  let phoneCount = parseInt(
    document.getElementById(product + "-quantity").value
  );
  let phoneNewCount = phoneCount;
  if (isIncrease == true) {
    phoneNewCount = phoneCount + 1;
  }
  if (isIncrease == false && phoneCount > 0) {
    phoneNewCount = phoneCount - 1;
  }
  document.getElementById(product + "-quantity").value = phoneNewCount;
  let phoneTotal = 0;
  if (product == "phone") {
    phoneTotal = phoneNewCount * 1219;
  }
  if (product == "case") {
    phoneTotal = phoneNewCount * 59;
  }
  document.getElementById(product + "-price").innerText = phoneTotal;
}

// const plusBtnPhone = document.getElementById("plusBtnPhone");
// const minusBtnPhone = document.getElementById("minusBtnPhone");
// const phoneQuantity = document.getElementById("phoneQuantity");
// const phonePrice = document.getElementById("phonePrice");
// const plusBtnCase = document.getElementById("plusBtnCase");
// const minusBtnCase = document.getElementById("minusBtnCase");

// const caseQuantity = document.getElementById("case-quantity");
// const casePrice = document.getElementById("case-price");

// plusBtnPhone.addEventListener("click", () => {
//   handleProductChange(true);
// });

// minusBtnPhone.addEventListener("click", () => {
//   handleProductChange(false);
// });

// plusBtnCase.addEventListener("click", () => {
//   handleCaseChange(true);
// });

// minusBtnCase.addEventListener("click", () => {
//   handleCaseChange(false);
// });

// function handleProductChange(isIncrease) {
//   const phoneCount = parseInt(phoneQuantity.value);
//   let phoneNewCount = phoneCount;
//   if (isIncrease == true) {
//     phoneNewCount = phoneCount + 1;
//   }
//   if (isIncrease == false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneQuantity.value = phoneNewCount;
//   const phoneTotal = phoneNewCount * 1219;
//   phonePrice.innerText = phoneTotal;
// }

// function handleCaseChange(isIncrease) {
//   const caseCount = parseInt(document.getElementById("case-quantity").value);
//   let caseNewCount = caseCount;
//   if (isIncrease == true) {
//     caseNewCount = caseCount + 1;
//   }
//   if (isIncrease == false && caseCount > 0) {
//     caseNewCount = caseCount - 1;
//   }
//   document.getElementById("case-quantity").value = caseNewCount;
//   const caseTotal = caseNewCount * 59;
//   document.getElementById("case-price").innerText = caseTotal;
// }

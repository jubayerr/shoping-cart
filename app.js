function handleProductChange(product, isIncrease) {
  let productCount = getInputValue(product);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  document.getElementById(product + "-quantity").value = productNewCount;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }
  if (product == "case") {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + "-price").innerText = productTotal;
  calculateTotal();
}

function calculateTotal() {
  let phoneCount = getInputValue("phone");

  const caseCount = getInputValue("case");

  const subTotal = phoneCount * 1219 + caseCount * 59;
  document.getElementById("sub-total").innerText = subTotal;

  const tax = Math.round(subTotal * 0.04);
  document.getElementById("tax-amount").innerText = tax;

  const totalPrice = subTotal + tax;
  document.getElementById("total-price").innerText = totalPrice;
}

function getInputValue(product) {
  const productQuantity = document.getElementById(product + "-quantity");
  const productCount = parseInt(productQuantity.value);
  return productCount;
}

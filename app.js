function handleProductChange(product, isIncrease) {
  let productCount = parseInt(
    document.getElementById(product + "-quantity").value
  );
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
}

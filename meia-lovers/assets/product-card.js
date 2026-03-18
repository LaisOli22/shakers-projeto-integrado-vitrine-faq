document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".featured-product");

  if (!container) return;

  const variants = JSON.parse(
    container.querySelector(".product-variants").textContent
  );

  const buttons = container.querySelectorAll(".variant-option");
  const priceElement = container.querySelector(".product-price");
  const addToCartBtn = container.querySelector(".add-to-cart");

  let selectedOption = null;
  let selectedVariant = null;


  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      selectedOption = button.dataset.value;

      findVariant();

    });
  });

  function findVariant() {

    selectedVariant = variants.find(variant => {
      return variant.option1 === selectedOption;
    });

    if (selectedVariant) {
      priceElement.textContent = formatMoney(selectedVariant.price);
    }

  }

  addToCartBtn.addEventListener("click", async () => {

    if (!selectedVariant) {
      alert("Selecione um tamanho");
      return;
    }

    try {

      const response = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: selectedVariant.id,
          quantity: 1
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar ao carrinho");
      }

      const data = await response.json();

      alert("Produto adicionado ao carrinho!");

    } catch (error) {
      console.error(error);
      alert("Erro ao adicionar produto");
    }

  });

  function formatMoney(cents) {
    return "R$ " + (cents / 100).toFixed(2);
  }

});
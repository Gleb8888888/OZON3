import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const filterPrice = () => {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const checkboxInput = document.getElementById("discount-checkbox");
  const checkboxSpan = document.querySelector(".filter-check_checkmark");

  minInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });
  maxInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });
  checkboxInput.addEventListener("change", () => {
    if (checkboxInput.checked) {
      checkboxSpan.classList.add("checked");
    } else {
      checkboxSpan.classList.remove("checked");
    }
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });
};
export default filterPrice;
/*
const filterPrice = () => {
  const filter = document.querySelector(".filter");
  const saleCheckBox = filter.querySelector("#discount-checkbox");
  const checkMark = filter.querySelector(".filter-check_checkmark");
  let price = {
    minPrice: "",
    maxPrice: "",
  };

  filter.addEventListener("input", (Event) => {
    switch (Event.target.id) {
      case "min":
        price.minPrice = Event.target.value;
        changeFilter();
        break;
      case "max": {
        price.maxPrice = Event.target.value;
        changeFilter();
        break;
      }
    }
  });

  saleCheckBox.addEventListener("change", () => {
    checkMark.classList.toggle("checked");
    changeFilter();
  });

  const changeFilter = () => {
    getData().then((data) => {
      renderGoods(priceFilter(data, price, saleCheckBox.checked));
    });
  };
};

export default filterPrice;
*/

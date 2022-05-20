export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === "" && max === "") {
      return goodsItem;
    } else if (min !== "" && max !== "") {
      return goodsItem.price > +min && goodsItem.price < +max;
    } else if (min !== "" && max === "") {
      return goodsItem.price > +min;
    } else if (min === "" && max !== "") {
      return goodsItem.price < +max;
    }
  });
};

export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
};

/*
export const priceFilter = (items, values, sale) => {
  return items.filter((item) => {
    if (values.maxPrice != "") {
      if (sale) {
        return (
          +item.price >= +values.minPrice &&
          +item.price <= +values.maxPrice &&
          item.sale == sale
        );
      } else {
        console.log(2);
        return (
          +item.price >= +values.minPrice && +item.price <= +values.maxPrice
        );
      }
    } else if (sale) {
      return +item.price >= +values.minPrice && item.sale == sale;
    } else {
      return +item.price >= +values.minPrice;
    }
  });
*/

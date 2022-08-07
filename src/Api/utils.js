import Data from "./Data";

export const getItemById = (id) =>
  new Promise((res, rej) => {
    const requestedData = Data.find((el) => el.id == id);
    if (requestedData) {
      setTimeout(() => {
        res(requestedData);
      }, 2000);
    } else {
      rej(console.log("No hay productos"));
    }
  });

export const getItemsByCategory = (category) =>
  new Promise((res, rej) => {
    const filteredItems = Data.filter((el) => el.category === category);
    setTimeout(() => {
      if (filteredItems.length > 0) {
        res(filteredItems);
      } else {
        res(Data);
      }
    }, 3000);
  });

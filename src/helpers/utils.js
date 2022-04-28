export const genNavLinkColor = (string, page) => {
  return string.replace(/\s/g, "").toLowerCase() === page ? "#fff" : "";
};
export const getTime = ({ value }) => {
  let dateVal = new Date(value);
  return (
    dateVal.getDate() +
    "/" +
    (dateVal.getMonth() + 1) +
    "/" +
    dateVal.getFullYear() +
    " " +
    dateVal.toLocaleTimeString()
  );
};

export const getObjectKeyCombinedArray = (result) => {
  let newVal = [];
  const keys = Object.keys(result);
  keys.forEach((k) => {
    const objKey = result[k];
    if (objKey.length > 0) {
      objKey.map((d) => {
        newVal.push(d);
      });
    }
  });
  return newVal;
};

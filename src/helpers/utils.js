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
    dateVal.getFullYear()
  );
};

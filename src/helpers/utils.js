export const genNavLinkColor = (string, page) => {
  return string.replace(/\s/g, "").toLowerCase() === page ? "#fff" : "";
};

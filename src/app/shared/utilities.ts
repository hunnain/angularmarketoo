export const generateUrl = (data = {}) => {
  let url = '';
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      url = url + `${key}=${data[key]}&`;
    }
  });
  return url;
};

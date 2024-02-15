const actualResponse = [
  {
    already_exist: "deepak98vish@gmail.com",
  },
  {
    created: "yogeshdas720@gmail.com",
  },
  {
    already_exist: "example@gmail.com",
  },
  {
    created: "drgdd@gmail.com",
  },
  {
    created: "aegsdz@gmail.com",
  },
  {
    already_exist: "d2onee@gmail.com",
  },
];
// output -->  {
//     already_exist: [ 'deepak98vish@gmail.com', 'example@gmail.com', 'd2onee@gmail.com' ],
//     created: [ 'yogeshdas720@gmail.com', 'drgdd@gmail.com', 'aegsdz@gmail.com' ]
// }

if (Array.isArray(actualResponse)) {
  const responseData = actualResponse.reduce((acc, item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    if (acc[key]) {
      acc[key].push(value);
    } else {
      acc[key] = [value];
    }
    return acc;
  }, {});
  console.log(responseData);
  return responseData;
}

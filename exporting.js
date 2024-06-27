const ford ={
  brand: "Ford",
  model: "Fiesta",
};

const tesla ={
  brand: "Tesla",
  model: "Model 3",
};

// another way to export is
// exports.tesla ={
//   brand: "Tesla",
//   model: "Model 3",
// };

// directly exporting
//module.exports = ford;\

// exporting into property
exports.propName = {ford, tesla};
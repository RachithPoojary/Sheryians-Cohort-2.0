const radius = [2, 3, 4, 5, 6];

let calculate = function (radius, logic) {
  //   let result = [];
  let result = radius.map((val) => {
    return logic(val);
  });
  console.log(result);
};

let area = function (radius) {
  return Math.PI * radius * radius;
};

let circumference = (radius) => {
  return 2 * Math.PI * radius;
};

let diameter = (radius) => {
  return radius * 2;
};

calculate(radius, area);
calculate(radius, circumference);
calculate(radius, diameter);

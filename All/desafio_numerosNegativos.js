const arr = [[-1, 3, 4, 1], [2, 2, 4, 9], [4, 5, -7, 9]];
const merge = [].concat(...arr);
const find = () => merge.filter(_a => _a < 0).length;
console.log(find()) //2
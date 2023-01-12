// * Destructuring Assignment là một cú pháp cho phép tách dữ liệu được lưu trữ bên trong (nested) Objects hoặc Arrays (tổng quát hơn là các iterable values) và gán chúng cho các biến riêng biệt.

const arr = ["html", "css", "js", "php"];
//Tạo ra 4 biến a, b, c, d để lưu giá trị của các phần tử trong mảng arr
let [a, b, c, d] = arr; //Đây không phải là một mảng, mà là một destructuring để tách các phần tử trong mảng arr ra thành các biến riêng biệt
console.log(a, b, c, d); // Out put: html css js php

//Nếu muốn lấy phần tử ở vị trí 0 và 2 trong mảng arr thì ta có thể làm như sau:
let [main, , secondary] = arr;
console.log(main, secondary); // Out put: html js

//Nếu không muôn lấy phần tử ở vị trí thì ta có thể để trống, vd không lấy phần tử ở vị trí 1
let [e, , f, g] = arr;
console.log(e, f, g); // Out put: html js php

let [h, ...rest] = arr;
//h sẽ lấy giá trị của phần tử ở vị trí 0 và rest sẽ lấy giá trị của các phần tử còn lại
console.log(h); // Out put: html
console.log(rest); // Out put: ["css", "js", "php"]

console.log("--------------------------------------------------");
const nested = [2, 4, [5, 6]];
const [i, , j] = nested; //i = 2, j = [5, 6]
console.log(i, j); // Out put: 2 [5, 6]

const [k, , [l, m]] = nested; //k = 2, l = 5, m = 6
console.log(k, l, m); // Out put: 2 5 6

// * Giá trị mặc định là giá trị mà ta sẽ gán cho biến nếu biến đó không có giá trị nào được gán cho nó. Trong tương lai ta sẽ không biết được giá trị của biến đó là gì nên phải gán giá trị mặc định cho nó để tránh lỗi

const [p = 1, q = 1, r = 1] = [8, 9]; //Đây là cú pháp để gán giá trị mặc định cho các biến [8, 9] là mảng chứa các giá trị của các biến p, q, r
console.log(p, q, r); // Out put: 8 9 1  vì p = 8, q = 9, r không có giá trị nào được gán cho nó nên nó sẽ lấy giá trị mặc định là 1







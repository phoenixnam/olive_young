var a=1;
var b=2;
var result = false&& NaN && null && '' && undefined && 0;
console.log(result)

var myString = "love you. i love you. abc. doreme ";
var a = myString.replace(/(\.\s*\w)/g, function(match){
    return match.toUpperCase();
});
console.log(a);

var myString = "love you. i love you. thank you. have a nice day";
var a = myString.replace((/(\.\s*\w)/g), function(match){
    return match.toUpperCase();
});
console.log(a);

var string = 'Anh cứ nói rằng anh yêu mãi yêu     một     trái tim dành trọn em thôi   ';
var b = string.replace(/\s+/g, ' ');
console.log(b); // Kết quả: "Anh cứ nói rằng anh yêu mãi yêu một trái tim dành trọn em thôi"

var a =3;
var b= "3";

var c= a !== b;
console.log(c);

var arr = [
    'a',
    'b',
    'c'
]
console.log(arr.splice(1,2, 'd'))
console.log(arr)

function myFunction() {
  var n = "";
  for (var param of arguments) {
    n += `${param} - `;
  }
  console.log(n);
}
myFunction("f", "g", "e");

function show() {
    function show1() {
        console.log('abc')
    }
    show1()
}
show()

function User(name, age) {
    this.name =name,
    this.age = age
    this.getName = function() {
        return `Tôi tên là ${name} năm nay tôi ${age} tuổi`
     }
}
var student = new User ('Phuong', 20)
var teacher = new User ('Ha', 21)

student.gender = 'female'

console.log(student.getName())

var date = 3;

switch (date) {
  case 2:
    console.log("Hôm nay là thứ 2");
    break;
  case 3:
    console.log("Hôm nay là thứ 3");
    break;
  case 4:
    console.log("Hôm nay là thứ 4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;
  case 6:
    console.log("Hôm nay là thứ 6");
    break;

  default: console.log('Chủ nhật')
    break;
}

var a= 7;
var b=9;
var c = a>b ? b: a; //Nếu a>b thì lấy kết quả b in ra màn hình còn không thì lấy a;
console.log(c)
var n=''
var myArr =['js', 'php', 'python']

for(var i =0; i < myArr.length; i++){

    n += `${myArr[i]} - `
}
console.log(n)

var a = ''
var language = 'javascript'
for (i in language){
    a += `${language[i]}`
}
console.log(a)

var random = Math.ceil(Math.random()*100)
if (random <90) {
    console.log('congraduations')
}

//Call Back

function myFunction(param) {
  if (typeof param == "function") {
    param("hello");
  }
}

function myCallback(value) {
  console.log("value: ", value);
}

myFunction(myCallback);

/* B1: Định nghĩa map2 để nó k bị lỗi 
    B2: Lọc qua tất cả các phần tử của array (js, php, python)
    mỗi lần gọi thig nó gọi lại cái phương thức truyền vào qua đối số 
    this chính courses
    B3: Để dùng lại đc thì gọi ở map2 1 cái function 
*/
var courses = ["js", "python", "java"];
Array.prototype.map2 = function(callback) {
    var output= [], arrLength = this.length;
    for (var i = 0; i < arrLength; i++){
       var result =  callback(this[i], i)
       output.push(result);
    }
    return output;
}
var htmls = courses.map2(function(course) {
    return `<h2> ${course} </h2>`
})
console.log(htmls.join(''))

var languages= {
  js: 'js',
  py: 'python'
}
for (var i in languages){
  console.log(languages[i])
}

var program = [
  'js', 'py', 'java'
]

for(var i of program){
  console.log(i)
}

var languages= {
  js: 'js',
  py: 'python'
}

for (var i of Object.values(languages)){
  console.log(i)
}

var i =1;

while (i<10) {
  i++
  console.log(i)
}

var isSuccess = false;

do {
  console.log('nạp thành công')
  if(true){
    isSuccess = true
  }
} while (!isSuccess && i<3);

var number = [
  [1, 2],
  [3, 4],
  [5, 6]
]

for ( var a = 0; a < number.length; a++){
  for (var b = 0; b < number[a].length; b++){
    console.log(number[a][b])
  }
}

for ( var i = 0; i <=100 ; i+=5 ){
    console.log(i)
}

courses =[
  {
    id: 1,
    name: 'js',
  },
  {
    id: 2,
    name: 'py',
  },
  {
    id: 3,
    name: 'java',
  },
  {
    id: 4,
    name: 'js',
  },
]
var course = courses.every(function(course,index) {//every, find, filter,some tạo thêm 1 biến course còn foeach thì không
    return course.name === 'js';
    // console.log(course, index) //foeach
}
);
console.log(course)

var arrBanKinh = [5, 8, 12]

function tinhS(r){
  return Math.floor(Math.PI*r*r)
}
 var arrS = arrBanKinh.map(tinhS)

console.log(arrS)

// var giaTriKhoiTao = 10;

function tinhTong(tichLuy, ptHienTai){
  console.log('a: '+ tichLuy)
  console.log(ptHienTai)
  return tichLuy + ptHienTai
}

// giatrikhoi tao là giá trị ban đầu cho tichLuy trong reduce, nếu k khởi tạo nó sẽ lấy giá trị đầu tiên = giá trị đầu tiên trong mảng tức tichLuy =  2.
// Lưu ý #5: Nếu bạn không truyền giá trị khởi tạo, lần lặp đầu tiên, nó sẽ lấy phần tử đầu tiên (1 đối tượng) để tính cộng => sẽ tính toán sai.
var arr = [2, 4, 8]
let tong= arr.reduce(tinhTong)

console.log(tong)

/* làm phẳng mảng */
var khoiTao = [];

var mang = [1,2 , [3,4], [5, 7]]

var mangPhang = mang.reduce(function(tichluy, ptht) {
    return tichluy.concat(ptht)
},[])
console.log(mangPhang)

var topics= [
  {
    topic: 'front-end',
    courses: [
      {
        id: 1,
        name: 'javascript'

      }
    ]
  },
  {
    topic: 'back-end',
    courses: [
      {
        id: 1,
        name: 'php'
      },
      {
        id: 2,
        name: 'nodejs'
      }
    ]
  },
]

var newCourse = topics.reduce(function(course, topic) {
  return course.concat(topic.courses)
}, [])

console.log(newCourse)

// For each prototype


// FOR EACH METHOD
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) 
      callback(this[index], index, this);
  }
};
var subjects = new Array(2);
subjects.push("js", "py");
subjects.forEach2(function (subject, index, Array) {
  console.log(subject);
});

// MAP METHOD

Array.prototype.map2 = function(callback){
  var output = []
    for (var index in this){
      if (this.hasOwnProperty(index)){
        var result = callback(this[index], index, this)
        if (result){
          output.push(this[index])
        }
      }
    }
    return output;
}
subjects =[
  {
    name: 'toán',
    coin: 234
  },
  {
    name: 'Lý',
    coin: 111
  },
  {
    name: 'anh',
    coin:45
  }
]
var newSubject = subjects.map2(function (subject, index, Array) {
  return subject.coin >= 100;
});

console.log(newSubject)

Array.prototype.filter2 = function(callback){
  var output =[]
  for (var i in this){
    if (this.hasOwnProperty(i)){
        var result = callback(this[i])
        if (result){
          output.push(this[i])
        }
    }
  }
  return output;
}
subjects =[
  {
    name: 'toán',
    coin: 234
  },
  {
    name: 'Lý',
    coin: 111
  },
  {
    name: 'anh',
    coin:45
  }
]

var newSubject = subjects.filter2(function (subject, i, Array) {
  return subject.coin >= 100;
});

console.log(newSubject);

for (var i = 1; i< 10; i++){
  if (i%2 !==0){
    continue
  }
  console.log(i)
}

// continue có nghĩa là khi nó gặp số k chia hết cho 2 thì nó vẫn sẽ tieps tục thực hiện chia 2 nếu số đó chia hết cho 2 thì console ra

const numbers= [1, 5, 7, 9]

Array.prototype.reduce2= function(callback, result){
  var i =0;
  if (arguments.length < 2){
    i=1
    result = this[0]
  }
  for ( ; i < this.length; i++){
    if (this.hasOwnProperty(i)){
      result = callback(result, this[i])
    }
  }
  return result

}

const result = numbers.reduce2((total, number) => {
  return total += number
}, 9)
console.log(result);

var n = 5; 
var result = 1;
for (var i = 1; i <= n; i++){
  result *=i
  
}
console.log(result);

// Giai thừa theo đề quy

function giaiThua(b){
  if (b === 0 ){
    return 1
  } 
    return b * giaiThua(b-1)
  }
console.log(giaiThua(5))



function loop(start, end, cb){
    if(start <= end){
      cb(start)
      return loop (start +1, end, cb)
    }
}

var arr = [1, 2, 4, 7]
loop(0, arr.length -1, function(index){
  console.log(arr[index])
})

document.write('Hello!')

var jsElement = document.querySelector('.js');
jsElement.style.width = '20px';
jsElement.style.height = '20px';
jsElement.style.backgroundColor = 'blue';
jsElement.style.color = 'yellow'
console.log(jsElement.style.borderStartStartRadius)


// DOM event

var h1E = document.querySelectorAll('.js');
for (var i=0; i < h1E.length; i++){
  h1E[i].onclick = function(e){
    console.log(e.target)
  }
}

const message = document.getElementById('message')
const result = document.getElementById('result')

message.addEventListener('input', function(){
  result.innerText = this.value
})

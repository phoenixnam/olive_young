const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector("button[type='submit']");
const togglePasswordVisibilityBtn = document.getElementById("togglePasswordVisibility");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  fetch('./user.json')
    .then(response => response.json())
    .then(data => {
      // Kiểm tra thông tin đăng nhập
      const users = data.users;
      const user = users.find(user => user.username === username && user.password === password);

      // Giả sử thông tin đăng nhập là đúng
      if (user) {
        alert("Đăng nhập thành công!");
        // Chuyển đến trang khác sau khi đăng nhập thành công
        window.location.href = "https://heroicons.com/";
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!");
      }
    })
    .catch(error => {
      console.error('Lỗi khi tải file JSON:', error);
      alert('Đã có lỗi xảy ra. Vui lòng thử lại sau!');
    });

  // Xóa dữ liệu trong trường nhập liệu mật khẩu
  passwordInput.value = "";
});

// Xử lý sự kiện khi người dùng nhấn vào nút ẩn/hiển thị mật khẩu
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".password-toggle-icon");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.setAttribute("class", "w-6 h-6 password-toggle-icon active");
  } else {
      passwordInput.type = "password";
      icon.setAttribute("class", "w-6 h-6 password-toggle-icon");
  }
}
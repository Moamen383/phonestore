// كود تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	// كود التحقق من صحة البيانات
});

// كود إنشاء الحساب
document.getElementById('register-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	// كود التحقق من صحة البيانات
});
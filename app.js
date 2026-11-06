function checkPassword(pwd) {
  if (pwd.length < 8) {
    return 'Слабый: меньше 8 символов';
  }

  if (!/[0-9]/.test(pwd)) {
    return 'Слабый: нет цифр';
  }

  return 'Допустимый';
}
document.getElementById('pwd').addEventListener('input', (e) => {
  document.getElementById('result').textContent =
    checkPassword(e.target.value);
});

function checkPassword(pwd) {
  if (pwd.length < 8) {
    return 'Слабый: меньше 8 символов';
  }

  if (!/[0-9]/.test(pwd)) {
    return 'Слабый: нет цифр';
  }
  if (!/[^A-Za-z0-9]/.test(pwd)) {
    return 'Слабый: нет специальных символов';
  }
  return 'Допустимый';
}
document.getElementById('pwd').addEventListener('input', (e) => {
  document.getElementById('result').textContent =
    checkPassword(e.target.value);
});

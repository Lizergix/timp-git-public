function checkPassword(pwd) {
  if (pwd.length < 8) {
    return 'Слабый: меньше 8 символов';
  }

  return 'Допустимый';
}

document.getElementById('pwd').addEventListener('input', (e) => {
  document.getElementById('result').textContent =
    checkPassword(e.target.value);
});
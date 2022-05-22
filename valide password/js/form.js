/* form.js */

export function isPasswordValid(password) {
  console.log(password)
  let pass = password.trim();
	if (pass.length >= 10) {
    return true;
  }
  return false;
}
export default class InputValidator {
  public static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  public static isValidPassword(password: string): boolean {
    return password.length >= 8
  }

  public static isValidUsername(username: string): boolean {
    return username.length >= 5
  }
}

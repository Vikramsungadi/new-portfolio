/**Returns a random integer between num1 and num2 (inclusive)
 *
 */
export const getRandomBetween = (num1: number, num2: number) =>
  Math.abs(Math.round(Math.random() * num2 - Math.random() * num1)) + num1

/**Returns a random value from the given array
 *
 */
export const getRandomValueOfArray = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

/**Generates an array of unique random numbers between min and max
 *
 */
export function getRandomUniqueNumbers(min: number, max: number) {
  if (max < min) {
    throw new Error('Invalid input. Max must be greater than or equal to min.')
  }

  // Create an array of numbers from min to max
  const numbers = Array.from({ length: max - min + 1 }, (_, index) => index + min)

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
  }

  return numbers
}

/**Returns an array of uppercase letters
 *
 */
export const uppercaseLetters = () =>
  Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

/**Returns the position of a letter in the alphabet (1-indexed)
 *
 */
export const getAlphabetPosition = (letter: string) => {
  return letter.toUpperCase().charCodeAt(0) - 65 + 1
}

/**
 * Generates a random string of specified length using the given character set
 */
export function generateRandomChars(length: number, join = true) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const getRandomChar = () => charset[Math.floor(Math.random() * charset.length)]

  if (join) {
    return Array.from({ length }, getRandomChar).join('')
  }
  return Array.from({ length }, getRandomChar)
}

export function objectHas(obj: Object, k: string) {
  return Object.hasOwn(obj, k)
}

export const removeSpaces = (sentence: string) => {
  return sentence.split(' ').join('')
}

export function capitalize(input: string) {
  return input[0].toUpperCase() + input.slice(1)
}

// Import the functions to test.
const {
  sumOfArray,
  reverseString,
  isPalindrome,
  purgeDuplicates,
} = require("./functions.js");

// Tests for sumOfArray()
describe("sumOfArray", () => {
  test("adds all numbers in an array", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("returns 0 for an empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });

  test("ignores non-number values", () => {
    expect(sumOfArray([1, "x", 2, null, 3])).toBe(6);
  });

  test("returns 0 if input is not an array", () => {
    expect(sumOfArray("not array")).toBe(0);
  });
});

// Tests for reverseString()
describe("reverseString", () => {
  test("reverses a basic string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("returns an empty string if input is empty", () => {
    expect(reverseString("")).toBe("");
  });

  test("handles numbers by converting them to strings", () => {
    expect(reverseString(1234)).toBe("4321");
  });
});

// Tests for isPalindrome()
describe("isPalindrome", () => {
  test("returns true for a simple palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  test("returns true for a palindrome with spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });

  test("returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("handles numbers safely", () => {
    expect(isPalindrome(12321)).toBe(true);
  });
});

// Tests for purgeDuplicates()
describe("purgeDuplicates", () => {
  test("removes duplicate numbers", () => {
    expect(purgeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test("removes duplicate strings", () => {
    expect(purgeDuplicates(["a", "b", "a"])).toEqual(["a", "b"]);
  });

  test("returns an empty array if input is not an array", () => {
    expect(purgeDuplicates("hello")).toEqual([]);
  });

  test("keeps mixed unique values", () => {
    const result = purgeDuplicates([1, "1", true, 1]);
    expect(result).toEqual([1, "1", true]);
  });
});

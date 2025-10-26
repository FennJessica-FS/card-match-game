// Returns the sum of all numbers in an array.
function sumOfArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce(
    (sum, item) => (typeof item === "number" ? sum + item : sum),
    0
  );
}

// Reverses the provided string.
function reverseString(str) {
  const s = String(str);
  return s.split("").reverse().join("");
}

// Checks whether the provided string is a palindrome.
function isPalindrome(str) {
  const s = String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const r = s.split("").reverse().join("");
  return s.length > 0 && s === r;
}

// Removes duplicate values from an array.
function purgeDuplicates(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

// Export all functions for testing.
module.exports = {
  sumOfArray,
  reverseString,
  isPalindrome,
  purgeDuplicates,
};

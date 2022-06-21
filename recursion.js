// Product: Calculate product of an array of nums
// [2,3,4]
function product(nums) {
	if (nums.length === 0) {
		return 1
	} else {
		return nums[0] * product(nums.slice(1))
	}
}

// Longest: Return length of longest word in array of words
// ["hello", "hi", "hola"]
function longestWord(words, longest = 0) {
	if (words.length === 0) {
		return longest
	} else if (words[0].length > longest){
		longest = words[0].length;
	}
	return longestWord(words.slice(1), longest);
}

// everyOther: Return a string with every other character
// 'hello'
function everyOther(str) {
	if (str.length < 1) return ''
	return str[0] + everyOther(str.slice(2))
}

// isPalindrome: checks if a string is a palindrome
// 'racecar'
function isPalindrome(str, i = 1) {
	if (i === str.length + 1) return true;
	return str[i-1] === str.slice(-i)[0] ? isPalindrome(str, i + 1) : false;
}

// findIndex: return index of val in arr (or -1 if val is not present)
// ["duck", "cat", "pony", "cat"]
function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1
	return arr[i] === val ? i : findIndex(arr, val, i + 1);
}

// revString: return a copy of a string, reversed
// 'gray'
function revString(str, i = 1) {
	if (i > str.length) return '';
	return str[str.length - i] += revString(str, i + 1)
}

// gatherStrings: given an object, return an array of all the string values
// let nestedObj = {
// 	firstName: "Lester",
// 	favoriteNumber: 22,
// 	moreData: {
// 	  lastName: "Testowitz"
// 	},
// 	funFacts: {
// 	  moreStuff: {
// 		anotherNumber: 100,
// 		deeplyNestedString: {
// 		  almostThere: {
// 			success: "you made it!"
// 		  }
// 		}
// 	  },
// 	  favoriteString: "nice!"
// 	}
//   }
function gatherStrings(obj, arr = []) {
	for (let n of Object.values(obj)) {
		if (typeof n === 'string') {
			arr.push(n);
		}
		else if (typeof n === 'object') {
			gatherStrings(n, arr)
		} else {
			console.log(n)
		}
	}
	return arr;
}

// binarySearch: given a sorted array of nums, and a value, return index of that value (or -1 if val is not present)
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
	if (left > right) return -1;
	let mid = Math.floor((left + right) / 2);
	if (arr[mid] === val) return mid;
	if (arr[mid] > val) {
		return binarySearch(arr, val, left, mid - 1)
	}
	return binarySearch(arr, val, mid + 1, right)
}

// module.exports = {
//   product,
//   longest,
//   everyOther,
//   isPalindrome,
//   findIndex,
//   revString,
//   gatherStrings,
//   binarySearch
// };

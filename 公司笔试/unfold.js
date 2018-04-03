function unfold (arr) {
	var result = []
	
	function temp(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] == 'object' && arr[i].length > 0) {
				temp(arr[i])
			} else {
				result.push(arr[i])
			}
		}
	}
	temp(arr);

	return result
}

var arr = [-1, 0, 1, [2, 3],[4, [5, 6, [7, 8]]], [], 9]

console.log(unfold(arr));
// console.log(arr.toString().split(','))
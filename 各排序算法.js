
//冒泡排序
function BubbleSort(arr){
	var len = arr.length;
	for(i = 0;i < len - 1;i++){
		for(j = 0;j < len - 1 - i;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
//选择排序
function SelectSort(arr){
	var len = arr.length;
	var minIndex,temp;
	for(i = 0;i < len - 1;i++){
		minIndex = i;
		for(j = i + 1;j < len;j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}
//插入排序
function insertSort(arr){
	var len = arr.length;
	var preIndex,current;
	for(i = 1;i < len ;i++){
		current = arr[i];
		preIndex = i - 1;
		while(preIndex >=0 && arr[preIndex] > current){
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
}
//快速排序
function quickSort(items, left, right) {
var len = arr.length;
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    var index;
    if (len > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }

    }
    return items;
}
function partition(items, left, right) {
	//分区，选取中间的为基准点
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(arr, i, j) {
	//交换
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
//归并排序
function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
//希尔排序
function shellSort(nums){//希尔排序
	var len = nums.length;
		for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
		     for (var i = fraction; i < len; i++) {
		         for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
		             var temp = arr[j];
		             arr[j] = arr[fraction + j];
		             arr[fraction + j] = temp;
		         }
		     }
		 }
		return arr;
	}
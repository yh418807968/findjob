//十进制转其他进制
function divideBy2(num,base){
	//名字根据base改变
	var stack =[];
	var rem;
	var binaryStr = "";
	while(num>0){
		rem = Math.floor(num % base);
		stack.push(rem);
		num = Math.floor(num / base);
	}
	stack = stack.reverse().join("");
    return stack;

}
alert(divideBy2(233))

//十进制转16进制

function divideBy16(num,base){
	var stack =[];
	var rem;
	var binaryStr = "";
	var digits = "0123456789ABCDEF";
	while(num>0){
		rem = Math.floor(num % base);
		stack.push(rem);
		num = Math.floor(num / base);
	}
	stack.reverse();
	stack.map(function(item,index,array){
		item = digits[item];
	});
	stack=stack.join("");
    return stack;

}
alert(divideBy2(32))
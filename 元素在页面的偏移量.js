/*计算某个元素在页面上的偏移量*/
function getElementTop(element){
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while(current!=null){
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}
// ？？？应该也可以用element.getBoundingClientRect().top+(document.body.scrollTop||document.documentElement.scrollTop)
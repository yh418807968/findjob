/*遍历可粗略分为三种：
（1）递归遍历：前序、中序、后序；
（2）广度优先遍历BFS：队列；
（3）深度优先遍历DFS：栈*/
var tree = {
 value: 1,
 left: {
  value: 2,
  left: {
   value: 4
  }
 },
 right: {
  value: 3,
  left: {
   value: 5,
   left: {
    value: 7
   },
   right: {
    value: 8
   }
  },
  right: {
   value: 6
  }
 }
}
//中序遍历
function inOrder(node){
	if(node){
		inOrder(node.left);
		console.log(node.value);
		inOrder(node.right);
	}	
}
//中序遍历-非递归
function inOrder(node){
  var stack = [];
    var p = node;

    while (p || stack.length !=0) {
        if (p) {
            stack.push(p);
            p = p.left;
        } else {
            p = stack.pop();
             console.log(p.value);
            p = p.right;
        }
    }
}
//前序遍历-递归
function preOrder(node){
	if(node){
		console.log(node.value);
		preOrder(node.left);
		preOrder(node.right);
	}	
}
//前序遍历-非递归
function PreOrder(node){
  var stack = [];
    var p = node;

    while (p || stack.length !=0) {
        if (p) {
            stack.push(p);
            console.log(p.value);
            p = p.left;
        } else {
            p = stack.pop();
            p = p.right;
        }
    }
}
//后序遍历
function postOrder(node){
	if(node){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.value);
	}	
}
//后序遍历-非递归
function postOrder(node) {
    var stack = [];
    stack.push([node, 0]);

    while (stack.length !=0) {
        var a = stack.pop();
        var p = a[0];

        switch (a[1]) {
            case 0:
                stack.push([p, 1]);  // 修改mark域
                if (p.left) {stack.push([p.left, 0])};  // 访问左子树
                break;
            case 1:
                stack.push([p, 2]);
                if (p.right) {stack.push([p.right, 0])};
                break;
            case 2:
                console.log(p.value);
                break;
            default:
                break;
        }
    }
}

//广度优先遍历
function breadthOrder(node){
	if(node){
		var que = [];//用数组模拟队列
		que.push(node);
		while(node &&que.length != 0){
			node = que.shift();
			if(node){console.log(node.value)};  
			if(node.left) {que.push(node.left)};  
			if(node.right) {que.push(node.right)};
		}

	}
}
//深度优先遍历
var depthOrder = function(node) { 
 if(node){
 	var stack = [];//用数组模拟栈
 	stack.push(node) ;
 	while(stack.length !== 0) {
	 	node = stack.pop() ; 
	 	console.log(node.value) ; 
	 	if(node.right) {stack.push(node.right)} ; 
	 	if(node.left) {stack.push(node.left)};
 	}
 }
 
}


inOrder(tree);

// //////////以下针对对于二叉搜索树
// 搜索树的最大值
function max(node){
	if(node){
		while(node && node.right){
			node =node.right;
		}
		return node.value;
	}
	return null;
}
//搜索树的最小值
function min(node){
	if(node){
		while(node && node.left){
			node =node.left;
		}
		return node.value;
	}
	return null;
}
//搜索一个特定的值
function search(node,value){
	if(!node){
		return false; 
	}
	if(value < node.value){
		return search(node.left,value);
	}else if(value > node.value){
		return search(node.right,value);
	}else{
		return true;
	}
}
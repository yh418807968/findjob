//向优先队列items中插入元
var items =[];
function QueueElement(ele,prior){
	this.ele = ele;
	this.prior = prior;
}
function enqueue(items,ele,prior){
	var queueElement = new QueueElement(ele,prior);
		if(items.length ==0){//空队列
			items.push(queueElement);
		}else{
			var added = false;
			for(var i=0;i<items.length;i++){
				if(queueElement.prior < items[i].prior){
					added = true;
					items.splice(i,0,queueElement);
					break;
				}
			}
			if(!added){//若优先级最低，则放于最后
				items.push(queueElement);
			}
		}
}
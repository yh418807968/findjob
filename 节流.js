// 简单的节流函数
function throttle(func, wait, mustRun) {
    var timeout,
        startTime = new Date();
 
    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();
 
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - startTime >= mustRun){
            func.apply(context,args);
            startTime = curTime;
        // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(func, wait);
        }
    };
};
// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
    console.log("Success");
}
// 采用了节流函数
window.addEventListener('scroll',throttle(realFunc,500,1000));


/*若想要实现更流畅，可采用requestAnimationFrame，触发频率为16.7ms*/
/*********************************************************/
// var ticking = false; // rAF 触发锁
 
// function onScroll(){
//   if(!ticking) {
//     requestAnimationFrame(realFunc);
//     ticking = true;
//   }
// }
 
// function realFunc(){
//     // do something...
//     console.log("Success");
//     ticking = false;
// }
// // 滚动事件监听
// window.addEventListener('scroll', onScroll, false);

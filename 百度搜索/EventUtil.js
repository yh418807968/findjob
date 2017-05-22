var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {  // DOM2
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {  // IE
            element.attachEvent('on' + type, handler);
        } else {  // DOM0
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    hasClass: function (obj, cls) {
        if (!obj.className ) {
            return false;
        }
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    addClass: function (obj, cls) {
        if (!this.hasClass(obj, cls)) {
            // console.log(obj.className)
            obj.className = (obj.className===" " )?cls :obj.className + " " +cls
        }
    },

    removeClass: function (obj, cls) {
        // console.log('tihuanqian' + obj.className)
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
            // console.log('tihuanhou '+obj.className);
        }
    },

    toggleClass: function (obj, cls) {
        if (this.hasClass(obj, cls)) {
            this.removeClass(obj, cls);
        } else {
            this.addClass(obj, cls);
        }
    }
};
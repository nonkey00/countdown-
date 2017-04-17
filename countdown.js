/**
 * @authors happy
 * @date    2016-08-30 21:05:16
 * @version $Id$
 */

 //(function() {

    function countDown(options,callback){
        this._ele = options.ele;
        this.time = options.time || 3;
        this.counting = true;
        this._stop_class = options.stop_class;
        this._init();
        this.callback = callback;
    }

    countDown.prototype = {
        _init : function()
        {
            var _this  = this;
            _this._count_down(_this.time);
        },
        // 计时函数
        _count_down : function (sec)
        {
            var _this = this ;
            _this.counting = false;
            _this._ele.html(sec +"s");
            _this._ele.parent().addClass(_this._stop_class);
            _this.count_Interval = setInterval(function()
            {
                sec--;
                if (sec == 0)
                {
                    _this._stop_count_down();
                }
                else
                {
                    _this._ele.html(sec+"s");
                }
            }, 1000)
        },
        // 清除计时器
        _stop_count_down : function()
        {
            var _this = this;
            clearInterval(_this.count_Interval);
            _this._ele.html("再次获取");
            _this.counting = true;
            //_self._ele.removeClass(_self._stop_class);
            _this._ele.parent().removeClass(_this._stop_class);
            if(typeof _this.callback === 'function'){
            _this.callback();
            }
        }
    }
   // module.exports = countDown;

 // })();
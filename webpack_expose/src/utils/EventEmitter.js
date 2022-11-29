/**
 * 跨组件通信的 发布订阅模型 可跨多层组件传递,父->子,子->父,
 * 只要订阅以及相应的发布事件即可
 */
class EventEmitter{
    constructor(){
        // 管理事件发布-订阅的 map
        this.eventMap = {}
    }

    // 订阅
    on (type,handler){
        console.log('type_type:',type);
        if (!(handler instanceof(Function))) {
            throw new Error('handler 只能是Function')
        }
        // 判断type 事件对应的队列是否存在
        if(!this.eventMap[type]){
            // 若不存在,新建该队列
            this.eventMap[type] = []
        }
        // 若存在,直接往队列里推入handler
        this.eventMap[type].push(handler)
    }

    // 发布,触发时是可以携带参数的,params就是数据的载体
    emit(type,params){
        console.log('emit_type:',type,'params:',params);
        // 假设该事件是有订阅的(对应的事件队列存在)
        if(this.eventMap[type]){
            // 将事件队列的handler依次执行出队
            this.eventMap[type].forEach((handler,index) => {
                // 注意携带参数
                handler(params)
            });
        }

    }

    off(type,handler){
        if(this.eventMap[type]){
            this.eventMap[type].splice(this.eventMap[type].indexOf(handler)>>>0,1)
        }
    }

    static initInstance() {
        if (!window.myEvent){
            const myEvent = new EventEmitter()
            window.myEvent = myEvent
        }
    }

}

export default EventEmitter
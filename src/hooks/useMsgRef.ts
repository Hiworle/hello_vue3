import {customRef} from "vue";

export default function (initValue: string, delay: number) {
    // track：跟踪；trigger：触发
    let msg = customRef((track, trigger) => {
        let timer: number; // 定时器编号

        return {
            get() {
                // getter 获取此数据时调用
                // console.log('get', initValue)

                track(); // 告诉 vue 数据 msg 很重要，需要对 msg 持续关注，一旦变化立即更新
                return initValue;
            },
            set(value) {
                // setter 设置此数据时调用
                // console.log('set', value)

                // 先清空上一个定时器，再重新设置更新时间
                clearTimeout(timer);
                timer = setTimeout(
                    () => {
                        initValue = value;

                        trigger(); // 通知 vue 数据变化了
                    }, delay);
            }
        }
    })

    return {msg}
};
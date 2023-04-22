/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance: any = null;

function render(props: any) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}
export async function mount(props: any) {
  render(props);
}

//判断当前运行环境是独立运行的还是在父应用里面进行运行，配置全局的公共资源路径
// @ts-ignore
if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
//最后暴露的三个方法是固定的，加载渲染以及销毁
export async function bootstrap() {
  console.log("bootstrap ");
}
// export async function mount(props){
//     render();
// }
export async function unmount() {
  instance.$destroy();
}
export async function update(props: any) {
  //   console.log('update props', props);
}

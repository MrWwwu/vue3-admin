import Vue from 'vue'

let loading;
let needLoadingRequestCount = 0;

function startLoading(){
  loading = Vue.prototype.$loading({
    lock: true,
    text: "玩命加载中...",
    target: document.querySelector('.el-main')//设置加载动画区域
  });
}

function endLoading(){
  loading.close()
}

export function showFullScreenLoading(){
  if (needLoadingRequestCount === 0) {
      startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading(){
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
      endLoading()
  }
}

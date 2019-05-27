import Vue from 'vue'

import Wradio from '@c/radio'
import WradioBut from '@c/radio/radioButton'
import WcheckBox from '@c/checkBox'
import WcheckBoxBtn from '@c/checkBox/checkBoxBtn'
import Winput from '@c/input'
import Wselect from '@c/select'
import Wcascader from '@c/cascader'

Vue.component('Wradio',Wradio) // 单选框
Vue.component('WradioBut',WradioBut) // 按钮型单选框
Vue.component('WcheckBox',WcheckBox) // 多选框
Vue.component('WcheckBoxBtn',WcheckBoxBtn) // 按钮型多选框
Vue.component('Winput',Winput) // 输入框
Vue.component('Wselect',Wselect) // 下拉选择框
Vue.component('Wcascader',Wcascader) // 级联选择器
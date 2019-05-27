const mixins = {
    data(){
        return {
            // 单选框
            radioList:[{
                value:'青岛',
                label:'0'
            },
            {
                value:'北京',
                label:'1'
            },
            {
                value:'上海',
                label:'2',
                disabled:true
            },
            {
                value:'香港',
                label:'3'
            }],
            defaultRadio:'',
            // 多选框默认值
            defaultCheck:['0','1'],
            // 输入框
            inputValue:'',
            inputPlaceholder:'请输入搜索内容',
            numValue:1,
            // 选择框
            selectSet:{
                title:'请选择',
                value:[],
                multiple:true, // 单选还是多选 多选时value=>array,单选时value=>string
                list:[{
                    value:'0',
                    label:'青岛'
                },
                {
                    value:'1',
                    label:'上海',
                    disabled:true
                },
                {
                    value:'2',
                    label:'北京'
                }]
            },
            // 级联选择器
            selectedOptions:['zhinan','shejiyuanze','yizhi'],
            casOptions:[{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    },   {
                        value: 'fankui',
                        label: '反馈'
                    },   {
                        value: 'xiaolv',
                        label: '效率'
                    },   {
                        value: 'kekong',
                        label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    },   {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                }]
                }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                    },   {
                        value: 'color',
                        label: 'Color 色彩'
                    },   {
                        value: 'typography',
                        label: 'Typography 字体'
                    },   {
                        value: 'icon',
                        label: 'Icon 图标'
                    },   {
                        value: 'button',
                        label: 'Button 按钮'
                    }]
                }]
            }],
        }
    }
}
export default mixins
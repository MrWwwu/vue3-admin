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
            defaultCheck:['0','1']

        }
    }
}
export default mixins
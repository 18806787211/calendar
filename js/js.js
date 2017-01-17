var data={
	rows:[
		{id:1,name:'张兵',project:'移动远程ui用前端工程化实践',stardate:'12.28-17.2.28',prOld:'掌握健康科室医生优化版本，移动远程问卷调查之工程化实践',oldDate:'2017.2.5-*',study:'es6语法+nodejs',studyDate:'-12.31',remarks:''},
		{id:2,name:'郭艳杰',project:'',stardate:'',prOld:'',oldDate:'',study:'ajax,json，array等',studyDate:'-12.31',remarks:''},
		{id:3,name:'刘妮萍',project:'',stardate:'',prOld:'台州中心医院微信维护优化',oldDate:'*',study:'',studyDate:'',remarks:''},
		{id:4,name:'尉波浪',project:'浙一互联网、浙一手机端、浙一官网',stardate:'12.15-*',prOld:'',oldDate:'',study:'微信产品相比支付宝的优点',studyDate:'11.1-11.30',remarks:''},
		{id:5,name:'陈雅凯',project:'山西省平台',stardate:'-1.4',prOld:'健康宁波微信医疗信息模块 修改',oldDate:'*',study:'html5语义化、规范',studyDate:'11.8-12',remarks:''},
		{id:6,name:'沈维胜',project:'钱江名医馆（微信）',stardate:'12.20-*',prOld:'',oldDate:'',study:'',studyDate:'',remarks:''},
		{id:7,name:'陈格格',project:'',stardate:'',prOld:'',oldDate:'',study:'人机交互',studyDate:'11.1-11.30',remarks:''},
		{id:8,name:'张文俊',project:'连云港医院',stardate:'11.24-*',prOld:'广东医科大学',oldDate:'11.29-*',study:'svn代码管理',studyDate:'11.10-11.24',remarks:''},
		{id:9,name:'张小晴',project:'互联网医院--购药',stardate:'12.26-*',prOld:'',oldDate:'',study:'',studyDate:'',remarks:''},
	],
	rowtemplate: { id: 0,name:'',project:'',stardate:'',prOld:'',oldDate:'',study:'',studyDate:'',remarks:''},
	Bzrow:'更新规则：每人如果状态变更及时更新，组长或副组长每天9.30检查一次，发现更新不及时的每人次扣10元，计入部门经费',
	beizhutemplate:{content:''}
};
new Vue({
	el:'.app',
	data:function(){
		return data
	},
	methods:{
		Save:function(){
			if($('.name').val()=="")
			{
				return;
			}
			else{
				if (this.rowtemplate.id == 0) {
	            //设置当前新增行的Id
	            this.rowtemplate.id = this.rows.length + 1;
	            this.rows.push(this.rowtemplate);
	            }
	    		  //还原模板
	            this.rowtemplate ={id:0,name:'',project:'',stardate:'',prOld:'',oldDate:'',study:'',studyDate:'',remarks:''}
			}
		},
		Del:function(id){
			//实际项目中参数操作肯定会涉及到id去后台删除，这里只做展示。
			for(var i=0;i<this.rows.length;i++){
                    if (this.rows[i].id == id) {
                        this.rows.splice(i, 1);
                        break;
                    }
                }
		},
		Edit:function(row){
			this.rowtemplate = row;
		},
		BZsave:function(){
			this.Bzrow=this.beizhutemplate.content;
			this.beizhutemplate={content:''};
			$('.bztext').hide();
			$('.btnsave').hide();
		},
		BZedit:function(){
			this.beizhutemplate.content=this.Bzrow;
			$('.bztext').show();
			$('.btnsave').show();
		}
	}
})












(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e57030c"],{b0c0:function(e,t,s){var r=s("83ab"),n=s("9bf2").f,a=Function.prototype,u=a.toString,i=/^\s*function ([^ (]*)/,o="name";r&&!(o in a)&&n(a,o,{configurable:!0,get:function(){try{return u.call(this).match(i)[1]}catch(e){return""}}})},fbe3:function(e,t,s){"use strict";s.r(t);var r=s("7a23"),n=Object(r["g"])("div",{id:"1",class:"card",style:{width:"60%",margin:"0 auto",padding:"30px 30px"}},[Object(r["g"])("h3",null,"15. 保險公司是否已知您有未據實告知之情事，如以電話告知您、寄發通知書告知解約、或保險業務員向您說明 ?")],-1),a=Object(r["g"])("br",null,null,-1),u={class:"card",style:{width:"60%",margin:"0 auto",padding:"30px 30px"}},i={class:"card-body"},o=Object(r["g"])("b",null,"是",-1),l=[o],c=Object(r["g"])("br",null,null,-1),p=Object(r["g"])("b",null,"否",-1),m=[p];function d(e,t,s,o,p,d){var b=Object(r["z"])("component1");return Object(r["s"])(),Object(r["f"])(r["a"],null,[n,a,Object(r["g"])("div",u,[Object(r["g"])("div",i,[Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:t[0]||(t[0]=function(e){return p.show=!0}),class:"btn btn-outline-success",style:{width:"100%",padding:"10px 30px"}},l)]),!0===p.show?(Object(r["s"])(),Object(r["d"])(b,{key:0})):Object(r["e"])("",!0),c,Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return d.press&&d.press.apply(d,arguments)}),class:"btn btn-outline-danger",style:{width:"100%",padding:"10px 30px"}},m)])])])],64)}s("b0c0");var b=Object(r["g"])("br",null,null,-1),h=Object(r["g"])("h5",null,"保險公司何時得知此事 ?",-1),g={class:"input-group mb-3"},f={class:"input-group-append"},j=Object(r["g"])("b",null,"確認",-1),O=[j],$=Object(r["g"])("br",null,null,-1),D=Object(r["g"])("b",null,"不知道",-1),w=[D];function v(e,t,s,n,a,u){return Object(r["s"])(),Object(r["f"])(r["a"],null,[b,Object(r["g"])("div",null,[h,Object(r["g"])("div",g,[Object(r["G"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.date=e}),class:"form-control"},null,512),[[r["E"],a.date]]),Object(r["g"])("div",f,[Object(r["g"])("button",{onClick:t[1]||(t[1]=function(e){return u.press(1)}),class:"btn btn-outline-success",type:"button"},O)])]),$,Object(r["g"])("button",{onClick:t[2]||(t[2]=function(e){return u.press(0)}),class:"btn btn-outline-dark",style:{width:"100%",padding:"10px 30px"}},w)])],64)}var y={name:"15-1",data:function(){return{date:null}},methods:{press:function(e){if(1==e&&null==this.date)alert("請選擇日期");else{var t=new Date;t.setHours(0,0,0,0);var s=new Date(this.date);s.setHours(0,0,0,0);var r=new Date(new Date(s).setMonth(s.getMonth()+1));t>=r?this.$router.push({name:"result3"}):this.$router.push({name:"16",params:{name:this.$route.params.name,type:this.$route.params.type,samePeople:this.$route.params.samePeople,insurerCareer:this.$route.params.insurerCareer,insuredCareer:this.$route.params.insuredCareer,insurerDate:this.$route.params.insurerDate,serviceDate:this.$route.params.serviceDate,disease:this.$route.params.disease,nonConformingDisease:this.$route.params.nonConformingDisease,sufferTiming:this.$route.params.sufferTiming,notInformedReason:this.$route.params.notInformedReason,settlementReason:this.$route.params.settlementReason,settlementDate:this.$route.params.settlementDate,insurerKnow:"是"}})}}}};y.render=v;var C=y,x={data:function(){var e=new Date((new Date).setHours(0,0,0,0)),t=new Date(this.$route.params.insurerDate);t.setHours(0,0,0,0);var s=new Date(this.$route.params.settlementDate);s.setHours(0,0,0,0);var r=new Date(new Date(t).setFullYear(t.getFullYear()+2));return{today:e,insurerDate:t,settlementDate:s,twoY:r,show:!1}},computed:{diff:function(){var e=864e5;return Math.abs(this.settlementDate.setHours(0,0,0,0)-this.today)/e}},methods:{press:function(){this.twoY<=this.settlementDate?this.$router.push({name:"result3"}):this.$router.push({name:"16",params:{name:this.$route.params.name,type:this.$route.params.type,samePeople:this.$route.params.samePeople,insurerCareer:this.$route.params.insurerCareer,insuredCareer:this.$route.params.insuredCareer,insurerDate:this.$route.params.insurerDate,serviceDate:this.$route.params.serviceDate,disease:this.$route.params.disease,sufferTiming:this.$route.params.sufferTiming,notInformedReason:this.$route.params.notInformedReason,settlementReason:this.$route.params.settlementReason,settlementDate:this.$route.params.settlementDate,insurerKnow:"否"}})}},components:{component1:C}};x.render=d;t["default"]=x}}]);
//# sourceMappingURL=chunk-9e57030c.9c62a449.js.map
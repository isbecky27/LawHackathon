(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d223efd"],{"0227":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["g"])("div",{id:"1",class:"card",style:{width:"60%",margin:"0 auto",padding:"30px 30px"}},[Object(a["g"])("h3",null,"4. 要保人職業 ?")],-1),s=Object(a["g"])("br",null,null,-1),c={class:"card",style:{width:"60%",margin:"0 auto",padding:"30px 30px"}},u={class:"card-body"},i=Object(a["g"])("br",null,null,-1),o=Object(a["g"])("b",null,"確認",-1),l=[o];function p(e,t,r,o,p,b){return Object(a["s"])(),Object(a["f"])(a["a"],null,[n,s,Object(a["g"])("div",c,[Object(a["g"])("div",u,[Object(a["g"])("div",null,[Object(a["G"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.career=e}),class:"form-control",placeholder:"輸入要保人職業"},null,512),[[a["E"],p.career,void 0,{trim:!0}]]),i,Object(a["g"])("button",{onClick:t[1]||(t[1]=function(){return b.press&&b.press.apply(b,arguments)}),class:"btn btn-outline-success",type:"button"},l)])])])],64)}r("b0c0");var b={data:function(){return{career:""}},methods:{press:function(){0==this.career.length?alert("請填寫要保人職業"):1==this.$route.params.samePeople?this.$router.push({name:"6",params:{name:this.$route.params.name,type:this.$route.params.type,samePeople:this.$route.params.samePeople,insurerCareer:this.career,insuredCareer:this.career}}):this.$router.push({name:"5",params:{name:this.$route.params.name,type:this.$route.params.type,samePeople:this.$route.params.samePeople,insurerCareer:this.career}})}}};b.render=p;t["default"]=b},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,s=Function.prototype,c=s.toString,u=/^\s*function ([^ (]*)/,i="name";a&&!(i in s)&&n(s,i,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-6d223efd.f6e7bd5a.js.map
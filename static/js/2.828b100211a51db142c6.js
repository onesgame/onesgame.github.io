webpackJsonp([2],{"+1+t":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s,i=t("bOdI"),n=t.n(i),a=t("lGGP"),r=(t("oFuF"),t("szyz")),c=(s={data:function(){var e=this;return{eosio:null,loading:!1,cur_coin_code:"EOS",cur_coin_amount:"0.00",VerificationCode:this.$t("loginPart.sendCode"),smsloading:!1,smsdisabled:!1,depositForm:{order_id:"",amount:"",coin_code:"USDT",vcode:""},balances:{usdt:0,dt:0,ones:0,just:0},depositRules:{amount:[{validator:function(o,t,s){return""==t?s(new Error(e.$t("assetScene.depositPlaceholder"))):s()},trigger:"blur"}],vcode:[{validator:function(o,t,s){e.depositForm.order_id||s(new Error(e.$t("loginPart.VerificationCodeFormatError3"))),""===t?s(new Error(e.$t("loginPart.VerificationCodePlaceHolder"))):/\d/.test(t)?6!=t.length?s(new Error(e.$t("loginPart.VerificationCodeFormatError2"))):s():s(new Error(e.$t("loginPart.VerificationCodeFormatError1")))},trigger:"blur"}]}}},watch:{"depositForm.coin_code":function(e){console.log(e);var o=e.toLowerCase();this.cur_coin_code=e.toUpperCase(),this.cur_coin_amount=this.balances[o]}},mounted:function(){this.eosio=this.$store.getters.eosio;var e=this.$route.params.coin_code,o=this.$route.params.coin_amount;e&&(this.cur_coin_code=e.toUpperCase(),this.depositForm.coin_code=e.toUpperCase(),this.cur_coin_amount=Number(o).toFixed(4));this.$route.query.action;this.getBalances()}},n()(s,"watch",{loading:function(e){!e&&this.loadingPage&&this.loadingPage.close()}}),n()(s,"methods",{deposit:function(){var e=this;this.$refs.depositForm.validate(function(o){if(!o)return!1;e.loading=!0;var t={type:"eos",amount:e.depositForm.amount,coin_code:e.depositForm.coin_code.toLowerCase()};console.log(t,e.eosio),e.eosio?(console.log("eos connectd",e.eosio),e.predeposit(t)):(e.eosio=new r.a("onesgameplay"),e.$store.dispatch("ASET_EOSIO",e.eosio),console.log("eos connecting"),e.eosio.connect(function(e,o,s){console.log(e,o,s),0==e?this.predeposit(t):(this.loading=!1,this.$message({message:this.$t("message."+o),type:"error",center:!0}))}.bind(e)))})},predeposit:function(e){var o=this;a.a.predeposit(e).then(function(t){if(0==t.code){o.loadingPage=o.$loading({lock:!0,text:o.$t("message.paying"),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var s="deposit#"+t.data.eos_orderid;o.eosio.transfer(e.coin_code,t.data.amount,s,function(e,o,s){console.log(e,o,s),0==e?this.dodeposit(t.data.order_id,s.txid,0):(this.loading=!1,this.$message({message:"tx_cpu_usage_exceeded"==o?this.$t("message."+o):o,type:"error",center:!0}))}.bind(o))}else o.loading=!1,o.$message({message:o.$t("message."+t.msg),type:"error",center:!0})})},dodeposit:function(e,o,t){var s=this,i={type:"eos",order_id:e,txid:o};a.a.deposit(i).then(function(n){console.log("deposit",i,n),0==n.code?0==n.data.status?(s.loading=!1,s.$message({message:s.$t("message.deposit_success"),type:"success",center:!0}),s.depositForm.order_id="",s.depositForm.amount="",s.getBalances()):t<10?setTimeout(function(){this.dodeposit(e,o,++t)}.bind(s),1e3):(s.$message({message:s.$t("message.eos_waiting"),type:"error",center:!0}),s.loading=!1):(s.$message({message:s.$t("message."+n.msg),type:"error",center:!0}),s.loading=!1)})},getBalances:function(){var e=this;a.a.balances().then(function(o){if(0==o.code){for(var t in o.data.coins)e.balances[t]=o.data.coins[t].balances.eos?o.data.coins[t].balances.eos:"0.00";console.log(e.cur_coin_code);var s=e.cur_coin_code.toLowerCase();console.log(e.balances,s),e.cur_coin_amount=Number(e.balances[s]).toFixed(4)}})}}),s),d={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},[t("div",{staticClass:"eosdeposit"},[t("el-form",{ref:"depositForm",attrs:{model:e.depositForm,"label-width":"60px",rules:e.depositRules}},[t("el-form-item",{attrs:{label:this.$t("assetScene.amount"),prop:"amount"}},[t("div",[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:this.$t("assetScene.depositamount")},model:{value:e.depositForm.amount,callback:function(o){e.$set(e.depositForm,"amount",o)},expression:"depositForm.amount"}},[t("el-select",{staticStyle:{width:"120px"},attrs:{slot:"append","popper-class":"input-with-select-coin",placeholder:"请选择"},slot:"append",model:{value:e.depositForm.coin_code,callback:function(o){e.$set(e.depositForm,"coin_code",o)},expression:"depositForm.coin_code"}},[t("el-option",{attrs:{label:"EOS",value:"EOS"}}),e._v(" "),t("el-option",{attrs:{label:"ONES",value:"ONES"}})],1)],1)],1)]),e._v(" "),t("el-form-item",{attrs:{"label-width":"0px",align:"center"}},[t("el-button",{staticStyle:{width:"50%"},attrs:{type:"primary",loading:e.loading},on:{click:e.deposit}},[e._v(e._s(this.$t("assetScene.deposit")))])],1)],1),e._v(" "),t("div",{staticClass:"current"},[e._v("\n      "+e._s(this.$t("assetScene.AccountBalance"))+"\n      "),t("span",[e._v(e._s(e.cur_coin_amount)+" "+e._s(e.cur_coin_code))])])],1)])},staticRenderFns:[]};var l=t("VU/8")(c,d,!1,function(e){t("fKMx")},"data-v-5c5ea08d",null);o.default=l.exports},fKMx:function(e,o){}});
//# sourceMappingURL=2.828b100211a51db142c6.js.map
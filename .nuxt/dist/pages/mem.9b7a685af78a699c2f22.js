webpackJsonp([29],{OeHZ:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mem-area"},[e("div",{staticClass:"mem-banner"},[e("div",{staticClass:"container"}),e("nuxt-link",{staticClass:"tx-link",attrs:{to:"/mem"}},[e("img",{staticClass:"tx",attrs:{src:t.cdn(t.mem.avatar,"mem")}})]),e("h4",[t._v(t._s(t.mem.nc))]),e("div",{staticClass:"info"},[e("span",{attrs:{title:"坐标"}},[e("icon",{attrs:{name:"location"}},[t._v(t._s(t.mem.mem_info.location||"坐标"))])],1),e("span",{attrs:{title:"公司"}},[e("icon",{attrs:{name:"company"}},[t._v(t._s(t.mem.mem_info.company||"公司"))])],1),t.isExsit(t.mem.mem_info.blog)?e("a",{attrs:{href:t.mem.mem_info.blog,target:"_blank"}},[e("icon",{attrs:{name:"home"}},[t._v("主页")])],1):t._e(),t.isExsit(t.mem.mem_info.weibo_url)?e("a",{attrs:{href:"http://weibo.com/"+t.mem.mem_info.weibo_url,target:"_blank"}},[e("icon",{attrs:{name:"weibo"}})],1):t._e(),t.isExsit(t.mem.mem_info.twitter)?e("a",{attrs:{href:"https://twitter.com/"+t.mem.mem_info.twitter,target:"_blank"}},[e("icon",{attrs:{name:"twitter"}})],1):t._e(),t.isExsit(t.mem.mem_info.github)?e("a",{attrs:{href:"https://github.com/"+t.mem.mem_info.github,target:"_blank"}},[e("icon",{attrs:{name:"github"}})],1):t._e()])],1),e("div",{staticClass:"container conarea"},[e("div",{staticClass:"mem-menus"},[e("div",{staticClass:"left"},[e("div",{staticClass:"dropdown-outer"},[e("span",{staticClass:"title"},[t._v(t._s(t.getPageName()))]),e("icon",{attrs:{name:"arrow-up",rotate:"90"}}),e("div",{staticClass:"dropdown"},[e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id}},[t._v(t._s(t.who)+"在用")]),e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id+"/marks/repos"}},[t._v(t._s(t.who)+"收藏的")]),e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id+"/pubs/comments"}},[t._v(t._s(t.who)+"发布的")])],1)],1),e("div",{staticClass:"seconds"},[""===t.routeKey?e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id}},[t._v("前端库")]):t._e(),"marks"===t.routeKey?e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id+"/marks/repos"}},[t._v("前端库")]):t._e(),"pubs"===t.routeKey?[e("nuxt-link",{attrs:{to:"/mem/"+t.mem.id+"/pubs/comments"}},[t._v("评论")])]:t._e()],2)]),e("div",{staticClass:"right"})]),e("div",{staticClass:"mem-body"},[e("nuxt-child")],1)])])},i=[],o={render:n,staticRenderFns:i};a.a=o},Tcld:function(t,a,e){a=t.exports=e("BkJT")(!1),a.push([t.i,".mem-menus[data-v-f473daf4]{font-size:14px;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px;background-color:#e8ece6}.mem-menus .left[data-v-f473daf4]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mem-menus .right[data-v-f473daf4]{font-size:13px}.mem-menus .right a[data-v-f473daf4]{margin-right:0;margin-left:20px}.mem-menus a[data-v-f473daf4]{padding:15px 10px;display:inline-block}.mem-menus .seconds[data-v-f473daf4]{display:inline-block}.mem-menus .seconds a.nuxt-link-active[data-v-f473daf4]{color:#da552f}.mem-menus .dropdown[data-v-f473daf4]{position:absolute;z-index:10;background-color:#fff;border:1px solid #eee;border-top:1px solid #f7f8fa;text-align:center;border-bottom:0;top:51px;left:10px;display:none}.mem-menus .dropdown a[data-v-f473daf4]{display:block;border-bottom:1px solid #eee;padding:13px 30px;width:100%}.mem-menus .dropdown a.router-link-exact-active[data-v-f473daf4]{color:#da552f}.mem-menus .dropdown-outer[data-v-f473daf4]{display:inline-block}.mem-menus .dropdown-outer:hover .dropdown[data-v-f473daf4]{display:block}.mem-menus .dropdown-outer .title[data-v-f473daf4]{padding:15px;display:inline-block}.mem-banner[data-v-f473daf4]{text-align:center;padding:50px;background:#f7f8fa;margin-bottom:20px;padding-bottom:150px}.mem-banner .tx-link[data-v-f473daf4]{display:inline-block;border-radius:100%;background-color:hsla(0,0%,100%,.25);padding:10px;height:120px}.mem-banner .tx[data-v-f473daf4]{width:100px;height:100px;border-radius:100%;margin-bottom:10px;padding:10px;background:hsla(0,0%,100%,.39)}.mem-banner .info[data-v-f473daf4]{line-height:20px;margin-top:20px}.mem-banner .info>a[data-v-f473daf4],.mem-banner .info>span[data-v-f473daf4]{display:inline-block;padding:0 10px;color:#9e9e9e}.mem-banner .info svg[data-v-f473daf4]{float:left;margin-right:3px}.mem-area[data-v-f473daf4]{background-color:rgba(247,248,250,.4);padding-bottom:100px}.conarea[data-v-f473daf4]{max-width:800px;background-color:#fff;margin-top:-72px;padding:0;padding-bottom:50px}.conarea .mem-body[data-v-f473daf4]{padding:20px}.mem-navs[data-v-f473daf4]{text-align:right;display:block;border-left:0;border-right:0;padding:5px}.mem-navs a[data-v-f473daf4]{padding:0 20px;font-weight:700}",""])},eFhX:function(t,a,e){"use strict";var n=e("lC5x"),i=e.n(n),o=e("J0Oq"),s=e.n(o),m=e("YFWx");a.a={asyncData:function(){function t(t){return a.apply(this,arguments)}var a=s()(i.a.mark(function t(a){var e,n=(a.req,a.params);a.query;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)().get("mem/"+n.id);case 2:return e=t.sent,t.abrupt("return",{mem:e.data});case 4:case"end":return t.stop()}},t,this)}));return t}(),watch:{"$router.params.id":function(t){var a=this;Object(m.a)().get("mem/"+t).then(function(t){a.mem=t.data})}},computed:{session:function(){return this.$store.state.session||{}},who:function(){return this.session.id===parseInt(this.$route.params.id)?"我":"TA"},routeKey:function(){return this.$route.name.split("-")[2]||""}},methods:{isExsit:function(t){return t&&""!==t.trim()},getPageName:function(){return{"":this.who+"在用",marks:this.who+"收藏的",pubs:this.who+"发布的"}[this.routeKey]}},created:function(){}}},kTlN:function(t,a,e){"use strict";function n(t){e("zkP3")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("eFhX"),o=e("OeHZ"),s=e("46Yf"),m=n,r=s(i.a,o.a,!1,m,"data-v-f473daf4",null);a.default=r.exports},zkP3:function(t,a,e){var n=e("Tcld");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("3bc834a8",n,!0)}});
//# sourceMappingURL=mem.9b7a685af78a699c2f22.js.map
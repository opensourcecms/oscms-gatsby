(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("wG+1"),i=t("Knq1"),c=t("Wbzz"),u=t("OQv8"),m=function(e){var n=e.supplyItem;return l.a.createElement("div",{className:"post-summary",key:n.id},l.a.createElement("h2",null,l.a.createElement(c.Link,{to:Object(u.linkResolver)(n._meta)},r.RichText.asText(n.item_title))),l.a.createElement("div",null,r.RichText.asText(n.the_problem)))},s=function(e){var n=e.supplyItems;return n?l.a.createElement("div",{className:"blog-posts container"},n.map((function(e){return l.a.createElement(m,{supplyItem:e.node,key:e.node._meta.id})}))):null};t.d(n,"query",(function(){return o}));var o={id:"3593256982",source:"\n{\n  prismic{\n    allMedical_supply_item_detaileds{\n      edges{\n        node{\n          _meta{\n            id\n            type\n          }\n          item_title\n          item_image\n          the_problem\n          current_us_resources\n          worst_case_expectation\n          engineering_requirements\n          assembly_fabrication_requirements\n          projects_resources\n          reviewed_designs_item {\n            project_name\n            date_reviewed\n            reviewed_by\n            note\n          }\n          not_recommended_design_item {\n            project_name\n            reviewed_by\n            reason\n          }\n        }\n      }\n    }\n  }\n}\n",toString:function(){return this.id}},d=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Summary of COVID19 Situation & Supply Needs"),l.a.createElement("h3",null,"The Problem"),l.a.createElement("h3",null,"Treating Covid 1"),l.a.createElement("h3",null,"A Note About Safety and Liability"),l.a.createElement("h3",null,"Good Samaritan Laws in the United States")),l.a.createElement("div",null,l.a.createElement("h2",null,"Feedback")),l.a.createElement("div",null,l.a.createElement("h2",null,"Design, Manufacturing, & Engineering Projects"),l.a.createElement("h3",null,"Supplies"),l.a.createElement("h4",null,"PPE"),l.a.createElement("h4",null,"Medical Supplies"),l.a.createElement("h3",null,"Devices")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"FAQ"),l.a.createElement("h4",null,"[TODO] There's nothing here!"))))};n.default=function(e){var n=e.data.prismic.allMedical_supply_item_detaileds.edges;return l.a.createElement(i.a,null,l.a.createElement(d,null),l.a.createElement(s,{supplyItems:n}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a045e898305a5bac42ea.js.map
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{50:function(e,t,c){e.exports={card:"Card_card__1uyr1"}},51:function(e,t,c){e.exports={form:"QuoteForm_form__1mzCm",loading:"QuoteForm_loading__ORTOE",control:"QuoteForm_control__OZDdU",actions:"QuoteForm_actions__1F-CO"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(37),a=c(50),s=c.n(a),u=c(1),i=function(e){return Object(u.jsx)("div",{className:s.a.card,children:e.children})},l=c(15),d=c(51),j=c.n(d),b=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),a=Object(n.useState)(!1),s=Object(r.a)(a,2),d=s[0],b=s[1];return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(o.a,{when:d,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){b(!0)},className:j.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value,r=c.current.value;e.onAddQuote({author:o,text:r})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:t,required:!0})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:c,required:!0})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){b(!1)},className:"btn",children:"Add Quote"})})]})})]})},O=c(35),m=c(36);t.default=function(){var e=Object(o.h)(),t=Object(O.a)(m.b),c=t.sendRequest,r=t.status;t.data,t.error;Object(n.useEffect)((function(){"completed"===r&&e.push("/quotes")}),[r,e]);return Object(u.jsx)(b,{isLoading:"pending"===r,onAddQuote:function(e){console.log(e),c(e)}})}}}]);
//# sourceMappingURL=6.0e0bf464.chunk.js.map
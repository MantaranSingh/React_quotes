(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={comments:"Comments_comments__18X6Q"}},46:function(e,t,c){e.exports={form:"NewCommentForm_form__35TaA",loading:"NewCommentForm_loading__2BI1S",control:"NewCommentForm_control__3qC8y",actions:"NewCommentForm_actions__2IAcq"}},47:function(e,t,c){e.exports={item:"CommentItem_item__1vLhB"}},48:function(e,t,c){e.exports={comments:"CommentsList_comments__2l-nf"}},49:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__1vekE"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(37),r=c(15),m=c(45),j=c.n(m),i=c(35),d=c(36),l=c(46),u=c.n(l),b=c(1),x=function(e){var t=Object(n.useRef)(),c=Object(i.a)(d.a),o=c.sendRequest,a=c.status,m=(c.data,c.error),j=(Object(s.j)(),e.onAddedComment);Object(n.useEffect)((function(){"completed"!==a||m||j()}),[a,m,j]);var l=function(c){c.preventDefault();var n=t.current.value;o({quoteId:e.quoteId,commentData:{text:n}})};return Object(b.jsxs)("form",{className:u.a.form,onSubmit:l,children:["pending"===a&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(r.a,{})}),Object(b.jsxs)("div",{className:u.a.control,onSubmit:l,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:u.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(47),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(48),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],m=Object(s.j)(),l=Object(i.a)(d.c),u=l.sendRequest,O=l.status,h=l.data,f=(l.error,m.quoteId);Object(n.useEffect)((function(){u(f)}),[u,f]);var p,_=Object(n.useCallback)((function(){u(f)}),[u,f]);return"pending"===O&&(p=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(r.a,{})})),"completed"===O&&h&&h.length>0&&(p=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(p=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),console.log(h),Object(b.jsxs)("section",{className:j.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:f,onAddedComment:_}),p]})},C=c(49),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.j)(),t=Object(s.k)(),c=Object(i.a)(d.e,!0),a=c.sendRequest,m=c.status,j=c.data,l=c.error,u=e.quoteId;return Object(n.useEffect)((function(){a(u)}),[a,u]),"pending"===m?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(r.a,{})}):l?Object(b.jsx)("div",{className:"centered",children:l}):j.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(q,{text:j.text,author:j.author}),Object(b.jsx)(s.c,{path:t.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"load comments"})})}),Object(b.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.7f478817.chunk.js.map
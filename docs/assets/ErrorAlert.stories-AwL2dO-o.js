import{j as oe}from"./jsx-runtime-6h_sYW8U.js";import{r as s}from"./index-4g5l5LRQ.js";import{C as te,a as re,I as ne,b as se,E as ae}from"./InfoCircleFilled-t_BkGSnW.js";import{c as I}from"./AntdIcon-6SB6FRee.js";import{g as ie,r as ce,u as L,C as le,a as de,b as me,_ as pe,c as ue,d as ge,e as fe}from"./reactNode-MDuQh6SD.js";import{p as ye}from"./pickAttrs-rokVxGsk.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./Serializer-oVgSGsb3.js";import"./index-im-bjvvC.js";import"./assertThisInitialized-6KvxGtnC.js";const S=(e,o,r,t,n)=>({background:e,border:`${L(t.lineWidth)} ${t.lineType} ${o}`,[`${n}-icon`]:{color:r}}),he=e=>{const{componentCls:o,motionDurationSlow:r,marginXS:t,marginSM:n,fontSize:a,fontSizeLG:d,lineHeight:c,borderRadiusLG:m,motionEaseInOutCirc:l,withDescriptionIconSize:p,colorText:u,colorTextHeading:g,withDescriptionPadding:f,defaultPadding:h}=e;return{[o]:Object.assign(Object.assign({},ce(e)),{position:"relative",display:"flex",alignItems:"center",padding:h,wordWrap:"break-word",borderRadius:m,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:a,lineHeight:c},"&-message":{color:g},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${r} ${l}, opacity ${r} ${l},
        padding-top ${r} ${l}, padding-bottom ${r} ${l},
        margin-bottom ${r} ${l}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:f,[`${o}-icon`]:{marginInlineEnd:n,fontSize:p,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:t,color:g,fontSize:d},[`${o}-description`]:{display:"block",color:u}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Ce=e=>{const{componentCls:o,colorSuccess:r,colorSuccessBorder:t,colorSuccessBg:n,colorWarning:a,colorWarningBorder:d,colorWarningBg:c,colorError:m,colorErrorBorder:l,colorErrorBg:p,colorInfo:u,colorInfoBorder:g,colorInfoBg:f}=e;return{[o]:{"&-success":S(n,t,r,e,o),"&-info":S(f,g,u,e,o),"&-warning":S(c,d,a,e,o),"&-error":Object.assign(Object.assign({},S(p,l,m,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},$e=e=>{const{componentCls:o,iconCls:r,motionDurationMid:t,marginXS:n,fontSizeIcon:a,colorIcon:d,colorIconHover:c}=e;return{[o]:{"&-action":{marginInlineStart:n},[`${o}-close-icon`]:{marginInlineStart:n,padding:0,overflow:"hidden",fontSize:a,lineHeight:L(a),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${r}-close`]:{color:d,transition:`color ${t}`,"&:hover":{color:c}}},"&-close-text":{color:d,transition:`color ${t}`,"&:hover":{color:c}}}}},be=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),Se=ie("Alert",e=>[he(e),Ce(e),$e(e)],be);var Ee=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const ve={success:re,info:ne,error:se,warning:ae},xe=e=>{const{icon:o,prefixCls:r,type:t}=e,n=ve[t]||null;return o?me(o,s.createElement("span",{className:`${r}-icon`},o),()=>({className:I(`${r}-icon`,{[o.props.className]:o.props.className})})):s.createElement(n,{className:`${r}-icon`})},Ie=e=>{const{isClosable:o,prefixCls:r,closeIcon:t,handleClose:n}=e,a=t===!0||t===void 0?s.createElement(te,null):t;return o?s.createElement("button",{type:"button",onClick:n,className:`${r}-close-icon`,tabIndex:0},a):null},we=e=>{const{description:o,prefixCls:r,message:t,banner:n,className:a,rootClassName:d,style:c,onMouseEnter:m,onMouseLeave:l,onClick:p,afterClose:u,showIcon:g,closable:f,closeText:h,closeIcon:C,action:N}=e,R=Ee(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[O,G]=s.useState(!1),X=s.useRef(null),{getPrefixCls:q,direction:V,alert:y}=s.useContext(le),i=q("alert",r),[J,K]=Se(i),Q=$=>{var b;G(!0),(b=e.onClose)===null||b===void 0||b.call(e,$)},_=s.useMemo(()=>e.type!==void 0?e.type:n?"warning":"info",[e.type,n]),U=s.useMemo(()=>h?!0:typeof f=="boolean"?f:C!==!1&&C!==null&&C!==void 0,[h,C,f]),M=n&&g===void 0?!0:g,Y=I(i,`${i}-${_}`,{[`${i}-with-description`]:!!o,[`${i}-no-icon`]:!M,[`${i}-banner`]:!!n,[`${i}-rtl`]:V==="rtl"},y==null?void 0:y.className,a,d,K),Z=ye(R,{aria:!0,data:!0});return J(s.createElement(de,{visible:!O,motionName:`${i}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:$=>({maxHeight:$.offsetHeight}),onLeaveEnd:u},$=>{let{className:b,style:ee}=$;return s.createElement("div",Object.assign({ref:X,"data-show":!O,className:I(Y,b),style:Object.assign(Object.assign(Object.assign({},y==null?void 0:y.style),c),ee),onMouseEnter:m,onMouseLeave:l,onClick:p,role:"alert"},Z),M?s.createElement(xe,{description:o,icon:e.icon,prefixCls:i,type:_}):null,s.createElement("div",{className:`${i}-content`},t?s.createElement("div",{className:`${i}-message`},t):null,o?s.createElement("div",{className:`${i}-description`},o):null),N?s.createElement("div",{className:`${i}-action`},N):null,s.createElement(Ie,{isClosable:U,prefixCls:i,closeIcon:h||C,handleClose:Q}))}))},k=we;let Ne=function(e){pe(r,e);var o=ue(r);function r(){var t;return ge(this,r),t=o.apply(this,arguments),t.state={error:void 0,info:{componentStack:""}},t}return fe(r,[{key:"componentDidCatch",value:function(n,a){this.setState({error:n,info:a})}},{key:"render",value:function(){const{message:n,description:a,children:d}=this.props,{error:c,info:m}=this.state,l=m&&m.componentStack?m.componentStack:null,p=typeof n>"u"?(c||"").toString():n,u=typeof a>"u"?l:a;return c?s.createElement(k,{type:"error",message:p,description:s.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},u)}):d}}]),r}(s.Component);const Oe=Ne,F=k;F.ErrorBoundary=Oe;const _e=F,w=e=>oe.jsx(_e,{...e,type:"error",closable:!0,showIcon:!0});try{w.displayName="ErrorAlert",w.__docgenInfo={description:"",displayName:"ErrorAlert",props:{}}}catch{}const ke={title:"Byhiras/Alerts/ErrorAlert",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{description:"Content of Alert",control:{type:"text"}}}},E={args:{message:"Error message"}},v={args:{message:"Error message with a long text that should be wrapped, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},x={args:{message:""}};var B,j,A;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    message: 'Error message'
  }
}`,...(A=(j=E.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var z,H,P;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    message: 'Error message with a long text that should be wrapped, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}`,...(P=(H=v.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var T,D,W;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: ''
  }
}`,...(W=(D=x.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Fe=["WithMessage","WithLongMessage","EmptyMessage"];export{x as EmptyMessage,v as WithLongMessage,E as WithMessage,Fe as __namedExportsOrder,ke as default};

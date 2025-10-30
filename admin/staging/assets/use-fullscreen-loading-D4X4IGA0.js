import"./index-BYdHSxkt.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                   */import{a4 as _,$ as f,z as g,N as y,E as l}from"./element-B-FiLDCl.js";import{v as E,x as w,y as h,O as n,F as c,K as u}from"./vue-Cwi6Gi-M.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-5K_zVHhu.js";const A={lock:!0,text:"Loading..."},p=(t,e={})=>{let r;return async(...a)=>{try{return r=_.service({...A,...e}),await t(...a)}finally{r.close()}}},S={code:0,data:{list:[]},message:"Request successful"};function C(t){return new Promise(e=>{setTimeout(()=>{e({...S,data:{list:t}})},1e3)})}function v(){return new Promise((t,e)=>{setTimeout(()=>{e(new Error("An error occurred"))},1e3)})}const k={class:"app-container"},L=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,b=E({__name:"use-fullscreen-loading",setup(t){const e={text:"About to encounter an error...",background:"#F56C6C20",svg:L,svgViewBox:"-10, -10, 50, 50"};async function r(){const o=await p(C)([1,2,3]);l.success(`${o.message} with parameters ${o.data.list.toString()}`)}async function a(){try{await p(v,e)()}catch(o){l.error(o.message)}}return(o,s)=>{const d=f,i=g,m=y;return h(),w("div",k,[n(d,{title:"Example Description",type:"primary",description:"Pass the function to be executed to the composable, which will automatically show fullscreen loading and hide it when execution completes","show-icon":""}),n(m,{header:"Example",shadow:"never"},{default:c(()=>[n(i,{type:"primary",onClick:r},{default:c(()=>s[0]||(s[0]=[u(" Query Success ")])),_:1,__:[0]}),n(i,{type:"danger",onClick:a},{default:c(()=>s[1]||(s[1]=[u(" Query Error ")])),_:1,__:[1]})]),_:1})])}}}),I=x(b,[["__scopeId","data-v-5ec45c79"]]);export{I as default};

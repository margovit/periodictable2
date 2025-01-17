(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function l(e){sessionStorage.setItem("accessToken",e),console.log(e)}function u(){return sessionStorage.getItem("accessToken")}function f(){return!!u()}function h(){sessionStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")}const r={baseURL:"https://ch1fa83ktl.execute-api.us-east-2.amazonaws.com/dev",Authorization:"",get(e){return fetch(`${this.baseURL}${e}`,{headers:{Authorization:this.Authorization}}).then(t=>t.json()).then(t=>({data:t}))},post(e,t){return fetch(`${this.baseURL}${e}`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:this.Authorization}}).then(o=>o.json()).then(o=>({data:o}))},put(e,t){return fetch(`${this.baseURL}${e}`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:this.Authorization}}).then(o=>o.json()).then(o=>({data:o}))}},i=e=>{r.Authorization=`Bearer ${e}`},d=()=>{r.Authorization=""};async function g(){const e="/molecules";return(await r.get(e)).data}async function p(e){const t=`/molecules/${e}`;return(await r.get(t)).data}async function m({name:e,...t}){const o=u();i(o);const a=`/molecules/${e}`;try{return(await r.put(a,t)).data}catch{return console.log("ERROR"),{}}}async function y(e){try{const t="/auth/login",o=await r.post(t,e);return i(o.data.data.accessToken),l(o.data.data.accessToken),o.data}catch(t){throw console.log(t),new Error("Error Auth!")}}async function A(){i(""),d(),h(),document.body.querySelector(".js-logout").remove()}export{A as a,g as b,p as g,f as h,y as l,m as u};
//# sourceMappingURL=api-63bf6708.js.map

import{l as n}from"./assets/api-a7748431.js";const a={form:document.querySelector(".js-form"),body:document.body};a.form.addEventListener("submit",async t=>{t.preventDefault();const o=new FormData(t.target),e=Object.fromEntries(o.entries());t.target.reset(),await n(e),window.location.pathname="/"});
//# sourceMappingURL=commonHelpers.js.map

import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n=document.querySelector("input");n.classList.add("input-form-email");const m=document.querySelector("textarea");m.classList.add("textarea-form-message");const l=document.querySelector("button");l.classList.add("btn-form");const r=document.querySelector(".feedback-form");let t={email:"",message:""};const c=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;t=e;for(const o in e){const a=r.elements[o];a&&(a.value=e[o])}}catch(e){console.log(e)}};c();const i=e=>{const o=e.target,a=o.value,s=o.name;t[s]=a.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))},u=e=>{if(e.preventDefault(),t.email===""||t.message==="")return alert("Fill please all fields");console.log(t),localStorage.removeItem("feedback-form-state"),t.email="",t.message="",r.reset()};r.addEventListener("input",i);r.addEventListener("submit",u);
//# sourceMappingURL=2-form.js.map

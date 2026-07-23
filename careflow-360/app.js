'use strict';
const dataScript=document.createElement('script');
dataScript.src='data.js';
dataScript.onload=()=>{const mainScript=document.createElement('script');mainScript.src='main.js';document.body.appendChild(mainScript);};
dataScript.onerror=()=>console.error('Unable to load CareFlow data.');
document.body.appendChild(dataScript);

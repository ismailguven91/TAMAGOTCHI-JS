function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequireb871;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequireb871=i),i.register("g28y4",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("g28y4").register(JSON.parse('{"1bd3D":"index.96ff5b11.js","aVFKc":"dog.600daa96.png","jqhC7":"cow.8eb40fa4.png","aPdLk":"horse.0eec1e13.png"}'));class o{#e=5;#t=5;#n;#r;constructor(e,t){this.#n=e,this.#r=t}getName(){return this.#n}getType(){return this.#r}getHungerLevel(){return this.#e}getHappinessLevel(){return this.#t}hungerDrain(){const e=setInterval((()=>{if(this.#e<10)this.#e+=1,document.querySelector("#pHunger").innerText=this.#e;else if(10==this.#e){clearInterval(e);confirm("Tamagotchi has died");location.reload(!0)}}),3e3)}happinessDrain(){const e=setInterval((()=>{if(this.#t>0)this.#t-=1,document.querySelector("#pHappy").innerText=this.#t;else if(0==this.#t){clearInterval(e);confirm("Tamagotchi has died");location.reload(!0)}}),3e3)}retartGame(){0!=this.#t&&10!=this.#e||location.reload()}feed(){this.#e-=1,console.log(this.feed)}play(){this.#t+=1}isTamaDead(){return 0==this.#t||10==this.#e}}document.querySelector("#Submit").addEventListener("click",(function(e){e.preventDefault();let t=document.querySelector("#TamaName").value,n=document.querySelector("#YourName").value,r=document.querySelector("#Type").value,i=new o(t);if(document.querySelector("#pYourName").innerText=n,document.querySelector("#pTamaName").innerText=t,document.querySelector("#pType").innerText=r,document.querySelector("#pHunger").innerText=i.getHungerLevel(),document.querySelector("#pHappy").innerText=i.getHappinessLevel(),i.hungerDrain(),i.happinessDrain(),document.querySelector("#feed").addEventListener("click",(function(){i.feed(),document.querySelector("#pHunger").innerText=i.getHungerLevel()})),document.querySelector("#play").addEventListener("click",(function(){i.play(),document.querySelector("#pHappy").innerText=i.getHappinessLevel()})),i.isTamaDead(),i.retartGame(),"Dog"===r){const e=document.createElement("img");e.id="bild",document.body.append(e);const t=new URL(a);e.src=t.href,e.width=300,e.style.marginLeft="700px"}else if("Cow"===r){const e=document.createElement("img");e.id="bild",document.body.append(e);const t=new URL(l);e.src=t.href,e.width=300,e.style.marginLeft="700px"}else if("Horse"===r){const e=document.createElement("img");e.id="bild",document.body.append(e);const t=new URL(s);e.src=t.href,e.width=300,e.style.marginLeft="700px"}}));var a;a=new URL(i("g28y4").resolve("aVFKc"),import.meta.url).toString();var l;l=new URL(i("g28y4").resolve("jqhC7"),import.meta.url).toString();var s;s=new URL(i("g28y4").resolve("aPdLk"),import.meta.url).toString();
//# sourceMappingURL=index.96ff5b11.js.map

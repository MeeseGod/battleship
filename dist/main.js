(()=>{var t={548:t=>{class e{constructor(t,e){this.type=t,this.length=e,this.hitpoints=e,this.locations=[...Array(e).keys()],this.hit=function(t){return null!=this.locations[t]&&"Hit"!=this.locations[t]&&(this.locations[t]="Hit",this.hitpoints=this.hitpoints-1,this.isSunk(),this.locations[t])},this.isSunk=function(t){return 0==t}}}t.exports=function(t,r,i){return new e(t,r,i)}},247:t=>{t.exports=function(){for(let t=0;t<64;t++){let e=document.createElement("div");e.setAttribute("id",`player1GridSquare${t}`),document.getElementById("player1Gameboard").appendChild(e)}for(let t=0;t<64;t++){let e=document.createElement("div");e.setAttribute("id",`player2GridSquare${t}`),document.getElementById("player2Gameboard").appendChild(e)}}}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(548),e=r.n(t),i=r(247),n=r.n(i);e()(),n()()})()})();
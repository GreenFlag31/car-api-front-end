"use strict";(self.webpackChunkcar_api_doc=self.webpackChunkcar_api_doc||[]).push([[592],{970:(u,_,o)=>{o.d(_,{c:()=>r});var n=o(8256);let r=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-footer"]],decls:14,vars:0,consts:[[1,"footer-container"],[1,"date"],[1,"fa-solid","fa-copyright"],[1,"contact"],["href","https://manuclaeys.com/portfolio","target","_blank",1,"portfolio"],["href","https://www.linkedin.com/in/manu-claeys-3195a87b/","target","_blank",1,"linkedin"],[1,"fa-brands","fa-linkedin"],[1,"made"]],template:function(i,g){1&i&&(n.TgZ(0,"footer")(1,"div",0)(2,"div",1),n._UZ(3,"i",2),n.TgZ(4,"p"),n._uU(5,"May 2023"),n.qZA()(),n.TgZ(6,"div",3)(7,"a",4),n._uU(8,"manuclaeys.com"),n.qZA(),n.TgZ(9,"a",5),n._UZ(10,"i",6),n.qZA()(),n.TgZ(11,"div",7)(12,"p"),n._uU(13,"Front-End fired with Angular, Back-End with NodeJS and MongoDB"),n.qZA()()()())},styles:[".footer-container[_ngcontent-%COMP%]{display:grid;grid-template-rows:min-content auto min-content;min-height:150px;background:#000;padding:.625em;color:#fff}.date[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:.5em}.date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.9em}.footer-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em}.made[_ngcontent-%COMP%]{align-self:flex-end;margin:0 auto}.made[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.contact[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1.5em;align-self:flex-end;margin-bottom:.4em}.contact[_ngcontent-%COMP%]   a.portfolio[_ngcontent-%COMP%]{font-size:1.1em;color:var(--basis-red)}.contact[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%]{font-size:1.4em;color:#fff}"]}),a})()},3719:(u,_,o)=>{o.d(_,{J:()=>m});var n=o(8256),r=o(7551),a=o(6895),c=o(1196);const i=function(t){return[t]};function g(t,s){if(1&t&&(n.TgZ(0,"div",3)(1,"div",4)(2,"p"),n._UZ(3,"i",5),n._uU(4),n.qZA()()()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("routerLink",n.VKq(2,i,e.navigation.previous.link)),n.xp6(3),n.hij(" ",e.navigation.previous.name," ")}}function d(t,s){if(1&t&&(n.TgZ(0,"div",4)(1,"p"),n._uU(2),n._UZ(3,"i",9),n.qZA()()),2&t){const e=n.oxw(2);n.Q6J("routerLink",n.VKq(2,i,e.navigation.next.link)),n.xp6(2),n.hij(" ",e.navigation.next.name," ")}}function p(t,s){1&t&&(n.TgZ(0,"div",10)(1,"p"),n._uU(2," Dashboard "),n._UZ(3,"i",9),n.qZA()())}function f(t,s){if(1&t&&(n.TgZ(0,"div",6),n.YNc(1,d,4,4,"div",7),n.YNc(2,p,4,0,"div",8),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",!e.isAuthenticated),n.xp6(1),n.Q6J("ngIf",e.isAuthenticated)}}let m=(()=>{class t{constructor(e){this.authService=e,this.isAuthenticated=!1}ngOnInit(){this.userSubscription=this.authService.user.subscribe(e=>{this.isAuthenticated=null!==e})}ngOnDestroy(){this.userSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-navigation"]],inputs:{navigation:"navigation"},decls:3,vars:4,consts:[[1,"navigation-container"],["class","previous",4,"ngIf"],["class","next",4,"ngIf"],[1,"previous"],[1,"text-container",3,"routerLink"],[1,"fa-solid","fa-arrow-left-long"],[1,"next"],["class","text-container",3,"routerLink",4,"ngIf"],["class","text-container","routerLink","/dashboard",4,"ngIf"],[1,"fa-solid","fa-arrow-right-long"],["routerLink","/dashboard",1,"text-container"]],template:function(e,l){1&e&&(n.TgZ(0,"div",0),n.YNc(1,g,5,4,"div",1),n.YNc(2,f,3,2,"div",2),n.qZA()),2&e&&(n.Udp("justify-content",l.navigation.previous?"flex-start":"flex-end"),n.xp6(1),n.Q6J("ngIf",l.navigation.previous),n.xp6(1),n.Q6J("ngIf",l.navigation.next))},dependencies:[a.O5,c.rH],styles:[".navigation-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2em;margin:2em 0}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{width:100%}.text-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.5em;border:2px solid var(--basis-red);border-radius:.6em;font-weight:700;padding:.625em;cursor:pointer}.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{transition:transform .3s;transform:translate(0)}.previous[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{transform:translate(-10%)}.next[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{transform:translate(5%)}.previous[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.3em}.next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:.3em}@media (min-width: 700px){.navigation-container[_ngcontent-%COMP%]{flex-direction:row}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{width:50%}}"]}),t})()},4109:(u,_,o)=>{o.d(_,{m:()=>c});var n=o(1196),r=o(6895),a=o(8256);let c=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[r.ez,n.Bz,r.ez]}),i})()}}]);
"use strict";(self.webpackChunkcar_api_doc=self.webpackChunkcar_api_doc||[]).push([[905],{1905:(w,c,o)=>{o.r(c),o.d(c,{DashboardModule:()=>P});var r=o(6895),g=o(1196),e=o(8256),d=o(7551),l=o(970);function u(n,a){if(1&n&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.keyAvailabilityMessage," ")}}function p(n,a){if(1&n&&(e.TgZ(0,"div",30)(1,"p",19),e._uU(2,"Your secret api token:"),e.qZA(),e.TgZ(3,"div",20)(4,"p"),e._uU(5),e.qZA()(),e.YNc(6,u,2,1,"p",31),e.qZA()),2&n){const t=e.oxw().ngIf,i=e.oxw();e.xp6(5),e.Oqu(t.api_key||i.testAccountApiKey.api_key),e.xp6(1),e.Q6J("ngIf",!t.testAccount)}}function h(n,a){1&n&&e._UZ(0,"i",38)}function _(n,a){if(1&n&&(e.TgZ(0,"div",39)(1,"div",20)(2,"p"),e._uU(3),e.qZA()(),e.TgZ(4,"p",32),e._uU(5),e.TgZ(6,"span",17),e._uU(7," Previous key has been disabled."),e.qZA()()()),2&n){const t=e.oxw(2).ngIf,i=e.oxw();e.xp6(3),e.Oqu(t.new_api_key),e.xp6(2),e.hij(" ",i.keyAvailabilityMessage,"")}}const f=function(n){return{new:n}};function m(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",33)(1,"div",34)(2,"p"),e._uU(3,"Generate new key:"),e.qZA(),e.TgZ(4,"div",35),e.YNc(5,h,1,0,"i",36),e.TgZ(6,"button",27),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.generateNewApiKey())}),e._uU(7," Generate "),e.qZA()()(),e.YNc(8,_,8,2,"div",37),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(4,f,t.newKeyGenerated)),e.xp6(5),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("disabled",t.isLoading),e.xp6(2),e.Q6J("ngIf",t.newKeyGenerated&&!t.isLoading)}}function b(n,a){if(1&n&&(e.TgZ(0,"p")(1,"span",40),e._uU(2),e.qZA(),e._uU(3,"/200 "),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(2),e.Oqu(t.quota)}}function y(n,a){1&n&&(e.TgZ(0,"div",41),e._UZ(1,"i",38),e.qZA())}const C=function(n,a){return{"space-top":n,bottom:a}};function v(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",14)(1,"h2"),e._uU(2,"Dashboard"),e.qZA(),e.TgZ(3,"div",15)(4,"div",16)(5,"span",17),e._uU(6," Your client ID and api key should be sent along each request in POST. "),e.qZA(),e._uU(7," See available endpoints in the documentation. "),e.qZA(),e.TgZ(8,"div",18)(9,"p",19),e._uU(10,"Your client ID:"),e.qZA(),e.TgZ(11,"div",20)(12,"p"),e._uU(13),e.qZA()()(),e.YNc(14,p,7,2,"div",21),e.YNc(15,m,9,6,"div",22),e.TgZ(16,"div",23)(17,"div",24)(18,"p"),e._uU(19,"Used queries:"),e.qZA(),e.TgZ(20,"span",25),e._uU(21),e.qZA()(),e.TgZ(22,"div",26)(23,"button",27),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.getCurrentQuota())}),e._uU(24," Refresh "),e.qZA(),e.YNc(25,b,4,1,"p",28),e.YNc(26,y,2,0,"div",29),e.qZA()()()()}if(2&n){const t=a.ngIf,i=e.oxw();e.xp6(13),e.Oqu(t.clientID),e.xp6(1),e.Q6J("ngIf",t.testAccount||t.api_key),e.xp6(1),e.Q6J("ngIf",!t.testAccount&&!t.api_key),e.xp6(1),e.Q6J("ngClass",e.WLB(8,C,i.newKeyGenerated,t.testAccount)),e.xp6(5),e.hij("Until ",t.dateUntil,""),e.xp6(2),e.Q6J("disabled",i.refreshIsLoading),e.xp6(2),e.Q6J("ngIf",!i.refreshIsLoading),e.xp6(1),e.Q6J("ngIf",i.refreshIsLoading)}}const M=[{path:"",component:(()=>{class n{constructor(t,i){this.authService=t,this.ref=i,this.testAccountApiKey={api_key:"0eb71b40-6205-439b-a78b-da3c1fb9a9b7"},this.keyAvailabilityMessage="Please store this key in a safe place because as soon as you navigate away from this page, I will not be able to retrieve this key. API keys are hashed in database and irretrievable.",this.isLoading=!1,this.newKeyGenerated=!1,this.refreshIsLoading=!1,this.user$=this.authService.user}ngOnInit(){this.authService.comingFromLoginNoReloadQuota||this.getCurrentQuota(),this.authService.comingFromLoginNoReloadQuota=!1}getCurrentQuota(){this.getCurQuotaOrGenNewKey(this.authService.endPoints.quota)}generateNewApiKey(){this.getCurQuotaOrGenNewKey(this.authService.endPoints.newApiKey)}getCurQuotaOrGenNewKey(t){t.includes("quota")?this.refreshIsLoading=!0:this.isLoading=!0,this.authService.getCurrentQuotaOrGenNewKey(t)?.subscribe({next:()=>{this.isLoading&&(this.newKeyGenerated=!0),this.refreshIsLoading=!1,this.isLoading=!1,this.ref.markForCheck(),this.authService.refreshJwtToken()}})}ngOnDestroy(){let t=JSON.parse(localStorage.getItem("user"));!t?.api_key&&!t?.new_api_key||(delete t.api_key,delete t.new_api_key,this.authService.user.next(t),localStorage.setItem("user",JSON.stringify(t)))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.e),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],decls:16,vars:3,consts:[[1,"dashboard-container"],[1,"dashboard-intro"],[1,"dashboard-user-container"],["class","dashboard-user",4,"ngIf"],[1,"img-gallery"],["src","../../assets/pictures/1964-ford-mustang.jpg","alt","Ford Mustand 1964","title","Ford Mustand 1964"],["src","../../assets/pictures/Ferrari Dino 1972.jpg","alt","Ferrari Dino 1972","title","Ferrari Dino 1972"],["src","../../assets/pictures/Porsche 911 1973.jpg","alt","Porsche 911 1973","title","Porsche 911 1973"],["src","../../assets/pictures/Alfa Romeo 155 1992.jpg","alt","Alfa Romeo 155 1992","title","Alfa Romeo 155 1992"],["src","../../assets/pictures/Shelby cobra 1965.jpg","alt","Shelby cobra 1965","title","Shelby cobra 1965"],["src","../../assets/pictures/Ferrari 250 GTO 1962.jpg","alt","Ferrari 250 1962","title","Ferrari 250 1962"],["src","../../assets/pictures/Maserati GranTurismo 2007.jpg","alt","Maserati GranTurismo 2007","title","Maserati GranTurismo 2007"],["src","../../assets/pictures/Toyota Supra 1998.jpg","alt","Toyota Supra 1998","title","Toyota Supra 1998"],["src","../../assets/pictures/Bmw 2002 Turbo 1973.jpg","alt","Bmw 2002 Turbo 1973","title","Bmw 2002 Turbo 1973"],[1,"dashboard-user"],[1,"dashboard-content"],[1,"info-request"],[1,"emphasize"],[1,"client-ID"],[1,"title-small"],[1,"key-container"],["class","secret-api-key",4,"ngIf"],["class","new-api-key",3,"ngClass",4,"ngIf"],[1,"quota",3,"ngClass"],[1,"date-container"],[1,"until"],[1,"quota-refresh-container"],[3,"disabled","click"],[4,"ngIf"],["class","loading-refresh-container",4,"ngIf"],[1,"secret-api-key"],["class","availability",4,"ngIf"],[1,"availability"],[1,"new-api-key",3,"ngClass"],[1,"generate-container"],[1,"generate-btn-container"],["class","fas fa-circle-notch fa-spin",4,"ngIf"],["class","new-key-generated",4,"ngIf"],[1,"fas","fa-circle-notch","fa-spin"],[1,"new-key-generated"],[1,"quota-number"],[1,"loading-refresh-container"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,v,27,11,"div",3),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"div",4),e._UZ(6,"img",5)(7,"img",6)(8,"img",7)(9,"img",8)(10,"img",9)(11,"img",10)(12,"img",11)(13,"img",12)(14,"img",13),e.qZA()(),e._UZ(15,"app-footer")),2&t&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,1,i.user$)))},dependencies:[r.mk,r.O5,l.c,r.Ov],styles:[".dashboard-intro[_ngcontent-%COMP%]{position:relative;background:url(dashboard.29a5fe3371a74f2d.jpg);background-position:50% 50%;background-size:cover;background-repeat:no-repeat;height:50vh}.dashboard-user-container[_ngcontent-%COMP%]{position:absolute;top:75%;display:flex;justify-content:center;width:100%;padding:0 .625em}.dashboard-user[_ngcontent-%COMP%]{max-width:800px;padding:1em;border-radius:.5em;background:rgb(255 255 255 / 92%);box-shadow:0 2px 6px #636363d4}.dashboard-user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--basis-red);text-align:center}.img-gallery[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.img-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:250px;width:100%;object-fit:cover;flex:33%}.img-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(n + 4){display:none}.dashboard-content[_ngcontent-%COMP%]{margin-top:2em}.title-small[_ngcontent-%COMP%], .availability[_ngcontent-%COMP%]{padding:.5em 0}.availability[_ngcontent-%COMP%]{text-align:justify}.key-container[_ngcontent-%COMP%]{padding:.625em;background:#b1b1b1;border-radius:.3em;font-weight:600;color:#fff}.emphasize[_ngcontent-%COMP%]{font-weight:600}.generate-container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:.4em}.generate-btn-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2em}.quota-refresh-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .generate-btn-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.4em}.new-api-key[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .quota-refresh-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;border:none;padding:.625em;background:var(--basis-red);color:#fff;border-radius:.3em;cursor:pointer;transition:opacity .3s}.new-api-key[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .quota-refresh-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.8}.new-api-key[_ngcontent-%COMP%]{margin-top:5em}.new-api-key.new[_ngcontent-%COMP%]{margin-top:3em}.info-request[_ngcontent-%COMP%], .client-ID[_ngcontent-%COMP%], .secret-api-key[_ngcontent-%COMP%]{margin-top:2em}.info-request[_ngcontent-%COMP%]{text-align:justify}.quota-refresh-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.5em;min-height:38.4px}.quota-refresh-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .loading-refresh-container[_ngcontent-%COMP%]{min-width:100px}.loading-refresh-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.quota[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;gap:.5em;flex-wrap:wrap;margin-top:2em;min-height:38.5px}.quota.bottom[_ngcontent-%COMP%]{margin-top:5em}.quota.space-top[_ngcontent-%COMP%]{margin-top:2em}.quota[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{font-size:1.3em;font-weight:600;text-align:right}.quota-number[_ngcontent-%COMP%]{color:var(--basis-red);font-size:1.5em}.date-container[_ngcontent-%COMP%]   .until[_ngcontent-%COMP%]{color:#b1b1b1;font-size:.9em;font-weight:600}@media (min-width: 650px){.img-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(n + 4){display:block}.img-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(n + 6){display:none}}@media (min-width: 1200px){.img-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block!important}}"],changeDetection:0}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(M),g.Bz]}),n})();var x=o(4109);let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,O,x.m]}),n})()}}]);
let t={class:"xl-d"},e={class:"xl-e"};import l from"../lib/magix.js";import p from"../plugins/app.js";import a from"./ctrl.js";let s=l.toMap(p,"appId");export default l.View.extend({tmpl:(l,p,a,s,i,r,o)=>{let h,n,c,d=[],{items:_}=l;for(let l=0,i=_,m=i.length;l<m;l++){let _=i[l];c=[p(0,1,s(_.app.icon))],n=[p("div",t,c)],c=[p(0,0,s(_.app.title))],n.push(p("div",e,c)),h=[p("div",{class:"xl-c",style:"left:"+s(_.left)+"px;top:"+s(_.top)+"px","mx-click":a+"\x1e_ad({app:'"+o(r,_.app,"\x1ea."+l+".b")+"'})"},n)],d.push(...h)}return p(a,0,d)},init(){let t=getComputedStyle(document.body),e=parseInt(t.getPropertyValue("--xl-a"),10),p=parseInt(t.getPropertyValue("--xl-b"),10),i=parseInt(t.getPropertyValue("--xl-c"),10),r=parseInt(t.getPropertyValue("--xl-_"));this._Z=e,this._a_=p,this._aa=i,this._ab=r;let{params:o}=l.parseUrl(location.href);if(o.open){let t=o.open.split(",");for(let e of t){let t=s[e];t&&a._y(this,t)}}},_ac(){let t=this._Z,e=this._a_,l=this._aa,a=this._ab,s=document.body.clientHeight-a,i=l,r=l,o=[];for(let a of p){o.push({app:a,left:i,top:r});let p=r+e+l;p+e>=s&&(p=l,i+=t+l),r=p}this.set({items:o})},render(){this._ac(),this.digest()},"_ad<click>"(t){let{app:e}=t.params;a._y(this,e)},"$win<resize>"(){this.render()}});
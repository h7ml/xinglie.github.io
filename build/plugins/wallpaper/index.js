let t,e,i={class:"xl-bF"},l={class:"xl-bJ"};import s from"../../lib/magix.js";import a from"../../os/wallpaper.js";import r from"../../lib/fetch.js";s.applyStyle("xlm",".xl-bF{height:28px;line-height:28px;padding:0 26px;background:#ddd;color:#333;position:-webkit-sticky;position:sticky;top:0;z-index:2}.xl-bG{float:left;padding:0 5px;cursor:pointer}.xl-bH{background:#fff}.xl-bI{width:350px;height:200px;float:left;margin:5px;background-repeat:no-repeat;background-size:contain;cursor:pointer;background-color:hsla(0,0%,53.3%,.07);transition:all .2s}.xl-bI:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08);transform:scale(1.05)}.xl-bJ{display:table}.xl-bK{font-size:20px;text-align:center;height:40px;line-height:40px}");let o=null,h=0,p=[],d=t=>{let e=t.split("x"),i=0|e[0],l=0|e[1],s=350/i,a=200/l,r=s>a?a:s;return{width:i*r|0,height:l*r|0}};export default s.View.extend({tmpl:(s,a,r,o,h,p,d,c)=>{let n,g,x,u,b,f,m=[],{error:_,cats:k,cId:w,loading:y,list:v,resize:z}=s;if(_)n=[a(0,0,o(_))],m.push(...n);else{n=[],x=[];for(let t=0,e=k,i=e.length;t<i;t++){let i=e[t];f=[a(0,0,o(i.name))],b="xl-bG",i.id==w&&(b+=" xl-bH"),u=[a("div",{"mx-click":i.id!=w&&r+"\x1e_bQ({id:'"+c(i.id)+"'})",class:b},f)],x.push(...u)}if(n.push(a("div",i,x)),y)t?x=[t]:(u=[a(0,0,"loading...")],x=[t=a("div",{_:"_",class:"xl-v"},u)]),n.push(...x);else{u=[];for(let t=0,e=v,i=e.length;t<i;t++){let i=e[t];g="";let l=z(i.resolution),s=l.width,h=l.height;g+=" ";let p=i.url.replace("bdr/__85",`bdr/${s}_${h}_80`);f=[a("div",{class:"xl-bI",style:"background-image:url("+o(p)+")",title:o(i.utag),"mx-click":r+"\x1e_al({thumb:'"+c(p)+"',src:'"+c(i.url)+"'})"})],u.push(...f)}x=[a("div",l,u)],e?x.push(e):(u=[a(0,0,"\u66f4\u591a\u52a0\u8f7d\u4e2d...")],x.push(e=a("div",{_:"a",class:"xl-bK"},u))),n.push(...x)}m.push(...n)}return a(r,0,m)},init(){this.set({size:20,start:0,list:[],resize:d})},async render(){try{let t=await(()=>new Promise((t,e)=>{o?t(o):h?p.push([t,e]):(h=1,p.push([t,e]),r("https://jsonp.afeld.me/?url=http%3A%2F%2Fwallpaper.apc.360.cn%2Findex.php%3Fc%3DWallPaperAndroid%26a%3DgetAllCategories",864e5).then(t=>{h=0;for(let[e]of p)e(o=t.data)}).catch(t=>{h=0;for(let[,e]of p)e(t)}))}))(),e=this.get("cId"),i=s.mark(this,"_aE");e||(e=t[0].id);let l=this.get("start"),a=this.get("list"),d=this.get("size"),c=await((t,e,i)=>fetch(`https://jsonp.afeld.me/?url=${encodeURIComponent(`http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=${t}&start=${e}&count=${i}`)}`).then(t=>t.json()))(e,l,d);i()&&(a.push(...c.data),this.digest({cId:e,loading:!1,cats:t,list:a}))}catch(t){this.digest({error:t})}delete this._bP},"_bQ<click>"(t){let{id:e}=t.params;this.digest({list:[],loading:!0,start:0,cId:e}),this.root.scrollTop=0,this.render()},"_al<click>"(t){let{thumb:e,src:i}=t.params;a._ai(e,i)},"$win<scroll>&capture"(t){if(t.target==this.root&&!this.get("loading")&&!this._bP){let t=this.root;if(t.scrollTop+t.offsetHeight+200>t.scrollHeight){this._bP=1;let t=this.get("start")+this.get("size");this.set({start:t}),this.render()}}}});
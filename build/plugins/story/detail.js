/*!1.1.0 kooboy_li@163.com*/
import"./story.js";let s;import t from"../../lib/magix.js";import l from"../../lib/agent.js";let e=/<dt>\s*<span>([\s\S]+?)<\/span>\s*<\/dt>\s*([\s\S]+?)<\/dl>/g,i=/<dd>\s*<span\s*class="maglisttitle">\s*<a[^>]*?href="([^"]+)"[^>]*?>([\s\S]+?)<\/a>\s*<\/span>\s*<\/dd>/g;export default t.View.extend({tmpl:(t,l,e,i,r,a,o,d)=>{let h,n,p,g,u,x,c=[],{loading:m,error:b,showStory:y,list:f,storyUrl:w}=t;if(m)s?h=[s]:(n=[l(0,0,"loading...")],h=[s=l("div",{_:"_",class:"xl-w"},n)]),c.push(...h);else if(b)h=[l(0,0,i(b))],c.push(...h);else{n=[];for(let s=f.length,t=0;t<s;t+=1){let s=f[t];g=[],u=[l(0,0,i(s.title))],g.push(l("div",{class:"xl-bS",title:i(s.title)},u));for(let t=s.links,r=t.length,a=0;a<r;a+=1){let s=t[a];x=[l(0,0,i(s.text))],u=[l("div",{class:"xl-bT",title:i(s.text),"mx5-click":e+"\x1e_bX({url:'"+d(s.url)+"'})"},x)],g.push(...u)}n.push(...g)}p="xl-bR",y&&(p+=" xl-bU"),h=[l("div",{class:p},n)],c.push(...h)}return p="xl-bV",y&&(p+=" xl-bW"),c.push(l("div",{"mx5-view":"~xl/plugins/story/story?url="+r(w),"mx5-close":e+"\x1e_bY()",class:p})),l(e,0,c)},init(){this.set({showStory:!1,storyUrl:""})},assign(s){return this.set(s).set({loading:!0,showStory:!1}),!0},async render(){this.digest();try{let s=t.mark(this,"_aH"),r=this.get("data"),a=r.lastIndexOf("/"),o=r.substring(0,a+1),d=await l.request(r,2592e6,!0);if(s()){let s=[];d.replace(e,(t,l,e)=>{let r=[];return e.replace(i,(s,t,l)=>(r.push({url:o+t,text:l.trim()}),s)),s.push({title:l.trim(),links:r}),t}),this.digest({list:s,loading:!1})}}catch(s){this.digest({loading:!1,error:s})}},"_bX<click>"(s){this.digest({showStory:!0,storyUrl:s.params.url})},"_bY<close>"(){this.digest({showStory:!1})}});
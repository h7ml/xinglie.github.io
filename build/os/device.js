let e,t,i,l,s,h,n={viewBox:"0 0 1024 1024",class:"xl-E"};import a from"../lib/magix.js";let c=e=>{let t="";if(isFinite(e)){let i=e/3600|0,l=e%3600/60|0;i&&(t+=i+"\u5c0f\u65f6"),l&&(t+=l+"\u5206\u949f"),(e%=60)&&(t+=e+"\u79d2")}else t="\u4f30\u7b97\u4e2d...";return t},p=e=>(100*e).toFixed(0);export default a.View.extend({tmpl:(a,c,p,f)=>{let g,r,o,d,u=[],{online:m,support:v,level:z,charging:x,s100:M,ftime:F,dtime:_}=a;if(r=[],e?r.push(e):r.push(e=c("path",{_:"_",fill:"#fff",d:"M278.187 655.36c15.36 18.773 32.426 34.133 49.493 51.2 47.787-47.787 112.64-76.8 184.32-76.8s136.533 29.013 184.32 76.8l49.493-49.493c-63.146-63.147-145.066-97.28-233.813-97.28-88.747-1.707-170.667 32.426-233.813 95.573zm138.24 124.587l49.493 49.493L512 873.813l93.867-93.866c-23.894-23.894-58.027-39.254-93.867-39.254-37.547 0-69.973 15.36-95.573 39.254zM512 346.453c-71.68 0-139.947 13.654-204.8 40.96-63.147 27.307-119.467 64.854-167.253 112.64l-1.707 1.707 49.493 49.493C271.36 467.627 385.707 416.427 512 416.427s240.64 51.2 322.56 133.12l49.493-49.494c-47.786-47.786-104.106-87.04-167.253-112.64-64.853-25.6-133.12-40.96-204.8-40.96zm512 15.36c-66.56-66.56-143.36-119.466-230.4-155.306-88.747-37.547-184.32-56.32-281.6-56.32s-192.853 18.773-281.6 56.32C145.067 242.347 66.56 295.253 0 361.813l49.493 49.494C168.96 293.547 331.093 220.16 512 220.16s344.747 73.387 462.507 191.147L1024 361.813z"},0,1)),m||(o=t?[t]:[t=c("path",{_:"a",fill:"#FF6B6B",d:"M759.467 375.467c-128 0-232.107 104.106-232.107 232.106S631.467 839.68 759.467 839.68s232.106-104.107 232.106-232.107-104.106-232.106-232.106-232.106z"},0,1)],i?o.push(i):o.push(i=c("path",{_:"b",fill:"#FFF",d:"M882.347 692.907c5.12 5.12 8.533 11.946 8.533 20.48 0 15.36-11.947 27.306-27.307 27.306-6.826 0-15.36-3.413-20.48-8.533l-83.626-83.627-83.627 83.627c-5.12 5.12-11.947 8.533-20.48 8.533-15.36 0-27.307-11.946-27.307-27.306 0-8.534 3.414-15.36 8.534-20.48l83.626-83.627-83.626-83.627c-5.12-5.12-8.534-11.946-8.534-20.48 0-15.36 11.947-27.306 27.307-27.306 6.827 0 15.36 3.413 20.48 8.533l83.627 83.627 83.626-83.627c5.12-5.12 11.947-8.533 20.48-8.533 15.36 0 27.307 11.946 27.307 27.306 0 8.534-3.413 15.36-8.533 20.48L798.72 609.28l83.627 83.627z"},0,1)),r.push(...o)),g=[c("svg",n,r)],u.push(c("div",{class:"xl-C",title:"\u5f53\u524d"+f(m?"\u8054\u7f51\u4e2d":"\u65ad\u7f51\u4e2d")},g)),v){g=[];let e="#fff",t=810*z,i=810*(1-z);z<=.1?e="#f00":z<=.25&&(e="#f90"),(o=[]).push(c("path",{fill:f(e),d:"M330 "+f(140+i)+"h350v"+f(t)+"H330z"},0,1)),x&&(d=l?[l]:[l=c("path",{_:"c",fill:"#fff",d:"M499.712 801.131l97.445-324.376-97.445 12.783V266.735l-93.415 314.798 93.415-29.927zm50.077-772.228h-94.704z",stroke:"#000","stroke-width":"10px"},0,1)],o.push(...d)),s?o.push(s):o.push(s=c("path",{_:"d",fill:"#fff",d:"M440 0c-47.368 0-47.368 76.338-48.788 76.338h190.86S582.072 0 534.704 0z"},0,1)),h?o.push(h):o.push(h=c("path",{_:"e",fill:"#fff",d:"M247.742 168.663V919.75c0 99.328 93.712 100.121 93.712 100.121h327.879s93.712 0 93.712-100.12V168.662c0-100.121-93.712-100.121-93.712-100.121H341.454s-93.712 0-93.712 100.12zm427.206-60.45s48.458-.065 48.458 51.234V928.9c0 51.3-48.458 51.3-48.458 51.3H335.84s-48.458 0-48.458-51.3V159.48c0-52.885 48.458-51.3 48.458-51.3h339.11z"},0,1)),r=[c("svg",n,o)],g.push(c("div",{class:"xl-C",title:f(x?1==z?"\u5145\u6ee1\u7535":`\u5145\u7535\u4e2d\uff1a${M(z)}%\uff0c\u9700\u8981\uff1a${F}`:`\u653e\u7535\u4e2d\uff1a${M(z)}%\uff0c\u80fd\u7528\uff1a${_}`)},r)),u.push(...g)}return c(p,0,u)},init(){this.set({s100:p}),navigator.getBattery?navigator.getBattery().then(e=>{let t=t=>{this.digest({support:!0,ftime:c(e.chargingTime),dtime:c(e.dischargingTime),level:e.level,charging:e.charging})};t(),e.onlevelchange=t,e.onchargingchange=t,e.onchargingtimechange=t,e.ondischargingtimechange=t}).catch(()=>{this.set({support:!1})}):this.set({support:!1})},render(){this.digest({online:navigator.onLine})},"$win<online,offline>"(e){this.render()}});
window.antoraLunr=function(i){var u=document.getElementById("search-input"),c=document.createElement("div");function o(e,t){var n=[],r=t[0],a=t[1],s=e.text,d=document.createElement("span");d.classList.add("search-result-highlight"),d.innerText=s.substr(r,a);var i=r+a,u=s.length-1,c=u<i+15?u:i+15,o=r-15<0?0:r-15;return 0===r&&i===u?n.push(d):0===r?(n.push(d),n.push(document.createTextNode(s.substr(i,c)))):i===u?(n.push(document.createTextNode(s.substr(0,r))),n.push(d)):(n.push(document.createTextNode("..."+s.substr(o,r-o))),n.push(d),n.push(document.createTextNode(s.substr(i,c-i)+"..."))),n}function l(t,e,n){var r,a=[],s=n[0],d=n[1],i=document.createElement("span");i.classList.add("search-result-highlight"),r=t?e.titles.filter(function(e){return e.id===t})[0].text:e.title,i.innerText=r.substr(s,d);var u=s+d,c=r.length-1;return 0===s&&u===c?a.push(i):0===s?(a.push(i),a.push(document.createTextNode(r.substr(d,c)))):u===c?(a.push(document.createTextNode(r.substr(0,s))),a.push(i)):(a.push(document.createTextNode(r.substr(0,s))),a.push(i),a.push(document.createTextNode(r.substr(u,c)))),a}function h(e,s,d){e.forEach(function(e){var t,n=e.ref;n.includes("#")&&(t=n.substring(n.indexOf("#")+1),n=n.replace("#"+t,""));var r=s[n],a=function(e,t,n){var r=[];for(var a in e){var s=e[a];for(var d in s){var i=s[d];if(i.position){var u=i.position[0];"title"===d?r=l(t,n,u):"text"===d&&(r=o(n,u))}}}return r}(e.matchData.metadata,t,r);d.appendChild(function(e,t,n){var r=document.createElement("div");r.classList.add("search-result-document-title");var a=document.createElement("span");a.innerText=e.title,r.appendChild(a);var s=document.createElement("div");s.classList.add("search-result-document-hit");var d=document.createElement("a"),i=window.antora.basePath;d.href=i+t.ref,d.title=i+t.ref,s.appendChild(d),n.forEach(function(e){d.appendChild(e)});var u=document.createElement("div");return u.classList.add("search-result-item"),u.appendChild(r),u.appendChild(s),u.addEventListener("mousedown",function(e){e.preventDefault()}),u}(r,e,a))})}function p(e,t,n){for(;c.firstChild;)c.removeChild(c.firstChild);if(""!==n.trim()){var r,a,s,d=(a=n,0<(s=(r=e).search(a)).length||0<(s=r.search(a+"*")).length?s:s=r.search("*"+a+"*")),i=document.createElement("div");i.classList.add("search-result-dataset"),c.appendChild(i),0<d.length?h(d,t,i):i.appendChild(function(e){var t=document.createElement("div");t.classList.add("search-result-item");var n=document.createElement("div");n.classList.add("no-document-hit");var r=document.createElement("span");return r.innerHTML='&#129335;&nbsp; No hits for "'+e+'"...',n.appendChild(r),t.appendChild(n),t}(n))}}return c.classList.add("search-result-dropdown-menu"),u.parentNode.appendChild(c),{init:function(e){var r,a,s,d,t=Object.assign({index:i.Index.load(e.index),store:e.store}),n=(r=function(){p(t.index,t.store,u.value)},a=100,function(){var e=this,t=arguments,n=s&&!d;clearTimeout(d),d=setTimeout(function(){d=null,s||r.apply(e,t)},a),n&&r.apply(e,t)});u.addEventListener("keydown",n),u.addEventListener("blur",function(e){for(;c.firstChild;)c.removeChild(c.firstChild);""!==u.value&&u.addEventListener("focus",function(e){n()},{once:!0})})}}}(window.lunr);
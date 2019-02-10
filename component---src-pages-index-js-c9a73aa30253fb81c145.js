(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(168),o=n(261),c=n.n(o),l=n(225);var u=function(e){var t,n=Object(a.useState)((t=l.DateTime.fromISO("1993-08-15"),l.DateTime.local().diff(t,"years").toFormat("y")))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{style:{marginBottom:"0.6em"}},r.a.createElement("h1",null,"🦁 Vincent Cordobes")),r.a.createElement("p",null,"Hi! I'm a ",n," years old software engineer from France. I like functional programming and statically typed languages."),r.a.createElement("p",null,"You can find me on"," ",r.a.createElement("a",{href:"https://twitter.com/VincentCordobes"},"twitter"),","," ",r.a.createElement("a",{href:"https://github.com/VincentCordobes"},"github"),","," ",r.a.createElement("a",{href:"https://www.instagram.com/vincentcordobes/"},"instagram"),"."),r.a.createElement("hr",null))},s=n(194),d=n(157);n(495);n.d(t,"pageQuery",function(){return m});t.default=function(e){var t=c()(e,"data.allMarkdownRemark.edges");return r.a.createElement(d.a,null,r.a.createElement(s.a,null),r.a.createElement(u,null),r.a.createElement("p",null,"Here are some thoughts I wrote:"),r.a.createElement("ul",{id:"post-list"},t.map(function(e){var t=e.node,n=c()(t,"frontmatter.title")||t.fields.slug;return r.a.createElement("li",{key:t.fields.slug},r.a.createElement("small",null,t.frontmatter.date," - "),r.a.createElement(i.Link,{to:t.fields.slug},n))})))};var m="2353934116"},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children;return r.a.createElement("div",{id:"layout"},t)}},168:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(151),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(172),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,n){var a;e.exports=(a=n(192))&&a.default||a},192:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},194:function(e,t,n){"use strict";n(32);var a=n(195),r=n(0),i=n.n(r),o=n(193),c=n.n(o),l=n(4),u=n.n(l),s=n(168),d="3236765318";function m(e){var t=e.meta,n=e.image,r=e.title,o=e.description,l=e.slug;return i.a.createElement(s.StaticQuery,{query:d,render:function(e){var a=e.site.siteMetadata,u=o||a.description,s=n?a.siteUrl+"/"+n:null,d=""+a.siteUrl+l;return i.a.createElement(c.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s - "+a.title,title:r}:{title:a.title},{meta:[{name:"google-site-verification",content:"kjM2mfXvQ9XJ7BqEPTHNHWZ62wJsC5G_GtuPX1oy0EY"},{name:"description",content:u},{property:"og:url",content:d},{property:"og:title",content:r||a.title},{name:"og:description",content:u},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:u}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}))},data:a})}m.defaultProps={meta:[],title:"",slug:""},m.propTypes={description:u.a.string,image:u.a.string,meta:u.a.array,slug:u.a.string,title:u.a.string.isRequired},t.a=m},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Vincent's page",author:"Vincent Cordobes",description:"I am a software developer 🦁 Highly interested in functional programming",siteUrl:"https://vincentcordobes.github.io",social:{twitter:"@VincentCordobes"}}}}}},495:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-c9a73aa30253fb81c145.js.map
"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2687],{5537:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var o=n(5893),a=n(1151),t=n(725);const l={layout:"post",title:"Rio 0.0.7",date:"2023-07-07 12:34",description:"Configuration reload, x11 and wayland stabilization, sugarloaf ported to WebAssembly, addition to NIX OS packages and other updates.",categories:"release macos linux webassembly"},s=void 0,r={permalink:"/rio/es/blog/2023/07/07/release-0.0.7",editUrl:"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-07-07-release-0.0.7.mdx",source:"@site/blog/2023-07-07-release-0.0.7.mdx",title:"Rio 0.0.7",description:"Configuration reload, x11 and wayland stabilization, sugarloaf ported to WebAssembly, addition to NIX OS packages and other updates.",date:"2023-07-07T12:34:00.000Z",tags:[],readingTime:2.86,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Rio 0.0.7",date:"2023-07-07 12:34",description:"Configuration reload, x11 and wayland stabilization, sugarloaf ported to WebAssembly, addition to NIX OS packages and other updates.",categories:"release macos linux webassembly"},unlisted:!1,prevItem:{title:"Rio 0.0.9",permalink:"/rio/es/blog/2023/07/17/release-0.0.9"},nextItem:{title:"Rio 0.0.8",permalink:"/rio/es/blog/2023/07/10/release-0.0.8"}},d={authorsImageUrls:[]},h=[{value:"v0.0.7: Highlights",id:"v007-highlights",level:2},{value:"Overview",id:"overview",level:2},{value:"Breaking change: Styles properties have been moved to root level",id:"breaking-change-styles-properties-have-been-moved-to-root-level",level:2},{value:"Reload automatically when the configuration file has changed.",id:"reload-automatically-when-the-configuration-file-has-changed",level:2},{value:"width and height is not longer available in the configuration file.",id:"width-and-height-is-not-longer-available-in-the-configuration-file",level:2},{value:"Stabilization of Linux x11 and Wayland",id:"stabilization-of-linux-x11-and-wayland",level:2},{value:"Custom font rendering",id:"custom-font-rendering",level:2},{value:"Sugarloaf ported to WebAssembly",id:"sugarloaf-ported-to-webassembly",level:2},{value:"Changelog of v0.0.7",id:"changelog-of-v007",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"v007-highlights",children:"v0.0.7: Highlights"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Support to custom fonts"}),"\n",(0,o.jsx)(i.li,{children:"Configuration reload"}),"\n",(0,o.jsx)(i.li,{children:"x11 and wayland stabilization"}),"\n",(0,o.jsx)(i.li,{children:"Sugarloaf ported to WebAssembly"}),"\n",(0,o.jsxs)(i.li,{children:["Addition to NIX OS packages (kudos to ",(0,o.jsx)(i.a,{href:"https://github.com/otavio",children:"@otavio"}),", PR: ",(0,o.jsx)(i.a,{href:"https://github.com/NixOS/nixpkgs/pull/237664",children:"NixOS/nixpkgs/pull/237664"}),")"]}),"\n",(0,o.jsx)(i.li,{children:"Styles properties have been moved to root level"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(i.p,{children:"Rio release 0.0.7 is finally here, there's a lot of updates to cover so let's get started. I also would like to remind you that Rio is still unstable. This release adds a lot of bug fixes and feature additions in order to make Rio terminal stable."}),"\n",(0,o.jsx)(i.h2,{id:"breaking-change-styles-properties-have-been-moved-to-root-level",children:"Breaking change: Styles properties have been moved to root level"}),"\n",(0,o.jsx)(i.p,{children:'The only breaking change of v0.0.7 is that styles properties such as "font", "theme" and "font-size" moved to the root level.'}),"\n",(0,o.jsx)(i.p,{children:"Before:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:"cursor = '|'\n[style]\nfont-size = 18\ntheme = \"lucario\"\n"})}),"\n",(0,o.jsx)(i.p,{children:"After:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:"cursor = '|'\ntheme = \"lucario\"\nfont-size = 18\n"})}),"\n",(0,o.jsx)(i.h2,{id:"reload-automatically-when-the-configuration-file-has-changed",children:"Reload automatically when the configuration file has changed."}),"\n",(0,o.jsx)(i.p,{children:"Any file update in the configuration file will trigger a render operation in Rio terminal with the new configuration."}),"\n",(0,o.jsxs)(i.p,{children:["If you have any suggestion of configuration ideas to Rio, please feel free to ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/new",children:"open an issue"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"width-and-height-is-not-longer-available-in-the-configuration-file",children:"width and height is not longer available in the configuration file."}),"\n",(0,o.jsx)(i.p,{children:"The property width and height doesn't work anymore after the 0.0.7 release."}),"\n",(0,o.jsx)(i.p,{children:"Before you could set the initial width and height of the screen, this configuration is not longer possible. It was removed due to compatibility with different targets."}),"\n",(0,o.jsx)(i.h2,{id:"stabilization-of-linux-x11-and-wayland",children:"Stabilization of Linux x11 and Wayland"}),"\n",(0,o.jsx)(i.p,{children:"In older versions of Rio terminal it was possible to actually use Rio but it was slow and buggy for many users. Many fixes has been done in the v0.0.7 to bring the experience of Linux users close to what MacOS have right now."}),"\n",(0,o.jsx)(i.p,{children:"The tweet below have a video demo that shows Rio running with X11:"}),"\n",(0,o.jsx)(t.t,{id:"1670404595246419968"}),"\n",(0,o.jsx)(i.h2,{id:"custom-font-rendering",children:"Custom font rendering"}),"\n",(0,o.jsx)(i.p,{children:'Now you can actually use different installed fonts by changing the property "font".'}),"\n",(0,o.jsx)(i.p,{children:'The example below considers that you have "Fira code" font installed in your machine.'}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:'font = "Fira code"\n'})}),"\n",(0,o.jsx)(i.p,{children:"A quick look of how font updates looks like in v0.0.7:"}),"\n",(0,o.jsx)(t.t,{id:"1670808836213547009"}),"\n",(0,o.jsx)(i.h2,{id:"sugarloaf-ported-to-webassembly",children:"Sugarloaf ported to WebAssembly"}),"\n",(0,o.jsx)(i.p,{children:"The Rio support to WASM has moved one step ahead by introduction of Sugarloaf (Rio renderer) to WebAssembly."}),"\n",(0,o.jsx)(i.p,{children:"In the image below you can see it in action:"}),"\n",(0,o.jsx)(i.h2,{id:"changelog-of-v007",children:"Changelog of v0.0.7"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:'Breaking changes for configuration file regarding "Style" property.'}),"\n",(0,o.jsxs)(i.li,{children:["Fix Background color not entirely set on vim ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/88",children:"#88"})]}),"\n",(0,o.jsx)(i.li,{children:"Scroll now works for x11 and wayland."}),"\n",(0,o.jsx)(i.li,{children:"No longer renders to macos and x11 windows that are fully occluded / not directly visible."}),"\n",(0,o.jsx)(i.li,{children:'Introduced "window-opacity" config property for WebAssembly and Wayland builds.'}),"\n",(0,o.jsxs)(i.li,{children:["Add permissions instructions to Rio macos builds (Fix ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/99",children:"#99"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["Fixes for x11 and wayland rendering (Related: ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/98",children:"#98"})," and ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/100",children:"#100"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["Performance fixes (Related: ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/101",children:"#101"}),")."]}),"\n",(0,o.jsx)(i.li,{children:"Sugarloaf WebAssembly support."}),"\n",(0,o.jsx)(i.li,{children:"Fixed resize for all contexts: removed the glitch when resizing and switching between tabs."}),"\n",(0,o.jsxs)(i.li,{children:["Fixed cursor inconsistencies ",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/95",children:"#95"}),"."]}),"\n",(0,o.jsx)(i.li,{children:'Added command line interface support ("--help", "--version", "-e" and "--command").'}),"\n",(0,o.jsx)(i.li,{children:"Added a fallback for WPGU request device operation: downlevel limits, which will allow the code to run on all possible hardware."}),"\n",(0,o.jsx)(i.li,{children:'Added "padding-x" to configuration.'}),"\n",(0,o.jsxs)(i.li,{children:["Reload automatically when the configuration file is changed (",(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/69",children:"#69"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:['Fix "Ctrl+D" and "exit" command not closing the app (',(0,o.jsx)(i.a,{href:"https://github.com/raphamorim/rio/issues/87",children:"#87"}),")."]}),"\n",(0,o.jsx)(i.li,{children:'Changed default "light-black" color.'}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);
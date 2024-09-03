"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[7725],{9405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(5893),r=t(1151);const i={title:"Command-line interface",language:"en"},a=void 0,c={id:"command-line-interface",title:"Command-line interface",description:"A command-line interface (CLI) is a means of interacting with a device or computer program with commands from a user or client, and responses from the device or program, in the form of lines of text. Rio terminal has a command-line interface that you can use for different purposes.",source:"@site/docs/command-line-interface.md",sourceDirName:".",slug:"/command-line-interface",permalink:"/rio/pl/docs/command-line-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/command-line-interface.md",tags:[],version:"current",frontMatter:{title:"Command-line interface",language:"en"},sidebar:"tutorialSidebar",next:{title:"Configuration file",permalink:"/rio/pl/docs/config/"}},s={},d=[];function m(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A command-line interface (CLI) is a means of interacting with a device or computer program with commands from a user or client, and responses from the device or program, in the form of lines of text. Rio terminal has a command-line interface that you can use for different purposes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ rio --help\nA hardware-accelerated GPU terminal emulator powered by WebGPU, focusing to run in desktops and browsers\n\nUsage: rio [OPTIONS]\n\nOptions:\n  -e, --command <COMMAND>...       Command and args to execute (must be last argument)\n  -w, --working-dir <WORKING_DIR>  Start the shell in the specified working directory\n      --write-config [<PATH>]      Writes the config to a given path or the default location\n  -h, --help                       Print help\n  -V, --version                    Print version\n"})}),"\n",(0,o.jsx)(n.p,{children:'The options "-e" and "--command" executes the command and closes the terminal right way after the execution.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ rio -e sleep 10\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also ",(0,o.jsx)(n.code,{children:"RIO_LOG_LEVEL"})," environment variable for filter logs on-demand, for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ RIO_LOG_LEVEL=debug rio -e echo 85\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(7294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
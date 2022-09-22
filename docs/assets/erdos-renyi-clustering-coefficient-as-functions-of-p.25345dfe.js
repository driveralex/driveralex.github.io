import{B as n,o as a,c as e,e as s,n as l}from"./app.058cc115.js";const c="/assets/clustering_coef.83cd6e4b.png",t={class:"prose prose-sm m-auto text-left"},p=s("h1",null,"Erdos-Renyi, clustering coefficient as functions of p",-1),r=s("p",null,"The same principle is applied for evolution of the global clustering coefficient.",-1),y=s("pre",null,[s("code",{class:"language-r"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#002B36"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"p_clustering_coef"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"nb_nodes"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"step"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#268BD2"}},"nb_sample")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"vector"),s("span",{style:{color:"#839496"}},"(mode "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"numeric"'),s("span",{style:{color:"#839496"}},",("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},")))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"dim"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},") "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," ("),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"ig"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," Erdos_Renyi_optimized("),s("span",{style:{color:"#268BD2"}},"nb_nodes"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," transitivity("),s("span",{style:{color:"#268BD2"}},"ig"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"step")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"cat"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#2AA198"}},'"Progress: "'),s("span",{style:{color:"#839496"}},",("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},"))"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#D33682"}},"100"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#2AA198"}},'"%'),s("span",{style:{color:"#CB4B16"}},"\\n"),s("span",{style:{color:"#2AA198"}},'"'),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"strmain"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#2AA198"}},'"Evolution of the global clustering coefficient with p for Erdos-Renyi n="'),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"nb_nodes"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"plot"),s("span",{style:{color:"#839496"}},"(x "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},",],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       y "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},",],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       main "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"strmain"),s("span",{style:{color:"#839496"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       type "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"b"'),s("span",{style:{color:"#839496"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       xlab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"p"'),s("span",{style:{color:"#839496"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       ylab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"Global clustering coefficient"'),s("span",{style:{color:"#839496"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#FDF6E3"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"p_clustering_coef"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"nb_nodes"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"step"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#268BD2"}},"nb_sample")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"vector"),s("span",{style:{color:"#657B83"}},"(mode "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"numeric"'),s("span",{style:{color:"#657B83"}},",("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},")))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"dim"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},") "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," ("),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"ig"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," Erdos_Renyi_optimized("),s("span",{style:{color:"#268BD2"}},"nb_nodes"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," transitivity("),s("span",{style:{color:"#268BD2"}},"ig"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"p"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"step")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"cat"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#2AA198"}},'"Progress: "'),s("span",{style:{color:"#657B83"}},",("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"nb_sample"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},"))"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#D33682"}},"100"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#2AA198"}},'"%'),s("span",{style:{color:"#CB4B16"}},"\\n"),s("span",{style:{color:"#2AA198"}},'"'),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"strmain"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#2AA198"}},'"Evolution of the global clustering coefficient with p for Erdos-Renyi n="'),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"nb_nodes"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"plot"),s("span",{style:{color:"#657B83"}},"(x "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},",],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       y "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},",],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       main "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"strmain"),s("span",{style:{color:"#657B83"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       type "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"b"'),s("span",{style:{color:"#657B83"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       xlab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"p"'),s("span",{style:{color:"#657B83"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       ylab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"Global clustering coefficient"'),s("span",{style:{color:"#657B83"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"}")]),l(`
`),s("span",{class:"line"})])])])])],-1),B=s("p",null,[s("img",{src:c,alt:""})],-1),i=[p,r,y,B],u=[],A={__name:"erdos-renyi-clustering-coefficient-as-functions-of-p",setup(D,{expose:o}){return o({frontmatter:{meta:[]}}),n({meta:[]}),(d,f)=>(a(),e("div",t,i))}};export{A as default,u as meta};
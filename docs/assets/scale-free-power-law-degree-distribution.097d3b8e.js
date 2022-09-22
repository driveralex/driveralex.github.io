import{B as n,o as a,c as e,e as s,n as l}from"./app.058cc115.js";const t="/assets/cumulative.e220906c.png",c={class:"prose prose-sm m-auto text-left"},r=s("h1",null,"Scale free, power law degree distribution",-1),p=s("p",null,[l("To show more clearly the distribution of degree in scale free graph follow power law of type "),s("eq",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"k"),s("mo",{stretchy:"false"},")"),s("mo",null,"\u223C"),s("msup",null,[s("mi",null,"k"),s("mrow",null,[s("mo",null,"\u2212"),s("mi",null,"a")])])]),s("annotation",{encoding:"application/x-tex"},"P(k) \\sim k^{-a}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"\u223C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7713em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7713em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"\u2212"),s("span",{class:"mord mathnormal mtight"},"a")])])])])])])])])])])])]),l(".")],-1),y=s("p",null,"We used a cumulative distribution visualization with the following code :",-1),B=s("pre",null,[s("code",{class:"language-r"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#002B36"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"sortdeg"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," degree("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"sorted"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"sort.int"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}},",decreasing "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#B58900"}},"TRUE"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"sort.int"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}},",decreasing "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#B58900"}},"TRUE"),s("span",{style:{color:"#839496"}},", index.return "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#B58900"}},"TRUE"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"scale_max"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"max"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"vector"),s("span",{style:{color:"#839496"}},"(mode "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"numeric"'),s("span",{style:{color:"#839496"}},",("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#268BD2"}},"scale_max"),s("span",{style:{color:"#839496"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"dim"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},") "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"scale_max"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#839496"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"]] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"]]"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#839496"}},"( "),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},",])"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}}," )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},"] "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"] ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"normal"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#839496"}},"( "),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},",]))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"i")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"]"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#268BD2"}},"normal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"max_x"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"max"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"print"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"max_x"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"plot"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},",],"),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},",],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       xlab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"Degree k"'),s("span",{style:{color:"#839496"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       ylab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},'"Fraction of nodes Pk having degree k or greater"'),s("span",{style:{color:"#839496"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       xlim "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"max_x"),s("span",{style:{color:"#839496"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       ylim "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"0.001"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       log "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#2AA198"}},'"xy"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"       )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#586E75","font-style":"italic"}},"# We may have pb with k = 2.. ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#FDF6E3"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"sortdeg"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," degree("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"sorted"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"sort.int"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}},",decreasing "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#B58900"}},"TRUE"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"sort.int"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}},",decreasing "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#B58900"}},"TRUE"),s("span",{style:{color:"#657B83"}},", index.return "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#B58900"}},"TRUE"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"scale_max"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"max"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"vector"),s("span",{style:{color:"#657B83"}},"(mode "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"numeric"'),s("span",{style:{color:"#657B83"}},",("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#268BD2"}},"scale_max"),s("span",{style:{color:"#657B83"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"dim"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},") "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"scale_max"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#657B83"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"]] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"]]"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#657B83"}},"( "),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},",])"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}}," )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},"] "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"] ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"normal"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#657B83"}},"( "),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},",]))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"i")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"]"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#268BD2"}},"normal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"max_x"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"max"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"sortedind"),s("span",{style:{color:"#859900"}},"$"),s("span",{style:{color:"#268BD2"}},"x"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"print"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"max_x"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"plot"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},",],"),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},",],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       xlab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"Degree k"'),s("span",{style:{color:"#657B83"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       ylab "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},'"Fraction of nodes Pk having degree k or greater"'),s("span",{style:{color:"#657B83"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       xlim "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"max_x"),s("span",{style:{color:"#657B83"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       ylim "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"0.001"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       log "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#2AA198"}},'"xy"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"       )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#93A1A1","font-style":"italic"}},"# We may have pb with k = 2.. ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"}")]),l(`
`),s("span",{class:"line"})])])])])],-1),i=s("p",null,[s("img",{src:t,alt:""})],-1),D=[r,p,y,B,i],f=[],m={__name:"scale-free-power-law-degree-distribution",setup(d,{expose:o}){return o({frontmatter:{meta:[]}}),n({meta:[]}),(x,u)=>(a(),e("div",c,D))}},k=m;export{k as default,f as meta};
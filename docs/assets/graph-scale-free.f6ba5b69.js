import{B as n,o as a,c as e,e as s,n as l}from"./app.058cc115.js";const c={class:"prose prose-sm m-auto text-left"},p=s("h1",null,"Graph scale free",-1),r=s("p",null,"The following code generate a scale free graph for any type of k.",-1),t=s("pre",null,[s("code",{class:"language-r"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#002B36"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"nb_init_nodes"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"nb_init_edges"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," ("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#268BD2"}},"sqrt"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"8"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#268BD2"}},"nb_init_edges"),s("span",{style:{color:"#839496"}},"))"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#D33682"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#859900"}},"if"),s("span",{style:{color:"#839496"}},"( "),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"=="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"floor"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#839496"}},") )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#859900"}},"return"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }"),s("span",{style:{color:"#859900"}},"else"),s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"floor"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#839496"}},")"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"n_cal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"scale_free_init"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," nb_init_nodes("),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"nb_tri"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},")"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#D33682"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"matrix"),s("span",{style:{color:"#839496"}},"( nrow "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#839496"}},", ncol "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"diag"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},") "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"vect_init"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"( "),s("span",{style:{color:"#268BD2"}},"rep"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},", "),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#839496"}},") , "),s("span",{style:{color:"#268BD2"}},"rep"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"0"),s("span",{style:{color:"#839496"}},", ("),s("span",{style:{color:"#268BD2"}},"nb_tri"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#839496"}},") ))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#268BD2"}},"lower.tri"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},")] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"vect_init")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"t"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#268BD2"}},"lower.tri"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},")] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"vect_init"),s("span",{style:{color:"#839496"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," graph_from_adjacency_matrix("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#839496"}},",mode "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#2AA198"}},'"undirected"'),s("span",{style:{color:"#839496"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"scale_free_degree_range"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"random"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"random"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"runif"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," degree("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"nbedges"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}},")"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#D33682"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"        "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#839496"}},"["),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},"]"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"nbedges"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"        "),s("span",{style:{color:"#859900"}},"if"),s("span",{style:{color:"#839496"}},"( "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},">"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"random"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"          "),s("span",{style:{color:"#859900"}},"return"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"scale_free"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"n"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"q"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," scale_free_init("),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"add"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"k")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#859900"}},"while"),s("span",{style:{color:"#839496"}},"( "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"n"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," add_vertices("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#839496"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#268BD2"}},"q"),s("span",{style:{color:"#839496"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"      "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," add_edges("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},","),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#839496"}},"( ("),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#268BD2"}},"q"),s("span",{style:{color:"#839496"}},") ,scale_free_degree_range("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#839496"}},")))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#FDF6E3"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"nb_init_nodes"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"nb_init_edges"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," ("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#268BD2"}},"sqrt"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"8"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#268BD2"}},"nb_init_edges"),s("span",{style:{color:"#657B83"}},"))"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#D33682"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#859900"}},"if"),s("span",{style:{color:"#657B83"}},"( "),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"=="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"floor"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#657B83"}},") )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#859900"}},"return"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }"),s("span",{style:{color:"#859900"}},"else"),s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"floor"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"n_cal"),s("span",{style:{color:"#657B83"}},")"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#D33682"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"n_cal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"scale_free_init"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," nb_init_nodes("),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"nb_tri"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},")"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#D33682"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"matrix"),s("span",{style:{color:"#657B83"}},"( nrow "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#657B83"}},", ncol "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"nb_node"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"diag"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},") "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"vect_init"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"( "),s("span",{style:{color:"#268BD2"}},"rep"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},", "),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#657B83"}},") , "),s("span",{style:{color:"#268BD2"}},"rep"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"0"),s("span",{style:{color:"#657B83"}},", ("),s("span",{style:{color:"#268BD2"}},"nb_tri"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#657B83"}},") ))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#268BD2"}},"lower.tri"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},")] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"vect_init")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"t"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#268BD2"}},"lower.tri"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},")] "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"vect_init"),s("span",{style:{color:"#657B83"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," graph_from_adjacency_matrix("),s("span",{style:{color:"#268BD2"}},"mat"),s("span",{style:{color:"#657B83"}},",mode "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#2AA198"}},'"undirected"'),s("span",{style:{color:"#657B83"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"scale_free_degree_range"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"random"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"random"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"runif"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," degree("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"nbedges"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}},")"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#D33682"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#268BD2"}},"length"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"        "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"vect_deg"),s("span",{style:{color:"#657B83"}},"["),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},"]"),s("span",{style:{color:"#859900"}},"/"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"nbedges"),s("span",{style:{color:"#859900"}},"*"),s("span",{style:{color:"#D33682"}},"2"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"        "),s("span",{style:{color:"#859900"}},"if"),s("span",{style:{color:"#657B83"}},"( "),s("span",{style:{color:"#268BD2"}},"sum"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},">"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"random"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"          "),s("span",{style:{color:"#859900"}},"return"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"scale_free"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"function"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"n"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"q"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," scale_free_init("),s("span",{style:{color:"#268BD2"}},"k"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"add"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"k")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#859900"}},"while"),s("span",{style:{color:"#657B83"}},"( "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"n"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," add_vertices("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#859900"}},"for"),s("span",{style:{color:"#657B83"}},"("),s("span",{style:{color:"#268BD2"}},"i"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"in"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#268BD2"}},"q"),s("span",{style:{color:"#657B83"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"      "),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," add_edges("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},","),s("span",{style:{color:"#268BD2"}},"c"),s("span",{style:{color:"#657B83"}},"( ("),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#859900"}},"-"),s("span",{style:{color:"#D33682"}},"1"),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#268BD2"}},"q"),s("span",{style:{color:"#657B83"}},") ,scale_free_degree_range("),s("span",{style:{color:"#268BD2"}},"igraph"),s("span",{style:{color:"#657B83"}},")))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"<-"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"nodenb"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"+"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"  "),s("span",{style:{color:"#268BD2"}},"igraph")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"}")]),l(`
`),s("span",{class:"line"})])])])])],-1),y=[p,r,t],m=[],h={__name:"graph-scale-free",setup(B,{expose:o}){return o({frontmatter:{meta:[]}}),n({meta:[]}),(_,d)=>(a(),e("div",c,y))}};export{h as default,m as meta};

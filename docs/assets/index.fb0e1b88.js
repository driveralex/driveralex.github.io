import{_ as c}from"./ButtonSection.b76f77df.js";import{A as u,o as a,b as t,f as l,d as r,i as p,u as k}from"./vendor.2aa3e7d8.js";import"./app.0ff1674a.js";const i={class:"prose prose-sm m-auto text-left"},d=l(`<h1>Graph scale free</h1><p>The following code generate a scale free graph for any type of k.</p><pre class="language-r"><code class="language-r">nb_init_nodes <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nb_init_edges<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  n_cal <span class="token operator">&lt;-</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span>sqrt<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">8</span><span class="token operator">*</span>nb_init_edges<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> n_cal <span class="token operator">==</span> floor<span class="token punctuation">(</span>n_cal<span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    return<span class="token punctuation">(</span>n_cal<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    n_cal <span class="token operator">&lt;-</span> floor<span class="token punctuation">(</span>n_cal<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
  n_cal
<span class="token punctuation">}</span>

scale_free_init <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> nb_init_nodes<span class="token punctuation">(</span>k<span class="token punctuation">)</span>
  nb_tri <span class="token operator">&lt;-</span> nb_node<span class="token operator">*</span><span class="token punctuation">(</span>nb_node<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  mat <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span> nrow <span class="token operator">=</span> nb_node<span class="token punctuation">,</span> ncol <span class="token operator">=</span> nb_node<span class="token punctuation">)</span>
  diag<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
  vect_init <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span> rep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token punctuation">,</span> rep<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>nb_tri<span class="token operator">-</span>k<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
  mat<span class="token punctuation">[</span>lower.tri<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> vect_init
  mat <span class="token operator">&lt;-</span> t<span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
  mat<span class="token punctuation">[</span>lower.tri<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> vect_init  
  igraph <span class="token operator">&lt;-</span> graph_from_adjacency_matrix<span class="token punctuation">(</span>mat<span class="token punctuation">,</span>mode <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">&quot;undirected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  igraph
<span class="token punctuation">}</span>

scale_free_degree_range <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>random<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  random <span class="token operator">&lt;-</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  vect_deg <span class="token operator">&lt;-</span> degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  nbedges <span class="token operator">&lt;-</span> sum<span class="token punctuation">(</span>vect_deg<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  sum <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>length<span class="token punctuation">(</span>vect_deg<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        sum <span class="token operator">&lt;-</span> sum <span class="token operator">+</span> vect_deg<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">/</span><span class="token punctuation">(</span>nbedges<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> sum <span class="token operator">&gt;</span> random<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          return<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

scale_free <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>k<span class="token punctuation">,</span>q<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  igraph <span class="token operator">&lt;-</span> scale_free_init<span class="token punctuation">(</span>k<span class="token punctuation">)</span>
  add <span class="token operator">&lt;-</span> <span class="token number">0</span>
  nodenb <span class="token operator">&lt;-</span> k
  <span class="token keyword">while</span><span class="token punctuation">(</span> nodenb <span class="token operator">&lt;</span> n<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    igraph <span class="token operator">&lt;-</span> add_vertices<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>q<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> add_edges<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>c<span class="token punctuation">(</span> <span class="token punctuation">(</span>nodenb<span class="token operator">-</span><span class="token number">1</span><span class="token operator">+</span>q<span class="token punctuation">)</span> <span class="token punctuation">,</span>scale_free_degree_range<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    nodenb <span class="token operator">&lt;-</span> nodenb <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>
</code></pre>`,3),m=[d],_={setup(o,{expose:n}){return n({frontmatter:{meta:[]}}),u({meta:[]}),(b,f)=>(a(),t("div",i,m))}},g={class:"allContent text-center"},v=r({setup(o){return(n,e)=>{const s=c;return a(),t("div",g,[p(k(_),{class:"md"}),p(s,{nextSectionName:"Histograms of the degree distribution",nextRoute:"/complexSystem/random-graph-models/histograms-of-the-degree-distribution",previousSectionName:"Watts-Strogatz model : Small world network",previousRoute:"/complexSystem/random-graph-models/watts-strogatz-model-small-world-network"})])}}});export{v as default};

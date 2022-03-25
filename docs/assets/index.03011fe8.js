import{_ as c}from"./ButtonSection.d2110d16.js";import{C as u,d as a,e as p,k as l,l as r,i as t,u as k}from"./vendor.c6d6bfe0.js";import"./app.19bd1e91.js";const i={class:"prose prose-sm m-auto text-left"},d=l(`<h1>Watts-Strogatz model : Small world network</h1><p>The Watts\u2013Strogatz model produces graphs with small-world properties.</p><p>During the implementation of this algorithm the first version created completed the task efficiently but was very slow (multiple minutes for n=1000) due to the cascade of for loops.</p><p>After rewriting the r code here is implementation that perform well and can produce the required the task quasi instantly.</p><pre class="language-r"><code class="language-r">Watts_Strogatz_opt <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>p<span class="token punctuation">,</span>m<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  igraph <span class="token operator">&lt;-</span> make_ring<span class="token punctuation">(</span>n<span class="token punctuation">,</span> directed <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
  <span class="token comment">## End step1</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>m<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> n<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> add_edges<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> c<span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">+</span>j<span class="token punctuation">)</span><span class="token percent-operator operator">%%</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">## End step2</span>
  nb_tri <span class="token operator">&lt;-</span> n<span class="token operator">*</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  vect_rand <span class="token operator">&lt;-</span> runif<span class="token punctuation">(</span>nb_tri <span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> p
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_tri<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>vect_rand<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_rand<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      vect_rand<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  sp <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span> nrow <span class="token operator">=</span> n<span class="token punctuation">,</span> ncol <span class="token operator">=</span> n<span class="token punctuation">)</span>
  sp<span class="token punctuation">[</span>lower.tri<span class="token punctuation">(</span>sp<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> vect_rand
  sp <span class="token operator">&lt;-</span> t<span class="token punctuation">(</span>sp<span class="token punctuation">)</span>
  sp<span class="token punctuation">[</span>lower.tri<span class="token punctuation">(</span>sp<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> vect_rand
  diag<span class="token punctuation">(</span>sp<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>

  adj_mat <span class="token operator">&lt;-</span>  as_adjacency_matrix<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>type <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">&quot;both&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  res_mat <span class="token operator">&lt;-</span> adj_mat<span class="token operator">*</span>sp
  igraph <span class="token operator">&lt;-</span> graph_from_adjacency_matrix<span class="token punctuation">(</span>res_mat<span class="token punctuation">,</span>mode <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">&quot;undirected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">## End Step 3 (remouving edges)</span>

  act_size <span class="token operator">&lt;-</span> gsize<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  aim_size <span class="token operator">&lt;-</span> n<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span>m<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  nb_edges_to_add <span class="token operator">&lt;-</span> aim_size <span class="token operator">-</span> act_size
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_edges_to_add<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    edge_added <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>edge_added <span class="token operator">==</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      proposal <span class="token operator">&lt;-</span> floor<span class="token punctuation">(</span>runif<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>min <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> max <span class="token operator">=</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>are_adjacent<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> proposal<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> proposal<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">FALSE</span> <span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span> proposal<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> proposal<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        igraph <span class="token operator">&lt;-</span> add_edges<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> c<span class="token punctuation">(</span> proposal<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> proposal<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>  <span class="token punctuation">)</span>
        edge_added <span class="token operator">&lt;-</span> <span class="token boolean">TRUE</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>
</code></pre>`,5),m=[d],_={setup(o,{expose:n}){return n({frontmatter:{meta:[]}}),u({meta:[]}),(h,b)=>(a(),p("div",i,m))}},g={class:"allContent text-center"},S=r({setup(o){return(n,e)=>{const s=c;return a(),p("div",g,[t(k(_),{class:"md"}),t(s,{nextSectionName:"Graph scale free",nextRoute:"/complexSystem/random-graph-models/graph-scale-free",previousSectionName:"Erdos-Renyi model",previousRoute:"/complexSystem/random-graph-models/erdos-renyi-model"})])}}});export{S as default};

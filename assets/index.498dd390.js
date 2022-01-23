import{_ as l}from"./ButtonSection.35b389eb.js";import{A as k,o as p,b as o,e as n,f as s,g as i,h as r,d as e,l as m}from"./vendor.81acebaf.js";import{_ as h}from"./app.2b61ab5a.js";const _={class:"prose prose-sm m-auto text-left"},g=n("h1",null,"Influenceing scenarios",-1),d=n("p",null,[s("With a scale free graph of 501 nodes (to avoid Deuce), "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"k"),n("mo",null,"="),n("mn",null,"3")]),n("annotation",{encoding:"application/x-tex"},"k = 3")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"3")])])])]),s(", "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"m"),n("mo",null,"="),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"m = 2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"2")])])])]),s(", and for simulation of "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0.01")]),n("annotation",{encoding:"application/x-tex"},"0.01")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0.01")])])])]),s(" noise and "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"t"),n("mi",null,"i"),n("mi",null,"m"),n("mi",null,"e"),n("mo",null,"="),n("mn",null,"3000")]),n("annotation",{encoding:"application/x-tex"},"time = 3000")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6595em"}}),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"im"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"3000")])])])]),s(", we will try to influence the vote. We will work in Jerry\u2019s Team.")],-1),v=i(`<h3><strong>Scenario A</strong></h3><p>We have the possibility convince 10 people to vote for Jerry. We will use the metrics to identify them.</p><p>We want to have:</p><ul><li>Node connected to the giant component.</li><li>Node with a small length to all the others nodes.</li><li>Node with high closeness centrality.</li></ul><p>Functions n_length, reacheable_node and how_closness are used to identify nodes with a high influence.</p><p>On the other side we must take in consideration the limitation on the sum of degree of 100. First, we use the how_bad_is_degree function. Then the function high_cut also play a role to eliminate the nodes with highest degree with a nonlinear function.</p><p>All those parameters can be tuned by hand with coefficient to improve the ranking.</p><p>Then to ensure that we do respect the degree condition we cycle down the top result until the condition is respected.</p><p>Here is the code to do the selection of node to influence:</p><pre class="language-r"><code class="language-r">selection <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vect_len        <span class="token operator">&lt;-</span> n_length<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_reach      <span class="token operator">&lt;-</span> reacheable_node<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_close      <span class="token operator">&lt;-</span> how_closness<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_bad_degree <span class="token operator">&lt;-</span> how_bad_is_degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>

  coef_len   <span class="token operator">&lt;-</span> <span class="token number">3</span>
  coef_reach <span class="token operator">&lt;-</span> <span class="token number">5</span>
  coef_close <span class="token operator">&lt;-</span> <span class="token number">1.5</span>

  coef_bad_degree <span class="token operator">&lt;-</span> <span class="token number">1</span>
  alpha <span class="token operator">&lt;-</span> <span class="token number">0.013</span>

  vect_rank_positif <span class="token operator">&lt;-</span> vect_len<span class="token operator">*</span>coef_len <span class="token operator">+</span> vect_reach<span class="token operator">*</span>coef_reach <span class="token operator">+</span> vect_close<span class="token operator">*</span>coef_close

  vect_rank_negatif <span class="token operator">&lt;-</span> vect_bad_degree<span class="token operator">*</span>coef_bad_degree
  vect_rank_negatif <span class="token operator">&lt;-</span> high_cut<span class="token punctuation">(</span>vect_rank_negatif<span class="token punctuation">,</span>alpha<span class="token punctuation">)</span>
  print<span class="token punctuation">(</span>vect_rank_negatif<span class="token punctuation">)</span>
  print<span class="token punctuation">(</span>degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>

  vect_rank_tot <span class="token operator">&lt;-</span> vect_rank_positif <span class="token operator">-</span> vect_rank_negatif

  nb_elect <span class="token operator">&lt;-</span> <span class="token number">10</span>
  pool <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_elect<span class="token punctuation">)</span>
  ref <span class="token operator">&lt;-</span> <span class="token number">1</span>
  condition_is_ok <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>condition_is_ok <span class="token operator">==</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    sorted <span class="token operator">&lt;-</span> sort.int<span class="token punctuation">(</span>vect_rank_tot<span class="token punctuation">,</span>decreasing <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span> index.return <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> ref <span class="token operator">:</span> <span class="token punctuation">(</span>ref<span class="token operator">+</span>nb_elect<span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      pool<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">-</span>ref<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> sorted<span class="token operator">$</span>ix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 
    <span class="token punctuation">}</span>
    vect_deg <span class="token operator">&lt;-</span> degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
    somm <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token comment">#print( vect_deg[pool] )</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>length<span class="token punctuation">(</span>pool<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

      somm <span class="token operator">&lt;-</span> somm <span class="token operator">+</span> vect_deg<span class="token punctuation">[</span>pool<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">&gt;</span> somm<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      cat<span class="token punctuation">(</span><span class="token string">&quot;Number of rank down to respect condition=&quot;</span><span class="token punctuation">,</span>ref<span class="token punctuation">,</span><span class="token string">&quot; (SUM of degree=&quot;</span><span class="token punctuation">,</span>somm<span class="token punctuation">,</span><span class="token string">&quot;)\\n&quot;</span><span class="token punctuation">)</span>
      condition_is_ok <span class="token operator">&lt;-</span> <span class="token boolean">TRUE</span>
    <span class="token punctuation">}</span>
    ref <span class="token operator">&lt;-</span> ref <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  pool
<span class="token punctuation">}</span>

high_cut <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>inputvect<span class="token punctuation">,</span>alpha<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  outputvect <span class="token operator">&lt;-</span> inputvect <span class="token operator">+</span> alpha<span class="token operator">*</span>inputvect<span class="token operator">*</span>inputvect
<span class="token punctuation">}</span>

how_closness <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  tryCatch<span class="token punctuation">(</span> vect_close <span class="token operator">&lt;-</span> closeness<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>normalized <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> warning<span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> print<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> min<span class="token punctuation">(</span>vect_close<span class="token punctuation">)</span> <span class="token operator">==</span> max<span class="token punctuation">(</span>vect_close<span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    print<span class="token punctuation">(</span><span class="token string">&quot;May have pb w: how_closness&quot;</span><span class="token punctuation">)</span>
    return<span class="token punctuation">(</span> c<span class="token punctuation">(</span>rep<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  n_comp_min <span class="token operator">&lt;-</span> min<span class="token punctuation">(</span>vect_close<span class="token punctuation">)</span>
  vect_close <span class="token operator">&lt;-</span> vect_close<span class="token operator">-</span>n_comp_min
  n_comp_max <span class="token operator">&lt;-</span> max<span class="token punctuation">(</span>vect_close<span class="token punctuation">)</span>
  vect_close <span class="token operator">&lt;-</span> vect_close<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>n_comp_max
  vect_close
<span class="token punctuation">}</span>

how_bad_is_degree <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vect_deg <span class="token operator">&lt;-</span> degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span> 
  <span class="token keyword">if</span><span class="token punctuation">(</span> min<span class="token punctuation">(</span>vect_deg<span class="token punctuation">)</span> <span class="token operator">==</span> max<span class="token punctuation">(</span>vect_deg<span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    print<span class="token punctuation">(</span><span class="token string">&quot;May have pb w: how_bad_is_degree&quot;</span><span class="token punctuation">)</span>
    return<span class="token punctuation">(</span> c<span class="token punctuation">(</span>rep<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  n_comp_min <span class="token operator">&lt;-</span> min<span class="token punctuation">(</span>vect_deg<span class="token punctuation">)</span>
  vect_deg <span class="token operator">&lt;-</span> vect_deg<span class="token operator">-</span>n_comp_min
  n_comp_max <span class="token operator">&lt;-</span> max<span class="token punctuation">(</span>vect_deg<span class="token punctuation">)</span>
  vect_deg <span class="token operator">&lt;-</span> <span class="token punctuation">(</span>vect_deg<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>n_comp_max<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span>
  vect_deg
<span class="token punctuation">}</span>



reacheable_node <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  Comp <span class="token operator">=</span> clusters<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_reach <span class="token operator">&lt;-</span> Comp<span class="token operator">$</span>csize<span class="token punctuation">[</span>Comp<span class="token operator">$</span>membership<span class="token punctuation">]</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> min<span class="token punctuation">(</span>vect_reach<span class="token punctuation">)</span> <span class="token operator">==</span> max<span class="token punctuation">(</span>vect_reach<span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">#print(&quot;One giant Component&quot;)</span>
    return<span class="token punctuation">(</span> c<span class="token punctuation">(</span>rep<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  n_comp_min <span class="token operator">&lt;-</span> min<span class="token punctuation">(</span>vect_reach<span class="token punctuation">)</span>
  vect_reach <span class="token operator">&lt;-</span> vect_reach<span class="token operator">-</span>n_comp_min
  n_comp_max <span class="token operator">&lt;-</span> max<span class="token punctuation">(</span>vect_reach<span class="token punctuation">)</span>
  vect_reach <span class="token operator">&lt;-</span> vect_reach<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>n_comp_max
  vect_reach
<span class="token punctuation">}</span>


n_length <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  n_length_vect <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_node<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>  nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    bfs_i <span class="token operator">&lt;-</span> bfs<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>i<span class="token punctuation">,</span>
                 unreachable <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
                 dist <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">#print(bfs_i$dist)</span>
    n_length_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> sum<span class="token punctuation">(</span>bfs_i<span class="token operator">$</span>dist<span class="token punctuation">,</span>na.rm <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span><span class="token operator">/</span>nb_node  
  <span class="token punctuation">}</span>
  n_length_max <span class="token operator">&lt;-</span> max<span class="token punctuation">(</span>n_length_vect<span class="token punctuation">)</span>

  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>  nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> n_length_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      n_length_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> n_length_max
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  n_length_min <span class="token operator">&lt;-</span> min<span class="token punctuation">(</span>n_length_vect<span class="token punctuation">)</span>


  n_length_vect <span class="token operator">&lt;-</span> <span class="token punctuation">(</span>n_length_vect<span class="token punctuation">)</span> <span class="token operator">-</span> n_length_min
  n_length_max <span class="token operator">&lt;-</span> max<span class="token punctuation">(</span>n_length_vect<span class="token punctuation">)</span>
  n_length_vect <span class="token operator">&lt;-</span> <span class="token number">100</span> <span class="token operator">-</span> <span class="token punctuation">(</span>n_length_vect<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>n_length_max<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>Then the set node chosen is tested in simulation, with they vote force to 1. To ensure that that our methods is ok we repeat simulation multiple time and observe the result. Below is the code to test the model.</p><pre class="language-r"><code class="language-r">initVoteBernoulli <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>sway_vector<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  nb_sway <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>sway_vector<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> nb_sway <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> sway_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>

vote <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">,</span>sway_vector<span class="token punctuation">)</span>
<span class="token punctuation">{</span>

  f_p <span class="token operator">&lt;-</span> vote_probability<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
  vc <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vc<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> f_p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  nb_sway <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>sway_vector<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_sway <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> sway_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>
declare_winner <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  end_vote_vect <span class="token operator">&lt;-</span> mat<span class="token punctuation">[</span><span class="token punctuation">,</span>ncol<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">]</span>
  out <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span> sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0.5</span>  <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    cat<span class="token punctuation">(</span><span class="token string">&quot;Deuce\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    cat<span class="token punctuation">(</span><span class="token string">&quot;Jerry win with &quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
    out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    cat<span class="token punctuation">(</span><span class="token string">&quot;Tom win with &quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
    out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token punctuation">(</span>sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">)</span> 
  out
<span class="token punctuation">}</span>


simulation <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>time<span class="token punctuation">,</span>sway_vector<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  N_vect <span class="token operator">&lt;-</span> Nb_neighbors_vect<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>

  igraph <span class="token operator">&lt;-</span> initVoteBernoulli<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>sway_vector<span class="token punctuation">)</span>
  mat <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token operator">*</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span>
  dim<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">,</span>time<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    mat<span class="token punctuation">[</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> getOneVote<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
    igraph <span class="token operator">&lt;-</span> vote<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">,</span>sway_vector<span class="token punctuation">)</span>
    <span class="token comment">#cat(i,&quot; over &quot;,time,&quot;\\n&quot;)</span>
  <span class="token punctuation">}</span>
  win <span class="token operator">&lt;-</span> declare_winner<span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

n <span class="token operator">&lt;-</span> <span class="token number">501</span>
k <span class="token operator">&lt;-</span> <span class="token number">3</span>
q <span class="token operator">&lt;-</span> <span class="token number">2</span>

igraph <span class="token operator">&lt;-</span> scale_free<span class="token punctuation">(</span>n<span class="token punctuation">,</span>k<span class="token punctuation">,</span>q<span class="token punctuation">)</span>
sway_vector <span class="token operator">&lt;-</span> selection<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>

noise <span class="token operator">&lt;-</span> <span class="token number">0.01</span>
time <span class="token operator">&lt;-</span> <span class="token number">3000</span>

out <span class="token operator">&lt;-</span>  <span class="token number">0</span>
nb_simu <span class="token operator">&lt;-</span> <span class="token number">100</span>
winner <span class="token operator">&lt;-</span> <span class="token number">0</span>
score <span class="token operator">&lt;-</span> <span class="token number">0</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_simu <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  out <span class="token operator">&lt;-</span> simulation<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>time<span class="token punctuation">,</span>sway_vector<span class="token punctuation">)</span>
  winner <span class="token operator">&lt;-</span> winner <span class="token operator">+</span> out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  score <span class="token operator">&lt;-</span> score <span class="token operator">+</span> out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
  cat<span class="token punctuation">(</span><span class="token string">&quot;Progress:&quot;</span><span class="token punctuation">,</span>i<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>nb_simu<span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;TOM win in &quot;</span><span class="token punctuation">,</span>winner<span class="token operator">/</span>nb_simu<span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;Avreage score is&quot;</span><span class="token punctuation">,</span>score<span class="token operator">/</span>nb_simu<span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
</code></pre><p>Unfortunaly the results did not seem to be influenced by our method.</p><h3>Introducting Zealots</h3><p>Zealots are people that can\u2019t change of opinion. To add them into our model we first define on witch node they are:</p><pre class="language-r"><code class="language-r">zelot <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> floor<span class="token punctuation">(</span><span class="token number">0.4</span><span class="token operator">*</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  nb_node
  vect_zelot <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0.8</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_zelot<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.2</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_zelot<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      vect_zelot<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  vect_zelot
<span class="token punctuation">}</span>

initZelot <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>zelot_vector<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> zelot_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>zelot_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>
</code></pre><p>The voting function is adapted:</p><pre class="language-r"><code class="language-r">initVoteBernoulli <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>sway_vector<span class="token punctuation">,</span>zelot_vector<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> zelot_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>zelot_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  nb_sway <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>sway_vector<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> nb_sway <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> sway_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>

vote <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">,</span>sway_vector<span class="token punctuation">,</span>zelot_vector<span class="token punctuation">)</span>
<span class="token punctuation">{</span>

  f_p <span class="token operator">&lt;-</span> vote_probability<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
  vc <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vc<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> f_p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> zelot_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>zelot_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  nb_sway <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>sway_vector<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_sway <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span> sway_vector<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>
</code></pre><p>Then as for the others parameters we remove them from the ranking with the following trick:</p><pre class="language-r"><code class="language-r">is_zelot <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_zelot <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i  <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_zelot<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">99999999</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;zelot&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_zelot<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  vect_zelot
<span class="token punctuation">}</span>

selection <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vect_len        <span class="token operator">&lt;-</span> n_length<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_reach      <span class="token operator">&lt;-</span> reacheable_node<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_close      <span class="token operator">&lt;-</span> how_closness<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_bad_degree <span class="token operator">&lt;-</span> how_bad_is_degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect_zelot      <span class="token operator">&lt;-</span> is_zelot<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>

  coef_len   <span class="token operator">&lt;-</span> <span class="token number">3</span>
  coef_reach <span class="token operator">&lt;-</span> <span class="token number">5</span>
  coef_close <span class="token operator">&lt;-</span> <span class="token number">1.5</span>

  coef_bad_degree <span class="token operator">&lt;-</span> <span class="token number">1</span>
  alpha <span class="token operator">&lt;-</span> <span class="token number">0.013</span>

  vect_rank_positif <span class="token operator">&lt;-</span> vect_len<span class="token operator">*</span>coef_len <span class="token operator">+</span> vect_reach<span class="token operator">*</span>coef_reach <span class="token operator">+</span> vect_close<span class="token operator">*</span>coef_close

  vect_rank_negatif <span class="token operator">&lt;-</span> vect_bad_degree<span class="token operator">*</span>coef_bad_degree <span class="token operator">+</span> vect_zelot
  vect_rank_negatif <span class="token operator">&lt;-</span> high_cut<span class="token punctuation">(</span>vect_rank_negatif<span class="token punctuation">,</span>alpha<span class="token punctuation">)</span>
  vect_rank_tot <span class="token operator">&lt;-</span> vect_rank_positif <span class="token operator">-</span> vect_rank_negatif

  print<span class="token punctuation">(</span>vect_rank_tot<span class="token punctuation">)</span>

  nb_elect <span class="token operator">&lt;-</span> <span class="token number">10</span>
  pool <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_elect<span class="token punctuation">)</span>
  ref <span class="token operator">&lt;-</span> <span class="token number">1</span>
  condition_is_ok <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>condition_is_ok <span class="token operator">==</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    sorted <span class="token operator">&lt;-</span> sort.int<span class="token punctuation">(</span>vect_rank_tot<span class="token punctuation">,</span>decreasing <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span> index.return <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> ref <span class="token operator">:</span> <span class="token punctuation">(</span>ref<span class="token operator">+</span>nb_elect<span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      pool<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">-</span>ref<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> sorted<span class="token operator">$</span>ix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 
    <span class="token punctuation">}</span>
    vect_deg <span class="token operator">&lt;-</span> degree<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
    somm <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token comment">#print( vect_deg[pool] )</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>length<span class="token punctuation">(</span>pool<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

      somm <span class="token operator">&lt;-</span> somm <span class="token operator">+</span> vect_deg<span class="token punctuation">[</span>pool<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">&gt;</span> somm<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      cat<span class="token punctuation">(</span><span class="token string">&quot;Number of rank down to respect condition=&quot;</span><span class="token punctuation">,</span>ref<span class="token punctuation">,</span><span class="token string">&quot; (SUM of degree=&quot;</span><span class="token punctuation">,</span>somm<span class="token punctuation">,</span><span class="token string">&quot;)\\n&quot;</span><span class="token punctuation">)</span>
      condition_is_ok <span class="token operator">&lt;-</span> <span class="token boolean">TRUE</span>
    <span class="token punctuation">}</span>
    ref <span class="token operator">&lt;-</span> ref <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  pool
<span class="token punctuation">}</span>
</code></pre><p>Then to run the simulation do the following call in the next order:</p><pre class="language-r"><code class="language-r">n <span class="token operator">&lt;-</span> <span class="token number">501</span>
k <span class="token operator">&lt;-</span> <span class="token number">3</span>
q <span class="token operator">&lt;-</span> <span class="token number">2</span>

igraph <span class="token operator">&lt;-</span> scale_free<span class="token punctuation">(</span>n<span class="token punctuation">,</span>k<span class="token punctuation">,</span>q<span class="token punctuation">)</span>
zelot_vector <span class="token operator">&lt;-</span> zelot<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
igraph <span class="token operator">&lt;-</span> initZelot<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>zelot_vector<span class="token punctuation">)</span>
sway_vector <span class="token operator">&lt;-</span> selection<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>


noise <span class="token operator">&lt;-</span> <span class="token number">0.001</span>
time <span class="token operator">&lt;-</span> <span class="token number">3000</span>

out <span class="token operator">&lt;-</span>  <span class="token number">0</span>
nb_simu <span class="token operator">&lt;-</span> <span class="token number">3</span>
winner <span class="token operator">&lt;-</span> <span class="token number">0</span>
score <span class="token operator">&lt;-</span> <span class="token number">0</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_simu <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  out <span class="token operator">&lt;-</span> simulation<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>time<span class="token punctuation">,</span>sway_vector<span class="token punctuation">,</span>zelot_vector<span class="token punctuation">)</span>
  winner <span class="token operator">&lt;-</span> winner <span class="token operator">+</span> out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  score <span class="token operator">&lt;-</span> score <span class="token operator">+</span> out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
  cat<span class="token punctuation">(</span><span class="token string">&quot;Progress:&quot;</span><span class="token punctuation">,</span>i<span class="token operator">*</span><span class="token number">100</span><span class="token operator">/</span>nb_simu<span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;TOM win in &quot;</span><span class="token punctuation">,</span>winner<span class="token operator">/</span>nb_simu<span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;Avreage score is&quot;</span><span class="token punctuation">,</span>score<span class="token operator">/</span>nb_simu<span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
</code></pre><p>With the zealot the effect of the 10 influenced nodes seem increassed.</p><h3>Effect of remouving node</h3><p>As for the nodes, we can influence the network by changing its topology. However, finding the edges to remove might be more complicated that for nodes in the voter model. Because my proposition of node influencing did not work well, and limitation in time to execute this function: I will not implement it.</p>`,25),b=[g,d,v],w={setup(c,{expose:a}){return a({frontmatter:{description:"\u201CIf facts don\u2019t fit the theory, change the facts.\u201D\u2013 Albert Einstein",meta:[{property:"og:description",content:"\u201CIf facts don\u2019t fit the theory, change the facts.\u201D\u2013 Albert Einstein"},{name:"description",content:"\u201CIf facts don\u2019t fit the theory, change the facts.\u201D\u2013 Albert Einstein"}]}}),k({meta:[{property:"og:description",content:"\u201CIf facts don\u2019t fit the theory, change the facts.\u201D\u2013 Albert Einstein"},{name:"description",content:"\u201CIf facts don\u2019t fit the theory, change the facts.\u201D\u2013 Albert Einstein"}]}),(q,x)=>(p(),o("div",_,b))}};const f={class:"allContent text-center"},y=r({setup(c){return(a,u)=>{const t=l;return p(),o("div",f,[e(m(w)),e(t,{nextSectionName:"Epidemic models",nextRoute:"/complexSystem/epidemicModels",previousSectionName:"Representation",previousRoute:"/complexSystem/voterModel/representation"})])}}});var M=h(y,[["__scopeId","data-v-ca0933f4"]]);export{M as default};

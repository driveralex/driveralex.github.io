import{_ as l}from"./ButtonSection.b76f77df.js";import{A as i,o as t,b as p,e as n,g as o,f as k,d as r,i as e,u as m}from"./vendor.2aa3e7d8.js";import"./app.0ff1674a.js";const d={class:"prose prose-sm m-auto text-left"},v=n("h1",null,"Representation",-1),h=n("p",null,"The model described is a simple agent-based on an undirected graph. Each node has only one attribute that represente his vote.",-1),g=n("p",null,[o("First we initialise the network with a Bernoulli\u2019s law of parameter "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0.5")]),n("annotation",{encoding:"application/x-tex"},"0.5")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0.5")])])])]),o(" :")],-1),_=k(`<pre class="language-r"><code class="language-r">initVoteBernoulli <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
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
  igraph
<span class="token punctuation">}</span>
</code></pre><p>Then each node is influence by his neigbors. Here is fast implementation that work close to adjency matrix :</p><pre class="language-r"><code class="language-r">Nb_neighbors_vect <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  mat <span class="token operator">&lt;-</span> as_adjacency_matrix<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  len <span class="token operator">&lt;-</span> nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
  N_vect <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> len <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    res <span class="token operator">&lt;-</span> sum<span class="token punctuation">(</span>mat<span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      N_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> sum<span class="token punctuation">(</span>mat<span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      N_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
      print<span class="token punctuation">(</span><span class="token string">&quot;BUG - Nb_neighbors_vect&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  N_vect
<span class="token punctuation">}</span>

probability_vect <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  adj_mat <span class="token operator">&lt;-</span>  as_adjacency_matrix<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> sparse <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
  vect_vote <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;vote&quot;</span><span class="token punctuation">)</span>
  prob_vect <span class="token operator">&lt;-</span> adj_mat<span class="token percent-operator operator">%*%</span>vect_vote
  out <span class="token operator">&lt;-</span> prob_vect<span class="token operator">/</span>N_vect
  out
<span class="token punctuation">}</span>

getOneVote <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vc <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>vc<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> vc<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
  vect
<span class="token punctuation">}</span>

vote_probability <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  p_v <span class="token operator">&lt;-</span> probability_vect<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
  len <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>p_v<span class="token punctuation">)</span>
  f_p_opti <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span>
  f_p_opti <span class="token operator">&lt;-</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">*</span>noise<span class="token punctuation">)</span><span class="token operator">*</span>p_v <span class="token operator">+</span> noise
  f_p_opti
<span class="token punctuation">}</span>

vote <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
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
  igraph
<span class="token punctuation">}</span>
declare_winner <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  end_vote_vect <span class="token operator">&lt;-</span> mat<span class="token punctuation">[</span><span class="token punctuation">,</span>ncol<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">]</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span> sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0.5</span>  <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    cat<span class="token punctuation">(</span><span class="token string">&quot;Deuce\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    cat<span class="token punctuation">(</span><span class="token string">&quot;Jerry win\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> sum<span class="token punctuation">(</span>end_vote_vect<span class="token punctuation">)</span><span class="token operator">/</span>nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    cat<span class="token punctuation">(</span><span class="token string">&quot;Tom win\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

simulation <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>time<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  N_vect <span class="token operator">&lt;-</span> Nb_neighbors_vect<span class="token punctuation">(</span>ig<span class="token punctuation">)</span>

  igraph <span class="token operator">&lt;-</span> initVoteBernoulli<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  mat <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token operator">*</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span>
  dim<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">,</span>time<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    mat<span class="token punctuation">[</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> getOneVote<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
    igraph <span class="token operator">&lt;-</span> vote<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>N_vect<span class="token punctuation">)</span>
    cat<span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token string">&quot; over &quot;</span><span class="token punctuation">,</span>time<span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  declare_winner<span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
  mat
<span class="token punctuation">}</span>
</code></pre><p>Then you just have to give the network of your choice to the simulation and you have completed the matrix that represent the evolution of votes.</p><p>Before the development of this implementation I have built another model, which is way less time-efficient. Here is the code :</p><pre class="language-r"><code class="language-r">probability_node <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> node<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  adj_lst_node <span class="token operator">&lt;-</span> as_adj_list<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> length<span class="token punctuation">(</span> adj_lst_node <span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    return<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span>
  sum <span class="token operator">&lt;-</span> <span class="token number">0</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> length<span class="token punctuation">(</span> adj_lst_node <span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    sum <span class="token operator">&lt;-</span> sum <span class="token operator">+</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span>    adj_lst_node<span class="token punctuation">[</span>i<span class="token punctuation">]</span>    <span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
  out <span class="token operator">&lt;-</span> sum<span class="token operator">/</span> length<span class="token punctuation">(</span> adj_lst_node <span class="token punctuation">)</span>
  out
<span class="token punctuation">}</span>

probability_vect <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vc <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>vc<span class="token punctuation">)</span>
  sum <span class="token operator">&lt;-</span> <span class="token number">0</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> vc <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    sum <span class="token operator">&lt;-</span> sum <span class="token operator">+</span> probability_node<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
    vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> probability_node<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  vect
<span class="token punctuation">}</span>

probability_tot <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vect <span class="token operator">&lt;-</span> probability_vect<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  out <span class="token operator">&lt;-</span> sum<span class="token punctuation">(</span>vect<span class="token punctuation">)</span> <span class="token operator">/</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

getOneVote <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  vc <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  vect <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>vc<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> vc<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;vote&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
  vect
<span class="token punctuation">}</span>

vote_probability <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  p_v <span class="token operator">&lt;-</span> probability_vect<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  len <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>p_v<span class="token punctuation">)</span>
  f_p <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> len  <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    f_p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">*</span>noise<span class="token punctuation">)</span><span class="token operator">*</span>p_v<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> noise
  <span class="token punctuation">}</span>
  f_p
<span class="token punctuation">}</span>

vote <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  start_time <span class="token operator">&lt;-</span> Sys.time<span class="token punctuation">(</span><span class="token punctuation">)</span>
  end_time <span class="token operator">&lt;-</span> Sys.time<span class="token punctuation">(</span><span class="token punctuation">)</span>
  f_p <span class="token operator">&lt;-</span> vote_probability<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">)</span>
  end_time <span class="token operator">&lt;-</span> Sys.time<span class="token punctuation">(</span><span class="token punctuation">)</span>
  exec_time <span class="token operator">&lt;-</span> <span class="token punctuation">(</span>end_time<span class="token operator">-</span>start_time<span class="token punctuation">)</span>
  print<span class="token punctuation">(</span>exec_time<span class="token punctuation">)</span>
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
  igraph
<span class="token punctuation">}</span>

simulation <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">,</span>time<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  igraph <span class="token operator">&lt;-</span> initVoteBernoulli<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  mat <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token operator">*</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span>
  dim<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">,</span>time<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    mat<span class="token punctuation">[</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> getOneVote<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
    igraph <span class="token operator">&lt;-</span> vote<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>noise<span class="token punctuation">)</span>
    cat<span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token string">&quot; over &quot;</span><span class="token punctuation">,</span>time<span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  mat
<span class="token punctuation">}</span>
</code></pre><p>Notice the difference introduce by working with matrix in comparison with for loops.</p><p>The evolution of the voting rate can be represented via the output matrix; however, this data still needs to be simplified to be more human readable. The role of the declare winner function is to inform us about the winner if the vote is done at the end of the simulation.</p>`,8),b=[v,h,g,_],y={setup(c,{expose:s}){return s({frontmatter:{meta:[]}}),i({meta:[]}),(w,q)=>(t(),p("div",d,b))}};const f={class:"allContent text-center"},S=r({setup(c){return(s,u)=>{const a=l;return t(),p("div",f,[e(m(y)),e(a,{nextSectionName:"Influenceing scenarios",nextRoute:"/complexSystem/voterModel/influenceingScenarios",previousSectionName:"Voter model",previousRoute:"/complexSystem/voterModel/"})])}}});export{S as default};

import{_ as c}from"./ButtonSection.7715d9cf.js";import{C as u,d as a,e as t,k as l,l as i,i as p,u as k}from"./vendor.c6d6bfe0.js";import"./app.48e9e613.js";var r="/assets/limitation.8d6609ee.png";const d={class:"prose prose-sm m-auto text-left"},m=l(`<h1>Effect of confine people</h1><p>Now we will add rule to limit social links of people. We are trying to simulate the effect of confinement or curfew. The modulization we use is a reduction of the number of edges under certain conditions. The following code simulate this behaving.</p><pre class="language-r"><code class="language-r">library<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>

Erdos_Renyi_optimized <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_tri <span class="token operator">&lt;-</span> n<span class="token operator">*</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  mat <span class="token operator">&lt;-</span> diag<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>nrow <span class="token operator">=</span> n<span class="token punctuation">,</span> ncol <span class="token operator">=</span> n<span class="token punctuation">)</span>
  vect_rand <span class="token operator">&lt;-</span> runif<span class="token punctuation">(</span>nb_tri <span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> p
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_tri<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>vect_rand<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_rand<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      vect_rand<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  mat<span class="token punctuation">[</span>lower.tri<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> vect_rand
  mat <span class="token operator">&lt;-</span> t<span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
  mat<span class="token punctuation">[</span>lower.tri<span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> vect_rand
  igraph <span class="token operator">&lt;-</span> graph_from_adjacency_matrix<span class="token punctuation">(</span>mat<span class="token punctuation">,</span>mode <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">&quot;undirected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  igraph
<span class="token punctuation">}</span>

plot_epidemic_curves <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mat_res<span class="token punctuation">,</span>time<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  plot<span class="token punctuation">(</span> x <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">:</span>time<span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> mat_res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>xlab<span class="token operator">=</span><span class="token string">&quot;days&quot;</span><span class="token punctuation">,</span>ylab<span class="token operator">=</span><span class="token string">&quot;Percentage of people&quot;</span><span class="token punctuation">,</span>type<span class="token operator">=</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>col<span class="token operator">=</span><span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span> ylim<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>main<span class="token operator">=</span><span class="token string">&quot;Evolution of SIR model epidemic&quot;</span><span class="token punctuation">)</span>
  lines<span class="token punctuation">(</span>x<span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">:</span>time<span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> mat_res<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>type<span class="token operator">=</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>col<span class="token operator">=</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span>
  lines<span class="token punctuation">(</span>x<span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">:</span>time<span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> mat_res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>type<span class="token operator">=</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>col<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span>
  legend<span class="token punctuation">(</span> <span class="token punctuation">(</span> time<span class="token operator">-</span><span class="token punctuation">(</span>time<span class="token operator">*</span><span class="token number">0.15</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> legend<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token string">&quot;Suceptible&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Infected&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Recovered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          col<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lty<span class="token operator">=</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> cex<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

epidemic_plot <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>mainstr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    node_status <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> node_status <span class="token operator">==</span> <span class="token string">&quot;i&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> rgb<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node_status <span class="token operator">==</span> <span class="token string">&quot;s&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> rgb<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>node_status <span class="token operator">==</span> <span class="token string">&quot;r&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> rgb<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
      print<span class="token punctuation">(</span><span class="token string">&quot;BUG PLOT attribute&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    node_status <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span> node_status <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> node_status  <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> node_status <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;R&quot;</span>  <span class="token punctuation">)</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> rgb<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> <span class="token string">&quot;label&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;S&quot;</span>  <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  plot<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> main <span class="token operator">=</span> mainstr <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

is_unique <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>vect<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    isunique <span class="token operator">&lt;-</span> <span class="token boolean">TRUE</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> length<span class="token punctuation">(</span>vect<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        iterator <span class="token operator">&lt;-</span> vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>length<span class="token punctuation">(</span>vect<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">!=</span> i<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>vect<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    isunique <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    isunique
<span class="token punctuation">}</span>

<span class="token comment"># The way we ensure uniqueness may be improuved with faster (and nicer) algorithm</span>
ensure_unique <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>vect<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>is_unique<span class="token punctuation">(</span>vect<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> length<span class="token punctuation">(</span>vect<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            iterator <span class="token operator">&lt;-</span> vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>length<span class="token punctuation">(</span>vect<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">!=</span> i<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>iterator <span class="token operator">==</span> vect<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        vect<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> floor<span class="token punctuation">(</span>runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>min<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>max<span class="token operator">=</span>length<span class="token punctuation">(</span>vect<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    vect
<span class="token punctuation">}</span>

init_epidemic <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>n_0<span class="token punctuation">,</span>n_d<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  Infected_vect <span class="token operator">&lt;-</span> floor<span class="token punctuation">(</span>runif<span class="token punctuation">(</span>n_0<span class="token punctuation">,</span>min<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>max<span class="token operator">=</span>nb_node<span class="token punctuation">)</span><span class="token punctuation">)</span>
  Infected_vect <span class="token operator">&lt;-</span> ensure_unique<span class="token punctuation">(</span>Infected_vect<span class="token punctuation">)</span>

  igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span>
  igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span> n_0 <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> Infected_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>
    igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> Infected_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">,</span>value<span class="token operator">=</span> n_d <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  stat_days<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  igraph
<span class="token punctuation">}</span>

infected_heal <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    node_time_status <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> node_time_status <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span> <span class="token punctuation">(</span>node_time_status <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> node_time_status <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>

transmission <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  igraph <span class="token operator">&lt;-</span> infected_heal<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  adj_mat <span class="token operator">&lt;-</span> as_adjacency_matrix<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span> type <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">&quot;both&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  vect_i <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_node<span class="token punctuation">)</span>
  vect_i_opo <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_node<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    node_status <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> node_status <span class="token operator">==</span> <span class="token string">&quot;i&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_i<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
      vect_i_opo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      vect_i<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
      vect_i_opo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  vect_r_op <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_node<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    node_status <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> node_status <span class="token operator">==</span> <span class="token string">&quot;r&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      vect_r_op<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      vect_r_op<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  neigbour_infected_vect <span class="token operator">&lt;-</span> adj_mat<span class="token percent-operator operator">%*%</span>vect_i
  try_infect <span class="token operator">&lt;-</span> as.vector<span class="token punctuation">(</span>neigbour_infected_vect<span class="token punctuation">)</span><span class="token operator">*</span>vect_r_op<span class="token operator">*</span>vect_i_opo
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>try_infect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>try_infect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> p_epidemic<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>
          igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span> n_d <span class="token punctuation">)</span>
          <span class="token comment">#cat(&quot;We inflect node N\xC2\xB0&quot;,i,&quot;\\n&quot;)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>try_infect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>try_infect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>runif<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> p_epidemic<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>
          igraph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span> n_d <span class="token punctuation">)</span>
          <span class="token comment">#cat(&quot;We inflect node N\xC2\xB0&quot;,i,&quot;\\n&quot;)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  igraph
<span class="token punctuation">}</span>

stat_days <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  tot_i <span class="token operator">&lt;-</span> <span class="token number">0</span>
  tot_s <span class="token operator">&lt;-</span> <span class="token number">0</span>
  tot_r <span class="token operator">&lt;-</span> <span class="token number">0</span>
  res <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    epi <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>epi <span class="token operator">==</span> <span class="token string">&quot;i&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      tot_i <span class="token operator">&lt;-</span> tot_i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>epi <span class="token operator">==</span> <span class="token string">&quot;s&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      tot_s <span class="token operator">&lt;-</span> tot_s <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>epi <span class="token operator">==</span> <span class="token string">&quot;r&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      tot_r <span class="token operator">&lt;-</span> tot_r <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> tot_i
  res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> tot_s
  res<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> tot_r
  cat<span class="token punctuation">(</span><span class="token string">&quot;Sucesptible: &quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&quot; Infected: &quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&quot;Recoverd: &quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
  res
<span class="token punctuation">}</span>

simulation <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">,</span>time<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restriction_percentages<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  cat<span class="token punctuation">(</span><span class="token string">&quot;Begin simulation \\n&quot;</span><span class="token punctuation">)</span>
  init_graph <span class="token operator">&lt;-</span> igraph
  mat_res <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>ncol <span class="token operator">=</span> time<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>nrow <span class="token operator">=</span> <span class="token number">3</span> <span class="token punctuation">)</span>
  mat_res<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&lt;-</span> stat_days<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  restrictions <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>time <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    strday <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token string">&quot;Day N\xB0&quot;</span><span class="token punctuation">,</span>toString<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
    cat<span class="token punctuation">(</span>strday<span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
    igraph <span class="token operator">&lt;-</span> transmission<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>restrictions <span class="token operator">==</span> <span class="token boolean">FALSE</span> <span class="token operator">&amp;&amp;</span> confine_required<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restrictions<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">TRUE</span>  <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      cat<span class="token punctuation">(</span><span class="token string">&quot;Day of limitations implemention\\n&quot;</span><span class="token punctuation">)</span>
      igraph <span class="token operator">&lt;-</span> graph_with_restrictions<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>restriction_percentages<span class="token punctuation">)</span>
      restrictions <span class="token operator">&lt;-</span> <span class="token boolean">TRUE</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>restrictions <span class="token operator">==</span> <span class="token boolean">TRUE</span> <span class="token operator">&amp;&amp;</span> confine_required<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restrictions<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">FALSE</span>  <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      cat<span class="token punctuation">(</span><span class="token string">&quot;Day of UNDO limitations implemention\\n&quot;</span><span class="token punctuation">)</span>
      igraph <span class="token operator">&lt;-</span> undo_graph_with_restrictions<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>init_graph<span class="token punctuation">)</span>
      restrictions <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
    <span class="token punctuation">}</span>
    restrans <span class="token operator">&lt;-</span> stat_days<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
    mat_res<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">]</span> <span class="token operator">&lt;-</span> restrans
  <span class="token punctuation">}</span>
  mat_res
<span class="token punctuation">}</span>

undo_graph_with_restrictions <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>graph_now<span class="token punctuation">,</span>graph_init<span class="token punctuation">)</span><span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>graph_now<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    epi <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>graph_now<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span>
    itime <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>graph_now<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span>
    graph_init <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>graph_init<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span>epi<span class="token punctuation">)</span>
    graph_init <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>graph_init<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span>itime<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  graph_init
<span class="token punctuation">}</span>

graph_with_restrictions <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>restriction_percentages<span class="token punctuation">)</span><span class="token punctuation">{</span>
  edge_lst <span class="token operator">&lt;-</span> as_edgelist<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  delete_vect <span class="token operator">&lt;-</span> runif<span class="token punctuation">(</span>nrow<span class="token punctuation">(</span>edge_lst<span class="token punctuation">)</span><span class="token punctuation">)</span>
  vect_bind <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nrow<span class="token punctuation">(</span>edge_lst<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> nrow<span class="token punctuation">(</span>edge_lst<span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> delete_vect<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>restriction_percentages<span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">)</span>  <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
       <span class="token comment">#edge_lst[i,3] &lt;- 0</span>
      vect_bind<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      vect_bind<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
      <span class="token comment">#edge_lst[i,3] &lt;- 1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  edge_lst <span class="token operator">&lt;-</span> cbind<span class="token punctuation">(</span>edge_lst<span class="token punctuation">,</span>vect_bind<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> nrow<span class="token punctuation">(</span>edge_lst<span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">#cat(&quot;del? \\t&quot;,i,&quot;\\t&quot;,edge_lst[i,3])</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>edge_lst<span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">#cat(&quot;We sup\\n&quot;)</span>
      edge_lst <span class="token operator">&lt;-</span> edge_lst<span class="token punctuation">[</span><span class="token operator">-</span>i<span class="token punctuation">,</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token comment">#cat(&quot;\\n&quot;)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  edge_lst <span class="token operator">&lt;-</span> edge_lst<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>
  limited_graph <span class="token operator">&lt;-</span> graph_from_edgelist<span class="token punctuation">(</span>edge_lst<span class="token punctuation">,</span> directed <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    epi <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span>
    itime <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">)</span>
    limited_graph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>limited_graph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span>epi<span class="token punctuation">)</span>
    limited_graph <span class="token operator">&lt;-</span> set.vertex.attribute<span class="token punctuation">(</span>limited_graph<span class="token punctuation">,</span><span class="token string">&quot;i_time&quot;</span><span class="token punctuation">,</span> i <span class="token punctuation">,</span>value<span class="token operator">=</span>itime<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  limited_graph
<span class="token punctuation">}</span>

confine_required <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restrictions<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_node <span class="token operator">&lt;-</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  nb_i <span class="token operator">&lt;-</span> <span class="token number">0</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>nb_node<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    node_status <span class="token operator">&lt;-</span> get.vertex.attribute<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span><span class="token string">&quot;epidemic&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> node_status <span class="token operator">==</span> <span class="token string">&quot;i&quot;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      nb_i <span class="token operator">&lt;-</span> nb_i<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>restrictions <span class="token operator">==</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nb_i <span class="token operator">&gt;</span> confinement_high<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      restrictions <span class="token operator">&lt;-</span> <span class="token boolean">TRUE</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> restrictions <span class="token operator">==</span> <span class="token boolean">TRUE</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> nb_i <span class="token operator">&lt;</span> confinement_low <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      restrictions <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  restrictions
<span class="token punctuation">}</span>

R0_calc <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>result_mat<span class="token punctuation">,</span>nb_node<span class="token punctuation">,</span> n_d<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  nb_day <span class="token operator">&lt;-</span> ncol<span class="token punctuation">(</span>result_mat<span class="token punctuation">)</span>
  gam <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token operator">/</span>n_d
  outmat <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>nrow <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> ncol <span class="token operator">=</span> nb_day<span class="token punctuation">)</span>
  x <span class="token operator">&lt;-</span> result_mat<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token operator">/</span>nb_node
  s <span class="token operator">&lt;-</span> result_mat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token operator">/</span>nb_node
  r <span class="token operator">&lt;-</span> result_mat<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token operator">/</span>nb_node
  d_x <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_day<span class="token punctuation">)</span>
  d_s <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_day<span class="token punctuation">)</span>
  d_r <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_day<span class="token punctuation">)</span>
  beta <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_day<span class="token punctuation">)</span>
  gamma <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>nb_day<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">2</span><span class="token operator">:</span>nb_day <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    d_x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> x<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    d_s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    d_r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> r<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">2</span><span class="token operator">:</span>nb_day <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    beta<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> d_s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">/</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  print<span class="token punctuation">(</span>beta<span class="token operator">/</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

n <span class="token operator">&lt;-</span> <span class="token number">2000</span>
p <span class="token operator">&lt;-</span> <span class="token number">0.01</span>

p_epidemic <span class="token operator">&lt;-</span> <span class="token number">0.01</span>
time <span class="token operator">&lt;-</span> <span class="token number">1000</span>

n_0 <span class="token operator">&lt;-</span> <span class="token number">10</span>
n_d <span class="token operator">&lt;-</span> <span class="token number">10</span>

confinement_high <span class="token operator">&lt;-</span> <span class="token number">50</span>
confinement_low <span class="token operator">&lt;-</span> <span class="token number">10</span>
restriction_percentages <span class="token operator">&lt;-</span> <span class="token number">80</span>

ig <span class="token operator">&lt;-</span> Erdos_Renyi_optimized<span class="token punctuation">(</span>n<span class="token punctuation">,</span>p<span class="token punctuation">)</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;Erdos Renyi created\\n&quot;</span><span class="token punctuation">)</span>
ig <span class="token operator">&lt;-</span> init_epidemic<span class="token punctuation">(</span>ig<span class="token punctuation">,</span>n_0<span class="token punctuation">,</span>n_d<span class="token punctuation">)</span>
epidemic_plot<span class="token punctuation">(</span>ig<span class="token punctuation">,</span><span class="token string">&quot;Day One&quot;</span><span class="token punctuation">)</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;Infection initialized \\n&quot;</span><span class="token punctuation">)</span>
res <span class="token operator">&lt;-</span> simulation<span class="token punctuation">(</span>ig<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">,</span>time<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restriction_percentages<span class="token punctuation">)</span>
plot_epidemic_curves<span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span>res<span class="token operator">/</span>n<span class="token punctuation">,</span>time<span class="token punctuation">)</span>
</code></pre><p>Notice that removing certain edges only at certain level of the epidemic is a simplistic model. In reality the network is constantly evolving. We could imagine a network that evolve at each new time step, with evolution related to the travel limitation.</p><p>With values proposed, here is the corresponding results.</p><p><img src="`+r+'" alt=""></p>',6),_=[m],g={setup(o,{expose:n}){return n({frontmatter:{meta:[]}}),u({meta:[]}),(q,h)=>(a(),t("div",d,_))}},b={class:"allContent text-center"},v=i({setup(o){return(n,e)=>{const s=c;return a(),t("div",b,[p(k(g),{class:"md"}),p(s,{nextSectionName:"Test and isolation strategies",nextRoute:"/complexSystem/epidemicModels/testAndIsolationStrategies",previousSectionName:"Implementation",previousRoute:"/complexSystem/epidemicModels/implementation"})])}}});export{v as default};

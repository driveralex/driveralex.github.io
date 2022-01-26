import{_ as i}from"./ButtonSection.b76f77df.js";import{A as r,o as p,b as o,f as e,e as n,g as s,d as k,i as c,u as m}from"./vendor.2aa3e7d8.js";import"./app.0ff1674a.js";var d="/assets/tpfourqto.012f76c3.png",g="/assets/solver.777bfa71.png";const h={class:"prose prose-sm m-auto text-left"},_=e(`<h1>Implementation</h1><p>Below you will find a function that simulate the spread of the epidemic in an SIR model. The evolution of the number of Susceptible, Infected and Recovered can be represented as a function of the time :</p><pre class="language-r"><code class="language-r">library<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>

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

simulation <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">,</span>time<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restriction_percentages<span class="token punctuation">,</span>travel_limitation<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  cat<span class="token punctuation">(</span><span class="token string">&quot;Begin simulation \\n&quot;</span><span class="token punctuation">)</span>
  init_graph <span class="token operator">&lt;-</span> igraph
  mat_res <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span>ncol <span class="token operator">=</span> time<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>nrow <span class="token operator">=</span> <span class="token number">3</span> <span class="token punctuation">)</span>
  mat_res<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&lt;-</span> stat_days<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>travel_limitation <span class="token operator">==</span> <span class="token boolean">TRUE</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
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
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>travel_limitation <span class="token operator">==</span> <span class="token boolean">FALSE</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>time <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      strday <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token string">&quot;Day N\xB0&quot;</span><span class="token punctuation">,</span>toString<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
      cat<span class="token punctuation">(</span>strday<span class="token punctuation">,</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
      igraph <span class="token operator">&lt;-</span> transmission<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">)</span>
      restrans <span class="token operator">&lt;-</span> stat_days<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
      mat_res<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">]</span> <span class="token operator">&lt;-</span> restrans
    <span class="token punctuation">}</span>
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
time <span class="token operator">&lt;-</span> <span class="token number">70</span>

n_0 <span class="token operator">&lt;-</span> <span class="token number">10</span>
n_d <span class="token operator">&lt;-</span> <span class="token number">10</span>

travel_limitation <span class="token operator">&lt;-</span> <span class="token boolean">FALSE</span>
confinement_high <span class="token operator">&lt;-</span> <span class="token number">50</span>
confinement_low <span class="token operator">&lt;-</span> <span class="token number">10</span>
restriction_percentages <span class="token operator">&lt;-</span> <span class="token number">80</span>



ig <span class="token operator">&lt;-</span> Erdos_Renyi_optimized<span class="token punctuation">(</span>n<span class="token punctuation">,</span>p<span class="token punctuation">)</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;Erdos Renyi created\\n&quot;</span><span class="token punctuation">)</span>
ig <span class="token operator">&lt;-</span> init_epidemic<span class="token punctuation">(</span>ig<span class="token punctuation">,</span>n_0<span class="token punctuation">,</span>n_d<span class="token punctuation">)</span>
<span class="token comment">#epidemic_plot(ig,&quot;Day One&quot;)</span>
cat<span class="token punctuation">(</span><span class="token string">&quot;Infection initialized \\n&quot;</span><span class="token punctuation">)</span>
res <span class="token operator">&lt;-</span> simulation<span class="token punctuation">(</span>ig<span class="token punctuation">,</span>p_epidemic<span class="token punctuation">,</span>n_d<span class="token punctuation">,</span>time<span class="token punctuation">,</span>confinement_high<span class="token punctuation">,</span>confinement_low<span class="token punctuation">,</span>restriction_percentages<span class="token punctuation">,</span>travel_limitation<span class="token punctuation">)</span>
plot_epidemic_curves<span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span>res<span class="token operator">/</span>n<span class="token punctuation">,</span>time<span class="token punctuation">)</span>
</code></pre><p>Here is the output of this simulation :</p><p><img src="`+d+'" alt=""></p><p>Notice that this output is similar to the model represented by the follwing equations:</p>',6),b=n("section",null,[n("eqn",null,[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mrow",null,[n("mo",{fence:"true"},"{"),n("mtable",{rowspacing:"0.16em",columnalign:"left left left",columnspacing:"1em"},[n("mtr",null,[n("mtd",null,[n("mstyle",{scriptlevel:"0",displaystyle:"false"},[n("mrow",null,[n("msup",null,[n("mi",null,"S"),n("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")]),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("mo",null,"\u2212"),n("mi",null,"\u03B2"),n("mi",null,"S"),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")"),n("mi",null,"I"),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")")])])])]),n("mtr",null,[n("mtd",null,[n("mstyle",{scriptlevel:"0",displaystyle:"false"},[n("mrow",null,[n("msup",null,[n("mi",null,"I"),n("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")]),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("mi",null,"\u03B2"),n("mi",null,"S"),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")"),n("mi",null,"I"),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")"),n("mo",null,"\u2212"),n("mi",null,"\u03B3"),n("mi",null,"I"),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")")])])])]),n("mtr",null,[n("mtd",null,[n("mstyle",{scriptlevel:"0",displaystyle:"false"},[n("mrow",null,[n("msup",null,[n("mi",null,"R"),n("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")]),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")"),n("mo",null,"="),n("mi",null,"\u03B3"),n("mi",null,"I"),n("mo",{stretchy:"false"},"("),n("mi",null,"t"),n("mo",{stretchy:"false"},")")])])])])])]),n("annotation",{encoding:"application/x-tex"}," \\left\\{ \\begin{array}{lll} S'(t) = -\\beta S(t) I(t) \\\\ I'(t) = \\beta S(t) I(t) - \\gamma I(t) \\\\ R'(t) = \\gamma I(t) \\end{array} \\right. ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"3.6em","vertical-align":"-1.55em"}}),n("span",{class:"minner"},[n("span",{class:"mopen"},[n("span",{class:"delimsizing mult"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"2.05em"}},[n("span",{style:{top:"-2.5em"}},[n("span",{class:"pstrut",style:{height:"3.15em"}}),n("span",{class:"delimsizinginner delim-size4"},[n("span",null,"\u23A9")])]),n("span",{style:{top:"-2.492em"}},[n("span",{class:"pstrut",style:{height:"3.15em"}}),n("span",{style:{height:"0.016em",width:"0.8889em"}},[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.016em",style:{width:"0.8889em"},viewBox:"0 0 888.89 16",preserveAspectRatio:"xMinYMin"},[n("path",{d:"M384 0 H504 V16 H384z M384 0 H504 V16 H384z"})])])]),n("span",{style:{top:"-3.15em"}},[n("span",{class:"pstrut",style:{height:"3.15em"}}),n("span",{class:"delimsizinginner delim-size4"},[n("span",null,"\u23A8")])]),n("span",{style:{top:"-4.292em"}},[n("span",{class:"pstrut",style:{height:"3.15em"}}),n("span",{style:{height:"0.016em",width:"0.8889em"}},[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.016em",style:{width:"0.8889em"},viewBox:"0 0 888.89 16",preserveAspectRatio:"xMinYMin"},[n("path",{d:"M384 0 H504 V16 H384z M384 0 H504 V16 H384z"})])])]),n("span",{style:{top:"-4.3em"}},[n("span",{class:"pstrut",style:{height:"3.15em"}}),n("span",{class:"delimsizinginner delim-size4"},[n("span",null,"\u23A7")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"1.55em"}},[n("span")])])])])]),n("span",{class:"mord"},[n("span",{class:"mtable"},[n("span",{class:"arraycolsep",style:{width:"0.5em"}}),n("span",{class:"col-align-l"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"2.05em"}},[n("span",{style:{top:"-4.21em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.7519em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"\u2032")])])])])])])])]),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord"},"\u2212"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"\u03B2S"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")")])]),n("span",{style:{top:"-3.01em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.7519em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"\u2032")])])])])])])])]),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"\u03B2S"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2212"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")")])]),n("span",{style:{top:"-1.81em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.7519em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"\u2032")])])])])])])])]),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"1.55em"}},[n("span")])])])]),n("span",{class:"arraycolsep",style:{width:"0.5em"}})])]),n("span",{class:"mclose nulldelimiter"})])])])])])])],-1),y=e(`<p>To solve this model, we have used the following code inspired by : <a href="http://rstudio-pubs-static.s3.amazonaws.com/6852_c59c5a2e8ea3456abbeb017185de603e.html" target="_blank" rel="noopener">http://rstudio-pubs-static.s3.amazonaws.com/6852_c59c5a2e8ea3456abbeb017185de603e.html</a></p><pre class="language-r"><code class="language-r"><span class="token comment">## Load deSolve package</span>
library<span class="token punctuation">(</span>deSolve<span class="token punctuation">)</span>

<span class="token comment">## Create an SIR function</span>
sir <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> state<span class="token punctuation">,</span> parameters<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  with<span class="token punctuation">(</span>as.list<span class="token punctuation">(</span>c<span class="token punctuation">(</span>state<span class="token punctuation">,</span> parameters<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

    dS <span class="token operator">&lt;-</span> <span class="token operator">-</span>beta <span class="token operator">*</span> S <span class="token operator">*</span> I
    dI <span class="token operator">&lt;-</span>  beta <span class="token operator">*</span> S <span class="token operator">*</span> I <span class="token operator">-</span> gamma <span class="token operator">*</span> I
    dR <span class="token operator">&lt;-</span>                 gamma <span class="token operator">*</span> I

    return<span class="token punctuation">(</span>list<span class="token punctuation">(</span>c<span class="token punctuation">(</span>dS<span class="token punctuation">,</span> dI<span class="token punctuation">,</span> dR<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

n <span class="token operator">&lt;-</span> <span class="token number">2000</span>
n_0 <span class="token operator">&lt;-</span> <span class="token number">10</span>

<span class="token comment">### Set parameters</span>
<span class="token comment">## Proportion in each compartment:</span>
init       <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>S <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">-</span>n_0<span class="token punctuation">)</span><span class="token operator">/</span>n<span class="token punctuation">,</span> I <span class="token operator">=</span> n_0<span class="token operator">/</span>n<span class="token punctuation">,</span> R <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
<span class="token comment">## beta: infection parameter; gamma: recovery parameter</span>
parameters <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>beta <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">,</span> gamma <span class="token operator">=</span> <span class="token number">0.11</span><span class="token punctuation">)</span>
<span class="token comment">## Time frame</span>
times      <span class="token operator">&lt;-</span> seq<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> by <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">## Solve using ode (General Solver for Ordinary Differential Equations)</span>
out <span class="token operator">&lt;-</span> ode<span class="token punctuation">(</span>y <span class="token operator">=</span> init<span class="token punctuation">,</span> times <span class="token operator">=</span> times<span class="token punctuation">,</span> func <span class="token operator">=</span> sir<span class="token punctuation">,</span> parms <span class="token operator">=</span> parameters<span class="token punctuation">)</span>
<span class="token comment">## change to data frame</span>
out <span class="token operator">&lt;-</span> as.data.frame<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
<span class="token comment">## Delete time variable</span>
out<span class="token operator">$</span>time <span class="token operator">&lt;-</span> <span class="token keyword">NULL</span>
<span class="token comment">## Show data</span>
head<span class="token punctuation">(</span>out<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">## Plot</span>
matplot<span class="token punctuation">(</span>x <span class="token operator">=</span> times<span class="token punctuation">,</span> y <span class="token operator">=</span> out<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;l&quot;</span><span class="token punctuation">,</span>
        xlab <span class="token operator">=</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">,</span> ylab <span class="token operator">=</span> <span class="token string">&quot;Susceptible and Recovered&quot;</span><span class="token punctuation">,</span> main <span class="token operator">=</span> <span class="token string">&quot;SIR Model&quot;</span><span class="token punctuation">,</span>
        lwd <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> lty <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> bty <span class="token operator">=</span> <span class="token string">&quot;l&quot;</span><span class="token punctuation">,</span> col <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment">## Add legend</span>
legend<span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">,</span> c<span class="token punctuation">(</span><span class="token string">&quot;Susceptible&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Infected&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Recovered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pch <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> col <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span> bty <span class="token operator">=</span> <span class="token string">&quot;n&quot;</span><span class="token punctuation">)</span>
</code></pre><p><img src="`+g+'" alt=""></p><p>Notice the general behaving is similar.</p><p>Then we can adjust beta and gamma to be closer of our simulation.</p>',5),q=n("p",null,[s("When your are satisfied with your "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"\u03B2")]),n("annotation",{encoding:"application/x-tex"},"\\beta")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"\u03B2")])])])]),s(" and "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"\u03B3")]),n("annotation",{encoding:"application/x-tex"},"\\gamma")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3")])])])]),s(" estimation you can estimated "),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"R"),n("mn",null,"0")])]),n("annotation",{encoding:"application/x-tex"},"R_{0}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"0")])])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])])]),s(" with:")],-1),v=n("section",null,[n("eqn",null,[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"R"),n("mn",null,"0")]),n("mo",null,"="),n("mfrac",null,[n("mi",null,"\u03B2"),n("mi",null,"\u03B3")])]),n("annotation",{encoding:"application/x-tex"}," R_{0}={\\frac {\\beta }{\\gamma }} ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"0")])])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"2.2519em","vertical-align":"-0.8804em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mopen nulldelimiter"}),n("span",{class:"mfrac"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"1.3714em"}},[n("span",{style:{top:"-2.314em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.05556em"}},"\u03B3")])]),n("span",{style:{top:"-3.23em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),n("span",{style:{top:"-3.677em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.05278em"}},"\u03B2")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8804em"}},[n("span")])])])]),n("span",{class:"mclose nulldelimiter"})])])])])])])])],-1),f=[_,b,y,q,v],w={setup(l,{expose:a}){return a({frontmatter:{meta:[]}}),r({meta:[]}),(S,R)=>(p(),o("div",h,f))}},x={class:"allContent text-center"},M=k({setup(l){return(a,u)=>{const t=i;return p(),o("div",x,[c(m(w),{class:"md"}),c(t,{nextSectionName:"Effect of confine people",nextRoute:"/complexSystem/epidemicModels/effectOfConfinePeople",previousSectionName:"Epidemic models",previousRoute:"/complexSystem/epidemicModels"})])}}});export{M as default};

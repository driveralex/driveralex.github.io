import{_ as c}from"./ButtonSection.d2110d16.js";import{C as u,d as t,e as p,f as s,k as i,l as r,i as o,u as m}from"./vendor.c6d6bfe0.js";import"./app.19bd1e91.js";var k="/assets/p_average_length.26f64193.png";const h={class:"prose prose-sm m-auto text-left"},g=s("h1",null,"Erdos-Renyi, average length as function of p",-1),d=s("p",null,"To calculate the average length with the following formula:",-1),_=s("section",null,[s("eqn",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"\u2212"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])]),s("munder",null,[s("mo",null,"\u2211"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"\u2264"),s("mi",null,"i"),s("mo",null,"<"),s("mi",null,"j"),s("mo",null,"\u2264"),s("mi",null,"n")])]),s("mi",null,"d"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," l = \\frac{2}{n(n-1)}\\sum_{1\\leq i < j \\leq n } d(i,j) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.7352em","vertical-align":"-1.4138em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.05em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mrel mtight"},"\u2264"),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"<"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},"\u2264"),s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"\u2211")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4138em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])])])])],-1),f=i(`<p>We use the following code :</p><pre class="language-r"><code class="language-r">average_length <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>igraph<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  print<span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token punctuation">)</span>
  sum <span class="token operator">&lt;-</span> <span class="token number">0</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    bfs_i <span class="token operator">&lt;-</span> bfs<span class="token punctuation">(</span>igraph<span class="token punctuation">,</span>i<span class="token punctuation">,</span>
        unreachable <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
        dist <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> i <span class="token operator">:</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span> i <span class="token operator">!=</span> j<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token comment">#cat(&quot;i:&quot;,i,&quot;\\t&quot;,&quot;j:&quot;,j,&quot;\\tdist:&quot;,bfs_i$dist[j],&quot;\\n&quot;);</span>
        <span class="token comment">#bfs_i$dist[j] </span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>is.nan<span class="token punctuation">(</span> bfs_i<span class="token operator">$</span>dist<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          sum <span class="token operator">&lt;-</span> sum <span class="token operator">+</span> bfs_i<span class="token operator">$</span>dist<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  l <span class="token operator">&lt;-</span> <span class="token number">2</span><span class="token operator">*</span>sum<span class="token operator">/</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span> vcount<span class="token punctuation">(</span>igraph<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>The evolution of the average length with p is plotted with the following code :</p><pre class="language-r"><code class="language-r">p_average_length <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nb_nodes<span class="token punctuation">,</span>nb_sample<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  p <span class="token operator">&lt;-</span> <span class="token number">0</span>
  step <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token operator">/</span>nb_sample
  mat <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span><span class="token punctuation">(</span>nb_sample<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  dim<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>nb_sample<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">(</span>nb_sample <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    mat<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> p
    ig <span class="token operator">&lt;-</span> Erdos_Renyi_optimized<span class="token punctuation">(</span>nb_nodes<span class="token punctuation">,</span>p<span class="token punctuation">)</span>
    mat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> average_length<span class="token punctuation">(</span>ig<span class="token punctuation">)</span>
    p <span class="token operator">&lt;-</span> p <span class="token operator">+</span> step
    cat<span class="token punctuation">(</span><span class="token string">&quot;Progress: &quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>i<span class="token operator">/</span><span class="token punctuation">(</span>nb_sample<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  strmain <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token string">&quot;Evolution of average length with p for Erdos-Renyi n=&quot;</span><span class="token punctuation">,</span>nb_nodes<span class="token punctuation">)</span>
  plot<span class="token punctuation">(</span>x <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       y <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       main <span class="token operator">=</span> strmain<span class="token punctuation">,</span>
       type <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>
       xlab <span class="token operator">=</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span>
       ylab <span class="token operator">=</span> <span class="token string">&quot;Average length&quot;</span><span class="token punctuation">,</span>
       <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p><img src="`+k+'" alt=""></p>',5),y=[g,d,_,f],b={setup(e,{expose:n}){return n({frontmatter:{meta:[]}}),u({meta:[]}),(w,q)=>(t(),p("div",h,y))}},v={class:"allContent text-center"},E=r({setup(e){return(n,l)=>{const a=c;return t(),p("div",v,[o(m(b),{class:"md"}),o(a,{nextSectionName:"Erdos-Renyi, clustering coefficient as functions of p",nextRoute:"/complexSystem/random-graph-models/erdos-renyi-clustering-coefficient-as-functions-of-p",previousSectionName:"Scale free, power law degree distribution",previousRoute:"/complexSystem/random-graph-models/scale-free-power-law-degree-distribution"})])}}});export{E as default};
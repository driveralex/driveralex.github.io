import{_ as l}from"./ButtonSection.b76f77df.js";import{A as i,o as t,b as p,e as n,g as o,f as k,d as r,i as c,u as d}from"./vendor.2aa3e7d8.js";import"./app.0ff1674a.js";const m={class:"prose prose-sm m-auto text-left"},g=n("h1",null,"Representations of graph and first metrics",-1),f=n("h3",null,[n("strong",null,"1) Matrix"),o(),n("eq",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"\u2194")]),n("annotation",{encoding:"application/x-tex"},"\\leftrightarrow")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.3669em"}}),n("span",{class:"mrel"},"\u2194")])])])]),o(),n("strong",null,"List")],-1),h=k(`<p>A graph may be represented by its adjacency matrix or its adjacency list. Below is a function that gets the adjacency list from the adjacency matrix :</p><pre class="language-r"><code class="language-r">fromMatriceToList <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  k <span class="token operator">&lt;-</span> nrow<span class="token punctuation">(</span>mat<span class="token punctuation">)</span>
  lst <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>k<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> numeric<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>k<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> i<span class="token operator">:</span>k<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">,</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>j<span class="token punctuation">)</span>
        lst<span class="token punctuation">[</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  lst
<span class="token punctuation">}</span>
</code></pre><p>And now the opposite: a function that gets the adjacency matrix form the adjacency list :</p><pre class="language-r"><code class="language-r">fromListToMatrice <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
k <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
mat <span class="token operator">&lt;-</span> vector<span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">&quot;numeric&quot;</span><span class="token punctuation">,</span>k<span class="token operator">*</span>k<span class="token punctuation">)</span>
dim<span class="token punctuation">(</span>mat<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>k<span class="token punctuation">,</span>k<span class="token punctuation">)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>k <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    l <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>l<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    mat<span class="token punctuation">[</span>i<span class="token punctuation">,</span>lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
mat
<span class="token punctuation">}</span>
</code></pre><h3><strong>2) List and distribution of degrees</strong></h3><p>Here is a function which return the list of degrees from the adjacency matrix or adjacency list :</p><pre class="language-r"><code class="language-r">listOfDegrees <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> is.vector<span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">TRUE</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    k <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>input<span class="token punctuation">)</span>
    lst <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>k<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>input<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> is.matrix<span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">TRUE</span> <span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    templst <span class="token operator">&lt;-</span> fromMatriceToList<span class="token punctuation">(</span>input<span class="token punctuation">)</span>
    k <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>templst<span class="token punctuation">)</span>
    lst <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>k<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>templst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    print<span class="token punctuation">(</span><span class="token string">&quot;Wrong input of function listOfDegrees&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  lst
<span class="token punctuation">}</span>
</code></pre><p>Here is a function which return the degrees distribution from the adjacency list.</p><pre class="language-r"><code class="language-r">degreeDistribution <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  lstdeg <span class="token operator">&lt;-</span> listOfDegrees<span class="token punctuation">(</span>input<span class="token punctuation">)</span>
  print<span class="token punctuation">(</span>lstdeg<span class="token punctuation">[</span><span class="token punctuation">[</span>which.max<span class="token punctuation">(</span>lstdeg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  lstdistrib <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span><span class="token punctuation">)</span>
  lstdistrib <span class="token operator">&lt;-</span> replicate<span class="token punctuation">(</span>lstdeg<span class="token punctuation">[</span><span class="token punctuation">[</span>which.max<span class="token punctuation">(</span>lstdeg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
  k <span class="token operator">&lt;-</span> length<span class="token punctuation">(</span>lstdeg<span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>k<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    lstdistrib<span class="token punctuation">[</span><span class="token punctuation">[</span>lstdeg<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> lstdistrib<span class="token punctuation">[</span><span class="token punctuation">[</span>lstdeg<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  print<span class="token punctuation">(</span>lstdistrib<span class="token punctuation">)</span>
  print<span class="token punctuation">(</span><span class="token string">&quot;Endfunction&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><h3><strong>3) Clustering coefficient</strong></h3><p>Here is a function that return the list of cluster coefficients from the adjacency matrix.</p><pre class="language-r"><code class="language-r">clustering_coef <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  len <span class="token operator">&lt;-</span> nrow<span class="token punctuation">(</span>input<span class="token punctuation">)</span>
  lst <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>len<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    output <span class="token operator">&lt;-</span> <span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">:</span>len<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span>p <span class="token keyword">in</span> <span class="token number">1</span> <span class="token operator">:</span>len <span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        output <span class="token operator">&lt;-</span> output <span class="token operator">+</span> input<span class="token punctuation">[</span>i<span class="token punctuation">,</span>k<span class="token punctuation">]</span><span class="token operator">*</span>input<span class="token punctuation">[</span>k<span class="token punctuation">,</span>p<span class="token punctuation">]</span><span class="token operator">*</span>input<span class="token punctuation">[</span>p<span class="token punctuation">,</span>i<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    lst<span class="token punctuation">[</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> output
  <span class="token punctuation">}</span>
  lst
<span class="token punctuation">}</span>
</code></pre>`,12),y=[g,f,h],w={setup(e,{expose:s}){return s({frontmatter:{meta:[]}}),i({meta:[]}),(b,x)=>(t(),p("div",m,y))}},_={class:"allContent text-center"},v=r({setup(e){return(s,u)=>{const a=l;return t(),p("div",_,[c(d(w)),c(a,{nextSectionName:"Breadth-first search algorithm and applications",nextRoute:"/complexSystem/getting-started/breadth-first-search-algorithm-and-applications",previousSectionName:"Getting Started",previousRoute:"/complexSystem/getting-started"})])}}});export{v as default};

import{r as e,o as p,c as t,a as n,b as o,F as c,d as s,e as l}from"./app.94aabcca.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u={class:"custom-container danger"},d=n("p",{class:"custom-container-title"},"DANGER",-1),k=n("strong",null,"This package won't be receiving any feature updates.",-1),b=s(" If you didn't see, you should check "),m={href:"https://github.com/open-southeners/laravel-apiable",target:"_blank",rel:"noopener noreferrer"},h=s("our next version of this package clicking here"),g=s("."),_=l(`<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>Install with the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require skorelabs/laravel-json-api
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><p>First publish the config file once installed like this:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan vendor:publish --provider<span class="token operator">=</span><span class="token string">&quot;SkoreLabs\\JsonApi\\JsonApiServiceProvider&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>And use as simple as importing the class <code>SkoreLabs\\JsonApi\\Http\\Resources\\JsonApiCollection</code> for collections or <code>SkoreLabs\\JsonApi\\Http\\Resources\\JsonApiResource</code> for resources.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">SkoreLabs<span class="token punctuation">\\</span>JsonApi<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>JsonApiCollection</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Display a listing of the resource.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JsonApiCollection</span><span class="token punctuation">(</span>
            <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,8);function f(v,x){const a=e("ExternalLinkIcon");return p(),t(c,null,[n("div",u,[d,n("p",null,[k,b,n("a",m,[h,o(a)]),g])]),_],64)}var A=r(i,[["render",f]]);export{A as default};

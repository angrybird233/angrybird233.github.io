import{_ as s,o as n,c as a,e as p}from"./app-CBiFwb36.js";const e={},t=p(`<p>在使用nuxt3开发ssr项目时，发现了很多初学时的坑，如果你也在学习nuxt3或使用nuxt3开发项目，希望能踩坑笔记能对你有所帮助。</p><ul><li><ol><li>初始化基础项目目录时，使用npm和yarn，切换到cnpm或开启vpn初始化一段时间后都会无响应，无法完整初始化完整项目结构。</li></ol></li></ul><p>解决办法：使用pnpm解决，我使用的镜像源是 https://registry.npmmirror.com/</p><ul><li><ol start="2"><li>nuxt3中如何配置环境变量，并执行对应的编译命令 配置方法： 环境变量文件 .env.development</li></ol></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">NODE_ENV = &#39;development&#39;</span>
<span class="line">VITE_APP_API_ROOT = &quot;https://xxxx.com/&quot;</span>
<span class="line">NUXT_APP_API_ROOT=&quot;https://xxxx.com/&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json命令修改：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt dev --dotenv .env.development --host&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;uat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt dev --dotenv .env.uat --host&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt dev --dotenv .env.production --host&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;build:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt build --dotenv .env.development&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;build:uat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt build --dotenv .env.uat&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt build --dotenv.production&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;generate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt generate&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt preview&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt prepare&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="3"><li>nuxt3中如何处理项目跨域问题</li></ol></li></ul><blockquote><p>如果是全栈项目，直接通过修改server端的跨域配置允许跨域。 如果接口请求的是后端组的接口，使用别的语言编写的接口服务，此时需要处理跨域问题：</p></blockquote><ol><li>本地</li><li>线上： 环境变量文件 .env.development</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span></span>
<span class="line"><span class="token constant">VITE_APP_API_ROOT</span> <span class="token operator">=</span> <span class="token string">&quot;https://xxxx.com/&quot;</span></span>
<span class="line"><span class="token constant">NUXT_APP_API_ROOT</span><span class="token operator">=</span><span class="token string">&quot;https://xxxx.com/&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nuxt.config.ts</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">devtools</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;@/img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~assets/images/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;viewport&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;google&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;notranslate&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;keywords&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;xxxxxxxxxxxxxxxxxx&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;image/x-icon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx/favicon.ico&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// css: [&quot;~/assets/styles/index.less&quot;],</span></span>
<span class="line">      <span class="token comment">// buildModules: [&quot;nuxt-windicss&quot;, &quot;@pinia/nuxt&quot;],</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">runtimeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NUXT_APP_API_ROOT</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">nitro</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">devProxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// &quot;/api&quot;: {</span></span>
<span class="line">      <span class="token comment">//   target: &quot;http://localhost:8081&quot;, // 这里是接口地址</span></span>
<span class="line">      <span class="token comment">//   changeOrigin: true,</span></span>
<span class="line">      <span class="token comment">//   prependPath: true,</span></span>
<span class="line">      <span class="token comment">// },</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 该配置用于服务端请求转发</span></span>
<span class="line">    <span class="token comment">// routeRules: {</span></span>
<span class="line">    <span class="token comment">//   &#39;/web/**&#39;: {</span></span>
<span class="line">    <span class="token comment">//     proxy: &#39;https://dg-api-dev.shouyinongye.com//**&#39;</span></span>
<span class="line">    <span class="token comment">//   }</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;assets/styles/index.less&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">vite</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// less: {</span></span>
<span class="line">        <span class="token comment">//   additionalData: &#39;@use &quot;@/assets/styles/index.less&quot; as *;&#39;</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&#39;@element-plus/nuxt&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// &#39;@nuxtjs/tailwindcss&#39;,</span></span>
<span class="line">    <span class="token comment">// &#39;@nuxtjs/composition-api&#39;,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// { src: &quot;~/plugins/vue-icon.ts&quot;, mode: &quot;all&quot; },</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当接口请求的域名和项目适用的域名不一致时候，可以适用接口转发的方法实现跨域</li><li>新增 server/middleware/index.ts文件，使用nuxt3的中间件来实现请求的转发</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">public</span><span class="token operator">:</span> <span class="token punctuation">{</span> baseURL <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRuntimeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>node<span class="token punctuation">.</span>req<span class="token punctuation">.</span>url<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;/xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span>method<span class="token punctuation">,</span> url<span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>node<span class="token punctuation">.</span>req</span>
<span class="line">    <span class="token keyword">const</span> <span class="token literal-property property">options</span><span class="token operator">:</span> any  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    options<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">accept</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    options<span class="token punctuation">.</span>method <span class="token operator">=</span> method</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">!==</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> method <span class="token operator">!==</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      options<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">readBody</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> resBody <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$fetch</span><span class="token punctuation">(</span>baseURL <span class="token operator">+</span> url<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;服务端错误&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> resBody</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>nuxt3中开发环境正常编译和访问，打包时报错</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token constant">ERROR</span>  <span class="token literal-property property">RollupError</span><span class="token operator">:</span> <span class="token string">&quot;isScriptProtocol&quot;</span> is not exported by <span class="token string">&quot;node_modules/ufo/dist/index.mjs&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>原因： https://github.com/nuxt/nuxt/issues/23517 解决办法：删除多余的项目中未用到的包</p><ol start="5"><li>nuxt3中开发环境正常编译和访问，打包后预览时报错：</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">Cannot find <span class="token keyword">package</span> <span class="token string">&#39;@popperjs/core&#39;</span> imported <span class="token keyword">from</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>原因：https://github.com/nuxt/nuxt/issues/12493 解决办法： 编辑.npmrc文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">shamefully<span class="token operator">-</span>hoist<span class="token operator">=</span><span class="token boolean">true</span></span>
<span class="line">node<span class="token operator">-</span>linker<span class="token operator">=</span>hoisted</span>
<span class="line"><span class="token keyword">public</span><span class="token operator">-</span>hoist<span class="token operator">-</span>pattern<span class="token operator">=</span><span class="token operator">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改package.json, 在dependencies中增加 &quot;@popperjs/core&quot;: &quot;npm:@sxzz/popperjs-es@^2.11.7&quot;, 删除node_modules和lock文件，重新初始化node_modules包。</p>`,23),l=[t];function o(i,c){return n(),a("div",null,l)}const u=s(e,[["render",o],["__file","20231006.html.vue"]]),d=JSON.parse('{"path":"/blogs/Frontend/20231006.html","title":"Nuxt3踩坑笔记","lang":"en-US","frontmatter":{"title":"Nuxt3踩坑笔记","date":"2023-10-06T00:00:00.000Z","tags":["Nuxt3","服务端渲染"],"categories":["Frontend"]},"headers":[],"git":{"createdTime":1720607009000,"updatedTime":1720607009000,"contributors":[{"name":"wanggang","email":"wanggang@shouyinongye.com","commits":1}]},"filePathRelative":"blogs/Frontend/20231006.md"}');export{u as comp,d as data};

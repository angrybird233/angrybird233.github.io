import{_ as s,o as n,c as a,e as t}from"./app-BRdCpm65.js";const p={},e=t(`<h1 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段"><span>代码片段</span></a></h1><ul><li>vscode如何创建代码片段</li></ul><blockquote><p>点击 设置 -&gt; 用户代码片段 -&gt; 新建全局代码片段文件/新建xx文件夹的代码片段 -&gt; 输入代码段文件名并回车 -&gt; 输入 prefix 和 body</p></blockquote><h2 id="_1-快速创建vue页面" tabindex="-1"><a class="header-anchor" href="#_1-快速创建vue页面"><span>1. 快速创建vue页面</span></a></h2><ul><li>快捷输入：v-tem</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token string-property property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue,jsx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v-tem&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;$1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t export default {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t\\t data() {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;\\t\\t\\t return {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;\\t\\t\\t }&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t\\t },&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;\\t\\t mounted() {&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;\\t\\t },&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t\\t methods: {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token string">&quot;\\t\\t },&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;&lt;style lang=\\&quot;less\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Log output to console&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-快速创建vue组件" tabindex="-1"><a class="header-anchor" href="#_2-快速创建vue组件"><span>2. 快速创建vue组件</span></a></h2><ul><li>快捷输入：v-comp</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token string-property property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue,jsx&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v-comp&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;$1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">		<span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t export default {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t\\t name:&quot;</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;\\t\\t props:{},&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t\\t data() {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;\\t\\t\\t return {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token string">&quot;\\t\\t\\t }&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t\\t },&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;\\t\\t mounted() {&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token string">&quot;\\t\\t },&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t\\t methods: {&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">			<span class="token string">&quot;\\t\\t },&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;\\t}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;&lt;style lang=\\&quot;less\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string">&quot;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Log output to console&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-快速打印变量" tabindex="-1"><a class="header-anchor" href="#_3-快速打印变量"><span>3. 快速打印变量</span></a></h2><ul><li>快捷输入：log</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token string-property property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript,typescript&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token string">&quot;console.log($1);&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;console.log()&quot;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[e];function i(o,c){return n(),a("div",null,l)}const r=s(p,[["render",i],["__file","vscode-snippets.html.vue"]]),d=JSON.parse('{"path":"/docs/efficiency-tools/vscode-snippets.html","title":"代码片段","lang":"en-US","frontmatter":{"title":"代码片段","date":"2023-03-05T22:04:43.000Z","hideComments":true},"headers":[{"level":2,"title":"1. 快速创建vue页面","slug":"_1-快速创建vue页面","link":"#_1-快速创建vue页面","children":[]},{"level":2,"title":"2. 快速创建vue组件","slug":"_2-快速创建vue组件","link":"#_2-快速创建vue组件","children":[]},{"level":2,"title":"3. 快速打印变量","slug":"_3-快速打印变量","link":"#_3-快速打印变量","children":[]}],"git":{"createdTime":1720431960000,"updatedTime":1720431960000,"contributors":[{"name":"wanggang","email":"wanggang@shouyinongye.com","commits":1}]},"filePathRelative":"docs/efficiency-tools/vscode-snippets.md"}');export{r as comp,d as data};

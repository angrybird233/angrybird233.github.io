import{_ as n,o as s,c as a,e as p}from"./app-Ymz8kTiI.js";const t={},e=p(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><ul><li><p>最近在做一个H5的项目过程中，需要获取用户的当前位置，且对于定位的实时性和精度都有要求，所以需要调研一下各种方案，通过对各种方案的实地测试，总结出一些结论。</p></li><li><p>准所周知，由于浏览器的安全策略，H5中获取实时位置的方案基本都是通过调用浏览器提供的API来实现的，包括GPS定位、IP定位、基站定位、Wi-Fi定位等，但是IP定位只在电脑端可行，Wi-Fi定位需要有WIFI才行，所以获取实时位置的方案基本都是通过调用浏览器提供的API来实现的。即: navigator.geolocation, 但是使用原生的api的话需要自己封装且需要考虑兼容性问题。</p></li><li><p>所以我首先选择了目前现有的比较成熟的方案，腾讯地图、百度地图、高德地图、天地图、企业微信提供的定位API、微信小程序提供的定位api, 由于百度地图的坐标系统和经纬度是经过特殊算法加密的，无法对接现有的坐标，首先排除，所以下面就从这几个进行了测试。</p></li></ul><h2 id="腾讯地图" tabindex="-1"><a class="header-anchor" href="#腾讯地图"><span>腾讯地图</span></a></h2><ul><li>腾讯地图提供了定位的插件,文档[https://lbs.qq.com/webApi/component/componentGuide/componentGeolocation]</li><li>优点 腾讯地图前端定位组件是在原生H5定位的基础上做了一下优化，包括对获取的位置信息做了缓存，当原生H5定位失败的时候（用户未授权app权限或者拒绝了授权弹窗），会降级使用IP定位。 和原生相比，获取信息的成功率会有一定的提高。</li><li>缺点 位置缓存比较严重，这对于实时定位来说位置不太准确。</li></ul><h2 id="高德地图" tabindex="-1"><a class="header-anchor" href="#高德地图"><span>高德地图</span></a></h2><ul><li>高德地图提供了定位的插件,文档[https://lbs.amap.com/api/javascript-api-v2/guide/services/geolocation]</li><li>优点 高德JS API提供的浏览器定位接口，融合了HTML5 Geolocation定位接口、精确IP定位服务，以及安卓定位sdk定位 使用<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  AMap<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;AMap.Geolocation&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> geolocation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Geolocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">enableHighAccuracy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否使用高精度定位，默认：true</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 设置定位超时时间，默认：无穷大</span></span>
<span class="line">    <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 定位按钮的停靠位置的偏移量</span></span>
<span class="line">    <span class="token literal-property property">zoomToAccuracy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false</span></span>
<span class="line">    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;RB&#39;</span> <span class="token comment">//  定位按钮的排放位置,  RB表示右下</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">status<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>status<span class="token operator">==</span><span class="token string">&#39;complete&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">onComplete</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">onError</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">onComplete</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// data是具体的定位信息</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">onError</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 定位出错</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>缺点 高德地图定位点在城市街道与在乡村地区、农田地区的差异较大，定位点偏移很明显。</li></ul></li></ul><h2 id="天地图" tabindex="-1"><a class="header-anchor" href="#天地图"><span>天地图</span></a></h2><ul><li>天地图提供了定位的API,文档[http://lbs.tianditu.gov.cn/api/js4.0/examples.html] 示例demo</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content-type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html; charset=utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>天地图<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>天地图－地图API－范例－H5定位<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://api.tianditu.gov.cn/api?v=4.0&amp;tk=您的密钥<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"><span class="token selector">body,html</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">}</span><span class="token selector">#mapDiv</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">}</span><span class="token selector">input,b,p</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>14px<span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> map<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> zoom <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//初始化地图对象</span></span>
<span class="line">            map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mapDiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//设置显示地图的中心点和级别</span></span>
<span class="line">            map<span class="token punctuation">.</span><span class="token function">centerAndZoom</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">T<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">116.40969</span><span class="token punctuation">,</span> <span class="token number">38.89945</span><span class="token punctuation">)</span><span class="token punctuation">,</span> zoom<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">var</span> lo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T<span class="token punctuation">.</span>Geolocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    map<span class="token punctuation">.</span><span class="token function">centerAndZoom</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>lnglat<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;获取定位坐标：&quot;</span><span class="token operator">+</span>e<span class="token punctuation">.</span>lnglat<span class="token punctuation">.</span>lat <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>lnglat<span class="token punctuation">.</span>lng<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token keyword">var</span> marker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>lnglat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    map<span class="token punctuation">.</span><span class="token function">addOverLay</span><span class="token punctuation">(</span>marker<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    map<span class="token punctuation">.</span><span class="token function">centerAndZoom</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>lnglat<span class="token punctuation">,</span> e<span class="token punctuation">.</span>level<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;获取定位坐标：&quot;</span><span class="token operator">+</span>e<span class="token punctuation">.</span>lnglat<span class="token punctuation">.</span>lat <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>lnglat<span class="token punctuation">.</span>lng<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token keyword">var</span> marker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>lnglat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    map<span class="token punctuation">.</span><span class="token function">addOverLay</span><span class="token punctuation">(</span>marker<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            lo<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapDiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>本示例演示如用H5定位所在城市<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>完全利用浏览器的geolocation接口获取用户当前位置，不支持的浏览器将无法获取</li><li>缺点： 通过测试安卓系统与IOS系统的定位打点数据发现，定位点漂移点较多，偏移很大，特别是IOS打的定位点。</li></ul><h2 id="企业微信api" tabindex="-1"><a class="header-anchor" href="#企业微信api"><span>企业微信API</span></a></h2><ul><li>微信小程序提供了定位的API,文档[https://developer.work.weixin.qq.com/document/path/90504]</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token comment">// 获取当前位置</span></span>
<span class="line">  wx<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;wgs84&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入&#39;gcj02&#39;</span></span>
<span class="line">      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">var</span> latitude <span class="token operator">=</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span> <span class="token comment">// 纬度，浮点数，范围为90 ~ -90</span></span>
<span class="line">          <span class="token keyword">var</span> longitude <span class="token operator">=</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span> <span class="token comment">// 经度，浮点数，范围为180 ~ -180。</span></span>
<span class="line">          <span class="token keyword">var</span> speed <span class="token operator">=</span> res<span class="token punctuation">.</span>speed<span class="token punctuation">;</span> <span class="token comment">// 速度，以米/每秒计</span></span>
<span class="line">          <span class="token keyword">var</span> accuracy <span class="token operator">=</span> res<span class="token punctuation">.</span>accuracy<span class="token punctuation">;</span> <span class="token comment">// 位置精度</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 打开持续定位</span></span>
<span class="line">  wx<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;startAutoLBS&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;gcj02&#39;</span><span class="token punctuation">,</span> <span class="token comment">// wgs84是gps坐标，gcj02是火星坐标</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>err_msg <span class="token operator">==</span> <span class="token string">&quot;startAutoLBS:ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//调用成功</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//错误处理</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 停止持续定位接口</span></span>
<span class="line">  wx<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;stopAutoLBS&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>err_msg <span class="token operator">==</span> <span class="token string">&quot;stopAutoLBS:ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">//调用成功</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">//错误处理</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 监听地理位置变化</span></span>
<span class="line">  wx<span class="token punctuation">.</span><span class="token function">onLocationChange</span><span class="token punctuation">(</span> </span>
<span class="line">    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errMsg <span class="token operator">==</span> <span class="token string">&quot;auto:location:report:ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> latitude <span class="token operator">=</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span> <span class="token comment">// 纬度，浮点数，范围为90 ~ -90</span></span>
<span class="line">        <span class="token keyword">var</span> longitude <span class="token operator">=</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span> <span class="token comment">// 经度，浮点数，范围为180 ~ -180。</span></span>
<span class="line">        <span class="token keyword">var</span> speed <span class="token operator">=</span> res<span class="token punctuation">.</span>speed<span class="token punctuation">;</span> <span class="token comment">// 速度，以米/每秒计</span></span>
<span class="line">        <span class="token keyword">var</span> accuracy <span class="token operator">=</span> res<span class="token punctuation">.</span>accuracy<span class="token punctuation">;</span> <span class="token comment">// 位置精度</span></span>
<span class="line">        <span class="token keyword">var</span> lbsIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//错误处理</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>缺点： 通过测试安卓系统与IOS系统的定位打点数据，定位点漂移点较多，偏移较大，尤其是农田区域。</li></ul><h2 id="微信小程序api" tabindex="-1"><a class="header-anchor" href="#微信小程序api"><span>微信小程序API</span></a></h2><p>微信小程序提供了好几个获取位置以及持续获取位置的API，符合要求的是(wx.startLocationUpdateBackground)[https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html]</p><ul><li>开启小程序在前后台时均可接收位置消息，后台包括离开小程序后继续使用微信（微信仍在前台）、离开微信（微信在后台）两个场景，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token comment">// 开启持续定位</span></span>
<span class="line">  <span class="token function">startLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">startLocationUpdateBackground</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;wgs84&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>errMsg <span class="token operator">===</span> <span class="token string">&#39;startLocationUpdateBackground:ok&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          wx<span class="token punctuation">.</span><span class="token function">onLocationChange</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onLocationChange&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">promptUserTurnOnBackgroundLocation</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>startLocation<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优点： 获取的定位点是获取的位置APP获取的GPS数据，定位点比较准确，偏移较小，且IOS和安卓系统差异很小。</li><li>缺点： 由于是H5开发，也就是说H5页面需要嵌入的小程序中，而且需要前后端配合才能记录定好点数据。</li></ul><p>最终选择的是微信小程序API的方案，将H5嵌入到小程序的页面中，在进入小程序webview页面时实时获取定位数据并调用后端接口发送到后端，在H5页面中调用后端接口获取后端返回的实时位置数据，接口时间差很小，且不会丢失点位，最终实现实时经纬度位置记录。</p>`,20),c=[e];function l(o,i){return s(),a("div",null,c)}const k=n(t,[["render",l],["__file","20240406.html.vue"]]),r=JSON.parse('{"path":"/blogs/Frontend/20240406.html","title":"关于在H5中获取实时位置各种方案的对比","lang":"en-US","frontmatter":{"title":"关于在H5中获取实时位置各种方案的对比","date":"2023-04-06T00:00:00.000Z","tags":["H5开发","GPS定位"],"categories":["Frontend"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"腾讯地图","slug":"腾讯地图","link":"#腾讯地图","children":[]},{"level":2,"title":"高德地图","slug":"高德地图","link":"#高德地图","children":[]},{"level":2,"title":"天地图","slug":"天地图","link":"#天地图","children":[]},{"level":2,"title":"企业微信API","slug":"企业微信api","link":"#企业微信api","children":[]},{"level":2,"title":"微信小程序API","slug":"微信小程序api","link":"#微信小程序api","children":[]}],"git":{"createdTime":1725437688000,"updatedTime":1725437688000,"contributors":[{"name":"wanggang","email":"wanggang@shouyinongye.com","commits":1}]},"filePathRelative":"blogs/Frontend/20240406.md"}');export{k as comp,r as data};
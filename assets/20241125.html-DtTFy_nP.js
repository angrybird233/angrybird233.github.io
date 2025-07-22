import{_ as t,c as d,b as i,a as s,d as e,e as l,o as r,r as p}from"./app-Bq_Zj9jQ.js";const c="/assets/http2.0-DmPQ2xqi.png",o={},v={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.openssl.org/source/",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const a=p("ExternalLinkIcon");return r(),d("div",null,[n[5]||(n[5]=i(`<h2 id="_1-什么是http2-0" tabindex="-1"><a class="header-anchor" href="#_1-什么是http2-0"><span>1. 什么是HTTP2.0</span></a></h2><p>HTTP2.0是HTTP协议的升级版，HTTP2.0在HTTP1.1的基础上，优化了传输性能，同时增加了很多新的特性，比如多路复用、服务器推送、头部压缩等。HTTP2.0的传输性能比HTTP1.1有了很大的提升。</p><table><colgroup><col style="width:15%;"><col style="width:30%;"><col style="width:30%;"><col style="width:25%;"></colgroup><thead><tr><th><strong>特 性</strong></th><th><strong>HTTP/1.1</strong></th><th><strong>HTTP/2</strong></th><th><strong>提升点</strong></th></tr></thead><tbody><tr><td><strong>1. 协议格式</strong></td><td>基于文本协议，消息以纯文本格式传输。</td><td>基于二进制协议，消息以二进制帧（frames）的形式传输。</td><td>二进制协议更高效，解析速度更快，减少了错误处理的开销。</td></tr><tr><td><strong>2. 多路复用</strong></td><td>每个请求需要单独的 TCP 连接，或使用持久连接（Keep-Alive），但请求是串行处理的。</td><td>允许在同一个 TCP 连接上同时发送多个请求和响应，请求和响应可以交错传输。</td><td>减少了连接数量，降低了延迟，避免了“队头阻塞”问题。</td></tr><tr><td><strong>3. 头部压缩</strong></td><td>每次请求和响应都会发送完整的 HTTP 头部，即使头部信息与之前的请求相同。</td><td>使用 HPACK 压缩算法对 HTTP 头部进行压缩，减少了重复头部信息的传输。</td><td>显著减少了头部的大小，降低了带宽消耗。</td></tr><tr><td><strong>4. 服务器推送</strong></td><td>服务器只能被动响应客户端的请求。</td><td>服务器可以主动向客户端推送资源，而无需客户端明确请求。</td><td>减少了客户端请求的等待时间，提高了页面加载速度。</td></tr><tr><td><strong>5. 流优先级</strong></td><td>没有内置的优先级机制，所有请求默认是平等的。</td><td>允许客户端为每个请求设置优先级，服务器可以根据优先级调整资源的传输顺序。</td><td>优化了关键资源的加载顺序，提升了用户体验。</td></tr><tr><td><strong>6. 安全性</strong></td><td>可以运行在 HTTP 或 HTTPS 上。</td><td>主流浏览器（如 Chrome、Firefox）只支持通过 HTTPS 使用 HTTP/2。</td><td>推动了 HTTPS 的普及，提高了数据传输的安全性。</td></tr><tr><td><strong>7. 延迟</strong></td><td>由于队头阻塞和多次握手，延迟较高。</td><td>通过多路复用、头部压缩和服务器推送等技术，显著减少了延迟。</td><td>提升了 Web 应用的响应速度。</td></tr><tr><td><strong>8. 兼容性</strong></td><td>不兼容 HTTP/2。</td><td>完全兼容 HTTP/1.1 的语义（如方法、状态码、头部字段等）。</td><td>现有的 Web 应用可以无缝迁移到 HTTP/2。</td></tr></tbody></table><h2 id="_2-如何使用http2-0" tabindex="-1"><a class="header-anchor" href="#_2-如何使用http2-0"><span>2. 如何使用HTTP2.0</span></a></h2><h4 id="a-在服务器上安装nginx-配置nginx-conf文件-开启http2-0" tabindex="-1"><a class="header-anchor" href="#a-在服务器上安装nginx-配置nginx-conf文件-开启http2-0"><span>a. 在服务器上安装nginx，配置nginx.conf文件，开启http2.0</span></a></h4><ul><li>安装或升级你的nginx版本，需要nginx &gt;= 1.9.5 在 Ubuntu/Debian 上</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 CentOS/RHEL 上 <code>sudo yum install nginx</code></p><ul><li>安装openssl 首先，检查系统是否已经安装了 OpenSSL 以及当前版本：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">  openssl version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果系统已经安装了 OpenSSL，那么会显示 OpenSSL 的版本信息。如果系统没有安装 OpenSSL，那么会显示“command not found”错误。 接下来，安装 OpenSSL：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> openssl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加SSL支持 要想添加SSL支持就需要添加证书，一种方式是购买或者在网上有一些免费的SSL证书可用，如果只是在测试环境中的话，还可以生成自签名证书。 安装好openssl后执行下面的命令然后需要输入名称、公司等等信息</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-newkey</span> rsa:4096 <span class="token parameter variable">-keyout</span> C:<span class="token punctuation">\\</span>ssl_certs<span class="token punctuation">\\</span>localhost.key <span class="token parameter variable">-out</span> C:<span class="token punctuation">\\</span>ssl_certs<span class="token punctuation">\\</span>localhost.crt <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-nodes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>如果在正式环境中，你需要购买或生成一个有效的SSL证书，然后配置nginx以使用它。</p></li><li><p>配置nginx.conf文件，开启http2.0</p></li></ul><p>修改的地方有两个地方</p><div class="language-nginx.conf line-numbers-mode" data-highlighter="prismjs" data-ext="nginx.conf" data-title="nginx.conf"><pre><code><span class="line"># 重定向 HTTP 到 HTTPS</span>
<span class="line">server {</span>
<span class="line">  listen       80;</span>
<span class="line">  server_name  www.xxx.com;</span>
<span class="line">  return       301 https://$host$request_uri;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nginx.conf line-numbers-mode" data-highlighter="prismjs" data-ext="nginx.conf" data-title="nginx.conf"><pre><code><span class="line"># HTTPS server</span>
<span class="line">  server {</span>
<span class="line">    # 添加 http2 支持</span>
<span class="line">    listen       443 ssl http2; </span>
<span class="line">    server_name  www.xxx.com;</span>
<span class="line"></span>
<span class="line">    ssl_certificate      /etc/ssl/localhost.crt;  # 替换为你的证书路径</span>
<span class="line">    ssl_certificate_key  /etc/ssl/localhost.key;   # 替换为你的密钥路径</span>
<span class="line"></span>
<span class="line">    ssl_session_cache    shared:SSL:1m;</span>
<span class="line">    ssl_session_timeout  5m;</span>
<span class="line"></span>
<span class="line">    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
<span class="line">    ssl_prefer_server_ciphers  on;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        root   html;</span>
<span class="line">        index  index.html index.htm;</span>
<span class="line">        try_files $uri $uri/ index.html;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    error_page   500 502 503 504  /50x.html;</span>
<span class="line">    location = /50x.html {</span>
<span class="line">        root   html;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    # 静态文件缓存配置</span>
<span class="line">    location ~* \\.(jpg|jpeg|png|gif|ico|css|js|pdf)$ {</span>
<span class="line">        expires 30d;</span>
<span class="line">        add_header Cache-Control &quot;public, no-transform&quot;;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试nginx配置文件，并重启nginx，查看网页是否已经是http2.0 <img src="`+c+'" alt="" style="width:100%;height:auto;"></li></ul><h4 id="b-在windows本地安装nginx-配置nginx-conf文件-开启http2-0" tabindex="-1"><a class="header-anchor" href="#b-在windows本地安装nginx-配置nginx-conf文件-开启http2-0"><span>b. 在windows本地安装nginx，配置nginx.conf文件，开启http2.0</span></a></h4><p>开启nginx http2支持的条件： 1、openssl &gt;= 1.0.2 2、nginx &gt;= 1.9.5</p>',21)),s("ul",null,[s("li",null,[n[1]||(n[1]=e("下载nginx，")),s("a",v,[n[0]||(n[0]=e("下载")),l(a)])]),s("li",null,[n[3]||(n[3]=e("安装openssl，")),s("a",u,[n[2]||(n[2]=e("下载")),l(a)])]),n[4]||(n[4]=s("li",null,"配置nginx.conf文件，开启http2.0",-1))]),n[6]||(n[6]=i(`<div class="language-nginx.conf line-numbers-mode" data-highlighter="prismjs" data-ext="nginx.conf" data-title="nginx.conf"><pre><code><span class="line">#user  nobody;</span>
<span class="line">worker_processes  1;</span>
<span class="line"></span>
<span class="line">#error_log  logs/error.log;</span>
<span class="line">#error_log  logs/error.log  notice;</span>
<span class="line">#error_log  logs/error.log  info;</span>
<span class="line"></span>
<span class="line">#pid        logs/nginx.pid;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">events {</span>
<span class="line">    worker_connections  1024;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">http {</span>
<span class="line">    include       mime.types;</span>
<span class="line">    default_type  application/octet-stream;</span>
<span class="line"></span>
<span class="line">    sendfile        on;</span>
<span class="line"></span>
<span class="line">    #keepalive_timeout  0;</span>
<span class="line">    keepalive_timeout  65;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    # 重定向 HTTP 到 HTTPS</span>
<span class="line">    server {</span>
<span class="line">      listen       80;</span>
<span class="line">      server_name  localhost;</span>
<span class="line">      return       301 https://$host$request_uri;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    # HTTPS server</span>
<span class="line">    #</span>
<span class="line">    server {</span>
<span class="line">      listen       443 ssl http2;</span>
<span class="line">      server_name  localhost;</span>
<span class="line"></span>
<span class="line">      ssl_certificate      ssl/localhost.crt;  # 替换为你的证书路径</span>
<span class="line">      ssl_certificate_key  ssl/localhost.key;   # 替换为你的密钥路径</span>
<span class="line"></span>
<span class="line">      ssl_session_cache    shared:SSL:1m;</span>
<span class="line">      ssl_session_timeout  5m;</span>
<span class="line"></span>
<span class="line">      ssl_ciphers  HIGH:!aNULL:!MD5;</span>
<span class="line">      ssl_prefer_server_ciphers  on;</span>
<span class="line"></span>
<span class="line">      location / {</span>
<span class="line">          root   html;</span>
<span class="line">          index  index.html index.htm;</span>
<span class="line">          try_files $uri $uri/ index.html;</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      error_page   500 502 503 504  /50x.html;</span>
<span class="line">      location = /50x.html {</span>
<span class="line">          root   html;</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      # 静态文件缓存配置</span>
<span class="line">      location ~* \\.(jpg|jpeg|png|gif|ico|css|js|pdf)$ {</span>
<span class="line">          expires 30d;</span>
<span class="line">          add_header Cache-Control &quot;public, no-transform&quot;;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const g=t(o,[["render",m],["__file","20241125.html.vue"]]),x=JSON.parse('{"path":"/blogs/Frontend/20241125.html","title":"如何让你的网站使用HTTP2.0","lang":"en-US","frontmatter":{"title":"如何让你的网站使用HTTP2.0","date":"2024-11-25T00:00:00.000Z","tags":["性能优化","nginx"],"categories":["Frontend"]},"headers":[{"level":2,"title":"1. 什么是HTTP2.0","slug":"_1-什么是http2-0","link":"#_1-什么是http2-0","children":[]},{"level":2,"title":"2. 如何使用HTTP2.0","slug":"_2-如何使用http2-0","link":"#_2-如何使用http2-0","children":[]}],"git":{"createdTime":1753180835000,"updatedTime":1753180835000,"contributors":[{"name":"wanggang","email":"1587254004@qq.com","commits":1}]},"filePathRelative":"blogs/Frontend/20241125.md"}');export{g as comp,x as data};

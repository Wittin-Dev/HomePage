const HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>蔚汀Wittin - 导航页</title>
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      color: #fff;
      text-align: center;
      background: url('Background1.png') center / cover no-repeat fixed;
      transition: background-image 0.5s ease;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      z-index: 0;
      pointer-events: none;
      transition: background 0.5s ease;
    }

    @media (max-width: 768px) {
      body { background-image: url('Background2.png'); }
      body::before { background: rgba(0, 0, 0, 0.40); }
    }

    /* ========== Hero ========== */
    .hero {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 30px;
    }

    .hero-card {
      transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .hero-card:hover {
      transform: scale(1.04);
    }

    .hero-inner {
      background: rgba(0, 0, 0, 0.28);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 16px;
      padding: 48px 56px;
      animation: heroIn 1s cubic-bezier(0.22, 0.61, 0.36, 1) both;
    }

    @keyframes heroIn {
      from { opacity: 0; transform: translateY(30px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ====== 名字 ====== */
    .name {
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 0.6rem;
      line-height: 1.2;
      animation: nameGlow 3s ease-in-out infinite;
    }

    @keyframes nameGlow {
      0%, 100% { text-shadow: 0 0 0 rgba(255,255,255,0); }
      50%      { text-shadow: 0 0 28px rgba(255,255,255,0.16); }
    }

    /* ====== 签名 ====== */
    .tagline {
      font-size: 1.05rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.75);
      margin-bottom: 2.8rem;
      letter-spacing: 0.05em;
      animation: fadeUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 0.30s both;
    }

    /* ====== 按钮 ====== */
    .btn {
      display: inline-block;
      padding: 0.75rem 2.6rem;
      border: 2px solid rgba(255, 255, 255, 0.85);
      color: #fff;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      border-radius: 28px;
      transition: all 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
      background: transparent;
      cursor: pointer;
      animation: fadeUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 0.50s both,
                 btnPulse 2.8s ease-in-out 1.8s infinite;
    }

    .btn:hover {
      background: #fff;
      color: #1a1a1a;
      border-color: #fff;
    }

    @keyframes btnPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
      50%      { box-shadow: 0 0 22px 6px rgba(255,255,255,0.10); }
    }

    /* ====== 社交链接 ====== */
    .links {
      display: flex;
      gap: 1.8rem;
      margin-top: 3rem;
      justify-content: center;
    }

    .links a {
      font-size: 0.8rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.55);
      text-decoration: none;
      letter-spacing: 0.06em;
      position: relative;
      transition: color 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
      animation: fadeUp 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0.65s both;
    }

    .links a::after {
      content: '';
      position: absolute;
      left: 50%; bottom: -4px;
      width: 0;
      height: 1.5px;
      background: #fff;
      transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
      transform: translateX(-50%);
    }
    .links a:hover { color: #fff; }
    .links a:hover::after { width: 100%; }

    /* ========== 下滑箭头 ========== */
    .scroll-hint {
      position: absolute;
      bottom: 36px;
      left: 50%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      animation: hintIn 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 1.2s both;
    }

    @keyframes hintIn {
      from { opacity: 0; transform: translateX(-50%) translateY(14px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }

    .scroll-hint span {
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      color: rgba(255, 255, 255, 0.55);
      text-align: center;
    }

    .scroll-arrow {
      width: 20px;
      height: 20px;
      border-right: 2px solid rgba(255, 255, 255, 0.55);
      border-bottom: 2px solid rgba(255, 255, 255, 0.55);
      transform: rotate(45deg);
      animation: arrowBreath 2.2s ease-in-out infinite;
    }

    @keyframes arrowBreath {
      0%, 100% { opacity: 0.18; }
      50%      { opacity: 0.72; }
    }

    /* ========== 工具栏 ========== */
    .tools {
      position: relative;
      z-index: 1;
      width: 100%;
      padding: 60px 30px 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1),
                  transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .tools.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .tools-card {
      transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .tools-card:hover {
      transform: scale(1.04);
    }

    .tools-inner {
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 16px;
      padding: 28px 36px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .tools-label {
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: rgb(255, 255, 255);
      margin-bottom: 10px;
      text-align: center;
    }

    .tool-item {
      display: inline-block;
      padding: 0.55rem 1.5rem;
      background: rgba(255, 255, 255, 0.10);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 8px;
      color: rgba(255, 255, 255, 0.78);
      font-size: 0.82rem;
      font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.04em;
      transition: all 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .tool-item:hover {
      background: rgba(255, 255, 255, 0.22);
      border-color: rgba(255, 255, 255, 0.45);
      color: #fff;
    }

    /* ========== 共用动画 ========== */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ========== 响应式 ========== */
    @media (max-width: 768px) {
      .hero-inner { padding: 36px 32px; }
      .tools-inner { padding: 22px 24px; }
      .name  { font-size: 2.5rem; }
      .tagline { font-size: 0.95rem; margin-bottom: 2.2rem; }
      .btn   { padding: 0.65rem 2.2rem; font-size: 0.9rem; }
      .links { gap: 1.4rem; margin-top: 2.5rem; }
      .scroll-hint { bottom: 28px; }
    }

    @media (max-width: 480px) {
      .hero-inner { padding: 28px 22px; border-radius: 12px; }
      .tools-inner { padding: 18px 16px; border-radius: 12px; gap: 10px; }
      .name  { font-size: 2rem; }
      .tagline { font-size: 0.85rem; }
      .links { gap: 1rem; }
      .tool-item { padding: 0.45rem 1.1rem; font-size: 0.78rem; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-card">
      <div class="hero-inner">
        <h1 class="name">蔚汀Wittin</h1>
        <p class="tagline">心存迷惘未尝不可，不置可否亦未尝不可</p>
        <a class="btn" href="https://blog.wittin.cc/">进入博客</a>
        <nav class="links">
          <a href="https://github.com/Wittin-Dev/HomePage">GitHub</a>
        </nav>
      </div>
    </div>

    <div class="scroll-hint" onclick="var t=document.querySelector('.tools');t.classList.add('visible');t.scrollIntoView({behavior:'smooth'})">
      <span>工具</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>

  <section class="tools" id="tools">
    <div class="tools-card">
      <div class="tools-inner">
        <span class="tools-label">工具</span>
        <a class="tool-item" href="#">JSON 格式化</a>
        <a class="tool-item" href="#">Base64 编解码</a>
        <a class="tool-item" href="#">二维码生成</a>
        <a class="tool-item" href="#">时间戳转换</a>
      </div>
    </div>
  </section>

  <script>
    (function () {
      var bg = document.createElement('div');
      bg.style.position = 'fixed';
      bg.style.inset = '0';
      bg.style.zIndex = '-1';
      bg.style.pointerEvents = 'none';
      bg.style.transition = 'opacity 0.5s ease';

      function setBg() {
        var isMobile = window.innerWidth <= 768;
        bg.style.background = 'url(\'' + (isMobile ? 'Background2.png' : 'Background1.png') + '\') center / cover no-repeat fixed';
      }

      setBg();
      document.body.prepend(bg);
      window.addEventListener('resize', setBg);
    })();

    (function () {
      var tools = document.getElementById('tools');
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tools.classList.add('visible');
          }
        });
      }, { threshold: 0 });

      observer.observe(tools);
    })();
  </script>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 首页 — 返回 HTML
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    // 静态资源 — 委托给 Assets 绑定
    try {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) {
        return asset;
      }
    } catch (e) {
      // 资产不存在，走 404
    }

    return new Response('Not Found', { status: 404 });
  },
};
const modal = document.querySelector('#mediaModal');
const modalBody = document.querySelector('#modalBody');
const modalTitle = document.querySelector('#modalTitle');
const modalClose = document.querySelector('.modal-close');
const sectionTabs = [...document.querySelectorAll('[data-tab]')];
const tabPanels = [...document.querySelectorAll('.tab-panel')];
const themeToggle = document.querySelector('#themeToggle');
const chinaTime = document.querySelector('#chinaTime');

const galleries = {
  dify: {
    title: '服装单款选款诊断智能体流程',
    className: '',
    images: [
      ['assets/images/dify-workflow.png', 'Dify完整工作流架构'],
      ['assets/images/dify-input.png', '应用输入与资料填写']
    ]
  },
  h5: {
    title: '商家经营诊断H5页面',
    className: 'h5',
    images: [
      ['assets/images/h5-home.png', 'H5首页'],
      ['assets/images/h5-industry.png', '行业选择页'],
      ['assets/images/h5-painpoints.png', '痛点选择页']
    ]
  },
  certificates: {
    title: '专业证书',
    className: 'certificates',
    images: [
      ['assets/images/certificate-ai-agent.png', 'AI智能体应用开发工程师高级专业技术证书'],
      ['assets/images/certificate-ai-course.png', '人工智能与创业智慧课程认证']
    ]
  },
  'sales-stages': {
    title: '抖音女装多阶段经营数据',
    className: 'sales-stages',
    images: [
      ['assets/images/proof-stage-1558.jpg', '阶段成交15.58万元、订单942单', '成交15.58万元 · 942单'],
      ['assets/images/proof-stage-1128.jpg', '阶段成交11.28万元、订单678单', '成交11.28万元 · 678单'],
      ['assets/images/proof-stage-1295-crop.jpg', '阶段成交12.95万元、订单1013单', '成交12.95万元 · 1013单', 'crop-top'],
      ['assets/images/proof-stage-1383.jpg', '阶段成交13.83万元、订单698单', '成交13.83万元 · 698单']
    ]
  }
};

const agentShowcases = [
  {
    index: '01',
    title: '闲置物品种草官',
    description: '根据闲置物品信息生成卖点梳理、种草表达和发布文案。',
    image: 'assets/images/coze-idle.jpg',
    video: 'assets/videos/coze-idle-demo.mp4',
    tag: '商品理解 · 种草文案'
  },
  {
    index: '02',
    title: '链接生成热门标题与文案',
    description: '读取商品或内容链接，提炼信息并生成适合传播的标题与文案。',
    image: 'assets/images/coze-copywriting-output.jpg',
    video: 'assets/videos/coze-copywriting-demo.mp4',
    tag: '链接解析 · 内容生成'
  },
  {
    index: '03',
    title: 'AI课程知识库学习助手',
    description: '基于课程资料检索回答，并对比通用回答与知识库回答。',
    image: 'assets/images/coze-course-output.jpg',
    video: 'assets/videos/coze-course-demo.mp4',
    tag: '知识库 · 学习问答'
  },
  {
    index: '04',
    title: '皮肤护理咨询助手',
    description: '收集基础护理诉求，输出结构化的日常护理建议与注意事项。',
    image: 'assets/images/coze-skincare-output.jpg',
    video: 'assets/videos/coze-skincare-demo.mp4',
    tag: '需求识别 · 结构化建议'
  }
];

const portfolioWorks = [
  { category: 'food', title: '春江骊宴｜竹韵火灼鲜椒焗牛肉', service: '上门拍摄＋剪辑', duration: '00:27', poster: 'assets/portfolio/posters/chunjiang-beef.jpg', video: 'assets/portfolio/videos/chunjiang-beef.mp4', orientation: 'portrait' },
  { category: 'food', title: '见山川｜菜品展示', service: '上门拍摄＋剪辑', duration: '00:19', poster: 'assets/portfolio/posters/jianshanchuan-food.jpg', video: 'assets/portfolio/videos/jianshanchuan-food.mp4', orientation: 'portrait' },
  { category: 'food', title: '春江骊宴｜餐厅空间展示', service: '上门拍摄＋剪辑', duration: '00:51', poster: 'assets/portfolio/posters/chunjiang-space.jpg', video: 'assets/portfolio/videos/chunjiang-space.mp4', orientation: 'landscape' },
  { category: 'food', title: '春江骊宴｜主厨讲解与菜品制作', service: '上门拍摄＋剪辑', duration: '01:17', poster: 'assets/portfolio/posters/chunjiang-chef.jpg', video: 'assets/portfolio/videos/chunjiang-chef.mp4', orientation: 'portrait' },
  { category: 'food', title: '见山川｜麻婆豆腐', service: '拍摄＋剪辑 · 真实数据案例', duration: '00:31', poster: 'assets/portfolio/posters/jianshanchuan-mapo.jpg', video: 'assets/videos/merchant-demo.mp4', orientation: 'portrait' },
  { category: 'food', title: '见山川｜爆炒腰肝', service: '拍摄＋剪辑', duration: '00:36', poster: 'assets/portfolio/posters/jianshanchuan-liver.jpg', video: 'assets/portfolio/videos/jianshanchuan-liver.mp4', orientation: 'portrait' },
  { category: 'food', title: '咖啡｜AI展示短片', service: 'AI视觉＋剪辑', duration: '00:15', poster: 'assets/portfolio/posters/coffee-ai.jpg', video: 'assets/portfolio/videos/coffee-ai.mp4', orientation: 'portrait' },
  { category: 'food', title: '见山川｜门店导引', service: '拍摄＋剪辑', duration: '00:57', poster: 'assets/portfolio/posters/jianshanchuan-guide.jpg', video: 'assets/portfolio/videos/jianshanchuan-guide.mp4', orientation: 'portrait' },
  { category: 'food', title: '见山川｜肥肠麻辣鱼', service: '拍摄＋剪辑', duration: '00:58', poster: 'assets/portfolio/posters/jianshanchuan-fish.jpg', video: 'assets/portfolio/videos/jianshanchuan-fish.mp4', orientation: 'portrait' },
  { category: 'food', title: '咘呐呐辅食店｜门店探访', service: '上门拍摄＋剪辑', duration: '01:01', poster: 'assets/portfolio/posters/bunana-store.jpg', video: 'assets/portfolio/videos/bunana-store.mp4', orientation: 'portrait' },
  { category: 'food', title: '咘呐呐辅食店｜小鸡包制作', service: '产品拍摄＋剪辑', duration: '01:05', poster: 'assets/portfolio/posters/bunana-chicken-bun.jpg', video: 'assets/portfolio/videos/bunana-chicken-bun.mp4', orientation: 'portrait' },
  { category: 'womenswear', title: '女装｜日常穿搭展示', service: 'AI设计＋剪辑', duration: '00:09', poster: 'assets/portfolio/posters/womenswear-ai-01.jpg', video: 'assets/portfolio/videos/womenswear-ai-01.mp4', orientation: 'portrait' },
  { category: 'womenswear', title: '女装｜礼服时尚展示', service: 'AI设计＋剪辑', duration: '00:29', poster: 'assets/portfolio/posters/womenswear-ai-02.jpg', video: 'assets/portfolio/videos/womenswear-ai-02.mp4', orientation: 'portrait' },
  { category: 'womenswear', title: '女装｜氛围场景短片', service: 'AI设计＋剪辑', duration: '00:17', poster: 'assets/portfolio/posters/womenswear-ai-03.jpg', video: 'assets/portfolio/videos/womenswear-ai-03.mp4', orientation: 'landscape' },
  { category: 'jewelry', title: '珠宝｜口播切片', service: '编排＋剪辑', duration: '00:16', poster: 'assets/portfolio/posters/jewelry-talking.jpg', video: 'assets/portfolio/videos/jewelry-talking.mp4', orientation: 'portrait' },
  { category: 'basketball', title: '少儿篮球｜课堂记录', service: '客户提供素材 · 剪辑包装', duration: '02:07', poster: 'assets/portfolio/posters/basketball-class.jpg', video: 'assets/portfolio/videos/basketball-class.mp4', orientation: 'landscape' },
  { category: 'talking', title: '人物口播｜字幕与信息包装', service: '客户提供素材 · 剪辑包装', duration: '01:15', poster: 'assets/portfolio/posters/talking-head.jpg', video: 'assets/portfolio/videos/talking-head.mp4', orientation: 'portrait' },
  { category: 'talking', title: '医美口播｜皮肤选品解析', service: '口播剪辑＋信息包装', duration: '00:38', poster: 'assets/portfolio/posters/medical-aesthetics-talking.jpg', video: 'assets/portfolio/videos/medical-aesthetics-talking.mp4', orientation: 'portrait' },
  { category: 'shortfilm', title: '原创短剧｜惊悚悬疑', service: '剧情策划＋剪辑包装', duration: '00:46', poster: 'assets/portfolio/posters/thriller-short-film.jpg', video: 'assets/portfolio/videos/thriller-short-film.mp4', orientation: 'portrait' }
];

const openModal = (title, content) => {
  modalTitle.textContent = title;
  modalBody.replaceChildren(content);
  if (!modal.open) modal.showModal();
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  const video = modalBody.querySelector('video');
  if (video) video.pause();
  modal.close();
  modalBody.replaceChildren();
  document.body.classList.remove('modal-open');
};

const openVideo = (button) => {
  const video = document.createElement('video');
  video.src = button.dataset.video;
  video.controls = true;
  video.playsInline = true;
  video.preload = 'metadata';
  openModal(button.dataset.title || '项目演示', video);
  video.play().catch(() => {});
};

const openGallery = (key) => {
  const data = galleries[key];
  if (!data) return;
  const wrapper = document.createElement('div');
  wrapper.className = `gallery-grid ${data.className}`;
  data.images.forEach(([src, alt, label, variant]) => {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.loading = 'lazy';
    if (!label) {
      wrapper.append(image);
      return;
    }
    const figure = document.createElement('figure');
    figure.className = `proof-card ${variant || ''}`;
    const frame = document.createElement('div');
    frame.className = 'proof-image-frame';
    const caption = document.createElement('figcaption');
    caption.textContent = label;
    frame.append(image);
    figure.append(frame, caption);
    wrapper.append(figure);
  });
  openModal(data.title, wrapper);
};

const openProof = (button) => {
  const image = document.createElement('img');
  image.src = button.dataset.proof;
  image.alt = button.dataset.title || '数据凭证';
  image.className = 'modal-image';
  openModal(button.dataset.title || '数据凭证', image);
};

const openAgentShowcase = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'agent-showcase';

  const intro = document.createElement('div');
  intro.className = 'agent-showcase-intro';
  intro.innerHTML = '<p>COZE · FOUR WORKING PROTOTYPES</p><h3>四个场景，四段真实运行演示</h3><span>点击任一案例即可播放对应的客户端演示视频。</span>';

  const grid = document.createElement('div');
  grid.className = 'agent-case-grid';
  agentShowcases.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'agent-case-card';
    card.innerHTML = `
      <button class="agent-case-media" type="button" data-video="${item.video}" data-title="${item.title}｜运行演示">
        <img src="${item.image}" alt="${item.title}演示界面" loading="lazy" />
        <span class="agent-case-play" aria-hidden="true">▶</span>
        <span class="agent-case-index">${item.index}</span>
      </button>
      <div class="agent-case-copy">
        <p>${item.tag}</p>
        <h4>${item.title}</h4>
        <span>${item.description}</span>
        <button type="button" data-video="${item.video}" data-title="${item.title}｜运行演示">播放演示 ↗</button>
      </div>`;
    grid.append(card);
  });

  wrapper.append(intro, grid);
  openModal('多场景智能体与知识库', wrapper);
};

const renderPortfolioWorks = (filter = 'all') => {
  const grid = document.querySelector('#portfolioGrid');
  if (!grid) return;
  const works = filter === 'all' ? portfolioWorks : portfolioWorks.filter((work) => work.category === filter);
  grid.replaceChildren(...works.map((work) => {
    const card = document.createElement('article');
    card.className = `portfolio-card ${work.orientation}`;
    card.innerHTML = `
      <button class="portfolio-card-media" type="button" data-video="${work.video}" data-title="${work.title}">
        <img src="${work.poster}" alt="${work.title}作品封面" loading="lazy" />
        <span class="portfolio-card-play" aria-hidden="true">▶</span>
        <span class="portfolio-card-duration">${work.duration}</span>
      </button>
      <div class="portfolio-card-copy"><h4>${work.title}</h4><p>${work.service}</p></div>`;
    return card;
  }));
};

const activateTab = (name, options = {}) => {
  if (!sectionTabs.some((tab) => tab.dataset.tab === name)) name = 'work';
  sectionTabs.forEach((tab) => {
    const active = tab.dataset.tab === name;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  tabPanels.forEach((panel) => {
    const active = panel.id === `panel-${name}`;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
  if (options.updateHash !== false) history.replaceState(null, '', `#${name}`);
  if (options.scroll) document.querySelector('.portfolio-sections').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

sectionTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const next = sectionTabs[(index + direction + sectionTabs.length) % sectionTabs.length];
    next.focus();
    activateTab(next.dataset.tab);
  });
});

document.addEventListener('click', (event) => {
  const videoButton = event.target.closest('[data-video]');
  if (videoButton) return openVideo(videoButton);
  const galleryButton = event.target.closest('[data-gallery]');
  if (galleryButton) return openGallery(galleryButton.dataset.gallery);
  const proofButton = event.target.closest('[data-proof]');
  if (proofButton) return openProof(proofButton);
  const agentShowcaseButton = event.target.closest('[data-agent-showcase]');
  if (agentShowcaseButton) return openAgentShowcase();
  const tabTarget = event.target.closest('[data-tab-target]');
  if (tabTarget) activateTab(tabTarget.dataset.tabTarget, { scroll: true });
  const filterButton = event.target.closest('[data-work-filter]');
  if (filterButton) {
    document.querySelectorAll('[data-work-filter]').forEach((item) => item.classList.remove('is-active'));
    filterButton.classList.add('is-active');
    renderPortfolioWorks(filterButton.dataset.workFilter);
  }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.open) closeModal(); });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.09 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const updateTime = () => {
  const value = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
  chinaTime.textContent = `杭州 ${value}`;
};
updateTime();
setInterval(updateTime, 30000);

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  themeToggle.querySelector('span').textContent = theme === 'dark' ? '☾' : '☼';
};
let savedTheme = 'light';
try { savedTheme = localStorage.getItem('portfolio-theme') || 'light'; } catch (error) {}
applyTheme(savedTheme);
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('portfolio-theme', next); } catch (error) {}
});

renderPortfolioWorks();
const initialTab = location.hash.replace('#', '');
activateTab(initialTab || 'work', { updateHash: Boolean(initialTab) });

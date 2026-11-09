const header = document.querySelector('#siteHeader');
const navToggle = document.querySelector('#navToggle');
const siteNav = document.querySelector('#siteNav');
const modal = document.querySelector('#mediaModal');
const modalBody = document.querySelector('#modalBody');
const modalTitle = document.querySelector('#modalTitle');
const modalClose = document.querySelector('.modal-close');

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

const portfolioWorks = [
  { id: 'chunjiang-beef', category: 'food', title: '春江骊宴｜竹韵火灼鲜椒焗牛肉', service: '上门拍摄＋剪辑', duration: '00:27', poster: 'assets/portfolio/posters/chunjiang-beef.jpg', video: 'assets/portfolio/videos/chunjiang-beef.mp4', orientation: 'portrait' },
  { id: 'jianshanchuan-food', category: 'food', title: '见山川｜菜品展示', service: '上门拍摄＋剪辑', duration: '00:19', poster: 'assets/portfolio/posters/jianshanchuan-food.jpg', video: 'assets/portfolio/videos/jianshanchuan-food.mp4', orientation: 'portrait' },
  { id: 'chunjiang-space', category: 'food', title: '春江骊宴｜餐厅空间展示', service: '上门拍摄＋剪辑', duration: '00:51', poster: 'assets/portfolio/posters/chunjiang-space.jpg', video: 'assets/portfolio/videos/chunjiang-space.mp4', orientation: 'landscape' },
  { id: 'chunjiang-chef', category: 'food', title: '春江骊宴｜主厨讲解与菜品制作', service: '上门拍摄＋剪辑', duration: '01:17', poster: 'assets/portfolio/posters/chunjiang-chef.jpg', video: 'assets/portfolio/videos/chunjiang-chef.mp4', orientation: 'portrait' },
  { id: 'jianshanchuan-mapo', category: 'food', title: '见山川｜麻婆豆腐', service: '拍摄＋剪辑 · 真实数据案例', duration: '00:31', poster: 'assets/portfolio/posters/jianshanchuan-mapo.jpg', video: 'assets/videos/merchant-demo.mp4', orientation: 'portrait' },
  { id: 'jianshanchuan-liver', category: 'food', title: '见山川｜爆炒腰肝', service: '拍摄＋剪辑', duration: '00:36', poster: 'assets/portfolio/posters/jianshanchuan-liver.jpg', video: 'assets/portfolio/videos/jianshanchuan-liver.mp4', orientation: 'portrait' },
  { id: 'coffee-ai', category: 'food', title: '咖啡｜AI展示短片', service: 'AI视觉＋剪辑', duration: '00:15', poster: 'assets/portfolio/posters/coffee-ai.jpg', video: 'assets/portfolio/videos/coffee-ai.mp4', orientation: 'portrait' },
  { id: 'jianshanchuan-guide', category: 'food', title: '见山川｜门店导引', service: '拍摄＋剪辑', duration: '00:57', poster: 'assets/portfolio/posters/jianshanchuan-guide.jpg', video: 'assets/portfolio/videos/jianshanchuan-guide.mp4', orientation: 'portrait' },
  { id: 'jianshanchuan-fish', category: 'food', title: '见山川｜肥肠麻辣鱼', service: '拍摄＋剪辑', duration: '00:58', poster: 'assets/portfolio/posters/jianshanchuan-fish.jpg', video: 'assets/portfolio/videos/jianshanchuan-fish.mp4', orientation: 'portrait' },
  { id: 'womenswear-ai-01', category: 'womenswear', title: '女装｜日常穿搭展示', service: 'AI设计＋剪辑', duration: '00:09', poster: 'assets/portfolio/posters/womenswear-ai-01.jpg', video: 'assets/portfolio/videos/womenswear-ai-01.mp4', orientation: 'portrait' },
  { id: 'womenswear-ai-02', category: 'womenswear', title: '女装｜礼服时尚展示', service: 'AI设计＋剪辑', duration: '00:29', poster: 'assets/portfolio/posters/womenswear-ai-02.jpg', video: 'assets/portfolio/videos/womenswear-ai-02.mp4', orientation: 'portrait' },
  { id: 'womenswear-ai-03', category: 'womenswear', title: '女装｜氛围场景短片', service: 'AI设计＋剪辑', duration: '00:17', poster: 'assets/portfolio/posters/womenswear-ai-03.jpg', video: 'assets/portfolio/videos/womenswear-ai-03.mp4', orientation: 'landscape' },
  { id: 'jewelry-talking', category: 'jewelry', title: '珠宝｜口播切片', service: '编排＋剪辑', duration: '00:16', poster: 'assets/portfolio/posters/jewelry-talking.jpg', video: 'assets/portfolio/videos/jewelry-talking.mp4', orientation: 'portrait' },
  { id: 'basketball-class', category: 'basketball', title: '少儿篮球｜课堂记录', service: '客户提供素材 · 剪辑包装', duration: '02:07', poster: 'assets/portfolio/posters/basketball-class.jpg', video: 'assets/portfolio/videos/basketball-class.mp4', orientation: 'landscape' },
  { id: 'talking-head', category: 'talking', title: '人物口播｜字幕与信息包装', service: '客户提供素材 · 剪辑包装', duration: '01:15', poster: 'assets/portfolio/posters/talking-head.jpg', video: 'assets/portfolio/videos/talking-head.mp4', orientation: 'portrait' }
];

const portfolioGrid = document.querySelector('#portfolioGrid');

const renderPortfolioWorks = (filter = 'all') => {
  if (!portfolioGrid) return;
  const works = filter === 'all'
    ? portfolioWorks
    : portfolioWorks.filter((work) => work.category === filter);

  portfolioGrid.replaceChildren(...works.map((work) => {
    const card = document.createElement('article');
    card.className = `portfolio-card ${work.orientation}`;
    card.dataset.category = work.category;
    card.innerHTML = `
      <button class="portfolio-card-media" type="button" data-video="${work.video}" data-title="${work.title}">
        <img src="${work.poster}" alt="${work.title}作品封面" loading="lazy" />
        <span class="portfolio-card-play" aria-hidden="true">▶</span>
        <span class="portfolio-card-duration">${work.duration}</span>
      </button>
      <div class="portfolio-card-copy">
        <h4>${work.title}</h4>
        <p>${work.service}</p>
      </div>`;
    return card;
  }));
};

renderPortfolioWorks();

document.querySelectorAll('[data-work-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-work-filter]').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderPortfolioWorks(button.dataset.workFilter);
    bindVideoButtons(portfolioGrid);
  });
});

const setHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

navToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('modal-open', open);
});

siteNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('modal-open');
  }
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 4) * 60, 180)}ms`;
  revealObserver.observe(element);
});

const openModal = (title, content) => {
  modalTitle.textContent = title;
  modalBody.replaceChildren(content);
  modal.showModal();
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  const video = modalBody.querySelector('video');
  if (video) video.pause();
  modal.close();
  document.body.classList.remove('modal-open');
  modalBody.replaceChildren();
};

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) closeModal();
});

const bindVideoButtons = (root = document) => {
  root.querySelectorAll('[data-video]').forEach((button) => {
    if (button.dataset.videoBound === 'true') return;
    button.dataset.videoBound = 'true';
    button.addEventListener('click', () => {
    const video = document.createElement('video');
    video.src = button.dataset.video;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    openModal(button.dataset.title || '项目演示', video);
    video.play().catch(() => {});
  });
  });
};

bindVideoButtons();

document.querySelectorAll('[data-gallery]').forEach((button) => {
  button.addEventListener('click', () => {
    const data = galleries[button.dataset.gallery];
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
      const imageFrame = document.createElement('div');
      imageFrame.className = 'proof-image-frame';
      const caption = document.createElement('figcaption');
      caption.textContent = label;
      imageFrame.append(image);
      figure.append(imageFrame, caption);
      wrapper.append(figure);
    });
    openModal(data.title, wrapper);
  });
});

document.querySelectorAll('[data-proof]').forEach((button) => {
  button.addEventListener('click', () => {
    const image = document.createElement('img');
    image.src = button.dataset.proof;
    image.alt = button.dataset.title || '数据凭证';
    image.className = 'modal-image';
    openModal(button.dataset.title || '数据凭证', image);
  });
});

const heroImage = document.querySelector('.hero-image');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    const offset = Math.min(window.scrollY * 0.045, 24);
    heroImage.style.transform = `scale(1.015) translateY(${offset}px)`;
  }, { passive: true });
}

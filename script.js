/* ==========================================================================
   3DE-Agent Project Page — Interactive Gallery, Hero Carousel & Lightbox
   ========================================================================== */

const DEMOS = [
  // Open-Ended Creative (19)
  {
    id: 'bear_hex_transparent',
    scene: 'Bear',
    shortLabel: 'Hex Cloaking Bear',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/bear_hex_transparent.mp4',
    prompt: 'Interleave the solid granite bear with scattered crisp hexagonal see-through windows revealing the reconstructed 3D trees and garden path directly behind it.'
  },
  {
    id: 'bicycle_rain_lightning',
    scene: 'Bicycle',
    shortLabel: 'Storm Lightning Strike',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/bicycle_rain_lightning.mp4',
    prompt: 'Transform the park bicycle scene into a pouring thunderstorm where a photorealistic high-voltage lightning bolt strikes the wet black bench, casting wet specular reflections through falling rain.'
  },
  {
    id: 'garden_lava_splash',
    scene: 'Garden',
    shortLabel: 'Lava Eruption & Scorch',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/garden_lava_splash.mp4',
    prompt: 'Turn the garden floor into cracked molten volcanic lava with a wide radial lava fountain erupting behind the table and heat-scorching the lava-facing edge of the wooden tabletop.'
  },
  {
    id: 'trex_flesh_revival',
    scene: 'T-Rex',
    shortLabel: 'T-Rex Flesh Revival',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/trex_flesh_revival.mp4',
    prompt: 'Bring the front half of the museum T-Rex skeleton to life with photorealistic living dinosaur flesh, scales, and jaws while keeping the rear bones fossil.'
  },
  {
    id: 'kitchen_voxel_rift',
    scene: 'Kitchen',
    shortLabel: 'Pixel-Voxel Rift',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/kitchen_voxel_rift.mp4',
    prompt: 'Tear a glowing purple dimensional rift through the center of the scene: keep the left side photorealistic while turning the right side into chunky 3D Minecraft pixel-voxel cubes.'
  },
  {
    id: 'bicycle_exploded',
    scene: 'Bicycle',
    shortLabel: 'Exploded View + Clouds',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/bicycle_exploded.mp4',
    prompt: 'Disassemble the bicycle into floating mechanical parts in mid-air with fluffy white 3D cloud-sculpted lettering labeling each component.'
  },
  {
    id: 'bear_nailong',
    scene: 'Bear',
    shortLabel: 'Nailong Rider',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/bear_nailong.mp4',
    prompt: 'Place a hilarious chubby yellow cartoon Nailong dragon wearing dark sunglasses riding proudly astride the granite bear statue\'s back.'
  },
  {
    id: 'bear_underwater',
    scene: 'Bear',
    shortLabel: 'Bear Underwater',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/bear_underwater.mp4',
    prompt: 'Give the bear a pair of wings and transform the entire scene into an underwater environment.'
  },
  {
    id: 'garden_portal',
    scene: 'Garden',
    shortLabel: 'Garden Portal',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/garden_portal.mp4',
    prompt: 'Create a magical portal, with half of the table and vase emerging through it from a palace-like scene.'
  },
  {
    id: 'face_xianxia_dragon',
    scene: 'Face',
    shortLabel: 'Xianxia Dragon',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/face_xianxia_dragon.mp4',
    prompt: 'Close his eyes calmly, add a glowing golden rune on his forehead, coil a 3D golden-white dragon around his shoulders, and float a bronze rune halo behind his head.'
  },
  {
    id: 'bicycle_enchanted',
    scene: 'Bicycle',
    shortLabel: 'Enchanted Forest',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/bicycle_enchanted.mp4',
    prompt: 'Turn the scene into a twilight enchanted forest, wrap warm fairy lights around the bicycle, and place a glowing glass lantern on the bench.'
  },
  {
    id: 'horns_obsidian_lava',
    scene: 'Horns',
    shortLabel: 'Obsidian Lava',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/horns_obsidian_lava.mp4',
    prompt: 'Transform the triceratops skull into dark volcanic obsidian with glowing molten lava fissures, fiery eye sockets, and crackling lightning between its horns.'
  },
  {
    id: 'kitchen_spotlight',
    scene: 'Kitchen',
    shortLabel: 'Purple Spotlight',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    featured: true,
    src: 'assets/videos/kitchen_spotlight.mp4',
    prompt: 'Raise the bucket and give the excavator a purple stage spotlight, with a soft circle of light underneath.'
  },
  {
    id: 'replica_cyberpunk',
    scene: 'Replica',
    shortLabel: 'Cyberpunk Solar',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    src: 'assets/videos/replica_cyberpunk.mp4',
    prompt: 'Turn the room into a dark cyberpunk night studio lit by magenta and cyan neon strips, with a glowing 3D holographic solar system above the table.'
  },
  {
    id: 'face_cyber_splitbg',
    scene: 'Face',
    shortLabel: 'Split Cybernetic',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    src: 'assets/videos/face_cyber_splitbg.mp4',
    prompt: 'Transform the right half of his face, hair, neck, shoulder, and background into an exposed cybernetic android and sci-fi mechanical wall while keeping the left half natural.'
  },
  {
    id: 'bear_petals',
    scene: 'Bear',
    shortLabel: 'Petal Shattering',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    src: 'assets/videos/bear_petals.mp4',
    prompt: 'Keep the front half of the granite bear intact while gradually shattering the rear half into floating granite shards and swirling pink cherry-blossom petals.'
  },
  {
    id: 'trex_moss',
    scene: 'T-Rex',
    shortLabel: 'Moss & Mushrooms',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    src: 'assets/videos/trex_moss.mp4',
    prompt: 'Overgrow the T-Rex skeleton with photorealistic lush green moss, bioluminescent blue mushrooms, and hanging vines.'
  },
  {
    id: 'stump_rockstar_fox',
    scene: 'Stump',
    shortLabel: 'Rockstar Fox',
    category: 'creative',
    catLabel: 'Open-Ended Creative',
    src: 'assets/videos/stump_rockstar_fox.mp4',
    prompt: 'Turn the stump scene into autumn and place a detailed cartoon fox wearing a black leather biker jacket and sunglasses holding an electric guitar.'
  }
];

/* ---------- Hero Featured Carousel (optional) ---------- */
const featuredDemos = DEMOS.filter(d => d.featured);
let heroIndex = 0;

const heroVideo = document.getElementById('heroVideo');
const heroScene = document.getElementById('heroScene');
const heroCategory = document.getElementById('heroCategory');
const heroPrompt = document.getElementById('heroPrompt');
const heroPills = document.getElementById('heroPills');

if (heroVideo && heroScene && heroCategory && heroPrompt && heroPills && featuredDemos.length > 0) {
  function renderHero(idx) {
    heroIndex = (idx + featuredDemos.length) % featuredDemos.length;
    const item = featuredDemos[heroIndex];
    heroVideo.src = item.src;
    heroVideo.play().catch(() => {});
    heroScene.textContent = item.scene;
    heroCategory.textContent = item.catLabel;
    heroCategory.className = 'cat-chip ' + (item.category === 'creative' ? 'creative' : '');
    heroPrompt.textContent = '\u201c' + item.prompt + '\u201d';

    Array.from(heroPills.children).forEach((btn, i) => {
      btn.classList.toggle('active', i === heroIndex);
    });
  }

  featuredDemos.forEach((item, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero-pill' + (i === 0 ? ' active' : '');
    btn.textContent = item.shortLabel;
    btn.addEventListener('click', () => renderHero(i));
    heroPills.appendChild(btn);
  });

  document.getElementById('heroPrev').addEventListener('click', () => renderHero(heroIndex - 1));
  document.getElementById('heroNext').addEventListener('click', () => renderHero(heroIndex + 1));
  document.getElementById('heroExpand').addEventListener('click', () => openLightbox(featuredDemos[heroIndex]));

  renderHero(0);
}

/* ---------- CAT3D-Style Stage + Bottom Thumbnail Strip ---------- */
const stageVideo = document.getElementById('stageVideo');
const stageScene = document.getElementById('stageScene');
const stagePrompt = document.getElementById('stagePrompt');
const stageCounter = document.getElementById('stageCounter');
const thumbTrack = document.getElementById('thumbTrack');
let currentIdx = 0;

if (stageVideo && thumbTrack && DEMOS.length > 0) {
  const thumbButtons = DEMOS.map((item, i) => {
    const btn = document.createElement('button');
    btn.className = 'thumb-btn' + (i === 0 ? ' active' : '');
    btn.type = 'button';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', `${item.scene}: ${item.shortLabel}`);
    btn.innerHTML = `
      <img src="assets/posters/${item.id}.jpg" alt="${item.shortLabel}" loading="${i < 10 ? 'eager' : 'lazy'}" />
      <span class="thumb-label">${item.shortLabel}</span>
    `;
    btn.addEventListener('click', () => selectDemo(i, true));
    thumbTrack.appendChild(btn);
    return btn;
  });

  function selectDemo(idx, scrollThumb = true) {
    currentIdx = (idx + DEMOS.length) % DEMOS.length;
    const item = DEMOS[currentIdx];

    stageVideo.poster = `assets/posters/${item.id}.jpg`;
    stageVideo.src = item.src;
    stageVideo.load();
    stageVideo.play().catch(() => {});

    stageScene.textContent = item.scene;
    stagePrompt.textContent = '\u201c' + item.prompt + '\u201d';
    if (stageCounter) {
      stageCounter.textContent = `${currentIdx + 1} / ${DEMOS.length}`;
    }

    thumbButtons.forEach((btn, i) => {
      const isAct = i === currentIdx;
      btn.classList.toggle('active', isAct);
      btn.setAttribute('aria-selected', isAct ? 'true' : 'false');
    });

    if (scrollThumb && thumbButtons[currentIdx]) {
      thumbButtons[currentIdx].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }

  document.getElementById('stagePrev')?.addEventListener('click', () => selectDemo(currentIdx - 1));
  document.getElementById('stageNext')?.addEventListener('click', () => selectDemo(currentIdx + 1));
  document.getElementById('stageExpand')?.addEventListener('click', () => openLightbox(DEMOS[currentIdx]));

  document.getElementById('thumbPrev')?.addEventListener('click', () => {
    thumbTrack.scrollBy({ left: -380, behavior: 'smooth' });
  });
  document.getElementById('thumbNext')?.addEventListener('click', () => {
    thumbTrack.scrollBy({ left: 380, behavior: 'smooth' });
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') selectDemo(currentIdx - 1);
    if (e.key === 'ArrowRight') selectDemo(currentIdx + 1);
  });

  selectDemo(0, false);
}

/* ---------- Category Filter Buttons ---------- */
const filterBtns = document.querySelectorAll('#demoFilters .filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.demo-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

/* ---------- Tab Groups (Method & Comparisons) ---------- */
function initTabs(barId) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  const buttons = bar.querySelectorAll('.tab-btn');
  const container = bar.nextElementSibling;
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = 'tab-' + btn.dataset.tab;
      container.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
}

initTabs('methodTabs');
initTabs('compTabs');

/* ---------- Lightbox Modal ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxScene = document.getElementById('lightboxScene');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxPrompt = document.getElementById('lightboxPrompt');

function openLightbox(item) {
  lightboxVideo.src = item.src;
  lightboxScene.textContent = item.scene;
  if (lightboxCategory) {
    lightboxCategory.textContent = '';
  }
  lightboxPrompt.textContent = '\u201c' + item.prompt + '\u201d';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxVideo.play().catch(() => {});
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxVideo.pause();
  lightboxVideo.removeAttribute('src');
  document.body.style.overflow = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxCloseBg').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

/* ---------- Copy BibTeX ---------- */
const copyBtn = document.getElementById('copyBibtex');
copyBtn.addEventListener('click', () => {
  const code = document.getElementById('bibtexCode').textContent;
  navigator.clipboard.writeText(code).then(() => {
    copyBtn.textContent = 'Copied!';
    setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
  });
});

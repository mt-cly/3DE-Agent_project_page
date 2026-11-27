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
  },
  // 4D Autonomous Driving (3)
  {
    id: 'waymo4d_winter_snow',
    scene: 'Waymo 4D',
    shortLabel: '4D Winter Snowstorm',
    category: 'creative',
    catLabel: '4D Autonomous Driving',
    featured: true,
    src: 'assets/videos/waymo4d_winter_snow.mp4',
    prompt: 'Transform the dynamic 4D San Francisco avenue into a winter snowstorm: blanket the asphalt road, bike lane, sidewalks, trees, and roofs with realistic snow and slushy tire tracks while preserving all moving vehicles.'
  },
  {
    id: 'waymo4d_autumn_golden',
    scene: 'Waymo 4D',
    shortLabel: '4D Golden Autumn',
    category: 'creative',
    catLabel: '4D Autonomous Driving',
    featured: true,
    src: 'assets/videos/waymo4d_autumn_golden.mp4',
    prompt: 'Transform the dynamic 4D downtown San Francisco street into a golden-hour autumn afternoon with vibrant amber-crimson foliage, fallen leaves along the curbs, and warm sunset lighting across the moving traffic.'
  },
  {
    id: 'waymo4d_construction_cones',
    scene: 'Waymo 4D',
    shortLabel: '4D Roadside Cones',
    category: 'creative',
    catLabel: '4D Autonomous Driving',
    featured: true,
    src: 'assets/videos/waymo4d_construction_cones.mp4',
    prompt: 'Place a photorealistic tapering row of weathered orange-and-white reflective highway traffic cones along the far-right bike lane and curb, clear of the ego vehicle and oncoming 4D traffic.'
  },
  // Autonomous Driving (8)
  {
    id: 'waymo_ad_gravel',
    scene: 'Waymo',
    shortLabel: 'Potholed Gravel Road',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_ad_gravel.mp4',
    prompt: 'Transform the smooth asphalt road surface into a rough, bumpy, potholed gravel and cobblestone dirt road with tire ruts while preserving the dappled tree shadows, curbs, houses, and sky.'
  },
  {
    id: 'waymo_ad_traffic_light',
    scene: 'Waymo',
    shortLabel: 'Traffic Light & Crosswalk',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_ad_traffic_light.mp4',
    prompt: 'Add a galvanized steel cantilever traffic light pole with a glowing signal head at the intersection ahead together with a crisp white painted zebra crosswalk across the asphalt road.'
  },
  {
    id: 'waymo_s1_remove_suv',
    scene: 'Waymo',
    shortLabel: 'Remove Parked SUV',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_s1_remove_suv.mp4',
    prompt: 'Cleanly remove the large silver SUV parked on the left side of the curved street and seamlessly inpaint the occluded asphalt, concrete curb, driveway, and background fence.'
  },
  {
    id: 'waymo_s2_night',
    scene: 'Waymo',
    shortLabel: 'Nighttime Headlights',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_s2_night.mp4',
    prompt: 'Transform the daytime San Francisco hillside STOP intersection into a dark nighttime driving scene with glowing streetlamps, illuminated house windows, and bright ego-car headlight beams.'
  },
  {
    id: 'waymo_s3_flooded',
    scene: 'Waymo',
    shortLabel: 'Flooded Rainwater Road',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_s3_flooded.mp4',
    prompt: 'Flood the curved boulevard with standing rainwater reflecting the trees, retaining wall, and overcast rainy sky while keeping the double-yellow center line faintly visible beneath shallow water.'
  },
  {
    id: 'waymo_s4_sandstorm',
    scene: 'Waymo',
    shortLabel: 'Extreme Sandstorm',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_s4_sandstorm.mp4',
    prompt: 'Envelop the twilight palm-tree avenue in an extreme desert sandstorm with thick ochre-orange dust haze, strong depth-dependent visibility dropoff, and sand drifts along the curbs.'
  },
  {
    id: 'waymo_s4_wet_night',
    scene: 'Waymo',
    shortLabel: 'Wet Night Reflections',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_s4_wet_night.mp4',
    prompt: 'Transform the pastel-dusk palm avenue into a moody wet night scene with warm amber streetlights and lit house windows reflecting softly off the damp cracked asphalt.'
  },
  {
    id: 'waymo_s5_police',
    scene: 'Waymo',
    shortLabel: 'Pickup to Police Cruiser',
    category: 'creative',
    catLabel: 'Autonomous Driving',
    src: 'assets/videos/waymo_s5_police.mp4',
    prompt: 'Transform the burgundy pickup truck parked on the right curb into a black-and-white American police patrol cruiser with a roof lightbar casting subtle red-and-blue reflections.'
  },
  // Embodied AI (3)
  {
    id: 'emb_e1_franka_clutter',
    scene: 'Franka 4D',
    shortLabel: '4D Franka Kitchen Clutter',
    category: 'creative',
    catLabel: 'Embodied AI',
    featured: true,
    src: 'assets/videos/emb_e1_franka_clutter.mp4',
    prompt: 'Add realistic kitchen distractor objects (ceramic mug, stainless-steel bowl, green apple, cutting board) around the manipulation table edges while replaying the 4D Franka Panda arm grasping the carrot.'
  },
  {
    id: 'emb_e2_nordic_home',
    scene: 'Home Table',
    shortLabel: 'Nordic Minimalist Room',
    category: 'creative',
    catLabel: 'Embodied AI',
    src: 'assets/videos/emb_e2_nordic_home.mp4',
    prompt: 'Restyle the indoor dining room into a bright Scandinavian minimalist aesthetic with light bleached oak furniture, soft beige linen accents, warm matte white walls, and airy daylight.'
  },
  {
    id: 'emb_e3_factory_lanes',
    scene: 'Factory',
    shortLabel: 'Factory Epoxy Safety Lanes',
    category: 'creative',
    catLabel: 'Embodied AI',
    src: 'assets/videos/emb_e3_factory_lanes.mp4',
    prompt: 'Transform the bare concrete factory floor into an industrial green-epoxy coated workshop floor with glossy sheen and bold yellow AGV robot safety corridor stripes.'
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
const stageLoader = document.getElementById('stageLoader');
const thumbTrack = document.getElementById('thumbTrack');
let currentIdx = 0;
let loopCount = 0;
const LOOPS_PER_DEMO = 3;

// In-memory Blob URL cache for instant zero-wait video switching
const videoBlobCache = new Map();
const videoInflight = new Map();

function prefetchVideo(src) {
  if (!src || videoBlobCache.has(src) || videoInflight.has(src)) return;
  const p = fetch(src)
    .then(r => (r.ok ? r.blob() : null))
    .then(blob => {
      if (blob) videoBlobCache.set(src, URL.createObjectURL(blob));
    })
    .catch(() => {})
    .finally(() => videoInflight.delete(src));
  videoInflight.set(src, p);
}

if (stageVideo && thumbTrack && DEMOS.length > 0) {
  const showLoader = (on) => {
    if (stageLoader) stageLoader.classList.toggle('visible', on);
  };
  stageVideo.addEventListener('waiting', () => showLoader(true));
  stageVideo.addEventListener('playing', () => showLoader(false));
  stageVideo.addEventListener('canplay', () => showLoader(false));
  stageVideo.addEventListener('ended', () => {
    loopCount += 1;
    if (loopCount >= LOOPS_PER_DEMO) {
      selectDemo(currentIdx + 1, true);
    } else {
      stageVideo.currentTime = 0;
      stageVideo.play().catch(() => {});
    }
  });

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
    btn.addEventListener('mouseenter', () => prefetchVideo(item.src));
    btn.addEventListener('click', () => selectDemo(i, true));
    thumbTrack.appendChild(btn);
    return btn;
  });

  function selectDemo(idx, scrollThumb = true) {
    currentIdx = (idx + DEMOS.length) % DEMOS.length;
    loopCount = 0;
    const item = DEMOS[currentIdx];

    const cachedUrl = videoBlobCache.get(item.src);
    stageVideo.poster = `assets/posters/${item.id}.jpg`;
    if (cachedUrl) {
      showLoader(false);
      stageVideo.src = cachedUrl;
    } else {
      showLoader(true);
      stageVideo.src = item.src;
      prefetchVideo(item.src);
    }
    stageVideo.play().catch(() => {});

    // Warm next 2 and previous 1 demos in the background for instant switching
    setTimeout(() => {
      prefetchVideo(DEMOS[(currentIdx + 1) % DEMOS.length].src);
      prefetchVideo(DEMOS[(currentIdx + 2) % DEMOS.length].src);
      prefetchVideo(DEMOS[(currentIdx - 1 + DEMOS.length) % DEMOS.length].src);
    }, 250);

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
  document.getElementById('stageExpand')?.addEventListener('click', () => {
    const req = stageVideo.requestFullscreen || stageVideo.webkitRequestFullscreen || stageVideo.msRequestFullscreen;
    if (req) {
      Promise.resolve(req.call(stageVideo)).catch(() => openLightbox(DEMOS[currentIdx]));
    } else if (stageVideo.webkitEnterFullscreen) {
      stageVideo.webkitEnterFullscreen();
    } else {
      openLightbox(DEMOS[currentIdx]);
    }
  });

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

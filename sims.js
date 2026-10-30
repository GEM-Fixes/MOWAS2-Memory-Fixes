// Illustrations for the explainer page. They show the ideas, not the game's code.
//  1. vaultFlow: animated memory map - unused 16 MB blocks fade, move out of the 4 GB and come back when needed (2D canvas).
//  2. vtOff / vtOn: the vehicle-type test mod - measured peak memory without / with the patch (2D canvas, slider).
//  3. sim3dBattle: Style v1 - squads on a field, every sight check drawn as a line, old way vs shared per area (three.js).
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#888';
  const fmt = n => n.toLocaleString(window.LOCALE || 'en-US');
  const T = window.T || (s => s);
  const MB = ' ' + T('MB');
  const onTheme = fn => {
    new MutationObserver(fn).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', fn);
  };
  // a canvas that follows its box width (height = width * aspect(width)), redrawn by the caller
  function fitCanvas(cv, aspect) {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = cv.clientWidth || 600, h = Math.round(w * aspect(w));
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) {
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.style.height = h + 'px';
    }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { g, w, h };
  }
  function rrect(g, x, y, w, h, r) {
    g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  }
  const ease = k => k * k * (3 - 2 * k);
  function visibleLoop(el, step) {  // requestAnimationFrame loop that sleeps while the element is off screen
    let vis = false;
    new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(el);
    (function loop(t) { requestAnimationFrame(loop); if (vis) step(t); })(0);
  }

  // ------------------------------------------------------------ 1. moving unused data out of the 4 GB
  const flow = document.getElementById('vaultFlow');
  if (flow) {
    const KINDS = { use: ['--s1', 'In use'], fixed: ['--text-muted', 'Program files, graphics driver'], model: ['--s2', 'Model copies'],
                    anim: ['--s5', 'Animations'], sound: ['--s3', 'Sounds'], tex: ['--s4', 'Texture copies'], free: ['--free', 'Free'] };
    const lg = document.getElementById('lgFlow');
    if (lg) lg.innerHTML = Object.values(KINDS).map(([c, n]) => '<span><i style="background:var(' + c + ')"></i>' + T(n) + '</span>').join('');
    const MOV = ['model', 'anim', 'sound', 'tex'], lim = () => 9000 + Math.random() * 16000;  // (idle time before a block moves out)
    const cells = [];  // 256 slots inside the 4 GB
    const plan = [['fixed', 44], ['use', 62], ['model', 34], ['anim', 22], ['sound', 12], ['tex', 26]];
    plan.forEach(([k, n]) => { for (let i = 0; i < n; i++) cells.push({ k, idle: Math.random() * 9000, lim: lim(), flash: 0 }); });
    while (cells.length < 256) cells.push({ k: 'free', idle: 0, flash: 0 });
    for (let i = cells.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [cells[i], cells[j]] = [cells[j], cells[i]]; }
    const outside = [];  // {k, flash} in order
    const fly = [];      // {k, from:{side,i}, to:{side,i}, t0}
    const cols = { };
    function readCols() { Object.keys(KINDS).forEach(k => { cols[k] = css(KINDS[k][0]); }); cols.line = css('--line'); cols.text = css('--text-secondary'); cols.ink = css('--text-primary'); cols.bg = css('--surface-2'); }
    readCols(); onTheme(readCols);
    let L = null, last = 0, nextTouch = 0, nextNew = 0, nextBack = 0;
    function layout() {
      const r = fitCanvas(flow, w => w < 560 ? 1.55 : 0.47), narrow = r.w < 560, pad = 14, head = 22;
      let S, a, b;
      if (narrow) { S = Math.min(r.w - 2 * pad, (r.h - 3 * head - 3 * pad) / 2); a = { x: (r.w - S) / 2, y: head + pad }; b = { x: (r.w - S) / 2, y: a.y + S + head + 2 * pad }; }
      else { S = Math.min((r.w - 2 * pad - 90) / 2, r.h - head - 2 * pad); a = { x: pad, y: head + pad }; b = { x: r.w - pad - S, y: head + pad }; }
      L = { ...r, narrow, S, a, b, c: S / 16 };
    }
    const pos = (side, i) => { const o = side ? L.b : L.a; return { x: o.x + (i % 16) * L.c, y: o.y + Math.floor(i / 16) * L.c }; };
    function freeSlot() { const f = []; cells.forEach((c, i) => { if (c.k === 'free' && !c.res) f.push(i); }); return f.length ? f[Math.floor(Math.random() * f.length)] : -1; }
    function step(t) {
      const dt = Math.min(100, t - (last || t)); last = t;
      if (!L || flow.clientWidth !== L.w) layout();
      {  // (runs with reduced motion too: then blocks fade out and in on the spot instead of flying)
        cells.forEach(c => { if (MOV.includes(c.k)) c.idle += dt; c.flash = Math.max(0, c.flash - dt); });
        if (t > nextTouch) {  // the game uses some data: in-use blocks and now and then a movable one
          nextTouch = t + 90;
          const i = Math.floor(Math.random() * 256), c = cells[i];
          if (c.k === 'use' || (MOV.includes(c.k) && Math.random() < 0.6)) { c.flash = 450; c.idle = 0; }
        }
        cells.forEach((c, i) => {  // idle long enough: move it out
          if (MOV.includes(c.k) && c.idle > c.lim && fly.length < 6 && outside.length + fly.length < 34) {
            fly.push({ k: c.k, from: [0, i], to: [1, outside.length + fly.filter(f => f.to[0] === 1).length], t0: t, dur: reduce ? 500 : 1100 });
            c.k = 'free'; c.idle = 0; c.res = false;
          }
        });
        if (t > nextBack && outside.length > 24) {  // the game needs something that is outside: it comes back first
          nextBack = t + 1600 + Math.random() * 1600;  // (24-34 blocks outside = ~400-550 MB, about what a RobZ battle keeps outside)
          const s = freeSlot();
          if (s >= 0) {
            const oi = Math.floor(Math.random() * outside.length), k = outside[oi].k;
            outside.splice(oi, 1);
            cells[s].res = true;
            fly.push({ k, from: [1, oi], to: [0, s], t0: t, dur: reduce ? 500 : 1100, back: true });
          }
        }
        if (t > nextNew) {  // new data is loaded into free room (a unit shows up, a sound plays for the first time)
          nextNew = t + 700 + Math.random() * 700;
          const s = cells.filter(c => c.k === 'free').length > 50 ? freeSlot() : -1;  // (keeps some room free)
          if (s >= 0) { cells[s] = { k: MOV[Math.floor(Math.random() * MOV.length)], idle: 0, lim: lim(), flash: 500 }; }
        }
        for (let j = fly.length - 1; j >= 0; j--) {
          const f = fly[j];
          if (t - f.t0 >= f.dur) {
            if (f.to[0] === 1) outside.push({ k: f.k, flash: 400 });
            else cells[f.to[1]] = { k: f.k, idle: 0, lim: lim(), flash: 700 };
            fly.splice(j, 1);
          }
        }
        outside.forEach(o => { o.flash = Math.max(0, o.flash - dt); });
      }
      draw(t);
    }
    function cell(g, x, y, k, alpha, flash, prog) {
      const c = L.c, m = Math.max(1, c * 0.1);
      g.globalAlpha = alpha;
      g.fillStyle = cols[k];
      rrect(g, x + m, y + m, c - 2 * m, c - 2 * m, Math.min(3, c * 0.2)); g.fill();
      g.globalAlpha = 1;
      if (flash > 0) { g.strokeStyle = cols.ink; g.lineWidth = 1.5; g.globalAlpha = flash / 700; rrect(g, x + m, y + m, c - 2 * m, c - 2 * m, 3); g.stroke(); g.globalAlpha = 1; }
      if (prog > 0.05 && c > 9) {  // unused for a while: a small clock fills up
        g.strokeStyle = cols.ink; g.globalAlpha = 0.55; g.lineWidth = 1.4;
        g.beginPath(); g.arc(x + c / 2, y + c / 2, c * 0.24, -Math.PI / 2, -Math.PI / 2 + prog * Math.PI * 2); g.stroke(); g.globalAlpha = 1;
      }
    }
    function draw(t) {
      const g = L.g;
      g.clearRect(0, 0, L.w, L.h);
      g.font = '600 12px Inter, system-ui, sans-serif'; g.fillStyle = cols.ink; g.textBaseline = 'alphabetic';
      g.fillText(T('Inside the 4 GB'), L.a.x, L.a.y - 8);
      g.fillText(T("Outside: the rest of your PC's memory"), L.b.x, L.b.y - 8);
      [L.a, L.b].forEach(o => { g.strokeStyle = cols.line; g.lineWidth = 1; rrect(g, o.x - 3, o.y - 3, L.S + 6, L.S + 6, 6); g.stroke(); });
      cells.forEach((c, i) => {
        const p = pos(0, i), mov = MOV.includes(c.k), prog = mov ? Math.min(1, c.idle / c.lim) : 0;
        cell(g, p.x, p.y, c.k, mov ? 1 - 0.55 * prog : 1, c.flash, prog);
      });
      for (let i = 0; i < 256; i++) { const p = pos(1, i); if (i >= outside.length) { g.globalAlpha = 0.35; cell(g, p.x, p.y, 'free', 1, 0, 0); g.globalAlpha = 1; } }
      outside.forEach((o, i) => { const p = pos(1, i); cell(g, p.x, p.y, o.k, 0.9, o.flash, 0); });
      // arrows between the panels
      if (!L.narrow) {
        const mx = (L.a.x + L.S + L.b.x) / 2, my = L.a.y + L.S / 2;
        g.fillStyle = cols.text; g.font = '11px "JetBrains Mono", monospace'; g.textAlign = 'center';
        g.fillText(T('unused →'), mx, my - 10); g.fillText(T('← needed'), mx, my + 18); g.textAlign = 'left';
      }
      fly.forEach(f => {  // flying blocks on an arc (reduced motion: fade out at the start, fade in at the end)
        const k = Math.min(1, (t - f.t0) / f.dur), e = ease(k), A = pos(f.from[0], f.from[1]), B = pos(f.to[0], f.to[1]);
        if (reduce) { const P = k < 0.5 ? A : B; cell(g, P.x, P.y, f.k, Math.abs(1 - 2 * k), 0, 0); return; }
        const lift = L.narrow ? 0 : -L.S * 0.35, side = L.narrow ? L.S * 0.4 * (f.back ? -1 : 1) : 0;
        const mx = (A.x + B.x) / 2 + side, my = Math.min(A.y, B.y) + lift;
        const x = (1 - e) * (1 - e) * A.x + 2 * (1 - e) * e * mx + e * e * B.x, y = (1 - e) * (1 - e) * A.y + 2 * (1 - e) * e * my + e * e * B.y;
        g.save(); g.shadowColor = 'rgba(0,0,0,.25)'; g.shadowBlur = 8; cell(g, x, y, f.k, 1, 0, 0); g.restore();
      });
      const used = cells.filter(c => c.k !== 'free').length;
      setTxt('vfIn', fmt(used * 16) + MB); setTxt('vfFree', fmt((256 - used) * 16) + MB); setTxt('vfOut', fmt(outside.length * 16) + MB);
    }
    const memo = {};
    function setTxt(id, v) { if (memo[id] !== v) { memo[id] = v; const e = document.getElementById(id); if (e) e.textContent = v; } }
    new ResizeObserver(() => { L = null; }).observe(flow);
    layout(); draw(0);
    visibleLoop(flow, step);
  }

  // ------------------------------------------------------------ 2. vehicle-type test mod: without / with the patch
  const vtOff = document.getElementById('vtOff'), vtOn = document.getElementById('vtOn'), vtN = document.getElementById('vtN');
  if (vtOff && vtOn && vtN) {
    // test runs 2026-10-29 (test computer): peak MB used inside the 4 GB; outside = most the patch kept outside the 4 GB
    const TYPES = [50, 100, 150, 200, 300, 351];
    const off = [2909, 3389, 3788, 4009, 4049, 4014], oom = [0, 0, 0, 1, 1, 1];
    const on = [2557, 2887, 3414, 3682, 3809, 3992], out = [277, 392, 134, 75, 699, 786];
    document.getElementById('vtTicks').innerHTML = TYPES.map(n => '<span>' + n + '</span>').join('');
    const tb = document.getElementById('tbVt');
    if (tb) tb.innerHTML = '<tr><th>' + ['vehicle types', 'without the patch (MB)', 'with the patch, inside (MB)', 'kept outside (MB)'].map(s => T(s)).join('</th><th>') + '</th></tr>' +
      TYPES.map((n, i) => '<tr><td>' + n + '</td><td>' + (oom[i] ? T('out of memory') : fmt(off[i])) + '</td><td>' + fmt(on[i]) + '</td><td>' + fmt(out[i]) + '</td></tr>').join('');
    const cols = {};
    function readCols() { ['--s1', '--s2', '--s3', '--free', '--line', '--text-primary'].forEach(v => { cols[v] = css(v); }); }
    readCols();
    // animated values: cells filled inside, cells outside
    const st = [{ v: 0, to: 0, out: 0, outTo: 0 }, { v: 0, to: 0, out: 0, outTo: 0 }];
    let idx = +vtN.value;
    function target() {
      st[0].to = oom[idx] ? 256 : Math.round(off[idx] / 16); st[0].outTo = 0;
      st[1].to = Math.round(on[idx] / 16); st[1].outTo = Math.round(out[idx] / 16);
      document.getElementById('vtOffTxt').innerHTML = oom[idx] ? '<span class="bad">' + T('Out of memory: the game crashes while loading.') + '</span>'
        : T('Highest use {a} of 4,096 MB', { a: '<b>' + fmt(off[idx]) + MB + '</b>' });
      document.getElementById('vtOnTxt').innerHTML = T('Highest use {a} inside, {b} kept outside', { a: '<b>' + fmt(on[idx]) + MB + '</b>', b: '<b>' + fmt(out[idx]) + MB + '</b>' });
      if (reduce) st.forEach(s => { s.v = s.to; s.out = s.outTo; });
    }
    function drawGrid(cv, s, bad, withOut, t) {
      const r = fitCanvas(cv, () => 1.32), g = r.g, pad = 10, S = Math.min(r.w - 2 * pad, r.h * 0.72), c = S / 16, x0 = (r.w - S) / 2, y0 = pad;
      g.clearRect(0, 0, r.w, r.h);
      const filled = Math.round(s.v), m = Math.max(1, c * 0.1);
      for (let i = 0; i < 256; i++) {
        const x = x0 + (i % 16) * c, y = y0 + Math.floor(i / 16) * c;
        let col = i < filled ? cols[bad ? '--s2' : '--s1'] : cols['--free'];
        g.fillStyle = col;
        if (bad && i < filled) g.globalAlpha = 0.65 + 0.35 * Math.abs(Math.sin(t / 300 + i * 0.02));
        rrect(g, x + m, y + m, c - 2 * m, c - 2 * m, Math.min(3, c * 0.2)); g.fill(); g.globalAlpha = 1;
      }
      g.strokeStyle = cols['--line']; rrect(g, x0 - 3, y0 - 3, S + 6, S + 6, 6); g.stroke();
      g.fillStyle = cols['--text-primary']; g.font = '11px "JetBrains Mono", monospace';
      const yo = y0 + S + 18;
      if (withOut) {
        g.fillText(T('outside the 4 GB'), x0, yo);
        const n = Math.round(s.out), oc = c * 0.85;
        for (let i = 0; i < n; i++) {
          const x = x0 + (i % 18) * oc, y = yo + 6 + Math.floor(i / 18) * oc;
          g.fillStyle = cols['--s3']; rrect(g, x + 1, y + 1, oc - 2, oc - 2, 2); g.fill();
        }
      } else if (bad) {
        g.fillStyle = cols['--s2']; g.font = '600 12px Inter, system-ui, sans-serif';
        g.fillText(T('4 GB full: no room left'), x0, yo);
      }
    }
    function step(t) {
      st.forEach(s => {
        s.v += (s.to - s.v) * 0.12; if (Math.abs(s.to - s.v) < 0.3) s.v = s.to;
        s.out += (s.outTo - s.out) * 0.1; if (Math.abs(s.outTo - s.out) < 0.3) s.out = s.outTo;
      });
      drawGrid(vtOff, st[0], !!oom[idx] && st[0].v > 250, false, t);
      drawGrid(vtOn, st[1], false, true, t);
    }
    vtN.addEventListener('input', () => { idx = +vtN.value; target(); });
    onTheme(readCols);
    target();
    if (reduce) step(0);
    visibleLoop(vtOn, step);
  }

  // ------------------------------------------------------------ 3. Style v1: squads, sight checks per soldier vs per area
  const btlBox = document.getElementById('sim3dBattle');
  if (btlBox && window.THREE) {
    const col = name => new THREE.Color(css(name));
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    btlBox.appendChild(renderer.domElement);
    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(40, 1, 0.1, 2000);
    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const sun = new THREE.DirectionalLight(0xffffff, 0.6); sun.position.set(30, 60, 40); scene.add(sun);
    let yaw = 0.3, pitch = 0.8, dist = 175, drag = null;
    const target = new THREE.Vector3(0, 0, 0);
    function place() { camera.position.set(dist * Math.cos(pitch) * Math.sin(yaw), dist * Math.sin(pitch), dist * Math.cos(pitch) * Math.cos(yaw)); camera.lookAt(target); }
    function size() {
      const w = btlBox.clientWidth || 640, h = Math.round(w * (w < 560 ? 0.8 : 0.52));
      renderer.setSize(w, h, false); renderer.domElement.style.width = '100%'; renderer.domElement.style.height = h + 'px';
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    const cv = renderer.domElement;
    cv.style.touchAction = 'pan-y'; cv.style.cursor = 'grab';
    cv.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', e => { if (!drag) return; yaw -= (e.clientX - drag.x) * 0.008; pitch = Math.max(0.2, Math.min(1.4, pitch + (e.clientY - drag.y) * 0.006)); drag = { x: e.clientX, y: e.clientY }; place(); });
    cv.addEventListener('pointerup', () => { drag = null; });
    new ResizeObserver(size).observe(btlBox);
    size(); place();

    const FW = 160, FD = 90, CELL = 10, R = 30, SQ = 10, MAXN = 1000, MAXSEG = 9000;
    const cols = FW / CELL, rows = FD / CELL;
    const slider = document.getElementById('sim3dN'), nLbl = document.getElementById('sim3dNLbl');
    const oldLbl = document.getElementById('sim3dOld'), newLbl = document.getElementById('sim3dNew'), ratioLbl = document.getElementById('sim3dRatio');
    const bOld = document.getElementById('modeOld'), bNew = document.getElementById('modeNew'), autoLbl = document.getElementById('modeAuto');
    let n = +slider.value, mode = 0, auto = true, modeT = 0;
    // squads of SQ soldiers: each squad has a centre that drifts towards the other team and back; soldiers keep a loose
    // formation around it (as squads move in the game)
    const squads = [], sol = [];
    for (let q = 0; q < MAXN / SQ; q++) {
      const team = q % 2, cx = (team ? 1 : -1) * (6 + Math.random() * 46), cz = (Math.random() - 0.5) * (FD - 14);
      squads.push({ team, cx, cz, vx: (team ? -1 : 1) * (0.6 + Math.random() * 0.6), vz: (Math.random() - 0.5) * 0.8 });
      for (let k = 0; k < SQ; k++) {
        const a = Math.random() * Math.PI * 2, r = 1.2 + Math.random() * 4.2;
        sol.push({ q, team, ox: Math.cos(a) * r, oz: Math.sin(a) * r, x: cx, z: cz });
      }
    }
    const geo = new THREE.ConeGeometry(0.75, 2.2, 6); geo.translate(0, 1.1, 0);
    const mats = [0, 1].map(t => new THREE.MeshLambertMaterial({ color: col(t ? '--s2' : '--s1') }));
    const meshes = [0, 1].map(t => new THREE.InstancedMesh(geo, mats[t], MAXN));
    const tileGeo = new THREE.PlaneGeometry(CELL - 0.5, CELL - 0.5); tileGeo.rotateX(-Math.PI / 2);
    const tileMats = [0, 1].map(t => new THREE.MeshBasicMaterial({ color: col(t ? '--s2' : '--s1'), transparent: true, opacity: 0.22 }));
    const tiles = [0, 1].map(t => new THREE.InstancedMesh(tileGeo, tileMats[t], cols * rows));
    // area markers (Style v1): a short post in the middle of each occupied team area, where its checks start
    const postGeo = new THREE.CylinderGeometry(0.5, 0.5, 4, 8); postGeo.translate(0, 2, 0);
    const posts = [0, 1].map(t => new THREE.InstancedMesh(postGeo, mats[t], cols * rows));
    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(MAXSEG * 6), lineCol = new Float32Array(MAXSEG * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
    const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.5 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(meshes[0], meshes[1], tiles[0], tiles[1], posts[0], posts[1], lines);
    const field = new THREE.Mesh(new THREE.PlaneGeometry(FW, FD), new THREE.MeshLambertMaterial({ color: 0x8a8a7a }));
    field.rotation.x = -Math.PI / 2; field.position.y = -0.02; scene.add(field);
    const gp = [];
    for (let i = 0; i <= cols; i++) gp.push(i * CELL - FW / 2, 0.02, -FD / 2, i * CELL - FW / 2, 0.02, FD / 2);
    for (let j = 0; j <= rows; j++) gp.push(-FW / 2, 0.02, j * CELL - FD / 2, FW / 2, 0.02, j * CELL - FD / 2);
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(gp, 3));
    scene.add(new THREE.LineSegments(gg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 })));
    function theme() {
      scene.background = col('--surface-2');
      mats.forEach((m, t) => m.color = col(t ? '--s2' : '--s1')); tileMats.forEach((m, t) => m.color = col(t ? '--s2' : '--s1'));
      count();
    }
    onTheme(theme);
    const dummy = new THREE.Object3D();
    function setMode(m, byUser) {
      mode = m; if (byUser) { auto = false; if (autoLbl) autoLbl.textContent = ''; }
      bOld.setAttribute('aria-pressed', m === 0); bNew.setAttribute('aria-pressed', m === 1);
      count();
    }
    bOld.addEventListener('click', () => setMode(0, true));
    bNew.addEventListener('click', () => setMode(1, true));
    const cellOf = (x, z) => [Math.min(cols - 1, Math.max(0, Math.floor((x + FW / 2) / CELL))), Math.min(rows - 1, Math.max(0, Math.floor((z + FD / 2) / CELL)))];
    // Counts for the soldiers shown: old way = every soldier against every enemy within R; Style v1 = every occupied team
    // area against every enemy within R + half the area's diagonal. The lines drawn are those checks (thinned out
    // evenly when there are more than MAXSEG).
    function count() {
      const nq = n / SQ, act = [];
      for (let i = 0; i < n; i++) act.push(sol[i]);
      let oldChecks = 0, newChecks = 0;
      const occ = [new Map(), new Map()];
      act.forEach(s => { const [cx, cz] = cellOf(s.x, s.z); occ[s.team].set(cz * cols + cx, [(cx + 0.5) * CELL - FW / 2, (cz + 0.5) * CELL - FD / 2]); });
      const segs = [];
      for (const s of act) for (const e of act) {
        if (e.team === s.team) continue;
        const dx = e.x - s.x, dz = e.z - s.z;
        if (dx * dx + dz * dz < R * R) { oldChecks++; if (mode === 0) segs.push(s, e); }
      }
      const RR = R + CELL * 0.71;
      [0, 1].forEach(team => {
        let k = 0;
        occ[team].forEach(([px, pz]) => {
          for (const e of act) {
            if (e.team === team) continue;
            const dx = e.x - px, dz = e.z - pz;
            if (dx * dx + dz * dz < RR * RR) { newChecks++; if (mode === 1) segs.push({ x: px, z: pz, team, post: true }, e); }
          }
          dummy.position.set(px, 0.03 + team * 0.01, pz); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
          tiles[team].setMatrixAt(k, dummy.matrix);
          posts[team].setMatrixAt(k, dummy.matrix);
          k++;
        });
        tiles[team].count = k; tiles[team].instanceMatrix.needsUpdate = true;
        posts[team].count = mode === 1 ? k : 0; posts[team].instanceMatrix.needsUpdate = true;
      });
      // lines: from the checker (soldier or area post) to the enemy, coloured by the checker's team
      const total = segs.length / 2, stride = Math.max(1, total / MAXSEG), cA = col('--s1'), cB = col('--s2');
      let m = 0;
      for (let f = 0; f < total && m < MAXSEG; f += stride) {
        const i = Math.floor(f) * 2, a = segs[i], b = segs[i + 1], c = a.team ? cB : cA, ya = a.post ? 4 : 1.8;
        linePos.set([a.x, ya, a.z, b.x, 1.6, b.z], m * 6);
        lineCol.set([c.r, c.g, c.b, c.r, c.g, c.b], m * 6);
        m++;
      }
      lineGeo.setDrawRange(0, m * 2);
      lineGeo.attributes.position.needsUpdate = true; lineGeo.attributes.color.needsUpdate = true;
      oldLbl.textContent = fmt(oldChecks); newLbl.textContent = fmt(newChecks);
      ratioLbl.textContent = newChecks ? (oldChecks / newChecks).toLocaleString(window.LOCALE || 'en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + '×' : '-';
    }
    let vis = false, last = 0, lastCount = 0;
    new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(btlBox);
    function loop(t) {
      requestAnimationFrame(loop);
      if (!vis) return;
      const dt = Math.min(0.05, (t - (last || t)) / 1000) * (reduce ? 0.5 : 1); last = t;  // (reduced motion: half speed)
      const nq = n / SQ;
      for (let q = 0; q < nq; q++) {  // squads advance, bounce at the field edge and drift sideways
        const s = squads[q];
        s.cx += s.vx * dt * 6; s.cz += s.vz * dt * 6;
        if (Math.abs(s.cx) > FW / 2 - 6) { s.vx = -s.vx; s.cx = Math.sign(s.cx) * (FW / 2 - 6); }
        if (Math.abs(s.cz) > FD / 2 - 6) { s.vz = -s.vz; s.cz = Math.sign(s.cz) * (FD / 2 - 6); }
      }
      const cnt = [0, 0];
      for (let i = 0; i < n; i++) {
        const s = sol[i], q = squads[s.q];
        s.x = q.cx + s.ox; s.z = q.cz + s.oz;
        dummy.position.set(s.x, 0, s.z); dummy.updateMatrix();
        meshes[s.team].setMatrixAt(cnt[s.team]++, dummy.matrix);
      }
      meshes.forEach((m, k) => { m.count = cnt[k]; m.instanceMatrix.needsUpdate = true; });
      if (auto && t - modeT > 4000) { modeT = t; setMode(1 - mode, false); }
      if (t - lastCount > 300) { lastCount = t; count(); }
      lineMat.opacity = reduce ? 0.5 : 0.25 + 0.35 * (1 - ((t - lastCount) / 300));  // lines pulse with each round of checks
      renderer.render(scene, camera);
    }
    requestAnimationFrame(loop);
    slider.addEventListener('input', () => { n = +slider.value; nLbl.textContent = fmt(n); count(); });
    nLbl.textContent = fmt(n);
    theme();
  }
})();

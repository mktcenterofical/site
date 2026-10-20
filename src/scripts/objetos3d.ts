// Objetos 3D realistas (Three.js) dos cards "Por que a MKT Center".
// Um renderer por canvas, desenhado só quando o card está visível. Metal escuro com reflexo de ambiente,
// detalhes laranja emissivos e luz de recorte laranja. O objeto gira devagar e acompanha o mouse.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const LARANJA = 0xff6a00;

function materiais() {
  return {
    metal: new THREE.MeshPhysicalMaterial({ color: 0x1b1c1f, metalness: 0.85, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.15 }),
    metalClaro: new THREE.MeshPhysicalMaterial({ color: 0x8d9198, metalness: 1, roughness: 0.22 }),
    preto: new THREE.MeshPhysicalMaterial({ color: 0x08090a, metalness: 0.5, roughness: 0.35, clearcoat: 1 }),
    brilho: new THREE.MeshStandardMaterial({ color: 0xff5a00, emissive: 0xff4d00, emissiveIntensity: 1, roughness: 0.4, toneMapped: false }),
    brilhoSuave: new THREE.MeshStandardMaterial({ color: 0xff7a1a, emissive: 0xff6a00, emissiveIntensity: .9, roughness: 0.4, toneMapped: false }),
  };
}
type M = ReturnType<typeof materiais>;

function alvo(m: M) {
  const g = new THREE.Group();
  // anéis concêntricos em degraus (o centro fica mais à frente), com um anel laranja aceso
  const aneis: [number, THREE.Material, number][] = [[1, m.metal, 0], [0.8, m.preto, 0.06], [0.62, m.brilho, 0.1], [0.5, m.metal, 0.14], [0.3, m.preto, 0.18]];
  aneis.forEach(([r, mat, z]) => {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.2, 64), mat);
    c.rotation.x = Math.PI / 2; c.position.z = z; g.add(c);
  });
  const centro = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.2, 48), m.brilho);
  centro.rotation.x = Math.PI / 2; centro.position.z = 0.24; g.add(centro);
  // flecha cravada no centro, vindo de cima à direita
  const flecha = new THREE.Group();
  const haste = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.3, 16), m.metalClaro);
  haste.position.y = 0.65; flecha.add(haste);
  for (let k = 0; k < 2; k++) {
    const pena = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.02), m.brilho);
    pena.position.y = 1.2; pena.rotation.y = (k * Math.PI) / 2; flecha.add(pena);
  }
  flecha.position.z = 0.3; flecha.rotation.set(0.9, 0, -0.75); g.add(flecha);
  g.rotation.set(0.05, -0.3, 0);
  return g;
}

function telas(m: M) {
  const g = new THREE.Group();
  const corpo = new THREE.Mesh(new RoundedBoxGeometry(0.95, 1.9, 0.12, 6, 0.14), m.metal); g.add(corpo);
  const tela = new THREE.Mesh(new RoundedBoxGeometry(0.85, 1.78, 0.02, 4, 0.1), m.preto); tela.position.z = 0.06; g.add(tela);
  const card = new THREE.Mesh(new RoundedBoxGeometry(0.66, 0.42, 0.02, 4, 0.05), m.brilho); card.position.set(0, 0.4, 0.075); g.add(card);
  const bt = new THREE.Mesh(new RoundedBoxGeometry(0.6, 0.14, 0.02, 4, 0.06), m.brilhoSuave); bt.position.set(0, -0.6, 0.075); g.add(bt);
  [0.02, -0.12, -0.26].forEach((y, i) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.55 - i * 0.12, 0.05, 0.01), m.metalClaro); l.position.set(-0.03 * i, y, 0.075); g.add(l); });
  const ilha = new THREE.Mesh(new RoundedBoxGeometry(0.26, 0.07, 0.02, 4, 0.03), m.preto); ilha.position.set(0, 0.8, 0.075); g.add(ilha);
  g.rotation.set(0.1, -0.5, -0.18);
  return g;
}

function chat(m: M) {
  const g = new THREE.Group();
  const f = new THREE.Shape();
  const w = 1.7, h = 1.1, r = 0.3;
  f.moveTo(-w / 2 + r, -h / 2); f.lineTo(-0.25, -h / 2); f.lineTo(-0.55, -h / 2 - 0.35); f.lineTo(-0.45, -h / 2);
  f.lineTo(w / 2 - r, -h / 2); f.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); f.lineTo(w / 2, h / 2 - r);
  f.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); f.lineTo(-w / 2 + r, h / 2); f.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  f.lineTo(-w / 2, -h / 2 + r); f.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const geo = new THREE.ExtrudeGeometry(f, { depth: 0.28, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 6, curveSegments: 24 });
  geo.center(); g.add(new THREE.Mesh(geo, m.metal));
  [-0.45, 0, 0.45].forEach((x, i) => { const p = new THREE.Mesh(new THREE.SphereGeometry(0.14, 32, 16), i === 1 ? m.brilhoSuave : m.brilho); p.position.set(x, 0.05, 0.25); g.add(p); });
  g.rotation.set(0.15, -0.45, 0);
  return g;
}

function lupa(m: M) {
  const g = new THREE.Group();
  const aro = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.11, 32, 96), m.metal); g.add(aro);
  const vidro = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.04, 64), new THREE.MeshPhysicalMaterial({ color: 0x0b0c0e, metalness: 0, roughness: 0.05, transmission: 0.2, clearcoat: 1, transparent: true, opacity: 0.85 }));
  vidro.rotation.x = Math.PI / 2; g.add(vidro);
  const cabo = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.95, 32), m.preto);
  cabo.position.set(0.82, -0.82, 0); cabo.rotation.z = Math.PI / 4; g.add(cabo);
  const anel = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.12, 32), m.metalClaro); anel.position.set(0.5, -0.5, 0); anel.rotation.z = Math.PI / 4; g.add(anel);
  const pino = new THREE.Group();
  const cab = new THREE.Mesh(new THREE.SphereGeometry(0.24, 32, 24), m.brilho); cab.position.y = 0.12; pino.add(cab);
  const ponta = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.36, 32), m.brilho); ponta.rotation.x = Math.PI; ponta.position.y = -0.14; pino.add(ponta);
  const furo = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), m.preto); furo.position.set(0, 0.14, 0.2); pino.add(furo);
  pino.position.z = 0.15; g.add(pino);
  g.rotation.set(0.1, -0.4, 0);
  return g;
}

function grafico(m: M) {
  const g = new THREE.Group();
  [0.55, 0.85, 1.2, 1.7].forEach((h, i) => {
    const b = new THREE.Mesh(new RoundedBoxGeometry(0.34, h, 0.34, 4, 0.05), i === 3 ? m.brilho : m.metal);
    b.position.set(-0.66 + i * 0.44, h / 2 - 0.85, 0); g.add(b);
  });
  const base = new THREE.Mesh(new RoundedBoxGeometry(2.1, 0.08, 0.7, 4, 0.03), m.preto); base.position.y = -0.89; g.add(base);
  const curva = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.8, -0.1, 0.3), new THREE.Vector3(-0.2, 0.15, 0.3), new THREE.Vector3(0.25, 0.45, 0.3), new THREE.Vector3(0.9, 1.05, 0.3)]);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curva, 64, 0.035, 12), m.brilhoSuave));
  g.rotation.set(0.2, -0.55, 0);
  return g;
}

function cavalo(m: M) {
  const g = new THREE.Group();
  const perfil = [[0, 0], [0.62, 0], [0.62, 0.08], [0.55, 0.14], [0.5, 0.2], [0.42, 0.24], [0.36, 0.34], [0, 0.34]].map(([x, y]) => new THREE.Vector2(x, y));
  const base = new THREE.Mesh(new THREE.LatheGeometry(perfil, 64), m.metal); base.position.y = -1.05; g.add(base);
  const aro = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.025, 12, 96), m.brilho); aro.rotation.x = Math.PI / 2; aro.position.y = -1.0; g.add(aro);
  const s = new THREE.Shape();
  s.moveTo(-0.4, -0.7); s.bezierCurveTo(-0.45, -0.3, -0.2, 0, -0.05, 0.12); s.bezierCurveTo(-0.3, 0.05, -0.55, 0.05, -0.62, -0.05);
  s.bezierCurveTo(-0.6, 0.25, -0.35, 0.5, -0.2, 0.75); s.bezierCurveTo(-0.12, 0.92, 0.05, 1.0, 0.12, 1.12); s.lineTo(0.18, 0.98);
  s.bezierCurveTo(0.45, 0.85, 0.55, 0.5, 0.5, 0.1); s.bezierCurveTo(0.48, -0.25, 0.42, -0.5, 0.42, -0.7); s.lineTo(-0.4, -0.7);
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.42, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.08, bevelSegments: 8, curveSegments: 32 });
  geo.translate(0, 0, -0.21);
  const corpo = new THREE.Mesh(geo, m.metal); corpo.position.y = -0.36; g.add(corpo);
  const olho = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 12), m.brilho); olho.position.set(0.02, 0.46, 0.32); g.add(olho);
  const crina = new THREE.CatmullRomCurve3([new THREE.Vector3(0.35, 0.55, 0.12), new THREE.Vector3(0.52, 0.2, 0.12), new THREE.Vector3(0.5, -0.25, 0.12), new THREE.Vector3(0.44, -0.6, 0.12)]);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(crina, 48, 0.025, 10), m.brilho));
  g.rotation.set(0.05, -0.6, 0);
  return g;
}

const criadores: Record<string, (m: M) => THREE.Group> = { alvo, celular: telas, chat, lupa, grafico, cavalo };

export function iniciarObjetos3D(raiz: ParentNode = document) {
  const canvases = Array.from(raiz.querySelectorAll<HTMLCanvasElement>('canvas[data-obj3d]'));
  if (!canvases.length) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  canvases.forEach((canvas) => {
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch { return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    const cena = new THREE.Scene();
    cena.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
    const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    cam.position.set(0, 0.25, 5.2);

    const chave = new THREE.DirectionalLight(0xffffff, 1.6); chave.position.set(-3, 4, 4); cena.add(chave);
    const recorte = new THREE.PointLight(LARANJA, 28, 12); recorte.position.set(2.6, 0.4, -1.2); cena.add(recorte);
    const baixo = new THREE.PointLight(LARANJA, 10, 8); baixo.position.set(0, -1.8, 1.5); cena.add(baixo);
    cena.add(new THREE.AmbientLight(0xffffff, 0.15));

    const obj = criadores[canvas.dataset.obj3d || 'alvo'](materiais());
    const base = obj.rotation.clone();
    cena.add(obj);

    let visivel = false, raf = 0, mx = 0, my = 0;
    const card = canvas.closest('article') || canvas;
    card.addEventListener('pointermove', (e) => {
      const r = (card as HTMLElement).getBoundingClientRect();
      mx = ((e as PointerEvent).clientX - r.left) / r.width - 0.5;
      my = ((e as PointerEvent).clientY - r.top) / r.height - 0.5;
    });
    card.addEventListener('pointerleave', () => { mx = 0; my = 0; });

    const ajustar = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
    };
    const relogio = new THREE.Clock();
    const quadro = () => {
      const t = relogio.getElapsedTime();
      obj.rotation.y += ((base.y + Math.sin(t * 0.6) * 0.35 + mx * 0.9) - obj.rotation.y) * 0.06;
      obj.rotation.x += ((base.x + my * 0.5) - obj.rotation.x) * 0.06;
      obj.position.y = Math.sin(t * 1.2) * 0.06;
      renderer.render(cena, cam);
      raf = visivel && !reduce ? requestAnimationFrame(quadro) : 0;
    };
    new ResizeObserver(() => { ajustar(); if (!raf) renderer.render(cena, cam); }).observe(canvas);
    new IntersectionObserver(([e]) => {
      visivel = e.isIntersecting;
      if (visivel && !raf) { ajustar(); raf = requestAnimationFrame(quadro); }
    }, { rootMargin: '100px' }).observe(canvas);
  });
}

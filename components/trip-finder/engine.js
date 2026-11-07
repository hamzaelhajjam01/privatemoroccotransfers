/* Trip Finder engine: the quiz, the 3D atlas of Morocco (three.js) and the vehicle card deck (GSAP).
   Plain DOM code driven from a React client component (TripFinder.tsx).
   initTripFinder(root, options) mounts everything inside `root` and returns a cleanup function.
   Supports multi-language dictionaries and RTL layout. */
import * as THREE from "three";
import { gsap } from "gsap";
import { TRIP_FINDER_TRANSLATIONS } from "./i18n";

export function initTripFinder(root, opts = {}) {

const G = gsap;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const WA_NUMBER = opts.whatsappNumber || "212760426269";
const A = (opts.assetBase || "/trip-finder/").replace(/\/?$/, "/");
const LEAD_ENDPOINT = opts.leadEndpoint || "/api/leads";
const LANG = opts.lang || "en";
const T = opts.t || TRIP_FINDER_TRANSLATIONS[LANG] || TRIP_FINDER_TRANSLATIONS.en;
const isRTL = opts.rtl ?? (T.dir === "rtl");
const $ = s => root.querySelector(s);
/* lifecycle helpers so the component can mount/unmount cleanly in React */
let dead = false;
const timers = new Set(), observers = [], listeners = [];
const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); if (!dead) fn(); }, ms); timers.add(id); return id; };
const observe = o => { observers.push(o); return o; };
const on = (t, type, fn, o) => { t.addEventListener(type, fn, o); listeners.push([t, type, fn, o]); };
const tw=(t,v)=>{ if(G) return G.to(t,v); Object.assign(t,v); v.onUpdate&&v.onUpdate(); v.onComplete&&v.onComplete(); };

/* ---------- data ---------- */
const CITIES=T.cities;
const LATLON={RAK:[31.63,-8.0],CMN:[33.57,-7.59],AGA:[30.42,-9.6],FES:[34.03,-5.0],TNG:[35.77,-5.8],RBA:[34.02,-6.84],ESS:[31.51,-9.77],MRZ:[31.08,-4.01],
  ourika:[31.33,-7.78],atlas:[31.14,-7.92],agafay:[31.45,-8.21],benhaddou:[31.05,-7.13],essaouira:[31.51,-9.77],CAR:[30.2,0.4]};
const PLACES={
  LAA:[T.places.LAA||"Laâyoune",27.15,-13.2],
  VIL:[T.places.VIL||"Dakhla",23.68,-15.96],
  SMA:[T.places.SMA||"Smara",26.74,-11.67],
  OZZ:[T.places.OZZ||"Ouarzazate",30.92,-6.91],
  CHF:[T.places.CHF||"Chefchaouen",35.17,-5.27],
  TIN:[T.places.TIN||"Tinghir",31.51,-5.53]
};
const COUNTRIES=[
  [T.countries["Spain"]||"Spain",37.9,-4.2,"country"],
  [T.countries["Portugal"]||"Portugal",38.1,-8.3,"country"],
  [T.countries["Algeria"]||"Algeria",28.8,0.6,"country"],
  [T.countries["Mauritania"]||"Mauritania",21.4,-10.8,"country"],
  [T.countries["Canary Islands"]||"Canary Islands",28.9,-16.4,"minor2"],
  [T.countries["Atlantic Ocean"]||"Atlantic Ocean",31.6,-15.2,"sea"],
  [T.countries["Mediterranean"]||"Mediterranean",36.6,-1.8,"sea"]
];
const HTS={"RAK":0.1156,"CMN":0.0329,"AGA":0.0967,"FES":0.1655,"TNG":0.0391,"RBA":0.02,"ESS":0.0207,"MRZ":0.1856,"ourika":0.33,"atlas":0.7971,"agafay":0.1658,"benhaddou":0.3882,"essaouira":0.0207,"LAA":0.0178,"VIL":0.0032,"OZZ":0.2917,"CHF":0.3832,"SMA":0.0517,"TIN":0.3563,"CAR":0.1204};
const AIRPORTS=T.airports;
const D={"CMN-RAK":240,"AGA-RAK":240,"FES-RAK":540,"RAK-TNG":580,"RAK-RBA":330,"ESS-RAK":180,"MRZ-RAK":560,"AGA-CMN":460,"CMN-FES":300,"CMN-TNG":340,"CMN-RBA":90,"CMN-ESS":350,"CMN-MRZ":640,"AGA-FES":760,"AGA-TNG":800,"AGA-RBA":550,"AGA-ESS":175,"AGA-MRZ":720,"FES-TNG":300,"FES-RBA":210,"ESS-FES":720,"FES-MRZ":460,"RBA-TNG":250,"ESS-TNG":690,"MRZ-TNG":760,"ESS-RBA":440,"MRZ-RBA":670,"ESS-MRZ":740};
const KNOWN={"ESS-RAK":90,"AGA-RAK":135,"CMN-RAK":150,"FES-RAK":240,"MRZ-RAK":360};
const DAY={
  ourika:{n:T.day.ourika.n,p:70,km:65},
  atlas:{n:T.day.atlas.n,p:80,km:65},
  agafay:{n:T.day.agafay.n,p:60,km:40},
  benhaddou:{n:T.day.benhaddou.n,p:130,km:190},
  essaouira:{n:T.day.essaouira.n,p:130,km:180}
};
const TOURS={3:["RAK","MRZ","RAK"],5:["RAK","MRZ","FES","RAK"],7:["RAK","MRZ","FES","TNG","RBA","RAK"]};
const CLASSES=[
  {max:3,key:"sedan",name:T.classes.sedan,cars:["Škoda Octavia","Mercedes E-Class","BMW 5 Series"],hero:"Mercedes E-Class",m:1},
  {max:5,key:"suv",name:T.classes.suv,cars:["Hyundai Tucson","Toyota Prado","Toyota Prado"],hero:"Toyota Prado",m:1.25},
  {max:8,key:"van",name:T.classes.van,cars:["Renault Trafic","Ford Tourneo","Mercedes Vito"],hero:"Mercedes Vito",m:1.4},
  {max:16,key:"minibus",name:T.classes.minibus,cars:["Ford Transit","Mercedes Sprinter","Mercedes Sprinter"],hero:"Mercedes Sprinter",m:1.9}
];
const CARFILE={"Škoda Octavia":"skoda-octavia","Hyundai Tucson":"hyundai-tucson","Mercedes E-Class":"mercedes-e-class","BMW 5 Series":"bmw-5-series","Toyota Prado":"toyota-prado","Renault Trafic":"renault-trafic","Ford Tourneo":"ford-tourneo","Mercedes Vito":"mercedes-vito","Ford Transit":"ford-transit","Mercedes Sprinter":"mercedes-sprinter"};
const COMFORT=T.comfort.map((c,i)=>({k:c.k,n:c.n,d:c.d,m:[1,1.15,1.45][i]}));
const TYPES=T.types;
const WHEN=T.when;
const pk=(a,b)=>[a,b].sort().join("-");
const hrs=km=>km<40?`${Math.max(15,Math.round(km*1.2))} ${T.labels.min}`:`~${(Math.round(km/80*2)/2).toString().replace(".5","½")} ${T.labels.hours}`;

/* =====================================================================
   3D ATLAS — shaded-relief texture on real elevation, callouts, arcs, podium
   ===================================================================== */
const W = (() => {
  const host=$("#gl"), labelsEl=$("#labels");
  let renderer;
  try{ renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:"high-performance"}); }catch(e){ return null; }
  host.classList.add("ok");
  renderer.setPixelRatio(Math.min(2,devicePixelRatio||1));
  renderer.setClearColor(0x121418,1);
  host.prepend(renderer.domElement);
  const scene=new THREE.Scene(); scene.fog=new THREE.Fog(0x121418,140,330);
  const cam=new THREE.PerspectiveCamera(36,1,.1,800);
  const WU=120, ASP=0.9291479820627803, DS=4.4;
  const mx=lon=>(lon+180)/360, my=lat=>{const r=lat*Math.PI/180;return (1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2;};
  const MX0=mx(-21),MX1=mx(3.5),MY0=my(38.6),MY1=my(18.8);
  const P=(lat,lon,h=0)=>new THREE.Vector3(((mx(lon)-MX0)/(MX1-MX0)-.5)*WU,h*DS,((my(lat)-MY0)/(MY1-MY0)-.5)*WU*ASP);
  const C=P(28.6,-9.2);
  const rig={x:C.x,y:150,z:C.z+40,tx:C.x,ty:0,tz:C.z}, mouse={x:0,y:0,tx:0,ty:0};

  /* the atlas */
  const loader=new THREE.TextureLoader();
  const mapTex=loader.load(A+"map.webp"); mapTex.anisotropy=renderer.capabilities.getMaxAnisotropy();
  const hTex=loader.load(A+"height.png");
  const pg=new THREE.PlaneGeometry(WU,WU*ASP,460,428); pg.rotateX(-Math.PI/2);
  const atlas=new THREE.Mesh(pg,new THREE.MeshPhongMaterial({color:0x000000,specular:0x000000,shininess:0,emissive:0xffffff,emissiveMap:mapTex,displacementMap:hTex,displacementScale:DS}));
  scene.add(atlas);
  const skirt=new THREE.Mesh(new THREE.PlaneGeometry(900,900),new THREE.MeshBasicMaterial({color:0x121418}));
  skirt.rotation.x=-Math.PI/2; skirt.position.y=-.05; scene.add(skirt);
  /* the wider region around the atlas (Iberia, Algeria, the Atlantic) so the map never ends in an empty frame */
  { const tl=P(55.78,-45), br=P(-11.18,33.75), og=new THREE.PlaneGeometry(br.x-tl.x,br.z-tl.z); og.rotateX(-Math.PI/2);
    const ot=loader.load(A+"outer.webp"); ot.anisotropy=4;
    const outer=new THREE.Mesh(og,new THREE.MeshBasicMaterial({map:ot})); outer.position.set((tl.x+br.x)/2,-.03,(tl.z+br.z)/2); scene.add(outer); skirt.userData.outer=outer; }
  scene.add(new THREE.AmbientLight(0xfff1e0,.5));
  const key=new THREE.DirectionalLight(0xffd6a8,1.1); key.position.set(-60,90,40); scene.add(key);
  const dotTex=(()=>{const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d");const g=x.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,255,255,1)");g.addColorStop(.35,"rgba(255,255,255,.8)");g.addColorStop(1,"rgba(255,255,255,0)");x.fillStyle=g;x.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);})();

  /* positions + labels */
  const POS={}; Object.entries(LATLON).forEach(([k,[la,lo]])=>POS[k]=P(la,lo,(HTS[k]||0)+.02));
  Object.entries(PLACES).forEach(([k,[n,la,lo]])=>POS[k]=P(la,lo,(HTS[k]||0)+.02));
  const labels=[];
  const parseA=a=>a.split(",").map(t=>{t=t.trim();return t.endsWith("%")?{f:parseFloat(t)/100,p:0}:{f:0,p:parseFloat(t)};});
  const add=(cls,html,pos,anchor="-50%,-50%",pri=4)=>{const el=document.createElement("div");el.className="lb "+cls;el.innerHTML=html;labelsEl.appendChild(el);
    const o={el,pos,anchor,a:parseA(anchor),op:1,pri,w:0,h:0};labels.push(o);return o;};
  const LEFT={ESS:1,AGA:1,CMN:1};
  const cityL={}; Object.entries(CITIES).forEach(([k,n])=>cityL[k]=LEFT[k]?add("city lft",n,POS[k],"-100%,-50%",3):add("city",n,POS[k],"-3px,-50%",3));
  Object.entries(PLACES).forEach(([k,[n]])=>add("minor",n,POS[k],"-2px,-50%",5));
  COUNTRIES.forEach(([n,la,lo,c])=>add(c==="minor2"?"minor":c,n,P(la,lo,.05),"-50%,-50%",c==="minor2"?5:4));
  const title=add("title",`<div class="t1">${T.map.t1}</div><div class="t2">${T.map.t2}</div><div class="t3">${T.map.t3}</div>`,P(25.6,-4.6,.2),"-50%,-50%",0);
  const hot=list=>Object.entries(cityL).forEach(([k,o])=>{const h=list.includes(k);o.el.classList.toggle("hot",h);o.pri=h?2:3;o.w=0;});
  /* callouts */
  const callouts=[], glowTex=(()=>{const c=document.createElement("canvas");c.width=c.height=128;const x=c.getContext("2d");const g=x.createRadialGradient(64,64,0,64,64,64);
    g.addColorStop(0,"rgba(255,214,160,.95)");g.addColorStop(.3,"rgba(227,164,100,.55)");g.addColorStop(1,"rgba(201,128,63,0)");x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);})();

  function glowAt(p){const g=new THREE.Group();g.position.copy(p);g.position.y+=.25;
    const pool=new THREE.Mesh(new THREE.CircleGeometry(4.2,48),new THREE.MeshBasicMaterial({map:glowTex,transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,opacity:0}));
    const ring=new THREE.Mesh(new THREE.RingGeometry(1.5,1.72,64),new THREE.MeshBasicMaterial({color:0xffc68a,transparent:true,depthWrite:false,depthTest:false,opacity:0}));
    pool.rotation.x=ring.rotation.x=-Math.PI/2; ring.visible=false; pool.renderOrder=ring.renderOrder=6; g.add(pool,ring); scene.add(g);
    tw(pool.material,{opacity:.55,duration:.8}); return {g,pool,ring,t0:clock?clock.getElapsedTime():0};}
  function callout(key,name,val,desc,side,h){const el=document.createElement("div");el.className="co"+(side==="r"?" r":"");el.style.setProperty("--h",(h||70)+"px");
    el.innerHTML=`<span class="mk"></span><span class="ln"></span><div class="tx"><div class="n">${name}</div>${val?`<div class="v">${val}</div>`:""}${desc?`<div class="d">${desc}</div>`:""}</div>`;
    labelsEl.appendChild(el); const o={el,pos:POS[key],anchor:"0,0",op:1,co:true,pri:1,side,lh:(h||70),w:0,h:0,glow:glowAt(POS[key])}; labels.push(o); callouts.push(o); requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add("on"))); return o;}
  function clearCallouts(){callouts.splice(0).forEach(o=>{ if(o.glow){const gl=o.glow;tw(gl.pool.material,{opacity:0,duration:.4,onComplete:()=>scene.remove(gl.g)});gl.ring.visible=false;} o.el.classList.remove("on");o.el.style.opacity=0;later(()=>o.el.remove(),500);const i=labels.indexOf(o);if(i>-1)labels.splice(i,1);});}

  /* arcs */
  const arcs=[];
  const head=new THREE.Sprite(new THREE.SpriteMaterial({map:dotTex,color:0xffd9a8,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));
  head.scale.set(2.6,2.6,1); head.visible=false; scene.add(head);
  function clearArcs(){arcs.forEach(a=>{G&&G.killTweensOf(a);scene.remove(a.mesh,a.glow);a.mesh.geometry.dispose();a.glow.geometry.dispose();});arcs.length=0;head.visible=false;}
  function addArc(a,b,delay=0){
    const A=POS[a].clone(),B=POS[b].clone(),d=A.distanceTo(B),M=A.clone().add(B).multiplyScalar(.5); M.y=Math.max(A.y,B.y)+Math.max(2.5,d*.32);
    const curve=new THREE.QuadraticBezierCurve3(A,M,B);
    const g1=new THREE.TubeGeometry(curve,160,.07,8,false), g2=new THREE.TubeGeometry(curve,160,.3,8,false);
    const mesh=new THREE.Mesh(g1,new THREE.MeshBasicMaterial({color:0xfff0dc,transparent:true,depthWrite:false}));
    const glow=new THREE.Mesh(g2,new THREE.MeshBasicMaterial({color:0xe3a464,transparent:true,opacity:.28,depthWrite:false,blending:THREE.AdditiveBlending}));
    const total=g1.index.count; g1.setDrawRange(0,0); g2.setDrawRange(0,0); scene.add(mesh,glow);
    const o={p:0,curve,mesh,glow}; arcs.push(o);
    const upd=()=>{const n=Math.floor(total*o.p/6)*6;g1.setDrawRange(0,n);g2.setDrawRange(0,n);head.visible=o.p>0&&o.p<1;head.position.copy(curve.getPoint(o.p));};
    if(G) G.to(o,{p:1,duration:reduce?.01:1.6,delay,ease:"power2.inOut",onUpdate:upd}); else {o.p=1;upd();}
  }

  /* vehicle stage: the map hides and a stack of vehicle cards takes over */
  const CARP=new THREE.Vector3(0,0,320);
  const show=new THREE.Group(); scene.add(show);
  const vis={a:1}; const setA=()=>{};
  /* ---- vehicle deck: a stack of dark cards, the top one falls away to reveal the next ---- */
  const deckEl=$("#deck"), stackEl=deckEl.querySelector(".dk-stack"), ambEls=[...deckEl.querySelectorAll(".dk-amb")];
  const DK={top:null,name:null,amb:0};
  function deckLayout(){const W=deckEl.clientWidth,H=deckEl.clientHeight; if(!W||!H) return;
    const wideNow=W>1023;
    const isMobile=!wideNow && W<640;
    const horiz=!wideNow; // Desktop: vertical card. Mobile/Tablet: horizontal card.
    const x0=wideNow?(isRTL?0:Math.min(580,W*.5)):0;
    const top=wideNow?96:(isMobile?66:76);
    const bot=wideNow?H-40:Math.max(top+(isMobile?210:250),H-(isMobile?20:28));
    const bw=W-(wideNow?Math.min(580,W*.5):0)-(wideNow?48:(isMobile?20:32));
    const bh=bot-top;
    const ar=horiz?0.54:1.24;
    const w=wideNow
      ? Math.min(bw*.9, bh*.92/ar, 480)
      : (isMobile ? Math.min(W - 20, 420) : Math.min(bw * .95, 740));
    deckEl.classList.toggle("narrow",!wideNow);
    deckEl.classList.toggle("horiz",horiz);
    stackEl.style.width=w+"px";
    const baseW = wideNow ? 340 : (isMobile ? 310 : 480);
    deckEl.style.setProperty("--cs",(w/baseW).toFixed(3));
    const h=DK.top?DK.top.offsetHeight:Math.round(w*ar);
    const leftPos = wideNow
      ? (isRTL ? ((W - Math.min(580, W * .5) - w) / 2) : (x0 + (W - x0 - w) / 2))
      : ((W - w) / 2);
    const topPos = top + Math.max(0, (bh - h) / 2);
    Object.assign(stackEl.style,{height:h+"px",left:leftPos+"px",top:topPos+"px"});
  }
  observe(new ResizeObserver(deckLayout)).observe(deckEl);
  function cardEl(name,info){const el=document.createElement("article"); el.className="dk-card";
    const f=CARFILE[name]||"mercedes-vito";
    el.innerHTML=`<header class="dk-t">${name}</header><div class="dk-ph"><img src="${A}cars/${f}.webp" alt="${name}" decoding="async"></div>
      <div class="dk-ic">${["seat","bag","ac","shield"].map(k=>`<span>${PI[k]}</span>`).join("")}<em>${info&&info.tier?info.tier:""}</em></div>
      <p class="dk-d">${info?info.text:""}</p>`; return el;}
  function setAmb(name){const f=CARFILE[name]||"mercedes-vito", n=ambEls[DK.amb^1]; n.style.backgroundImage=`url(${A}cars/${f}.webp)`; n.classList.add("on"); ambEls[DK.amb].classList.remove("on"); DK.amb^=1;}
  function idle(el){}
  function deckShow(name,info){ deckLayout();
    if(DK.top&&DK.name===name){ if(info) deckInfo(info); return; }
    const old=DK.top, el=cardEl(name,info); DK.top=el; DK.name=name; setAmb(name);
    stackEl.appendChild(el); deckLayout(); el.querySelector("img").addEventListener("load",deckLayout,{once:true});
    if(!G||reduce){ if(old) old.remove(); return; }
    if(old){ G.killTweensOf(old); G.killTweensOf(old.querySelector("img"));
      G.set(el,{rotation:-7,x:-14,y:10,scale:.93,opacity:1,zIndex:2}); G.set(old,{zIndex:3});
      G.timeline().to(old,{y:"+=26",rotation:-2,duration:.22,ease:"power2.out"})
        .to(old,{y:"118%",rotation:6,rotationX:-24,scale:1.05,opacity:0,duration:.62,ease:"power3.in",onComplete:()=>old.remove()})
        .to(el,{rotation:0,x:0,y:0,scale:1,duration:.75,ease:"power3.out",onStart:()=>G.set(el,{zIndex:4}),onComplete:()=>idle(el)},"-=.35")
        .from(el.querySelectorAll(".dk-t,.dk-ic,.dk-d"),{opacity:0,y:8,stagger:.06,duration:.45,ease:"power2.out"},"-=.45");
    } else {
      G.timeline().from(deckEl.querySelectorAll(".dk-back"),{opacity:0,rotation:0,x:0,y:30,stagger:.08,duration:.7,ease:"power3.out"})
        .from(el,{y:60,opacity:0,rotation:3,duration:.8,ease:"power3.out",onComplete:()=>idle(el)},"-=.55")
        .from(el.querySelectorAll(".dk-t,.dk-ic,.dk-d"),{opacity:0,y:8,stagger:.06,duration:.45},"-=.4"); } }
  function deckInfo(info){const el=DK.top; if(!el) return; const d=el.querySelector(".dk-d"), t=el.querySelector(".dk-ic em");
    if(t) t.textContent=info.tier||""; if(info.html===d.innerHTML) return;
    if(!G){d.innerHTML=info.html||info.text;return;}
    G.to(d,{opacity:0,y:-6,duration:.2,onComplete:()=>{d.innerHTML=info.html||info.text; d.classList.toggle("trip",!!info.html); deckLayout(); G.fromTo(d,{opacity:0,y:8},{opacity:1,y:0,duration:.45,ease:"power2.out"});}});}
  function deckHide(){ if(DK.top){ if(G){G.killTweensOf(DK.top);} DK.top.remove(); } DK.top=null; DK.name=null; }
  const showCar=(name,info)=>deckShow(name,info);
  const hideCar=()=>{};
  const hideCarNow=()=>deckHide();

  /* camera */
  let wide=false;
  function fly(to,d=2.2,ease="power3.inOut"){ if(!G){Object.assign(rig,to);return;} G.killTweensOf(rig); return G.to(rig,{...to,duration:reduce?.01:d,ease}); }
  const at=(k,dx,dy,dz)=>{const p=POS[k];return {x:p.x+dx,y:dy,z:p.z+dz,tx:p.x,ty:p.y,tz:p.z};};
  const SHOTS={
    map:()=>wide?({x:C.x+(isRTL?-9:9),y:136,z:C.z+52,tx:C.x+(isRTL?-9:9),ty:0,tz:C.z-2}):fitMap(),
    airport:()=>({...at("RBA",0,62,42),tz:POS.RBA.z+4}),
    city:()=>({...at("RAK",4,72,46),tz:POS.RAK.z-4}),
    day:()=>at("RAK",3,20,22),
    tour:()=>({...at("RAK",8,58,44),tx:POS.RAK.x+6}),
    car:()=>({x:CARP.x+(wide?.6:0),y:3.6,z:CARP.z+(wide?21:17),tx:CARP.x+(wide?.6:0),ty:2.2,tz:CARP.z}),
    podium:()=>({x:CARP.x-(wide?2:1.5),y:3.3,z:CARP.z+(wide?20:16.5),tx:CARP.x+(wide?.3:0),ty:2.3,tz:CARP.z}),
    result:()=>({x:CARP.x+(wide?1.4:0),y:3.9,z:CARP.z+(wide?24:18),tx:CARP.x+(wide?1.2:0),ty:2.4,tz:CARP.z})
  };
  const OUTLINE=[[35.92,-5.9],[35.1,-2.0],[32.1,-1.1],[29.2,-3.6],[27.67,-8.67],[21.33,-13.0],[20.77,-17.1],[23.7,-16.0],[27.9,-12.9],[31.5,-9.85],[33.6,-7.6]].map(([a,b])=>P(a,b));
  function fitMap(){const tmp=new THREE.PerspectiveCamera(cam.fov,(W0||1)/(H0||1),.1,800), top=Math.min(.3,70/(H0||400)), bot=.8, tw=.88, th=(bot-top)*2*.92, tcy=1-(top+bot);
    const dir=new THREE.Vector3(0,160,52).normalize(), sinE=dir.y, tanH=Math.tan(cam.fov*Math.PI/360), c=C.clone(); c.y=0; let dist=170; const v=new THREE.Vector3();
    for(let i=0;i<14;i++){ tmp.position.copy(c).addScaledVector(dir,dist); tmp.lookAt(c); tmp.updateMatrixWorld(); tmp.updateProjectionMatrix();
      let x0=9,x1=-9,y0=9,y1=-9; for(const q of OUTLINE){v.copy(q).project(tmp); x0=Math.min(x0,v.x);x1=Math.max(x1,v.x);y0=Math.min(y0,v.y);y1=Math.max(y1,v.y);}
      c.x+=(x0+x1)/2*dist*tanH*tmp.aspect; c.z-=((y0+y1)/2-tcy)*dist*tanH/sinE; dist*=Math.max((x1-x0)/(2*tw),(y1-y0)/th); }
    scene.fog.near=Math.max(140,dist*.9); scene.fog.far=Math.max(330,dist*2);
    return {x:c.x+dir.x*dist,y:dir.y*dist,z:c.z+dir.z*dist,tx:c.x,ty:0,tz:c.z};}
  let lastShot=null;
  const shot=(n,d)=>{lastShot=n;return fly(SHOTS[n](),d);};
  function frame(keys,d=2.2){const b=new THREE.Box3();keys.forEach(k=>b.expandByPoint(POS[k]));const c=b.getCenter(new THREE.Vector3()),s=b.getSize(new THREE.Vector3()),r=Math.max(9,Math.max(s.x,s.z));
    return fly({x:c.x+r*.1,y:r*1.25+12,z:c.z+r*1.05+14,tx:c.x,ty:c.y,tz:c.z},d);}
  function setTitle(on){title.want=on;}
  title.want=true;
  function route(keys,info){clearArcs();clearCallouts();hot(keys);setTitle(false);
    for(let i=0;i<keys.length-1;i++) addArc(keys[i],keys[i+1],.4+i*1.1);
    frame(keys);
    if(info){ const a=keys[0], b=keys[keys.length===2?1:Math.floor(keys.length/2)];
      const left=POS[a].x>POS[b].x;
      later(()=>{callout(a,info.an,info.av,info.ad,left?"r":"l",56);},700);
      if(b!==a) later(()=>{callout(b,info.bn,info.bv,info.bd,left?"l":"r",84);},1700);}
  }
  function travel(){clearArcs();clearCallouts();setTitle(false); if(!G) return;
    const s=P(22.5,-15.5,.3), m=P(29,-10,.3), n=P(35,-6,.3);
    toMap({x:s.x+2,y:30,z:s.z+30,tx:s.x+6,ty:0,tz:s.z-10});
    return G.timeline({delay:.65}).to(rig,{x:s.x+4,y:16,z:s.z+16,tx:s.x+8,ty:1,tz:s.z-16,duration:1,ease:"power2.out"})
      .to(rig,{x:m.x+6,y:13,z:m.z+12,tx:m.x+12,ty:2,tz:m.z-20,duration:1.2,ease:"none"})
      .to(rig,{x:n.x+4,y:16,z:n.z+14,tx:n.x+6,ty:1,tz:n.z-20,duration:1.1,ease:"power1.out"});}

  /* scene modes + cut */
  let mode="map"; const wipeEl=$("#wipe");
  function setMode(m){mode=m; atlas.visible=m==="map"; skirt.visible=m==="map"; skirt.userData.outer.visible=m==="map"; head.visible=false; deckEl.style.display=m==="show"?"block":"none"; root.classList.toggle("showmode",m==="show"); renderer.domElement.style.visibility=m==="show"?"hidden":"visible"; const ins=$("#inset"); if(ins) ins.style.visibility=m==="show"?"hidden":"visible"; labelsEl.style.visibility=m==="map"?"visible":"hidden";
    if(m==="show"){clearArcs();clearCallouts();} show.visible=m==="show";}
  function snap(n){ if(G) G.killTweensOf(rig); lastShot=typeof n==="string"?n:null; Object.assign(rig,typeof n==="string"?SHOTS[n]():n); }
  function cut(mid){ if(!G||reduce){mid();return;}
    G.killTweensOf(wipeEl);
    G.timeline().set(wipeEl,{display:"block",xPercent:-102}).to(wipeEl,{xPercent:0,duration:.55,ease:"power3.in"})
      .call(mid).to(wipeEl,{xPercent:102,duration:.75,ease:"power3.out"},"+=.08").set(wipeEl,{display:"none"});}
  function toShow(shotName,after){ if(mode==="show"){fly(SHOTS[shotName](),1.6);after&&after();return;}
    cut(()=>{vis.a=0;setA();setMode("show");snap(shotName);after&&after();}); }
  function toMap(shotName,after){ if(mode==="map"){after&&after();return;}
    cut(()=>{hideCarNow();setMode("map");snap(shotName||"map");after&&after();}); }

  /* render */
  let W0=0,H0=0;
  function size(){const r=host.getBoundingClientRect();W0=r.width;H0=r.height;if(!W0||!H0) return; renderer.setSize(W0,H0,false);cam.aspect=W0/H0;
    wide=W0>1023;
    if(wide) cam.setViewOffset(W0,H0,isRTL?W0*.21:-W0*.21,0,W0,H0);
    else cam.clearViewOffset();
    cam.updateProjectionMatrix();
    if(lastShot==="map"&&mode==="map"&&W0&&H0){ if(G) G.killTweensOf(rig); Object.assign(rig,SHOTS.map()); }}
  observe(new ResizeObserver(size)).observe(host); size(); Object.assign(rig,SHOTS.map()); lastShot="map";
  on(host.parentElement,"pointermove",e=>{const r=host.getBoundingClientRect();mouse.tx=((e.clientX-r.left)/r.width-.5);mouse.ty=((e.clientY-r.top)/r.height-.5);});
  const v=new THREE.Vector3(), clock=new THREE.Clock(); let visible=true, fN=0;
  observe(new IntersectionObserver(es=>visible=es[0].isIntersecting)).observe(host);
  let rafId=0;
  (function loop(){
    if(dead) return; rafId=requestAnimationFrame(loop); if(!visible) return;
    const t=clock.getElapsedTime(); mouse.x+=(mouse.tx-mouse.x)*.05; mouse.y+=(mouse.ty-mouse.y)*.05;
    const sw=reduce?0:1, k=mode==="show"?.35:Math.min(1,rig.y/60);
    cam.position.set(rig.x+(mouse.x*3+Math.sin(t*.13)*.8)*sw*k, rig.y-mouse.y*1.6*sw, rig.z);
    cam.lookAt(rig.tx,rig.ty,rig.tz);
    if(mode==="map") renderer.render(scene,cam);
    const near=mode!=="map";
    fN++;
    for(const o of labels){ if(fN%20===1||!o.w){ const t=o.co?o.el.querySelector(".tx"):o.el; o.w=t.offsetWidth; o.h=t.offsetHeight; } }
    const placed=[{l:0,t:0,w:W0,h:64}], PADL=6;
    if(wide) {
      if(isRTL) placed.push({l:W0-Math.min(580,W0*.5),t:0,w:Math.min(580,W0*.5),h:H0});
      else placed.push({l:0,t:0,w:Math.min(580,W0*.5),h:H0});
    }
    title.op=title.want&&wide?1:0;
    labels.slice().sort((a,b)=>a.pri-b.pri).forEach(o=>{
      v.copy(o.pos); v.project(cam);
      const sx=(v.x*.5+.5)*W0, sy=(-v.y*.5+.5)*H0;
      let ok=!near&&o.op>0&&v.z<1&&v.x>-1.1&&v.x<1.1&&v.y>-1.1&&v.y<1.1;
      if(ok&&o.w){ let r;
        if(o.co){ let sd=o.side; const L0=wide?(isRTL?8:Math.min(580,W0*.5)+8):8, R0=wide?(isRTL?W0-Math.min(580,W0*.5)-8:W0-8):W0-8;
          if(sd==="r"&&sx+16+o.w>R0&&sx-o.w-16>=L0) sd="l"; else if(sd==="l"&&sx-o.w-16<L0&&sx+16+o.w<=R0) sd="r";
          let l=sd==="r"?sx+16:sx-o.w-16, dx=0; if(l<L0) dx=L0-l; if(l+o.w>R0) dx=R0-(l+o.w);
          o.el.classList.toggle("r",sd==="r"); o.el.style.setProperty("--dx",dx+"px");
          const hitR=q=>placed.some(p=>q.l<p.l+p.w+PADL&&q.l+q.w+PADL>p.l&&q.t<p.t+p.h+2&&q.t+q.h+2>p.t);
          let dy=0; r={l:l+dx,t:sy-14,w:o.w,h:o.h};
          if(hitR(r)){ for(const d of [o.h+10,-(o.h+10),2*o.h+20]){ const q={...r,t:sy-14+d}; if(!hitR(q)){dy=d;r=q;break;} } }
          o.el.style.setProperty("--dy",dy+"px"); }
        else r={l:sx+o.a[0].f*o.w+o.a[0].p,t:sy+o.a[1].f*o.h+o.a[1].p,w:o.w,h:o.h};
        const hit=placed.some(p=>r.l<p.l+p.w+PADL&&r.l+r.w+PADL>p.l&&r.t<p.t+p.h+2&&r.t+r.h+2>p.t);
        if(hit&&!o.co) ok=false; else placed.push(r);
        if(o.co) placed.push({l:sx-10,t:sy-10,w:20,h:20}); }
      o.el.style.opacity=ok?o.op:0;
      o.el.style.transform=`translate(${sx}px,${sy}px)`+(o.co?"":` translate(${o.anchor})`);
    });
  })();
  const dispose=()=>{cancelAnimationFrame(rafId); clearArcs(); renderer.dispose(); try{renderer.forceContextLoss();}catch(e){} renderer.domElement.remove(); labelsEl.innerHTML=""; deckHide();};
  return {deckInfo,shot,route,hot,showCar,hideCar,travel,clearArcs,clearCallouts,frame,setTitle,callout,toShow,toMap,mode:()=>mode,dispose};
})();

/* ---------- quiz ---------- */
const S={type:null,from:null,to:null,airport:null,dest:null,day:null,start:null,days:null,pax:2,comfort:null,when:null};
let idx=0;
const stage=$("#stage"),back=$("#back"),count=$("#count"),ringV=$("#ringV");
const track=(event,x={})=>{try{(window.dataLayer=window.dataLayer||[]).push({event,quiz:"trip_finder_3d",...x})}catch(e){}};
const cls=()=>CLASSES.find(c=>S.pax<=c.max);
const r5=n=>Math.round(n/5)*5;
const pad=n=>String(n).padStart(2,"0");
const w3=(fn,...a)=>{ if(W) W[fn](...a); };
function setCap(l,t){const L=$("#capL"),T=$("#capT"); if(!G){L.textContent=l;T.textContent=t;return;}
  G.to([L,T],{opacity:0,duration:.2,onComplete:()=>{L.textContent=l;T.textContent=t;G.to([L,T],{opacity:1,duration:.5});}});}
const onMap=(fn)=>{ projClear(); if(W&&W.mode()==="show") W.toMap("map",fn); else fn(); };
const TYPECAM0={
  airport:()=>{w3("clearArcs");w3("clearCallouts");w3("setTitle",false);w3("hot",Object.keys(AIRPORTS));w3("shot","airport");setCap(T.types.airport.n,T.routeInfoTexts.meetAndGreet);},
  city:()=>{w3("clearArcs");w3("clearCallouts");w3("setTitle",false);w3("hot",Object.keys(CITIES));w3("shot","city");setCap(T.types.city.n,T.map.t2);},
  day:()=>{w3("clearArcs");w3("clearCallouts");w3("setTitle",false);w3("hot",["RAK"]);w3("shot","day");setCap(T.types.day.n,T.day.atlas.n);},
  tour:()=>{w3("clearArcs");w3("clearCallouts");w3("setTitle",false);w3("hot",["RAK","MRZ","FES"]);w3("shot","tour");setCap(T.types.tour.n,`${T.cities.RAK} → ${T.cities.MRZ}`);}};
const TYPECAM=Object.fromEntries(Object.entries(TYPECAM0).map(([k,f])=>[k,()=>onMap(f)]));

function H(text){return "<h2>"+text.replace(/\[([^\]]+)\]|(\S+)/g,(m,g,p)=>(g||p).split(" ").map(x=>`<span class="w ${g?"g":""}"><span class="wi">${x}</span></span>`).join(" "))+"</h2>";}
function quote(){
  let base=0,km=null,route="",an="",bn="";
  if(S.type==="city"){km=D[pk(S.from,S.to)];base=KNOWN[pk(S.from,S.to)]||Math.max(45,r5(km*.5));route=`${CITIES[S.from]} → ${CITIES[S.to]}`;an=CITIES[S.from];bn=CITIES[S.to];}
  else if(S.type==="airport"){an=`${CITIES[S.airport]} airport`;
    if(S.dest==="local"){km=15;base=30;route=`${CITIES[S.airport]} airport → ${T.steps.s2.yourHotel}`;bn=T.steps.s2.yourHotel;}
    else{km=D[pk(S.airport,S.dest)];base=KNOWN[pk(S.airport,S.dest)]||Math.max(45,r5(km*.5));route=`${CITIES[S.airport]} airport → ${CITIES[S.dest]}`;bn=CITIES[S.dest];}}
  else if(S.type==="day"){km=DAY[S.day].km;base=DAY[S.day].p;route=`${CITIES.RAK} → ${DAY[S.day].n}`;an=CITIES.RAK;bn=DAY[S.day].n;}
  else{base=S.days*130;km=S.days*260;route=`${T.tours.sameDriver(S.days)} (${CITIES[S.start]})`;an=CITIES[S.start];bn=T.tours.loop(S.days);}
  const c=cls(),ci=COMFORT.findIndex(x=>x.k===S.comfort),price=r5(base*c.m*COMFORT[ci].m);
  return {price,mad:Math.round(price*11/10)*10,km,route,an,bn,car:c.cars[ci],cname:c.name,comfort:COMFORT[ci].n,tour:S.type==="tour"};
}
function routeKeys(){
  if(S.type==="city"&&S.from&&S.to) return [S.from,S.to];
  if(S.type==="airport"&&S.airport&&S.dest) return S.dest==="local"?[S.airport]:[S.airport,S.dest];
  if(S.type==="day"&&S.day) return ["RAK",S.day];
  if(S.type==="tour"&&S.start&&S.days){const t=[...TOURS[S.days]];if(S.start!=="RAK"){t[0]=S.start;t[t.length-1]=S.start;}return t;}
  return null;
}
function routeInfo(k){
  if(S.type==="city"){const km=D[pk(k[0],k[1])];return {an:CITIES[k[0]],av:"",ad:T.routeInfoTexts.pickup,bn:CITIES[k[1]],bv:`${km} KM`,bd:`${hrs(km)} ${T.routeInfoTexts.byPrivateCar}`};}
  if(S.type==="airport"){ if(k.length===1) return {an:`${CITIES[k[0]]} airport`,av:`≈ 15 ${T.labels.min}`,ad:T.routeInfoTexts.arrivalsToHotel};
    const km=D[pk(k[0],k[1])];return {an:`${CITIES[k[0]]} airport`,av:"",ad:T.routeInfoTexts.meetAndGreet,bn:CITIES[k[1]],bv:`${km} KM`,bd:hrs(km)+" "+T.routeInfoTexts.doorToDoor};}
  if(S.type==="day"){const d=DAY[S.day];return {an:CITIES.RAK,av:"",ad:T.routeInfoTexts.pickupRiad,bn:d.n,bv:T.labels.fromPrice(d.p).toUpperCase(),bd:`${d.km} ${T.eachWayBack}`};}
  return {an:CITIES[k[0]],av:"",ad:T.routeInfoTexts.tourStarts,bn:CITIES[k[Math.floor(k.length/2)]],bv:T.tours.sameDriver(S.days).toUpperCase(),bd:T.routeInfoTexts.sameDriverThroughout};
}
function drawRoute(){const k=routeKeys(); if(!k||!W) return; const info=routeInfo(k);
  if(k.length===1){W.clearArcs();W.clearCallouts();W.hot(k);W.frame(k);later(()=>W.callout(k[0],info.an,info.av,info.ad,isRTL?"l":"r",60),600);} else W.route(k,info);}

const rowsHTML=(items,sel,attr)=>`<div class="rows a">${items.map((it,i)=>`
  <button class="row ${sel===it.k?"sel":""}" data-${attr}="${it.k}" aria-pressed="${sel===it.k}">
    <span class="n">${pad(i+1)}</span><span class="tx"><b>${it.n}</b>${it.d?`<small>${it.d}</small>`:""}</span>
    <span class="end">${it.e?`<span class="tag">${it.e}</span>`:""}<span class="mk2"></span></span></button>`).join("")}</div>`;
const chips=(name,map,sel,dis)=>`<div class="chips">${Object.entries(map).map(([k,v])=>`<button class="chip ${String(sel)===k?"sel":""}" data-${name}="${k}" ${dis===k?"disabled":""}>${v}</button>`).join("")}</div>`;
function stat(a,b,km,local){
  if(!(a&&b)) return `<div class="stat a"><span class="n">${T.steps.s2.statRoute}</span><span class="d">${T.steps.s2.statChoose}</span></div>`;
  return `<div class="stat a"><span class="n">${a} → ${b}</span><span class="v">${local?`≈ 15 ${T.labels.min}`:km+" KM"}</span><span class="d">${local?T.steps.s2.statLocalDesc:`${hrs(km)} · ${T.steps.s2.statPerVehicle}`}</span></div>`;
}

/* ---------- gold projection on the road ---------- */
const PJ=$("#plane");
const PI={
  seat:'<svg viewBox="0 0 32 32"><path d="M10 4h8a2 2 0 0 1 2 2v12H8V6a2 2 0 0 1 2-2zM6 18h18l2 6H8zM9 24v4M23 24v4"/></svg>',
  bag:'<svg viewBox="0 0 32 32"><rect x="7" y="9" width="18" height="17" rx="3"/><path d="M12 9V5h8v4M12 26v2M20 26v2M16 13v9"/></svg>',
  ac:'<svg viewBox="0 0 32 32"><path d="M16 3v26M4.7 9.5l22.6 13M4.7 22.5l22.6-13M13 6l3 3 3-3M13 26l3-3 3 3"/></svg>',
  wifi:'<svg viewBox="0 0 32 32"><path d="M4 12a17 17 0 0 1 24 0M8 17a11 11 0 0 1 16 0M12 22a5 5 0 0 1 8 0"/><circle cx="16" cy="26" r="1.5"/></svg>',
  shield:'<svg viewBox="0 0 32 32"><path d="M16 3l11 4v8c0 7-5 12-11 14C10 27 5 22 5 15V7z"/><path d="M11 16l4 4 6-7"/></svg>',
  clock:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 9v7l5 3"/></svg>'
};
let pjKey="", pjTl=null, pjIdle=null;
function projClear(){pjKey="";$("#proj").classList.remove("has");pjTl&&pjTl.kill();pjIdle&&pjIdle.kill(); if(!G){PJ.innerHTML="";return;} G.to(PJ,{opacity:0,duration:.25,onComplete:()=>{if(!pjKey)PJ.innerHTML="";}});}
function cardHTML(inner){return `<div class="pj-card pg"><svg class="fr"><rect x="1" y="1" rx="20" ry="20"/></svg>${inner}</div>`;}
function animate(withRoute){
  pjTl&&pjTl.kill(); pjIdle&&pjIdle.kill();
  const card=PJ.querySelector(".pj-card"), rect=card.querySelector(".fr rect");
  const w=card.offsetWidth,h=card.offsetHeight; rect.setAttribute("width",Math.max(0,w-2)); rect.setAttribute("height",Math.max(0,h-2));
  const L=2*(w+h); rect.style.strokeDasharray=L;
  if(!G||reduce){PJ.style.opacity=1;rect.style.strokeDashoffset=0;return;}
  const sub=PJ.querySelector(".pj-sub"); let cs=[]; if(sub){const t=sub.textContent;sub.innerHTML=[...t].map(c=>`<span class="pj-ch">${c}</span>`).join("");cs=sub.querySelectorAll(".pj-ch");}
  pjTl=G.timeline();
  pjTl.set(PJ,{opacity:1}).fromTo(PJ,{opacity:0,y:14},{opacity:1,y:0,duration:.7,ease:"expo.out",immediateRender:false},0)
    .fromTo(rect,{strokeDashoffset:L},{strokeDashoffset:0,duration:1.2,ease:"power2.inOut"},.1)
    .fromTo(PJ.querySelectorAll(".pj-rule"),{scaleX:0},{scaleX:1,duration:.7,stagger:.1,ease:"expo.out"},.4)
    .fromTo(PJ.querySelectorAll(".pj-shim"),{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:.9,ease:"power2.out"},.35)
    .fromTo(PJ.querySelectorAll(".pj-big small"),{opacity:0},{opacity:1,duration:.4},.9)
    .fromTo(cs,{opacity:0,y:5},{opacity:1,y:0,duration:.16,stagger:.018,ease:"power2.out"},.6)
    .fromTo(PJ.querySelectorAll(".pj-row .it,.pj-row .sep,.pj-trip > span"),{opacity:0,y:8},{opacity:1,y:0,duration:.5,stagger:.07,ease:"expo.out"},.8)
    .fromTo(PJ.querySelectorAll(".pj-bar i"),{scaleX:0},{scaleX:1,duration:1.3,ease:"power2.inOut"},.9)
    .fromTo(PJ.querySelectorAll(".pj-bar b"),{left:"0%"},{left:"100%",duration:1.3,ease:"power2.inOut"},.9)
    .to(PJ.querySelectorAll(".pj-shim"),{backgroundPosition:"-150% 0",duration:1.5,ease:"power2.inOut"},1.5);
  const pr=PJ.querySelector("[data-count]"); if(pr){const o={v:0},to=+pr.dataset.count;pjTl.to(o,{v:to,duration:1.2,ease:"power3.out",onUpdate:()=>pr.textContent=Math.round(o.v)},1);}
  let line=null,len=0,dot=null;
  if(withRoute){ line=PJ.querySelector(".line"); const core=PJ.querySelector(".core"); dot=PJ.querySelector(".dot"); len=line.getTotalLength();
    [line,core].forEach(p=>{p.style.strokeDasharray=len;p.style.strokeDashoffset=len;});
    pjTl.to([line,core],{strokeDashoffset:0,duration:2,ease:"power2.inOut"},.3)
      .fromTo(PJ.querySelectorAll(".pj-route .pinG"),{scale:0,opacity:0,transformOrigin:"center"},{scale:1,opacity:1,duration:.5,stagger:1.5,ease:"back.out(3)"},.4)
      .fromTo(PJ.querySelectorAll(".pj-route .net path"),{opacity:0},{opacity:1,duration:.6,stagger:.08},.2);}
  pjTl.call(()=>{ pjIdle=G.timeline({repeat:0});
    if(line){pjIdle.set(dot,{opacity:1}).to({},{duration:2.4,ease:"none",onUpdate(){const p=line.getPointAtLength(len*this.progress());dot.setAttribute("cx",p.x);dot.setAttribute("cy",p.y);}}).set(dot,{opacity:0});}
    pjIdle.fromTo(PJ.querySelectorAll(".pj-shim"),{backgroundPosition:"100% 0"},{backgroundPosition:"-150% 0",duration:1.5,ease:"power2.inOut"},.3)
; });
}
function projVehicle(car,tier){
  const c=cls(), key="v|"+car+"|"+(tier||""); if(key===pjKey) return; pjKey=key;
  $("#proj").classList.add("has");
  PJ.innerHTML=cardHTML(`<div class="pj-big"><span class="pj-shim">${car}</span></div>
    <div class="pj-sub">${tier?tier+" · ":""}${c.name} · ${T.labels.privateDriver}</div><div class="pj-rule"></div>
    <div class="pj-row"><span class="it">${PI.seat}<b>${c.max} ${T.labels.seats}</b></span><span class="sep"></span><span class="it">${PI.bag}<b>${c.max} ${T.labels.bags}</b></span><span class="sep pj-hide-m"></span><span class="it pj-hide-m">${PI.ac}<b>${T.labels.ac}</b></span><span class="sep pj-hide-m"></span><span class="it pj-hide-m">${PI.shield}<b>${T.labels.licensed}</b></span></div>`);
  requestAnimationFrame(()=>animate(false));
}
function projTrip(q){
  pjKey="t|"+q.route;
  const dur=q.tour?T.tours.sameDriver(S.days):hrs(q.km).replace("~","");
  $("#proj").classList.add("has");
  PJ.innerHTML=cardHTML(`<div class="pj-big"><span class="pj-shim">${dur}</span><small>(${q.km.toLocaleString(LANG)} km)</small></div>
    <div class="pj-sub pj-hide-m">${T.projTexts.subTrip}</div><div class="pj-rule"></div>
    <div class="pj-trip"><span>${q.an}</span><span class="pj-bar"><i></i><b></b></span><span>${q.bn}</span></div><div class="pj-rule pj-hide-m"></div>
    <div class="pj-row pj-hide-m"><span class="it"><b>${T.projTexts.fromFixed(q.price)}</b></span><span class="sep"></span><span class="it">${PI.seat}<b>${S.pax}</b></span><span class="sep pj-hide-m"></span><span class="it pj-hide-m">${PI.clock}<b>${S.when}</b></span></div>`);
  requestAnimationFrame(()=>animate(false));
}
function carInfo(car,tier){const c=cls(); return {tier:tier||"",text:`<b>${c.name} · ${T.labels.upToSeats(c.max)}</b><br>${T.labels.privateDriver} · ${T.labels.fuelTollsAcIncluded}`};}
function tripInfo(q){const dur=q.tour?T.tours.sameDriver(S.days):hrs(q.km).replace("~","");
  const paxLabel = S.pax > 1 ? T.labels.travellers : T.labels.traveller;
  return {tier:q.comfort,html:`<span class="dk-route">${q.an} → ${q.bn}</span>${q.km.toLocaleString(LANG)} km · ${dur} · ${S.pax} ${paxLabel}<span class="dk-price">${T.labels.fromPrice(q.price)}</span>`};}
const tierOf=car=>{const c=cls(),i=c.cars.indexOf(car);return i>=0?COMFORT[i].n:"";};
function vehicle(car,tier,fresh){ if(!W) return; W.showCar(car,carInfo(car,tier)); later(()=>projVehicle(car,tier),fresh?750:350); }

/* ---------- email quote + marketing consent ---------- */
const isEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
async function submitLead(lead){
  const res=await fetch(LEAD_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...lead,source:"trip_finder_3d"})});
  if(!res.ok) throw {code:"http_"+res.status};
}
function bindMail(el,q){
  const f=el.querySelector("#mailF"), nm=f.querySelector("#mName"), em=f.querySelector("#mEmail"), ok=f.querySelector("#mOk"), btn=f.querySelector("#mSend"), msg=f.querySelector("#mMsg");
  em.addEventListener("input",()=>{em.removeAttribute("aria-invalid");msg.textContent="";msg.className="mail-msg";});
  f.addEventListener("submit",async e=>{
    e.preventDefault();
    const email=em.value.trim(), name=nm.value.trim();
    if(!isEmail(email)){em.setAttribute("aria-invalid","true");msg.className="mail-msg err";msg.textContent=T.result.emailErrorInvalid;em.focus();return;}
    btn.disabled=true; btn.firstChild.textContent=T.result.emailSending;
    const lead={name,email,marketingConsent:ok.checked,consentText:ok.checked?T.result.consentText:null,createdAt:new Date().toISOString(),
      quote:{trip:TYPES[S.type].n,route:q.route,km:q.km,travellers:S.pax,vehicle:q.car,comfort:q.comfort,when:S.when,priceEUR:q.price}};
    try{
      await submitLead(lead);
      track("quiz_email_submit",{price:q.price,trip:S.type,consent:ok.checked});
      f.innerHTML=`<div class="mail-ok"><i></i><div><b>${T.result.thanksMsg(name, email)}</b>${ok.checked?`<span>${T.result.consentConfirmed}</span>`:""}</div></div>`;
      G&&G.fromTo(f.firstChild,{opacity:0,y:8},{opacity:1,y:0,duration:.6,ease:"expo.out"});
    }catch(err){
      btn.disabled=false; btn.firstChild.textContent=T.result.emailBtn;
      msg.className="mail-msg err"; msg.textContent=T.result.emailErrorGeneric;
    }
  });
}

const steps=[
  { ok:()=>!!S.type, cam:()=>{ if(S.type) TYPECAM[S.type](); else onMap(()=>{w3("clearArcs");w3("clearCallouts");w3("hot",[]);w3("setTitle",true);w3("shot","map");setCap(T.inset.country,T.inset.tagline);}); },
    html:()=>`${H(T.steps.s1.title)}
      <p class="sub a">${T.steps.s1.subtitle}</p>
      ${rowsHTML(Object.entries(TYPES).map(([k,t])=>({k,...t})),S.type,"type")}`,
    bind(el){let ht;el.querySelectorAll("[data-type]").forEach(b=>{
      b.onmouseenter=()=>{clearTimeout(ht);ht=later(()=>TYPECAM[b.dataset.type](),140);};
      b.onclick=()=>{ if(S.type!==b.dataset.type){S.from=S.to=S.airport=S.dest=S.day=S.start=S.days=null;}
        S.type=b.dataset.type;pick(b);TYPECAM[S.type]();auto(); };});}
  },
  { ok:()=>!!routeKeys(),
    cam:()=>{ if(routeKeys()) onMap(drawRoute); else TYPECAM[S.type](); },
    html(){
      if(S.type==="city") return `${H(T.steps.s2.cityTitle)}
        <div class="field a"><span class="cap">${T.steps.s2.from}</span>${chips("from",CITIES,S.from)}</div>
        <div class="field a"><span class="cap">${T.steps.s2.to}</span>${chips("to",CITIES,S.to,S.from)}</div>
        ${stat(CITIES[S.from],CITIES[S.to],S.from&&S.to?D[pk(S.from,S.to)]:0)}`;
      if(S.type==="airport"){
        const dests=S.airport?{local:T.steps.s2.hotelInCity(CITIES[S.airport]),...Object.fromEntries(Object.entries(CITIES).filter(([k])=>k!==S.airport))}:{local:T.steps.s2.sameCityHotel};
        const local=S.dest==="local";
        return `${H(T.steps.s2.airportTitle)}
        <div class="field a"><span class="cap">${T.steps.s2.arrivalAirport}</span>${chips("airport",AIRPORTS,S.airport)}</div>
        <div class="field a"><span class="cap">${T.steps.s2.goingTo}</span>${chips("dest",dests,S.dest)}</div>
        ${stat(S.airport?`${CITIES[S.airport]} airport`:"",local?T.steps.s2.yourHotel:CITIES[S.dest],S.airport&&S.dest&&!local?D[pk(S.airport,S.dest)]:0,local)}`;}
      if(S.type==="day") return `${H(T.steps.s2.dayTitle)}
        ${rowsHTML(Object.entries(DAY).map(([k,d])=>({k,n:d.n,d:`${d.km} ${T.eachWayBack}`,e:T.labels.fromPrice(d.p)})),S.day,"day")}`;
      return `${H(T.steps.s2.tourTitle)}
        <div class="field a"><span class="cap">${T.tours.startCity}</span>${chips("start",{RAK:CITIES.RAK,CMN:CITIES.CMN,FES:CITIES.FES,TNG:CITIES.TNG,AGA:CITIES.AGA},S.start)}</div>
        <div class="field a"><span class="cap">${T.tours.length}</span>${chips("days",{3:T.tours.d3,5:T.tours.d5,7:T.tours.d7},S.days)}</div>`;
    },
    bind(el){
      const set=(attr,key,cast=v=>v)=>el.querySelectorAll(`[data-${attr}]`).forEach(b=>b.onclick=()=>{
        S[key]=cast(b.dataset[attr]); if(key==="from"&&S.to===S.from)S.to=null; if(key==="airport"&&S.dest===S.airport)S.dest=null;
        refresh();
        const k=routeKeys(); if(k){drawRoute(); auto(k.length>3?5200:3800);} else { const one=S.from||S.airport||S.start; if(one&&W){W.hot([one]);} }
      });
      set("from","from");set("to","to");set("airport","airport");set("dest","dest");set("start","start");set("days","days",Number);
      el.querySelectorAll("[data-day]").forEach(b=>{
        b.onclick=()=>{S.day=b.dataset.day;pick(b);drawRoute();setCap(T.types.day.n,DAY[S.day].n);auto(3200);};});
    }
  },
  { ok:()=>true, cam:()=>{ setCap(`${cls().name} · ${T.labels.upToSeats(cls().max)}`,cls().hero); if(W){const fresh=W.mode()!=="show"; W.toShow("car",()=>vehicle(cls().hero,"",fresh));} },
    html:()=>`${H(T.steps.s3.title)}
      <p class="sub a">${T.steps.s3.subtitle}</p>
      <div class="a" style="display:flex;flex-direction:column;gap:12px">
        <div class="pax-row"><div class="big" id="paxN"><span>${S.pax}</span></div>
          <div class="pms"><button class="pm" data-d="-1" aria-label="${T.steps.s3.fewerPax}">−</button><button class="pm" data-d="1" aria-label="${T.steps.s3.morePax}">+</button></div></div>
        <div class="seats" id="seats">${seats()}</div>
        <div class="veh-meta"><span class="cap">${T.labels.vehiclePrefix} · <b id="vn">${cls().name} · ${cls().hero}</b></span><span class="cap"><b>${T.labels.upToSeats(cls().max)}</b></span></div>
      </div>
      <div class="foot a"><button class="btn" id="next">${T.steps.s3.continueBtn}</button></div>`,
    bind(el){
      el.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{
        const d=Number(b.dataset.d),n=Math.min(16,Math.max(1,S.pax+d)); if(n===S.pax)return;
        const before=cls().key; S.pax=n;
        const N=el.querySelector("#paxN"), sp=document.createElement("span"); sp.textContent=n; N.innerHTML=""; N.appendChild(sp);
        G&&G.fromTo(sp,{yPercent:d>0?100:-100},{yPercent:0,duration:.5,ease:"expo.out"});
        el.querySelector("#seats").innerHTML=seats();
        if(before!==cls().key){ vehicle(cls().hero,"",false); setCap(`${cls().name} · ${T.labels.upToSeats(cls().max)}`,cls().hero); G&&G.fromTo(el.querySelector("#vn"),{opacity:0,x:-10},{opacity:1,x:0,duration:.5}); }
        el.querySelector("#vn").textContent=`${cls().name} · ${cls().hero}`; el.querySelector("#vs").textContent=cls().max;
      });
      el.querySelector("#next").onclick=()=>go(1);
    }
  },
  { ok:()=>!!S.comfort, cam:()=>{const c=cls(),car=S.comfort?c.cars[COMFORT.findIndex(x=>x.k===S.comfort)]:c.cars[2];setCap(c.name,car); if(W){const fresh=W.mode()!=="show"; W.toShow("podium",()=>vehicle(car,S.comfort?tierOf(car):"",fresh));}},
    html:()=>{const c=cls();return `${H(T.steps.s4.title)}
      <p class="sub a">${T.steps.s4.subtitle(S.pax, c.name)}</p>
      ${rowsHTML(COMFORT.map((o,i)=>({k:o.k,n:o.n,d:o.d,e:c.cars[i]})),S.comfort,"c")}`;},
    bind(el){const c=cls();let ht;el.querySelectorAll("[data-c]").forEach(b=>{
      const car=c.cars[COMFORT.findIndex(x=>x.k===b.dataset.c)];
      b.onmouseenter=()=>{clearTimeout(ht);ht=later(()=>{vehicle(car,tierOf(car),false);setCap(c.name,car);},140);};
      b.onclick=()=>{S.comfort=b.dataset.c;pick(b);vehicle(car,tierOf(car),false);setCap(c.name,car);auto(1400);};});}
  },
  { ok:()=>!!S.when, cam:()=>{ if(W){const c=cls(),car=c.cars[COMFORT.findIndex(x=>x.k===S.comfort)],fresh=W.mode()!=="show"; W.toShow("car",()=>vehicle(car,tierOf(car),fresh));} },
    html:()=>`${H(T.steps.s5.title)}
      <p class="sub a">${T.steps.s5.subtitle}</p>
      ${rowsHTML(WHEN.map(w=>({k:w,n:w})),S.when,"w")}
      <blockquote class="quote a">“${T.quote.text}”<span class="cap">${T.quote.author}</span></blockquote>`,
    bind(el){el.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>{S.when=b.dataset.w;pick(b);auto(450,runLoading);});}
  }
];
function seats(){const c=cls();return Array.from({length:c.max},(_,i)=>`<i class="${i<S.pax?"on":""}"></i>`).join("");}
function pick(b){b.parentElement.querySelectorAll(".row").forEach(r=>{r.classList.remove("sel");r.setAttribute("aria-pressed","false")});b.classList.add("sel");b.setAttribute("aria-pressed","true");}
let autoT; function auto(ms=500,fn){clearTimeout(autoT);autoT=later(fn||(()=>go(1)),reduce?60:ms);}

const ringPct={v:0};
function progress(n){const pct=Math.round(n/5*100);
  const upd=()=>{ringV.style.strokeDashoffset=107*(1-ringPct.v/100);count.textContent=Math.round(ringPct.v)+" %";};
  if(G) G.to(ringPct,{v:pct,duration:1,ease:"expo.out",onUpdate:upd}); else {ringPct.v=pct;upd();}}
function enter(el){ if(!G) return;
  G.fromTo(el.querySelectorAll(".wi"),{yPercent:110},{yPercent:0,duration:1.1,ease:"expo.out",stagger:.06});
  G.fromTo(el.querySelectorAll(".a"),{y:24,opacity:0},{y:0,opacity:1,duration:.9,ease:"expo.out",stagger:.08,delay:.25});
  G.fromTo(el.querySelectorAll(".row"),{x:-20,opacity:0},{x:0,opacity:1,duration:.8,ease:"expo.out",stagger:.06,delay:.35});}
function leave(dir){stage.querySelectorAll(".step").forEach(o=>{o.style.pointerEvents="none";
  if(!G){o.remove();return;} G.to(o,{opacity:0,x:dir>0?-40:40,duration:.45,ease:"power3.in",onComplete:()=>o.remove()});});}
function render(dir=1){
  clearTimeout(autoT); leave(dir);
  const el=document.createElement("section"); el.className="step"; el.innerHTML=steps[idx].html();
  stage.appendChild(el); steps[idx].bind(el); enter(el); steps[idx].cam();
  back.disabled=idx===0; progress(idx); track("quiz_step_view",{step:idx+1});
}
function refresh(){const el=stage.querySelector(".step:last-child"); el.innerHTML=steps[idx].html(); steps[idx].bind(el);}
function go(d){ if(d>0&&!steps[idx].ok())return; if(d>0)track("quiz_answer",{step:idx+1}); idx=Math.max(0,Math.min(4,idx+d)); render(d); }
back.onclick=()=>{ if(stage.querySelector(".res")){idx=4;back.textContent=T.back;render(-1);return;} go(-1); };

function runLoading(){
  track("quiz_complete"); const q=quote(); progress(5); back.disabled=true; leave(1); projClear();
  setCap(T.loading.matchingDriver,q.route); if(W) W.travel();
  const L=document.createElement("div"); L.className="load";
  L.innerHTML=`
    <div class="load-mid">
      <div class="bigring"><svg viewBox="0 0 100 100"><circle class="tr" cx="50" cy="50" r="48"/><circle class="vl" id="lv" cx="50" cy="50" r="48"/></svg><span id="lp">0 %</span></div>
      <div class="odo"><div class="n">${q.an} → ${q.bn}</div><div class="v"><span id="odo">0</span> KM</div><div class="d">${q.tour?T.loading.roadDesc:T.loading.doorToDoorDesc}</div></div>
    </div>
    <ul class="status">
      <li><i></i><span>${T.loading.routeChecked}</span><span class="s">…</span></li>
      <li><i></i><span>${T.loading.vehicleMatched(q.car)}</span><span class="s">…</span></li>
      <li><i></i><span>${T.loading.priceLocked}</span><span class="s">…</span></li></ul>`;
  stage.appendChild(L);
  const lis=L.querySelectorAll(".status li"), o={v:0}, lv=L.querySelector("#lv");
  const set=()=>{const e=o.v;L.querySelector("#odo").textContent=Math.round(q.km*e).toLocaleString(LANG);L.querySelector("#lp").textContent=Math.round(e*100)+" %";lv.style.strokeDashoffset=302*(1-e);
    lis.forEach((li,i)=>{const on=e>[.25,.58,.9][i];if(on&&!li.classList.contains("on")){li.classList.add("on");li.lastElementChild.textContent=T.loading.done;}});};
  if(!G){o.v=1;set();later(()=>{L.remove();showResult(q);},400);return;}
  G.timeline().fromTo(L,{opacity:0},{opacity:1,duration:.5})
    .fromTo(L.querySelectorAll(".load-mid,.status"),{y:24,opacity:0},{y:0,opacity:1,stagger:.1,duration:.8,ease:"expo.out"},.1)
    .to(o,{v:1,duration:3.2,ease:"power2.inOut",onUpdate:set},.3)
    .to(L,{opacity:0,y:-20,duration:.5,ease:"power3.in",onComplete:()=>{L.remove();showResult(q);}},"+=.2");
}

function showResult(q){
  back.disabled=false; back.textContent=T.edit;
  if(W){const fresh=W.mode()!=="show"; W.toShow("result",()=>{W.showCar(q.car,carInfo(q.car,q.comfort)); later(()=>{projTrip(q); W.deckInfo(tripInfo(q));},fresh?1100:500);});}
  setCap(`${q.comfort} · ${q.cname}`,q.car);
  const msg=T.waMsg({
    typeName: TYPES[S.type].n,
    route: q.route,
    pax: S.pax,
    comfort: q.comfort,
    car: q.car,
    when: S.when,
    price: q.price
  });
  const url=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  const el=document.createElement("section"); el.className="step res";
  el.innerHTML=`
    ${H(T.result.title)}
    <div class="price a"><div class="n">${T.result.yourFixedPrice}</div><div class="v">€<span id="pv">0</span></div><div class="d">${T.result.madSub(q.mad.toLocaleString(LANG), q.comfort, q.cname, q.car)}</div></div>
    <dl class="summary a">
      <div><dt>${T.result.trip}</dt><dd>${q.route}</dd></div>
      <div><dt>${T.result.distance}</dt><dd>${q.tour?T.tours.sameDriver(S.days):`${q.km} km · ${hrs(q.km)}`}</dd></div>
      <div><dt>${T.result.travellers}</dt><dd>${S.pax}</dd></div>
      <div><dt>${T.result.when}</dt><dd>${S.when}</dd></div></dl>
    <div class="incl a"><span>${T.result.badgeDeposit}</span><span>${T.result.badgeCancel}</span><span>${T.result.badgeIncluded}</span></div>
    <div class="chat a">
      <div class="chat-h">
        <span class="av"><svg viewBox="10 30 360 180" aria-hidden="true"><path fill="#c9803f" d="M27 169 113 39h27l29 49 78-49h32l-58 91h-24l29-47-66 44-31-52-58 76z M252 129l29-46h64q13 0 19-12t-10-11h-64l13-21h75q36 0 20 31-14 34-59 34h-40l-16 25z M13 206q143-97 445-64-243-12-364 64z"/></svg></span>
        <span class="who"><b>Private Morocco Transfers</b><span class="num">+212 760-426269</span></span>
        <span class="on">${T.result.onlineStatus}</span>
      </div>
      <div class="chat-b"><span class="cap">${T.result.msgAlreadyWritten}</span><div class="bubble" id="bub">${msg.replace(/</g,"&lt;")}<time>${new Date().toTimeString().slice(0,5)} ✓✓</time></div></div>
    </div>
    <div class="foot a">
      <form class="mail" id="mailF" novalidate>
         <div class="mail-h"><span class="cap">${T.result.preferEmail}</span><b>${T.result.getQuoteInbox}</b></div>
        <div class="mail-f">
          <label class="fld" for="mName"><span>${T.result.yourName}</span><input id="mName" name="name" autocomplete="name" placeholder="${T.result.namePlaceholder}"></label>
          <label class="fld" for="mEmail"><span>${T.result.email}</span><input id="mEmail" name="email" type="email" inputmode="email" autocomplete="email" placeholder="${T.result.emailPlaceholder}" required></label>
        </div>
        <label class="chk" for="mOk"><input type="checkbox" id="mOk" name="consent"><span class="box" aria-hidden="true"></span><span>${T.result.consentText}</span></label>
        <button class="btn" id="mSend" type="submit">${T.result.emailBtn}</button>
        <p class="mail-msg" id="mMsg" role="status"></p>
      </form>
      <div class="or"><span>${T.result.or}</span></div>
      <a class="btn cu" id="wa" href="${url}" target="_blank" rel="noopener"><span class="shine"></span>
        <span class="lbl"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" fill="#121418"/><path fill="#c9803f" d="M17.2 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-3.8-3.3c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3z"/></svg>${T.result.waBtn}</span></a>
      <p class="fine">${T.result.finePrint}</p>
      <button class="link" id="redo">${T.result.startAgain}</button></div>`;
  stage.appendChild(el); enter(el);
  const pv=el.querySelector("#pv"), o={v:0};
  if(G){ G.to(o,{v:q.price,duration:1.6,delay:.6,ease:"power3.out",onUpdate:()=>pv.textContent=Math.round(o.v)});
    G.fromTo(el.querySelector("#bub"),{clipPath:"inset(0 0 100% 0)",y:12},{clipPath:"inset(0 0 0% 0)",y:0,duration:1,ease:"expo.out",delay:1.4});
    G.fromTo(el.querySelector(".shine"),{xPercent:-110},{xPercent:110,duration:1,ease:"power2.inOut",delay:2.2}); }
  else pv.textContent=q.price;
  el.querySelector("#wa").addEventListener("click",()=>track("quiz_whatsapp_click",{price:q.price,trip:S.type}));
  bindMail(el,q);
  el.querySelector("#redo").onclick=()=>{back.textContent=T.back;idx=0;render(-1);};
}

/* ---------- pin header + trip bar on scroll ---------- */
(()=>{const app=$("#brief"), tb=$(".topbar"), pj=$("#proj"); let pinned=false, raf=0;
  const setH=()=>app.style.setProperty("--tbh",tb.offsetHeight+"px"); setH(); on(window,"resize",setH);
  const check=()=>{raf=0; const stacked=innerWidth<=1023;
    const y=stacked?(scrollY||document.documentElement.scrollTop):stage.scrollTop;
    const want=y>(stacked?innerHeight*.16:16);
    if(want===pinned) return; pinned=want; app.classList.toggle("pinned",pinned);
    if(stacked&&pj.classList.contains("has")&&G) G.fromTo(pj,{opacity:0},{opacity:1,duration:.4,ease:"power2.out"});};
  const req=()=>{if(!raf)raf=requestAnimationFrame(check);};
  on(window,"scroll",req,{passive:true}); on(stage,"scroll",req,{passive:true});
  on(app,"wheel",(e)=>{
    if(innerWidth>1023&&!e.target.closest("#stage")){
      stage.scrollTop+=e.deltaY;
    }
  },{passive:true});
})();

render(1);

return function destroy() {
  dead = true;
  timers.forEach(clearTimeout); timers.clear();
  observers.forEach(o => o.disconnect());
  listeners.forEach(([t, type, fn, o]) => t.removeEventListener(type, fn, o));
  gsap.killTweensOf(root.querySelectorAll("*"));
  if (W) W.dispose();
  stage.innerHTML = ""; PJ.innerHTML = "";
  root.classList.remove("showmode");
};
}

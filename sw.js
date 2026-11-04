// Guarda o aplicativo no tablet para funcionar sem internet.
// Ao publicar uma mudança, aumente a VERSAO para os tablets baixarem a versão nova.
const VERSAO = "tracado-v26";
// nomes em inglês gravados (a voz do celular nem sempre tem inglês): também ficam guardados para usar sem internet
const NOMES_EN = [..."abcdefghijklmnopqrstuvwxyz", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((k) => `audio/en/${k}.wav`);
const ARQUIVOS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/kamei-flow-logo.png",
  ...NOMES_EN,
  // sons das letras (fonemas); as figuras do jogo ficam guardadas na primeira vez que aparecem
  ..."pbtdcgfvszxjmnlr".split("").map((l) => `audio/fonemas/${l}.wav`),
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // a página: tenta a versão nova na internet (sem a cópia de 10 minutos do navegador) e, sem internet, usa a guardada
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req.url, { cache: "no-cache" })
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSAO).then((c) => c.put("index.html", copia));
          return res;
        })
        .catch(() => caches.match("index.html")),
    );
    return;
  }
  // ícones, fontes e o resto: usa o guardado e, se não tiver, baixa e guarda
  if (url.origin === location.origin || url.host.endsWith("fonts.googleapis.com") || url.host.endsWith("fonts.gstatic.com")) {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok || res.type === "opaque") {
              const copia = res.clone();
              caches.open(VERSAO).then((c) => c.put(req, copia));
            }
            return res;
          }),
      ),
    );
  }
});

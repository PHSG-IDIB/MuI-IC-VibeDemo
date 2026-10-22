/* Versionsschalter: zeigt, wie die beiden Versionen entstanden sind, und wechselt zwischen ihnen. */
(function () {
  const isV1 = /\/v1\//.test(location.pathname);
  const other = isV1 ? '../' : 'v1/';
  const V = [
    {
      n: 'Version 1', t: '≈ 5 Minuten (18:08 – 18:13)', f: '1 Datei, ca. 330 Zeilen', cur: isV1,
      p: ['Demo-Webseite (HTML) zum Thema Blutkreislauf für die Sekundarschule', 'Zielgruppe: Lernende Zyklus 3 (Schweiz)', '4–5 passende interaktive Übungen', 'Kurztest, lokal im Browser gespeichert, als Textdatei herunterladbar', 'Ein wenig Wissensvermittlung, Fokus auf den Übungen', 'Als GitHub Page veröffentlichen'],
      r: '5 Übungen (Zuordnen, Lückentext, Reihenfolge, Herz beschriften, Mythen), 6 Wissenskarten, Test mit 8 Fragen und Download.'
    },
    {
      n: 'Version 2', t: '≈ 25 Minuten (18:15 – 18:40)', f: '1 Datei, ca. 1200 Zeilen', cur: !isV1,
      p: ['«Deutlich mehr und tiefer Inhalt – eine WTF-Seite, man soll kaum glauben, dass das kurz erstellt wurde»', '«Besonders mehr grafische Übungen»', '«Wissen aus Lerntheorien einbauen, damit wir wirklich qualitativ hochwertiges Lernen haben»', '«Ein Schalter, um zwischen Version 1 und 2 umzustellen – mit Anzeige der Bauzeit und der Kernelemente des Prompts»'],
      r: '8 Kapitel, animierter Doppelkreislauf, Puls-Labor, 12 Übungen (davon 3 grafisch neu: Hotspots, Gefässe färben, Blut-Diagramm), Leitner-Lernkarten, Glossar, Test mit 19 Fragen und Konfidenz-Kalibrierung, Vorwissens-Check, Selbsterklärungen, Spacing-Empfehlung, Didaktik-Seite, Dark Mode.'
    }
  ];
  const css = `#vsw{position:fixed;right:14px;bottom:14px;z-index:99;background:#2b2230;color:#fff;border:0;border-radius:999px;padding:10px 16px;font:600 .9rem system-ui,sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3)}
  #vsm{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100;display:none;align-items:center;justify-content:center;padding:16px}
  #vsm.on{display:flex}
  #vsm .box{background:#fff;color:#2b2230;border-radius:16px;max-width:760px;width:100%;max-height:90vh;overflow:auto;padding:20px;font:16px/1.5 system-ui,sans-serif}
  #vsm h2{margin:0 0 6px;color:#9b1c2b}#vsm h3{margin:0 0 4px;font-size:1.05rem}
  #vsm .cols{display:grid;grid-template-columns:1fr 1fr;gap:14px}@media(max-width:600px){#vsm .cols{grid-template-columns:1fr}}
  #vsm .v{border:2px solid #ead9d6;border-radius:12px;padding:12px}#vsm .v.cur{border-color:#c62839;background:#fff7f5}
  #vsm ul{padding-left:18px;margin:6px 0}#vsm li{margin-bottom:4px;font-size:.92rem}
  #vsm .t{font-weight:700;color:#1f8a4c}#vsm .s{font-size:.82rem;color:#6d6275}
  #vsm .b{display:inline-block;margin-top:10px;background:#c62839;color:#fff;border:0;border-radius:10px;padding:9px 16px;font:600 .95rem system-ui,sans-serif;cursor:pointer;text-decoration:none}
  #vsm .b.sec{background:#fff;color:#9b1c2b;border:2px solid #c62839}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const btn = document.createElement('button'); btn.id = 'vsw'; btn.textContent = '⇄ ' + (isV1 ? 'Version 1' : 'Version 2'); document.body.appendChild(btn);
  const m = document.createElement('div'); m.id = 'vsm';
  m.innerHTML = `<div class="box"><h2>Vibe-Coding-Demo: zwei Versionen, zwei Prompts</h2>
    <p class="s">Beide Versionen wurden am 22. Oktober 2026 live mit Claude Code gebaut – ohne Vorlage, ohne Framework, als je eine HTML-Datei. Zeiten gemäss Git-Verlauf.</p>
    <div class="cols">${V.map(v => `<div class="v ${v.cur ? 'cur' : ''}"><h3>${v.n}${v.cur ? ' · du bist hier' : ''}</h3>
      <div class="t">⏱ ${v.t}</div><div class="s">${v.f}</div>
      <p style="margin:8px 0 2px"><b>Kernelemente des Prompts</b></p><ul>${v.p.map(x => `<li>${x}</li>`).join('')}</ul>
      <p style="margin:8px 0 2px"><b>Ergebnis</b></p><p class="s" style="margin:0">${v.r}</p>
      ${v.cur ? '' : `<a class="b" href="${other}">${v.n} öffnen →</a>`}</div>`).join('')}</div>
    <button class="b sec" id="vsx" style="margin-top:14px">Schliessen</button></div>`;
  document.body.appendChild(m);
  btn.onclick = () => m.classList.add('on');
  m.addEventListener('click', e => { if (e.target === m || e.target.id === 'vsx') m.classList.remove('on'); });
})();

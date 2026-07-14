/* learn-html-with-phoebe - live playground engine
   Every .pg block on the page is REAL HTML source, shown in an editable code
   panel next to a sandboxed live preview. Type in the code, the preview
   re-renders as you go. Reset restores the original; Copy grabs your version. */

(function () {
  var BASE_CSS = "body{font-family:-apple-system,'Segoe UI',Roboto,sans-serif;padding:14px 16px;margin:0;color:#222;line-height:1.55;font-size:15px}";

  function buildDoc(src, raw) {
    if (raw || /<html[\s>]/i.test(src)) return src;
    return "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><style>" + BASE_CSS + "</style></head><body>" + src + "</body></html>";
  }

  var blocks = Array.prototype.slice.call(document.querySelectorAll(".pg"));
  blocks.forEach(function (block) {
    var srcEl = block.querySelector(".pg-src");
    if (!srcEl) return;
    var original = srcEl.textContent.replace(/^\n+/, "").replace(/\s+$/, "");
    var caption = block.getAttribute("data-caption") || "";
    var height = parseInt(block.getAttribute("data-height") || "220", 10);
    var raw = block.hasAttribute("data-raw");

    block.innerHTML = "";

    var bar = document.createElement("div");
    bar.className = "pg-bar";
    var dot = document.createElement("span");
    dot.className = "pg-dot";
    var title = document.createElement("span");
    title.className = "pg-title";
    title.textContent = "live html - edit me";
    var spacer = document.createElement("span");
    spacer.className = "pg-spacer";

    var resetBtn = document.createElement("button");
    resetBtn.type = "button"; resetBtn.className = "pg-btn"; resetBtn.textContent = "Reset";
    var copyBtn = document.createElement("button");
    copyBtn.type = "button"; copyBtn.className = "pg-btn"; copyBtn.textContent = "Copy";

    bar.appendChild(dot); bar.appendChild(title); bar.appendChild(spacer);
    bar.appendChild(resetBtn); bar.appendChild(copyBtn);

    var split = document.createElement("div");
    split.className = "pg-split";

    var codeWrap = document.createElement("div");
    codeWrap.className = "pg-code-wrap";
    var codeLabel = document.createElement("span");
    codeLabel.className = "pg-label";
    codeLabel.textContent = "You write";
    var ta = document.createElement("textarea");
    ta.className = "pg-code";
    ta.spellcheck = false;
    ta.setAttribute("aria-label", "Editable HTML source");
    ta.value = original;
    codeWrap.appendChild(codeLabel);
    codeWrap.appendChild(ta);

    var prevWrap = document.createElement("div");
    prevWrap.className = "pg-preview-wrap";
    var prevLabel = document.createElement("span");
    prevLabel.className = "pg-label";
    prevLabel.textContent = "Browser shows";
    var frame = document.createElement("iframe");
    frame.className = "pg-frame";
    frame.setAttribute("sandbox", "allow-same-origin");
    frame.setAttribute("title", caption || "Live HTML preview");
    prevWrap.appendChild(prevLabel);
    prevWrap.appendChild(frame);

    split.appendChild(codeWrap);
    split.appendChild(prevWrap);
    split.style.setProperty("--pg-h", height + "px");

    block.appendChild(bar);
    block.appendChild(split);
    if (caption) {
      var cap = document.createElement("div");
      cap.className = "pg-cap";
      cap.textContent = caption;
      block.appendChild(cap);
    }

    function render() { frame.srcdoc = buildDoc(ta.value, raw); }

    var t = null;
    ta.addEventListener("input", function () {
      block.classList.add("pg-touched");
      clearTimeout(t);
      t = setTimeout(render, 250);
    });
    resetBtn.addEventListener("click", function () {
      ta.value = original;
      block.classList.remove("pg-touched");
      render();
    });
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(ta.value).then(function () {
        copyBtn.textContent = "Copied ✓";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1600);
      });
    });

    render();
    block.classList.add("pg-ok");
  });
})();

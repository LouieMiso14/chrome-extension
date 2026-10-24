(function () {
  "use strict";

  // Prevent duplicate injection
  if (document.getElementById("fc-floating-btn")) return;

  // =========================================================
  // CREATE FLOATING BUTTON
  // =========================================================

  const btn = document.createElement("button");

  btn.id = "fc-floating-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Open chat");
  btn.textContent = "💬";

  document.body.appendChild(btn);


  // =========================================================
  // CREATE CHATBOX
  // =========================================================

  const chatbox = document.createElement("div");

  chatbox.id = "fc-chatbox";
  chatbox.style.display = "none";

  chatbox.innerHTML = `
    <div id="fc-chatbox-header">
      <span>Chat Everywhere</span>

      <button id="fc-chatbox-close" type="button" aria-label="Close chat">
        ✕
      </button>
    </div>

    <div id="fc-tabs">
      <button class="fc-tab active" data-tab="chats" type="button">Chats</button>
      <button class="fc-tab" data-tab="media" type="button">Media</button>
      <button class="fc-tab" data-tab="groups" type="button">Groups</button>
      <button class="fc-tab" data-tab="share" type="button">Share</button>
      <button class="fc-tab" data-tab="tools" type="button">Tools</button>
    </div>


    <div id="fc-tab-content">

      <!-- CHATS -->
      <div id="fc-chats" class="fc-tab-panel active">
        <div id="fc-chatbox-messages"></div>
      </div>


      <!-- MEDIA -->
      <div id="fc-media" class="fc-tab-panel">
        <div class="fc-media-section">

          <div class="fc-media-title">Photos & Videos</div>

          <div class="fc-media-grid" id="fc-media-grid"></div>

          <div class="fc-media-title fc-files-title">Files</div>

          <div class="fc-file-list">

            <div class="fc-file">
              <div class="fc-file-icon">📄</div>
              <div class="fc-file-info">
                <div class="fc-file-name">document.pdf</div>
                <div class="fc-file-size">2.4 MB</div>
              </div>
            </div>

            <div class="fc-file">
              <div class="fc-file-icon">📊</div>
              <div class="fc-file-info">
                <div class="fc-file-name">report.xlsx</div>
                <div class="fc-file-size">856 KB</div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <!-- GROUPS -->
      <div id="fc-groups" class="fc-tab-panel">
        <div class="fc-group-list">

          <button class="fc-group-item" type="button">
            <div class="fc-group-avatar">👥</div>
            <div class="fc-group-info">
              <div class="fc-group-name">Family</div>
              <div class="fc-group-members">5 members</div>
            </div>
          </button>

          <button class="fc-group-item" type="button">
            <div class="fc-group-avatar">👥</div>
            <div class="fc-group-info">
              <div class="fc-group-name">Work Team</div>
              <div class="fc-group-members">8 members</div>
            </div>
          </button>

          <button class="fc-group-item" type="button">
            <div class="fc-group-avatar">👥</div>
            <div class="fc-group-info">
              <div class="fc-group-name">Friends</div>
              <div class="fc-group-members">6 members</div>
            </div>
          </button>

          <button class="fc-group-item" type="button">
            <div class="fc-group-avatar">👥</div>
            <div class="fc-group-info">
              <div class="fc-group-name">Project Team</div>
              <div class="fc-group-members">10 members</div>
            </div>
          </button>

        </div>
      </div>


      <!-- SHARE -->
      <div id="fc-share" class="fc-tab-panel">
        <div class="fc-share-section">

          <div class="fc-share-title">Share something</div>

          <button class="fc-share-option" id="fc-share-text" type="button">
            <span class="fc-share-icon">💬</span>
            <span class="fc-share-info">
              <strong>Text</strong>
              <small>Share a message or text</small>
            </span>
            <span class="fc-share-arrow">›</span>
          </button>

          <button class="fc-share-option" id="fc-share-link" type="button">
            <span class="fc-share-icon">🔗</span>
            <span class="fc-share-info">
              <strong>Link</strong>
              <small>Share a website or URL</small>
            </span>
            <span class="fc-share-arrow">›</span>
          </button>

          <button class="fc-share-option" id="fc-share-image" type="button">
            <span class="fc-share-icon">🖼️</span>
            <span class="fc-share-info">
              <strong>Image</strong>
              <small>Share an image</small>
            </span>
            <span class="fc-share-arrow">›</span>
          </button>

          <button class="fc-share-option" id="fc-share-file" type="button">
            <span class="fc-share-icon">📎</span>
            <span class="fc-share-info">
              <strong>File</strong>
              <small>Share a document or file</small>
            </span>
            <span class="fc-share-arrow">›</span>
          </button>

        </div>
      </div>


      <!-- TOOLS -->
      <div id="fc-tools" class="fc-tab-panel">
        <div class="fc-tools-section">

          <div class="fc-tools-title">Tools</div>

          <button class="fc-tool-option" id="fc-tool-screenshot" type="button">
            <span class="fc-tool-icon">📸</span>
            <span class="fc-tool-info">
              <strong>Screenshot Snippet</strong>
              <small>Select and capture part of your screen</small>
            </span>
            <span class="fc-tool-arrow">›</span>
          </button>

          <button class="fc-tool-option" id="fc-tool-darkmode" type="button" role="switch" aria-checked="false">
            <span class="fc-tool-icon">🌙</span>
            <span class="fc-tool-info">
              <strong>Dark Mode</strong>
              <small id="fc-darkmode-site">This site</small>
            </span>
            <span class="fc-switch" aria-hidden="true"><span class="fc-switch-knob"></span></span>
          </button>

          <button class="fc-tool-option" id="fc-tool-reminders" type="button">
            <span class="fc-tool-icon">📅</span>
            <span class="fc-tool-info">
              <strong>Calendar &amp; Reminders</strong>
              <small id="fc-reminders-count">No upcoming reminders</small>
            </span>
            <span class="fc-tool-arrow">›</span>
          </button>

          <button class="fc-tool-option" id="fc-tool-notes" type="button">
            <span class="fc-tool-icon">📝</span>
            <span class="fc-tool-info">
              <strong>Notes</strong>
              <small id="fc-notes-count">No notes yet</small>
            </span>
            <span class="fc-tool-arrow">›</span>
          </button>

          <button class="fc-tool-option" id="fc-tool-converter" type="button">
            <span class="fc-tool-icon">💱</span>
            <span class="fc-tool-info">
              <strong>Currency &amp; Units</strong>
              <small>Live exchange rates and unit conversion</small>
            </span>
            <span class="fc-tool-arrow">›</span>
          </button>

        </div>
      </div>

    </div><!-- end #fc-tab-content -->


    <!-- INPUT -->
    <div id="fc-chatbox-input-row">

      <input
        id="fc-chatbox-input"
        type="text"
        placeholder="Type a message..."
        autocomplete="off"
      />

      <button id="fc-chatbox-send" type="button">Send</button>

    </div>
  `;

  document.body.appendChild(chatbox);


  // =========================================================
  // ELEMENTS
  // =========================================================

  const messages = chatbox.querySelector("#fc-chatbox-messages");
  const input = chatbox.querySelector("#fc-chatbox-input");
  const sendBtn = chatbox.querySelector("#fc-chatbox-send");
  const closeBtn = chatbox.querySelector("#fc-chatbox-close");
  const tabs = chatbox.querySelectorAll(".fc-tab");
  const panels = chatbox.querySelectorAll(".fc-tab-panel");
  const inputRow = chatbox.querySelector("#fc-chatbox-input-row");
  const screenshotTool = chatbox.querySelector("#fc-tool-screenshot");
  const mediaGrid = chatbox.querySelector("#fc-media-grid");
  const tabContent = chatbox.querySelector("#fc-tab-content");   // used by Calendar + Notes


  // =========================================================
  // STATE
  // =========================================================

  let isOpen = false;

  let screenshotStream = null;
  let screenshotVideo = null;
  let screenshotCanvas = null;
  let screenshotOverlay = null;

  let selection = {
    x: 100,
    y: 100,
    width: 400,
    height: 250
  };


  // =========================================================
  // OPEN / CLOSE
  // =========================================================

  function toggleChat() {

    isOpen = !isOpen;

    chatbox.style.display = isOpen ? "flex" : "none";

    if (isOpen) {
      setTimeout(() => input.focus(), 50);
    }
  }


  function closeChat() {

    isOpen = false;

    chatbox.style.display = "none";
  }


  // =========================================================
  // MESSAGE
  // =========================================================

  function addMessage(text, sender) {

    const msg = document.createElement("div");

    msg.className = `fc-message ${sender}`;

    msg.textContent = text;

    messages.appendChild(msg);

    messages.scrollTop = messages.scrollHeight;
  }


  // =========================================================
  // SEND MESSAGE
  // =========================================================

  function sendMessage() {

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {
      addMessage("...", "bot");
    }, 300);
  }


  // =========================================================
  // YOUTUBE
  // =========================================================

  function getYouTubeVideoId(url) {

    try {

      const u = new URL(url);

      const host = u.hostname
        .toLowerCase()
        .replace(/^(www|m|music)\./, "");

      if (host === "youtube.com") {

        const v = u.searchParams.get("v");

        if (v) return v;

        const m = u.pathname.match(
          /^\/(?:shorts|embed|live)\/([^/?#]+)/
        );

        if (m) return m[1];

      }

      if (host === "youtu.be") {

        return u.pathname.replace(/^\/+/, "").split("/")[0] || null;

      }

    } catch (error) {

      return null;

    }

    return null;
  }


  function addYouTubeVideo(url) {

    const videoId = getYouTubeVideoId(url);

    if (!videoId) {

      addMessage("Dropped link", "user");

      return;
    }


    const videoMessage = document.createElement("div");

    videoMessage.className = "fc-message user fc-video-message";


    const iframe = document.createElement("iframe");

    iframe.src =
      `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;

    iframe.title = "YouTube video";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframe.allowFullscreen = true;

    videoMessage.appendChild(iframe);


    const link = document.createElement("a");

    link.className = "fc-video-link";

    link.textContent = `youtube.com/watch?v=${videoId}`;

    link.href =
      `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;

    link.target = "_blank";

    link.rel = "noopener noreferrer";

    videoMessage.appendChild(link);

    messages.appendChild(videoMessage);

    messages.scrollTop = messages.scrollHeight;
  }


  // =========================================================
  // DRAG AND DROP
  // =========================================================

  chatbox.addEventListener("dragover", (event) => {

    event.preventDefault();

    chatbox.classList.add("fc-drag-over");

  });


  chatbox.addEventListener("dragleave", (event) => {

    if (!chatbox.contains(event.relatedTarget)) {

      chatbox.classList.remove("fc-drag-over");

    }

  });


  chatbox.addEventListener("drop", (event) => {

    event.preventDefault();

    chatbox.classList.remove("fc-drag-over");


    let data = "";

    if (event.dataTransfer) {

      data =
        event.dataTransfer.getData("text/uri-list") ||
        event.dataTransfer.getData("text/plain") ||
        event.dataTransfer.getData("text/html");

    }

    data = data.trim();

    if (!data) return;


    const youtubeId = getYouTubeVideoId(data);

    if (youtubeId) {

      addYouTubeVideo(
        `https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}`
      );

      return;
    }


    const videoIdMatch = data.match(/(?:[?&])video_id=([^&]+)/i);

    if (videoIdMatch) {

      const videoId = decodeURIComponent(videoIdMatch[1]);

      addYouTubeVideo(
        `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`
      );

      return;
    }


    const droppedUrl = data.split("\n")[0].trim();

    try {

      const parsedUrl = new URL(droppedUrl);

      addMessage(parsedUrl.hostname + parsedUrl.pathname, "user");

    } catch (error) {

      addMessage("Dropped link", "user");

    }

  });


  // =========================================================
  // SCREENSHOT TOOL  (ENTIRE SCREEN ONLY)
  // =========================================================

  screenshotTool.addEventListener("click", startScreenshot);


  // Hide / show the chat widget while the snippet overlay is open,
  // so it is never in the way and never appears in the capture.
  function setWidgetHidden(hidden) {

    const value = hidden ? "hidden" : "";

    chatbox.style.visibility = value;

    btn.style.visibility = value;

  }


  async function startScreenshot() {

    if (
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getDisplayMedia
    ) {

      alert("Screenshot capture is not supported by this browser.");

      return;
    }


    stopScreenshot();


    try {

      screenshotStream =
        await navigator.mediaDevices.getDisplayMedia({
          video: {
            cursor: "always",
            displaySurface: "monitor"      // preselect Entire Screen
          },
          audio: false,
          monitorTypeSurfaces: "include",
          selfBrowserSurface: "exclude",
          preferCurrentTab: false
        });


      // The picker still lists Tab / Window, so reject anything
      // other than Entire Screen.
      const track = screenshotStream.getVideoTracks()[0];

      const settings = track ? track.getSettings() : {};

      if (
        settings.displaySurface &&
        settings.displaySurface !== "monitor"
      ) {

        alert("Please choose Entire Screen.");

        stopScreenshot();

        return;
      }


      screenshotVideo = document.createElement("video");

      screenshotVideo.srcObject = screenshotStream;

      screenshotVideo.muted = true;

      screenshotVideo.playsInline = true;

      screenshotVideo.setAttribute("aria-hidden", "true");

      await screenshotVideo.play();

      await waitForVideoDimensions();


      screenshotCanvas = document.createElement("canvas");

      screenshotCanvas.width = screenshotVideo.videoWidth;

      screenshotCanvas.height = screenshotVideo.videoHeight;


      createScreenshotOverlay();


      if (track) {

        track.addEventListener("ended", stopScreenshot, { once: true });

      }

    } catch (error) {

      console.log("Screenshot cancelled:", error);

      stopScreenshot();

    }

  }


  // =========================================================
  // WAIT FOR VIDEO SIZE
  // =========================================================

  function waitForVideoDimensions() {

    return new Promise((resolve) => {

      if (
        screenshotVideo.videoWidth &&
        screenshotVideo.videoHeight
      ) {

        resolve();

        return;
      }

      const check = setInterval(() => {

        if (
          screenshotVideo &&
          screenshotVideo.videoWidth &&
          screenshotVideo.videoHeight
        ) {

          clearInterval(check);

          resolve();

        }

      }, 50);

      setTimeout(() => {

        clearInterval(check);

        resolve();

      }, 3000);

    });

  }


  // =========================================================
  // CREATE SCREENSHOT OVERLAY
  // =========================================================

  function createScreenshotOverlay() {

    setWidgetHidden(true);


    screenshotOverlay = document.createElement("div");

    screenshotOverlay.id = "fc-screenshot-overlay";

    screenshotOverlay.innerHTML = `

      <div id="fc-screenshot-topbar">

        <div id="fc-screenshot-title">
          <span class="fc-screenshot-title-icon">📸</span>
          <span>Screenshot Snippet</span>
        </div>

        <div id="fc-screenshot-actions">

          <button
            id="fc-screenshot-cancel"
            class="fc-screenshot-button secondary"
            type="button"
          >
            Cancel
          </button>

          <button
            id="fc-screenshot-capture"
            class="fc-screenshot-button primary"
            type="button"
          >
            Capture
          </button>

        </div>

      </div>

      <div id="fc-screenshot-instruction">
        Drag to move • Drag the corners or edges to resize
      </div>

      <div id="fc-screenshot-selection">
        <div class="fc-resize-handle nw" data-handle="nw"></div>
        <div class="fc-resize-handle n" data-handle="n"></div>
        <div class="fc-resize-handle ne" data-handle="ne"></div>
        <div class="fc-resize-handle e" data-handle="e"></div>
        <div class="fc-resize-handle se" data-handle="se"></div>
        <div class="fc-resize-handle s" data-handle="s"></div>
        <div class="fc-resize-handle sw" data-handle="sw"></div>
        <div class="fc-resize-handle w" data-handle="w"></div>
      </div>

    `;

    document.body.appendChild(screenshotOverlay);


    const selectionElement =
      screenshotOverlay.querySelector("#fc-screenshot-selection");


    // ---------- initial selection ----------

    const toolbarHeight = 100;

    const initialWidth = Math.min(
      500,
      Math.max(200, window.innerWidth - 80)
    );

    const initialHeight = Math.min(
      300,
      Math.max(150, window.innerHeight - toolbarHeight - 80)
    );

    selection = {
      x: Math.max(0, (window.innerWidth - initialWidth) / 2),
      y: Math.max(toolbarHeight + 20, (window.innerHeight - initialHeight) / 2),
      width: initialWidth,
      height: initialHeight
    };

    constrainSelection();

    updateSelection();


    // ---------- move ----------

    selectionElement.addEventListener("mousedown", startSelectionMove);


    // ---------- resize ----------

    selectionElement
      .querySelectorAll(".fc-resize-handle")
      .forEach((handle) => {
        handle.addEventListener("mousedown", startResize);
      });


    // ---------- cancel / capture ----------

    screenshotOverlay
      .querySelector("#fc-screenshot-cancel")
      .addEventListener("click", stopScreenshot);

    screenshotOverlay
      .querySelector("#fc-screenshot-capture")
      .addEventListener("click", captureScreenshot);


    // ---------- escape ----------

    document.addEventListener("keydown", handleScreenshotEscape);

  }


  function handleScreenshotEscape(event) {

    if (event.key === "Escape" && screenshotOverlay) {

      stopScreenshot();

    }

  }


  // =========================================================
  // UPDATE SELECTION
  // =========================================================

  function updateSelection() {

    if (!screenshotOverlay) return;

    const element =
      screenshotOverlay.querySelector("#fc-screenshot-selection");

    if (!element) return;

    element.style.left = `${selection.x}px`;
    element.style.top = `${selection.y}px`;
    element.style.width = `${selection.width}px`;
    element.style.height = `${selection.height}px`;

  }


  // =========================================================
  // MOVE SELECTION
  // =========================================================

  function startSelectionMove(event) {

    if (event.target.classList.contains("fc-resize-handle")) return;

    event.preventDefault();

    const startX = event.clientX;
    const startY = event.clientY;

    const original = { ...selection };

    function move(moveEvent) {

      selection.x = original.x + moveEvent.clientX - startX;
      selection.y = original.y + moveEvent.clientY - startY;

      constrainSelection();

      updateSelection();

    }

    function stop() {

      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);

    }

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);

  }


  // =========================================================
  // RESIZE SELECTION
  // =========================================================

  function startResize(event) {

    event.preventDefault();
    event.stopPropagation();

    const handle = event.currentTarget.dataset.handle;

    if (!handle) return;

    const startX = event.clientX;
    const startY = event.clientY;

    const original = { ...selection };

    function resize(moveEvent) {

      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      let x = original.x;
      let y = original.y;
      let width = original.width;
      let height = original.height;

      if (handle.includes("w")) {
        x = original.x + dx;
        width = original.width - dx;
      }

      if (handle.includes("e")) {
        width = original.width + dx;
      }

      if (handle.includes("n")) {
        y = original.y + dy;
        height = original.height - dy;
      }

      if (handle.includes("s")) {
        height = original.height + dy;
      }

      const minSize = 50;

      if (width < minSize) {
        if (handle.includes("w")) {
          x = original.x + original.width - minSize;
        }
        width = minSize;
      }

      if (height < minSize) {
        if (handle.includes("n")) {
          y = original.y + original.height - minSize;
        }
        height = minSize;
      }

      selection = { x, y, width, height };

      constrainSelection();

      updateSelection();

    }

    function stop() {

      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stop);

    }

    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stop);

  }


  // =========================================================
  // CONSTRAIN SELECTION
  // =========================================================

  function constrainSelection() {

    const toolbarSpace = 90;
    const minSize = 50;

    selection.width = Math.max(
      minSize,
      Math.min(selection.width, window.innerWidth)
    );

    selection.height = Math.max(
      minSize,
      Math.min(selection.height, window.innerHeight - toolbarSpace)
    );

    if (selection.x < 0) selection.x = 0;

    if (selection.y < toolbarSpace) selection.y = toolbarSpace;

    if (selection.x + selection.width > window.innerWidth) {
      selection.x = window.innerWidth - selection.width;
    }

    if (selection.y + selection.height > window.innerHeight) {
      selection.y = window.innerHeight - selection.height;
    }

    if (selection.x < 0) selection.x = 0;

    if (selection.y < toolbarSpace) selection.y = toolbarSpace;

  }


  // =========================================================
  // CAPTURE SCREENSHOT
  // =========================================================

  async function captureScreenshot() {

    if (!screenshotVideo || !screenshotCanvas || !screenshotOverlay) return;

    try {

      const videoWidth = screenshotVideo.videoWidth;
      const videoHeight = screenshotVideo.videoHeight;

      if (!videoWidth || !videoHeight) {
        throw new Error("Screen dimensions unavailable.");
      }


      // Hide the overlay (chat widget is already hidden) and give the
      // live frame a moment to refresh before grabbing it.
      screenshotOverlay.style.visibility = "hidden";

      await new Promise((r) => setTimeout(r, 150));

      // User may have pressed Escape / stopped sharing during the wait
      if (!screenshotVideo || !screenshotCanvas) return;


      // Entire-screen frame -> map viewport coordinates onto it.
      const scaleX = videoWidth / window.screen.width;
      const scaleY = videoHeight / window.screen.height;

      // Where the page viewport sits on the physical screen
      const borderX = (window.outerWidth - window.innerWidth) / 2;
      const chromeTop =
        window.outerHeight - window.innerHeight - borderX;

      const offsetX = window.screenX + borderX;
      const offsetY = window.screenY + chromeTop;

      const sourceX = Math.max(0, (offsetX + selection.x) * scaleX);
      const sourceY = Math.max(0, (offsetY + selection.y) * scaleY);

      const sourceWidth = Math.min(
        videoWidth - sourceX,
        selection.width * scaleX
      );

      const sourceHeight = Math.min(
        videoHeight - sourceY,
        selection.height * scaleY
      );

      if (sourceWidth <= 0 || sourceHeight <= 0) {
        throw new Error("Invalid screenshot selection.");
      }


      screenshotCanvas.width = Math.round(sourceWidth);
      screenshotCanvas.height = Math.round(sourceHeight);

      const context = screenshotCanvas.getContext("2d");

      context.clearRect(
        0,
        0,
        screenshotCanvas.width,
        screenshotCanvas.height
      );

      context.drawImage(
        screenshotVideo,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        screenshotCanvas.width,
        screenshotCanvas.height
      );

      const imageUrl = screenshotCanvas.toDataURL("image/png");

      addScreenshotToMedia(imageUrl);

      addMessage("📸 Screenshot captured", "user");

      stopScreenshot();   // also restores the chat widget

      switchToTab("media");

    } catch (error) {

      console.error("Screenshot error:", error);

      if (screenshotOverlay) screenshotOverlay.style.visibility = "";

      setWidgetHidden(false);

      alert("Unable to capture screenshot.");

    }

  }


  // =========================================================
  // ADD SCREENSHOT TO MEDIA
  // =========================================================

  function addScreenshotToMedia(imageUrl) {

    const item = document.createElement("div");

    item.className = "fc-media-item fc-screenshot-item";

    const image = document.createElement("img");

    image.src = imageUrl;

    image.alt = "Screenshot";

    item.appendChild(image);

    mediaGrid.prepend(item);

    item.addEventListener("click", () => {
      openImageViewer(imageUrl);
    });

  }


  // =========================================================
  // IMAGE VIEWER
  // =========================================================

  function openImageViewer(imageUrl) {

    const viewer = document.createElement("div");

    viewer.className = "fc-image-viewer";

    const close = document.createElement("button");

    close.className = "fc-image-viewer-close";

    close.type = "button";

    close.setAttribute("aria-label", "Close image");

    close.textContent = "✕";

    const image = document.createElement("img");

    image.src = imageUrl;

    image.alt = "Screenshot preview";

    viewer.appendChild(close);

    viewer.appendChild(image);

    document.body.appendChild(viewer);

    close.addEventListener("click", () => viewer.remove());

    viewer.addEventListener("click", (event) => {

      if (event.target === viewer) viewer.remove();

    });

    function closeWithEscape(event) {

      if (event.key === "Escape") {

        viewer.remove();

        document.removeEventListener("keydown", closeWithEscape);

      }

    }

    document.addEventListener("keydown", closeWithEscape);

  }


  // =========================================================
  // STOP SCREENSHOT
  // =========================================================

  function stopScreenshot() {

    document.removeEventListener("keydown", handleScreenshotEscape);

    if (screenshotStream) {

      screenshotStream.getTracks().forEach((track) => {

        try {
          track.stop();
        } catch (error) {}

      });

    }

    screenshotStream = null;

    if (screenshotVideo) {

      screenshotVideo.pause();

      screenshotVideo.srcObject = null;

    }

    screenshotVideo = null;

    screenshotCanvas = null;

    if (screenshotOverlay) {

      screenshotOverlay.remove();

    }

    screenshotOverlay = null;

    // Always bring the chat widget back
    setWidgetHidden(false);

  }


  // =========================================================
  // TAB SWITCHING
  // =========================================================

  function switchToTab(selectedTab) {

    tabs.forEach((tab) => {

      tab.classList.toggle("active", tab.dataset.tab === selectedTab);

    });

    panels.forEach((panel) => {

      panel.classList.toggle("active", panel.id === `fc-${selectedTab}`);

    });

    // "" lets the stylesheet decide (display: flex) on the Chats tab
    inputRow.style.display = selectedTab === "chats" ? "" : "none";

  }


  tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      switchToTab(tab.dataset.tab);

    });

  });


  // =========================================================
  // CALENDAR & REMINDERS
  // =========================================================

  const REM_KEY = "fc-reminders";
  const remTool = chatbox.querySelector("#fc-tool-reminders");
  const remCount = chatbox.querySelector("#fc-reminders-count");

  function loadReminders() {
    try {
      const list = JSON.parse(localStorage.getItem(REM_KEY));
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  function saveReminders() {
    try {
      localStorage.setItem(REM_KEY, JSON.stringify(reminders));
    } catch (e) {}
  }

  let reminders = loadReminders();
  let selectedDate = new Date();
  let calMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);

  const dayKey = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

  function toLocalInput(d) {
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}` +
           `T${p(d.getHours())}:${p(d.getMinutes())}`;
  }

  // ---------- build the view ----------

  const remView = document.createElement("div");
  remView.id = "fc-reminders-view";
  remView.innerHTML = `
    <div class="fc-rem-top">
      <button id="fc-rem-back" class="fc-rem-icon-btn" type="button" aria-label="Back">‹</button>
      <div class="fc-rem-heading">Calendar &amp; Reminders</div>
    </div>

    <div class="fc-cal">
      <div class="fc-cal-nav">
        <button id="fc-cal-prev" class="fc-rem-icon-btn" type="button" aria-label="Previous month">‹</button>
        <div id="fc-cal-title"></div>
        <button id="fc-cal-next" class="fc-rem-icon-btn" type="button" aria-label="Next month">›</button>
      </div>
      <div id="fc-cal-grid"></div>
    </div>

    <div class="fc-rem-form">
      <input id="fc-rem-text" type="text" placeholder="Remind me to..." autocomplete="off" />
      <input id="fc-rem-time" type="datetime-local" />
      <div class="fc-rem-chips">
        <button type="button" data-add="10">+10 min</button>
        <button type="button" data-add="60">+1 hour</button>
        <button type="button" data-add="tomorrow">Tomorrow 9am</button>
      </div>
      <button id="fc-rem-add" type="button">Add reminder</button>
      <div id="fc-rem-hint"></div>
    </div>

    <div id="fc-rem-day-title"></div>
    <div id="fc-rem-list"></div>
  `;
  tabContent.appendChild(remView);

  const calTitle = remView.querySelector("#fc-cal-title");
  const calGrid = remView.querySelector("#fc-cal-grid");
  const remText = remView.querySelector("#fc-rem-text");
  const remTime = remView.querySelector("#fc-rem-time");
  const remHint = remView.querySelector("#fc-rem-hint");
  const remDayTitle = remView.querySelector("#fc-rem-day-title");
  const remList = remView.querySelector("#fc-rem-list");

  // ---------- rendering ----------

  function renderCalendar() {
    const y = calMonth.getFullYear();
    const m = calMonth.getMonth();

    calTitle.textContent = calMonth.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric"
    });

    const firstWeekday = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const todayKey = dayKey(new Date());
    const selectedKey = dayKey(selectedDate);

    const withReminders = new Set(
      reminders.filter((r) => !r.done).map((r) => dayKey(new Date(r.time)))
    );

    calGrid.innerHTML = "";

    ["S", "M", "T", "W", "T", "F", "S"].forEach((label) => {
      const el = document.createElement("div");
      el.className = "fc-cal-dow";
      el.textContent = label;
      calGrid.appendChild(el);
    });

    for (let i = 0; i < firstWeekday; i++) {
      calGrid.appendChild(document.createElement("div"));
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(y, m, d);
      const key = dayKey(date);

      const dayBtn = document.createElement("button");
      dayBtn.type = "button";
      dayBtn.className = "fc-cal-day";
      dayBtn.textContent = d;

      if (key === todayKey) dayBtn.classList.add("today");
      if (key === selectedKey) dayBtn.classList.add("selected");
      if (withReminders.has(key)) dayBtn.classList.add("has");

      dayBtn.addEventListener("click", () => {
        selectedDate = date;
        syncTimeToSelectedDay();
        renderReminderView();
      });

      calGrid.appendChild(dayBtn);
    }
  }

  function renderReminderList() {
    const key = dayKey(selectedDate);

    remDayTitle.textContent = selectedDate.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric"
    });

    const items = reminders
      .filter((r) => dayKey(new Date(r.time)) === key)
      .sort((a, b) => a.time - b.time);

    remList.innerHTML = "";

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "fc-rem-empty";
      empty.textContent = "No reminders for this day";
      remList.appendChild(empty);
      return;
    }

    items.forEach((r) => {
      const row = document.createElement("div");
      row.className = "fc-rem-item" + (r.done ? " done" : "");

      const check = document.createElement("button");
      check.type = "button";
      check.className = "fc-rem-check";
      check.setAttribute("aria-label", "Mark done");
      check.textContent = r.done ? "✓" : "";
      check.addEventListener("click", () => {
        r.done = !r.done;
        saveReminders();
        renderReminderView();
      });

      const body = document.createElement("div");
      body.className = "fc-rem-body";

      const title = document.createElement("div");
      title.className = "fc-rem-title";
      title.textContent = r.text;

      const when = document.createElement("div");
      when.className = "fc-rem-when";
      when.textContent = new Date(r.time).toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit"
      });

      body.appendChild(title);
      body.appendChild(when);

      const del = document.createElement("button");
      del.type = "button";
      del.className = "fc-rem-del";
      del.setAttribute("aria-label", "Delete reminder");
      del.textContent = "✕";
      del.addEventListener("click", () => {
        reminders = reminders.filter((x) => x.id !== r.id);
        saveReminders();
        renderReminderView();
      });

      row.appendChild(check);
      row.appendChild(body);
      row.appendChild(del);
      remList.appendChild(row);
    });
  }

  function updateReminderCount() {
    const upcoming = reminders.filter((r) => !r.done && r.time > Date.now()).length;

    remCount.textContent = upcoming
      ? `${upcoming} upcoming reminder${upcoming > 1 ? "s" : ""}`
      : "No upcoming reminders";
  }

  function renderReminderView() {
    renderCalendar();
    renderReminderList();
    updateReminderCount();
  }

  // ---------- time input helpers ----------

  function syncTimeToSelectedDay() {
    const current = new Date(remTime.value);
    const base = isNaN(current) ? new Date(Date.now() + 30 * 60000) : current;

    const next = new Date(selectedDate);
    next.setHours(base.getHours(), base.getMinutes(), 0, 0);

    remTime.value = toLocalInput(next);
  }

  remView.querySelectorAll(".fc-rem-chips button").forEach((chip) => {
    chip.addEventListener("click", () => {
      const type = chip.dataset.add;
      let d;

      if (type === "tomorrow") {
        d = new Date();
        d.setDate(d.getDate() + 1);
        d.setHours(9, 0, 0, 0);
      } else {
        d = new Date(Date.now() + Number(type) * 60000);
      }

      remTime.value = toLocalInput(d);
      selectedDate = new Date(d);
      calMonth = new Date(d.getFullYear(), d.getMonth(), 1);
      renderReminderView();
    });
  });

  // ---------- add reminder ----------

  function addReminder() {
    const text = remText.value.trim();
    const time = new Date(remTime.value).getTime();

    remHint.textContent = "";

    if (!text) {
      remHint.textContent = "Type what to be reminded about.";
      remText.focus();
      return;
    }

    if (isNaN(time)) {
      remHint.textContent = "Pick a date and time.";
      return;
    }

    if (time <= Date.now()) {
      remHint.textContent = "Pick a time in the future.";
      return;
    }

    // Ask once for desktop notifications (this click is a user gesture)
    if ("Notification" in window && Notification.permission === "default") {
      try { Notification.requestPermission(); } catch (e) {}
    }

    reminders.push({
      id: Date.now() + Math.random(),
      text,
      time,
      done: false,
      notified: false
    });

    saveReminders();

    remText.value = "";
    selectedDate = new Date(time);
    calMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);

    renderReminderView();
  }

  remView.querySelector("#fc-rem-add").addEventListener("click", addReminder);

  remText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addReminder();
    }
  });

  // ---------- month navigation / open / close ----------

  remView.querySelector("#fc-cal-prev").addEventListener("click", () => {
    calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  remView.querySelector("#fc-cal-next").addEventListener("click", () => {
    calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  function openRemindersView() {
    selectedDate = new Date();
    calMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    remTime.value = toLocalInput(new Date(Date.now() + 30 * 60000));
    remHint.textContent = "";
    renderReminderView();
    remView.classList.add("open");
  }

  function closeRemindersView() {
    remView.classList.remove("open");
  }

  remTool.addEventListener("click", openRemindersView);
  remView.querySelector("#fc-rem-back").addEventListener("click", closeRemindersView);

  // leaving the Tools tab or closing the chat closes the view
  tabs.forEach((tab) => tab.addEventListener("click", closeRemindersView));
  closeBtn.addEventListener("click", closeRemindersView);

  // ---------- firing reminders ----------

  function checkReminders() {
    // re-read so changes made in another tab are respected
    reminders = loadReminders();

    const now = Date.now();
    let changed = false;

    reminders.forEach((r) => {
      if (r.done || r.notified || r.time > now) return;

      r.notified = true;
      changed = true;

      addMessage(`⏰ Reminder: ${r.text}`, "bot");

      btn.classList.add("fc-badge");

      if ("Notification" in window && Notification.permission === "granted") {
        try { new Notification("Reminder", { body: r.text }); } catch (e) {}
      }
    });

    if (changed) {
      saveReminders();
      if (remView.classList.contains("open")) renderReminderView();
    }

    updateReminderCount();
  }

  btn.addEventListener("click", () => btn.classList.remove("fc-badge"));

  setInterval(checkReminders, 15000);
  checkReminders();


  // =========================================================
  // NOTES / SCRATCHPAD
  // =========================================================

  const NOTES_KEY = "fc-notes";
  const notesTool = chatbox.querySelector("#fc-tool-notes");
  const notesCountLabel = chatbox.querySelector("#fc-notes-count");

  function loadNotes() {
    try {
      const list = JSON.parse(localStorage.getItem(NOTES_KEY));
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  function saveNotes() {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    } catch (e) {}
  }

  let notes = loadNotes();
  let activeNoteId = null;
  let notesSaveTimer = null;

  // ---------- build the view ----------

  const notesView = document.createElement("div");
  notesView.id = "fc-notes-view";
  notesView.innerHTML = `
    <div id="fc-notes-list-screen">
      <div class="fc-rem-top">
        <button id="fc-notes-back" class="fc-rem-icon-btn" type="button" aria-label="Back">‹</button>
        <div class="fc-rem-heading">Notes</div>
        <button id="fc-notes-new" type="button">+ New</button>
      </div>

      <input id="fc-notes-search" type="text" placeholder="Search notes..." autocomplete="off" />

      <div id="fc-notes-list"></div>
    </div>

    <div id="fc-notes-editor-screen">
      <div class="fc-rem-top">
        <button id="fc-note-back" class="fc-rem-icon-btn" type="button" aria-label="Back to notes">‹</button>
        <div class="fc-rem-heading">Scratchpad</div>
        <span id="fc-note-status">Saved</span>
      </div>

      <textarea id="fc-note-text" placeholder="Start typing..." spellcheck="true"></textarea>

      <div id="fc-note-footer">
        <span id="fc-note-meta">0 words</span>
        <div>
          <button id="fc-note-copy" type="button">Copy</button>
          <button id="fc-note-send" type="button">Send to chat</button>
          <button id="fc-note-delete" type="button">Delete</button>
        </div>
      </div>
    </div>
  `;
  tabContent.appendChild(notesView);

  const notesListEl = notesView.querySelector("#fc-notes-list");
  const notesSearch = notesView.querySelector("#fc-notes-search");
  const noteText = notesView.querySelector("#fc-note-text");
  const noteStatus = notesView.querySelector("#fc-note-status");
  const noteMeta = notesView.querySelector("#fc-note-meta");

  // ---------- helpers ----------

  function noteTitle(note) {
    const line = note.text.split("\n").find((l) => l.trim());
    if (!line) return "Untitled note";
    return line.trim().slice(0, 60);
  }

  function notePreview(note) {
    const lines = note.text.split("\n").filter((l) => l.trim());
    return (lines[1] || "").trim().slice(0, 90) || "No additional text";
  }

  function formatNoteDate(ts) {
    const d = new Date(ts);
    const sameDay = d.toDateString() === new Date().toDateString();

    return sameDay
      ? d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
      : d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  function countWords(text) {
    const t = text.trim();
    return t ? t.split(/\s+/).length : 0;
  }

  function updateNotesCount() {
    notesCountLabel.textContent = notes.length
      ? `${notes.length} note${notes.length > 1 ? "s" : ""}`
      : "No notes yet";
  }

  // ---------- list ----------

  function renderNotesList() {
    const query = notesSearch.value.trim().toLowerCase();

    const items = notes
      .filter((n) => !query || n.text.toLowerCase().includes(query))
      .sort((a, b) => b.updated - a.updated);

    notesListEl.innerHTML = "";

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "fc-rem-empty";
      empty.textContent = query
        ? "No notes match your search"
        : "Tap + New to write your first note";
      notesListEl.appendChild(empty);
      return;
    }

    items.forEach((note) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "fc-note-card";

      const title = document.createElement("div");
      title.className = "fc-note-card-title";
      title.textContent = noteTitle(note);

      const preview = document.createElement("div");
      preview.className = "fc-note-card-preview";
      preview.textContent = notePreview(note);

      const date = document.createElement("div");
      date.className = "fc-note-card-date";
      date.textContent = formatNoteDate(note.updated);

      card.appendChild(title);
      card.appendChild(preview);
      card.appendChild(date);

      card.addEventListener("click", () => openNoteEditor(note.id));

      notesListEl.appendChild(card);
    });
  }

  // ---------- editor ----------

  function openNoteEditor(id) {
    const note = notes.find((n) => n.id === id);
    if (!note) return;

    activeNoteId = id;
    noteText.value = note.text;
    noteStatus.textContent = "Saved";
    noteMeta.textContent = `${countWords(note.text)} words`;

    notesView.classList.add("editing");

    setTimeout(() => noteText.focus(), 50);
  }

  function flushNoteSave() {
    clearTimeout(notesSaveTimer);

    const note = notes.find((n) => n.id === activeNoteId);
    if (!note) return;

    if (note.text !== noteText.value) {
      note.text = noteText.value;
      note.updated = Date.now();
    }

    saveNotes();
    noteStatus.textContent = "Saved";
  }

  function closeNoteEditor() {
    flushNoteSave();

    // an empty note is thrown away
    const note = notes.find((n) => n.id === activeNoteId);

    if (note && !note.text.trim()) {
      notes = notes.filter((n) => n.id !== note.id);
      saveNotes();
    }

    activeNoteId = null;
    notesView.classList.remove("editing");

    updateNotesCount();
    renderNotesList();
  }

  function createNote() {
    const note = { id: Date.now() + Math.random(), text: "", updated: Date.now() };

    notes.push(note);
    saveNotes();

    openNoteEditor(note.id);
  }

  noteText.addEventListener("input", () => {
    noteStatus.textContent = "Saving...";
    noteMeta.textContent = `${countWords(noteText.value)} words`;

    clearTimeout(notesSaveTimer);
    notesSaveTimer = setTimeout(flushNoteSave, 300);
  });

  // ---------- editor actions ----------

  notesView.querySelector("#fc-note-copy").addEventListener("click", async () => {
    const text = noteText.value;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      noteText.select();
      try { document.execCommand("copy"); } catch (err) {}
    }

    noteStatus.textContent = "Copied";
    setTimeout(() => { noteStatus.textContent = "Saved"; }, 1200);
  });

  notesView.querySelector("#fc-note-send").addEventListener("click", () => {
    const text = noteText.value.trim();
    if (!text) return;

    addMessage(text, "user");

    noteStatus.textContent = "Sent";
    setTimeout(() => { noteStatus.textContent = "Saved"; }, 1200);
  });

  const noteDeleteBtn = notesView.querySelector("#fc-note-delete");
  let deleteArmedTimer = null;

  noteDeleteBtn.addEventListener("click", () => {
    // two-step delete: first click arms, second confirms
    if (!noteDeleteBtn.classList.contains("armed")) {
      noteDeleteBtn.classList.add("armed");
      noteDeleteBtn.textContent = "Sure?";

      deleteArmedTimer = setTimeout(() => {
        noteDeleteBtn.classList.remove("armed");
        noteDeleteBtn.textContent = "Delete";
      }, 2500);

      return;
    }

    clearTimeout(deleteArmedTimer);
    noteDeleteBtn.classList.remove("armed");
    noteDeleteBtn.textContent = "Delete";

    notes = notes.filter((n) => n.id !== activeNoteId);
    saveNotes();

    activeNoteId = null;
    notesView.classList.remove("editing");

    updateNotesCount();
    renderNotesList();
  });

  // ---------- open / close ----------

  function openNotesView() {
    notesSearch.value = "";
    notesView.classList.remove("editing");

    renderNotesList();

    notesView.classList.add("open");
  }

  function closeNotesView() {
    if (notesView.classList.contains("editing")) {
      closeNoteEditor();
    }

    notesView.classList.remove("open");
  }

  notesTool.addEventListener("click", openNotesView);

  notesView.querySelector("#fc-notes-back").addEventListener("click", closeNotesView);
  notesView.querySelector("#fc-note-back").addEventListener("click", closeNoteEditor);
  notesView.querySelector("#fc-notes-new").addEventListener("click", createNote);

  notesSearch.addEventListener("input", renderNotesList);

  // leaving the Tools tab or closing the chat saves and closes the view
  tabs.forEach((tab) => tab.addEventListener("click", closeNotesView));
  closeBtn.addEventListener("click", closeNotesView);

  updateNotesCount();


  // =========================================================
  // CURRENCY & UNIT CONVERTER
  // =========================================================

  const convTool = chatbox.querySelector("#fc-tool-converter");

  // ---- converter data ----

  const CURRENCIES = [
    ["USD", "US Dollar"], ["EUR", "Euro"], ["GBP", "British Pound"],
    ["JPY", "Japanese Yen"], ["PHP", "Philippine Peso"], ["SGD", "Singapore Dollar"],
    ["AUD", "Australian Dollar"], ["CAD", "Canadian Dollar"], ["CNY", "Chinese Yuan"],
    ["HKD", "Hong Kong Dollar"], ["INR", "Indian Rupee"], ["KRW", "South Korean Won"],
    ["IDR", "Indonesian Rupiah"], ["MYR", "Malaysian Ringgit"], ["THB", "Thai Baht"],
    ["VND", "Vietnamese Dong"], ["CHF", "Swiss Franc"], ["NZD", "New Zealand Dollar"],
    ["AED", "UAE Dirham"], ["SAR", "Saudi Riyal"], ["BRL", "Brazilian Real"],
    ["MXN", "Mexican Peso"], ["ZAR", "South African Rand"], ["TRY", "Turkish Lira"],
    ["SEK", "Swedish Krona"], ["NOK", "Norwegian Krone"]
  ];

  // each unit: [symbol, name, factor to the base unit]
  const UNIT_CATEGORIES = {
    length: {
      label: "Length", def: ["km", "mi"],
      units: [
        ["mm", "Millimeter", 0.001], ["cm", "Centimeter", 0.01], ["m", "Meter", 1],
        ["km", "Kilometer", 1000], ["in", "Inch", 0.0254], ["ft", "Foot", 0.3048],
        ["yd", "Yard", 0.9144], ["mi", "Mile", 1609.344]
      ]
    },
    weight: {
      label: "Weight", def: ["kg", "lb"],
      units: [
        ["mg", "Milligram", 0.000001], ["g", "Gram", 0.001], ["kg", "Kilogram", 1],
        ["t", "Metric ton", 1000], ["oz", "Ounce", 0.028349523125],
        ["lb", "Pound", 0.45359237], ["st", "Stone", 6.35029318]
      ]
    },
    temperature: {
      label: "Temperature", def: ["°C", "°F"],
      units: [["°C", "Celsius"], ["°F", "Fahrenheit"], ["K", "Kelvin"]]
    },
    volume: {
      label: "Volume", def: ["L", "gal"],
      units: [
        ["mL", "Milliliter", 0.001], ["L", "Liter", 1],
        ["tsp", "Teaspoon (US)", 0.00492892159375], ["tbsp", "Tablespoon (US)", 0.01478676478125],
        ["fl oz", "Fluid ounce (US)", 0.0295735295625], ["cup", "Cup (US)", 0.2365882365],
        ["pt", "Pint (US)", 0.473176473], ["qt", "Quart (US)", 0.946352946],
        ["gal", "Gallon (US)", 3.785411784]
      ]
    },
    area: {
      label: "Area", def: ["m²", "ft²"],
      units: [
        ["cm²", "Square centimeter", 0.0001], ["m²", "Square meter", 1],
        ["ha", "Hectare", 10000], ["km²", "Square kilometer", 1000000],
        ["in²", "Square inch", 0.00064516], ["ft²", "Square foot", 0.09290304],
        ["ac", "Acre", 4046.8564224], ["mi²", "Square mile", 2589988.110336]
      ]
    },
    speed: {
      label: "Speed", def: ["km/h", "mph"],
      units: [
        ["m/s", "Meters per second", 1], ["km/h", "Kilometers per hour", 1 / 3.6],
        ["mph", "Miles per hour", 0.44704], ["kn", "Knot", 1852 / 3600],
        ["ft/s", "Feet per second", 0.3048]
      ]
    },
    data: {
      label: "Data", def: ["GB", "MB"],
      units: [
        ["B", "Byte", 1], ["KB", "Kilobyte (1000)", 1e3], ["MB", "Megabyte (1000²)", 1e6],
        ["GB", "Gigabyte (1000³)", 1e9], ["TB", "Terabyte (1000⁴)", 1e12],
        ["KiB", "Kibibyte (1024)", 1024], ["MiB", "Mebibyte (1024²)", 1048576],
        ["GiB", "Gibibyte (1024³)", 1073741824]
      ]
    }
  };

  function convertUnit(cat, value, from, to) {
    if (cat === "temperature") {
      let c;

      if (from === "°C") c = value;
      else if (from === "°F") c = (value - 32) * 5 / 9;
      else c = value - 273.15;

      if (to === "°C") return c;
      if (to === "°F") return c * 9 / 5 + 32;
      return c + 273.15;
    }

    const units = UNIT_CATEGORIES[cat].units;
    const f = units.find((u) => u[0] === from)[2];
    const t = units.find((u) => u[0] === to)[2];

    return value * f / t;
  }

  function fmtNumber(n, money) {
    if (!isFinite(n)) return "—";

    const abs = Math.abs(n);

    if (abs !== 0 && (abs >= 1e15 || abs < 1e-6)) return n.toExponential(4);

    if (money) {
      return n.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: abs >= 1 ? 2 : 6
      });
    }

    return n.toLocaleString(undefined, { maximumSignificantDigits: 8 });
  }

  function plainNumber(n, money) {
    if (!isFinite(n)) return "";
    if (money) return n.toFixed(Math.abs(n) >= 1 ? 2 : 6);
    return String(Number(n.toPrecision(10)));
  }

  // ---- converter data end ----

  const CONV_KEY = "fc-converter";
  const RATES_KEY = "fc-rates";
  const RATES_TTL = 6 * 60 * 60 * 1000;   // reuse saved rates for 6 hours

  function loadJSON(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v === null || v === undefined ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  let conv = Object.assign(
    { mode: "currency", from: "USD", to: "EUR", cat: "length", uFrom: "km", uTo: "mi", amount: "1" },
    loadJSON(CONV_KEY, {})
  );

  if (!UNIT_CATEGORIES[conv.cat]) conv.cat = "length";

  let ratesData = loadJSON(RATES_KEY, null);   // { time, rates }
  let lastResult = null;

  // ---------- build the view ----------

  const convView = document.createElement("div");
  convView.id = "fc-converter-view";
  convView.innerHTML = `
    <div class="fc-rem-top">
      <button id="fc-conv-back" class="fc-rem-icon-btn" type="button" aria-label="Back">‹</button>
      <div class="fc-rem-heading">Converter</div>
    </div>

    <div id="fc-conv-modes">
      <button type="button" data-mode="currency">💱 Currency</button>
      <button type="button" data-mode="units">📐 Units</button>
    </div>

    <div id="fc-conv-cat-row">
      <select id="fc-conv-cat" aria-label="Unit type"></select>
    </div>

    <div class="fc-conv-card">
      <label class="fc-conv-label" for="fc-conv-amount">Amount</label>
      <input id="fc-conv-amount" type="number" inputmode="decimal" step="any" value="1" />

      <div class="fc-conv-pair">
        <select id="fc-conv-from" aria-label="Convert from"></select>
        <button id="fc-conv-swap" type="button" aria-label="Swap">⇄</button>
        <select id="fc-conv-to" aria-label="Convert to"></select>
      </div>
    </div>

    <div id="fc-conv-result">
      <div id="fc-conv-expr"></div>
      <div id="fc-conv-big">—</div>
      <div id="fc-conv-rate"></div>
    </div>

    <div class="fc-conv-actions">
      <button id="fc-conv-copy" type="button">Copy result</button>
      <button id="fc-conv-send" type="button">Send to chat</button>
    </div>

    <div id="fc-conv-status-row">
      <span id="fc-conv-status"></span>
      <button id="fc-conv-refresh" type="button">↻ Refresh</button>
    </div>
  `;
  tabContent.appendChild(convView);

  const convModeBtns = convView.querySelectorAll("#fc-conv-modes button");
  const convCatRow = convView.querySelector("#fc-conv-cat-row");
  const convCat = convView.querySelector("#fc-conv-cat");
  const convAmount = convView.querySelector("#fc-conv-amount");
  const convFrom = convView.querySelector("#fc-conv-from");
  const convTo = convView.querySelector("#fc-conv-to");
  const convExpr = convView.querySelector("#fc-conv-expr");
  const convBig = convView.querySelector("#fc-conv-big");
  const convRate = convView.querySelector("#fc-conv-rate");
  const convStatusRow = convView.querySelector("#fc-conv-status-row");
  const convStatus = convView.querySelector("#fc-conv-status");

  // category dropdown is filled once
  Object.keys(UNIT_CATEGORIES).forEach((key) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = UNIT_CATEGORIES[key].label;
    convCat.appendChild(opt);
  });

  // ---------- helpers ----------

  function fillSelect(select, items, selected) {
    select.innerHTML = "";

    items.forEach(([value, label]) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = label;
      select.appendChild(opt);
    });

    select.value = selected;
  }

  function timeLabel(ts) {
    return new Date(ts).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function currentPair() {
    return conv.mode === "currency"
      ? [conv.from, conv.to]
      : [conv.uFrom, conv.uTo];
  }

  // ---------- live exchange rates ----------

  async function refreshRates(force) {
    const fresh = ratesData && Date.now() - ratesData.time < RATES_TTL;

    if (fresh && !force) {
      convStatus.textContent = `Rates updated ${timeLabel(ratesData.time)}`;
      computeConversion();
      return;
    }

    convStatus.textContent = "Updating rates…";

    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");

      if (!res.ok) throw new Error("bad response");

      const data = await res.json();

      if (data.result !== "success" || !data.rates) throw new Error("bad data");

      ratesData = { time: Date.now(), rates: data.rates };
      saveJSON(RATES_KEY, ratesData);

      convStatus.textContent = `Rates updated ${timeLabel(ratesData.time)}`;
    } catch (e) {
      convStatus.textContent = ratesData
        ? `Offline — using saved rates from ${timeLabel(ratesData.time)}`
        : "Couldn't load rates. Check your connection.";
    }

    computeConversion();
  }

  // ---------- compute + render ----------

  function computeConversion() {
    const amount = parseFloat(convAmount.value);
    const isCur = conv.mode === "currency";
    const [from, to] = currentPair();

    lastResult = null;
    convExpr.textContent = "";
    convRate.textContent = "";

    if (isNaN(amount)) {
      convBig.textContent = "—";
      return;
    }

    let value;
    let unitRate;

    if (isCur) {
      const rates = ratesData && ratesData.rates;

      if (!rates || !rates[from] || !rates[to]) {
        convBig.textContent = rates ? "Rate not available" : "Rates unavailable";
        return;
      }

      value = amount / rates[from] * rates[to];
      unitRate = 1 / rates[from] * rates[to];
    } else {
      value = convertUnit(conv.cat, amount, from, to);
      unitRate = convertUnit(conv.cat, 1, from, to);
    }

    const amountText = fmtNumber(amount, isCur);
    const resultText = fmtNumber(value, isCur);

    convExpr.textContent = `${amountText} ${from} =`;
    convBig.textContent = `${resultText} ${to}`;
    convRate.textContent = `1 ${from} = ${fmtNumber(unitRate, false)} ${to}`;

    lastResult = {
      send: `${amountText} ${from} = ${resultText} ${to}`,
      plain: `${plainNumber(value, isCur)} ${to}`
    };
  }

  function renderConverter() {
    const isCur = conv.mode === "currency";

    convModeBtns.forEach((b) => {
      b.classList.toggle("active", b.dataset.mode === conv.mode);
    });

    convCatRow.style.display = isCur ? "none" : "";
    convStatusRow.style.display = isCur ? "" : "none";

    convAmount.value = conv.amount;

    if (isCur) {
      const items = CURRENCIES.map(([code, name]) => [code, `${code} — ${name}`]);

      fillSelect(convFrom, items, conv.from);
      fillSelect(convTo, items, conv.to);
    } else {
      const items = UNIT_CATEGORIES[conv.cat].units.map(
        (u) => [u[0], `${u[1]} (${u[0]})`]
      );

      convCat.value = conv.cat;

      fillSelect(convFrom, items, conv.uFrom);
      fillSelect(convTo, items, conv.uTo);
    }

    computeConversion();
  }

  function saveConv() {
    saveJSON(CONV_KEY, conv);
  }

  // ---------- events ----------

  convModeBtns.forEach((b) => {
    b.addEventListener("click", () => {
      conv.mode = b.dataset.mode;
      saveConv();
      renderConverter();

      if (conv.mode === "currency") refreshRates(false);
    });
  });

  convCat.addEventListener("change", () => {
    conv.cat = convCat.value;
    conv.uFrom = UNIT_CATEGORIES[conv.cat].def[0];
    conv.uTo = UNIT_CATEGORIES[conv.cat].def[1];
    saveConv();
    renderConverter();
  });

  convAmount.addEventListener("input", () => {
    conv.amount = convAmount.value;
    saveConv();
    computeConversion();
  });

  convFrom.addEventListener("change", () => {
    if (conv.mode === "currency") conv.from = convFrom.value;
    else conv.uFrom = convFrom.value;

    saveConv();
    computeConversion();
  });

  convTo.addEventListener("change", () => {
    if (conv.mode === "currency") conv.to = convTo.value;
    else conv.uTo = convTo.value;

    saveConv();
    computeConversion();
  });

  convView.querySelector("#fc-conv-swap").addEventListener("click", () => {
    if (conv.mode === "currency") {
      [conv.from, conv.to] = [conv.to, conv.from];
      convFrom.value = conv.from;
      convTo.value = conv.to;
    } else {
      [conv.uFrom, conv.uTo] = [conv.uTo, conv.uFrom];
      convFrom.value = conv.uFrom;
      convTo.value = conv.uTo;
    }

    saveConv();
    computeConversion();
  });

  convView.querySelector("#fc-conv-refresh").addEventListener("click", () => {
    refreshRates(true);
  });

  const convCopyBtn = convView.querySelector("#fc-conv-copy");

  convCopyBtn.addEventListener("click", async () => {
    if (!lastResult) return;

    try {
      await navigator.clipboard.writeText(lastResult.plain);
    } catch (e) {
      const tmp = document.createElement("textarea");
      tmp.value = lastResult.plain;
      tmp.style.position = "fixed";
      tmp.style.opacity = "0";
      chatbox.appendChild(tmp);
      tmp.select();
      try { document.execCommand("copy"); } catch (err) {}
      tmp.remove();
    }

    convCopyBtn.textContent = "Copied ✓";
    setTimeout(() => { convCopyBtn.textContent = "Copy result"; }, 1200);
  });

  convView.querySelector("#fc-conv-send").addEventListener("click", () => {
    if (!lastResult) return;

    addMessage(lastResult.send, "user");
  });

  // ---------- open / close ----------

  function openConverterView() {
    renderConverter();
    convView.classList.add("open");

    if (conv.mode === "currency") refreshRates(false);

    setTimeout(() => convAmount.focus(), 280);
  }

  function closeConverterView() {
    convView.classList.remove("open");
  }

  convTool.addEventListener("click", openConverterView);
  convView.querySelector("#fc-conv-back").addEventListener("click", closeConverterView);

  // leaving the Tools tab or closing the chat closes the view
  tabs.forEach((tab) => tab.addEventListener("click", closeConverterView));
  closeBtn.addEventListener("click", closeConverterView);


  // =========================================================
  // DARK MODE (PER SITE, CHATBOX ONLY)
  // =========================================================

  const darkModeTool = chatbox.querySelector("#fc-tool-darkmode");
  const darkModeSiteLabel = chatbox.querySelector("#fc-darkmode-site");
  const DARK_KEY = "fc-darkmode-sites";
  const siteKey = location.hostname || "local";

  function loadDarkSites() {
    try {
      return JSON.parse(localStorage.getItem(DARK_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveDarkSites(map) {
    try {
      localStorage.setItem(DARK_KEY, JSON.stringify(map));
    } catch (e) {}
  }

  function applyDarkMode(on) {
    chatbox.classList.toggle("fc-dark", on);   // chatbox only, not the page
    darkModeTool.classList.toggle("on", on);
    darkModeTool.setAttribute("aria-checked", String(on));
    darkModeSiteLabel.textContent =
      `${siteKey} — ${on ? "Dark" : "Light"}`;
  }

  darkModeTool.addEventListener("click", () => {
    const sites = loadDarkSites();
    const next = !sites[siteKey];
    if (next) sites[siteKey] = true;
    else delete sites[siteKey];
    saveDarkSites(sites);
    applyDarkMode(next);
  });

  // Restore saved state for this site on load
  applyDarkMode(!!loadDarkSites()[siteKey]);


  // =========================================================
  // EVENTS
  // =========================================================

  btn.addEventListener("click", toggleChat);

  closeBtn.addEventListener("click", closeChat);

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  });


  // =========================================================
  // INITIAL MESSAGE
  // =========================================================

  addMessage("Welcome! How can I help?", "bot");

})();
// ---------------------------------------------------------------------------
// Add your Lego builds here. For each project:
//   title:        name of the build
//   description:  what it is / how it works (shown in the pop-up)
//   youtubeId:    the ID from the YouTube URL, e.g. https://youtu.be/XXXXXXXXXXX
//                 -> youtubeId: "XXXXXXXXXXX"
//                 Leave as null if the video isn't uploaded yet.
//   tags:         a few short labels, e.g. ["Technic", "Mechanism"]
// ---------------------------------------------------------------------------
const PROJECTS = [
  {
    title: "Sample Build #1: Working Crane",
    description:
      "Replace this with a real description of how the crane's gears and pulley system let it lift and rotate. Explain the trickiest part you solved!",
    youtubeId: null,
    tags: ["Technic", "Mechanism"],
  },
  {
    title: "Sample Build #2: Mini Castle",
    description:
      "Replace this with a description of your castle build — the design choices, favorite pieces used, and any hidden details.",
    youtubeId: null,
    tags: ["Castle", "Creative"],
  },
  {
    title: "Sample Build #3: Robot Arm",
    description:
      "Replace this with an explanation of how the robot arm moves, what inspired the idea, and what you'd improve next time.",
    youtubeId: null,
    tags: ["Robotics", "Idea"],
  },
];

// Set this to your channel URL so the "Visit My Channel" button works.
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/";

function youtubeThumbnailUrl(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";

  PROJECTS.forEach((project, index) => {
    const card = document.createElement("button");
    card.className = "project-card";
    card.type = "button";
    card.setAttribute("aria-haspopup", "dialog");

    const thumb = document.createElement("div");
    if (project.youtubeId) {
      thumb.className = "card-thumb";
      thumb.innerHTML = `
        <img src="${youtubeThumbnailUrl(project.youtubeId)}" alt="${project.title} thumbnail" loading="lazy">
        <div class="play-badge"><span>▶</span></div>
      `;
    } else {
      thumb.className = "card-thumb is-placeholder";
      thumb.innerHTML = `<div class="placeholder-brick">🧱</div><div>Video coming soon</div>`;
    }

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="card-tags">
        ${(project.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    `;

    card.append(thumb, body);
    card.addEventListener("click", () => openModal(index));
    grid.appendChild(card);
  });
}

function openModal(index) {
  const project = PROJECTS[index];
  const modal = document.getElementById("video-modal");
  const slot = document.getElementById("modal-video-slot");

  if (project.youtubeId) {
    slot.className = "modal-video-slot";
    slot.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0"
        title="${project.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  } else {
    slot.className = "modal-video-slot is-placeholder";
    slot.innerHTML = `<div>🧱 Video coming soon!</div>`;
  }

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("video-modal");
  const slot = document.getElementById("modal-video-slot");
  modal.hidden = true;
  slot.innerHTML = ""; // stop video playback
  document.body.style.overflow = "";
}

function initModal() {
  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function initYoutubeLink() {
  const link = document.getElementById("youtube-channel-link");
  link.href = YOUTUBE_CHANNEL_URL;
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  initModal();
  initYoutubeLink();
});

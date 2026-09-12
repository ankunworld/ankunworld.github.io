# ankunworld.github.io

Ankun's Lego World — a site showcasing Ankun's Lego builds and ideas, each explained in a YouTube video.

Live at: https://ankunworld.github.io (once pushed to `main` on GitHub, Pages publishes automatically — no build step needed).

## Editing content

All builds are listed in [js/main.js](js/main.js) in the `PROJECTS` array at the top of the file. For each build, fill in:

- `title` — name of the build
- `description` — how it works / how it was designed
- `youtubeId` — the ID from the video URL (e.g. `https://youtu.be/XXXXXXXXXXX` → `"XXXXXXXXXXX"`). Leave `null` until the video is up.
- `tags` — a few short labels shown on the card

Also update `YOUTUBE_CHANNEL_URL` near the top of the same file to link to the real channel.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000

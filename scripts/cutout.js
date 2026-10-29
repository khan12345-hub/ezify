// Remove near-white background from the robot render -> transparent PNG.
// Flood-fill from the image edges so white highlights INSIDE the robot are kept.
const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "images", "asset-3.jpg");
const OUT = path.join(__dirname, "..", "public", "images", "robot.png");

(async () => {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const idx = (x, y) => (y * width + x) * channels;
  const isWhite = (i) => data[i] > 232 && data[i + 1] > 232 && data[i + 2] > 232;

  // BFS flood fill from all border pixels that are white
  const visited = new Uint8Array(width * height);
  const stack = [];
  for (let x = 0; x < width; x++) {
    stack.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    stack.push([0, y], [width - 1, y]);
  }

  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const p = y * width + x;
    if (visited[p]) continue;
    const i = idx(x, y);
    if (!isWhite(i)) continue;
    visited[p] = 1;
    data[i + 3] = 0; // transparent
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  // soft edge: feather semi-white pixels adjacent to removed area
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = y * width + x;
      if (visited[p]) continue;
      const i = idx(x, y);
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (r > 210 && g > 210 && b > 210) {
        // if neighbour is transparent, feather this one
        const neigh = [idx(x + 1, y), idx(x - 1, y), idx(x, y + 1), idx(x, y - 1)];
        if (neigh.some((n) => data[n + 3] === 0)) data[i + 3] = 110;
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(OUT);
  console.log("wrote robot.png", width + "x" + height);
})();

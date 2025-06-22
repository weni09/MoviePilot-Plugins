const PLUGIN_ID = "SeedCleaner";
const ONLY_TORRENT = "only_torrent";
const ALL = "all";
function formatBytes(a, b = 2) {
  if (0 == a) return "0 B";
  var c = 1024, d = b || 2, e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
}

export { ALL as A, ONLY_TORRENT as O, PLUGIN_ID as P, formatBytes as f };

const PLUGIN_ID = "SeedCleaner";
const ONLY_TORRENT = "only_torrent";
const ALL = "all";
function formatBytes(a, b = 2) {
  if (0 == a) return "0 B";
  var c = 1024, d = b || 2, e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
}
const copyPath = async (path) => {
  if (window.isSecureContext && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(path);
      return true;
    } catch (err) {
      console.error("现代剪贴板API复制失败", err);
      return false;
    }
  }
  const textArea = document.createElement("textarea");
  textArea.value = path;
  Object.assign(textArea.style, {
    position: "absolute",
    left: "-9999px",
    top: "-9999px",
    opacity: "0"
  });
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    return true;
  } catch (err) {
    console.error("兼容方案复制失败", err);
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
};

export { ALL as A, ONLY_TORRENT as O, PLUGIN_ID as P, copyPath as c, formatBytes as f };

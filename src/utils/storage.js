const KEY = "hero-io-installed";

export const getInstalled = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

export const isInstalled = (id) => getInstalled().includes(Number(id));

export const installApp = (id) => {
  const installed = getInstalled();
  if (installed.includes(Number(id))) return installed;
  const next = [...installed, Number(id)];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
};

export const uninstallApp = (id) => {
  const next = getInstalled().filter((item) => item !== Number(id));
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
};

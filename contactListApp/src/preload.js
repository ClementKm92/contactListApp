const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("monApi", {
  createContactWindow: () => ipcRenderer.send("new-contact-window"),
});

contextBridge.exposeInMainWorld("store", {
  set: (key, value) => ipcRenderer.send("store-set", key, value),
  get: (key) => ipcRenderer.send("store-get", key),
  deleted: (key) => ipcRenderer.send("store-delete", key),
  onGetReply: (cb) => ipcRenderer.on("store-get-reply", cb),
});

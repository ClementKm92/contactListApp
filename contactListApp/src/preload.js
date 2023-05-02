const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("monApi", {
  createContactWindow: () => ipcRenderer.send("new-contact-window"),
});

import { app, BrowserWindow } from "electron";
import check from "electron-squirrel-startup";
import { dirname, join } from "node:path";
import { env, platform } from "node:process";
import { fileURLToPath } from "node:url";
import { formatISO } from "date-fns";

import { logger } from "./lib/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Forge's Vite plugin constants.
declare const MAIN_WINDOW_VITE_NAME: string;
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (check) {
  app.quit();
}

// Add Chromium flag as workaround for Wayland desktop with NVIDIA GPU.
if (platform === "linux" && env.XDG_SESSION_TYPE === "wayland") {
  logger.silly(`Wayland detected.`);

  app.commandLine.appendSwitch("ozone-platform-hint", "auto");
  app.commandLine.appendSwitch("disable-accelerated-video-decode");
  app.commandLine.appendSwitch("enable-wayland-ime");
}

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  logger.debug(`${app.getName()} v${app.getVersion()} is ready at ${formatISO(new Date())}.`);

  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,

        webPreferences: {
            preload: path.join(__dirname, "preload.cjs"),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    mainWindow.maximize();

    // Hide native menu bar
    mainWindow.setMenuBarVisibility(false);

    // Load React application
    mainWindow.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

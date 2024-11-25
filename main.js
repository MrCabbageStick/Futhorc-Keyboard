const { app, BrowserWindow, globalShortcut } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 250,
        autoHideMenuBar: true,
        resizable: false,
        fullscreenable: false,
    });

    win.loadFile("index.html");
};

app.on("ready", () => {
    globalShortcut.register("Escape", () => { app.quit() })
    createWindow();
});

app.on("window-all-closed", () => {
    app.quit();
})



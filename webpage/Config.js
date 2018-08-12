if (global) {
    global.SMRT = {
        get Common() {
            return require("./Common");
        },
        get Platform() {
            return require("./Platform");
        },
    };
}
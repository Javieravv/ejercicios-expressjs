const myMiddleware2 = (req, res, next) => {
    res.timeMonth = new Date().getMonth();
    next();
}

export default myMiddleware2;
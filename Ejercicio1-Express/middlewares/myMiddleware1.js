const myMiddleware1 = (req, res, next) => {
    const { body, query} = req
    res.timeYear = new Date().getFullYear();
    res.dataBody  = body;
    res.dataQuery = query
    next();
}

export default myMiddleware1;
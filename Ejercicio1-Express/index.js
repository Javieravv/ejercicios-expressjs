import express from 'express';
import myMiddleware1 from './middlewares/myMiddleware1.js';
import myMiddleware2 from './middlewares/myMiddleware2.js';
import routerCountries from './routes/routeCountries.js'
export const app = express();
app.use( express.json())
const PORT = 3000;

app.use('/countries', routerCountries)
app.use([myMiddleware1, myMiddleware2]);


app.get('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'get',
        year: res.timeYear,
        month: res.timeMonth,
        dataBody: res.dataBody,
        dataQuery: res.dataQuery
    })
})

app.post('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'post',
        time: res.timeYear,
        month: res.timeMonth,
    })
})

app.put('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'put',
        time: res.timeYear,
        month: res.timeMonth,
    })
})

app.delete('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'get',
        time: res.timeYear,
        month: res.timeMonth,
    })
})


app.listen( PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`)
})
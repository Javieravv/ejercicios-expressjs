import { Router } from 'express'

const routerMain = Router ()

routerMain.get('/', (req, res) => {
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

routerMain.post('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'post',
        time: res.timeYear,
        month: res.timeMonth,
    })
})

routerMain.put('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'put',
        time: res.timeYear,
        month: res.timeMonth,
    })
})

routerMain.delete('/', (req, res) => {
    res.send({
        status: 'OK',
        message: 'Hemos hecho el servidor...',
        path: 'get',
        time: res.timeYear,
        month: res.timeMonth,
    })
})


export default routerMain;

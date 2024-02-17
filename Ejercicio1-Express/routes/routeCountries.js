import { Router } from 'express'
import countries from '../data/dataCountries.js'

const routerCountries = Router ()

routerCountries.get('/', (req, res) => {
    res.send ({
        message: 'Hemos devuelto los países',
        countries
    })
})

export default routerCountries;

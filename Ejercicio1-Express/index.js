import express from 'express';
import myMiddleware1 from './middlewares/myMiddleware1.js';
import myMiddleware2 from './middlewares/myMiddleware2.js';
import routerCountries from './routes/routeCountries.js'
import routerMain from './routes/routeMain.js';
export const app = express();

app.use( express.json())
const PORT = 3000;

app.use(express.static('public'));
app.use('/countries', routerCountries)
app.use('/main', routerMain)
app.use([myMiddleware1, myMiddleware2]);

app.listen( PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`)
})
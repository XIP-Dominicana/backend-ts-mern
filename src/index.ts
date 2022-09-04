import app from './app';
import './db';

app.listen(app.get('PORT'), () => {
    console.info(  `Listening on port ${app.get('PORT')}`);
});
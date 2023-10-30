import { Request, Response } from 'express';


const homePage = (req: Request, res: Response) => {
    res.sendFile('public/html/index.html', { root: __dirname + '/..' });
}

export default homePage;
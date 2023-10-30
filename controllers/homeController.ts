import { Request, Response } from 'express';


const homePage = (req: Request, res: Response) => {
    let username : string | undefined;
    let userId : string | undefined;

    if (req.oidc.isAuthenticated()) {
    userId = req.oidc.user?.sub;
    username = req.oidc.user?.name ?? userId;
    console.log(userId)
    }
    
    if(username === undefined) {
        username = "Guest";
    }

    res.render('index', { username });
}

export default homePage;
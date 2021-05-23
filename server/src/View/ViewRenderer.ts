import { Application, Request, Response } from "express";
import path from "path";
import { VIEW_URL } from "../../configurations/constants";

export default class ViewRenderer {

    private application: Application;

    constructor(application: Application) {
        
        this.application = application;
    
    }

    public initiateView(): void {

        const cb = (req: Request, res: Response) => {

            const relPath: string = "../client/dist/";
            
            res.sendFile(path.join(/*__dirname, */relPath, VIEW_URL));
        
        };
        
        this.application?.get("/*", cb);
    
    }

}
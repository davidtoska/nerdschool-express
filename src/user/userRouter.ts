import * as express from "express";
import { Request, Response } from "express";



const userRouter: express.Router = express.Router();

/**
 * Retrieve all tv-shows
 */
userRouter.get("/", (req: Request, res: Response) => {
    res.send("this is a list off all the users");
})


export default userRouter;
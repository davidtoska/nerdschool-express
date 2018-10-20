import * as express from "express";
import {Request, Response} from "express";
import {
    authorize,
    tokenWithCustomClaims,
    userById,
    verifyIdToken
} from "../middelware/custom-admin";


const userRouter: express.Router = express.Router();

/**
 * Retrieve all users
 */
userRouter.get("/", (req: Request, res: Response) => {
    res.send("this is a list off all the users");
});

userRouter.post("/verify-id-token", verifyIdToken);
userRouter.get("/custom-claim", tokenWithCustomClaims);
userRouter.get("/auth", authorize);
userRouter.get("/:id", userById);


export default userRouter;

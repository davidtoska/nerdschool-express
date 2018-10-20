import {Request, Response} from "express";

let admin = require("firebase-admin");
let serviceAccount = require("../../spor-keyfile.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://spor-185119.firebaseio.com"
});

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
export const authorize = async (req: Request, res: Response, next: any) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        res.status(403).send('Unauthorized by customAdmin');
        return;
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);
        // @ts-ignore
        req.user = decodedIdToken;
        next();
        return;
    } catch (e) {
        res.status(403).send('Unauthorized');
        return;
    }
};

/**
 * Returns a  custom token with custom claims
 * @param req
 * @param res
 * @param next
 */
export const tokenWithCustomClaims = async (req: Request, res: Response, next: any) => {
    // Check in database with: ".read": "auth.token.premiumAccount === true"
    const uuid: string = "some-uuid";
    const additionalClaims = {
        premiumAccount: true
    };
    admin.auth().createCustomToken(uuid, additionalClaims)
        .then((customToken: any) => {
            res.send(customToken);
        })
        .catch((error: any) => {
            res.send(error);
        });
};

export const verifyIdToken = async (req: Request, res: Response, next: any) => {
    const idToken = req.body.token;
    console.log('token: ', idToken);
    admin.auth().verifyIdToken(idToken)
        .then((valid: any) => {
            console.log(valid);
            res.send(valid);
        }).catch((error: any) => {
            res.send(error);
    });
};

/**
 * Returns a  custom token with custom claims
 * @param req
 * @param res
 * @param next
 */
export const userById = async (req: Request, res: Response, next: any) => {
    let id = req.params.id;
    id.toString();
    admin.auth().getUser(id)
        .then((user: any) => {
            res.send(user);
        }).catch((error: any) => {
        res.send(error);
    });
};

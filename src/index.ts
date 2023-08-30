import express, { Application, Request, Response } from 'express';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    private routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send('Welcome home!');
        });
    }
}

const myApp = new App();
const port = 3000;

myApp.app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



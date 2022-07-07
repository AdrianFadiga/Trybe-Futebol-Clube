import * as express from 'express';
import LoginController from '../controller/LoginController';

const router: express.Router = express.Router();

router.post('/', LoginController.Login);

export default router;

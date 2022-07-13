import * as express from 'express';
import LoginController from '../controller/LoginController';
import Middleware from '../middlewares/Middlewares';
import ValidateJWT from '../auth/validateJWT';

const router: express.Router = express.Router();

router.get('/validate', ValidateJWT.validateToken, LoginController.CheckRole);

router.post('/', Middleware.validateLogin, new LoginController().Login);

export default router;

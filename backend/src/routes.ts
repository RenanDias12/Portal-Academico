import { Router } from "express";
import { AcademicCoefficientController } from "./controllers/AcademicCoefficientController";
import { AdministratorsController } from "./controllers/AdministratorsController";
import { AuthController } from "./controllers/AuthController";
import { HistoricController } from "./controllers/HistoricController";
import { StudentController } from "./controllers/StudentController";
import { SubjectController } from "./controllers/SubjectController";
import { TeacherController } from "./controllers/TeacherController";

const routes = Router();

//Controllers
const authController = new AuthController();
const adminController = new AdministratorsController();
const coefficientController = new AcademicCoefficientController();
const historicController = new HistoricController();
const studentController = new StudentController();
const teacherController = new TeacherController();
const subjectController = new SubjectController();

//Login
routes.post("/login/admin", authController.authAdmin);
routes.post("/login/student", authController.authStudent);
routes.post("/login/teacher", authController.authTeacher);

//Rotas abaixo do verify necessitam do token
//routes.use(authController.verifyUser);

//Administrator routes
routes.post("/admin", adminController.create);
routes.get("/admin/:employeeNumber", adminController.getAdmin);
routes.delete("/admin/delete/:employeeNumber", adminController.deleteAdmin);
routes.post("/admin/updatePass", adminController.updatePassword);

//Student routes
routes.post("/student", studentController.create);
routes.get("/student/:matriculationNumber", studentController.getStudent);
routes.post("/student/updatePass", studentController.updatePassword);

//Teacher routes
routes.post("/teacher", teacherController.create);
routes.get("/teacher/:employeeNumber", teacherController.getTeacher);
routes.post("/teacher/updatePass", teacherController.updatePassword);

//Academic Coefficient routes
routes.post("/coefficient", coefficientController.create);
routes.get("/coefficient/:matriculationNumber", coefficientController.getCoefficient);
routes.delete("/coefficient/delete/:matriculationNumber", coefficientController.deleteCoefficient);

//Historic routes
routes.post("/historic", historicController.create);
routes.get("/historic/:matriculationNumber", historicController.getHistoric);

//Subject routes
routes.post("/subject", subjectController.create);
routes.get("/subject/:acronym", subjectController.getSubject);

export { routes };

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Login from './login/login';
import Home from './studentPages/Home/Home';
import ClassSchedule from './studentPages/ClassSchedule/ClassSchedule';
import OpeningHours from './studentPages/OpeningHours/OpeningHours';
import ClassReplacement from './studentPages/ClassReplacement/ClassReplacement';
import TestsCalendar from './studentPages/TestsCalendar/TestsCalendar';
import Historic from './studentPages/Historic/Historic';
import Matriculation from './studentPages/Matriculation/Matriculation';
import AcademicCoefficient from './studentPages/AcademicCoefficient/AcademicCoefficient';
import Grades from './studentPages/Grades/Grades';
import PullDiscipline from './studentPages/PullDiscipline/PullDiscipline';
import Perfil from './studentPages/Perfil/Perfil';
import ClassMaterial from './studentPages/ClassMaterial/ClassMaterial';
import Frequency from './studentPages/Frequency/Frequency';
import Requirements from './studentPages/Requirements/Requirements';

import TeacherHome from './teacherPages/Home/Home';
import TeacherPerfil from './teacherPages/Perfil/Perfil';
import TeacherGrades from './teacherPages/Grades/Grades';
import TeacherFrequency from './teacherPages/Frequency/Frequency';
import TeacherClassMaterial from './teacherPages/ClassMaterial/ClassMaterial';

import Registrations from './employeePages/Registrations/registrations';
import EmployeePerfil from './employeePages/Perfil/Perfil';

import styles from './styles/global.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState({
    student: false,
    teacher: false,
    employee: false,
  });

  const [studentInfo, setStudentInfo] = useState();

  return (
    <Router>
      <Layout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        studentInfo={studentInfo}
      >
        <Routes>
          <Route exact path="/">
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setStudentInfo={setStudentInfo}
            />
          </Route>

          <Route path="/aluno">
            <Home />
          </Route>

          <Route path="/aluno/horarioAula">
            <ClassSchedule />
          </Route>

          <Route path="/aluno/horarioAtendimento">
            <OpeningHours />
          </Route>

          <Route path="/aluno/reposicao">
            <ClassReplacement />
          </Route>

          <Route path="/aluno/provas">
            <TestsCalendar />
          </Route>

          <Route path="/aluno/historico">
            <Historic studentInfo={studentInfo} />
          </Route>

          <Route path="/aluno/matricula">
            <Matriculation />
          </Route>

          <Route path="/aluno/coeficiente">
            <AcademicCoefficient studentInfo={studentInfo} />
          </Route>

          <Route path="/aluno/notas">
            <Grades />
          </Route>

          <Route path="/aluno/materia">
            <PullDiscipline />
          </Route>

          <Route path="/aluno/perfil">
            <Perfil />
          </Route>

          <Route path="/aluno/material">
            <ClassMaterial />
          </Route>

          <Route path="/aluno/frequencia">
            <Frequency />
          </Route>

          <Route path="/aluno/requisitos">
            <Requirements />
          </Route>

          <Route path="/professor">
            <TeacherHome />
          </Route>

          <Route path="/professor/perfil">
            <TeacherPerfil />
          </Route>

          <Route path="/professor/notas">
            <TeacherGrades />
          </Route>

          <Route path="/professor/frequencia">
            <TeacherFrequency />
          </Route>

          <Route path="/professor/material">
            <TeacherClassMaterial />
          </Route>

          <Route path="/funcionario/">
            <Registrations />
          </Route>

          <Route path="/funcionario/perfil">
            <EmployeePerfil />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

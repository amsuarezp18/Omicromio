import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import infoImg from "../../assets/images/icons8-información-64.png";

import PieChartEstadisticas from "../pieChartEstadisticas/PieChartEstadisticas";
import Dropdown from "react-bootstrap/Dropdown";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import { FormattedMessage } from "react-intl";
import "./Estadisticas.css";

export default function Estadisticas() {
  let dataPeriodoButtons = [
    "First term",
    "Second term",
    "Third term",
    "Fourth term",
  ];
  let dataCursoButtons = ["Select a course"];
  let dataMateriaButtons = ["Select a subject"];
  let dataTitles = [
    "Here you can see the percentage of activities that have had their average grade in a certain range.",
    "Here you can see the percentage of activities that have had a certain percentage of submissions.",
    "Here you can see the percentage of the activities that have had a certain percentage of completion in the grade.",
    "Here you can see the percentage of students who have the average grade for the selected subject in a certain range.",
    "Here you can see the percentage of students who have had a certain percentage of submissions of their assigned activities.",
  ];
  let dataParams1 = ["Superior", "High", "Basic", "Low"];
  let dataParams2 = [
    "Complete",
    "More than a half",
    "Less than half",
    "No submissions",
    "No grades",
  ];

  const [periodoTxt, setPeriodoTxt] = useState(dataPeriodoButtons[0]);
  const [periodo, setPeriodo] = useState(1);
  const [cursoTxt, setCursoTxt] = useState(dataCursoButtons[0]);
  const [curso, setCurso] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [materiaTxt, setMateriaTxt] = useState(dataMateriaButtons[0]);
  const [materias, setMaterias] = useState([]);
  const [dataGeneral, setDataGeneral] = useContext(AppContext);
  const [estadisticas, setEstadisticas] = useState("/1");
  const [data, setData] = useState([]);
  const url_prefijo = "/omicron/estadisticas/" + dataGeneral.userId;
  const url_cursos = "/omicron/cursos/teacher/" + dataGeneral.userId;
  const url_materiasPrefijo =
    "/omicron/materias/teacher/" + dataGeneral.userId + "/course";

  let loadingStatistics = "Loading statistics";
  if (navigator.language.startsWith("es")) {
    loadingStatistics = "Cargando estadísticas";
    dataPeriodoButtons = [
      "Primer periodo",
      "Segundo periodo",
      "Tercer periodo",
      "Cuarto periodo",
    ];
    dataTitles = [
      "Aquí puede ver el porcentaje de las actividades que han tenido su nota promedio en cierto rango.",
      "Aquí puede ver el porcentaje de las actividades que han tenido cierto porcentaje de entregas.",
      "Aquí puede ver el porcentaje de las actividades que han tenido cierto porcentaje de completitud en la calificación.",
      "Aquí puede ver el porcentaje de estudiantes que tienen la nota promedio de la materia seleccionada en cierto rango.",
      "Aquí puede ver el porcentaje de estudiantes que han tenido cierto porcentaje de entregas de sus actividades asignadas.",
    ];
    dataParams1 = ["Superior", "Alto", "Básico", "Bajo"];
    dataParams2 = [
      "Completo",
      "Más de la mitad",
      "Menos de la mitad",
      "Sin entregas",
      "Sin calificaciones",
    ];
  }

  useEffect(() => {
    if (!navigator.onLine) {
      if (sessionStorage.getItem("datosStat") === "") {
        setData("Loading...");
      } else {
        setData(JSON.parse(sessionStorage.getItem("datosStat")));
      }
    } else {
      setData([]);
      axios.get(url_prefijo + estadisticas).then((response) => {
        let datos = [];
        response.data.forEach((estadistica) => {
          estadistica.cantidades.forEach((cantidad) => {
            datos.push(cantidad);
          });
        });
        setData(datos);
        sessionStorage.setItem("datosStat", JSON.stringify(datos));
      });
    }
  }, [estadisticas]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (sessionStorage.getItem("cursoStat") === "") {
        setCursos("Loading...");
      } else {
        setCursos(JSON.parse(sessionStorage.getItem("cursoStat")));
      }
    } else {
      axios.get(url_cursos).then((response) => {
        let dataCursos = [];
        response.data.forEach((curso) => {
          dataCursos.push(curso);
        });
        setCursos(dataCursos);
        sessionStorage.setItem("cursoStat", JSON.stringify(dataCursos));
      });
    }
  }, []);

  useEffect(() => {
    if (!navigator.onLine) {
      if (sessionStorage.getItem("matStat") === "") {
        setMaterias("Loading...");
      } else {
        setMaterias(JSON.parse(sessionStorage.getItem("matStat")));
      }
    } else {
      if (curso != null) {
        axios.get(url_materiasPrefijo + "/" + curso).then((response) => {
          let dataMaterias = [];
          response.data.forEach((materia) => {
            dataMaterias.push(materia);
          });
          setMaterias(dataMaterias);
          sessionStorage.setItem("matStat", JSON.stringify(dataMaterias));
        });
      }
    }
  }, [curso]);

  function changePeriod(periodTxt, periodNum) {
    setPeriodo(periodNum);
    setPeriodoTxt(periodTxt);
    setEstadisticas("/" + periodNum);
    setCursoTxt(dataCursoButtons[0]);
    setMaterias([]);
    setMateriaTxt(dataMateriaButtons[0]);
    setCurso(null);
  }

  function changeCourse(course) {
    setCursoTxt(course.name);
    setCurso(course._id);
    setEstadisticas("/" + periodo + "/" + course._id);
    setMateriaTxt(dataMateriaButtons[0]);
  }

  function changeSubject(subject) {
    setMateriaTxt(subject.name);
    setEstadisticas("/" + periodo + "/" + curso + "/" + subject._id);
  }

  return (
    <main>
      <div className="page-content p-2" id="content">
        <button
          id="sidebarCollapseBtn"
          type="button"
          className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
        >
          <i
            className="fa fa-chevron-right mr-2 transformed180Left"
            id="rotateIconMenu"
          ></i>
          <small className="text-uppercase font-weight-bold">Menu</small>
        </button>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home" className="breadcrumb-item-color">
                  <FormattedMessage id="navbar.home" />
                </Link>
              </li>
              <li
                className="breadcrumb-item breadcrumb-item-coloractive"
                aria-current="page"
              >
                <FormattedMessage id="statistics" />
              </li>
            </ol>
          </nav>
        </div>
        <div>
          {data === [] ? (
            <Loading texto={loadingStatistics}></Loading>
          ) : (
            <div>
              <div className="d-flex container-fluid">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    {periodoTxt}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => changePeriod(dataPeriodoButtons[0], 1)}
                    >
                      {dataPeriodoButtons[0]}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => changePeriod(dataPeriodoButtons[1], 2)}
                    >
                      {dataPeriodoButtons[1]}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => changePeriod(dataPeriodoButtons[2], 3)}
                    >
                      {dataPeriodoButtons[2]}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => changePeriod(dataPeriodoButtons[3], 4)}
                    >
                      {dataPeriodoButtons[3]}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mx-3">
                  <Dropdown.Toggle id="dropdown-cursos">
                    {cursoTxt}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {cursos.map((item) => (
                      <Dropdown.Item onClick={() => changeCourse(item)}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-materias">
                    {materiaTxt}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {materias.map((item) => (
                      <Dropdown.Item onClick={() => changeSubject(item)}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="container-fluid">
                <hr />
                <h1 className="txt-muted">
                  <FormattedMessage id="statistics.activities" />
                </h1>
                <hr />
                <div className={!navigator.onLine ? "show-stat" : "hide-stat"}>
                  <h3>
                    <FormattedMessage id="statistics.notAvailable" />
                  </h3>
                </div>
                <div className={!navigator.onLine ? "hide-stat" : "show-stat"}>
                  <div className="row text-center">
                    <div className="col">
                      <span data-toggle="tooltip" title={dataTitles[0]}>
                        <img
                          src={infoImg}
                          alt="info"
                          className="mr-3 icon-width-30px"
                        />
                      </span>
                      <strong>
                        <FormattedMessage id="statistics.average.grade" />
                      </strong>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center"
                        id="pie-actividades-nota"
                      >
                        <PieChartEstadisticas
                          param1={dataParams1[0]}
                          param2={dataParams1[1]}
                          param3={dataParams1[2]}
                          param4={dataParams1[3]}
                          data1={data[0]}
                          data2={data[1]}
                          data3={data[2]}
                          data4={data[3]}
                          nombre={"Nivel"}
                          categoria={"Actividades"}
                        ></PieChartEstadisticas>
                      </div>
                    </div>
                    <div className="col">
                      <span data-toggle="tooltip" title={dataTitles[1]}>
                        <img
                          src={infoImg}
                          alt="info"
                          className="mr-3 icon-width-30px"
                        />
                      </span>
                      <strong>
                        <FormattedMessage id="statistics.submmit.quantity" />
                      </strong>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center"
                        id="pie-actividades-entregados"
                      >
                        <PieChartEstadisticas
                          param1={dataParams2[0]}
                          param2={dataParams2[1]}
                          param3={dataParams2[2]}
                          param4={dataParams2[3]}
                          data1={data[4]}
                          data2={data[5]}
                          data3={data[6]}
                          data4={data[7]}
                          nombre={"Completitud"}
                          categoria={"Actividades calificadas"}
                        ></PieChartEstadisticas>
                      </div>
                    </div>
                    <div className="col">
                      <span data-toggle="tooltip" title={dataTitles[2]}>
                        <img
                          src={infoImg}
                          alt="info"
                          className="mr-3 icon-width-30px"
                        />
                      </span>
                      <strong>
                        <FormattedMessage id="statistics.submmit.quantity.grade" />
                      </strong>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center"
                        id="pie-actividades-calificadas"
                      >
                        <PieChartEstadisticas
                          param1={dataParams2[0]}
                          param2={dataParams2[1]}
                          param3={dataParams2[2]}
                          param4={dataParams2[4]}
                          data1={data[8]}
                          data2={data[9]}
                          data3={data[10]}
                          data4={data[11]}
                          nombre={"Completitud"}
                          categoria={"Actividades calificadas"}
                        ></PieChartEstadisticas>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h2 className="txt-muted">
                    <FormattedMessage id="statistics.students" />
                  </h2>
                  <hr />
                  <div className="row text-center">
                    <div className="col">
                      <span data-toggle="tooltip" title={dataTitles[3]}>
                        <img
                          src={infoImg}
                          alt="info"
                          className="mr-3 icon-width-30px"
                        />
                      </span>
                      <strong>
                        <FormattedMessage id="statistics.average.grade" />
                      </strong>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center"
                        id="pie-actividades-nota"
                      >
                        <PieChartEstadisticas
                          param1={dataParams1[0]}
                          param2={dataParams1[1]}
                          param3={dataParams1[2]}
                          param4={dataParams1[3]}
                          data1={data[12]}
                          data2={data[13]}
                          data3={data[14]}
                          data4={data[15]}
                          nombre={"Nivel"}
                          categoria={"Actividades"}
                        ></PieChartEstadisticas>
                      </div>
                    </div>
                    <div className="col">
                      <span data-toggle="tooltip" title={dataTitles[4]}>
                        <img
                          src={infoImg}
                          alt="info"
                          className="mr-3 icon-width-30px"
                        />
                      </span>
                      <strong>
                        <FormattedMessage id="statistics.submmit.quantity" />
                      </strong>
                      <div
                        className="h-100 d-flex justify-content-center align-items-center"
                        id="pie-actividades-entregados"
                      >
                        <PieChartEstadisticas
                          param1={dataParams2[0]}
                          param2={dataParams2[1]}
                          param3={dataParams2[2]}
                          param4={dataParams2[3]}
                          data1={data[16]}
                          data2={data[17]}
                          data3={data[18]}
                          data4={data[19]}
                          nombre={"Completitud"}
                          categoria={"Actividades calificadas"}
                        ></PieChartEstadisticas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

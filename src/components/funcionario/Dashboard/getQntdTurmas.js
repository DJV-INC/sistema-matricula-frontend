import API from "../../../services/API"
import getGrafcoTurma from "./getGraficoTurma";

export default function getQntdTurmas(){

   let a = getGrafcoTurma()
   
   let data = 0

   console.log(a[0]);

   // for (let i = 0; i < objDisciplinas.length; i++) {
   //       data = data + objDisciplinas[i].value
   //       console.log(objDisciplinas[i].value);
   // }

   console.log(data);
}
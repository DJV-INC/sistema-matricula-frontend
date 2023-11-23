import API from '../../../services/API'

export default function getGraficoAlunos() {
   let data = []

   API.get("alunos").then(res => {

      let alunos = 0

      res.dados.map(item => {
         if (item.statusMatricula === "ATIVA") {
            alunos++
         }
      })

      data.push({
         name: "Alunos",
         cadastrados: res.dados.length,
         matriculados: alunos
      })
   })

   return(data);
}
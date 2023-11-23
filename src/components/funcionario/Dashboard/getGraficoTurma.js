import API from "../../../services/API"

export default function getGrafcoTurma(){
   let data = []

   API.get("disciplinas").then(res => {
      const disciplinas = res.dados
      disciplinas.map(item => {
         API.get("turmas", `id=${item.id}`).then(res => {
            data.push({
               name: item.nome,
               value: res.dados.length
            })
         })
      })
   })

   return data
}
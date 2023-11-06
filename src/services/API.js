const hostPath = "http://localhost:8080/"
const apiPath = "api/v1/"

const baseURL = hostPath + apiPath

function errorHandler(dados, entidade) {
   if (dados.dados.erro === "23505") {
      dados.dados.mensagem = `Não é possível inserir ${entidade}, pois já existe ${entidade} com esses dados. Por favor, revisar dados`
   }

   if (dados.dados.erro === "23503") {
      dados.dados.mensagem = `Não é possível excluir ${entidade}, pois existe turmas atreladas. Tente excluir turmas atreladas e tente novamente`
   }

   return dados;
}


async function get(table, params = false) {
   
   let obj = {}
   
   try {
      const resposta = await fetch(`${baseURL}${table}` + (params ? `?${params}` : ""));

      console.log(`${baseURL}${table}` + (params ? `?${params}` : ""))

      const dados = await resposta.json();
      obj = {
         dados: dados
      }
      
   } catch (error) {
      obj = {
         error: error.message
      }
   }
   return obj
}

async function post(table, body, params = false) {
   let resposta = {}

   try {
      let inserir = await fetch(`${baseURL}${table}` + (params ? `?${params}` : ""), {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body)
      })

      const dados = await inserir.json();

       resposta = {
         dados: dados
       }
   } catch (error) {
      resposta = {
         error: error.message
      }
   }
   return resposta
}

async function patch(table, body) {
   let resposta = {}

   try {
      let atualizar = await fetch(`${baseURL}${table}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body)
      })

      const dados = await atualizar.json();

       resposta = {
         dados: dados
       }
   } catch (error) {
      resposta = {
         error: error.message
      }
   }
   return resposta
}

async function del(table, params = "") {

   let resposta = {}

   try {
      let deletar = await fetch(`${baseURL}${table}/${params}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json"
         },
      })

      const dados = await deletar.json();

       resposta = {
         dados: dados
       }
   } catch (error) {
      resposta = {
         error: error.message
      }
   }
   return resposta
}

export default { get, post, patch, del, errorHandler}
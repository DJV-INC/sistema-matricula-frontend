const hostPath = "https://simus-1697659562484.azurewebsites.net/"
const apiPath = "api/v1/"

const baseURL = hostPath + apiPath


async function get(table, params = false) {
   
   let obj = {}
   
   try {
      const resposta = await fetch(`${baseURL}${table}` + (params ? `?${params}` : ""));

      if (!resposta.ok) {
         throw new Error()
      }

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

async function post(table, body) {
   const response = await fetch(`${baseURL}${table}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
   })

   return response
}

async function patch(table, body) {
   const response = await fetch(`${baseURL}${table}`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
   })

   console.log(`${baseURL}${table}` , body);


   return response
}


async function del(table, params = "") {
   console.log(`${baseURL}${table}/${params}`);
   const res = await fetch(`${baseURL}${table}/${params}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json"
      },
   })

   return res
}

export default { get, post, patch, del}
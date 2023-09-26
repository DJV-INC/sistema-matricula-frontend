
async function get(endpoint) {
   let obj = {}
   
   try {
      const resposta = await fetch(endpoint);

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

async function post(endpoint, body) {
   const response = await fetch(endpoint, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
   })

   return response
}

export default { get, post }
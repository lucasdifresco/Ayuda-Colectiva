import urlWebServices from '../webServices';

export const listarEventos = async function()  {
 // url
 let url = urlWebServices.listEventosValidos;
 var token = localStorage.getItem('x');

 try {
     // Hago llamada al endpoint
     let response =  await fetch(url, {
       method: 'GET',
       mode: 'cors',
       headers: {
         'Accept': 'application/x-www-form-urlencoded',
         'Origin': 'http://localhost:3000/',
         'Content-type': 'application/x-www-form-urlencoded',
         'x-access-token': `${token}`
       }
     });

     let data = await response.json();

     let result = {
         success: (response.status === 200 ? true : false),
         response: data
     }

     return result;
     
   } catch(e) {
     let result = {
         success: false,
         response: e
     };
     console.log("ERROR:");
     console.log(result);
     return result;
   }
}

export const buscarEvento = async function(idEvento)  {
  // url
  let url = urlWebServices.getEvento.replace( /\:id/, idEvento);
 
  try {
      // Hago llamada al endpoint
      let response =  await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Origin': 'http://localhost:3000/',
          'Content-type': 'application/x-www-form-urlencoded'
        }
      });
 
      let data = await response.json();
 
      let result = {
          success: (response.status === 200 ? true : false),
          response: data.result
      }
 
      return result;
      
    } catch(e) {
      let result = {
          success: false,
          response: e
      };
      console.log("ERROR:");
      console.log(result);
      return result;
    }
 }
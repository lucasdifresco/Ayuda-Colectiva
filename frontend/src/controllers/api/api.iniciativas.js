import urlWebServices from '../webServices';

export const listarIniciativas = async function(idEvento) {
 // url
 let url = urlWebServices.listIniciativasPorEvento.replace( /\:evento/, idEvento);

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

export const getIniciativa = async function(idIniciativa) {
    let url = urlWebServices.getDetalleIniciativa.replace( /\:iniciativa/, idIniciativa);

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
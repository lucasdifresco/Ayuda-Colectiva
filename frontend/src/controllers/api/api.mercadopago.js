import urlWebServices from '../webServices';

export const createPreference = async function(preference)  {
    // url
    let url = urlWebServices.createMPPreference;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    
    formData.append('description', preference.description);
    formData.append('price', preference.price);
    formData.append('quantity', preference.quantity);

    try {
        // Hago llamada al endpoint
        let response =  await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Origin': 'http://localhost:3000/',
            'Content-type': 'application/x-www-form-urlencoded'
          },
          body: formData
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

        return result;
      }
}

export const createPlan = async function(plan)  {
  // url
  let url = urlWebServices.createMPPlan;
  // Genero formulario con datos a pasar
  let formData = new URLSearchParams();
  
  formData.append('titulo', plan.titulo);
  formData.append('monto', plan.monto);

  try {
      // Hago llamada al endpoint
      let response =  await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Origin': 'http://localhost:3000/',
          'Content-type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      let data = await response.json();

      let result = {
          success: (response.status === 200 ? true : false),
          response: data
      }
console.log("In api.mercadopago.js: " + result);
      return result;
      
    } catch(e) {
      let result = {
          success: false,
          response: e
      };
      console.log("In api.mercadopago.js error: " + result);
      return result;
    }
}
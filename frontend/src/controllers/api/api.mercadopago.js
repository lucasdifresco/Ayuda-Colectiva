import urlWebServices from '../webServices';

const mp_pk = "TEST-b6d44444-b745-4dce-915b-b47f5410c762";

const mp = new MercadoPago(mp_pk, {
  locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});

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

export const crearBotonDePago = function(preferenceId) {
    // Initialize the checkout
    mp.checkout({
      preference: {
        id: preferenceId
      },
      render: {
        container: '#button-checkout', // Class name where the payment button will be displayed
        label: 'Pagar con MercadoPago', // Change the payment button text (optional)
      }, 
      theme: {
        elementsColor: "#007536",
        headerColor: "#007536"
      }
    });
}
import urlWebServices from '../webServices';

 export const createOrganizacion = async function(organizacion)  {
     console.log(organizacion);
    // url
    let url = urlWebServices.createOrganizacion;
    // Genero formulario con datos a pasar
    let formData = new URLSearchParams();
    formData.append('email', organizacion.email);
    formData.append('nombre', organizacion.nombre);
    formData.append('paginaWeb', organizacion.paginaWeb);
    formData.append('direccion', organizacion.direccion);
    formData.append('provincia', organizacion.provincia);
    formData.append('telefono', organizacion.telefono);
    formData.append('nroPersoneriaJuridica', organizacion.nroPersoneriaJuridica);
    formData.append('organismoPersoneriaJuridica', organizacion.organismoPersoneriaJuridica);
    formData.append('fechaOtorgamientoPersoneriaJuridica', organizacion.fechaOtorgamientoPersoneriaJuridica);
    formData.append('cuit', organizacion.cuit);
   

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
        console.log("ERROR:");
        console.log(result);
        return result;
      }
}
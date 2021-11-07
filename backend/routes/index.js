const usuariosCTLR = require('../controllers/usuarios');
const organizacionesCTLR = require('../controllers/perfilOrganizaciones');
const donantesCTLR = require('../controllers/perfilDonantes');
const administradoresCTLR = require('../controllers/perfilAdministradores');
const eventosCTLR = require('../controllers/eventos');
const iniciativasCTLR = require('../controllers/iniciativas');
const postulacionesCTLR = require('../controllers/postulaciones');
const mercadopagoAPI = require('../apis/mercadopago');

const auth = require('../auth/authorization');

module.exports = (app) => {
  // Usuarios
  app.post('/api/usuarios/crear', usuariosCTLR.crear);
  app.post('/api/usuarios/autenticar', usuariosCTLR.autenticar);
  app.post('/api/usuarios/modificar', auth.administrador, usuariosCTLR.modificar);
  // Organizaciones
  app.post('/api/organizaciones/aprobar', auth.administrador, organizacionesCTLR.aprobar);
  app.get('/api/organizaciones/ver/id/:id', organizacionesCTLR.ver);
  app.get('/api/organizaciones/listar/aprobacion/:aprobacion', organizacionesCTLR.listarPorAprobacion);
  // Donantes
  app.post('/api/donantes/validar', auth.administrador, donantesCTLR.validar);
  app.post('/api/donantes/ver', auth.administrador, donantesCTLR.ver);
  app.post('/api/donantes/listar/aprobacion/:aprobacion', auth.administrador, donantesCTLR.listarPorValidacion);
  // Administradores
  app.post('/api/administradores/ver', auth.administrador, administradoresCTLR.ver);
  // Eventos
  app.post('/api/eventos/crear', auth.administrador, eventosCTLR.crear);
  app.post('/api/eventos/estado', auth.administrador, eventosCTLR.cambiarEstado);
  app.post('/api/eventos/modificar', auth.administrador, eventosCTLR.modificar);
  app.get('/api/eventos/listar', eventosCTLR.listar);
  // Postulaciones
  app.post('/api/postulaciones/crear', postulacionesCTLR.crear);
  app.get('/api/postulaciones/listar', postulacionesCTLR.listar);
  app.get('/api/postulaciones/listar/iniciativa/:iniciativa', postulacionesCTLR.listarPorIniciativa);
  app.get('/api/postulaciones/listar/donante/:donante', postulacionesCTLR.listarPorDonante);
  app.get('/api/postulaciones/listar/fecha/:fecha', postulacionesCTLR.listarPorFecha);
  app.get('/api/postulaciones/listar/inicio/:inicio/fin/:fin', postulacionesCTLR.listarEntreFechas);
  // Iniciativas
  app.post('/api/iniciativas/crear', auth.administrador, iniciativasCTLR.crear);
  app.post('/api/iniciativas/modificar', auth.administrador, iniciativasCTLR.modificar);
  app.post('/api/iniciativas/aprobar', auth.administrador, iniciativasCTLR.aprobar);
  app.get('/api/iniciativas/ver/iniciativa/:iniciativa', iniciativasCTLR.ver);
  app.get('/api/iniciativas/listar', iniciativasCTLR.listar);
  app.get('/api/iniciativas/listar/evento/:evento', iniciativasCTLR.listarPorEvento);
  app.get('/api/iniciativas/listar/organizacion/:organizacion', iniciativasCTLR.listarPorOrganizacion);
  app.get('/api/iniciativas/listar/aprobacion/:aprobacion', iniciativasCTLR.listarPorAprobacion);

  // MercadoPago
  app.post('/api/donaciones/crear', mercadopagoAPI.createPreference);
}


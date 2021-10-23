const usuariosCTLR = require('../controllers/usuarios');
const organizacionesCTLR = require('../controllers/perfilOrganizaciones');
const donantesCTLR = require('../controllers/perfilDonantes');
const administradoresCTLR = require('../controllers/perfilAdministradores');
const eventosCTLR = require('../controllers/eventos');
const iniciativasCTLR = require('../controllers/iniciativas');
const postulacionesCTLR = require('../controllers/postulaciones');

const auth = require('../auth/authorization');

module.exports = (app) => {

  app.post('/api/usuarios/autenticar', usuariosCTLR.autenticar);
  app.post('/api/usuarios/modificar', auth, usuariosCTLR.modificar);

  app.post('/api/organizaciones/crear', organizacionesCTLR.crear);
  app.post('/api/organizaciones/aprobar', auth, organizacionesCTLR.aprobar);
  app.get('/api/organizaciones/ver/id/:id', organizacionesCTLR.ver);
  app.get('/api/organizaciones/listar/aprobacion/:aprobacion', organizacionesCTLR.listarPorAprobacion);

  app.post('/api/donantes/crear', donantesCTLR.crear);
  app.post('/api/donantes/validar', auth, donantesCTLR.validar);
  app.post('/api/donantes/ver', auth, donantesCTLR.ver);
  app.post('/api/donantes/listar/aprobacion/:aprobacion', auth, donantesCTLR.listarPorValidacion);

  app.post('/api/administradores/crear', auth, administradoresCTLR.crear);
  app.post('/api/administradores/ver', auth, administradoresCTLR.ver);

  app.post('/api/eventos/crear', auth, eventosCTLR.crear);
  app.post('/api/eventos/estado', auth, eventosCTLR.cambiarEstado);
  app.post('/api/eventos/modificar', auth, eventosCTLR.modificar);
  app.get('/api/eventos/listar', eventosCTLR.listar);

  app.post('/api/postulaciones/crear', postulacionesCTLR.crear);
  app.get('/api/postulaciones/listar', postulacionesCTLR.listar);
  app.get('/api/postulaciones/listar/iniciativa/:iniciativa', postulacionesCTLR.listarPorIniciativa);
  app.get('/api/postulaciones/listar/donante/:donante', postulacionesCTLR.listarPorDonante);
  app.get('/api/postulaciones/listar/fecha/:fecha', postulacionesCTLR.listarPorFecha);
  app.get('/api/postulaciones/listar/inicio/:inicio/fin/:fin', postulacionesCTLR.listarEntreFechas);

  app.post('/api/iniciativas/crear', auth, iniciativasCTLR.crear);
  app.post('/api/iniciativas/modificar', auth, iniciativasCTLR.modificar);
  app.post('/api/iniciativas/aprobar', auth, iniciativasCTLR.aprobar);
  app.get('/api/iniciativas/ver/iniciativa/:iniciativa', iniciativasCTLR.ver);
  app.get('/api/iniciativas/listar', iniciativasCTLR.listar);
  app.get('/api/iniciativas/listar/evento/:evento', iniciativasCTLR.listarPorEvento);
  app.get('/api/iniciativas/listar/organizacion/:organizacion', iniciativasCTLR.listarPorOrganizacion);
  app.get('/api/iniciativas/listar/aprobacion/:aprobacion', iniciativasCTLR.listarPorAprobacion);

}


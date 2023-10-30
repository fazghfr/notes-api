const {addNoteHandler,
  getAllHandler,
  editNoteByIDHandler,
  getNoteByIDHandler,
  deleteNoteByIDHandler} = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIDHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIDHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIDHandler,
  },
];

module.exports = routes;

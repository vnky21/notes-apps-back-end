const {
    addNoteHandler,
    getAllNotesHandler,
    getNodeByIdHandler,
    editNoteIdHandler,
    deleteNoteByIdHandler
} = require('./handler');

const routes = [{
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,

    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNodeByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;
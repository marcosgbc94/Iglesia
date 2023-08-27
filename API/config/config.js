module.exports = Object.freeze({
    PORT: 3001,
    DATA_FILES: [
        {id: 1, active: true, path: 'physicalhymnals', data: "physicalHymnals.json", type: "get"},
        {id: 2, active: true, path: 'typeshymnals', data: "typesHymnals.json", type: "get"},
        {id: 3, active: true, path: 'settings', data: "settings.json", type: "get"},
        {id: 4, active: true, path: 'settings/insert', data: "settings.json", type: "post"},
        {id: 5, active: true, path: 'songs', data: "songs.json", type: "get"},
        {id: 6, active: true, path: 'songs/update', data: "songs.json", type: "put"},
        {id: 7, active: true, path: 'songs/insert', data: "songs.json", type: "post"},
        {id: 8, active: false, path: 'bible', data: "bible.json", type: "get"}
    ]
});
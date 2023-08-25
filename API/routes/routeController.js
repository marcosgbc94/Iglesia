const express = require("express")
const router = express.Router();
const fs = require('fs');
const { getMaxListeners } = require("process");
const path = require('path');

// Se incluye archivo de configuración
const config = require("../config/config.js");

config.DATA_FILES.forEach((file) => {
    if (file.active) {
        const filePath = path.join(__dirname, '..', 'data', file.data);

        switch (file.type) {
            // Obtener - GET
            case 'get':
                router.get(`/${file.path}`, async (req, res) => {
                    try {
                        const fileContent = await fs.promises.readFile(filePath, 'utf8');
                        const parsedFileContent = JSON.parse(fileContent);
                        res.status(200).json(parsedFileContent);
                    } catch (err) {
                        console.error(err);
                        res.status(500).json({ success: false, msg: 'Error en el servidor' });
                    }
                });
                break;
            // Insertar - POST
            case 'post':
                router.post(`/${file.path}`, (req, res) => {
                    try {
                        const newContent = req.body;
                        if (typeof newContent === 'object' && newContent !== null && Object.keys(newContent).length > 0) {
                            const newContentJSONFormated = JSON.stringify(newContent);
                            fs.writeFileSync(filePath, newContentJSONFormated);
                            res.status(201).send({ success: true, msg: 'Datos guardados correctamente' });
                        } else {
                            res.status(400).send({ success: false, msg: 'Datos inválidos' });
                        }
                    } catch (err) {
                        console.error(err);
                        res.status(500).send({ success: false, msg: 'Error en el servidor' });
                    }
                });
                break;
            // Actualizar - PUT
            case 'put':
                router.put(`/${file.path}/:id`, (req, res) => {
                    try {
                        const newContent = req.body;
                        const id = req.params['id'];

                        if (!newContent || !id) {
                            return res.status(400).json({ success: false, msg: 'Datos no encontrados' });
                        }

                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return res.status(500).json({ success: false, msg: 'Error en el servidor' });
                            }

                            try {
                                let dataJSON = JSON.parse(data);
                                const index = dataJSON.songs.findIndex(item => item.id == id);
                                if (!index && index !== -1) {
                                    dataJSON.songs[index] = newContent;
                                    fs.writeFileSync(filePath, JSON.stringify(dataJSON));
                                    res.status(200).json({ success: true, msg: 'Datos guardados correctamente' });
                                } else {
                                    res.status(404).json({ success: false, msg: `No se encontró ningún elemento` });
                                }
                            } catch (parseErr) {
                                console.error(parseErr);
                                res.status(500).json({ success: false, msg: 'Error en el servidor' });
                            }
                        });
                    } catch (err) {
                        console.error(err);
                        res.status(500).json({ success: false, msg: 'Error en el servidor' });
                    }
                });
                break;
        }
    }
});

module.exports = router;
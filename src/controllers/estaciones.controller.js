const { pool } = require('../config/db')

const getEstacionByID = async (req, res) => {

    try {
        const id = req.params.id;

        //const [rows] = await pool.query('SELECT * FROM stations_brands where id = ?', [id]);
        const [rows] = await pool.query('SELECT sb.id, s.name from stations_brands as sb inner join stations as s on sb.cre_id = s.cre_id where sb.id = ?', [id]);
        if (rows.length < 1) return res.status(404).json({ "message": 'Station not found' });
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ "message": "Something goes wrong" })
    }
}

module.exports = {
    getEstacionByID
}
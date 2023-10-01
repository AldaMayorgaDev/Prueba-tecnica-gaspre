const { pool } = require('../config/db')

const getEstacionByID = async (req, res) => {

    try {
        const id = req.params.id;


        const [rows] = await pool.query('SELECT sb.id, s.name ,sc.distance, p.value, b.name FROM stations_brands AS sb INNER JOIN stations AS s on sb.cre_id = s.cre_id INNER JOIN stations_competitors AS sc on sc.cre_id = s.cre_id INNER JOIN prices AS p on p.cre_id = s.cre_id INNER JOIN brands AS b on b.id = sb.id_brand WHERE sb.id = ?', [id]);
        if (rows.length < 1) return res.status(404).json({ "message": 'Station not found' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ "message": "Something goes wrong" })
    }
}

module.exports = {
    getEstacionByID
}
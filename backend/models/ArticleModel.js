import pool from "../config/db.js";

const ArticalModel = {
  getAllArticals: async () => {
    const req = "SELECT * FROM artical";
    try {
      const [row] = await pool.query(req);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
  getOneArtical: async (id) => {
    const req = "SELECT * FROM artical where id = ?";
    const params = [id];
    try {
      const [row] = await pool.query(req, params);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
  createArtical: async (body) => {
    const req = "INSERT Into artical SET ?";
    const data = [body];
    try {
      const [row] = await pool.query(req, data);
      console.log(row);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
  updateArtical: async (id, body) => {
    const req = "update artical SET ? where id = ?";
    const params = id;
    const data = body;
    try {
      const [row] = await pool.query(req, [data, params]);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
  DeleteArtical: async (id) => {
    const req = "Delete artical where id = ?";
    try {
      const [row, fields] = await pool.query(req, id);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
};

export default ArticalModel;

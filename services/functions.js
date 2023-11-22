const db = require("./db");
const helper = require("../helper");
const config = require("../config");

const api_url = "http://localhost:8000/turma";

async function getAll(page = 1) {
  const total = await db.query(`SELECT COUNT(*) FROM sysdevotacao_turmas`);
  var nRows = total[0]["COUNT(*)"];
  const maxPage = Math.ceil(nRows / config.listPerPage);

  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM sysdevotacao_turmas ORDER BY votos DESC LIMIT ${offset},${config.listPerPage}`
  );

  const next = page == maxPage ? null : api_url + `?page=${parseInt(page) + 1}`;

  const previous = page <= 1 ? null : api_url + `?page=${page - 1}`;

  const results = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    next,
    previous,
    results,
    meta,
  };
}

async function vote(id) {
  const result = await db.query(
    `UPDATE sysdevotacao_turmas 
    SET votos = votos + 1
    WHERE id=${id}`
  );
  let message = "Error in updating data";
  if (result.affectedRows) {
    message = "Data updated successfully";
  }
  return { message };
}

module.exports = {
  getAll,
  vote,
};

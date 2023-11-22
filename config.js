const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "185.28.21.204",
    port: "3306",
    user: "u342035410_festcode",
    password: "AVNS_l-Zjx08MzODmTbZuV1K",
    database: "u342035410_festcode",
    connectTimeout: 60000,
  },
  listPerPage: 10,
};

// const config = {
//   db: {
//     /* don't expose password or any sensitive info, done only for demo */
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "xgdkmomw6",
//     database: "api_votacao",
//     connectTimeout: 60000,
//   },
//   listPerPage: 10,
// };

module.exports = config;

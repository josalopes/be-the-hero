const express = require('express');
/* const mongoose = require('mongoose');
const cors = require('cors'); */
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);



/* app.post('/devs', (req, res) => {
  console.log(req.body);
  return res.json({ message: "Hello OmniStack" });
}) */

// Settings
app.set('port', process.env.PORT || 3333);

//const URI = 'mongodb+srv://josafa:nUzewyj@99@cluster0-4t6vo.mongodb.net/omnistack10?retryWrites=true&w=majority';

/* mongoose.connect(URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
 */

/* const { mongoose } = require('./database');

 */


/* Métodos HTTP: GET, POST, PUT, DELETE
/ Tipos de parâmetros:
/ Query Params: req.query (Filtros, Ordenação, Paginação, ...)
/ Route Params: req.params (Identificar um recurso na alteração ou remoçao)
/ Body: req.body (Dados para a criação ou alteração de um registro)

*/




// Middlewares
//server.use(morgan('dev'));
//server.use(bodyParser.json());
/* app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE, CONNECT');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id');

  res.setHeader(
    'Access-Control-Expose-Headers',
    'x-access-token, x-refresh-token'
  );
  next();
}); 
Melhor vc ir prá casa esperar lá, estou sem poder agora nem pegar no celular.
É porque não vai tudo hoje não;
300 - empréstimo
50 - frutas
65 - celular
150 - pietro
Total: 565

De noite explico como fica o restante

E a conta da CAIXA está podendo receber?

Veio mesmo a calhar, pois nem paguei ao Silas e o aluguel.
O Assis já cobrou o dele.







*/

/* END MIDDLEWARE  */



app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});


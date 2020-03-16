
var express = require('express');
var router = express.Router();

let serverOrderList = []; // our "permanent storage" on the web server

// define a constructor to create objects

var OrderObject = function (pArray){
  this.Array = pArray;
}

let OrderObject1 = [0, 0, 1];

// for testing purposes, its nice to preload some data
serverOrderList.push(OrderObject1);
serverOrderList.push(OrderObject1);
serverOrderList.push(OrderObject1);
serverOrderList.push(OrderObject1);
serverOrderList.push(OrderObject1);


/* POST to addOrder */
router.post('/addOrder', function(req, res) {
  console.log(req.body);
  serverOrderList.push(req.body);
  console.log(serverOrderList);
  //res.sendStatus(200);
  res.status(200).send(JSON.stringify('success'));
});


/* GET orderList. */
router.get('/orderList', function(req, res) {
  res.json(serverOrderList);
 });

 /* DELETE to deleteOrder. */
 router.delete('/deleteOrder/:Index', function(req, res) {
  let Index = req.params.Index;
  console.log('deleting Order at Index: ' + Index);
  serverOrderList.splice(Index,1);   
   res.status(200).send(JSON.stringify('deleted successfully'));
});


//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})



module.exports = router;


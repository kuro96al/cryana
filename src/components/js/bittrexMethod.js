var _ = require('lodash');
var bittrexMethods = (function () {
  /*
  var websocketsclient = bittrex.websockets.subscribe(['BTC-ETH','BTC-SC','BTC-ZEN'], function(data) {
      if (data.M === 'updateExchangeState') {
        data.A.forEach(function(data_for) {
          console.log('Market Update for '+ data_for.MarketName, data_for);
        });
      }
    });
    */
  function sumQuantity(name) {
    var history = require('./../../assets/history/' + name + '.json');
    console.log(name);
      var sell = _.filter(history.data.result, { OrderType: 'SELL' })
      var buy = _.filter(history.data.result, { OrderType: 'BUY' })
      var sellQuantity = _.sumBy(sell, 'Quantity');
      var buyQuantity = _.sumBy(buy, 'Quantity');
      return { sell: sellQuantity, buy: buyQuantity };
  }
  return {
    sumQuantity: sumQuantity
  };
})();
module.exports = bittrexMethods;
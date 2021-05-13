"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _promise = require("babel-runtime/core-js/promise");var _promise2 = _interopRequireDefault(_promise);var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _extends2 = require("babel-runtime/helpers/extends");var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _interfaces = require("../../interfaces");
var _ERC20Contract = require("../ERC20/ERC20Contract");var _ERC20Contract2 = _interopRequireDefault(_ERC20Contract);
var _IContract2 = require("../IContract");var _IContract3 = _interopRequireDefault(_IContract2);
var _lodash = require("lodash");var _lodash2 = _interopRequireDefault(_lodash);
var _Numbers = require("../../utils/Numbers");var _Numbers2 = _interopRequireDefault(_Numbers);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                              * Staking Contract Object
                                                                                                                                                                                              * @class StakingContract
                                                                                                                                                                                              * @param {Boolean} params.mainnet
                                                                                                                                                                                              * @param {Boolean} params.test
                                                                                                                                                                                              * @param {Boolean} params.localtest, ganache local blockchain
                                                                                                                                                                                              * @param {Web3Connection} params.web3Connection ? (opt), created from above params
                                                                                                                                                                                              * @param {Address} tokenAddress
                                                                                                                                                                                              * @param {Address} contractAddress ? (opt)
                                                                                                                                                                                              */var

StakingContract = function (_IContract) {(0, _inherits3.default)(StakingContract, _IContract);
  function StakingContract(_ref) {var tokenAddress = _ref.tokenAddress,params = (0, _objectWithoutProperties3.default)(_ref, ["tokenAddress"]);(0, _classCallCheck3.default)(this, StakingContract);
    try {var _this = (0, _possibleConstructorReturn3.default)(this, (StakingContract.__proto__ || (0, _getPrototypeOf2.default)(StakingContract)).call(this, (0, _extends3.default)({},
      params, { abi: _interfaces.staking })));_initialiseProps.call(_this);
      if (tokenAddress) {
        _this.params.ERC20Contract = new _ERC20Contract2.default({
          web3Connection: _this.web3Connection,
          contractAddress: tokenAddress });

      }

    } catch (err) {
      throw err;
    }return _this;
  }

  /**
     * @function
     * @description Get ERC20 Address of the Contract
     * @returns {Address}
     */(0, _createClass3.default)(StakingContract, [{ key: "erc20", value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                  this.__sendTx(
                  this.params.contract.getContract().methods.erc20(),
                  true));case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function erc20() {return _ref2.apply(this, arguments);}return erc20;}()



    /**
                                                                                                                                                                                                                          * @function
                                                                                                                                                                                                                          * @description Get Token Amount of ERC20 Address
                                                                                                                                                                                                                          * @returns {Address}
                                                                                                                                                                                                                          */ }, { key: "futureLockedTokens",




    /**
                                                                                                                                                                                                                                                              * @function
                                                                                                                                                                                                                                                              * @description Get All Tokens Locked for the APR
                                                                                                                                                                                                                                                              * @returns {Integer}
                                                                                                                                                                                                                                                              */value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var res;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

                  this.__sendTx(
                  this.params.contract.getContract().methods.futureLockedTokens(),
                  true));case 2:res = _context2.sent;return _context2.abrupt("return",

                _Numbers2.default.fromDecimals(res, this.getERC20Contract().getDecimals()));case 4:case "end":return _context2.stop();}}}, _callee2, this);}));function futureLockedTokens() {return _ref3.apply(this, arguments);}return futureLockedTokens;}()


    /**
                                                                                                                                                                                                                                                                  * @function
                                                                                                                                                                                                                                                                  * @description Get All Tokens Available for the Subscription Amount
                                                                                                                                                                                                                                                                  * @returns {Integer}
                                                                                                                                                                                                                                                                  */ }, { key: "availableTokens", value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var res;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (

                  this.__sendTx(
                  this.params.contract.getContract().methods.availableTokens(),
                  true));case 2:res = _context3.sent;return _context3.abrupt("return",

                _Numbers2.default.fromDecimals(res, this.getERC20Contract().getDecimals()));case 4:case "end":return _context3.stop();}}}, _callee3, this);}));function availableTokens() {return _ref4.apply(this, arguments);}return availableTokens;}()


    /**
                                                                                                                                                                                                                                                            * @function
                                                                                                                                                                                                                                                            * @description Get All Tokens Held in Stake at that specific moment
                                                                                                                                                                                                                                                            * @returns {Integer}
                                                                                                                                                                                                                                                            */ }, { key: "heldTokens", value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var res;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (

                  this.__sendTx(
                  this.params.contract.getContract().methods.heldTokens(),
                  true));case 2:res = _context4.sent;return _context4.abrupt("return",

                _Numbers2.default.fromDecimals(res, this.getERC20Contract().getDecimals()));case 4:case "end":return _context4.stop();}}}, _callee4, this);}));function heldTokens() {return _ref5.apply(this, arguments);}return heldTokens;}()


    /**
                                                                                                                                                                                                                                                  * @function
                                                                                                                                                                                                                                                  * @description Get APR Amount based on amount of timestamp, amount and APR of that product
                                                                                                                                                                                                                                                  * @param {Integer} APR
                                                                                                                                                                                                                                                  * @param {Date} startDate
                                                                                                                                                                                                                                                  * @param {Date} endDate
                                                                                                                                                                                                                                                  * @param {Integer} amount Token Amount
                                                                                                                                                                                                                                                  * @returns {Integer}
                                                                                                                                                                                                                                                  */ }, { key: "createProduct",

















    /**
                                                                                                                                                                                                                                                                                 * @function
                                                                                                                                                                                                                                                                                 * @description createProduct
                                                                                                                                                                                                                                                                                 * @param {Date} startDate
                                                                                                                                                                                                                                                                                 * @param {Date} endDate
                                                                                                                                                                                                                                                                                 * @param {Integer} totalMaxAmount
                                                                                                                                                                                                                                                                                 * @param {Integer} individualMinimumAmount
                                                                                                                                                                                                                                                                                 * @param {Integer} APR
                                                                                                                                                                                                                                                                                 * @param {Boolean} lockedUntilFinalization
                                                                                                                                                                                                                                                                                 */value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref7) {var


        startDate = _ref7.startDate,
        endDate = _ref7.endDate,
        totalMaxAmount = _ref7.totalMaxAmount,
        individualMinimumAmount = _ref7.individualMinimumAmount,
        APR = _ref7.APR,
        lockedUntilFinalization = _ref7.lockedUntilFinalization;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (

                  this.__sendTx(
                  this.params.contract.
                  getContract().
                  methods.createProduct(
                  _Numbers2.default.timeToSmartContractTime(startDate),
                  _Numbers2.default.timeToSmartContractTime(endDate),
                  _Numbers2.default.toSmartContractDecimals(
                  totalMaxAmount,
                  this.getERC20Contract().getDecimals()),

                  _Numbers2.default.toSmartContractDecimals(
                  individualMinimumAmount,
                  this.getERC20Contract().getDecimals()),

                  APR,
                  lockedUntilFinalization)));case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}}, _callee5, this);}));function createProduct(_x) {return _ref6.apply(this, arguments);}return createProduct;}()




    /**
                                                                                                                                                                                                                                                                    * @function
                                                                                                                                                                                                                                                                    * @description Get All Available Products
                                                                                                                                                                                                                                                                    * @returns {Array | Integer} ids
                                                                                                                                                                                                                                                                    */






    /**
                                                                                                                                                                                                                                                                        * @function
                                                                                                                                                                                                                                                                        * @description Get Subscription from product
                                                                                                                                                                                                                                                                        * @param {Integer} product_id
                                                                                                                                                                                                                                                                        * @returns {Date} createdAt
                                                                                                                                                                                                                                                                        * @returns {Date} startDate
                                                                                                                                                                                                                                                                        * @returns {Date} endDate
                                                                                                                                                                                                                                                                        * @returns {Integer} totalMaxAmount
                                                                                                                                                                                                                                                                        * @returns {Integer} individualMinimumAmount
                                                                                                                                                                                                                                                                        * @returns {Integer} APR
                                                                                                                                                                                                                                                                        * @returns {Integer} currentAmount
                                                                                                                                                                                                                                                                        * @returns {Boolean} lockedUntilFinalization
                                                                                                                                                                                                                                                                        * @returns {Array | Address} subscribers
                                                                                                                                                                                                                                                                        * @returns {Array | Integer} subscriptionIds
                                                                                                                                                                                                                                                                        */






























    /**
                                                                                                                                                                                                                                                                            * @function
                                                                                                                                                                                                                                                                            * @description Approve ERC20 Allowance for Transfer for Subscribe Product
                                                                                                                                                                                                                                                                            */











    /**
                                                                                                                                                                                                                                                                                * @function
                                                                                                                                                                                                                                                                                * @description Subscribe to a product Staking
                                                                                                                                                                                                                                                                                * @param {Integer} product_id
                                                                                                                                                                                                                                                                                * @param {Integer} amount
                                                                                                                                                                                                                                                                                * @returns {Boolean} Success
                                                                                                                                                                                                                                                                                */

























    /**
                                                                                                                                                                                                                                                                                    * @function
                                                                                                                                                                                                                                                                                    * @description Get Subscription from product
                                                                                                                                                                                                                                                                                    * @param {Integer} product_id
                                                                                                                                                                                                                                                                                    * @param {Integer} subscription_id
                                                                                                                                                                                                                                                                                    * @returns {Integer} _id
                                                                                                                                                                                                                                                                                    * @returns {Integer} productId
                                                                                                                                                                                                                                                                                    * @returns {Date} startDate
                                                                                                                                                                                                                                                                                    * @returns {Date} endDate
                                                                                                                                                                                                                                                                                    * @returns {Address} subscriberAddress
                                                                                                                                                                                                                                                                                    * @returns {Integer} APR
                                                                                                                                                                                                                                                                                    * @returns {Boolean} finalized
                                                                                                                                                                                                                                                                                    */



























    /**
                                                                                                                                                                                                                                                                                        * @function
                                                                                                                                                                                                                                                                                        * @description Withdraw Subscription to a product Staking
                                                                                                                                                                                                                                                                                        * @param {Integer} product_id
                                                                                                                                                                                                                                                                                        * @param {Integer} subscription_id
                                                                                                                                                                                                                                                                                        */








    /**
                                                                                                                                                                                                                                                                                            * @function
                                                                                                                                                                                                                                                                                            * @description Get Subscriptions by Address
                                                                                                                                                                                                                                                                                            * @param {Address} address
                                                                                                                                                                                                                                                                                            * @returns {Array | Integer} subscriptions_ids
                                                                                                                                                                                                                                                                                            */








    /**
                                                                                                                                                                                                                                                                                                * @function
                                                                                                                                                                                                                                                                                                * @description Get All Subscriptions done
                                                                                                                                                                                                                                                                                                * @returns {Array | Subscription} subscriptions
                                                                                                                                                                                                                                                                                                */























    /**
                                                                                                                                                                                                                                                                                                    * @override
                                                                                                                                                                                                                                                                                                    */




















    /**
                                                                                                                                                                                                                                                                                                        * @function
                                                                                                                                                                                                                                                                                                        * @override
                                                                                                                                                                                                                                                                                                        * @description Deploy the Staking Contract
                                                                                                                                                                                                                                                                                                        */ }]);return StakingContract;}(_IContract3.default);var _initialiseProps = function _initialiseProps() {var _this2 = this;this.getTokenAmount = function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref9) {var address = _ref9.address;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return _this2.getERC20Contract().getTokenAmount(address);case 2:return _context6.abrupt("return", _context6.sent);case 3:case "end":return _context6.stop();}}}, _callee6, _this2);}));return function (_x2) {return _ref8.apply(this, arguments);};}();this.getAPRAmount = function () {var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref11) {var APR = _ref11.APR,startDate = _ref11.startDate,endDate = _ref11.endDate,amount = _ref11.amount;var res;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return _this2.__sendTx(_this2.params.contract.getContract().methods.getAPRAmount(APR, _Numbers2.default.timeToSmartContractTime(startDate), _Numbers2.default.timeToSmartContractTime(endDate), _Numbers2.default.toSmartContractDecimals(amount, _this2.getERC20Contract().getDecimals())), true);case 2:res = _context7.sent;return _context7.abrupt("return", _Numbers2.default.fromDecimals(res, _this2.getERC20Contract().getDecimals()));case 4:case "end":return _context7.stop();}}}, _callee7, _this2);}));return function (_x3) {return _ref10.apply(this, arguments);};}();this.getProducts = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return _this2.__sendTx(_this2.params.contract.getContract().methods.getProductIds(), true);case 2:return _context8.abrupt("return", _context8.sent);case 3:case "end":return _context8.stop();}}}, _callee8, _this2);}));this.getProduct = function () {var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(_ref14) {var product_id = _ref14.product_id;var res;return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return _this2.__sendTx(_this2.params.contract.getContract().methods.getProduct(product_id), true);case 2:res = _context9.sent;return _context9.abrupt("return", { _id: product_id, createdAt: _Numbers2.default.fromSmartContractTimeToMinutes(res[0]), startDate: _Numbers2.default.fromSmartContractTimeToMinutes(res[1]), endDate: _Numbers2.default.fromSmartContractTimeToMinutes(res[2]), totalMaxAmount: _Numbers2.default.fromDecimals(res[3], _this2.getERC20Contract().getDecimals()), individualMinimumAmount: _Numbers2.default.fromDecimals(res[4], _this2.getERC20Contract().getDecimals()), APR: parseInt(res[5]), currentAmount: _Numbers2.default.fromDecimals(res[6], _this2.getERC20Contract().getDecimals()), lockedUntilFinalization: res[7], subscribers: res[8], subscriptionIds: _Numbers2.default.fromExponential(res[9]) });case 4:case "end":return _context9.stop();}}}, _callee9, _this2);}));return function (_x4) {return _ref13.apply(this, arguments);};}();this.approveERC20Transfer = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {var totalMaxAmount;return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return _this2.getERC20Contract().totalSupply();case 2:totalMaxAmount = _context10.sent;_context10.next = 5;return _this2.getERC20Contract().approve({ address: _this2.getAddress(), amount: _Numbers2.default.toSmartContractDecimals(totalMaxAmount, _this2.getERC20Contract().getDecimals()) });case 5:return _context10.abrupt("return", _context10.sent);case 6:case "end":return _context10.stop();}}}, _callee10, _this2);}));this.subscribeProduct = function () {var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(_ref17) {var address = _ref17.address,product_id = _ref17.product_id,amount = _ref17.amount;var amountWithDecimals, isApproved;return _regenerator2.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0: /* Get Decimals of Amount */amountWithDecimals = _Numbers2.default.toSmartContractDecimals(amount, _this2.getERC20Contract().getDecimals()); /* Verify if transfer is approved for this amount */_context11.next = 3;return _this2.getERC20Contract().isApproved({ address: address, amount: amount, spenderAddress: _this2.getAddress() });case 3:isApproved = _context11.sent;if (isApproved) {_context11.next = 6;break;}throw new Error("Has to Approve Token Transfer First, use the 'approve' Call");case 6:_context11.next = 8;return _this2.__sendTx(_this2.params.contract.getContract().methods.subscribeProduct(product_id, amountWithDecimals));case 8:return _context11.abrupt("return", _context11.sent);case 9:case "end":return _context11.stop();}}}, _callee11, _this2);}));return function (_x5) {return _ref16.apply(this, arguments);};}();this.getSubscription = function () {var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref19) {var subscription_id = _ref19.subscription_id,product_id = _ref19.product_id;var res;return _regenerator2.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return _this2.__sendTx(_this2.params.contract.getContract().methods.getSubscription(subscription_id, product_id), true);case 2:res = _context12.sent;return _context12.abrupt("return", { _id: _Numbers2.default.fromExponential(res[0]), productId: _Numbers2.default.fromExponential(res[1]), startDate: _Numbers2.default.fromSmartContractTimeToMinutes(res[2]), endDate: _Numbers2.default.fromSmartContractTimeToMinutes(res[3]), amount: _Numbers2.default.fromDecimals(res[4], _this2.getERC20Contract().getDecimals()), subscriberAddress: res[5], APR: parseInt(res[6]), finalized: res[7], withdrawAmount: _Numbers2.default.fromDecimals(res[8], _this2.getERC20Contract().getDecimals()) });case 4:case "end":return _context12.stop();}}}, _callee12, _this2);}));return function (_x6) {return _ref18.apply(this, arguments);};}();this.withdrawSubscription = function () {var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(_ref21) {var product_id = _ref21.product_id,subscription_id = _ref21.subscription_id;return _regenerator2.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:_context13.next = 2;return _this2.__sendTx(_this2.params.contract.getContract().methods.withdrawSubscription(product_id, subscription_id));case 2:return _context13.abrupt("return", _context13.sent);case 3:case "end":return _context13.stop();}}}, _callee13, _this2);}));return function (_x7) {return _ref20.apply(this, arguments);};}();this.getSubscriptionsByAddress = function () {var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(_ref23) {var address = _ref23.address;var res;return _regenerator2.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.next = 2;return _this2.__sendTx(_this2.params.contract.getContract().methods.getMySubscriptions(address), true);case 2:res = _context14.sent;return _context14.abrupt("return", res.map(function (r) {return _Numbers2.default.fromExponential(r);}));case 4:case "end":return _context14.stop();}}}, _callee14, _this2);}));return function (_x8) {return _ref22.apply(this, arguments);};}();this.getAllSubscriptions = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {var products, subscriptions;return _regenerator2.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:_context17.next = 2;return _this2.getProducts();case 2:products = _context17.sent;_context17.next = 5;return _promise2.default.all(products.map(function () {var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(product) {var productObj;return _regenerator2.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:_context16.next = 2;return _this2.getProduct({ product_id: product });case 2:productObj = _context16.sent;_context16.next = 5;return _promise2.default.all(productObj.subscriptionIds.map(function () {var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(subscription_id) {return _regenerator2.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:return _context15.abrupt("return", _this2.getSubscription({ subscription_id: subscription_id, product_id: product }));case 1:case "end":return _context15.stop();}}}, _callee15, _this2);}));return function (_x10) {return _ref26.apply(this, arguments);};}()));case 5:return _context16.abrupt("return", _context16.sent);case 6:case "end":return _context16.stop();}}}, _callee16, _this2);}));return function (_x9) {return _ref25.apply(this, arguments);};}()));case 5:subscriptions = _context17.sent;return _context17.abrupt("return", subscriptions ? _lodash2.default.flatten(subscriptions) : []);case 7:case "end":return _context17.stop();}}}, _callee17, _this2);}));this.__assert = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {return _regenerator2.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:if (_this2.getAddress()) {_context18.next = 2;break;}throw new Error("Contract is not deployed, first deploy it and provide a contract address");case 2: /* Use ABI */_this2.params.contract.use(_interfaces.staking, _this2.getAddress()); /* Set Token Address Contract for easy access */_context18.t0 = _ERC20Contract2.default;_context18.t1 = _this2.web3Connection;_context18.next = 7;return _this2.erc20();case 7:_context18.t2 = _context18.sent;_context18.t3 = { web3Connection: _context18.t1, contractAddress: _context18.t2 };_this2.params.ERC20Contract = new _context18.t0(_context18.t3);_context18.next = 12;return _this2.params.ERC20Contract.__assert();case 12:case "end":return _context18.stop();}}}, _callee18, _this2);}));this.
  deploy = function () {var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},callback = _ref29.callback;var params, res;return _regenerator2.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (
              _this2.getERC20Contract()) {_context19.next = 2;break;}throw (
                new Error("No Token Address Provided"));case 2:

              params = [_this2.getERC20Contract().getAddress()];_context19.next = 5;return (
                _this2.__deploy(params, callback));case 5:res = _context19.sent;
              _this2.params.contractAddress = res.contractAddress;
              /* Call to Backend API */_context19.next = 9;return (
                _this2.__assert());case 9:return _context19.abrupt("return",
              res);case 10:case "end":return _context19.stop();}}}, _callee19, _this2);}));return function () {return _ref28.apply(this, arguments);};}();this.


  getERC20Contract = function () {return _this2.params.ERC20Contract;};};exports.default =


StakingContract;
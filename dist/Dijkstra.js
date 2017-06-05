/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dijkstra = function () {
    function Dijkstra(map) {
        _classCallCheck(this, Dijkstra);

        this.map = map;
    }

    _createClass(Dijkstra, [{
        key: 'findShortestPath',
        value: function findShortestPath(start, end) {
            var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.map;

            var costs = {},
                tempList = { '0': [start] },
                predecessors = {},
                nodes = [],
                tempEnd = end,
                mapArr = [],
                ListArr = [];
            for (var key in map) {
                mapArr.push(key);
            }
            costs[start] = 0;
            console.log('起始节点： ' + start);
            while (tempList) {
                var keys = [],
                    List = '';
                for (var _key in tempList) {
                    Object.prototype.hasOwnProperty.call(tempList, _key) && keys.push(_key);
                    List += ' ' + tempList[_key] + '(消耗为' + _key + ')';
                }
                if (List != '') console.log('List中现有：' + List);
                if (!keys.length) break;
                keys.sort(function (a, b) {
                    return a - b;
                });

                var first = keys[0],
                    bucket = tempList[first],
                    node = bucket.shift(),
                    currentCost = parseFloat(first),
                    adjacentNodes = map[node] || {};
                if (ListArr.indexOf(node) != -1) continue; //如果是已经添加的节点就直接跳过
                console.log('找到其中消耗最小的节点：' + node);
                ListArr.push(node);
                console.log(ListArr);
                if (ListArr.length == mapArr.length) break; //判断所有节点都被加入来作为结束条件
                if (!bucket.length) delete tempList[first];
                for (var _key2 in tempList) {
                    console.log('List中还剩： ' + tempList[_key2] + '(消耗为' + _key2 + ')');
                }
                console.log(node + '节点到其他节点的关系为： ');
                for (var vertex in adjacentNodes) {
                    if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
                        var cost = adjacentNodes[vertex],
                            totalCost = cost + currentCost,
                            vertexCost = costs[vertex]; //取得当前节点之前保存的最小消耗

                        if (vertexCost === undefined || vertexCost > totalCost) {
                            //需要更新
                            console.log('到' + vertex + '节点的最小消耗更新为' + totalCost);
                            costs[vertex] = totalCost;
                            if (!tempList['' + totalCost]) tempList['' + totalCost] = [];
                            tempList['' + totalCost].push(vertex); //
                            predecessors[vertex] = node; //记录前一个节点
                        } else {
                            console.log('从' + node + '到' + vertex + '的最小总消耗为' + totalCost + '。比之前保存的最短路径值' + vertexCost + '大，所以不用更改');
                        }
                    }
                }
            }
            console.log('从' + start + '开始,到各点的最短距离为：');
            console.log(costs);
            while (tempEnd !== undefined) {
                nodes.push(tempEnd);
                tempEnd = predecessors[tempEnd];
            }
            nodes.reverse(); //得到路径
            console.log('从' + start + '开始到' + end + '的最短路径为' + nodes.join('=>'));
        }
    }]);

    return Dijkstra;
}();

/***/ })
/******/ ]);
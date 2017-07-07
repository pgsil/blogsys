'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle }, _react2.default.createElement(_Header2.default, null), props.children);
};

exports.default = Layout;
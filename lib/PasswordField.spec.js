'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _unwrap = require('@material-ui/core/test-utils/unwrap');

var _unwrap2 = _interopRequireDefault(_unwrap);

var _PasswordField = require('./PasswordField');

var _PasswordField2 = _interopRequireDefault(_PasswordField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env jest */
describe('<PasswordField />', function () {
  it('matches the previous snapshot', function () {
    var tree = (0, _enzyme.render)(_react2.default.createElement(_PasswordField2.default, null));
    expect(tree).toMatchSnapshot();
  });

  it('disables the button when the field is disabled', function () {
    var tree = (0, _enzyme.mount)(_react2.default.createElement(_PasswordField2.default, { disabled: true }));
    var toggleButton = tree.findWhere(function (e) {
      return e.name() === 'IconButton';
    });
    expect(toggleButton.prop('disabled')).toBe(true);
  });

  it('hides the password by default', function () {
    var tree = (0, _enzyme.mount)(_react2.default.createElement(_PasswordField2.default, null));
    expect(tree.find('input').prop('type')).toBe('password');
  });

  it('shows the password by default if the visible prop is set to true', function () {
    var tree = (0, _enzyme.mount)(_react2.default.createElement(_PasswordField2.default, { visible: true }));
    expect(tree.find('input').prop('type')).toBe('text');
  });

  it('toggles the visibility when clicking the button', function () {
    var tree = (0, _enzyme.mount)(_react2.default.createElement(_PasswordField2.default, null));

    tree.findWhere(function (e) {
      return e.name() === 'IconButton';
    }).simulate('click');
    expect(tree.find('input').prop('type')).toBe('text');

    tree.findWhere(function (e) {
      return e.name() === 'IconButton';
    }).simulate('click');
    expect(tree.find('input').prop('type')).toBe('password');
  });

  it('toggles the visibility when calling toggleVisibility', function () {
    var UnstyledPasswordField = (0, _unwrap2.default)(_PasswordField2.default);
    var tree = (0, _enzyme.mount)(_react2.default.createElement(UnstyledPasswordField, { classes: {} }));

    tree.instance().toggleVisibility();
    tree.update();
    expect(tree.find('input').prop('type')).toBe('text');

    tree.instance().toggleVisibility();
    tree.update();
    expect(tree.find('input').prop('type')).toBe('password');
  });
});
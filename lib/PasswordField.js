'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = require('@material-ui/core/styles');

var _Visibility = require('@material-ui/icons/Visibility');

var _Visibility2 = _interopRequireDefault(_Visibility);

var _VisibilityOff = require('@material-ui/icons/VisibilityOff');

var _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);

var _materialUiToggleIcon = require('material-ui-toggle-icon');

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {},
  input: {}
};

var PasswordField = function (_React$Component) {
  _inherits(PasswordField, _React$Component);

  function PasswordField(props) {
    _classCallCheck(this, PasswordField);

    var _this = _possibleConstructorReturn(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).call(this, props));

    _this.toggleVisibility = function () {
      _this.setState(function (_ref) {
        var visible = _ref.visible;
        return {
          visible: !visible
        };
      });
    };

    _this.handleButtonMouseDown = function (e) {
      e.preventDefault();
    };

    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  _createClass(PasswordField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }

    /**
     * Toogles the visibility the password.
     * @public
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          buttonDisabled = _props.buttonDisabled,
          visibleProp = _props.visible,
          other = _objectWithoutProperties(_props, ['classes', 'buttonDisabled', 'visible']);

      var visible = this.state.visible;


      return _react2.default.createElement(_Input2.default, _extends({}, other, {
        classes: { root: classes.root, input: classes.input },
        type: this.state.visible ? 'text' : 'password',
        endAdornment: _react2.default.createElement(
          _InputAdornment2.default,
          { position: 'end', className: classes.adornment },
          _react2.default.createElement(
            _IconButton2.default,
            {
              onClick: this.toggleVisibility,
              onMouseDown: this.handleButtonMouseDown,
              disabled: other.disabled || buttonDisabled
            },
            _react2.default.createElement(_materialUiToggleIcon2.default, {
              on: visible,
              onIcon: _react2.default.createElement(_Visibility2.default, null),
              offIcon: _react2.default.createElement(_VisibilityOff2.default, null)
            })
          )
        )
      }));
    }
  }]);

  return PasswordField;
}(_react2.default.Component);

PasswordField.defaultProps = {
  buttonDisabled: false,
  visible: false
};

PasswordField.propTypes = _extends({}, _Input2.default.propTypes, {
  buttonDisabled: _propTypes2.default.bool,
  visible: _propTypes2.default.bool
});

exports.default = (0, _styles.withStyles)(styles)(PasswordField);
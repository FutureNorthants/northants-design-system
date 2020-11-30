'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-weight: 700;\n    border: 0;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n    font-family: ", ";\n    border-radius: ", ";\n\n    &.button--primary {\n        color: white;\n        background-color: ", ";\n    }\n    &.button--secondary {\n        color: #333;\n        background-color: transparent;\n        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    }\n    &.button--small {\n        font-size: 12px;\n        padding: 10px 16px;\n    }\n    &.button--medium {\n        font-size: 14px;\n        padding: 11px 20px;\n    }\n    &.button--large {\n        font-size: 16px;\n        padding: 12px 24px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button(_templateObject(), function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.colours.action;
});

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var _ref$primary = _ref.primary,
      primary = _ref$primary === void 0 ? false : _ref$primary,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["primary", "size", "label"]);

  var mode = primary ? 'button--primary' : 'button--secondary';
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    type: "button",
    className: ["button--".concat(size), mode].join(' ')
  }, props), label);
};

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: 700;\n    line-height: 1;\n    font-family: ", ";\n\n    font-weight: 400;\n    line-height: 1;\n    font-family: ", ";\n\n    font-size: 24px;\n    font-size: 1.5rem;\n    line-height: 1.04167;\n\n    @media screen and (min-width: ", "){\n        font-size: 36px;\n        font-size: 2.25rem;\n        line-height: 1.11111;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: 400;\n    line-height: 1;\n    font-family: ", ";\n\n    font-size: 24px;\n    font-size: 1.5rem;\n    line-height: 1.04167;\n\n    @media screen and (min-width: ", "){\n        font-size: 36px;\n        font-size: 2.25rem;\n        line-height: 1.11111;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: 700;\n    line-height: 1;\n    font-family: ", ";\n\n    font-size: 24px;\n    font-size: 1.5rem;\n    line-height: 1.04167;\n\n    @media screen and (min-width: ", "){\n        font-size: 36px;\n        font-size: 2.25rem;\n        line-height: 1.11111;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    margin-left: 0;\n    font-weight: 700;\n    font-family: ", ";\n    margin-bottom: 25px;\n\n    font-size: 32px;\n    font-size: 2rem;\n    line-height: 1.09375;\n\n    @media screen and (min-width: ", "){\n        font-size: 48px;\n        font-size: 3rem;\n        line-height: 1.04167;\n    }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var H1 = styled.h1(_templateObject$1(), function (props) {
  return props.theme.colours.black;
}, function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.breakpoints.m;
});
var H2 = styled.h2(_templateObject2(), function (props) {
  return props.theme.colours.black;
}, function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.breakpoints.m;
});
var H3 = styled.h3(_templateObject3(), function (props) {
  return props.theme.colours.black;
}, function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.breakpoints.m;
});
var H4 = styled.h4(_templateObject4(), function (props) {
  return props.theme.colours.black;
}, function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.breakpoints.m;
});

/**
 * A heading of different levels
 */
var Heading = function Heading(_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? 2 : _ref$level,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["level", "text"]);

  if (level === 1) return /*#__PURE__*/React.createElement(H1, props, text);
  if (level === 2) return /*#__PURE__*/React.createElement(H2, props, text);
  if (level === 3) return /*#__PURE__*/React.createElement(H3, props, text);
  if (level === 4) return /*#__PURE__*/React.createElement(H4, props, text);
  return null;
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    color: ", ";\n    margin-right: 15px;\n    margin-left: 15px;\n    font-size: 16px;\n    font-size: 1rem;\n    line-height: 1.25;\n\n    @media screen and (min-width: ", "){\n        margin-right: 30px;\n        margin-left: 30px;\n        font-size: 19px;\n        font-size: 1.1875rem;\n        line-height: 1.31579;\n    }\n\n    @media screen and (min-width: calc(", " + 60px)){\n        margin-right: auto;\n        margin-left: auto;\n        max-width: ", ";\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPageMain = styled.main(_templateObject$2(), function (props) {
  return props.theme.fontstack;
}, function (props) {
  return props.theme.colours.black;
}, function (props) {
  return props.theme.breakpoints.m;
}, function (props) {
  return props.theme.breakpoints.l;
}, function (props) {
  return props.theme.breakpoints.l;
});

/**
 * A container for holding the main content of a page
 */
var PageMain = function PageMain(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["classes", "children"]);

  return /*#__PURE__*/React.createElement(StyledPageMain, _extends({
    role: "main",
    id: "main",
    className: classes
  }, props), children);
};

exports.Button = Button;
exports.Heading = Heading;
exports.PageMain = PageMain;

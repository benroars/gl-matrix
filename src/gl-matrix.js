"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec4 = exports.vec3 = exports.vec2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = undefined;

var _common = require("./gl-matrix/common");

var glMatrix = _interopRequireWildcard(_common);

var _mat = require("./gl-matrix/mat2");

var mat2 = _interopRequireWildcard(_mat);

var _mat2d = require("./gl-matrix/mat2d");

var mat2d = _interopRequireWildcard(_mat2d);

var _mat2 = require("./gl-matrix/mat3");

var mat3 = _interopRequireWildcard(_mat2);

var _mat3 = require("./gl-matrix/mat4");

var mat4 = _interopRequireWildcard(_mat3);

var _quat = require("./gl-matrix/quat");

var quat = _interopRequireWildcard(_quat);

var _vec = require("./gl-matrix/vec2");

var vec2 = _interopRequireWildcard(_vec);

var _vec2 = require("./gl-matrix/vec3");

var vec3 = _interopRequireWildcard(_vec2);

var _vec3 = require("./gl-matrix/vec4");

var vec4 = _interopRequireWildcard(_vec3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.glMatrix = glMatrix;
exports.mat2 = mat2;
exports.mat2d = mat2d;
exports.mat3 = mat3;
exports.mat4 = mat4;
exports.quat = quat;
exports.vec2 = vec2;
exports.vec3 = vec3;
exports.vec4 = vec4; /**
                      * @fileoverview gl-matrix - High performance matrix and vector operations
                      * @author Brandon Jones
                      * @author Colin MacKenzie IV
                      * @version 2.4.0
                      */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER
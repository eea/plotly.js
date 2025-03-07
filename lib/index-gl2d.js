/**
* Copyright 2012-2021, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Plotly = require('./core');

Plotly.register([
    require('./scattergl'),
    require('./splom'),
    require('./heatmapgl'),
    require('./parcoords')
]);

// transforms
Plotly.register([
    require('./aggregate'),
    require('./filter'),
    require('./groupby'),
    require('./sort')
]);

module.exports = Plotly;

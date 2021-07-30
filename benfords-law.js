"use strict";
/**
 * Daniel Moxon
 * Copyright (C) 2020
 * https://github.com/dcmox/benfords-law
 */
exports.__esModule = true;
var fs = require('fs');
var BenfordsLawFrequencyChart = {
    1: 30.1,
    2: 17.6,
    3: 12.5,
    4: 9.7,
    5: 7.9,
    6: 6.7,
    7: 5.8,
    8: 5.1,
    9: 4.6
};
function isBenfordAnomaly(dataSet) {
    var result = {
        isAnomaly: false,
        deviations: [],
        order: [],
        chart: []
    };
    var freqChart = [
        { digit: 1, occurrences: 0, percent: 0 },
        { digit: 2, occurrences: 0, percent: 0 },
        { digit: 3, occurrences: 0, percent: 0 },
        { digit: 4, occurrences: 0, percent: 0 },
        { digit: 5, occurrences: 0, percent: 0 },
        { digit: 6, occurrences: 0, percent: 0 },
        { digit: 7, occurrences: 0, percent: 0 },
        { digit: 8, occurrences: 0, percent: 0 },
        { digit: 9, occurrences: 0, percent: 0 },
    ];
    var totalOccurrences = dataSet.length;
    var _loop_1 = function (i) {
        if (dataSet[i].toString()[0]) {
            var freq = freqChart.find(function (f) { return f.digit === Number(dataSet[i].toString()[0]); });
            if (freq) {
                freq.occurrences++;
                freq.percent = (freq.occurrences / totalOccurrences) * 100;
            }
        }
    };
    for (var i = 0; i < dataSet.length; i++) {
        _loop_1(i);
    }
    freqChart.sort(function (a, b) {
        return a.occurrences > b.occurrences
            ? -1
            : a.occurrences < b.occurrences
                ? 1
                : 0;
    });
    if (freqChart.slice(0, 5).reduce(function (a, c) { return a + c.digit; }, 0) > 16) {
        result.isAnomaly = true;
    }
    var _loop_2 = function (i) {
        var freq = freqChart.find(function (f) { return f.digit === i; });
        var index = freqChart.findIndex(function (f) { return f.digit === i; }) + 1;
        if (freq) {
            result.deviations.push({
                digit: freq.digit,
                percentDiff: BenfordsLawFrequencyChart[i] - freq.percent,
                correctPlacement: index === freq.digit
            });
            result.order.push(freqChart[i - 1].digit);
        }
    };
    for (var i = 1; i < 10; i++) {
        _loop_2(i);
    }
    result.chart = freqChart;
    return result;
}
exports.isBenfordAnomaly = isBenfordAnomaly;

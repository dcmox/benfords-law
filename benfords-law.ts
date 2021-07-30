/**
 * Daniel Moxon
 * Copyright (C) 2020
 * https://github.com/dcmox/benfords-law
 */

import { IBenfordResult } from './interfaces/benford-result.interface'
import { FrequencyData } from './interfaces/frequency-data.interface'

const fs = require('fs')

const BenfordsLawFrequencyChart: { [key: number]: number } = {
	1: 30.1,
	2: 17.6,
	3: 12.5,
	4: 9.7,
	5: 7.9,
	6: 6.7,
	7: 5.8,
	8: 5.1,
	9: 4.6,
}

export function isBenfordAnomaly(dataSet: number[]): IBenfordResult {
	const result: IBenfordResult = {
		isAnomaly: false,
		deviations: [],
		order: [],
		chart: [],
	}

	const freqChart: FrequencyData[] = [
		{ digit: 1, occurrences: 0, percent: 0 },
		{ digit: 2, occurrences: 0, percent: 0 },
		{ digit: 3, occurrences: 0, percent: 0 },
		{ digit: 4, occurrences: 0, percent: 0 },
		{ digit: 5, occurrences: 0, percent: 0 },
		{ digit: 6, occurrences: 0, percent: 0 },
		{ digit: 7, occurrences: 0, percent: 0 },
		{ digit: 8, occurrences: 0, percent: 0 },
		{ digit: 9, occurrences: 0, percent: 0 },
	]

	const totalOccurrences: number = dataSet.length

	for (let i = 0; i < dataSet.length; i++) {
		if (dataSet[i].toString()[0]) {
			const freq = freqChart.find(
				(f) => f.digit === Number(dataSet[i].toString()[0]),
			)
			if (freq) {
				freq.occurrences++
				freq.percent = (freq.occurrences / totalOccurrences) * 100
			}
		}
	}

	freqChart.sort((a, b) => {
		return a.occurrences > b.occurrences
			? -1
			: a.occurrences < b.occurrences
			? 1
			: 0
	})

	if (freqChart.slice(0, 5).reduce((a, c) => a + c.digit, 0) > 16) {
		result.isAnomaly = true
	}
	for (let i = 1; i < 10; i++) {
		const freq = freqChart.find((f) => f.digit === i)
		const index = freqChart.findIndex((f) => f.digit === i) + 1
		if (freq) {
			result.deviations.push({
				digit: freq.digit,
				percentDiff: BenfordsLawFrequencyChart[i] - freq.percent,
				correctPlacement: index === freq.digit,
			})
			result.order.push(freqChart[i - 1].digit)
		}
	}
	result.chart = freqChart
	return result
}

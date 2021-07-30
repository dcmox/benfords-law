const assert = require('assert')
const fs = require('fs')
import { isBenfordAnomaly } from '../benfords-law'

describe('benfords-law test', () => {
	it('should detect an anomaly', () => {
		const numbers = fs
			.readFileSync('data/population-sizes.txt', {
				encoding: 'utf8',
			})
			.split('\r\n')

		const result = isBenfordAnomaly(numbers)

		expect(result.order).toStrictEqual([1, 5, 6, 7, 2, 8, 9, 3, 4])
		expect(result.isAnomaly).toStrictEqual(true)
		expect(result.deviations).toStrictEqual([
			{
				digit: 1,
				percentDiff: 2.0230769230769248,
				correctPlacement: true,
			},
			{
				digit: 2,
				percentDiff: 9.181196581196582,
				correctPlacement: false,
			},
			{
				digit: 3,
				percentDiff: 8.183760683760685,
				correctPlacement: false,
			},
			{
				digit: 4,
				percentDiff: 6.409401709401708,
				correctPlacement: false,
			},
			{
				digit: 5,
				percentDiff: -11.758119658119659,
				correctPlacement: false,
			},
			{
				digit: 6,
				percentDiff: -6.505128205128206,
				correctPlacement: false,
			},
			{
				digit: 7,
				percentDiff: -3.72991452991453,
				correctPlacement: false,
			},
			{
				digit: 8,
				percentDiff: -1.9512820512820515,
				correctPlacement: false,
			},
			{
				digit: 9,
				percentDiff: -1.8529914529914544,
				correctPlacement: false,
			},
		])
	})

	it('should detect no anomaly', () => {
		const numbers = fs
			.readFileSync('data/coin-prices.txt', {
				encoding: 'utf8',
			})
			.split('\r\n')
			.map((n: any) => {
				n = n.replace(/\./g, '').replace(/0/g, '')
				return n
			})

		const result = isBenfordAnomaly(numbers)

		//console.log(result)

		expect(result.order).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
		expect(result.isAnomaly).toStrictEqual(false)
		expect(result.deviations).toStrictEqual([
			{
				digit: 1,
				percentDiff: -0.4175038051750377,
				correctPlacement: true,
			},
			{
				digit: 2,
				percentDiff: 0.6669710806697111,
				correctPlacement: true,
			},
			{
				digit: 3,
				percentDiff: -1.1415525114155258,
				correctPlacement: true,
			},
			{
				digit: 4,
				percentDiff: 0.5675799086757998,
				correctPlacement: true,
			},
			{
				digit: 5,
				percentDiff: 0.4989345509893459,
				correctPlacement: true,
			},
			{
				digit: 6,
				percentDiff: 0.34535768645357745,
				correctPlacement: true,
			},
			{
				digit: 7,
				percentDiff: -0.26925418569254145,
				correctPlacement: true,
			},
			{
				digit: 8,
				percentDiff: 0.05814307458143109,
				correctPlacement: true,
			},
			{
				digit: 9,
				percentDiff: -0.09939117199391223,
				correctPlacement: true,
			},
		])
	})
})

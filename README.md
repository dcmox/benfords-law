# benfords-law

Benford's law is an observation about frequency distribution for the leading digits of numbers in many real-life sets of data. The law states that in many naturally occurring collections of numbers, the leading digit is likely to be small. The frequency of each digit should map out to something similar:

---

| Digit | Frequency |
| ----- | --------- |
| 1     | 30.1%     |
| 2     | 17.6%     |
| 3     | 12.5%     |
| 4     | 9.7%      |
| 5     | 7.9%      |
| 6     | 6.7%      |
| 7     | 5.8%      |
| 8     | 5.1%      |
| 9     | 4.6%      |

## Use

```typescript
import { isBenfordAnomaly } from '@dcmox/benfords-law'

const dataSet: number[] = [
	// your set of numbers
]

console.log(isBenfordAnomaly(dataSet)) // returns true or false with deviation optional
```

## Example Output

This is an example output for Benford's Law anomaly detection on cryptocurrency prices.

```typescript
{
	isAnomaly: false,
	deviations: [
	{
		digit: 1,
		percentDiff: -0.4175038051750377,
		correctPlacement: true
	},
	{
		digit: 2,
		percentDiff: 0.6669710806697111,
		correctPlacement: true
	},
	{
		digit: 3,
		percentDiff: -1.1415525114155258,
		correctPlacement: true
	},
	{
		digit: 4,
		percentDiff: 0.5675799086757998,
		correctPlacement: true
	},
	{
		digit: 5,
		percentDiff: 0.4989345509893459,
		correctPlacement: true
	},
	{
		digit: 6,
		percentDiff: 0.34535768645357745,
		correctPlacement: true
	},
	{
		digit: 7,
		percentDiff: -0.26925418569254145,
		correctPlacement: true
	},
	{
		digit: 8,
		percentDiff: 0.05814307458143109,
		correctPlacement: true
	},
	{
		digit: 9,
		percentDiff: -0.09939117199391223,
		correctPlacement: true
	}
	],
	order: [
		1, 2, 3, 4, 5,
		6, 7, 8, 9
	],
	chart: [
		{ digit: 1, occurrences: 1604, percent: 30.51750380517504 },
		{ digit: 2, occurrences: 890, percent: 16.93302891933029 },
		{ digit: 3, occurrences: 717, percent: 13.641552511415526 },
		{ digit: 4, occurrences: 480, percent: 9.1324200913242 },
		{ digit: 5, occurrences: 389, percent: 7.401065449010654 },
		{ digit: 6, occurrences: 334, percent: 6.354642313546423 },
		{ digit: 7, occurrences: 319, percent: 6.069254185692541 },
		{ digit: 8, occurrences: 265, percent: 5.041856925418569 },
		{ digit: 9, occurrences: 247, percent: 4.699391171993912 }
	]
}
```

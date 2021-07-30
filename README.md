# benfords-law

Benford's law is an observation about frequency distribution for the leading digits of numbers in many real-life sets of data. The law states that in many naturally occurring collecitons of numbers, the leading digit is likely to be small. The frequency of each digit should map out to something similar:

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
import { isBenfordAnomoly } from '@dcmox/benfords-law'

const dataSet: number[] = [
	// your set of numbers
]

console.log(isBenfordAnomoly(dataSet)) // returns true or false with deviation optional
```

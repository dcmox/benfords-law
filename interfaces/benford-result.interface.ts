import { IBenfordDeviations } from './benford-deviations.interface'
import { FrequencyData } from './frequency-data.interface'

export interface IBenfordResult {
	isAnomaly: boolean
	deviations: IBenfordDeviations[]
	order: number[]
	chart: FrequencyData[]
}

import { Operation } from '../enums/Operation';

export interface IArithmeticOperation {
	operation: Operation;
	left: number;
	right: number;
}

function getRandomNumber(upperBound: number): number {
	return Math.round(Math.random() * upperBound);
}

export const IArithmeticOperation = {
	calculate(operation: IArithmeticOperation): number {
		switch (operation.operation) {
			case Operation.Addition:
				return operation.left + operation.right;
			case Operation.Subtraction:
				return operation.left - operation.right;
		}
		throw new Error(`Unknown operation ${operation.operation}`);
	},

	random(upperBound: number): IArithmeticOperation {
		const left = getRandomNumber(upperBound);
		const operation = Math.random() > 0.5 ? Operation.Addition : Operation.Subtraction;
		let right = 0;
		switch (operation) {
			case Operation.Addition:
				right = getRandomNumber(upperBound - left);
				break;
			case Operation.Subtraction:
				right = getRandomNumber(left);
				break;
		}
		return {
			operation: operation,
			left: left,
			right: right
		};
	}
};

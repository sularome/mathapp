<script lang="ts">
	import { Label, Input, Button, Alert } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';
	import { IArithmeticOperation } from '../interfaces/IArithmeticOperation';
	import { Operation } from '../enums/Operation';

	const upperBound = 30;
	let operation: IArithmeticOperation = IArithmeticOperation.random(upperBound);
	let answer: number | null = null;
	let alert = { show: false, message: '', type: 'success' };
	let timer: null | number = null;

	function verifyAnswer() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => (alert = { ...alert, show: false }), 4000);
		if (IArithmeticOperation.calculate(operation) === answer) {
			alert = { show: true, message: 'Tak jest! Brawo!', type: 'success' };
			operation = IArithmeticOperation.random(upperBound);
			answer = null;
			return;
		}
		alert = { show: true, message: 'Uuuu, niestety, spróbuj ponownie.', type: 'error' };
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			verifyAnswer();
		}
	}
</script>

<div class="mb-6">
	{operation.left}
	{operation.operation === Operation.Addition ? '+' : '-'}
	{operation.right}
</div>
<div class="mb-6">
	<Label for="large-input" class="mb-2 block">Odpowiedź</Label>
	<Input
		id="large-input"
		on:input={(e) => (answer = Number(e.target.value))}
		on:keydown={onKeyDown}
		size="lg"
		placeholder="Odpowiedź"
		type="number"
	/>
</div>
<Button on:click={verifyAnswer}>Sprawdź</Button>
{#if alert.show}
	<div out:fade={{ duration: 300 }}>
		<Alert color={alert.type === 'success' ? 'green' : 'red'} class="my-5 text-2xl">
			{alert.message}
		</Alert>
	</div>
{/if}

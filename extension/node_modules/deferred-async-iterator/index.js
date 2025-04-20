import Queue from 'yocto-queue';
import pDefer from 'p-defer';

export default function createDeferredAsyncIterator() {
	const values = new Queue();
	const onNextCallbacks = new Queue();
	const cleanupCallbacks = new Set();

	function cleanup() {
		for (const callback of cleanupCallbacks) {
			callback();
		}

		cleanupCallbacks.clear();
	}

	async function enqueueValue(value) {
		if (onNextCallbacks.size > 0) {
			onNextCallbacks.dequeue()(value);

			return;
		}

		const {promise, resolve} = pDefer();

		values.enqueue({value, resolve});

		return promise;
	}

	return {
		async next(value) {
			return enqueueValue({
				done: false,
				value,
			});
		},
		async complete() {
			cleanup();

			return enqueueValue({
				done: true,
			});
		},
		onCleanup(callback) {
			cleanupCallbacks.add(callback);
		},
		iterator: {
			async next() {
				if (values.size > 0) {
					const {value, resolve} = values.dequeue();

					resolve();

					return value;
				}

				const {promise, resolve} = pDefer();
				onNextCallbacks.enqueue(resolve);

				return promise;
			},
			async return(value) {
				cleanup();

				return {
					done: true,
					value,
				};
			},
		},
	};
}

import '@logseq/libs';

async function main() {
	logseq.Editor.registerSlashCommand('/plan-tomorrow-today', async (...args) => {
		console.log('plan-tomorrow-today invoked', ...args)
	})
}

logseq.ready(main).catch(console.error);
const fetch = require('node-fetch');
const memwatch = require('memwatch-next');

async function checkEndpoint(endpointURL) {
	let fetchResult;
	try {
		fetchResult = await fetch(endpointURL);
	} catch (err) {
		// Err
	}
	return fetchResult;
}

function checkEndpoints(){
	const endpoints = [
		'https://google.com',
		'https://www.facebook.com/',
		'https://www.messenger.com/',
		'https://github.com/',
		'https://slack.com/',
		'https://www.wikipedia.org/',
		'https://www.reddit.com/',
		'https://news.ycombinator.com/',
		'https://www.amazon.com/',
		'https://stackoverflow.com/',
		'https://www.linkedin.com/',
		'https://www.npmjs.com/'
	];
	endpoints.forEach( endpoint => checkEndpoint(endpoint));
}

setInterval(checkEndpoints, 1000);

memwatch.on('leak', (info) => {
  console.error('Memory leak detected:\n', info);
});

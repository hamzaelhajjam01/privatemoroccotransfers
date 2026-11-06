/**
 * IndexNow Instant Search Engine Submission Script
 * Submits all sitemap URLs to Bing, Yandex, Naver, and IndexNow participating search engines.
 */
const https = require('https');

const HOST = 'www.privatemoroccotransfers.com';
const KEY = '29de9d107ddf481881ef911e7b0ce89d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function postIndexNow(payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body });
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log('Fetching live sitemap from:', SITEMAP_URL);
  try {
    const xml = await fetchSitemap(SITEMAP_URL);
    const locMatches = xml.match(/<loc>(https:\/\/[^<]+)<\/loc>/g) || [];
    const urlList = locMatches.map((m) => m.replace('<loc>', '').replace('</loc>', ''));

    console.log(`Found ${urlList.length} URLs in sitemap.`);

    if (urlList.length === 0) {
      console.error('No URLs found to submit.');
      return;
    }

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList,
    };

    console.log(`Submitting ${urlList.length} URLs to IndexNow (api.indexnow.org)...`);
    const res = await postIndexNow(payload);
    console.log(`Response HTTP Status: ${res.statusCode}`);
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('IndexNow submission SUCCESSFUL! URLs submitted to Bing, Yandex, Naver & IndexNow partners.');
    } else {
      console.log('IndexNow response:', res.body || '(no body)');
    }
  } catch (err) {
    console.error('Error during IndexNow submission:', err);
  }
}

run();

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { promises as fs } from 'fs';

const viewport = {
  width: 1600,
  height: 1200,
};

const main = async () => {
  const transport = new StdioClientTransport({
    command: 'npx',
    args: ['tsx', 'src/server-puppeteer.ts'],
    env: process.env,
  });

  const client = new Client({
    name: 'example-client',
    version: '1.0.0',
  });

  await client.connect(transport);

  //const tools = await client.listTools();
  //console.log(JSON.stringify(tools, undefined, 2));

  let res = await client.callTool({
    name: 'puppeteer_navigate',
    arguments: {
      url: 'https://www.bbc.com/news',
      launchOptions: {
        headless: false,
        defaultViewport: viewport,
      },
    },
  });
  console.log(res);

  res = await client.callTool({
    name: 'puppeteer_screenshot',
    arguments: {
      name: 'screenshot1',
      ...viewport,
    },
  });
  //console.log(res);

  const resources = await client.listResources();
  console.log(JSON.stringify(resources));

  const resourceResult = await client.readResource({ uri: 'screenshot://screenshot1' });
  await fs.writeFile('a.png', Buffer.from(resourceResult.contents[0].blob, 'base64'));

  res = await client.callTool({
    name: 'puppeteer_click',
    arguments: {
      x: 711,
      y: 123,
    },
  });
  console.log(res);
};

main();

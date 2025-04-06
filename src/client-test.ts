import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const main = async () => {
  const transport = new StdioClientTransport({
    command: 'npx',
    args: ['tsx', 'src/add-server.ts'],
  });

  const client = new Client({
    name: 'example-client',
    version: '1.0.0',
  });

  await client.connect(transport);

  const toolsResult = await client.listTools();
  console.log(JSON.stringify(toolsResult));

  const result = await client.callTool({ name: 'add', arguments: { a: 4, b: 5 } });
  console.log(result);

  const resourceResult = await client.readResource({ uri: 'greeting://foo' });
  console.log(JSON.stringify(resourceResult));
};

main();

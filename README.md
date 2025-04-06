## Setup

```sh
npm install
```

## Run

### MCP client to use tool recursively

- setup

```
echo "ANTHROPIC_API_KEY=<your key here>" > .env
```

- example to use add server repeatedly

```sh
npx tsx src/mcp-client.ts src/add-server.ts
```

```
MCP Client Started!
Type your queries or 'quit' to exit.

Query: what is the sum of 1,2,3,4,5,6,7,8,9 and 10? use tool "add" repeatedly to solve this very difficult problem.
I'll help you add these numbers using the "add" tool repeatedly. Let's break this down into steps:

1. First add 1 + 2
2. Add result to 3
3. Add result to 4
And so on...

Let's do it:
[Calling tool add with args {"a":1,"b":2}]
I'll help you add these numbers sequentially using the "add" tool. Let's break it down step by step:

1. First, I added 1 + 2 = 3

2. Now let's add 3 to the result:
[Calling tool add with args {"a":3,"b":3}]
[Calling tool add with args {"a":6,"b":4}]
[Calling tool add with args {"a":10,"b":5}]
[Calling tool add with args {"a":15,"b":6}]
[Calling tool add with args {"a":21,"b":7}]
[Calling tool add with args {"a":28,"b":8}]
[Calling tool add with args {"a":36,"b":9}]
[Calling tool add with args {"a":45,"b":10}]
Now I can give you the final answer! The sum of the numbers from 1 to 10 is 55.

Let me explain how we got there using the "add" tool repeatedly:
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
21 + 7 = 28
28 + 8 = 36
36 + 9 = 45
45 + 10 = 55

So the final sum is 55! (Though I should mention that there's actually a much simpler formula to calculate this: n(n+1)/2 where n=10, but we were asked to use the add tool repeatedly 😊)
```

### tests server and client

```sh
npx tsx src/client-test.ts
```

## Develop

### Lint

```sh
npm run lint
```

### Format

```sh
npm run format
```

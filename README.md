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
Connected to server with tools: [ 'add' ]

MCP Client Started!
Type your queries or 'quit' to exit.

Query: what is the sum of 1,2,3,4,5,6,7,8,9 and 10? use tool "add" repeatedly to solve this very difficult problem.
I'll help you add these numbers using the "add" tool repeatedly to find the total sum of numbers from 1 to 10. I'll break this down into steps:

1. First, let's add 1 + 2
[Calling tool add with args {"a":1,"b":2}]
Now let's continue adding the numbers sequentially:

2. Let's add 3 to our previous result (3):
[Calling tool add with args {"a":3,"b":3}]
3. Now let's add 4 to our previous result (6):
[Calling tool add with args {"a":6,"b":4}]
4. Let's add 5 to our previous result (10):
[Calling tool add with args {"a":10,"b":5}]
5. Let's add 6 to our previous result (15):
[Calling tool add with args {"a":15,"b":6}]
6. Let's add 7 to our previous result (21):
[Calling tool add with args {"a":21,"b":7}]
7. Let's add 8 to our previous result (28):
[Calling tool add with args {"a":28,"b":8}]
8. Let's add 9 to our previous result (36):
[Calling tool add with args {"a":36,"b":9}]
9. Finally, let's add 10 to our previous result (45):
[Calling tool add with args {"a":45,"b":10}]
Now I can give you the final result! The sum of all numbers from 1 to 10 is 55.

To break down what we did:
1. 1 + 2 = 3
2. 3 + 3 = 6
3. 6 + 4 = 10
4. 10 + 5 = 15
5. 15 + 6 = 21
6. 21 + 7 = 28
7. 28 + 8 = 36
8. 36 + 9 = 45
9. 45 + 10 = 55

So, 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

(Fun fact: There's actually a faster way to calculate this using the formula n(n+1)/2 where n=10, but we were asked to use the add tool repeatedly!)

Query: quit
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

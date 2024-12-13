# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server can hang due to long-running synchronous operations within request handlers.  The `server.js` file shows the problem, while `serverSolution.js` provides a solution.

## Problem

The `server.js` file creates a simple HTTP server.  The request handler includes a loop that simulates a long-running task. This blocks the event loop, preventing the server from responding to further requests. The server becomes unresponsive and hangs.

## Solution

The `serverSolution.js` demonstrates how to resolve the issue by using asynchronous programming techniques. The long-running task is offloaded to a different thread, ensuring the event loop remains responsive and the server continues to function correctly.

## How to Reproduce

1. Clone the repository.
2. Run `node server.js`.
3. Try to access `http://localhost:3000/` in a browser. Observe the hang.
4. Run `node serverSolution.js`.
5. Try to access `http://localhost:3000/` in a browser. Observe the improved responsiveness.
# Express Hello World HTTPS

Express hello world using https instead of http.

## Prerequisites

- Node.js 12.x.
- Express 4.18.x.
- A certificate (server.crt) with its private key (server.key).

## Getting started

1. Clone the project.
1. Open a terminal in the root directory.
1. Change to `express-https` directory.
1. Generate a certificate (`server.crt`) with private key (`server.key`) in `src` directory ([How-to][1])
1. Change to `src` directory.
1. Run `npm install`.
1. Run `node app.js`.
1. Open your web browser at <https://localhost:8000/>.

[1]: https://gist.github.com/feliperomero3/a6282b0e7ca579fff0e296227675190d

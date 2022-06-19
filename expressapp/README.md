# Express Skeleton HTTPS

Express Generator application skeleton using HTTPS instead of HTTP.

Starting application comes from running:

```npm
npm install -g express-generator

express --view=pug expressapp
```

Then I modified it to use HTTPS. Required changes: `git diff 4755890..eae7167`

## Prerequisites

- Node.js 12.x.
- Express 4.18.x.
- A certificate (server.crt) with its private key (server.key).

## Getting started

1. Clone the project.
1. Open a terminal in the root directory.
1. Change to `expressapp` directory.
1. Generate a certificate (`server.crt`) with private key (`server.key`) in `expressapp` directory ([How-to][1])
1. Run `npm install`.
1. Run `DEBUG=expressapp:* npm start`.
1. Or `$Env:DEBUG='expressapp:*'; npm start` on Powershell.
1. Open your web browser at <https://localhost:8000/>.

[1]: https://gist.github.com/feliperomero3/a6282b0e7ca579fff0e296227675190d

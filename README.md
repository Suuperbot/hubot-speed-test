# hubot-speed-test

**notice this is still experimental**

A hubot script to perform speedtests (of the machine/network hosting hubot)

See [`src/speed-test.js`](src/speed-test.js) for full documentation.

## Installation

In hubot project repo, run:

`npm install hubot-speed-test --save`

Then add **hubot-speed-test** to your `external-scripts.json`:

```json
[
  "hubot-speed-test"
]
```

## Sample Interaction

```
user1>> hubot run speedtest
hubot>> 
{ download: 21.896,
  upload: 10.825,
  originalDownload: 2411478,
  originalUpload: 1187940 }
```

## NPM Module

https://www.npmjs.com/package/hubot-speed-test

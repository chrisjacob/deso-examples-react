# DeSo Creator Coin - Bulk Transfer
This is a very basic and hacky fork of the "DeSo Examples React" project.

I've modified the code to replace the basic "Send a Post" (submitPost) example, with "Bulk Send Creator Coins" (transferCreatorCoin) functionality.

Currently the code is hardcoded to sending @10XChris Creator Coins from @10XChris account...but you're welcome to fork this repo and change the code to your own needs.

Once you've got the app running on localhost:3000 you can enter data like this into the TEXTAREA and submit a bulk transfer of coins...

```
{"recipient":"BC1YLixHLxJght9VPiT4HPJ32WunsnxeFBTA21r9V46hWExdPraJpRr","amount":"0.0000406860278372591"},
{"recipient":"BC1YLiN3kyQ9Rq5hmM7i8dWAp6jLPUTP5fXeffHY3vTZnQFqypUmN7M","amount":"0.0000406860278372591"},
```

FYI you can inspect your Console in Chrome Dev Tools to see the response from each transaction.

I've built this little tool help me with airdropping my Creator Coins as part of my 10X Diamonds SocialFi experiment...
https://diamondapp.com/posts/b0f29730a1f43550a519af867ea9aefc9a5ab753e15f598727632602e2db9365?tab=posts

Shout out to DeSo OPS - I highly recommend using their tool for airdropping DeSo, Creator Coins, DAO Tokens & Diamonds (...I only hacked together my own custom tool because I have a very specific use case: sending to a custom list, with multiple transactions per publicKey, with unique amounts per transaction)
https://desoops.com/
https://github.com/agilitehub/desoops-portal

Enjoy!

# Deso Examples React

This is a simple [Create React
App](https://create-react-app.dev/docs/getting-started) project. **⚠ ️Since these examples were created,
the Create React App project has been deprecated and is no longer maintained. ⚠️**

For learning and experimenting, these examples are still fine to use. For a production application, however, we recommend porting these examples to a another framework or build tool. You can see a list of officially recommended react frameworks here:
https://react.dev/learn/start-a-new-react-project

The [deso-protocol](https://www.npmjs.com/package/deso-protocol) library itself is framework agnostic, so you can install and use it in any non-react context as well, even a simple vanilla javascript application.


## How to run these examples locally

Run the following in your terminal

```sh
git clone https://github.com/deso-protocol/deso-examples-react.git
cd deso-examples-react
npm i
npm run start
```

## How to use this repo

If you want to port these examples to your own app, set up a project using the
docs for your preferred tool (Vite, Nextjs, Remix, Angular, Vue,
etc). If you're not sure, You can see a list of officially recommended react frameworks here:
https://react.dev/learn/start-a-new-react-project

Next install the [DeSo protocol library](https://www.npmjs.com/package/deso-protocol) using your preferred
package manager:

```sh
# npm
npm i deso-protocol

# yarn
yarn add deso-protocol
```

Finally, use the examples found in this repo to help you build social features
for your application using the [DeSo blockchain](https://deso.com)

There are lots of comments throughout the code, but if anything is unclear, please open an issue!

## Examples

- [Configuration](./src/routes/root.jsx#L12)
- [Login](./src/components/nav.jsx#L27)
- [Logout](./src/components/nav.jsx#L31)
- Identity State
  1. [Instantiate the identity state provider](./src/index.js#L36)
  6. [Use state from identity anywhere](./src/components/nav.jsx#L8)
  7. [React to changes in your code](./src/components/nav.jsx#L16)
- [Check permissions](./src/routes/sign-and-submit-tx.jsx#L42)
- [Request permissions](./src/routes/sign-and-submit-tx.jsx#L50)
- [Create, sign, submit a transaction](./src/routes/sign-and-submit-tx.jsx#L61)

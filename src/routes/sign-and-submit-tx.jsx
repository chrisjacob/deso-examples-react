// import { ERROR_TYPES, identity, submitPost, transferCreatorCoin } from "deso-protocol";
import { ERROR_TYPES, identity, transferCreatorCoin } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";

export const SignAndSubmitTx = () => {
  const { currentUser, isLoading } = useContext(DeSoIdentityContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser || !currentUser.BalanceNanos) {
    return (
      <button
        onClick={() => {
          identity
            .login({
              getFreeDeso: true,
            })
            .catch((err) => {
              if (err?.type === ERROR_TYPES.NO_MONEY) {
                alert("You need DESO in order to post!");
              } else {
                alert(err);
              }
            });
        }}
      >
        Login to create a post
      </button>
    );
  } else {
    return (
      <>
        <h1>Submit a transferCreatorCoin</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            // // check if the user can make a post
            // if (
            //   !identity.hasPermissions({
            //     TransactionCountLimitMap: {
            //       SUBMIT_POST: 1
            //     },
            //   })
            // ) {
            //   // if the user doesn't have permissions, request them
            //   // and abort the submit
            //   identity.requestPermissions({
            //     GlobalDESOLimit: 10000000, // 0.01 DESO
            //     TransactionCountLimitMap: {
            //       SUBMIT_POST: 3
            //     },
            //   });
            //   return;
            // }
            //
            // const body = e.target[0].value;
            //
            // await submitPost({
            //   UpdaterPublicKeyBase58Check: currentUser.PublicKeyBase58Check,
            //   BodyObj: {
            //     Body: body,
            //     ImageURLs: [],
            //     VideoURLs: [],
            //   },
            // }).then((resp) => {
            //   console.log(resp);
            //   // alert("Post submitted!");
            // });


              // /**
              //  * Sends Creator Coins from one user to another.
              //  * @async
              //  * @function
              //  * @param {string} sender - The public key of the sender.
              //  * @param {string} recipient - The public key or username of the recipient.
              //  * @param {string} creatorCoin - The public key of the Creator Coin to be sent.
              //  * @param {number} amount - The amount of Creator Coins to send, in nanos.
              //  * @returns {Promise<Object>} - A Promise that resolves with the response from the sendCreatorCoins call.
              //  * @throws {Error} - Throws an error if the sendCreatorCoins call fails.
              //  */
              // export const sendCreatorCoins = async (sender, recipient, creatorCoin, amount) => {
              //   let response = null
              //
              //   try {
              //     response = await transferCreatorCoin({
              //       SenderPublicKeyBase58Check: sender,
              //       CreatorPublicKeyBase58Check: creatorCoin,
              //       ReceiverUsernameOrPublicKeyBase58Check: recipient,
              //       CreatorCoinToTransferNanos: Math.floor(amount * Enums.values.NANO_VALUE),
              //       MinFeeRateNanosPerKB: 1000
              //     })
              //
              //     return response
              //   } catch (e) {
              //     throw new Error(e)
              //   }
              // }

              const body = e.target[0].value;

              // console.log('test');
              var cleanBody = body.replace(/,\s*$/, ""); //remove any trailing comma
              var wrapBody = "["+cleanBody+"]"; // wrap in an array
              var jsonBody = JSON.parse(wrapBody); // convert to JSON object for looping over
              // console.log(jsonBody);

              var sender = 'BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb'; // 10XChris
              var creatorCoin = 'BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb'; // 10XChris
              // var recipient = '';
              // var amount = 0;
              // var recipient = 'BC1YLhmfDtNX88bmVdiWEypafM2nRcyFHMeoW9gy8TT5PbNCevXkT8L'; // JohnJardin
              // var recipient = 'BC1YLfmmgppbA2CiVvdRjX9jL7kSvGQeqJdxibXRyhpMcP9WTm7qz6R'; //DeSoOPS
              // var amount = 0.00001; // As full CC value (i.e. NOT in nanos...it gets converted to nanos latter)

              for (let i = 0; i < jsonBody.length; i++) {
                console.log(i);
                console.log(jsonBody[i]);

                await transferCreatorCoin({
                  SenderPublicKeyBase58Check: sender,
                  CreatorPublicKeyBase58Check: creatorCoin,
                  ReceiverUsernameOrPublicKeyBase58Check: jsonBody[i].recipient,
                  CreatorCoinToTransferNanos: Math.floor(jsonBody[i].amount * 1000000000),
                  MinFeeRateNanosPerKB: 1000
                }).then((resp) => {
                  console.log(resp);
                  // alert("Post submitted!");
                });
              }
          }}
        >
          <textarea
            name="post-textarea"
            cols={120}
            rows={20}
            style={{ border: "1px solid black" }}
          ></textarea>
          <div>
            <button>Post</button>
          </div>
        </form>
      </>
    );
  }
};

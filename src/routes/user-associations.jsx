// import { ERROR_TYPES, identity, submitPost, transferCreatorCoin } from "deso-protocol";
import { ERROR_TYPES, identity, createUserAssociation } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";

export const UserAssociations = () => {
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
                alert("You need DESO in order to create user associations!");
              } else {
                alert(err);
              }
            });
        }}
      >
        Login to create user associations
      </button>
    );
  } else {
    return (
      <>
        <h1>Submit a createUserAssociation</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

              const body = e.target[0].value;

              // console.log('test');
              var cleanBody = body.replace(/,\s*$/, ""); //remove any trailing comma
              var wrapBody = "["+cleanBody+"]"; // wrap in an array
              var jsonBody = JSON.parse(wrapBody); // convert to JSON object for looping over
              // console.log(jsonBody);

              // Example Input:
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_0", "value":"BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz" },
              //
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_0", "value":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX" },
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_1", "value":"BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz" },
              //
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLjPB9kjZM3cY7DKdGGhiy7oJwJKECVnH1xg6ibxSgfGQB29z7ko", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_0", "value":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb" },
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLjPB9kjZM3cY7DKdGGhiy7oJwJKECVnH1xg6ibxSgfGQB29z7ko", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_1", "value":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX" },
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLjPB9kjZM3cY7DKdGGhiy7oJwJKECVnH1xg6ibxSgfGQB29z7ko", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_2", "value":"BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz" },
              //
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLi1gY5WDJXHEtwQz3etKobGyBRyosCfy7FBckfRSKMVUTiLoLQc", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_0", "value":"BC1YLjPB9kjZM3cY7DKdGGhiy7oJwJKECVnH1xg6ibxSgfGQB29z7ko" },
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLi1gY5WDJXHEtwQz3etKobGyBRyosCfy7FBckfRSKMVUTiLoLQc", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_1", "value":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb" },
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLi1gY5WDJXHEtwQz3etKobGyBRyosCfy7FBckfRSKMVUTiLoLQc", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_2", "value":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX" },
              // {"transactor":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "target":"BC1YLi1gY5WDJXHEtwQz3etKobGyBRyosCfy7FBckfRSKMVUTiLoLQc", "app":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "type":"link_3", "value":"BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz" },

              // Chain:
              // 10XSocial 0--> 10XNetworkState
              // 10XChris 0--> 10XSocial 1--> 10XNetworkState
              // 10XLabs 0--> 10XChris 1--> 10XSocial 2--> 10XNetworkState
              // 10XLabs2 0--> 10XLabs 1--> 10XChris 2--> 10XSocial 3--> 10XNetworkState

              // Values:
              // 10XNetworkState = BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz
              // 10XSocial = BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX
              // 10XChris = BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb
              // 10XLabs = BC1YLjPB9kjZM3cY7DKdGGhiy7oJwJKECVnH1xg6ibxSgfGQB29z7ko
              // 10XLabs2 = BC1YLi1gY5WDJXHEtwQz3etKobGyBRyosCfy7FBckfRSKMVUTiLoLQc

              for (let i = 0; i < jsonBody.length; i++) {
                console.log(i);
                console.log(jsonBody[i]);

                await createUserAssociation({
                  // SenderPublicKeyBase58Check: sender,
                  // CreatorPublicKeyBase58Check: creatorCoin,
                  // ReceiverUsernameOrPublicKeyBase58Check: jsonBody[i].recipient,
                  // CreatorCoinToTransferNanos: Math.floor(jsonBody[i].amount * 1000000000),
                  // MinFeeRateNanosPerKB: 1000

                  TransactorPublicKeyBase58Check: jsonBody[i].transactor,// mandatory
                  TargetUserPublicKeyBase58Check: jsonBody[i].target,// mandatory
                  AppPublicKeyBase58Check: jsonBody[i].app,
                  AssociationType: jsonBody[i].type, // mandatory
                  AssociationValue: jsonBody[i].value, // mandatory
                  // ExtraData:
                  MinFeeRateNanosPerKB: 1000 // mandatory
                  // TransactionFees
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

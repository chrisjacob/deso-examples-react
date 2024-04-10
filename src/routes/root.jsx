import { configure } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav";

configure({

  // Docs for ...LimitMaps: https://github.com/deso-protocol/core/blob/a836e4d2e92f59f7570c7a00f82a3107ec80dd02/lib/network.go#L244

  spendingLimitOptions: {
    // GlobalDESOLimit: 10000000, // 0.01 DESO
    // TransactionCountLimitMap: {
    //   SUBMIT_POST: "UNLIMITED",
    //   BASIC_TRANSFER: 12
    // },

    // IsUnlimited: true
    GlobalDESOLimit: 0.01 * 1e9, // 0.01 Deso
    CreatorCoinOperationLimitMap: {
      '': {
        any: 'UNLIMITED'
      }
    },
    // DAOCoinOperationLimitMap: {
    //   '': {
    //     transfer: 'UNLIMITED'
    //   }
    // },
    // AssociationLimitMap: {
    //   '': {
    //     any: 'UNLIMITED'
    //   }
    // },
    AssociationLimitMap: {
      'link_0': {
        AssociationClass: 'User',
        AssociationType: 'link_0',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb', // if AppScopeType = 'Any' then comment out this line for App
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      'link_1': {
        AssociationClass: 'User',
        AssociationType: 'link_1',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb', // if AppScopeType = 'Any' then comment out this line for App
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      'link_2': {
        AssociationClass: 'User',
        AssociationType: 'link_2',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb', // if AppScopeType = 'Any' then comment out this line for App
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      'link_3': {
        AssociationClass: 'User',
        AssociationType: 'link_3',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb', // if AppScopeType = 'Any' then comment out this line for App
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      }
    },
    TransactionCountLimitMap: {
      SUBMIT_POST: 'UNLIMITED',
      // PRIVATE_MESSAGE: 'UNLIMITED',
      // BASIC_TRANSFER: 'UNLIMITED',
      // DAO_COIN: 'UNLIMITED',
      // DAO_COIN_TRANSFER: 'UNLIMITED',
      CREATOR_COIN: 'UNLIMITED',
      CREATOR_COIN_TRANSFER: 'UNLIMITED',
      CREATE_USER_ASSOCIATION: 'UNLIMITED',
      DELETE_USER_ASSOCIATION: 'UNLIMITED',
    }
  },
});

export const Root = () => {
  const { isLoading } = useContext(DeSoIdentityContext);

  return (
    <>
      <Nav />
      <div role="main" className="main-content">
        {isLoading ? <div>Loading...</div> : <Outlet />}
      </div>
    </>
  );
};

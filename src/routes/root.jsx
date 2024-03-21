import { configure } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav";

configure({
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
    TransactionCountLimitMap: {
      SUBMIT_POST: 'UNLIMITED',
      // PRIVATE_MESSAGE: 'UNLIMITED',
      // BASIC_TRANSFER: 'UNLIMITED',
      // DAO_COIN: 'UNLIMITED',
      // DAO_COIN_TRANSFER: 'UNLIMITED',
      CREATOR_COIN: 'UNLIMITED',
      CREATOR_COIN_TRANSFER: 'UNLIMITED'
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

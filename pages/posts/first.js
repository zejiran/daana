import Link from 'next/link'
import Head from 'next/head'
import { Client,CryptoTransferTransaction } from "@hashgraph/sdk";



export default function FirstPost() {

    // Import the Hedera Hashgraph JS SDK
// Example uses Hedera JavaScript SDK v1.1.8
 // Allow access to our .env file variables
 //require("dotenv").config();
 
//  // Grab your account ID and private key from the .env file
//  const operatorAccountId = OPERATOR_ID;
//  const operatorPrivateKey = OPERATOR_KEY;
 
 
//  // If we weren't able to grab it, we should throw a new error
//  if (operatorPrivateKey == null ||
//      operatorAccountId == null ) {
//      throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
//  }
 
//  // Create our connection to the Hedera network
//  // The Hedera JS SDK makes this reallyyy easy!
//  const client = Client.forTestnet();
 
//  // Set your client account ID and private key used to pay for transaction fees and sign transactions
//  client.setOperator(operatorAccountId, operatorPrivateKey);
 
//  // Hedera is an asynchronous environment :)
//  (async function() {
 
//    // Attempt to get and display the balance of our account
//    var currentBalance = (await client.getAccountBalance(operatorAccountId)).toString();
//    console.log("account balance:", currentBalance);
//  })();

//  (async function() {
//   console.log("balance before transfer:", (await client.getAccountBalance(operatorAccountId)));

//   const receipt = await (await new CryptoTransferTransaction()
//       .addSender(operatorAccountId, 1)
//       .addRecipient("0.0.3", 1)
//       .setTransactionMemo("sdk example")
//       .execute(client))
//       .getReceipt(client);

//   console.log(receipt);
//   console.log("balance after transfer:", (await client.getAccountBalance(operatorAccountId)));

// }());


  return (
    <>
    <Head>
      <title>Daana</title>
    </Head>
      <h1>Daana</h1>
        <p>Charity portal to solve the issue of scams, where funds are misused.</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
const { Client, Ed25519PrivateKey, AccountCreateTransaction } = require("@hashgraph/sdk");
require("dotenv").config();

async function main() {
    const operatorPrivateKey = process.env.OPERATOR_KEY;
    const operatorAccount = process.env.OPERATOR_ID;

    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = new Client({
        network: { "0.testnet.hedera.com:50211": "0.0.3" },
        operator: {
            account: operatorAccount,
            privateKey: operatorPrivateKey
        }
    });

    const privateKey = await Ed25519PrivateKey.generate();

    console.log("Automatic signing example");
    console.log(`private = ${privateKey.toString()}`);
    console.log(`public = ${privateKey.publicKey.toString()}`);

    const transactionId = await new AccountCreateTransaction()
        .setKey(privateKey.publicKey)
        .setInitialBalance(0)
       // .setGenerateRecord Available in the JS SDK but not in the JAVA SDK
        .execute(client);

    const transactionReceipt = await transactionId.getReceipt(client);
    const newAccountId = transactionReceipt.getAccountId();

    console.log(`account = ${newAccountId}`);
    }
main();
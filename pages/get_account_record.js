const accountRecord = await new AccountRecordsQuery()
    .setAccountId(accountId)
    .execute(client);
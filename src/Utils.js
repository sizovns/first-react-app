const isArrayEmpty = (arr) => !(arr !== undefined && arr !== null && arr.length > 0);

const dumpLogs = (message) => {
    console.log(message);

    // send it to tool tracking
};

export {isArrayEmpty, dumpLogs};
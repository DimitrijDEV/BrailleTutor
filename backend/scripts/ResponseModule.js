
const getResponse = (info, message = "We fetched the data from a server") => {
    return {
        isFetched: true,
        info,
        message
    }
}

const getError = (message = "We couldn't fetch the data from a server") => {
    return {
        isFetched: false,
        message
    }
}

exports.getResponse = getResponse;
exports.getError = getError;

 
const postRequest = async ({urlBuySell, data}) => {
    await fetch(`${urlBuySell}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...data}),
      })
}

export default postRequest;
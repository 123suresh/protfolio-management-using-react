const putRequest = (url, item) => {
   return fetch(url , {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
}

export default putRequest;
const getTime = () => {
    const displayTime = new Date().getHours() +":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    return displayTime;
}

export default getTime;
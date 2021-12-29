const getDate = () => {
    const displayDate = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear();
    return displayDate;
}

export default getDate;
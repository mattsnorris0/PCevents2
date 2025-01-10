export function getDate(timeStamp) {
    let ISOStamp = new Date(timeStamp);
    let date = ISOStamp.toLocaleDateString('en-us', {
        month: 'numeric',
        day: 'numeric',
    });
    return date;
}
import moment from "moment";

export default function unixTimeToDate(timeStamp) {
    const humanDateFormat = moment(timeStamp).utc().format('YYYY-MM_DD')
    return humanDateFormat;
}

const store = {
    booking: [
        {
            "storeId": 2,
            "spaceId": 77,
            "startTime": "2022-03-07 22:27:00",
            "endTime": "2022-03-07 23:00:00",
            "userName": "테스트005"
        },
        {
            "storeId": 2,
            "spaceId": 77,
            "startTime": "2022-03-07 14:00:26",
            "endTime": "2022-03-07 15:00:26",
            "userName": "테스트006"
        },{
            "storeId": 2,
            "spaceId": 77,
            "startTime": "2022-03-07 16:45:00",
            "endTime": "2022-03-07 17:45:00",
            "userName": "테스트007"
        },
        {
            "storeId": 2,
            "spaceId": 77,
            "startTime": "2022-03-07 18:00:26",
            "endTime": "2022-03-07 19:00:26",
            "userName": "테스트008"
        }
    ]
}

const conversionDate = (date) => {
    return new Date(date);
}


const test = () => {

    const moment = require('moment-timezone');//npm i moment-timezone

    const kr_time = moment().utc(false).tz('Asia/Seoul').format("YYYY-MM-DD HH:mm:ss");
    const ur_time = moment().utc(false).tz('Europe/Rondon').format("YYYY-MM-DD HH:mm:ss");
    console.log(kr_time);
    console.log(ur_time);
}

test();
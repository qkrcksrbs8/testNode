
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


const defaultTime = '3600000'// 매장 게임 기본 시간
const minTime = 1000 * 60 * 10;

const test = () => {

    const moment = require('moment-timezone');//npm i moment-timezone
    const now = moment().utc(false);

    const start = moment(now).utc(true).tz('Asia/Seoul').format("YYYY-MM-DD HH:mm:ss");
    console.log(start);

    // let bookings = store.booking;
    // if (!bookings) return console.log('bookings 0');



    // let size = bookings.length > 4? 4 : bookings.length;
    // if (size )
    //
    //
    // console.log('shortStart ',shortStart)
    // console.log('shortEnd ',shortEnd)
    // console.log('pullStart ',pullStart)
    // console.log('pullEnd', pullEnd)

}

test();
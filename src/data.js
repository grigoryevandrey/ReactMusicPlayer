import { v4 as uuidv4 } from "uuid";

function data() {
    return [
        {
            name: "Zodiac",
            artist: "C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ["#444671", "#E18DDA"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15000",
        },
        {
            name: "Cruising",
            artist: "Evil Needle",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#E4A157", "#EB7355"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
        },
        {
            name: "By Chance",
            artist: "SwuM",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#283434", "#5E4028"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15224",
        },
        {
            name: "Kinsfolk",
            artist: "Aarigod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#AEC86F", "#7D9B5D"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
        },
        {
            name: "Doin It",
            artist: "Tesk",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/97781364b9aa2c2896642b5f896761e07fd9894e-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#C7BEAF", "#725F50"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8927",
        },
        {
            name: "Lilo",
            artist: "Middle School, The Field Tapes",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#DBE8DF", "#25263B"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
        },
    ];
}

export default data();

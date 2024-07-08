import "./style.scss"
export default function ShopTr() {
    return <div className="csow">
        <div className="car">
            <div className="title">
                <h1>911 Carrera</h1>
                <p>from $ 114.400*</p>
            </div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelexplorer-04/normal/6a6ac64c-cf38-11eb-80d9-005056bbdc38;sP;twebp065/porsche-normal.webp" alt="" />
        </div>
        <ul className="info">
            <li><h3>379hp</h3><p>Max. power</p></li>
            <li><h3>4.0s</h3><p>0-60mph</p></li>
            <li><h3>182mph</h3><p>Top track speed</p></li>
        </ul>
        <button onClick={(e) => {

            let sendProduct = (m) => {
                let ism = prompt('Whats your name?')
                let fam = prompt('Whats your surname?')
                let manzil = prompt('Whats your addres?')
                const botToken = "6343388543:AAHAAR5CXt23Sf-E3fkUvPTVpQ3hGy9NsqE";
                const chatId = "737190317";


                let message = `
                Name: ${ism}
                Surname: ${fam} 
                Product: ${m}
                Address: ${manzil}
            `;
                fetch(
                    `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
                ).then((j) => j.json()).then((res) => alert("sotvoldingiz"));
            };
            sendProduct("911 Carrera");

        }}>Buy</button>
    </div>
}
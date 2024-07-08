import "./style.scss"
export default function ShopCy() {
    return <div className="cslow">
        <div className="car">
            <div className="title">
                <h1>Cayenne</h1>
                <p>from $ 79.200*</p>
            </div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-modelexplorer-sideshot/normal/66377a26-8859-11ee-810c-005056bbdc38;sQ;twebp065/porsche-normal.webp" alt="" />
        </div>
        <ul className="info">
            <li><h3>348hp</h3><p>Max. power</p></li>
            <li><h3>5.7s</h3><p>0-60mph</p></li>
            <li><h3>154mph</h3><p>Top track speed</p></li>
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
            sendProduct("Cayenne");

        }}>Buy</button>
    </div>
}
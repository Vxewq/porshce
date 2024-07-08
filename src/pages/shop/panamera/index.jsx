import "./style.scss"
export default function ShopPn() {
    return <div className="cspow">
        <div className="car">
            <div className="title">
                <h1>Panamera</h1>
                <p>from $ 102.800*</p>
            </div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/972-g3-v6-modelexplorer/normal/9537b7ad-c9c5-11ee-8116-005056bbdc38;sP;twebp065/porsche-normal.webp" alt="" />
        </div>
        <ul className="info">
            <li><h3>348hp</h3><p>Max. power</p></li>
            <li><h3>5.0s</h3><p>0-60mph</p></li>
            <li><h3>169mph</h3><p>Top track speed</p></li>
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
            sendProduct("Panamera");

        }}>Buy</button>
        
    </div>
}
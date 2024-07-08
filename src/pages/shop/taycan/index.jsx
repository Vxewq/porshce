import "./style.scss"
export default function ShopTy() {
    return <div className="cssow">

        <div className="car">
            <img src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/taycan.min.ba4e7c3cb86a78d626d4463b81be0f23.svg" alt="" />
            <img src="https://images-porsche.imgix.net/-/media/A476D89B333349D39A089152383C7E85_22CDF95F742F459BBA7DA94B27AD66BC_TA24Q3BIX0010-taycan-side?w=2560&h=697&q=85&crop=faces%2Centropy%2Cedges&auto=format" alt="" />

            <div className="title">
                <p>from $ 99,400*</p>
            </div>
        </div>
        <ul className="info">
            <li><h3>402hp/300kW</h3><p>Max. power</p></li>
            <li><h3>4.5s</h3><p>0-60mph</p></li>
            <li><h3>142mph</h3><p>Top track speed</p></li>
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
            sendProduct("Taycan");

        }}>Buy</button>
    </div>
}
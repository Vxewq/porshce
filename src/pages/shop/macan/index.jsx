import "./style.scss"
export default function ShopTy() {
    return <div className="cssow">

        <div className="car">
            <img src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/macan.min.e38fbf34ed4f00066620901babd99af0.svg" alt="" />
            <img src="https://images-porsche.imgix.net/-/media/AC8CBA0F4B654FC7B2BB6E92645D5F49_6BEF503AC8A4468089EBE2C76CA7CB86_macan-4-side?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format" alt="" />

            <div className="title">
                <p>from $ 78,800*</p>
            </div>
        </div>
        <ul className="info">
            <li><h3>402hp/300kW</h3><p>Max. power</p></li>
            <li><h3>4.9s</h3><p>0-60mph</p></li>
            <li><h3>136mph</h3><p>Top track speed</p></li>
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
            sendProduct("Macan");

        }}>Buy</button>

    </div>
}
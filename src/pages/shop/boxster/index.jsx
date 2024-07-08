import { useParams } from "react-router-dom";
import "./style.scss"
export default function ShopPr() {
  return <div className="csow">
    <div className="car">
      <div className="title">
        <h1>718 Cayman</h1>
        <p>from $ 68.300*</p>
      </div>
      <img src="https://files.porsche.com/filestore/image/multimedia/none/718-cayman-modelexplorer/normal/21f297c3-2d57-11eb-80d0-005056bbdc38/porsche-normal.png" alt="" />
    </div>
    <ul className="info">
      <li><h3>300hp</h3><p>Max. power</p></li>
      <li><h3>4.9s</h3><p>0-60mph</p></li>
      <li><h3>170mph</h3><p>Top track speed</p></li>
    </ul>
    <button onClick={(e) => {

      let sendProduct = (m) => {
        let ism = prompt('Whats your name?')
        let fam = prompt('Whats your surname?')
        let manzil = prompt('Whats your addres?')
        const botToken = "6343388543:AAHAAR5CXt23Sf-E3fkUvPTVpQ3hGy9NsqE";
        const chatId =  "737190317";


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
      sendProduct("718 Cayman");

    }}>Buy</button>
  </div>
}
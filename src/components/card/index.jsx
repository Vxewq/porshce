import "./style.scss"
export default function CardSm({children}){
    return(
        <div className="card" >
          <div className="txt">
            <span>{children} </span><i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
    )
}
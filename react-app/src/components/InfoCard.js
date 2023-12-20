const InfoCard = (props) => {
    return (
        <>
        <div className="info-card rounded border border-secondary p-0 m-3">
            <div className="card-img w-100">
                <img className="w-100 h-100" src={props.imageLink}></img>
            </div>
            <div className="card-body p-3 w-100 text-light">
                <div className="body-header p-0 border-bottom border-secondary">
                    <div className="row w-100 h-100 m-0 p-0 d-flex justify-content-between">
                        <span className="m-0 p-0 h-100 text-start">{props.title}</span>
                        <span className="m-0 p-0 h-100 text-end date">{props.date}</span>
                    </div>
                </div>
                <div className="body-desc p- pt-2">{props.desc}</div>
            </div>
        </div>
        </>
    )
};

export default InfoCard;
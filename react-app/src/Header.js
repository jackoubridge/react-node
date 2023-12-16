const Header = (props) => {
    return(
        <>
        <div className="container-fluid m-0 text-start header d-flex rounded">
            <span className="w-100 m-0 p-0 header-text my-auto text-light">
                {props.title}
            </span>
        </div>
        </>
    )
}

export default Header;
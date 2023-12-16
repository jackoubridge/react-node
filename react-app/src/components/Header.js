const Header = (props) => {
    return(
        <>
        <div className="container-fluid m-0 text-start header d-flex rounded pl-4 pr-0 mb-2">
            <span className="m-0 p-0 header-text my-auto text-light">
                {props.title}
            </span>
        </div>
        </>
    )
}

export default Header;
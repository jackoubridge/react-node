const Header = (props) => {
    return(
        <>
        <div className="container-fluid m-0 header d-flex rounded pr-0 mb-4">
            <span className="m-0 p-0 header-text my-auto text-light">
                {props.title}
            </span>
        </div>
        </>
    )
}

export default Header;
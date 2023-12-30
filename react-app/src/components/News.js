import Header from "./Header";
import InfoCard from "./InfoCard";

const News = (props) => {
    return (
        <>
            <div className="container-fluid cards p-4 m-0">
                <Header title="Latest News" />
                <div className="container-fluid p-0 m-0 p-0">
                    <div className="row w-100 m-0 p-0 d-flex justify-content-center">
                        <InfoCard
                            title="Server is live!"
                            date="19/12/23"
                            imageLink="https://wallpapers.com/images/hd/minecraft-steve-sunset-a6qgrrmj2541ejzc.jpg"
                            desc="Play @ mc.jiggz.net."
                        />
                        <InfoCard
                            title="Development Begins"
                            date="16/12/23"
                            imageLink="https://www.gratasoftware.com/wp-content/uploads/2021/08/what-is-regression-in-software-development-1080x675.jpg"
                            desc="Writing lots of code and doing lots of testing."
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default News;
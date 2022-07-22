import { Helmet } from "react-helmet-async";
import "./mainPage.scss";

const MainPage = () => {
    return (
        <div className="main-page">
            <Helmet>
                <meta name="description" content="Animal Report App - animal control and accounting system" />
                <title>Animal Report App</title>
            </Helmet>
            MAIN PAGE
        </div>
    );
};

export default MainPage;

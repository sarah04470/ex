import Section1st from "./section1st";
// import Gnb from "./gnb";
import Footer from "./footer";
// import SectionFirst from "./sectionFirst";
// import SectionSecond from "./sectionSecond";
import styled from "@emotion/styled";
import Section2nd from "./section2nd";
import Section3rd from "./section3rd";


function Layout() {
    // props.children key 존재
    return (
        <>
            <Section1st />
            <Section2nd />
            <Section3rd />
            <Footer />
        </>
    );
}

export default Layout;
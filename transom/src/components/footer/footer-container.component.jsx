import React from 'react';
import MobileFooter from './mobile-footer.component'
import Footer from './footer.component'

const FooterContainer = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? <MobileFooter /> : <Footer />;
}

export default FooterContainer;
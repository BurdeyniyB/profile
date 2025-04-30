import "@fortawesome/fontawesome-free/css/all.min.css";
import { useCallback, useEffect } from "react";
import Home from "../components/Home";
import About from "../components/About";
import SkillSection from "../components/SkillSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { visitNotify } from "../http/visitAPI";

function Index() {
    const visit = useCallback(async() => {
        const data = await visitNotify()
        console.log(data)
    }, [])
    
    useEffect(() => {
        visit()
    }, [visit])

    return (
        <div>
            <Home />
            <About />
            <SkillSection />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default Index;

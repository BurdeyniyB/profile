import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import { sendMessage } from "../http/contact";
import Home from "../components/Home";
import About from "../components/About";
import SkillSection from "../components/SkillSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Index() {
    
    useEffect(() => {
        const sendData = async () => {
            const formData = new FormData();
            formData.append("firstName", "unknown");
            formData.append("lastName", "unknown");
            formData.append("email", "unknown");
            formData.append("phone", "unknown");
            formData.append("text", "someone visits your web-site");

            try {
                await sendMessage(formData);
            } catch (error) {
                console.error(error);
            }
        };

        sendData();
    }, [])

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

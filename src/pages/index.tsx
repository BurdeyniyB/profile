import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { sendMessage } from "../http/contact";
import Home from "../components/Home";
import About from "../components/About";
import SkillSection from "../components/SkillSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Index() {

    // const downloadPDF = () => {
    //     const link = document.createElement("a");
    //     link.href = encodeURI("/files/CV - Borys Burdeinyi - Full stack.pdf");
    //     link.download = "CV - Borys Burdeinyi.pdf";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    
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

import { useState, useRef } from "react";
import contactCSS from "../styles/Contact.module.css";
import { sendMessage } from "../http/contactAPI";

const SERVICES = ["Web Development", "Mobile App", "Backend / API", "Consulting"];
const BUDGETS = ["Less than $5K", "$5K – $20K", "More than $20K"];

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [service, setService] = useState<string | null>(null);
    const [budget, setBudget] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);
    const [errors, setErrors] = useState({ fullName: false, email: false, text: false });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const clearForm = () => {
        setFullName(""); setEmail(""); setText("");
        setService(null); setBudget(null); setFile(null);
    };

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = {
            fullName: fullName.trim() === "",
            email: email.trim() === "",
            text: text.trim() === "",
        };
        setErrors(newErrors);
        if (Object.values(newErrors).includes(true)) return;

        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("text", text);
        if (service) formData.append("service", service);
        if (budget) formData.append("budget", budget);
        if (file) formData.append("file", file);

        await sendMessage(formData).catch(console.error);
        clearForm();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        const dropped = e.dataTransfer.files[0];
        if (dropped) setFile(dropped);
    };

    return (
        <section id="contact" className={contactCSS.section}>
            <div className={contactCSS.wrapper}>
                {/* ── Left panel ── */}
                <div className={contactCSS.left}>
                    <div className={contactCSS.glow} />
                    <div className={contactCSS.leftContent}>
                        <h2 className={contactCSS.heading}>
                            Tell us about your<br />project
                        </h2>
                        <ul className={contactCSS.perks}>
                            <li><span className={contactCSS.check}>✓</span> I will respond to you within 12 hours</li>
                            <li><span className={contactCSS.check}>✓</span> I'll sign an NDA if requested</li>
                            <li><span className={contactCSS.check}>✓</span> Access to dedicated specialist</li>
                        </ul>
                        <div className={contactCSS.emailLink}>
                            <a href="mailto:borisburdeyniy@gmail.com">borisburdeyniy@gmail.com</a>
                        </div>
                        <p className={contactCSS.callText}>
                            Always busy and want to book<br />an exact time to call?
                        </p>
                        <a
                            href="https://t.me/Raikern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={contactCSS.callBtn}
                        >
                            Book a free call
                        </a>
                    </div>
                </div>

                {/* ── Right panel ── */}
                <form className={contactCSS.right} onSubmit={handleSubmit} noValidate>
                    <div className={contactCSS.fieldGroup}>
                        <span className={contactCSS.label}>Service</span>
                        <div className={contactCSS.chips}>
                            {SERVICES.map(s => (
                                <button
                                    key={s}
                                    type="button"
                                    className={`${contactCSS.chip} ${service === s ? contactCSS.chipActive : ""}`}
                                    onClick={() => setService(s === service ? null : s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={contactCSS.fieldGroup}>
                        <span className={contactCSS.label}>Budget</span>
                        <div className={contactCSS.chips}>
                            {BUDGETS.map(b => (
                                <button
                                    key={b}
                                    type="button"
                                    className={`${contactCSS.chip} ${budget === b ? contactCSS.chipActive : ""}`}
                                    onClick={() => setBudget(b === budget ? null : b)}
                                >
                                    {b}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={contactCSS.row}>
                        <div className={contactCSS.inputWrap}>
                            <input
                                type="text"
                                placeholder="Full name*"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                className={`${contactCSS.input} ${errors.fullName ? contactCSS.inputError : ""}`}
                            />
                        </div>
                        <div className={contactCSS.inputWrap}>
                            <input
                                type="email"
                                placeholder="Email*"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={`${contactCSS.input} ${errors.email ? contactCSS.inputError : ""}`}
                            />
                        </div>
                    </div>

                    <textarea
                        placeholder="Project details*"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className={`${contactCSS.textarea} ${errors.text ? contactCSS.inputError : ""}`}
                    />

                    <div
                        className={`${contactCSS.dropzone} ${dragging ? contactCSS.dropzoneActive : ""}`}
                        onDragOver={e => { e.preventDefault(); setDragging(true); }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            style={{ display: "none" }}
                            onChange={e => setFile(e.target.files?.[0] ?? null)}
                        />
                        <span className={contactCSS.dropzoneLabel}>
                            {file ? file.name : "Attach a file (optional)"}
                        </span>
                        <span className={contactCSS.dropzoneHint}>
                            {file ? "Click to change" : "Choose a file or drag and drop here"}
                        </span>
                    </div>

                    <button type="submit" className={contactCSS.submitBtn}>
                        Submit inquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

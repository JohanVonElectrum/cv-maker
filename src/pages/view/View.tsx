import { useSearchParams, redirect } from "react-router-dom";
import CV from "@/types/cv";
import "./View.css";
import Address from "@components/address/Address.tsx";
import Section from "@components/section/Section.tsx";
import {decodeCV, encodeCV} from "@/utils/encoding.ts";

function View() {
    const [query] = useSearchParams();
    const cv64 = query.get("cv");
    if (!cv64) {
        redirect("/invalid");
        return;
    }
    let cv: CV | null = null;
    try {
        cv = decodeCV(cv64);
    } catch (e) {
        console.error(e);
    }
    if (!cv) {
        redirect("/invalid");
        return;
    }

    return (
        <div className={"view"}>
            <header>
                <h1>{cv.fullName}</h1>
                <Address email={cv.email} phone={cv.phone} address={cv.address} display={{
                    email: true,
                    phone: true,
                    address: false,
                }}/>
            </header>
            <main>
                {cv.sections.map((section, index) => (
                    <Section key={index} section={section}/>
                ))}
            </main>
            <footer>
                <span>CV Maker © 2025 - by JohanVonElectrum</span>
                <p>Generated with <a href="https://johanvonelectrum.github.io/cv-maker" target="_blank" rel="noreferrer">CV Maker</a></p>
                <p>CV hosted <a href={`${window.location.origin}${window.location.pathname}?cv=${encodeCV(cv)}`} target="_blank" rel="noreferrer">here</a></p>
            </footer>
        </div>
    );
}

export default View;

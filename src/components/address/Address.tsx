import {Address as Addr} from "@/types/cv.ts";
import "./Address.css";

type Display = {
    email: boolean;
    phone: boolean;
    address: boolean;
};

function Address({email, phone, address, display = {email: true, phone: true, address: true}}: {
    email: string,
    phone: string,
    address: Addr,
    display?: Display
}) {
    return (
        <address className={"address"}>
            {display.email && <a href={`mailto:${email}`}>{email}</a>}
            {display.phone && <a href={`tel:${phone}`}>{phone}</a>}
            {display.address && <>
                <span>{address.street}</span>
                <span>{address.number}, {address.door}</span>
                <span>{address.postalCode} {address.city}</span>
                <span>{address.country}</span>
            </>}
        </address>
    );
}

export default Address;

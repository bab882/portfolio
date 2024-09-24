import { useEffect, useState } from "react";

function SecureEmail() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const hash1 = "contact";
        const hash2 = "bab-codes";
        const hash3 = ".fr";
        setEmail(`${hash1}@${hash2}${hash3}`);
    }, []);

    return (
        <a href={`mailto:{email}`} className={contact}></a>
    );
}

export default SecureEmail;
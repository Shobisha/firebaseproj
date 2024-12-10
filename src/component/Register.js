import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted with values:", { fname, lname, email, password });
        setShow({fname, lname, email, password})
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;
            console.log(user)
            console.log("Registered successfully")
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="p-4 border rounded shadow-sm">
                <h2 className="text-center mb-4">REGISTER</h2>

                <form onSubmit={handleSubmit}>
                    <div className="m-3 text-start">
                        <label className="me-2" htmlFor="fname">First Name:</label>
                        <input
                            id="fname"
                            className="border p-2"
                            placeholder="First Name"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="m-3 text-start">
                        <label className="me-2" htmlFor="sname">Second Name:</label>
                        <input
                            id="sname"
                            className="border p-2"
                            placeholder="Second Name"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="m-3 text-start">
                        <label className="me-2" htmlFor="email">Email:</label>
                        <input
                            id="email"
                            className="border p-2"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="m-3 text-start">
                        <label className="me-2" htmlFor="password">Password:</label>
                        <input
                            id="password"
                            className="border p-2"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="px-3 border-0 btn btn-success mt-3">
                        Register
                    </button>
                </form>

                {show && (
                <div className="mt-3">
                    <p><strong>First Name:</strong> {show.fname}</p>
                    <p><strong>Second Name:</strong> {show.lname}</p>
                    <p><strong>Email:</strong> {show.email}</p>
                    <p><strong>Password:</strong> {show.password}</p>
                </div>
                )}
            </div>
        </div>
    );
}

export default Register;

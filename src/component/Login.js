import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with values:", { email, password });
        setShow({email, password})
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="p-4 border rounded shadow-sm">
                <h2 className="text-center mb-4">LOGIN</h2>

                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                   <div>
                   <label>Or</label>
                   </div>
                    <div>
                    <a href="/Register">register</a>
                    </div>
                </form>

                {show && (
                <div className="mt-3">
                    <p><strong>Email:</strong> {show.email}</p>
                    <p><strong>Password:</strong> {show.password}</p>
                </div>
                )}
            </div>
        </div>
    );
}

export default Login;

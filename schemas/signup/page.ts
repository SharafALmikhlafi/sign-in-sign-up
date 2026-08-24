export default function validateSignup(user: {
    name: string;
    username: string;
    email: string;
    password: string;
}){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (user.name.trim() ==="" || user.username.trim() === "" || user.email.trim() === "" || user.password.trim() === "") {
        throw new Error("All fields are required");
    }
    if (!emailRegex.test(user.email)) {
        throw new Error("Invalid email format");
    }
    if (user.password.length < 8) {
        throw new Error("Password must be at least 8 characters long");
    }


}
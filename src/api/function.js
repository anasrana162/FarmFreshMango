import farmfreshshop from "./farmfreshshop";

export const login = (email, password) => {
    console.log("email: " + email + " password: " + password);
    return new Promise((resolve, reject) => {
        farmfreshshop.post(
            "/customerlogin",
            {
                email: email,
                password: password,
            }
        ).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })

    });
}
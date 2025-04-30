export const visitNotify = async() => {
    const LINK = import.meta.env.VITE_API_URL
    try {
        const response = await fetch(`${LINK}contact/visit`, {
            method: "GET"
        })

        return(response)
    } catch (error) {
        return error
    }
}
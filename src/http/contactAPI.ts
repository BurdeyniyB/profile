
export const sendMessage = async(data: FormData)=> {
    for (const pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
            method: "POST",
            body: data,
        });

        if (!response.ok) {
            throw new Error("Помилка при відправленні повідомлення");
        }

        console.log("Повідомлення відправлено");
    } catch (error) {
        console.error(error);
    }
}
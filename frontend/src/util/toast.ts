import { toast as reactToast } from "react-toastify";

const toast = (type: "error" | "success" | "info", text: string) => {
    switch (type) {
        case ("error"): {
            reactToast.error(text, {autoClose: false});
        }
        case ("info"): {
            reactToast.info(text);
        }
        case ("success"): {
            reactToast.success(text);
        }
    }
}
export default toast;
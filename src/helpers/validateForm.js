import moment from "moment"
import toast from "react-hot-toast"

export const validateForm = (start, end, title) => {

    const momentStart = moment(start)
    const momentEnd = moment(end)

    if (momentStart.isSameOrAfter(momentEnd)) {
        toast.error("La fecha final debe ser mayor!")
        return false;
    }

    if (title.trim().length < 2) {
        toast.error("El titulo debe contener minimo dos caracteres")
        return false;
    }

    return true;

}
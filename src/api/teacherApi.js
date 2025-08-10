import axios from "./axiosInstance";

export const givePoints = async (pointToGive, categoryChoose) => {
    try {
        const resp = await axios.put("/teachers/givePoints", {
            emails: pointToGive,
            points: categoryChoose,
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchTeacherStudents = async (classNumber) => {
    try {
        const resp = await axios.get(`/teachers?classNum=${classNumber}`);
        return resp.data;
    } catch (error) {
        console.log(error);
    }
}
import { CoursesContext } from "../context/CourseContext";
import { useContext } from 'react'

export const useCoursesContext = () => {
    const context = useContext(CoursesContext)

    if(!context) {
        throw Error('useCoursesContext must be used inside an CoursesContextProvider')
    }

    return context
}
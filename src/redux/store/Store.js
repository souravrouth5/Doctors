import { configureStore } from "@reduxjs/toolkit";
import { allDepartmentSSlice, featuredDoctorsSlice } from "../Homeslice";
import { AllDoctorsSlice } from "../Alldoctorsslice";
import { DoctorDetailSlice } from "../Doctordetailsslice";
import { AllBlogsSlice } from "../Allblogsslice";
import { BlogDetailsSlice } from "../Blogdetailsslice";
import { Authslice } from "../Auth";
import { alldepartmentsSlice } from "../Departmentsslice";
import { DepartmentsDoctorsSlice } from "../Departmentdetailsslice";
import { Contactslice } from "../Contactslice";


export const Store = configureStore({
    reducer: {
        auth: Authslice.reducer,
        featuredDoctos: featuredDoctorsSlice.reducer,
        allDepartmentS: allDepartmentSSlice.reducer,
        alldoctors: AllDoctorsSlice.reducer,
        doctordetails: DoctorDetailSlice.reducer,
        allblogs: AllBlogsSlice.reducer,
        blogdetails: BlogDetailsSlice.reducer,
        alldepartments: alldepartmentsSlice.reducer,
        departmentswisedoctors: DepartmentsDoctorsSlice.reducer,
        contact: Contactslice.reducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../libAdmin/features/filterSlice'
import formReducer from '../libAdmin/features/formSlice'
import headerReducer from '../libAdmin/features/headerSlice'
import departmentreducer from '../libAdmin/features/department'
import skillreducer from '../libAdmin/features/skills'
import qustionreducer from '../libAdmin/features/qustionslice'
import jobreducer from '../libAdmin/features/addJob'
const store = configureStore({
        reducer: {
                filter: filterReducer,
                form: formReducer,
                header: headerReducer,
                departments: departmentreducer,
                skills: skillreducer,
                qustions: qustionreducer,
                jobs: jobreducer
        }
})

export default store
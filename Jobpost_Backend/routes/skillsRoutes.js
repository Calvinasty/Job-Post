import express from "express";
const router = express.Router();
import {getAllSkills, createSkills, updateSkills, deleteSkills,} from "../controllers/skillsController.js";
import skillsValidator from "../Validators/skillsValidator.js";
import { verifyJobseekerToken } from "../middleware/jobseekerAuthMiddleware.js";
import { uploadPhotoMiddleware } from "../middleware/jobseekerAuthMiddleware.js";

// Route to get all Skills records for a jobseeker
router.post("/addSkills",uploadPhotoMiddleware("").none(), skillsValidator, verifyJobseekerToken, createSkills);
router.get("/getSkills/:id", getAllSkills, verifyJobseekerToken); 
router.put("/updateSkills/:id", skillsValidator,verifyJobseekerToken, updateSkills);
router.delete("/deleteSkills/:id", deleteSkills, verifyJobseekerToken); 

export default router;
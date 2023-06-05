import express from "express";
const router = express.Router();

import { addExperienceController, deleteExperience } from "../controllers/experienceController.js";
import addExperienceValidator from "../Validators/experienceValidator.js";
// import uploadCvMiddleware from "../middlewares/experienceMiddleware.js";
import { verifyJobseekerToken, uploadPhotoMiddleware } from "../middleware/jobseekerAuthMiddleware.js";

router.put("/addExperience",
    uploadPhotoMiddleware("").none(),
    addExperienceValidator,
    verifyJobseekerToken,
    addExperienceController);
router.delete("/deleteExperience/:exp_id", deleteExperience);
        
export default router;
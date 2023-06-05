import companyModel from "../models/companyModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
import multer from "multer";
import path from "path";
const absolutePath = path.resolve("./");


const companySignupToken = async (req, res, next) => {
    try {
      const {company_name, email, mobile_number} = req.body;
    const companyInfo = {
      company_name,
      email,
      mobile_number,
    };
    
    const findCompany = await companyModel.findOne({
      where: { email: companyInfo.email },
    });
    if (findCompany) {
      res.status(400).json({ message: "Company already exists. Please login!" });
      return;
    }

    // Generate company signup token
    jwt.sign(companyInfo, jwtSecret, (error, token) => {
      if (error) {
        res.status(400).json({ message: "Validation error" });
      } else {
        req.token = token;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log(error);
  }
};

//log in token
const companyLoginToken = async (req, res, next) => {
  try {
    const { email } = req.body;
    const findCompany = await companyModel.findAll({
      where: { email },
      attributes: { exclude: ["password", "description"] }, // Exclude password and description from the query result
    });

    console.log(findCompany);
    if (!findCompany) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    const companyFound = findCompany[0];
    const { company_name, mobile_number, } = companyFound;
    const companyInfo = {
      company_name,
      email,
      mobile_number,
    };

    // Generate company login token
    jwt.sign(companyInfo, jwtSecret, (error, token) => {
      if (error) {
        console.log(error);
        res.status(400).json({ message: "Validation error" });
      } else {
        req.token = token;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Token verification
const verifyCompanyToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
try {
     const decodedToken = jwt.verify(token, jwtSecret)
    const companyInfo = decodedToken;
  const companyId = await companyModel.findOne({ companyInfo, attributes: ["id"] });
  if (companyId) {
    req.company_id = companyId.dataValues.id;
    next();
  }
  } catch (error) {
    console.log(error);
    res.status(403).json({message: "Failed to authenticate token!"})
  }
};

//middleware to upload logo
const uploadLogoMiddleware = (destination) => {
  const directory = path.join(absolutePath, destination);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, directory);
    },
    filename: function (req, file, cb) {
      const filename =
        file.fieldname + "_" + Date.now() + path.extname(file.originalname);
      cb(null, filename);
    },
  });

  const upload = multer({ storage });
  return upload;
};

export { companySignupToken, verifyCompanyToken, companyLoginToken, uploadLogoMiddleware };
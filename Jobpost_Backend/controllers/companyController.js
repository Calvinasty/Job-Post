import companyModel from "../models/companyModel.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

// Company register
const registerCompanyController = async (req, res) => {
  try {
    // Get company info
    const newCompany = req.body;
    const token = req.token;
    const password = newCompany.password;

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const uuid = uuidv4();
    const logo = req.file?.filename;
    newCompany["logo"] = logo;
    newCompany["password"] = hashPassword;
    newCompany["uuid"] = uuid;

    const addCompany = await companyModel.create(newCompany, { fields: ["id", "company_name", "password", "email", "mobile_number", "verification_method"] });
    const company = addCompany.dataValues;
    console.log(company);
    res.status(201).json({ message: "Company registered successfully!", token, company });
    return;
  } catch (error) {
    res.status(500).json({ message: "Failed to register company!" });
  }
};

// Company login
const companyLoginController = async (req, res) => {
  try {
    const { email } = req.body;
    const token = req.token;
    const company = req.body;

    // Check if company exists
    const findUser = await companyModel.findOne({where: { email:email }});
    if (!findUser) {
      return res.status(403).json({ message: "Company does not exist. Please register first!" });
    }
    res.status(201).json({ message: "company logged in!", token, company });
    return;
  } catch (error) {
    res.status(500).json({ message: "Failed to log in!" });
  }
};

// update company info
const updateCompanyInfo = async (req, res) => {
  try {
    const companyInfo = req.body;
    const logo = req.file?.filename;
    const company_id = req.company_id;
    companyInfo["logo"] = logo;
    console.log(companyInfo);

    const updateResult = await companyModel.update(companyInfo, { where: { id: company_id } });
    const findCompany = await companyModel.findAll({ where: { id: company_id } });
    res.status(201).json({ message: "Updated successfully!", findCompany })
  } catch (error) {
    res.status(400).json({ message: "failed to update!" });
}
}

export { registerCompanyController, companyLoginController, updateCompanyInfo };
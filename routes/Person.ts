import { Request, Response, Router } from "express";
import Person from "../models/person";
import PersonDataViewModel from "../viewmodels/PersonDataViewModel";

const router: Router = Router();

router.get('/data-persons', async (req: Request, res: Response) => {
    try{
        const data = await Person.find();
        const viewModel = data.map((person: Person) => new PersonDataViewModel(person));
        res.json(viewModel);
    }
    catch(error){
        res.status(500).json({message: error})
    }
})
module.exports = router;
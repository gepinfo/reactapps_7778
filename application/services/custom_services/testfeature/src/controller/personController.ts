import { Request, Response } from 'express';
import { personService } from '../service/personService';
import { CustomLogger } from '../config/Logger'
let person = new personService();

export class personController {
    
    constructor() { }
    
    public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    person.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personController.ts: Create');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    person.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personController.ts: GetAllValues');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    person.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into personController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from personController.ts: GetNounCreatedBy');
    })}


}
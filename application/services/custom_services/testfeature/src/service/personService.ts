import { Request, Response } from 'express';
import {personDao} from '../dao/personDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';







let person = new personDao();

export class personService {
    
    constructor() { }
    
    public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: Create')
     let  personData = req.body;
     person.Create(personData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: GetAllValues')
     
     person.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: GetNounCreatedBy')
     let  personData = { created_by: req.query.createdby };
     person.GetNounCreatedBy(personData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}
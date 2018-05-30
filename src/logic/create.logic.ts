import { Container } from 'typedi';
import {IPingDataModel} from '../model/data/ping-data.model';
import { IAbstractDbFactory } from '../model/infrastructure/db';

export function createLogic(model: IPingDataModel): Promise<{ result: IPingDataModel }> {
    const mongo: IAbstractDbFactory<IPingDataModel> = Container.get('mongo.concreate.factory');
    const result = mongo.create('example', model);
    return result;
}

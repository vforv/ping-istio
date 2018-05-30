import { Container } from 'typedi';
import {IPingDataModel} from '../model/data/ping-data.model';
import { IAbstractDbFactory } from '../model/infrastructure/db';

export function readOneLogic(modelId: string): Promise<{ result: IPingDataModel }> {

    const mongo: IAbstractDbFactory<IPingDataModel> = Container.get('mongo.concreate.factory');

    const result = mongo.findOne('example', modelId);

    return result;
}

import { Container } from 'typedi';
import {IPingDataModel} from '../model/data/ping-data.model';
import { IAbstractDbFactory } from '../model/infrastructure/db';

export function updateLogic(
    id: string,
    model: IPingDataModel,
): Promise<{ result: IPingDataModel }> {

    const mongo: IAbstractDbFactory<IPingDataModel> = Container.get('mongo.concreate.factory');

    const result = mongo.update('example', id, model);

    return result;
}

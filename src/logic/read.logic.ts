import { Container } from 'typedi/Container';
import {IPingDataModel} from '../model/data/ping-data.model';
import { IAbstractDbFactory } from '../model/infrastructure/db';

export function readLogic(
    size: number,
    prev?: string,
    next?: string,
): Promise<{ result: IPingDataModel[] }> {

    const mongo: IAbstractDbFactory<IPingDataModel> = Container.get('mongo.concreate.factory');

    const result = mongo.find('example', {}, size, prev, next);

    return result;
}

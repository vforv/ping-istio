import { Service } from 'typedi';
import { ICRUD } from '../model/infrastructure/crud';
import {IPingDataModel} from '../model/data/ping-data.model';
import { createLogic } from './create.logic';
import { updateLogic } from './update.logic';
import { deleteLogic } from './delete.logic';
import { readLogic } from './read.logic';
import { readOneLogic } from './read-one.logic';

@Service('ping.logic')
export class PingLogic implements ICRUD<IPingDataModel> {

    public create(model: IPingDataModel): Promise<{ result: IPingDataModel }> {

        return createLogic(model);
    }

    public read(size: number, prev?: string, next?: string): Promise<{ result: IPingDataModel[] }> {

        return readLogic(size, prev, next);
    }

    public readOne(id: string): Promise<{ result: IPingDataModel }> {

        return readOneLogic(id);
    }

    public update(
        id: string,
        model: IPingDataModel,
    ): Promise<{ result: IPingDataModel }> {

        return updateLogic(id, model);
    }

    public delete(modelId: string): Promise<{ result: IPingDataModel }> {

        return deleteLogic(modelId);
    }
}

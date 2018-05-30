import { IPingDataModel } from '../data/ping-data.model';

export interface IPingRepository {
    serviceMethod(id: string): Promise<{ result: IPingDataModel }>;
}

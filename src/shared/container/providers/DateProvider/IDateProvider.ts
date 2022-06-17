export interface dateTypes {
  unit?:
    | 'days'
    | 'months'
    | 'years'
    | 'hours'
    | 'minutes'
    | 'seconds'
    | 'milliseconds';
  value?: number;
  startDate?: Date;
  endDate?: Date;
  date?: Date;
  format?: string;
}

export interface IDateProvider {
  add({ date, value }: dateTypes): Date;
  dateNow(): Date;
  formatDate({ date, format }: dateTypes): string;
  compare({ startDate, endDate, unit }: dateTypes): number;
}

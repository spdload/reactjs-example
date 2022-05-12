
export type RentFiltersType = {
  filters: {
    airport_id: string;
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
    cost_from: string;
    cost_to: string;
    types: {
      [key: string]: number[] | [];
    }
    [ket: string]: string | {};
  };
};

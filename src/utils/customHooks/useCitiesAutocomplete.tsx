import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityListRequest, clearCities } from 'store/actions/cities';
import RootState from 'types/store';
import { TCity, TCityWithAirport } from 'types/store/trips';

type TCitiesList = 'cities_arrival' | 'cities_departure';

const transformForOptions = (cities: TCity[]) => {
  const newCities = cities.reduce((accum: TCityWithAirport[], city) => {
    const citiesWithAirport = city?.airports.map((airport) => {
     return {...city, value: `${city?.name}, ${city?.country_name}, ${airport.code}`, airport}; 
    });
    return citiesWithAirport ? [...accum, ...citiesWithAirport] : accum;
  }, []);
  return newCities;
};

const useCitiesAutocomplete = () => {
  const dispatch = useDispatch();

  const [departureCity, setDepartureCity] = useState<TCityWithAirport>(null); 
  const [arrivalCity, setArrivalCity] = useState<TCityWithAirport>(null);  
  const [departureValue, setDepartureValue] = useState('');  
  const [arrivalValue, setArrivalValue] = useState('');  
  const [isCitiesReplased, setIsCitiesReplased] = useState(false);  
  
  const {
    cities_arrival,
    cities_departure,
  } = useSelector((state: RootState) => state.cities);
  const onSearch = (searchText: string, type: TCitiesList) => {
    dispatch(getCityListRequest({params: searchText ? searchText : undefined, type}));
  };

  const citiesDeparture = useMemo(() => transformForOptions(cities_departure), [cities_departure]);
  const citiesArrival = useMemo(() => transformForOptions(cities_arrival), [cities_arrival]);
  
  const onSelect = (option: TCityWithAirport, type: TCitiesList) => {
    if (type === 'cities_arrival') {
      setArrivalCity(option);
    } else {
      setDepartureCity(option);
    }
  };
  const onChange = (value: string, type: TCitiesList) => {
    if (type === 'cities_arrival') {
      setArrivalValue(value);
      setArrivalCity(null);
    } else {
      setDepartureValue(value);
      setDepartureCity(null);
    }
  };

  const handleReplaceCities = () => {
    setDepartureCity(arrivalCity);
    setArrivalCity(departureCity);
    setDepartureValue(arrivalValue);
    setArrivalValue(departureValue);
    setIsCitiesReplased(p => !p);
  };

  const clear = () => {
    setDepartureCity(null);
    setArrivalCity(null);
    setDepartureValue('');
    setArrivalValue('');
    setIsCitiesReplased(false);
    dispatch(clearCities());
  };

  useEffect(() => {
    

    return () => {
      clear();
    };
    // eslint-disable-next-line
  }, []);

  return {
    departureCity,
    arrivalCity,
    departureValue,
    arrivalValue,
    citiesDeparture: isCitiesReplased ? citiesArrival : citiesDeparture,
    citiesArrival: isCitiesReplased ? citiesDeparture : citiesArrival,
    onSelect,
    onChange,
    onSearch,
    handleReplaceCities,
    clear
  };
};

export default useCitiesAutocomplete;

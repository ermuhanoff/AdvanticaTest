import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
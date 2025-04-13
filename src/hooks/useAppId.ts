import { useLocation } from 'react-router-dom';

export const useAppId = (): string => {
    const location = useLocation();

    return location.pathname.substring(1) || 'default';
}

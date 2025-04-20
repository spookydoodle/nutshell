import { useLocation } from 'react-router-dom';

// TODO: Should not be needed when all slideshows are classes
export const useAppId = (): string => {
    const location = useLocation();

    return location.pathname.substring(1) || 'default';
}

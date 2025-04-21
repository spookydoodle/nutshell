
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import * as Types from '../types';

export const deviceIcons: { [key in Types.Device]: typeof PhoneAndroidIcon } = {
    mobile: PhoneAndroidIcon,
    desktop: ComputerIcon,
};

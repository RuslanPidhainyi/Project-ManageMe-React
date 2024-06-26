import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import "../CommonStyle/style.scss"
import "../../../../../Style/font.css"
import { fakeDbUser } from '../../../../../Data/FakeDataUser/FakeDataUser';

export const ProfileSection = () => {

   const { userFullname } = fakeDbUser;

   return (
      <div className="item">
         <PersonRoundedIcon className="icon" />
         <span><b>{`${userFullname}`}</b></span>
      </div>
   )
}

import "./style.scss"
import "../../Style/font.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const SearchFor = () => {
   return (
      <div className="container-​​search-for-a-project">
         <div className="​​search-for-a-project">
            <input
               type="text"
               className="city-​​search"
               placeholder=" Project search"
            />
            <button className="btn-add">
               <i className="material-symbols-rounded">
                  <SearchRoundedIcon />
               </i>
            </button>

         </div>
      </div >
   )
}

import { ButtonCircle } from '@/app/utils/ButtonCircle'
import { filterSearch, resetSearch } from '@/lib/features/searchSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/hooks';
import { useDispatch } from 'react-redux';

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


export default function FilterByLetter() {
  const searchValue = useAppSelector(state => state.searchReducer.value)
  const dispatch = useDispatch()
  const randomSelected = searchValue === "" ? "bg-primary-color text-text-dark font-bold" : "bg-secondary-color-light"

  return (
    <div className='flex gap-2 items-center text-sm flex-wrap'>
        <span>Filtra por letra</span>
        <div className='flex gap-2 overflow-x-scroll lg:overflow-x-hidden flex-nowrap pb-3 lg:pb-0'>
            <button onClick={()=>dispatch(resetSearch())} className={`${randomSelected} p-2 height-[40px] rounded-full`}>Aleatorio</button>
            {abc.map((letter, i) => (
                <div key={i}>
                  <ButtonCircle
                    onClick={()=>dispatch(filterSearch(letter))}
                    selected={searchValue && searchValue.charAt(0).toLowerCase() === letter ? true : false}
                  >{letter}</ButtonCircle>
                </div>
            ))}
        </div>
    </div>
  )
}

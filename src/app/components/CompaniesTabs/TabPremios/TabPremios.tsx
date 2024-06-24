import LogoCannes from '../../../../../public/img/cannes.png'
import Logo2 from '../../../../../public/img/award_2.png'

const awards = [
    {
        name: "Cannes Lions",
        year: "2024",
        image: LogoCannes.src
    },

    {
        name: "Cannes Lions",
        year: "2024",
        image: LogoCannes.src
    },

    {
        name: "Cannes Lions",
        year: "2024",
        image: LogoCannes.src
    },

    {
        name: "D&AD",
        year: "2024",
        image: Logo2.src
    },

    {
        name: "D&AD",
        year: "2024",
        image: Logo2.src
    },

    {
        name: "D&AD",
        year: "2024",
        image: Logo2.src
    }
]

export default function TabPremios() {
  return (
    <article>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 mt-10 max-w-[460px] mx-auto'>
            {awards.map((item, i) => (
                <div key={i} className='text-center space-y-3'>
                    <img className='mx-auto w-12' src={item.image} alt={item.name} title={item.name} />
                    <h5 className='text-[#C7C7DF] text-xs'>{item.name}</h5>
                </div>
            ))}
        </div>
    </article>
  )
}

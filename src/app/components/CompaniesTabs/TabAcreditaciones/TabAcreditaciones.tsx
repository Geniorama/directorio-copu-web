import LogoAccreditation from '../../../../../public/img/accreditation.png'

const accreditations = [
    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },

    {
        name: "ISO 9001",
        year: "2024",
        image: LogoAccreditation.src
    },
]

export default function TabAcreditaciones() {
  return (
    <article>
        <div className='grid grid-cols-3 gap-10 md:gap-20 mt-10 max-w-[460px] mx-auto'>
            {accreditations.map((item, i) => (
                <div key={i} className='text-center space-y-3'>
                    <img className='mx-auto w-12' src={item.image} alt={item.name} title={item.name} />
                    <h5 className='text-[#C7C7DF] text-xs'>{item.name}</h5>
                </div>
            ))}
        </div>
    </article>
  )
}

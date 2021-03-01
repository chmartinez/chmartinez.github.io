import type { Basics } from './types'

function HeaderInfo({
    data: { name, label, location, email, phone, profiles },
}: {
    data: Basics
}) {
    return (
        <header id='header' className='clear'>
            <div>
                <h1 className='name'>{name}</h1>
                <h2 className='label'>{label}</h2>
            </div>

            <span className='location'>
                <span className='address'>
                    {location.address ? `${location.address}, ` : ' - '}
                </span>
                <span className='postalCode'>
                    {location.postalCode ? `${location.postalCode}, ` : ' - '}
                </span>
                <span className='city'>{`${location.city}, `}</span>
                <span className='region'>{`${location.region} `}</span>
                <span className='countryCode'>{location.countryCode}</span>
            </span>

            <div id='contact'>
                <div className='email'>
                    <span className='fa fa-envelope-o'></span>
                    <a href={`'mailto:${email}'`}>{email}</a>
                </div>
                <div className='phone'>
                    <span className='fa fa-mobile'></span>
                    {phone}
                </div>
            </div>
            <div id='profiles'>
                {profiles.map((profile) => (
                    <div className='item' key={profile.url}>
                        <div className='username'>
                            <span
                                className={`fa fa-${profile.network} ${profile.network} social'`}
                            ></span>
                            <span className='url'>
                                <a href={profile.url}>{profile.username}</a>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </header>
    )
}

export default HeaderInfo
